define(function(require, exports, module) {
    loadCSS({content : ".app1{color:#fff;background:red}.card{background:red}.card>.head{color:red;background:yellow}"});

    var Vue           = require("vue");
    module.exports = Vue.extend({
        data : function() {
            return {
                id      : 23456,
                message : 'Message-----------'
            }
        },
        methods : {
            click : function() {
                console.log("click()");
            }
        },
        template : '<div class="app1" @click="click"><p>{{message}}</p><list-component :msg="message"></list-component></div>'
    });
});