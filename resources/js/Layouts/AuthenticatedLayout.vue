<template>
    <top-nav @toggle-aside="toggleAside"></top-nav>
    <div class="flex overflow-hidden bg-white pt-16">
        <transition name="slide">

            <a-side :class="{ 'hidden': !asideOpen }"></a-side>
        </transition>
        <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
        <div id="main-content" class="h-full w-full  relative overflow-y-auto lg:ml-64">
             <!-- Page Heading -->
             <header class="bg-white shadow" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>
            <main>
                <slot />
            </main>
        </div>
    </div>

</template>

<script>
import {
    Link,
} from "@inertiajs/vue3";
import TopNav from '@/Components/PtopNav.vue'
import ASide from '@/Components/ASide.vue'
export default {

    data() {
        return {
            asideOpen: false
        };
    },
    methods: {
        toggleAside() {
            this.asideOpen = !this.asideOpen;
        }
    },

    components: {
        Link,
        TopNav,
        ASide
    }
}
</script>

<style lang="css" scoped>
.slide-enter-active, .slide-leave-active {
    transition: transform 0.3s;
}
.slide-enter, .slide-leave-to {
    transform: translateX(100%);
}
</style>