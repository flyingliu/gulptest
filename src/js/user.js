define(['vuex'], function (vuex) {
  'use strict'

  console.log(vuex.mapState)
  let user = {
    props: ['id'],
    template: `<div>
      <validator name="validation1">
      <form novalidate>
        <div class="username-field">
          <label for="username">username:</label>
          <input id="username" type="text" v-validate:username="['required']">
        </div>
        <div class="comment-field">
          <label for="comment">comment:</label>
          <input id="comment" type="text" v-validate:comment="{ maxlength: 256 }">
        </div>
        <div class="errors">
          <p v-if="$validation1.username.required">Required your name.</p>
          <p v-if="$validation1.comment.maxlength">Your comment is too long.</p>
        </div>
        <input type="submit" value="send" v-if="$validation1.valid">
      </form>
    </validator>
    
    </div>`,
    data: function (params) {
      return {
        username: '',
        comment: ''
      }
    },
    computed: vuex.mapState(['count']),
    methods: {
      add: function (params) {
        this.$store.commit('increment')
      }

    },
    mounted () {
      console.log("======");
    }

  }
  return user
})
