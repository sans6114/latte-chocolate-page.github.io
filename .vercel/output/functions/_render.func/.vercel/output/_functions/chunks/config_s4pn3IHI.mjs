const astroConfig = {"base":"/","root":"file:///C:/Users/PC/Desktop/latte-chocolate-page/latte-page/","srcDir":"file:///C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/","build":{"assets":"_astro"},"markdown":{"shikiConfig":{"langs":[]}}};
const ecIntegrationOptions = {};
let ecConfigFileOptions = {};
try {
	ecConfigFileOptions = (await import('./ec-config_CzTTOeiV.mjs')).default;
} catch (e) {
	console.error('*** Failed to load Expressive Code config file "file:///C:/Users/PC/Desktop/latte-chocolate-page/latte-page/ec.config.mjs". You can ignore this message if you just renamed/removed the file.\n\n(Full error message: "' + (e?.message || e) + '")\n');
}

export { astroConfig, ecConfigFileOptions, ecIntegrationOptions };
