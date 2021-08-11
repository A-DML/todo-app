<template>
  <div class="backdrop">
    <div class="" @click="closeApp">X</div>
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["topic", "text", "status"],
  methods: {
    closeApp() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
/* .modal {
  width: 3px;
  padding: 2px;
  justify-content: center; */
/* margin: 100px auto; */
/* background: white; */
/* border-radius: 10px; */
/* } */

/* .backdrop {
  top: 0;
  position: fixed;
  background: grey;
  width: 100%;
  height: 100%;
}
h1 {
  font-size: 30px;
}
.modal.complete {
  background: green;
  color: white;
}
.modal.complete.h1 {
  color: white; */
/* }  */
.modal {
  position: relative;
  display: inline-block;
  color: red;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
/* // .tooltip .tooltiptext {
//   visibility: hidden;
//   width: 120px;
//   background-color: black;
//   color: #fff;
//   text-align: center;
//   padding: 5px 0;
//   border-radius: 6px;

//   /* Position the tooltip text - see examples below! */
/* position: absolute;
  z-index: 1; */

/* Show the tooltip text when you mouse over the tooltip container */
/* .tooltip:hover .tooltiptext {
   visibility: visible;
 } */
</style>
