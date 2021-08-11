<template>
  <div
    class="selfcare"
    v-bind:class="{ 'is-complete': customheader.completed }"
  >
    <p>
      <input type="checkbox" v-on:change="markComplete" />
      {{ customheader.title }}
      <button @click="$emit('del-selfcare')" class="del">X</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "selfcareitem",
  props: ["customheader"],
  methods: {
    markComplete() {
      this.selfcareitem.completed = !this.selfcareitem.completed;
    }
  }
};
</script>

<style lang="sass" scoped>
.selfcare
   background: yellow
   padding:10px
   border-bottom:10px
.is-complete
  text-decoration: line-through
  color: green
</style>
