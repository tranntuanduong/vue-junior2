<template>
  <div class="filter" @click="openFilterOptions = !openFilterOptions">
    <div class="input">
      <div class="input__main">
        <div class="label">
          {{ filters.find((item) => item.id === regionId).label }}
        </div>
        <div class="icon">
          <img src="@/assets/down.svg" alt="" class="icon__img svg-icon" />
        </div>
      </div>
    </div>
    <ul class="option" :class="`${openFilterOptions ? 'option--open' : ''}`">
      <li
        v-for="item in filters"
        :key="item.id"
        class="option__item"
        :class="`${regionId === item.id ? 'active' : ''}`"
        @click="handleFilter(item.id)"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: [
        {
          id: null,
          label: "Filter by Region",
        },
        {
          id: 1,
          label: "Europe",
        },
        {
          id: 2,
          label: "Americas",
        },
        {
          id: 3,
          label: "Aisa",
        },
        {
          id: 4,
          label: "Africa",
        },
      ],
      regionId: null,
      openFilterOptions: false,
    };
  },
  props: ["onFilter"],
  methods: {
    handleFilter(id) {
      this.onFilter(id);
      this.regionId = id;
    },
  },
};
</script>

<style scope>
.filter {
  width: 100%;
  max-width: 300px;
  position: relative;
}

.input {
  width: 100%;
  height: 60px;
  background-color: var(--primary-color);
  box-shadow: var(--box-shadow-color) 0px 0.5rem 1rem 0px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.input__main {
  width: 100%;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.label {
  color: var(--text-grey);
}

/* .icon__img {
  filter: invert(100%) sepia(29%) saturate(0%) hue-rotate(38deg)
    brightness(104%) contrast(101%);
} */

.option {
  background-color: var(--primary-color);
  box-shadow: var(--box-shadow-color) 0px 0.5rem 1rem 0px;
  padding: 10px 0;
  margin-top: 8px;
  border-radius: 5px;
  display: none;
  position: absolute;
  width: 100%;
}

.option--open {
  display: block;
}

.option::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 10px;
  top: -8px;
}

.option__item {
  color: var(--text-grey);
  font-size: 15px;
  padding: 10px 25px;
  cursor: pointer;
}

.option__item:hover {
  background-color: var(--bg-color);
}
</style>
