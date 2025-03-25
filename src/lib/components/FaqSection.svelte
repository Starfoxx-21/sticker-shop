<script>
	import { FaqItem, Button } from '$components';

	const faqs = [
		{
			question: 'What will I get from your products?',
			answer:
				'My digital products, such as stickers and artwork, are designed to add a unique and artistic flair to your life. You’ll find a blend of cute, goth, and witchy aesthetics, perfect for expressing your personal style. Whether you’re looking for something to decorate your laptop, phone, or even your home, my products offer you high-quality digital designs to make your space more fun and creative.'
		},
		{
			question: 'Who are your products for?',
			answer:
				"My products are perfect for anyone who loves cute, goth, witchy, or pixel art styles. If you're into unique digital artwork that stands out and adds a touch of creativity to your daily life, these products are for you. Whether you’re an art lover, a digital collector, or just looking for something special to add to your collection, you’ll find something here."
		},
		{
			question: 'How much do your products cost?',
			answer:
				"My digital products are reasonably priced, with individual items starting as low as $5. Once purchased, you’ll gain instant access to the files, which you can print or use digitally however you like. Whether you're buying a single sticker design or a full collection, you'll find that the value far exceeds the price."
		},
		{
			question: 'Are your products customizable?',
			answer:
				"Some of my products, like digital artwork, can be customized upon request! If you're looking for a unique design or a variation of something you see in my store, feel free to reach out. I love working with customers to create something special and personalized for you."
		},
		{
			question: "Can I get a refund if I'm not happy with my purchase?",
			answer:
				"Absolutely! If for any reason you're not satisfied with your purchase, I offer a 7-day refund policy. Just contact me within 7 days of your purchase, and I’ll make sure to resolve any issues or provide you with a full refund—no questions asked."
		}
	];

	let selectedFaqIndex = $state(-1);

	function clickFaq(faqIndex) {
		if (selectedFaqIndex === faqIndex) {
			selectedFaqIndex = -1;
		} else {
			selectedFaqIndex = faqIndex;
		}
	}
</script>

<section class="page-section">
	<h2 class="mb-l">Frequently asked questions</h2>
	<div class="faq-container">
		{#each faqs as faq, index}
			<FaqItem {faq} isExpanded={index === selectedFaqIndex} onclick={() => clickFaq(index)} />
		{/each}
	</div>
	<div class="additional-info mt-m">
		<p class="mt-m">Any other questions?</p>
		<a href="https://github.com/Starfoxx-21">
			<svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5808 20.2773 21.0498 21.7438 19.0074C23.2103 16.9651 23.9994 14.5143 24 12C24 5.37 18.63 0 12 0Z"
				/>
			</svg> Hit me up on GitHub</a
		>
	</div>
</section>

<style>
	a {
		background-color: transparent;
		color: black;
		text-transform: none;
		&:hover {
			color: dimgrey;
		}
	}

	.github-icon {
		height: 28px;
		width: 28px;
		color: gray;
	}

	.additional-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: gray;
		gap: 2px;
	}

	.additional-info a {
		text-decoration: underline;
		display: flex;
		align-items: center;
		gap: 8px;
	}
</style>
