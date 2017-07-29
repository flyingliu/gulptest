var loadCSS = function(config) {
    var head = document.getElementsByTagName("head")[0];

    if (config.content) {
        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) { // for IE 
            style.styleSheet.cssText = config.content;
        } else {
            style.innerHTML = config.content;
        }
        head.appendChild(style);
    } else if (config.url) {
        var link = document.createElement('link');

        link.href = config.url;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    }
};

require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/3.2.1/jquery.min",
        "vue": "https://cdn.bootcss.com/vue/2.4.2/vue.min",
        "app": "js/app"
    }
});


require(["jquery", "vue", "app"], function($, Vue, App) {
    console.log("App", App);
    $(function() {
        var app = new Vue({
            el: "#app",
            data: {},
            components: {
                'my-component': App
            }

        });
    });


})