<template>
    <div class="row m-0">
        <photo-container class="grid-item col-6" :source="asset('/2.jpg')"/>
        <photo-container class="grid-item col-3" :source="asset('/1.jpg')"/>
        <photo-container class="grid-item col-3" :source="asset('/3.jpg')"/>
        <photo-container class="grid-item col-3" :source="asset('/2.jpg')"/>
        <photo-container class="grid-item col-3" :source="asset('/1.jpg')"/>
        <photo-container class="grid-item col-3" :source="asset('/2.jpg')"/>
        <photo-container class="grid-item col-3" :source="asset('/3.jpg')"/>
        <photo-viewer/>
    </div>
</template>
<script>
import PhotoContainer from '@/components/PhotoContainer'
import PhotoViewer from '@/components/PhotoViewer'
export default {
    components:{
        PhotoContainer,
        PhotoViewer
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
