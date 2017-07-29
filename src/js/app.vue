
 
<template>
    <div class="app1" @click="click">
        <p>{{message}}</p>
        <list-component :msg="message"></list-component>
    </div>
</template>
 
<script>
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
        template : '__template__'
    });
</script> 
<style lang="scss">
$color:red;
 
.app1 {color:#fff; background: red;}

.card {
    background: $color;
    
    > .head {
        color: $color;
        background: yellow;
    }
}
</style> 
