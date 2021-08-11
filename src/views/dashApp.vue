<template>
  <router-view><div>hi</div> </router-view>
</template>

<script>
import botTitle from "@/components/botTitle.vue";
import orderBot from "@/components/orderBot.vue";
export default {
  name: "dashApp",
  components: { botTitle },
  components: { orderBot }
};
</script>

<style lang="stylus"></style>
