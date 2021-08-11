<template>
  <div class="home">
    <h1 class="">My Todo List</h1>
    <div class="card">
      <div class="flex">
        <input
          v-model="newItem"
          @keyup.enter="addItem"
          placeholder="Add new todo"
        />
        <button @click="addItem" :disabled="newItem.length === 0">
          Add
        </button>
        <Button />
      </div>
    </div>

    <div v-if="showStatus">
      <modalFile @close="showStatus = !showStatus">
        <h3>{{ selectedItem.description }}</h3>
      </modalFile>
    </div>

    <div class="card">
      <div class="card-inner">
        <h2>Todo</h2>
        <ul class="list">
          <template v-for="(item, index) in reversedItems">
            <li
              class="list-item"
              :class="{ completed: item.completed }"
              :key="index"
              @click="toggleCompleted(item)"
            >
              <div class="list-item-toggle"></div>
              {{ item.name }}

              <button
                class="list-item-delete"
                @click="
                  showStatus = !showStatus;
                  selectedItem = item;
                "
              >
                view
              </button>
              <div class="list-item-delete" @click.prevent="removeItem(item)">
                X
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import modalFile from "@/components/modal.vue";

export default {
  components: {
    modalFile
  },
  data() {
    return {
      newItem: "",
      showStatus: false,
      selectedItem: null,
      items: [
        {
          id: 1,
          name: "research project",
          completed: true,
          description: "bhdhdb hfjehwkehd wgdqjewfgfg hwgdiu  wqh"
        },
        {
          id: 2,
          name: "sort goods",
          completed: false,
          description:
            "write something to try out the function. and see how it works"
        },
        {
          id: 3,
          name: "call agent",
          completed: true,
          description: "so it works, we see how it goes"
        },
        {
          id: 4,
          name: "run errands",
          completed: false,
          description: "so it works, we see how it goes"
        },
        {
          id: 5,
          name: "house",
          completed: true,
          description: "so it works, we see how it goes"
        },
        {
          id: 6,
          name: "clear rooftop",
          completed: false,
          description: "so it works, we see how it goes"
        }
      ]
    };
  },
  computed: {
    reversedItems() {
      return this.items.slice(0).reverse();
    }
  },
  methods: {
    addItem: function() {
      this.items.push({
        id: this.items.length + 1,
        name: this.newItem,
        completed: false
      });
      this.newItem = "";
    },
    toggleCompleted: function(item) {
      item.completed = !item.completed;
    },
    removeItem: function(item) {
      this.items = this.items.filter(newItem => newItem.name !== item.name);
    }
  }
};
</script>

<style lang="scss" scoped>
/* Tooltip container */
.modal {
  position: absolute;
  display: inline-block;
  color: red;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
// .tooltip .tooltiptext {
//   visibility: hidden;
//   width: 120px;
//   background-color: black;
//   color: #fff;
//   text-align: center;
//   padding: 5px 0;
//   border-radius: 6px;

//   /* Position the tooltip text - see examples below! */
//   position: absolute;
//   z-index: 1;
// }

/* Show the tooltip text when you mouse over the tooltip container */
// .tooltip:hover .tooltiptext {
//   visibility: visible;
// }
</style>
