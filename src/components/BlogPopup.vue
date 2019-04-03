<template>
    <popup ref="popup">
        <div class="blog-body" v-if="markdown">
            <div class="header" :style="`background-image: url(${markdown.picture});`"></div>
            <div class="popup-content container">
                <blockquote class="blockquote text-center pt-5">
                    <p class="mb-0">{{markdown.title}}</p>
                    <footer class="blockquote-footer">{{markdown.date}}</footer>
                </blockquote>
                <component :is="markdown.md" v-if="markdown"/>
            </div>
        </div>
    </popup>
</template>
<script>
import Popup from '@/components/Popup'
export default {
    components: {
        Popup
    },
    data: ()=>({
        position: {
            x: 0,
            y: 0
        },
        transition_speed: 500,
        markdown: null
    }),
    methods: {
        show(position={x:0,y:0}, component){
            this.markdown = component
            this.$refs.popup.show(position)
        },
    },
    mounted(){
        // 
    }
}
</script>
<style lang="scss" scoped>
.blog-body{
    .header{
        width: 100%;
        height: 70vh;
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center center;
        z-index: 0;
        @media(max-width: 768px){
            background-attachment:local;
        }
    }
    .popup-content{
        position: relative;
        z-index: 1;
    }

    .close-popup{
        position: fixed;
        right: 20px;
        top: 15px;
        background-color: gray;
        height: 55px;
        width: 55px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 1000;
        &::after,&::before{
            transition: 200ms ease all;
        }
        &::after{
            content: "";
            position: absolute;
            height: 1px;
            width: 30px;
            background: white;
            transform: rotate(45deg);
            top: 28px;
            left: 12px;
        }
        &::before{
            content: "";
            position: absolute;
            height: 1px;
            width: 30px;
            background: white;
            transform: rotate(-45deg);
            top: 28px;
            left: 12px;
        }
        &:hover{
            &::after,&::before{
                transform: rotate(0deg);
            }
        }
    }
}
</style>
