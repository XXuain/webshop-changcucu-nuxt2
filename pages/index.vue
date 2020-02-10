<template>
  <div class="">
    <!-- slider -->
    <section class="wrapper">
      <div class="slider">
        <div id="homeSlider" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#homeSlider" data-slide-to="0" class="active"></li>
            <li data-target="#homeSlider" data-slide-to="1"></li>
            <li data-target="#homeSlider" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-none d-md-block w-100"
                src="~/assets/img/home/slide/slide-01.png"
                alt="First slide"
              />
              <img
                class="d-block d-md-none w-100"
                src="~/assets/img/home/slide/slide-01.png"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-none d-md-block w-100"
                src="~/assets/img/home/slide/slide-01.png"
                alt="Second slide"
              />
              <img
                class="d-block d-md-none w-100"
                src="~/assets/img/home/slide/slide-01.png"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-none d-md-block w-100"
                src="~/assets/img/home/slide/slide-01.png"
                alt="Third slide"
              />
              <img
                class="d-block d-md-none w-100"
                src="~/assets/img/home/slide/slide-01.png"
                alt="Second slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#homeSlider"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#homeSlider"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>

    <!-- 最新作品 LATEST WORKS -->
    <section class="wrapper wrapper-top">
      <div class="container">
        <!-- 標題 -->
        <div class="row heading heading-2">
          <div class="col-12">
            <p class="display-4 subheading">最新作品 ></p>
          </div>
          <div class="col-md-6">
            <h2 class="h2 EN-font-family">LATEST WORKS</h2>
          </div>
          <div class="col-md-6 text-right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam amet
              vero eaque ex, fugit non deserunt aut consectetur provident.
            </p>
          </div>
        </div>
        <div>
          <div class="row">
            <div class="col-12 col-md mb-4">
              <div class="border p-3">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content content-center">
                    <div class="portfolio-name">
                      <router-link
                        :to="{
                          name: 'WorksDetail',
                          params: { productId: '-LZwRWkA0SgDyNU4DRta' }
                        }"
                        class="display-3"
                      >
                        水桶包</router-link
                      >
                    </div>
                    <div class="portfolio-subname">
                      <a href="#">[ CB-hobo-bag ]</a>
                    </div>
                  </div>
                  <img
                    src="~/assets/img/home/HB-01-1.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="col-12 col-md mb-4">
              <div class="border p-3">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content content-center">
                    <div class="portfolio-name">
                      <router-link
                        :to="{
                          name: 'WorksDetail',
                          params: { productId: '-LZwRWkA0SgDyNU4DRta' }
                        }"
                        class="display-3"
                      >
                        水桶包</router-link
                      >
                    </div>
                    <div class="portfolio-subname">
                      <a href="#">[ CB-hobo-bag ]</a>
                    </div>
                  </div>
                  <img
                    src="~/assets/img/home/HB-01-2.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 作品列表 WORKS LIST -->
    <section class="wrapper wrapper-top bg-light pt-5">
      <div class="container py-5">
        <!-- 標題 -->
        <div class="row heading">
          <div class="col-12">
            <p class="display-4 subheading">商品列表 ></p>
          </div>
          <div class="col-md-6">
            <h2 class="h2">WORKS LIST</h2>
          </div>
          <div class="col-md-6 item-filter">
            <ul class="nav justify-content-end">
              <li class="nav-item item-filter">
                <router-link to="works" class="nav-link">
                  全部<span>9</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <!-- 長夾 -->
        <div class="row flex-column-reverse flex-md-row mb-4">
          <div class="col-md-6 pr-md-0">
            <div
              class="bg-cover portfolio-hover"
              style="background-image: url('~/assets/img/home/LW-01-4.jpg')"
            >
              <div class="portfolio-hover-content content-center">
                <div class="portfolio-name">
                  <router-link
                    :to="{
                      name: 'WorksDetail',
                      params: { productId: '-LWLfBetIilW0IOEymvs' }
                    }"
                    class="display-3"
                    >零錢包長夾</router-link
                  >
                </div>
                <div class="portfolio-subname">
                  <a href="#">[ LW-coinpurse-set ]</a>
                </div>
              </div>
              <img
                src="~/assets/img/home/LW-01-4.jpg"
                class="img-fluid d-block d-md-none"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-2 px-md-0 order-1 order-md-0">
            <div class="d-flex align-items-center h-100 bg-white py-5 pl-4">
              <div class="my-5">
                <p class="mb-0"><small>長夾 ></small></p>
                <h3 class="h5">Long wallets</h3>
              </div>
            </div>
          </div>
          <div class="col-md-4 pl-md-0">
            <div
              class="bg-cover portfolio-hover"
              style="background-image: url('~/assets/img/home/LW-01-2.jpg')"
            >
              <div class="portfolio-hover-content content-center">
                <div class="portfolio-name">
                  <router-link
                    :to="{
                      name: 'WorksDetail',
                      params: { productId: '-LWLfBetIilW0IOEymvs' }
                    }"
                    class="display-3"
                    >零錢包長夾</router-link
                  >
                </div>
                <div class="portfolio-subname">
                  <a href="#">[ LW-coinpurse-set ]</a>
                </div>
              </div>
              <img
                src="~/assets/img/home/LW-01-2.jpg"
                class="img-fluid d-block d-md-none"
                alt=""
              />
            </div>
          </div>
        </div>

        <!-- 零錢包 -->
        <div class="row flex-column-reverse flex-md-row mb-4">
          <div class="col-md-2 order-1 order-md-0 pr-md-0">
            <div class="d-flex align-items-center h-100 bg-white py-md-5 pl-4">
              <div class="my-5">
                <p class="mb-0"><small>零錢包 ></small></p>
                <h3 class="h5">Coin purse</h3>
              </div>
            </div>
          </div>
          <div class="col-md-6 px-md-0">
            <div
              class="bg-cover portfolio-hover"
              style="background-image: url('~/assets/img/home/CP-01-1.jpg')"
            >
              <div class="portfolio-hover-content content-center">
                <div class="portfolio-name">
                  <router-link
                    :to="{
                      name: 'WorksDetail',
                      params: { productId: '-LWLfBEV-YcnyKKMWJAG' }
                    }"
                    class="display-3"
                    >扁型零錢包</router-link
                  >
                </div>
                <div class="portfolio-subname">
                  <a href="#">[ CP-coin-purse ]</a>
                </div>
              </div>
              <img
                src="~/assets/img/home/CP-01-1.jpg"
                class="img-fluid d-block d-md-none"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-4 pl-md-0">
            <div
              class="bg-cover portfolio-hover"
              style="background-image: url('~/assets/img/home/CP-02-2.jpg')"
            >
              <div class="portfolio-hover-content content-center">
                <div class="portfolio-name">
                  <router-link
                    :to="{
                      name: 'WorksDetail',
                      params: { productId: '-LWLfApCzTLwj5eFjT85' }
                    }"
                    class="display-3"
                    >方型零錢包</router-link
                  >
                </div>
                <div class="portfolio-subname">
                  <a href="#">[ CP-square ]</a>
                </div>
              </div>
              <img
                src="~/assets/img/home/CP-02-2.jpg"
                class="img-fluid d-block d-md-none"
                alt=""
              />
            </div>
          </div>
        </div>

        <!-- 錶帶 -->
        <div class="row flex-column-reverse flex-md-row mb-4">
          <div class="col-md-4 pr-md-0">
            <div
              class="bg-cover portfolio-hover"
              style="background-image: url('~/assets/img/home/WB-01-3.png'); background-position: top"
            >
              <div class="portfolio-hover-content content-center">
                <div class="portfolio-name">
                  <router-link
                    :to="{
                      name: 'WorksDetail',
                      params: { productId: '-LZwYUcvW4_GsB1LgbGr' }
                    }"
                    class="display-3"
                    >錶帶</router-link
                  >
                </div>
                <div class="portfolio-subname">
                  <a href="#">[ WB-simple ]</a>
                </div>
              </div>
              <img
                src="~/assets/img/home/WB-01-3.png"
                class="img-fluid d-block d-md-none"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-6 px-md-0">
            <div
              class="bg-cover portfolio-hover"
              style="
                background-image: url('~/assets/img/home/WB-01-7.png');
                    background-position: top
              "
            >
              <div class="portfolio-hover-content content-center">
                <div class="portfolio-name">
                  <router-link
                    :to="{
                      name: 'WorksDetail',
                      params: { productId: '-LZwYUcvW4_GsB1LgbGr' }
                    }"
                    class="display-3"
                    >錶帶</router-link
                  >
                </div>
                <div class="portfolio-subname">
                  <a href="#">[ WB-simple ]</a>
                </div>
              </div>
              <img
                src="~/assets/img/home/WB-01-7.png"
                class="img-fluid d-block d-md-none"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-2 order-1 order-md-0 pl-md-0">
            <div class="d-flex align-items-center h-100 bg-white py-md-5 pl-4">
              <div class="my-5">
                <p class="mb-0"><small>錶帶 ></small></p>
                <h3 class="h5">Watchband</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
// import fireAdmin from "~/plugins/firebase-admin";

export default {
  layout: "userLayout",
  components: {
    Logo
  },
  asyncData() {}
};
</script>

<style></style>
