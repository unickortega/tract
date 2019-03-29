<template>
    <div class="blog-card">
        <photo-container class="image-container" :source="markdown.picture"/>
        <div class="blog-title">{{markdown.title}}</div>
        <p>
            {{markdown.description}}
        </p>
    </div>
</template>
<script>
import PhotoContainer from '@/components/PhotoContainer'
export default {
    components: {
        PhotoContainer
    },
    props: {
        markdown: {
            type: Object,
            required: true
        }
    },
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
