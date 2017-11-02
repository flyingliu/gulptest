
require.config({
    baseUrl: "/",
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/3.2.1/jquery.min",
        "vue": "https://cdn.bootcss.com/vue/2.4.2/vue.min",
        "iscroll": "https://cdn.bootcss.com/iScroll/5.2.0/iscroll",
        "waterWave": "cdn/waterWave"
    }
});


require(["jquery", "vue",   "waterWave", "iscroll"], function($, Vue, waterWave, iScroll) {

    $(function() {

        console.log("---");
        var app = new Vue({
            el: "#app",
            data: {
                code:["","2","","","",""]
            },
            template:`<div><input type="number" v-model="code[index]" maxlength=1 v-for="(i,index) in code">{{codeStr}}</div>`,
            components: {
                // 'my-component': App,
                // 'page-bar': Pagebar
            },
            computed: {
                codeStr: function(){
                    var str = this.code.join("");
                    return str;
                }
            },
            mounted: function() {
                if ($(".scroll").length > 0) {
                    var scroll = new iScroll($(".scroll")[0]);
                }
                waterWave('canvas', {
                    //canvs宽高
                    cW: 2000,
                    cH: 600,
                    baseY: 100,
                    oneColor: "rgba(0,0,0,.3)",
                    twoColor: "rgba(0,0,0,.3)",
                    vertexsNum: 250,
                    autoDiff: 1000,
                    isMouseWhell: true,
                    isDrop: true,
                    dropRadius: 3,
                    dropLocation: 200,
                    dropAcce: 0.018,
                    isShowTips: false
                })

            }
        });
    });
})