<template>
  <div>
    <UserHeader />
    <main class="has-client-navbar-fixed-top">
      <nuxt />
    </main>
    <UserFooter />
  </div>
</template>

<script>
import UserHeader from "~/components/UserHeader.vue";
import UserFooter from "~/components/UserFooter.vue";

export default {
  components: { UserHeader, UserFooter }
};
</script>
