<template>
  <div class="board">
    <div
      v-for="(square, index) in new Array(9)"
      v-bind:key="index"
      @click="
        !circles.includes(index) &&
          !xS.includes(index) &&
          $emit('clickSquare', index)
      "
    >
      <div v-if="circles.includes(index)">
        <CircleItem />
      </div>
      <div v-if="xS.includes(index)">
        <XItem />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PlayerType } from "@/types/game";
import CircleItem from "./CircleItem.vue";
import XItem from "./XItem.vue";

export default defineComponent({
  name: "GameView",
  props: {
    active: {
      type: String,
      default: PlayerType.CIRCLE,
    },
    circles: {
      type: Array,
      required: true,
    },
    xS: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return { PlayerType };
  },
  components: { CircleItem, XItem },
});
</script>


<style scoped lang="scss">
.board {
  border: 1px solid black;
  display: grid;
  grid-template-columns: auto auto auto;
  width: 400px;
  margin: 0 auto;

  > div {
    height: 100px;
    border: 1px solid black;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      width: 0px;
      margin-left: -50px;
    }
  }
}
</style>