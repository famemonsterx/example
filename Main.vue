<template>
 <v-switch :label="`Switch 1: ${switch1.toString()}`" v-model="switch1" :msg="switch1"></v-switch>
</template>

<script>
  export default {
    data () {
      return {
        switch1: true
      }
    }
  }
</script>