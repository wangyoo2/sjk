import {
  GET_CUR_MENU,
  GET_MENU_LIST
} from './mutation-types.js'
import {
  getList as getListByMenu
} from 'src/service/menu'



export default {
  async getMenuList({state,commit}) {
    try{
      state.loading = true;
      let list = await getListByMenu();
      commit(GET_MENU_LIST, list)
    }finally{
      state.loading = false;
    }
  },
  getCurMenu({state,commit},path) {
    const menuMap  = state.menuMap;
    const cur = menuMap[path];
    commit(GET_CUR_MENU, cur)
  },
}
