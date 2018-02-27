<template>
<v-form v-model="valid">
      <v-text-field
      label="Name"
      v-model="name"
      :rules="nameRules"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
          name="input-10-1"
          label="Enter your password"
          hint="At least 8 characters"
          v-model="password"
          min="8"
          v-on:type="counter ? 'password' : 'text'"
          counter
        ></v-text-field>
        <v-btn
      @click="submit"
      :disabled="!valid">
      submit
    </v-btn>
          </v-form>
</template>

<script>
  export default {
    props: ['switch1'],
    data: () => ({
      valid: false,
      e1: false,
      password: '',
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ]
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            password: this.password
          })
        }
      }},
    data: function () {
    return {
      counter: this.switch1
      }
    }
  }
</script>