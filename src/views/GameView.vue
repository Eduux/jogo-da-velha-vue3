<template>
  <ActivePlayer :active="activePlayer" />
  <BoardGame
    :active="activePlayer"
    :circles="circles"
    :xS="xS"
    @click-square="handleClickSquare"
  />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { PlayerType } from "@/types/game";
import ActivePlayer from "@/components/ActivePlayer.vue";
import BoardGame from "@/components/BoardGame.vue";
import checkWinner from "@/utils/checkWinner";

interface IState {
  activePlayer: PlayerType;
  circles: number[];
  xS: number[];
}

export default defineComponent({
  name: "GameView",
  components: { ActivePlayer, BoardGame },
  setup() {
    const state = reactive<IState>({
      activePlayer: PlayerType.CIRCLE,
      circles: [],
      xS: [],
    });

    const handleClickSquare = (numberSquare: number) => {
      if (state.activePlayer === PlayerType.CIRCLE) {
        state.circles.push(numberSquare);
      } else {
        state.xS.push(numberSquare);
      }

      const haveWinner = checkWinner(state.xS, state.circles);

      if (haveWinner) {
        state.circles = [];
        state.xS = [];
        alert(
          `Vencedor, ${
            state.activePlayer === PlayerType.CIRCLE ? "Circulo" : "X"
          }`
        );
      }

      state.activePlayer =
        state.activePlayer === PlayerType.CIRCLE
          ? PlayerType.X
          : PlayerType.CIRCLE;
    };

    return { ...toRefs(state), PlayerType, handleClickSquare };
  },
});
</script>
