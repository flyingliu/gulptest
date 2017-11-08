define(['vuex', 'vue' ], function (vuex, Vue) {
  'use strict'
  console.log(vuex.mapState)
  let user = {
    props: ['id'],
    template: `<div>
        <input type='text' v-model='name' />
        <div v-if='$vuelidation.error("name")'>{{ $vuelidation.error('name') }}</div>
        <button  :disabled="$vuelidation.errors()" @click="submit" >Submit</button>

    </div>`,
    data: function (params) {
      return {
        name: ''
      }
    },
    vuelidation: {
      data: {
        name: {
          required: true
        }
      }
    },

    computed: vuex.mapState(['count']),
    //   components: {
    //   validator,
    // },
    methods: {
      add: function (params) {
        this.$store.commit('increment')
      },
      submit() {
        console.log(this.$vuelidation)
        if (this.$vuelidation.valid()) {
          console.log(`Hello, ${this.name}!`)
        }
      }

    },
    mounted() {
      console.log('======')
      console.log(this)
    }

  }
  return user
})
