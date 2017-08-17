define(function(require, exports, module) {
    loadCSS({content : ".page{color:#900}"});

    var Vue           = require("vue");
    module.exports = Vue.extend({
        data : function() {
            return {
                id      : 23456,
                message : '阿弥陀佛 Message-----------'
            }
        },
        methods : {
            click : function() {
                console.log("click()");
            }
        },
        template : '<div class="page" @click="click"><p>{{message}}</p></div>'
    });
});