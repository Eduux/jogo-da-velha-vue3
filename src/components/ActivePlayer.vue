<template>
  <div class="activePlayer">
    <p>Jogador ativo</p>
    <div v-if="active === PlayerType.CIRCLE">
      <CircleItem />
    </div>
    <div v-if="active === PlayerType.X">
      <XItem />
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
  },
  setup() {
    return { PlayerType };
  },
  components: { CircleItem, XItem },
});
</script>

<style scoped lang="scss">
.activePlayer {
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.541);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 15px;
}
</style>