<script setup lang="ts">
import { ref, computed } from 'vue';
import { useUserStore } from '@/store/user';

defineProps<{ msg: string }>();

const user = useUserStore();

const count = ref(0);

const userInfo = computed(() => user.userInfo);
</script>

<template>
    <div class="h-full text-center">
        <h1 class="text-20px font-bold py-20px">{{ msg }}</h1>

        <p class="py-10px">
            Recommended IDE setup:
            <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
            +
            <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
        </p>

        <p class="py-10px">See <code>README.md</code> for more information.</p>

        <p class="py-10px">
            <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
            |
            <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
        </p>
        <p class="py-10px">
            <el-button @click="count++">Element plus Button count is: {{ count }}</el-button>
        </p>
        <p class="py-10px">
            Edit
            <code>components/HelloWorld.vue</code> to test hot module replacement.
        </p>
        <p class="py-10px">
            <el-button type="primary" @click="$router.push({ name: 'About' })">AntD Button Go About</el-button>
        </p>

        <h3 class="py-20px">{{ `This template made by ${userInfo}` }}</h3>

        <p class="py-10px">
            <el-button type="default" class="" @click="user.increaseUserLevel()">Add User Level</el-button>
        </p>
    </div>
</template>

<style lang="scss" scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}

h3 {
    height: 60px;
    font-weight: 300;
    font-size: 14px;
    background: linear-gradient(to right, #c6deff, #1495ff, #c6deff); /*渐变背景*/
    background-size: 300%;
    letter-spacing: 1px;
    user-select: none;
    background-clip: text;
    color: transparent;
    animation: flashColor 8s linear infinite;
    @keyframes flashColor {
        100% {
            background-position: -300% 0;
        }
    }
}
</style>
