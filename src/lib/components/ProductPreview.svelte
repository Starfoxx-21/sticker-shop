<script>
	const products = [
  {
    title: 'Pixel Witch Stickers',
    strapline: 'Cute, Gothic, and Magical Stickers for Every Mood',
    excerpt: 'Add a touch of pixel magic to your everyday items with these cute and goth-inspired stickers. Each design combines witchy vibes with retro pixel art, making them perfect for laptops, phone cases, journals, and more. Whether you’re into celestial designs, potions, or pixel witches, there’s something here for every magical soul. These stickers are made from high-quality materials to ensure durability and vibrant colors that will last. Perfect for gifting or treating yourself, these pixel witch stickers will bring enchantment to all your belongings!'
  },
  {
    title: 'Spellbinding Digital Art Prints',
    strapline: 'Pixel Perfection Meets Witchy Charm',
    excerpt: 'Transform your space with digital art prints that blend the mystical with the nostalgic. From pixelated potions to dark, witchy landscapes, these prints will fill your home with charm and magic. These downloadable artworks are perfect for those looking to add an enchanting touch to their walls. With a mix of cute and goth elements, you can print them out in any size that fits your style. Ideal for creating your own spooky sanctuary or for gifting to a fellow magic lover!'
  },
  {
    title: 'Witchy Digital Planners',
    strapline: 'Organize Your Life with a Touch of Magic',
    excerpt: 'Stay organized in the most magical way with these witchy-themed digital planners. Whether you\'re a witch in training or simply someone who loves a little extra magic in their life, these planners will help you stay on top of tasks, goals, and dreams. With customizable pages, mystical designs, and easy-to-use formats, these planners bring style and organization to your daily routine. Available in digital formats that you can use on tablets or phones, these planners are perfect for bringing a bit of spellbinding organization to your life.'
  },
  {
    title: 'Custom Pixel Art Portraits',
    strapline: 'Your Magical Self, Captured in Pixels',
    excerpt: 'Want to see yourself as a cute pixelated witch or gothic character? These custom pixel art portraits are the perfect way to immortalize your style in a unique and magical way. Simply provide a photo or description, and I’ll transform it into a pixel art version with witchy or goth elements. These portraits make great gifts for yourself or someone special, and they’re a fun way to celebrate your magical side in a modern, retro style!'
  },
  {
    title: 'Gothic Digital Stickers & Icons',
    strapline: 'Perfect for Messaging, Journaling, and Personalizing Your Devices',
    excerpt: 'Spice up your digital space with these gothic-themed digital stickers and icons. Perfect for your phone, laptop, or social media, these designs add an edgy, yet cute, touch to your digital life. Whether you\'re looking to decorate your messages, create unique social media posts, or personalize your devices, these stickers will bring your digital world to life. Available as downloadable PNG files, they’re easy to use and share with friends or on your personal blog.'
  }
];

    let selectedProductNumber = $state(0);
    let selectedProduct = $derived(products[selectedProductNumber]);
</script>

<section class="page-section default-margin">
	<h2 class="mb-l">What you can get</h2>
	<div class="product-container">
		<ul>
            {#each products as product, index}
			<li>
				<button
					class="product-title"
                    class:selected-product-title={selectedProductNumber === index}
					aria-controls={`product-info-${index + 1}`}
					aria-expanded={selectedProductNumber === index}
                    onclick={() => selectedProductNumber=index}
				>
					<h3>Feature {index + 1}: {product.title}</h3>
				</button>
			</li>
            {/each}
		</ul>
		<div class="product-info">
			<h3 class="product-strapline italic mb-s">{selectedProduct.strapline}</h3>
			<p>{selectedProduct.excerpt}</p>
		</div>
	</div>
</section>

<style>
	.product-container {
		display: flex;
		justify-content: space-between;
	}

	.product-container ul {
		width: 40%;
	}

	.product-info {
		width: 55%;
		text-align: justify;
	}

	.product-title {
		border-bottom: 1px solid grey;
		width: 100%;
		display: block;
		padding: 12px;
		text-align: left;
	}

	.selected-product-title {
		background-color: black;
		border: none;
		color: white;
		box-shadow:
			0 4px 6px rgba(0, 0, 0, 0.1),
			0 1px 3px rgba(0, 0, 0, 0.08);
	}
</style>
