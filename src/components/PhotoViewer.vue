<template>
    <popup ref="popup">
        <div class="photo-viewer" v-if="photo">
            <div class="image" :style="`background-image: url(${photo.src})`"></div>
        </div>
        <div class="navigation">
            <div @click="image_index--"><</div>
            <div @click="image_index++">></div>
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
            console.log(data)
            this.photo = data
            this.$refs.popup.show(position)
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
