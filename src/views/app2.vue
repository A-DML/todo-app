<template>
  <div>
    <h3>{{ title }}</h3>
    <p>What Humans Do Daily</p>
    <div v-if="showStatus">
      <modalFile
        :topic="topic"
        :text="text"
        status="complete"
        @close="toggleApp"
      />
    </div>
    <button @click="toggleApp">open app</button>
  </div>
</template>

<script>
import modalFile from "@/components/modal.vue";

export default {
  name: "app2",
  components: { modalFile },
  data() {
    return {
      title: "Todo  App",
      topic: "This is the first Todo app",
      text: "Day to do",
      showStatus: false
    };
  },
  methods: {
    toggleApp() {
      this.showStatus = !this.showStatus;
    }
  }
};
</script>

<style lang="scss">
#app2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
