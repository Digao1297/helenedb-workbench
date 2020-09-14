export default [
  {
    path: "result",
    name: "Resultado",
    component: () => import("../pages/result.vue"),
  },
  {
    path: "",
    name: "Utilizar",
    component: () => import("../pages/use.vue"),
  },
  {
    path: "about",
    name: "Sobre",
    component: () => import("../pages/about.vue"),
  },
];
