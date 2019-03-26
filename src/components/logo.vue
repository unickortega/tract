<template>
    <div>
        <div class="logo align-middle">
            <p>U</p>
        </div>
        <div class="l2 text-white d-inline-block align-middle">
            <div class="sumpay">
                elmar Ortega
            </div>
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

.l2{
    overflow: hidden;
    padding-right: 10px; 
    position: relative;
    .sumpay{
        animation-name: left_right;
        animation-duration: 1s;
    }
    &::after{
        content: '';
        position: absolute;
        left: 0px;
        width: 100%;
        height: 1px;
        background: white;
        bottom: 0px;
        animation-name: left_right;
        animation-duration: 500ms;
    }

    /* The animation code */
    @keyframes left_right {
        0% {
            transform:translateX(-100%);
        }
        90% {
            transform:translateX(10px);
        }
        100%{
            transform:translateX(0);
        }
    }
}
</style>
