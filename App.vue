<template>
  <div id="app">
  <v-app dark="true">
    <v-content>
        <v-container>
            <v-dialog attach="reg" max-width="400px">
              <v-btn primary slot="activator">Sigh-up</v-btn>
            <app-reg></app-reg>
            </v-dialog>
            <v-dialog attach="reg" max-width="400px">
              <v-btn primary dark slot="activator">sign-in</v-btn>
                <app-log></app-log>
            </v-dialog>
            <v-btn primary dark :to="{path: '/About'}">About</v-btn>
            <v-btn primary dark :to="{path: '/Main'}">Main</v-btn>
        </v-container>
        <router-view></router-view>
    </v-content>
  </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>
