<template>
  <Scrollama
    id="steps"
    @step-enter="({ element }) => (currStepTitle = element.dataset.stepTitle)"
  >
    <div slot="graphic" class="graphic-menu">
      <ul class="menu">
        <li
          :key="step.id"
          v-for="step in steps"
          :class="{ 'is-active': currStepTitle = step.title }"
        >
          {{ step.title }}
        </li>
      </ul>
    </div>
    <div
      :key="step.id"
      v-for="step in steps"
      class="step"
      :data-step-title="step.title"
    >
      <sub-steps :step-title="step.title">
        <template v-slot="{ mapName }">
          {{ step.mapName }}
        </template>
      </sub-steps>
    </div>
  </Scrollama>
</template>

<script>
import 'intersection-observer';
import Scrollama from 'vue-scrollama';
import SubSteps from '@/components/SubSteps';

export default {
  components: {
    Scrollama,
    SubSteps,
  },
  data() {
    return {
      currStepTitle: null,
      steps: [
        {
          id: 1,
          title: "Napoleons's advance towards Russia - 1812",
          text:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, itaque.',
          mapName: 'Map step 1',
        },
        {
          id: 2,
          title: "Napoleons's retreat from Russia - 1813",
          text:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, itaque.',
          mapName: 'Map step 2',
        },
      ],
    };
  },
};
</script>

<style src="vue-scrollama/dist/vue-scrollama.css"></style>

<style>
#scrollama-container-steps > .scrollama-graphic {
  z-index: 1;
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
.menu {
  display: flex;
  justify-content: center;
  background-color: teal;
  color: white;
}
.menu li {
  list-style-type: none;
  padding: 2rem;
}
.menu li.is-active {
  font-weight: bold;
  border-bottom: 4px solid white;
}
</style>
