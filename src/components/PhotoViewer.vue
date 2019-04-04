<template>
    <popup ref="popup">
        <div class="photo-viewer" v-if="photo">
            <div class="image" :style="`background-image: url(${this.images[image_index]})`"></div>
        </div>
        <div class="navigation">
            <div @click="image_index--" :style="(image_index == 0 ? 'color: #2d2d2d': '')"><</div>
            <div @click="image_index++" :style="(image_index >= this.images.length - 1 ? 'color: #2d2d2d': '')">></div>
        </div>
    </popup>
</template>
<script>
import Popup from '@/components/Popup'
export default {
    components:{
        Popup
    },
    props: {
        images: {
            type: Array,
            default: null
        }
    },
    data: () => ({
        photo: null,
        image_index: ''
    }),
    methods: {
        show(position, data){
            this.image_index = this.images.findIndex(i => i == data.src)
            this.photo = data
            this.$refs.popup.show(position)
        }
    },
    mounted(){
        jQuery(document).keyup((ev)=>{
            if(this.$refs.popup.visible){
                if(ev.which == 37){
                    this.image_index--
                }
                if(ev.which == 39){
                    this.image_index++
                }
                if(ev.which == 27){
                    this.$refs.popup.hide()
                }
            }
        })
    },
    watch: {
        image_index(){
            if(this.image_index < 0){
                this.image_index = 0
            }

            if(this.image_index >= this.images.length){
                this.image_index = this.images.length - 1
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.photo-viewer{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #343434;
    .image{
        height: 80%;
        width: 90%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-origin: content-box;
    }
}
.navigation{
    color: #a2a2a2;
    font-size: 100px;
    div:hover{
        color: white;
        cursor: pointer;
    }
    div:first-child{
        position: absolute;
        top: 50%;
        left: 0px;
        transform: translateY(-50%);
    }

    div:last-child{
        position: absolute;
        top: 50%;
        right: 0px;
        transform: translateY(-50%);
    }
}
</style>
