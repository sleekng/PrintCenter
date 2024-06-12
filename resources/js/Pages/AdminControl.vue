<template>
    <top-nav></top-nav>
    <div class="flex overflow-hidden bg-white pt-16">
        <a-side></a-side>
        <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
        <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            <main>
           
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

    components: {
        Link,
        TopNav,
        ASide
    }
}
</script>

<style lang="scss" scoped>

</style>
