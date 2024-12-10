<script lang="ts">
	export let adminUsername: string;
	export let adminPhotoUrl: string;
	export let telegramLink: string;
</script>

<div class="rounded-lg border border-gray-300 bg-white p-4">
	<div class="flex items-center">
		<img src={adminPhotoUrl} alt="Admin Profile" class="mr-4 h-16 w-16 rounded-full object-cover" />
		<div>
			<h3 class="text-lg font-semibold text-gray-900">Admin</h3>
			<p class="text-gray-600">@{adminUsername}</p>
		</div>
	</div>
	<div class="mt-4">
		<a
			href={telegramLink}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center justify-center rounded-md bg-[#560BAD] px-4 py-2 font-medium text-white hover:bg-opacity-90"
		>
			<img src="/telegram.webp" alt="Telegram Icon" class="mr-2 h-5 w-5" />
			Chat Admin
		</a>
	</div>
</div>
