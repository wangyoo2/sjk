import {
  RECORD_USERINFO,
  INIT_USERINFO,
  USER_LOGOUT,
  GET_CUR_MENU,
  GET_MENU_LIST
} from './mutation-types.js'

import {
  setStore,
  getStore,
  removeStore,
  setToken,
} from '../config/mUtils'

export default {
  //记录用户本地信息
  [RECORD_USERINFO](state, {
    token,
    user,
    menus
  }) {
    state.login = true;
    setStore('user2', user)
    setStore('menus2', menus)
    setToken(token);
  },
  //初始化用户信息
  [INIT_USERINFO](state) {
    state.user = getStore('user2', 'json');
    state.menus = getStore('menus2', 'json');
  },
  [USER_LOGOUT](state, info) {
    setToken('');
    removeStore('user2')
    removeStore('menus2')
  },
  [GET_MENU_LIST](state, menus) {
    state.menus = menus
    setStore('menus2', menus)
  },
  [GET_CUR_MENU](state, path) {
    let menu = state.curMenu = state.menuMap[path];
    const breadcrumb = [];
    while (menu) {
      breadcrumb.push(menu);
      menu = menu.parent;
    }
    if(breadcrumb.length>0)
      state.breadcrumb = breadcrumb.reverse();
  }
}
