Package.describe({
  summary: "Url utilities and support for compiling a url into a regular expression.",
  version: "1.0.8",
  name: "iron:url",
  git: "https://github.com/eventedmind/iron-url"
});

Package.onUse(function (api) {
  api.use('underscore@1.0.0');

  api.use('iron:core@1.0.7');
  api.imply('iron:core');

  api.addFiles('lib/compiler.js');
  api.addFiles('lib/url.js');
});

Package.onTest(function (api) {
  api.use('iron:url');
  api.use('tinytest');
  api.use('test-helpers');
  api.addFiles('test/url_test.js');
});
