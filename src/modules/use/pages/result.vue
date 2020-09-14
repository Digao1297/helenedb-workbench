<template>
  <v-row class="result center-x">
    <v-col cols="10">
      <v-stepper v-model="stepper" alt-labels>
        <v-stepper-header>
          <v-stepper-step editable :complete="stepper > 1" step="1">Análise Léxica</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step editable :complete="stepper > 2" step="2">Query Optimizer</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <lexer />
          </v-stepper-content>
          <v-stepper-content step="2">2</v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "result",
  data: () => ({
    stepper: 1
  }),
  components: {
    lexer: () => import("./lexer")
  }
};
</script>

<style lang="scss" scoped>
.v-stepper,
.v-stepper__header {
  box-shadow: none !important;
}
.v-stepper__step {
}
</style>