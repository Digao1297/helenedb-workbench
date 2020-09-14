<template>
  <v-row class="lexer">
    <v-col>
      {{op}}
      <h2 class="title-tokens">Tokens</h2>
      <v-treeview :items="lexer"></v-treeview>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
import optimizer from "../functions/optimizerTranslate";

export default {
  name: "lexer",
  data: () => ({
    op: optimizer("optimizer")
  }),
  computed: {
    ...mapGetters({
      _getLexer: "use/getLexer"
    }),
    lexer() {
      let data = [];
      this._getLexer.map((item, index) => {
        let obj = {
          id: index,
          name: item.tokenType,
          children: []
        };
        if (item.tokenValue != "") {
          obj.children.push({ id: index, name: item.tokenValue });
        }
        obj.children.push({
          id: index,
          name: `column: ${item.column}`
        });
        obj.children.push({
          id: index,
          name: `row: ${item.row}`
        });
        data.push(obj);
      });

      return data;
    }
  }
};
</script>

<style lang="scss" scoped>
.title-tokens {
  text-transform: uppercase;
  color: $green-high;
  font-weight: 300;
}
</style>