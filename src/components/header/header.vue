<template>
  <div class="SELFCARE">
    <div v-bind:key="customheader.id" v-for="customheader in customheader">
      <h3>{{ customheader.title }}</h3>
      <selfcareitem
        :customheader="customheader"
        v-on:del-todo="$emit('del-todo', header.id)"
      />
    </div>
  </div>
</template>

<script>
import selfcareitem from "@/components/selfcareitem.vue";
export default {
  name: "header",
  components: {
    selfcareitem
  },
  props: ["customheader"]
};
</script>

<style lang="sass" scoped></style>
