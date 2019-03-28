<template>
    <div class="blog-popup">
        <div class="close-popup" @click="hide"></div>
        <div class="blog-body">
            <div class="header" :style="`background-image: url(${asset('/1.jpg')});`"></div>
            <div class="popup-content container">
                <blockquote class="blockquote text-center pt-5">
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer class="blockquote-footer">March 20, 2019</footer>
                </blockquote>
                <ul class="list-unstyled">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                    <li>Nulla volutpat aliquam velit
                        <ul>
                        <li>Phasellus iaculis neque</li>
                        <li>Purus sodales ultricies</li>
                        <li>Vestibulum laoreet porttitor sem</li>
                        <li>Ac tristique libero volutpat at</li>
                        </ul>
                    </li>
                    <li>Faucibus porta lacus fringilla vel</li>
                    <li>Aenean sit amet erat nunc</li>
                    <li>Eget porttitor lorem</li>
                </ul>
                <ul class="list-unstyled">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                    <li>Nulla volutpat aliquam velit
                        <ul>
                        <li>Phasellus iaculis neque</li>
                        <li>Purus sodales ultricies</li>
                        <li>Vestibulum laoreet porttitor sem</li>
                        <li>Ac tristique libero volutpat at</li>
                        </ul>
                    </li>
                    <li>Faucibus porta lacus fringilla vel</li>
                    <li>Aenean sit amet erat nunc</li>
                    <li>Eget porttitor lorem</li>
                </ul>
                <markdown/>
            </div>
        </div>
    </div>
</template>
<script>
import jQuery from 'jquery'
import { setTimeout } from 'timers';
import Markdown from '@/md/markdown.md'
export default {
    data: ()=>({
        position: {
            x: 0,
            y: 0
        },
        transition_speed: 500
    }),
    components: {
        Markdown
    },
    methods: {
        show(position={x:0,y:0}){
            let _position = this.calculateCenter(position);
            this.position = _position;
            console.log(_position)
            jQuery(this.$el).css({transition: 'initial'})
            jQuery(this.$el).css({left: _position.x, top: _position.y})
            jQuery(this.$el).css({transform: 'scale(0)'})
            jQuery(this.$el).css({display: 'block'})
            jQuery(this.$el).find('.blog-body').css({opacity: 0})
            jQuery(this.$el).css({transition: `${this.transition_speed}ms ease all`})
            jQuery(this.$el).find('.blog-body').css({transition: `${this.transition_speed}ms ease all`})
            setTimeout(()=>{
                jQuery(this.$el).css({left: 0, top: 0})
                jQuery(this.$el).css({transform: 'scale(1)'})
                
                setTimeout(()=>{
                    jQuery('body').css({
                        overflow: 'hidden'
                    })
                    jQuery(this.$el).find('.blog-body').css({opacity: 1})
                    jQuery(this.$el).find('.blog-body').scrollTop(0)
                }, this.transition_speed)
            }, 10)
        },
        hide(){
            jQuery(this.$el).find('.blog-body').css({transition: 'initial'})
            jQuery(this.$el).css({transform: 'scale(0)'})
            jQuery(this.$el).find('.blog-body').css({opacity: 0})

            jQuery(this.$el).css({left: this.position.x, top: this.position.y})
            setTimeout(()=>{
                jQuery('body').css({
                    overflow: 'initial'
                })
                jQuery(this.$el).css({
                    display: 'none'
                })
            }, this.transition_speed)
        },
        calculateCenter(position){
            return {
                x: position.x - (window.innerWidth / 2),
                y: position.y - (window.innerHeight / 2),
            }
        }
    },
    mounted(){
        // 
    }
}
</script>
<style lang="scss" scoped>
.blog-popup{
    position: fixed;
    display: none;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    background: white;
    z-index: 2000;

    .blog-body{
        overflow: auto;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
    }

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
