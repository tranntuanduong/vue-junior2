<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div :class="mode" class="app">
    <Header :mode="mode" @toggleThemeMode="toggleThemeMode" />
    <RouterView />
  </div>
</template>

<script>
import Header from "../src/components/Header.vue";

export default {
  name: "Root",
  components: {
    Header,
  },
  data() {
    return {
      mode: "dark",
    };
  },
  methods: {
    toggleThemeMode() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  },
};
</script>
