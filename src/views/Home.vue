<template>
  <section class="">
    <main-cover/>
    <fixed-background gradient="gray" :source="asset('/sunset.jpg')">
      <div class="container">
        <div class="row flex-row-reverse">
          <div class="col-md-5">
            <tract/>
          </div>
          <div class="col-md-7">
            <h3 class="pt-5" style="font-family: 'Cabin Sketch', cursive; color: white;">
            You see, at just the right time, when we were still powerless, Christ died for the ungodly.
            Very rarely will anyone die for a righteous person, though for a good person someone might possibly dare to die.
            But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.
            </h3>
            <h5 style="font-family: 'Cabin Sketch', cursive; color: white;">Romans 5:6-8</h5>
          </div>
        </div>
      </div>
    </fixed-background>
    <fixed-background gradient="violet" :source="asset('/worship2.jpg')" style="display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;">
      <h1 style="font-family: 'Niconne', cursive; color: white;" class="p-3">
        ... speaking to one another with psalms, hymns, and songs from the Spirit. Sing and make music from your heart to the Lord,
        always giving thanks to God the Father for everything, in the name of our Lord Jesus Christ.
      </h1>
      <h5 style="font-family: 'Niconne', cursive; color: white;">Ephesians 5:19-20</h5>
    </fixed-background>
    <div class="position-relative">
      <div class="bg-white min-vh">
        <div class="container">
          <blogs/>
        </div>
      </div>
      <div class="container-fluid bg-secondary" style="box-shadow: 0px -12px 20px -9px rgba(0, 0, 0, 0.19);">
        <div class="row">
          <div class="col-md-8 p-0">
            <photo-grid/>
          </div>
          <div class="col-md-4 p-0">
            <flat-card class="card-gray">
              <template v-slot:header>Lorem ipsum</template>
              <router-link :to="{name:'about'}">Have</router-link> you ever wanted to aesthetically group together multiple elements on a page? Have you ever wanted to look classy while you do it? Now you can!
            </flat-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MainCover from '@/components/MainCover'
import FlatCard from '@/components/FlatCard'
import PhotoGrid from '@/components/PhotoGrid'
import Blogs from '@/components/Blogs'
import FixedBackground from '@/components/FixedBackground'
import Tract from '@/components/Tract'

export default {
  name: 'home',
  components: {
    HelloWorld,
    FlatCard,
    MainCover,
    PhotoGrid,
    Blogs,
    FixedBackground,
    Tract,
  },
  mounted(){
    document.title = 'Uelmar Ortega'
  }
}
</script>

<style lang="scss" scoped>
.gold{
  color:#ffef3d;
}

.min-vh{
  min-height: 100vh;
}
</style>
