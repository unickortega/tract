<template>
    <div>
        <div class="logo align-middle">
            <p>U</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Monoton');

.logo{
    color: white;
    position:relative;
    display: inline-block;
    height: 50px;
    width: 50px;
    border: 1px solid white;
    border-radius: 50%;
    background: black;
    p{
        margin: 0;
        font-family: 'Monoton', cursive;
        font-size: 30px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
}
</style>
