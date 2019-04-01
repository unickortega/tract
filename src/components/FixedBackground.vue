<template>
    <div ref="footer" class="photo-container fixed-background">
        <img ref="image" :src="source">
        <div class="gradient" :class="gradient"></div>
        <div class="position-relative">
            <slot/>
        </div>
    </div>
</template>
<script>
import jQuery from 'jquery'
export default {
    props: {
        source: {
            type: String
        },
        gradient: {
            type: String,
            default: ''
        }
    },
    methods: {
        resizeImage(){
            var w = this.$refs['image'].width
            var h = this.$refs['image'].height
            var hquotient = h / w

            var wh = jQuery(document).width() * hquotient

            if(wh < window.innerHeight){
                jQuery(this.$refs['image']).css({
                    height: (window.width > 768)? window.innerHeight + 10 : '100%',
                    width: 'initial'
                })
            }
            else{
                jQuery(this.$refs['image']).css({
                width: '101%',
                height: 'initial'
                })
            }
        },
        scrollEvent(){
            var footer_position = jQuery(this.$refs.footer).position()
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
            jQuery(this.$refs['image']).css({
                top: (scrollTop - footer_position.top)
            })
        }
    },
    mounted(){
        this.$refs['image'].onload = () =>{
            this.resizeImage()
        }
        this.scrollEvent()
        window.resizeables.push(this.resizeImage)
        window.scrollables.push(this.scrollEvent)
    },
}
</script>
<style lang="scss" scoped>
.fixed-background{
    position: relative;
    padding: 50px 0px;
    overflow: hidden;
    min-height: 100vh;
    border-top: 1px solid white;
    // background-size: cover;
    // background-attachment: fixed;
    // background-repeat: no-repeat;
    // background-position: center center;
    // @media(max-width: 768px){
    //     background-attachment:local;
    // }
    .gradient{
        position: absolute;
        height: 105%;
        width: 105%;
        transform: translate(-50%,-50%);
        left: 50%;
        top: 50%;
        opacity: 0.5;
        &.gray{
            background-image: linear-gradient(to bottom right, #5a5753,black);
        }
        &.violet{
            background-image: linear-gradient(to bottom right, #711a9a, black);
        }
    }
    img{
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
    }

    @media(max-width: 768px){
        img{
            top: 50%!important;
            transform: translateX(-50%) translateY(-50%);
        }
    }
}
</style>
