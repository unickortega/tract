<template>
    <div class="blogs">
        <h1 class="text-center mb-5">
            <span class="content-header">My Blogs</span>
        </h1>
    
        <div class="row">
            <div class="col-md-4">
                <blog-card/>
            </div>
            <div class="col-md-4">
                <blog-card/>
            </div>
            <div class="col-md-4">
                <blog-card/>
            </div>
            <div class="col-md-4">
                <blog-card/>
            </div>
        </div>
        <blog-popup/>
    </div>
</template>
<script>
import BlogCard from '@/components/BlogCard'
import BlogPopup from '@/components/BlogPopup'
export default {
    components: {
        BlogCard,
        BlogPopup
    }
}
</script>

<style lang="scss" scoped>
.blogs{
    padding: 20px 15px;
}
.content-header{
    margin: 0 20px;
    padding: 0 5px;
    font-family: 'EB Garamond', serif;
    position: relative;
    &::after, &::before{
        background: orange;
        font-size: 100px;
        content: '';
        width: 20px;
        height: 5px;
        position: absolute;
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 5px;
    }
    &::after{
        left: 100%;
    }
}
</style>
