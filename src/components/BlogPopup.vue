<template>
    <div class="blog-popup">
        <div class="header"></div>
        <div class="popup-content container">
            <blockquote class="blockquote text-center pt-5">
                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
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
        </div>
    </div>
</template>
<script>
import jQuery from 'jquery'
export default {
    methods: {
        show(){},
        hide(){}
    },
    mounted(){
        // jQuery('body').css({
        //     overflow: 'hidden'
        // })
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
    overflow: auto;
    background: white;
    z-index: 2000;

    .header{
        width: 100%;
        height: 50vh;
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url('/footer-background.jpg');
        z-index: 0;
        @media(max-width: 768px){
            background-attachment:local;
        }
    }
    .popup-content{
        position: relative;
        z-index: 1;
    }
}
</style>
