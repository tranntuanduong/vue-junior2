<template>
  <div class="card">
    <img :src="item.flag" alt="" class="flag" />

    <div class="content">
      <div class="title">{{ item.name }}</div>
      <div class="item">
        <div class="item__key">Population:</div>
        <div class="item__value">81.770.880</div>
      </div>

      <div class="item">
        <div class="item__key">Region:</div>
        <div class="item__value">Europe</div>
      </div>

      <div class="item">
        <div class="item__key">Capital:</div>
        <div class="item__value">Berlin</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  components: {},
  props: ["item", "maxwidth"],
};
</script>

<style scope>
.card {
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: var(--box-shadow-color) 0px 0.5rem 1rem 0px;
  font-size: 14px;
  width: 290px;
}

.flag {
  width: 100%;
  user-select: none;
  -webkit-user-drag: none;
  height: 180px;
  object-fit: cover;
}

.content {
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 26px;
  min-height: 115px;
}

.title {
  font-size: 18px;
  margin-bottom: 16px;
}

.item {
  display: flex;
  column-gap: 4px;
}

.item + .item {
  margin-top: 8px;
}

.item__value {
  color: var(--text-grey);
}
</style>
