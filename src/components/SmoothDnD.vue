<template>
  <div class="grid">
    <Container group-name="1" orientation="vertical" class="grid-column" v-for="(row, x) of items" :key="x">
      <Draggable class="grid-cell" v-for="(cell, y) of row" :key="y">
        <span>{{ cell }}</span>
      </Draggable>
    </Container>
  </div>
</template>

<script>
import { Container, Draggable } from "vue-smooth-dnd";

function fillList(colcount, cellcount) {
  const items = [];

  for (let x = 0; x < colcount; x += 1) {
    items.push([]);
    for (let y = 0; y < cellcount; y += 1) {
      items[x].push(`${x}, ${y}`);
    }
  }

  return items
}

export default {
  name: 'SmoothDnD',
  components: { Container, Draggable },
  data () {
    return {
      items: fillList(100, 50)
    }
  }
}
</script>

<style scoped>
.grid {
  display: flex;
  flex-direction: row;
}

.grid-column {
  display: flex;
  flex-direction: column;
  flex: 0 0 100px;
}

.grid-cell {
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  user-select: none;
}
</style>
