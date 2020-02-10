<template>
  <div>
    <header class="wrapper">
      <nav
        class="client-navbar client-navbar-fixed-top"
        :class="{ show: openNav }"
      >
        <div class="client-navbar-header">
          <a
            href="#"
            class="client-navbar-mobil-btn"
            :class="{ open: openNav }"
            @click="openNav = !openNav"
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
          <div class="client-navbar-icon">
            <a
              href="#"
              class="client-navbar-icon-link"
              @click="openNav = !openNav"
            >
              <img src="~/assets/img/icon-ig.svg" width="26" alt="" />
            </a>
            <a
              href="#"
              class="client-navbar-icon-link"
              @click="openNav = !openNav"
            >
              <img src="~/assets/img/icon-fb.svg" width="26" alt="" />
            </a>
          </div>
          <router-link to="/client/home" class="client-navbar-logo">
            <img
              src="~/assets/img/logo.svg"
              alt=""
              @click="openNav = !openNav"
            />
          </router-link>
          <div class="client-navbar-car">
            <button class="btn" data-toggle="modal" data-target="#cartModal">
              <img
                src="~/assets/img/icon-shopping-cart.svg"
                width="26"
                alt=""
              />
            </button>
          </div>
        </div>
        <div class="client-navbar-footer">
          <div class="client-navbar-search">
            <img
              src="~/assets/img/icon-search.svg"
              width="15"
              alt=""
              @click="openNav = !openNav"
            />
          </div>
          <div class="client-navbar-nav">
            <router-link to="/client/works" class="client-navbar-nav-link">
              <span @click="openNav = !openNav">商品列表</span>
            </router-link>
            <a
              href="#"
              class="client-navbar-nav-link"
              @click.prevent="openNav = !openNav"
              >訂製服務</a
            >
            <a
              href="#"
              class="client-navbar-nav-link"
              data-toggle="modal"
              data-target="#memberModal"
              @click="openNav = !openNav"
              >會員登入</a
            >
          </div>
          <div class="client-navbar-text">
            <a
              href="#"
              class="btn btn-block btn-outline-dark d-lg-none mb-3"
              data-toggle="modal"
              data-target="#memberModal"
              @click="openNav = !openNav"
              >會員登入</a
            >
            <router-link
              to="/login"
              class="client-navbar-text-link d-none d-lg-block mr-0"
              @click="openNav = !openNav"
              >後台登入</router-link
            >
            <router-link
              to="/login"
              class="btn btn-block btn-outline-dark d-lg-none mb-3"
              @click="openNav = !openNav"
              >後台登入</router-link
            >
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 樣式
      openNav: false,
      scrollTop: null, // 滾動調預設位置
      isScrollTop: false // 按鈕預設狀態
    };
  },
  mounted() {},
  methods: {},
  computed: {},
  created() {}
};
</script>
