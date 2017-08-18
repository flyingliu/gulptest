<template>
    <div class="page" @click="click">
        <p>{{message}}</p>
    </div>
</template>
 
<script>
    var Vue           = require("vue");
 
    module.exports = Vue.extend({
        data : function() {
            return {
                id      : 23456,
                message : '阿弥陀佛 Me'
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
$color:#900;

.page { color:$color;}

</style> 