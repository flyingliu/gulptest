
 
<template>
    <div class="app1" @click="click">
        <p>{{message}}</p>
    </div>
</template>
 
<script>
    var Vue           = require("vue");
 
    module.exports = Vue.extend({
        data : function() {
            return {
                id      : 23456,
                message : 'Message-----555------'
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

.app1 { color:$color;}

</style> 
