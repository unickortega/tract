<template>
    <div class="photo-container">
        <img ref="image" :src="source">
        <div class="gradient"></div>
    </div>
</template>
<script>
import jQuery from 'jquery'
export default {
    props: {
        source: {
            type: String,
            required: true
        }
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
        this.$refs['image'].onload =()=>{
            this.resizeImage()
        }
        window.resizeables.push(this.resizeImage)
    }
}
</script>
<style lang="scss" scoped>
.photo-container{
    position: relative;
    padding: 0px;
    overflow: hidden;
    .gradient{
        position: absolute;
        height: 105%;
        width: 105%;
        transform: translate(-50%,-50%);
        left: 50%;
        top: 50%;
        background-image: linear-gradient(to bottom right, #5a5753,black);
        opacity: 0.5;
        transition: 500ms ease all;
    }
    img{
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        transition: 500ms ease all;
    }
    &:hover{
        img{
            transform: translate(-50%,-50%) scale(1.25);
        }
        .gradient{
            opacity: 0;
        }
    }
}
</style>
