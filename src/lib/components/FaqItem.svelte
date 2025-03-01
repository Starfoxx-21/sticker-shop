<script>
	let { faq, isExpanded, onclick } = $props();
</script>

<button class="container" class:container-expanded={isExpanded} {onclick}>
	<div class="question-and-answer">
		<p class="question mb-s">{faq.question}</p>
		<p class="answer">{faq.answer}</p>
	</div>
	<svg class="chevron-icon" viewBox="0 0 16 16" fill="currentColor">
		<path
			d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
		/>
	</svg>
</button>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 12px 0;
		border-bottom: 1px solid grey;
		text-align: left;
		width: 100%;
	}

	.chevron-icon {
    flex-shrink: 0;
		width: 20px;
		height: 20px;
    transition: transform 0.3s linear;
	}

	.question-and-answer {
		padding-right: 150px;
		flex-grow: 1;
	}

	.answer {
		max-height: 0;
		overflow: hidden;
		opacity: 0;
		transition:
			max-height 0.3s ease-out,
			opacity 0.3s ease-out;
	}

	.question {
		font-weight: 600;
	}

	.container-expanded svg {
		transform: rotate(180deg);
	}

	.container-expanded .answer {
		max-height: unset;
		opacity: 1;
	}
</style>
