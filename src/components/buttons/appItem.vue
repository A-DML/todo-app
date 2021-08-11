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
              <span>{{ item.name }}</span>
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
// import Button from "@/components/buttons/Button";
export default {
  components: {
    Button
  },
  data() {
    return {
      newItem: "",
      items: [
        {
          id: 1,
          name: "research project",
          completed: false
        },
        {
          id: 2,
          name: "sort goods",
          completed: true
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
