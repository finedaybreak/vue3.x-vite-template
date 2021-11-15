<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';

const store = useStore(key);

const name = computed(() => store.state.user?.name);
const age = computed(() => store.state.user?.age);

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
    <h1>{{ msg }}</h1>

    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>
    <p>
        <el-button @click="count++">Element plus Button count is: {{ count }}</el-button>
    </p>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
    <p>
        <a-button @click="$router.push({ name: 'About' })" type="primary">AntD Button Go About</a-button>
    </p>

    <h3>{{ `This template made by ${name}` }}</h3>
</template>

<style lang="less" scoped>
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
    line-height: 60px;
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
