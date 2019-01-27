<template>
  <div
    class="memo"
    :style="{
      top: `${top}px`,
      left: `${left}px`,
      background: `${background}`
    }"
  >
    <div class="handle" @mousedown="onMousedown">
      <div
        class="minus"
        @click="$emit('minus')"
      >
        X
      </div>
    </div>
    <editor
      class="editor"
      :index="index"
    />
    <div class="change_color">
      <div class="red" @click="$emit('changeColor', '#f00')" />
      <div class="blue" @click="$emit('changeColor', '#0000FF')" />
      <div class="white" @click="$emit('changeColor', '#FFFFFF')" />
    </div>
  </div>
</template>

<script>
import Editor from '~/components/Editor.vue'

export default {
  components: {
    Editor
  },
  props: {
    top: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
    },
    index: {
      type: Number,
      default: 0
    },
    background: {
      type: String,
      default: '#f00'
    }
  },
  methods: {
    onMousedown(e) {
      this.$emit('dragStart', {
        x: e.pageX,
        y: e.pageY
      })
    }
  }
}
</script>

<style>
.memo {
  position: fixed;
  width: 200px;
  height: 300px;
}
.handle {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: #900;
  cursor: move;
}
.editor {
  position: absolute;
  top: 51;
  left: 0;
  right: 0;
  height: 200px;
  border: solid 1px #000;
}
.change_color {
  height: 50px;
  width: 200px;
  position: absolute;
  top: 251px;
  left: 0;
  display: inline-flex;
  border: solid 1px #000;
}
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
.minus {
  text-align: center;
  margin-left: 160px;
  margin-top: 5px;
  font-size: 30px;
  border-radius: 50%;
  width: 30px;
  height: 37px;
  color: #FFF;
  border: solid 1px #FFF;
}
</style>
