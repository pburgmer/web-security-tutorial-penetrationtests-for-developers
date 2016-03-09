(function() {
  'use strict';

  /* @ngInject */
  function configureSlides(slidesConfig) {
    slidesConfig.slides = [
      'title',
      'about-me',
      'about-us',

      'end'
    ];

    slidesConfig.slideTemplatePrefix= '@@cacheBustingDir/slides/';
    slidesConfig.slideTemplateSuffix = '.html';

    slidesConfig.masters = {
      'regular': '@@cacheBustingDir/masters/regular.html',
      'section-title': '@@cacheBustingDir/masters/section-title.html',
      'section-overview': '@@cacheBustingDir/masters/section-overview.html'
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
