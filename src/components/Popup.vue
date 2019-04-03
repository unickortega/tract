<template>
    <div class="unick-popup">
        <div class="close-popup" @click="hide"></div>
        <div class="unick-body">
            <slot/>
        </div>
    </div>
</template>
<script>
import jQuery from 'jquery'
import { setTimeout } from 'timers';
export default {
    data: ()=>({
        position: {
            x: 0,
            y: 0
        },
        transition_speed: 500,
    }),
    methods: {
        show(position={x:0,y:0}){
            let _position = this.calculateCenter(position);
            this.position = _position;

            this.$nextTick(()=>{
                jQuery(this.$el).css({transition: 'initial'})
                jQuery(this.$el).css({left: _position.x, top: _position.y})
                jQuery(this.$el).css({transform: 'scale(0)'})
                jQuery(this.$el).css({display: 'block'})
                jQuery(this.$el).find('.unick-body').css({opacity: 0})
                jQuery(this.$el).css({transition: `${this.transition_speed}ms ease all`})
                jQuery(this.$el).find('.unick-body').css({transition: `${this.transition_speed}ms ease all`})
                setTimeout(()=>{
                    jQuery(this.$el).css({left: 0, top: 0})
                    jQuery(this.$el).css({transform: 'scale(1)'})
                    
                    setTimeout(()=>{
                        jQuery('body').css({
                            overflow: 'hidden'
                        })
                        jQuery(this.$el).find('.unick-body').css({opacity: 1})
                        jQuery(this.$el).find('.unick-body').scrollTop(0)
                        jQuery(this.$el).css({transition: `${this.transition_speed / 2}ms ease all`})
                    }, this.transition_speed)
                }, 10)
            })
        },
        hide(){
            jQuery(this.$el).find('.unick-body').css({transition: 'initial'})
            jQuery(this.$el).css({transform: 'scale(0)'})
            jQuery(this.$el).find('.unick-body').css({opacity: 0})

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
.unick-popup{
    position: fixed;
    display: none;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    background: white;
    z-index: 2000;

    .unick-body{
        overflow: auto;
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0px;
        top: 0px;
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
