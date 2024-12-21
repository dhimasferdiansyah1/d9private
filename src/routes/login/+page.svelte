<script>
	let username = '';
	let password = '';

	function handleSubmit() {
		// Logika login di sini (misalnya, validasi, permintaan API)
		console.log('Username:', username);
		console.log('Password:', password);
		// Reset form setelah submit
		username = '';
		password = '';
	}
</script>

<div class="flex min-h-screen items-center justify-center bg-zinc-900">
	<div class="w-96 rounded-lg bg-zinc-800 p-8 shadow-md">
		<h2 class="mb-6 text-center text-2xl font-bold text-white">Login</h2>

		<form on:submit|preventDefault={handleSubmit}>
			<div class="mb-4">
				<label for="username" class="mb-2 block text-sm font-bold text-gray-300">Username</label>
				<input
					type="text"
					id="username"
					bind:value={username}
					class="w-full rounded-lg border border-zinc-600 bg-zinc-700 px-3 py-2 text-white outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500"
					placeholder="Masukkan username"
					required
				/>
			</div>

			<div class="mb-6">
				<label for="password" class="mb-2 block text-sm font-bold text-gray-300">Password</label>
				<input
					type="password"
					id="password"
					bind:value={password}
					class="w-full rounded-lg border border-zinc-600 bg-zinc-700 px-3 py-2 text-white outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500"
					placeholder="Masukkan password"
					required
				/>
			</div>

			<button
				type="submit"
				class="w-full rounded-lg bg-white px-6 py-2 font-semibold text-zinc-900 transition duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
			>
				Login
			</button>
		</form>
	</div>
</div>
