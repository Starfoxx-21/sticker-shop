<script>
	import { HeroSection, Button } from '$components';
</script>

<HeroSection>
	<h1 class="mb-l">
		Error while <br />
		<span>purchasing</span>
	</h1>
	<p class="light-grey mb-m">
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet fuga consequuntur totam
		ratione fugit facere rerum consequatur dolores illo quae doloribus autem, quo recusandae cumque
		tenetur a repellendus ullam! Nesciunt.
	</p>
	<p class="light-grey mb-m">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corporis molestiae numquam est
		ducimus magnam ullam dicta laudantium, aperiam harum autem mollitia tempore sed, beatae
		aspernatur nulla at vel impedit.
	</p>
	<p class="light-grey mb-l">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas distinctio aliquid, quibusdam
		adipisci velit harum.
	</p>
	<div class="button-container">
		<Button>Try again</Button>
		<a href="/">Home</a>
	</div>
</HeroSection>

<style>
	.button-container {
		display: flex;
		flex-direction: column;
		max-width: max-content;
		margin: auto;
		gap: 30px;
	}
</style>
