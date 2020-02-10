/**
 * index.js 可放共用規則
 */
const state = () => ({
  productList: []
});
const getters = {
  productList: state => state.productList
};
const mutations = {
  SET_PRODUCT_LIST(state, payload) {
    state.productList = payload.length > 0 ? payload.data : [];
  }
};
const actions = {
  GET_PRODUCT_LIST({ commit }, params) {
    let data = [{}];
    commit("SET_PRODUCT_LIST", data);
  }
};

export { state, getters, mutations, actions };
