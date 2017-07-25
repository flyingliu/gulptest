
 
<template>
    <div class="app" @click="click">
        <p>{{a}}</p>
        <list-component :msg="message"></list-component>
    </div>
</template>
 
<script>
    var Vue           = require("vue");
 
    module.exports = Vue.extend({
        data : function() {
            return {
                id      : 23456,
                message : 'Message'
            }
        },
        methods : {
            click : function() {
                console.log("click()");
            }
        },
        template : '__template__'
    });
</script> 