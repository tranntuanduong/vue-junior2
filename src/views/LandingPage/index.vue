<template>
  <div :class="mode" class="app">
    <Container :classList="'mt-20'">
      <div class="landing__filter">
        <Search :onSearch="handleSearch" />
        <Filter :onFilter="handleFilter" />
      </div>
      <Grid>
        <Card
          v-for="item in getListCountryFilter()"
          :key="item.name"
          :item="item"
        />
      </Grid>
      <div
        :class="`${
          getListCountryFilter().length < 1
            ? 'notfound notfound--active'
            : 'notfound'
        }`"
      >
        Không tìm thấy kết quả phù hợp
      </div>
    </Container>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Card from "../../components/Card.vue";
import Grid from "../../layout/Grid.vue";
import Container from "../../layout/Container.vue";
import Search from "../../components/Search.vue";
import Filter from "../../components/Filter.vue";
import { listCountry } from "../../mock";

export default {
  name: "App",
  components: {
    Header,
    Card,
    Grid,
    Container,
    Search,
    Filter,
  },
  data() {
    return {
      searchText: "",
      countryId: null,
    };
  },
  methods: {
    handleSearch(value) {
      this.searchText = value;
    },
    handleFilter(id) {
      this.countryId = id;
    },
    getListCountryFilter() {
      return listCountry.filter(
        (country) =>
          country.name.toLowerCase().includes(this.searchText?.toLowerCase()) &&
          (country.regionId === this.countryId || !this.countryId)
      );
    },
  },
};
</script>

<style>
.app {
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-color);
}

.m {
  max-width: 300px;
  height: 100%;
}

.landing__filter {
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 40px;
}

.notfound {
  display: none;
  color: var(--text-grey);
}

.notfound--active {
  display: block;
}
</style>
