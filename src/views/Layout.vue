<template>
 <TopNav/>
  <AppHeader/>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <Footer/>
</template>

<script>
import TopNav from "../components/TopNav.vue";
import AppHeader from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Layout",
  components: {Footer, AppHeader, TopNav}
}
</script>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>
