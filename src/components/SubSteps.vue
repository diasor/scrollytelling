<template>
  <Scrollama
    id="substeps"
    @step-enter="({ element }) => (currStepTitle = element.dataset.stepTitle)"
    :debug="true"
    :progress="true"
    @step-progress="({ progress }) => (currStepProgress = progress)"
  >
    <div slot="graphic" class="graphic-menu">
      <h3>{{ stepTitle }}</h3>
      <ul class="menu">
        <li
          :key="step.id"
          v-for="step in subSteps"
          :class="{ 'is-active': currStepTitle == step.title }"
        >{{ step.title }}</li>
      </ul>
    </div>
    <div :key="step.id" v-for="step in subSteps" class="step" :data-step-title="step.title">
      <h2>{{ step.title }}</h2>
      <p>{{ step.text }}</p>
      <div>step {{ step.id }}</div>
      <div>{{ Math.round(currStepProgress * 100) }}%</div>
      <div>
        <slot :mapName="stepMap"></slot>
        <Map></Map>
      </div>
    </div>
  </Scrollama>
</template>

<script>
import "intersection-observer";
import Scrollama from "vue-scrollama";
import Map from "@/components/maps/Map";

export default {
  props: ["stepTitle"],
  components: {
    Scrollama,
    Map
  },
  data() {
    return {
      currStepTitle: null,
      currStepProgress: null,
      stepMap: "MAPA",
      subSteps: [
        {
          id: 1,
          title: "Sub Step A",
          text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, itaque."
        },
        {
          id: 2,
          title: "Sub Step B",
          text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, itaque."
        },
        {
          id: 3,
          title: "Sub Step C",
          text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, itaque."
        }
      ]
    };
  }
};
</script>

<style src="vue-scrollama/dist/vue-scrollama.css"></style>

<style lang="scss">
#scrollama-container-substeps {
  display: flex;
  > .scrollama-graphic {
    flex: 1;
    height: 50vh;
    top: 25vh;
  }
  > .scrollama-steps {
    flex: 2;
  }
}
</style>

<style scoped>
.step {
  background-color: #eee;
  padding: 2rem;
  padding-top: 10vh;
  padding-bottom: 30vh;
  margin-bottom: 10vh;
}
.menu li {
  padding: 1rem 0;
  font-size: 0.8rem;
}
.menu li.is-active {
  font-weight: bold;
  color: tomato;
}
</style>
