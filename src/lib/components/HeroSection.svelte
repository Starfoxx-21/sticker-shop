<script>
	import witchStickers from '$assets/witch_stickers.png';
	import pixelStickers from '$assets/pixel_stickers.png';
	import Button from './Button.svelte';

	let { children } = $props();
</script>

<section class="hero">
	<div class="hero-showcase text-center bold">
		<h1 class="purple">Enchant Your World,</h1>
		<h1 class="purple mb-xs">One Pixel at a Time!</h1>
		<h4 class="italic semi-bold">Whimsical pixels and witchy charm—stick it, spell it, love it!</h4>
		<img class="witch-stickers" src={witchStickers} alt="witch tickers" />
		<img class="pixel-stickers" src={pixelStickers} alt="pixel stickers" />
	</div>
	<div class="hero-text white text-center">
		{#if children}
			{@render children()}
		{:else}
			<h2>Magical, pixel-perfect creations</h2>
			<h2 class="mb-m">for the modern mystic.</h2>
			<p class="light-grey mb-l">
				Spellbinding designs made to enchant. Unleash your inner magic! Stick, decorate, and add a
				little magic to your world!
			</p>
			<div class="button-container">
				<Button productId="pixel">Purchase <span class="pixel">pixel</span> stickers for 10$</Button
				>
				<Button productId="witch">Purchase <span class="witch">witch</span> stickers for 15$</Button
				>
			</div>
		{/if}
	</div>
</section>

<style>
	.hero {
		display: flex;
		height: 100vh;
		overflow-y: hidden;
	}

	.hero-showcase {
		position: relative;
		width: 50%;
		padding: 100px 16px 0 16px;
		background: linear-gradient(135deg, #e2cbff, #e2cbff 25%, #deeaff 50%, #ece5ff 75%, #927bce);
	}

	.hero-text {
		padding: 100px 5%;
		width: 50%;
		background-color: black;
	}

	.witch-stickers {
		position: absolute;
		right: 2%;
		bottom: 0;
		width: 65%;
		transform: translateY(30%);
	}

	.pixel-stickers {
		position: absolute;
		width: 35%;
		bottom: 0;
		right: 52%;
		transform: translateY(25%);
	}

	.button-container {
		display: flex;
		flex-direction: column;
		max-width: max-content;
		margin: auto;
		gap: 30px;
	}

	.pixel {
		color: aqua;
		text-shadow: 1px 1px 1px gray;
	}

	.witch {
		color: rebeccapurple;
		text-shadow: 1px 1px 1px gray;
	}
</style>
