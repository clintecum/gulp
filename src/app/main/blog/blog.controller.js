(function ()
{
    'use strict';

    angular
        .module('app.blog')
        .controller('BlogController', BlogController);

    /** @ngInject */
    function BlogController(BlogData)
    {
        var vm = this;

        // Data
        vm.helloText = BlogData.data.helloText;

        // Methods

        //////////
    }
})();
