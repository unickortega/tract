<template>
    <div class="photo-viewer">
        <img :src="asset('/1.jpg')" alt="">
    </div>
</template>
<script>
export default {
    methods: {
        adjustPhoto(){
            let img = jQuery(this.$el).find('img')[0]

            var w = img.width
            var h = img.height
            var hquotient = h / w

            var wh = jQuery(document).width() * hquotient

            if(wh < window.innerHeight){
                jQuery(img).css({
                    height: '90%',
                    width: 'initial'
                })
            }
            else{
                jQuery(img).css({
                width: '90%',
                height: 'initial'
                })
            }

        }
    },
    methods(){
        // window.resizeables.push(this.resizeImage)
        // window.scrollables.push(this.scrollEvent)
    }
}
</script>
<style lang="scss" scoped>
.photo-viewer{
    position: fixed;
    background: black;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    overflow: auto;
    z-index: 1010;
    img{
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
