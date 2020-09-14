<template>
  <div class="dashboard">
    <div class="header">
      <v-row>
        <v-col>
          <v-img src="../../../styles/assets/logo.png" max-height="50" max-width="50" />
        </v-col>
        <v-col>
          <nav class="nav_tabs">
            <ul>
              <li>
                <input
                  type="radio"
                  name="buttons"
                  class="rd_tabs"
                  id="tab1"
                  value="/about"
                  v-model="radioButtonComp"
                />
                <label for="tab1">Sobre</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="buttons"
                  class="rd_tabs"
                  id="tab2"
                  value="/"
                  v-model="radioButtonComp"
                />
                <label for="tab2">Utilizar</label>
              </li>
            </ul>
          </nav>
        </v-col>
      </v-row>
    </div>
    <v-main>
      <v-container>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
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
    radioButton: "/"
  }),
  methods: {},
  computed: {
    radioButtonComp: {
      get() {
        return this.radioButton;
      },
      set(value) {
        this.radioButton = value;
        if (this.$router.currentRoute.path != value) {
          this.$router.push(value);
        }
      }
    }
  },
  created() {
    if (this.$router.currentRoute.path != "/result") {
      this.$router.push("/result");
    }
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

/*
* Menu
*/
.nav_tabs {
  width: 20vw;
}

.nav_tabs ul {
  list-style: none;
}
.nav_tabs ul li {
  float: left;
}
.nav_tabs li {
  margin-right: 3rem;
}

.nav_tabs label {
  cursor: pointer;

  color: $text;
  width: 100px;
  display: inline-block;
  margin: 0;
}

.nav_tabs label {
  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px $green-high;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
}

.rd_tabs {
  display: none;
  &:checked ~ label:after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }
}
</style>
