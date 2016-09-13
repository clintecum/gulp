(function ()
{
    'use strict';

    angular
        .module('app.blog', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.blog', {
                url    : '/blog',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/blog/blog.html',
                        controller : 'BlogController as vm'
                    }
                },
                resolve: {
                    BlogData: function (msApi)
                    {
                        return msApi.resolve('blog@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/blog');

        // Api
        msApiProvider.register('blog', ['app/data/blog/blog.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'BLOG',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.blog', {
            title    : 'Blog',
            icon     : 'icon-tile-four',
            state    : 'app.blog',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'BLOG.BLOG_NAV',
            weight   : 1
        });
    }
})();