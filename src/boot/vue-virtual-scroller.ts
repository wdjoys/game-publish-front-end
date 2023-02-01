/**
 * @Author: xiaocao
 * @Date:   2023-02-01 10:39:38
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-01 10:42:05
 */
import { boot } from 'quasar/wrappers';

import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

export default boot(({ app }) => {
  app.component('RecycleScroller', RecycleScroller);
});
