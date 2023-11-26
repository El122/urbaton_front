<template>
  <Header></Header>
  <main>
    <Aside></Aside>
    <router-view />
    <InfoMessage></InfoMessage>
  </main>
</template>

<script>
import Aside from './components/Aside.vue';
import Header from './components/Header.vue';
import InfoMessage from './components/UI/infoMessage.vue';

export default {
  components: {
    InfoMessage,
    Aside,
    Header
},
  data() {
    return {
      
    }
  },
}

</script>

<style lang="scss">

</style>
