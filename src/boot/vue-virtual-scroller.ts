/**
 * @Author: xiaocao
 * @Date:   2023-01-30 15:38:50
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-01-30 15:57:53
 */

import { boot } from 'quasar/wrappers';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import VueVirtualScroller from 'vue-virtual-scroller';

export default boot(({ app }) => {
  app.use(VueVirtualScroller);
});
