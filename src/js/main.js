var loadCSS = function (config) {
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
    baseUrl: "/",
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/3.2.1/jquery.min",
        "vue": "https://cdn.bootcss.com/vue/2.4.2/vue.min",
        "app": "js/app",
        "pagebar": "js/page",
        "waterWave": "cdn/waterWave"
    }
});


require(["jquery", "vue", "app", "pagebar", "waterWave"], function ($, Vue, App, Pagebar, waterWave) {
    console.log("App", App);
    $(function () {
        var app = new Vue({
            el: "#app",
            data: {},
            components: {
                // 'my-component': App,
                // 'page-bar': Pagebar
            },
            mounted: function () {
                waterWave('canvas', {
                    //canvs宽高
                    cW: 2000,
                    cH: 600,

                    //液面高度
                    baseY: 150,

                    //上层颜色  
                    oneColor: "rgba(0,0,0,.3)",

                    //下层颜色
                    twoColor: "rgba(0,0,0,.3)",

                    //顶点数目
                    vertexsNum: 250,

                    //初始浪高
                    autoDiff: 1000,

                    //是否支持滚轮滚动
                    isMouseWhell: true,

                    //是否来个雨滴
                    isDrop: true,

                    //雨滴半径
                    dropRadius: 3,

                    //雨滴位置
                    dropLocation: 100,

                    //雨滴下落加速度
                    dropAcce: 0.018,

                    //是否显示提示
                    isShowTips: false
                })
            }
        });
    });
})