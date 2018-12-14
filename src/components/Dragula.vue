<template>
  <div class="grid">
    <div v-dragula="items" drake="first" class="grid-column" v-for="(row, x) of items" :key="x">
      <div class="grid-cell" v-for="(cell, y) of row" :key="y">
        <span>{{ cell }}</span>
      </div>
    </div>
  </div>
</template>

<script>
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
  name: 'Dragula',
  components: { },
  data () {
    return {
      items: fillList(100, 100)
    }
  },
  created() {
    let service = this.$dragula.$service
    service.options('first', {})
  }
}
</script>

<style scoped>
@import '../../node_modules/dragula/dist/dragula.css';

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
