<template>
    <div class="flat-card text-white">
        <div>
            <h2 class="text-center card-head">
                <slot name="header"/>
            </h2>
            <div class="card-body">
                <slot/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.flat-card{
    position: relative;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px 15px;

    .card-head{
        font-family: 'EB Garamond', serif;
        padding: 10px;
        // font-family: 'Cardo', serif;
    }

    .card-body{
        font-family: 'Cardo', serif;
        font-size: 20px;
    }

    .card-head::before, .card-head::after{
        font-family: 'EB Garamond', serif;
        content: "§";
        font-size: 20px;
        color: #cece;
        transform: rotate(90deg);
        display: inline-block;
        margin: 0 0.6em;
    }
}

.card-gray{
    background: #797979;
}
</style>

