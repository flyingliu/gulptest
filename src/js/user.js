define(['vuex', 'vue', 'SimpleVueValidation' ], function (vuex, Vue, SimpleVueValidation) {
  'use strict'
  var Validator = SimpleVueValidation.Validator

  Vue.use(SimpleVueValidation)

  console.log(vuex.mapState)
  let user = {
    props: ['id'],
    template: `<div>
          <div class="layout-form">
    <div class="form-group" :class="{error: validation.hasError('email')}">
      <div class="label">* Email</div>
      <div class="content"><input type="text" class="form-control" v-model="email"/></div>
      <div class="message">{{ validation.firstError('email') }}</div>
    </div>
    <div class="form-group">
      <div class="actions">
        <button type="button" class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>
  </div>
    </div>`,
    data: function () {
      return {
        email: ''
      }
    },
    validators: {
      email: function (value) {
        return Validator.value(value).required().email()
      }
    },
    methods: {
      submit: function () {
        this.$validate()
          .then(function (success) {
            if (success) {
              alert('Validation succeeded!')
            }
          })
      }
    }

  }
  return user
})
