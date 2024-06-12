<template>
    <div class=" fixed top-0 left-0 z-50 bg-white w-full">


        <nav class=" container mx-auto px-24 h-[80px] flex items-center w-full justify-between">
            <Link :href="route('dashboard')">
                <ApplicationLogo
                    class="block h-9 w-auto fill-current text-gray-800"
                />
            </Link>
            <div>
                <ul class="flex items-center space-x-4">
                    <li class=" p-4"><Link :href="route('home')">Home</Link></li>
                    <li class=" p-4"><Link :href="route('home')">All products</Link></li>
                    <li class=" p-4"><Link :href="route('home')">Get Quote</Link></li>
                    <li class=" p-4"><Link :href="route('login')" class=" font-bold">Login</Link></li>
                    <li class=" p-4"><Link :href="route('register')" class=" font-bold">Create Account</Link></li>
                    <li class=" p-4"><Link :href="route('register')" class=" font-bold">Cart</Link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import { Head, Link, useForm } from '@inertiajs/vue3';
export default {
    components: {
        ApplicationLogo,
        Link
    },
};
</script>
<style lang="scss" scoped>

</style>