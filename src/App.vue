<template>
  <div id="app" class="grid">
    <Container group-name="1" orientation="horizontal" class="grid-row" v-for="(row, x) of items" :key="x">
        <Draggable class="grid-cell" v-for="(cell, y) of row" :key="y">
          <span>{{ cell }}</span>
        </Draggable>
    </Container>
  </div>
</template>

<script>
import { Container, Draggable } from "vue-smooth-dnd";

function fillList(size) {
  const items = [];

  for (let x = 0; x < size; x += 1) {
    items.push([]);
    for (let y = 0; y < size; y += 1) {
      items[x].push(`${x}, ${y}`);
    }
  }

  return items
}

export default {
  name: 'app',
  components: { Container, Draggable },
  data () {
    return {
      items: fillList(50)
    }
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.grid-row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
}

.grid-cell {
  align-items: center;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 0 0 100px;
}

</style>
