<script lang="ts">
	export let adminUsername: string;
	export let adminPhotoUrl: string;
	export let telegramLink: string;
</script>

<div class="rounded-lg border border-gray-200 bg-white p-6">
	<div class="mb-4 flex items-center">
		<img
			src={adminPhotoUrl}
			alt="Admin Profile"
			class="mr-4 h-16 w-16 rounded-full object-cover shadow"
			loading="lazy"
		/>
		<div>
			<h3 class="text-lg font-semibold text-gray-900">Admin</h3>
			<p class="text-sm text-gray-600">@{adminUsername}</p>
		</div>
	</div>
	<a
		href={telegramLink}
		target="_blank"
		rel="noopener noreferrer"
		class="inline-flex w-full items-center justify-center rounded-md bg-[#560BAD] px-4 py-2 font-medium text-white transition duration-200 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#560BAD] focus:ring-opacity-50"
	>
		<img src="/telegram.webp" alt="Telegram Icon" class="mr-2 h-5 w-5" />
		Chat Admin
	</a>
</div>
