<template>
  <div>
    <NavbarAboutComponent />
    <HomeAboutComponent />
    <QuoteComponent />
    <AdvisorComponent />
    <FigureComponent />
    <SubscribeComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarAboutComponent from "../components/AboutComponent/NavbarAboutComponent.vue";
import HomeAboutComponent from "../components/AboutComponent/HomeAboutComponent.vue";
import QuoteComponent from "../components/AboutComponent/QuoteComponent.vue";
import AdvisorComponent from "../components/AboutComponent/AdvisorComponent.vue";
import FigureComponent from "../components/AboutComponent/FigureComponent.vue";
import SubscribeComponent from "../components/LandingPageComponents/SubscribeComponent.vue";
import FooterComponent from "../components/LandingPageComponents/FooterComponent.vue";

export default {
  name: "AboutUs",
  components: {
    NavbarAboutComponent,
    HomeAboutComponent,
    QuoteComponent,
    AdvisorComponent,
    FigureComponent,
    SubscribeComponent,
    FooterComponent,
  },
};
</script>
