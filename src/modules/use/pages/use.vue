<template>
  <div class="use-main">
    <v-row class="center-x-y">
      <v-col cols="8" sm="6" md="6" lg="6" xl="5">
        <p class="title-use">Digite seu SQL abaixo</p>
        <v-textarea outlined label="Digite sua consulta SQL aqui..." />
        <v-btn class="btn-analise" color="green-medium" height="55">Analisar</v-btn>
      </v-col>
    </v-row>
    <v-row class="center-x-y">
      <v-col cols="8" sm="6" md="6" lg="6" xl="5">
        <p>
          <strong>Exemplo:</strong>
        </p>
        <v-row>
          <v-col class="example" cols="12" sm="12" md="12" lg="12" xl="10">
            <p class="title-use">SELECT codigo,nome FROM clientes</p>
          </v-col>
          <v-col class="example" cols="12" sm="12" md="6" lg="6" xl="5">
            <p class="title-use">SELECT uf FROM cidades</p>
          </v-col>
          <v-col class="example" cols="12" sm="12" md="6" lg="6" xl="5">
            <p class="title-use">SELECT id FROM escolas</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "use-main"
};
</script>

<style lang="scss" scoped>
.use-main {
  margin-top: 10vh;
}
.btn-analise {
  color: $white;
  width: 100%;
}
.title-use {
  color: $green-high;
}
@media screen and (min-width: 960px) {
  .example {
    display: flex !important;
    justify-content: center !important;
  }
}
</style>