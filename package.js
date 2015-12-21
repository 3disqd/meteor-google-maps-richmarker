Package.describe({
  name: 'alisalaah:google-maps-richmarker',
  summary: 'Google Maps Javascript API v3 with RichMarker',
  version: '1.2.0',
  git: 'https://github.com/alisalaah/meteor-google-maps-richmarker.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use([
    'templating',
    'reactive-var',
    'underscore']);
  api.addFiles([
    'google-maps.html',
    'google-maps.js',
	'richmarker.js'], 'client');
  api.export('GoogleMaps', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dburles:google-maps');
  api.addFiles('google-maps-tests.js');
});
