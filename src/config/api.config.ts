/**
 * @Author: xiaocao
 * @Date:   2022-10-26 09:46:30
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-01-30 10:26:38
 */
// 后端API应用地址
export const baseURL =
  process.env.NODE_ENV === 'development'
    ? '//127.0.0.1:8088/'
    : '//8088.gr931814.10vq2pby.paas.mkyun.cn/';

// api路径
export const PATH = {
  // 用户管理
  user: '/user/',
  login: '/user/login',
  change_password: '/user/change_password',
  register: '/user/register',

  //APP接口地址
  //APP  - 选型应用接口url ——————————————————————————————————————————————————————————————————————————————————
  selection: '/app/equipment_models_selection/', //选型
  scraper_conveyer_type:
    '/app/equipment_models_selection/scraper_conveyer_type/', //刮板机类型
  scraper_conveyer: '/app/equipment_models_selection/scraper_conveyer/', //刮板机类型
  chain_layout_type: '/app/equipment_models_selection/chain_layout_type/', //链条布置类型
  electromotor: '/app/equipment_models_selection/electromotor/', //电动机
  reducer: '/app/equipment_models_selection/reducer/', //减速器

  vender: '/app/equipment_models_selection/vender/', //厂家
  chain: '/app/equipment_models_selection/chain/', //；链条
  //APP  - 选型应用接口url ——————————————————————————————————————————————————————————————————————————————————
};
