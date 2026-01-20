import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// See below for an explanation of these options
			config: undefined,
			platformProxy: {
				configPath: undefined,
				environment: undefined,
				persist: undefined
			},
      paths: {
        base: 'front'
      },
			fallback: 'plaintext',
			routes: {
				include: ['/mods', '/mods/*','/user/*'],
				exclude: ['<all>']
			}
		})
	}
};

export default config;