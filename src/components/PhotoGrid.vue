<template>
    <div class="row m-0">
        <photo-container v-for="(image, index) in images" v-bind:key="index" class="grid-item" :class="index == 0 ? 'col-6':'col-3'" :source="image" @click.native="viewPhoto($event, { src: (image) })"/>
        <photo-viewer :images="images" ref="viewer"/>
    </div>
</template>
<script>
import PhotoContainer from '@/components/PhotoContainer'
import PhotoViewer from '@/components/PhotoViewer'

const requireContext = require.context('@/photos/', true, /.*\.(gif|jpg|jpeg|tiff|png)$/)
const images = requireContext.keys().map(file => {
    return requireContext(file)
})


export default {
    components:{
        PhotoContainer,
        PhotoViewer
    },
    data: () => ({
        images: images
    }),
    methods: {
        viewPhoto(ev, data){
            this.$refs.viewer.show(ev, data)
        }
    }
}
</script>

<style lang="scss" scoped>
.grid-item{
    padding: 0px;
    height: 200px;
    overflow: hidden;
}
@media (max-width: 768px) {
    .grid-item{
        height: 100px;
    }
}
</style>
