<template>
    <div class="blog-card">
        <photo-container class="image-container" :source="asset('/1.jpeg')"/>
        <div class="blog-title">h4. Bootstrap heading</div>
        <p>
            Have you ever wanted to aesthetically group together multiple elements on a page? Have you ever wanted to look classy while you do it? Now you can!
        </p>
    </div>
</template>
<script>
import PhotoContainer from '@/components/PhotoContainer'
export default {
    components: {
        PhotoContainer
    }
}
</script>
<style lang="scss" scoped>
.blog-card{
    .image-container{
        position: relative;
        height: 150px;
        overflow: hidden;
        img{
            position: absolute;
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .blog-title{
        font-size: 20px;
        margin: 15px 0px;
        font-weight: bold;
    }
}
</style>
