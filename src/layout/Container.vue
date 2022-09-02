<template>
  <div :class="`container ${classList}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container",
  components: {},
  props: ["classList"],
};
</script>

<style scope>
.container {
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 0;
}

.mt-20 {
  margin-top: 20px;
}
</style>
