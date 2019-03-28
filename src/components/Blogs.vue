<template>
    <div class="blogs">
        <h1 class="text-center mb-5">
            <span class="content-header">My Blogs</span>
        </h1>
    
        <div class="row">
            <div class="col-md-4" v-for="(markdown,index) in markdowns" v-bind:key="index">
                <blog-card @click.native="showBlog($event, markdown)" :markdown="markdown"/>
            </div>
        </div>
        <blog-popup ref="blog-popup"/>
    </div>
</template>
<script>
import BlogCard from '@/components/BlogCard'
import BlogPopup from '@/components/BlogPopup'

const requireContext = require.context('@/md', true, /.*\.md$/)
const cover_requireContext = require.context('@/md/', true, /.*\.(gif|jpg|jpeg|tiff|png)$/)
const description_requireContext = require.context('@/md/', true, /description.js$/)
const image_keys = cover_requireContext.keys()
const description_keys = description_requireContext.keys()

const markdowns = requireContext.keys().map(file=>{

    var folder = file.split('./')[1]
    folder = folder.split('markdown')[0]
    return {
        md : requireContext(file).default,
        picture: cover_requireContext(getAppropImage(folder, image_keys)),
        ...description_requireContext(getAppropDescription(folder, description_keys)).default
    }

})

function getAppropDescription(folder, description_keys){
    for(var i = 0; i < description_keys.length; i++){
        var _folder = description_keys[i].split('./')[1]
        _folder = _folder.split('description')[0]
        if(_folder == folder){
            return description_keys[i]
        }
    }
}

function getAppropImage(folder, image_keys){
    for(var i = 0; i < image_keys.length; i++){
        var _folder = image_keys[i].split('./')[1]
        _folder = _folder.split('picture')[0]
        if(_folder == folder){
            return image_keys[i]
        }
    }
}

console.log(markdowns)

export default {
    data: ()=>({
        markdowns: markdowns
    }),
    components: {
        BlogCard,
        BlogPopup
    },
    methods: {
        showBlog(ev, markdown){
            this.$refs['blog-popup'].show(ev, markdown);
        },
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
