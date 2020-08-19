<template>
  <div class="dashboard">
    <div class="header">
      <v-row>
        <v-col>
          <v-img src="../../../styles/assets/logo.png" max-height="50" max-width="50" />
        </v-col>
        <v-col>
          <v-tabs v-model="tab" color="green-high">
            <v-tab>Sobre</v-tab>
            <v-tab>Utilizar</v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </div>
    <v-main>
      <v-container>
        <div class="body">
          <v-tabs-items v-model="tab" vertical>
            <v-tab-item>
              <about />
            </v-tab-item>
            <v-tab-item>
              <use-main />
            </v-tab-item>
          </v-tabs-items>
        </div>
      </v-container>
    </v-main>
    <v-footer app class="center-x footer-main" color="white">
      <p>
        Feito com
        <v-icon color="red" size="30">mdi-heart</v-icon>
      </p>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data: () => ({
    tab: 1
  }),
  components: {
    "use-main": () => import("./use.vue"),
    about: () => import("./about.vue")
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  height: 100%;
}

.header {
  margin: 2rem 1rem 1rem 15vw;
}

.footer-main {
  border-top: solid 2px $gray-small !important;
}
</style>
