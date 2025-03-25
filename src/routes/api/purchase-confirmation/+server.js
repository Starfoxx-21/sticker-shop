import { json } from '@sveltejs/kit';
import { SENDGRID_API_KEY, STRIPE_API_KEY, STRIPE_WEBHOOK_SECRET } from '$env/static/private';
import fs from 'fs';
import sgMail from '@sendgrid/mail';
import path from 'path';
import Stripe from 'stripe';

const stripe = new Stripe(STRIPE_API_KEY);

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }) {
	const body = await request.text();
	const signature = request.headers.get('stripe-signature') || '';

	let stripeEvent;

	try {
		stripeEvent = stripe.webhooks.constructEvent(body, signature, STRIPE_WEBHOOK_SECRET);

		const checkoutSession = stripeEvent.data.object;

		const customerEmail = checkoutSession.customer_details.email;
		const customerName = checkoutSession.customer_details.name;
		const productId = checkoutSession.metadata.productId;

		const pdfPath = path.resolve('static', 'pdfs', `${productId}_stickers.pdf`);
		const pdfBuffer = fs.readFileSync(pdfPath);
		const pdfBase64 = pdfBuffer.toString('base64');

		const message = {
			to: customerEmail,
			from: 'c.anastasiadou@hotmail.com',
			subject: 'Your Purchase Confirmation - Starfoxx',
			html: `<h1>Thank You for Your Purchase!</h1>
		<p>Dear ${customerName},</p>
		<p>I appreciate your purchase of the <strong>${productId} stickers</strong>.
		<p><strong>What happens next?</strong></p>
		<ul>
		  <li>You will find your stickers attached to this email. Please download and save it for future reference.</li>
		  <li>A separate purchase confirmation has been sent to your email as well.</li>
		  <li>If you have any questions or need further assistance, don't hesitate to reach out at xxx.</li>
		</ul>
		<p>Thank you once again for choosing my stickers!</p>
		<p>Best regards,<br/>Starfoxx</p>`,
			attachments: [
				{
					content: pdfBase64,
					filename: `${productId}_stickers.pdf`,
					type: 'application/pdf',
					disposition: 'attachment'
				}
			]
		};

		try {
			await sgMail.send(message);

			return json({ message: 'Email sent successfully' });
		} catch (error) {
			console.error('Error sending email:', error);
			if (error.response) {
				console.error('SendGrid error response:', error.response.body);
			}
			throw new Error('Failed to send email');
		}
	} catch (error) {
		console.error('⚠️ Webhook signature verification failed.', error.message);
		console.error('Error occurred:', error.message);
		return json({ error: error.message }, { status: 500 });
	}
}
