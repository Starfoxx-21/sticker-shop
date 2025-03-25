import { PRICE_ID_PIXEL, PRICE_ID_WITCH, STRIPE_API_KEY } from '$env/static/private';
import { PUBLIC_FRONTEND_URL } from '$env/static/public';
import { json } from '@sveltejs/kit';
import Stripe from 'stripe';

const stripe = new Stripe(STRIPE_API_KEY);

const priceLookUp = {
	pixel: PRICE_ID_PIXEL,
	witch: PRICE_ID_WITCH
};

export async function POST(event) {
	try {
		const { productId } = await event.request.json();

		const priceId = priceLookUp[productId];

		if (!priceId) {
			return json({ error: 'Invalid product' }, { status: 400 });
		}

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			line_items: [
				{
					price: priceId,
					quantity: 1
				}
			],
			mode: 'payment',
			success_url: `${PUBLIC_FRONTEND_URL}/checkout/success`,
			cancel_url: `${PUBLIC_FRONTEND_URL}/checkout/failure`,
			metadata: {
				productId: productId
			  }
		});

		return json({ sessionId: session.id });
	} catch (error) {
		return json({ error }, { status: 500 });
	}
}
