<template>
  <div>
    <NavbarComponent />
    <HomeComponent />
    <ProductComponent />
    <BlogComponent />
    <WorkComponent />
    <PricingComponent />
    <FaqComponent />
    <SubscribeComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "../components/LandingPageComponents/NavbarComponent.vue";
import HomeComponent from "../components/LandingPageComponents/HomeComponent.vue";
import ProductComponent from "../components/LandingPageComponents/ProductComponent.vue";
import BlogComponent from "../components/LandingPageComponents/BlogComponent.vue";
import WorkComponent from "../components/LandingPageComponents/WorkComponent.vue";
import PricingComponent from "../components/LandingPageComponents/PricingComponent.vue";
import FaqComponent from "../components/LandingPageComponents/FaqComponent.vue";
import SubscribeComponent from "../components/LandingPageComponents/SubscribeComponent.vue";
import FooterComponent from "../components/LandingPageComponents/FooterComponent.vue";

export default {
  name: "LandingPage",
  components: {
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    BlogComponent,
    WorkComponent,
    PricingComponent,
    FaqComponent,
    SubscribeComponent,
    FooterComponent,
  },
};
</script>
