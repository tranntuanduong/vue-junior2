<template>
  <Container>
    <router-link to="/" class="btn">
      <img src="@/assets/back.svg" alt="" class="icon svg-icon" />
      <div class="label">Back</div>
    </router-link>
    <div class="content">
      <div class="left">
        <img :src="countryDetails.flag" alt="" class="flag" />
      </div>
      <div class="right">
        <div class="name">{{ countryDetails.name ?? "N/A" }}</div>

        <div class="right__content-wrap">
          <div class="right__item">
            <div class="info__item">
              <div class="key">Native Name:</div>
              <div class="value">{{ countryDetails.nativeName ?? "N/A" }}</div>
            </div>
            <div class="info__item">
              <div class="key">Polulation:</div>
              <div class="value">{{ countryDetails.population ?? "N/A" }}</div>
            </div>
            <div class="info__item">
              <div class="key">Region:</div>
              <div class="value">{{ countryDetails.region ?? "N/A" }}</div>
            </div>
            <div class="info__item">
              <div class="key">Sub region:</div>
              <div class="value">{{ countryDetails.subRegion ?? "N/A" }}</div>
            </div>
            <div class="info__item">
              <div class="key">Capital:</div>
              <div class="value">{{ countryDetails.capital ?? "N/A" }}</div>
            </div>
          </div>
          <div class="right__item">
            <div class="info__item">
              <div class="key">Top Level Domain</div>
              <div class="value">
                {{ countryDetails.topLevelDomain ?? "N/A" }}
              </div>
            </div>
            <div class="info__item">
              <div class="key">Curencies:</div>
              <div class="value">{{ countryDetails.curencies ?? "N/A" }}</div>
            </div>
            <div class="info__item">
              <div class="key">Languages:</div>
              <div class="value">{{ countryDetails.languages ?? "N/A" }}</div>
            </div>
          </div>
        </div>

        <div class="border-contries info__item">
          <div class="key">Border Contries:</div>
          <div class="border-contries__item">France</div>
          <div class="border-contries__item">Germany</div>
          <div class="border-contries__item">France</div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "../../layout/Container.vue";
import { listCountry } from "../../mock";

export default {
  name: "CountryDetails",
  components: {
    Container,
  },
  data() {
    return {
      countryDetails: this.getCountryDetails(),
    };
  },
  methods: {
    getCountryDetails() {
      const slug = this.$route.params.id;
      return listCountry.find((country) => country.slug === slug);
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 12px 32px;
  color: var(--text-grey);
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: var(--primary-color);
  width: fit-content;
  border-radius: 5px;
  box-shadow: var(--box-shadow-color) 0px 0.5rem 1rem 0px;
  user-select: none;
  column-gap: 12px;
  text-decoration: none;
}

.icon {
  width: 15px;
  object-fit: cover;
}

.content {
  display: flex;
  width: 100%;
  column-gap: 40px;
  margin-top: 60px;
}

.left,
.right {
  flex: 1;
}

.left .flag {
  width: 100%;
}

.right {
  padding: 0 20px;
  color: var(--text-grey);
  margin-top: auto;
  margin-bottom: auto;
}

.right__content-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info__item {
  display: flex;
  column-gap: 10px;
  align-items: center;
}

.info__item + .info__item {
  margin-top: 10px;
}

.name {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
}

.info__item .key {
  font-weight: 500;
}

.border-contries {
  margin-top: 50px;
  column-gap: 10px;
}

.border-contries__item {
  padding: 8px 20px;
  background-color: var(--primary-color);
  box-shadow: var(--box-shadow-color) 0px 0.5rem 1rem 0px;
  border-radius: 2px;
}
</style>
