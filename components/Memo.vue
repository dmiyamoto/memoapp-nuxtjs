<template>
  <div
    class="memo"
    :style="{
      top: `${top}px`,
      left: `${left}px`,
      background: `${background}`,
      'z-index': `${zindex}`
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
    <change-color
      class="change_color"
      :index="index"
    />
  </div>
</template>

<script>
import Editor from '~/components/Editor.vue'
import ChangeColor from '~/components/ChangeColor.vue'

export default {
  components: {
    Editor,
    ChangeColor
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
    },
    zindex: {
      type: Number,
      default: 0
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
