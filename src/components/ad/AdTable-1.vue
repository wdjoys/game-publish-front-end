<!-- /**
 * @Author: xiaocao
 * @Date:   2023-02-01 10:37:14
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-01 16:54:22
 */
 -->
<template>
  <div class="q-pa-md">
    <q-virtual-scroll
      type="table"
      scroll-target="body"
      :virtual-scroll-item-size="48"
      style="width: 1000px; margin: 0 auto; background-color: red"
      :items="heavyList"
    >
      <template v-slot:before>
        <thead class="text-left">
          <tr>
            <th>Index</th>
            <th v-for="col in columns" :key="'1--' + col.name">
              {{ col.name }}
            </th>
          </tr>
        </thead>
      </template>

      <template v-slot:after>
        <tfoot class="text-left">
          <tr>
            <th>Index</th>
            <th v-for="col in columns" :key="'2--' + col.name">
              {{ col.name }}
            </th>
          </tr>
        </tfoot>
      </template>

      <template v-slot="{ item: row, index }">
        <tr :key="index">
          <td>#{{ index }}</td>
          <td v-for="column in columns" :key="index + '-' + column.name">
            {{ row[column.prop] }}
          </td>
        </tr>
      </template>
    </q-virtual-scroll>
  </div>
</template>

<script>
const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%',
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%',
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%',
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%',
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%',
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%',
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%',
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%',
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%',
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%',
  },
];

const columns = [
  'name',
  'calories',
  'fat',
  'carbs',
  'protein',
  'sodium',
  'calcium',
  'iron',
];

const heavyList = [];

// adding same data multiple times to
// create a huge list
for (let i = 0; i <= 1000; i++) {
  Array.prototype.push.apply(heavyList, rows);
}

export default {
  setup() {
    return {
      heavyList,
      columns,
    };
  },
};
</script>
