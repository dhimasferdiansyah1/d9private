<script lang="ts">
	export let title: string;
	export let content: string;
	export let id: string;

	let isOpen = false;

	function toggleAccordion() {
		isOpen = !isOpen;
	}
</script>

<div class="accordion-item">
	<button
		class="accordion-header"
		on:click={toggleAccordion}
		aria-expanded={isOpen}
		aria-controls={id}
		id="accordion-button-{id}"
	>
		<span class="accordion-title">{title}</span>
		<svg
			class="accordion-icon"
			class:rotate-180={isOpen}
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			viewBox="0 0 16 16"
		>
			<path
				fill-rule="evenodd"
				d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
			/>
		</svg>
	</button>
	<div
		class="accordion-content"
		class:hidden={!isOpen}
		{id}
		aria-labelledby="accordion-button-{id}"
	>
		<div class="accordion-content-inner">
			{@html content}
		</div>
	</div>
</div>

<style>
	.accordion-item {
		border-bottom: 1px solid #e5e7eb;
	}

	.accordion-header {
		width: 100%;
		text-align: left;
		padding: 1rem;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: white;
		border: none;
		font-size: 1rem;
		font-weight: 600;
	}

	.accordion-header:hover {
		background-color: #f9fafb;
	}

	.accordion-icon {
		transition: transform 0.2s ease-in-out;
	}

	.accordion-content {
		padding: 1rem;
	}

	.accordion-content-inner {
		padding: 1rem;
	}

	.rotate-180 {
		transform: rotate(180deg);
	}

	.hidden {
		display: none;
	}
</style>
