(function() {
  'use strict';

  /* @ngInject */
  function configureSlides(slidesConfig) {
    slidesConfig.slides = [
      'title',

      'intro/about-me',
      'intro/about-us',
      'intro/me-and-security',

      'intro/aim',
      'intro/breach-origin',
      'intro/technologies',
      'intro/understand',
      'intro/we-and-security',
      'intro/getting-information',
      'intro/approaches',

      'blackbox-testing/title',
      'blackbox-testing/overview',
      'blackbox-testing/encoding',
      'blackbox-testing/kali-linux',
      'blackbox-testing/proxy',
      'blackbox-testing/zap-firefox',
      'blackbox-testing/telnet',
      'blackbox-testing/hands-on',

      'blackbox-testing/analyse/title',
      'blackbox-testing/analyse/overview',
      'blackbox-testing/analyse/technologies',
      'blackbox-testing/analyse/application',
      'blackbox-testing/analyse/input',
      'blackbox-testing/analyse/files-folders',
      'blackbox-testing/analyse/automate',
      'blackbox-testing/analyse/whole-purpose',
      'blackbox-testing/analyse/hands-on',
      'blackbox-testing/analyse/for-developers',

      'blackbox-testing/access-handling/title',
      'blackbox-testing/access-handling/overview',
      'blackbox-testing/access-handling/auth-procedure',
      'blackbox-testing/access-handling/auth-hands-on',
      'blackbox-testing/access-handling/session-procedure',
      'blackbox-testing/access-handling/session-hands-on',
      'blackbox-testing/access-handling/access-procedure',
      'blackbox-testing/access-handling/access-hands-on',
      'blackbox-testing/access-handling/automate',
      'blackbox-testing/access-handling/for-developers',

      'blackbox-testing/input-handling/title',
      'blackbox-testing/input-handling/overview',
      'blackbox-testing/input-handling/attacks',
      'blackbox-testing/input-handling/automate',
      'blackbox-testing/input-handling/hands-on',
      'blackbox-testing/input-handling/for-developers',

      //'blackbox-testing/logic-flaws/title',
      //'blackbox-testing/logic-flaws/hands-on',

      'code-review/title',
      'code-review/overview',
      'code-review/advantages',
      'code-review/interesting-parts',
      'code-review/tools',
      'code-review/example-xss',
      'code-review/example-sql-injection',
      'code-review/example-path-traversal',
      'code-review/example-comments',
      //'code-review/hands-on',

      'summary',
      'end'
    ];

    slidesConfig.slideTemplatePrefix= '@@cacheBustingDir/slides/';
    slidesConfig.slideTemplateSuffix = '.html';

    slidesConfig.masters = {
      'regular': '@@cacheBustingDir/masters/regular.html',
      'section-title': '@@cacheBustingDir/masters/section-title.html'
    };
  }

  var module = angular.module('app', [
    'app.templates',
    'w11k.slides',
    'w11k.slides.template',
    'ngSanitize',
    'ui.bootstrap'
  ]);

  // set presentation mode on startup
  module.run(function (SlidesService) {
    SlidesService.setMode('screen');
  });

  module.config (configureSlides);
}());
