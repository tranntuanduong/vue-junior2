<template>
  <div class="search">
    <input
      type="text"
      class="search__input"
      placeholder="Search for a country..."
      @change="handleChange"
    />
    <div class="search__icon">
      <img alt="Vue logo" class="logo svg-icon" src="@/assets/search.svg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },
  props: ["onSearch"],
  methods: {
    handleChange(e) {
      this.onSearch(e.target.value);
    },
  },
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 60px;
  max-width: 450px;
  box-shadow: var(--box-shadow-color) 0px 0.5rem 1rem 0px;
  background-color: var(--primary-color);
  padding: 0px 16px 0 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  position: relative;
}

.search__input {
  border: none;
  width: 100%;
  padding: 8px 16px;
  font-size: 15px;
  background-color: transparent;
  color: var(--text-color);
}

.search__input:focus {
  border: none;
  outline: none;
}

.search__input::placeholder {
  color: var(--text-grey);
}

.search__icon {
  position: absolute;
  left: 25px;
  top: 50%;
  transform: translateY(-50%);
}

.search__icon img {
  width: 20px;
}
</style>
