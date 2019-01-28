<template>
  <div>
    <div class="red" @click="onChangeColor('#f00', index)" />
    <div class="blue" @click="onChangeColor('#0000FF', index)" />
    <div class="white" @click="onChangeColor('#FFFFFF', index)" />
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onChangeColor(color, index) {
      this.$store.commit('changeColor', { index, color })
    }
  }
}
</script>

<style>
.red {
  height: 36px;
  width: 60px;
  margin: 5px 0px 5px 5px;
  background: #CC0000;
  border-bottom: solid 4px #660000;
  border-radius: 5px;
  cursor: pointer;
}
.blue {
  height: 36px;
  width: 60px;
  margin: 5px 0px 5px 5px;
  background: #0000CC;
  border-bottom: solid 4px #000077;
  border-radius: 5px;
  cursor: pointer;
}
.white {
  height: 36px;
  width: 60px;
  margin: 5px 5px 5px 5px;
  background: #EEEEEE;
  border-bottom: solid 4px #BBBBBB;
  border-radius: 5px;
  cursor: pointer;
}
</style>
