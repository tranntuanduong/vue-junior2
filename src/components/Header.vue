<template>
  <div class="header">
    <div class="header__wrap">
      <div class="left">Where in the world?</div>
      <div class="right" @click="$emit('toggleThemeMode')">
        <div class="icon">
          <span>{{ mode === "light" ? "🌙" : "🌞" }}</span>
        </div>
        <div class="text">{{ mode === "light" ? "Dark" : "Light" }} Mode</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: ["mode"],
};
</script>

<style>
.left {
  font-weight: 500;
}

.right {
  display: flex;
  column-gap: 10px;
  cursor: pointer;
  user-select: none;
  font-size: 15px;
  font-weight: 500;
  align-items: center;
}

.icon {
  font-size: 24px;
}

.header {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 16px 0;
  font-size: 18px;
  background-color: var(--primary-color);
  color: var(--text-title);
  box-shadow: var(--box-shadow-color) 0px 0.5rem 1rem 0px;
  height: 50px;
}

.header__wrap {
  display: flex;
  width: 100%;
  max-width: 1280px;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px
}

.header__left {
  display: flex;
}

.menu {
  display: flex;
  align-items: center;
  color: var(--text-grey);
  font-weight: 500;
  margin-left: 16px;
}

.menu__item {
  padding: 8px 16px;
  cursor: pointer;
}

.menu__item:hover {
  color: #3a393e;
}

.logo {
  height: 30px;
}

.header__right {
  display: flex;
}
</style>
