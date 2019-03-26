<template>
    <div class="background" :style="'background-image: url('+asset('/3.jpg')+')'">
      <div class="gradient"></div>
      <div class="position-absolute p-3" style="z-index: 1;">
        <logo/>
      </div>
      <div class="content">
        <div>
          <h1 class="p-3" style="font-family: 'Lobster', cursive; color: white; max-width:500px;">
            For <span class="gold">God</span> so loved the world that he <span class="gold">gave his</span> one and only <span class="gold">Son</span>, that whoever believes in him shall not perish but have eternal life.
          </h1>
          <h5 style="font-family: 'Lobster', cursive; color: white;">
            John 3:16
          </h5>
        </div>
      </div>
    </div>
</template>
<script>
import jQuery from 'jquery'
import Logo from '@/components/logo'

export default {
  components: {
    Logo,
  },
    methods: {
        resizeImage(){
            var w = this.$refs['image'].width
            var h = this.$refs['image'].height
            var hquotient = h / w

            var wh = jQuery(this.$refs['image']).parent().width() * hquotient

            if(wh < jQuery(this.$refs['image']).parent().height()){
                jQuery(this.$refs['image']).css({
                height: '101%',
                width: 'initial'
                })
            }
            else{
                jQuery(this.$refs['image']).css({
                width: '101%',
                height: 'initial'
                })
            }
        }
    },
    mounted(){
      // 
    }
}
</script>

<style lang="scss" scoped>
.content{
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
}
.background{
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: gray;
  position: relative;
  .gradient{
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0px;
    background-image: linear-gradient(to bottom right, #5a5753, #214d63);
    mix-blend-mode: multiply;
  }
  img{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%,-50%);
    transition: 500ms ease all;
  }
}
</style>
