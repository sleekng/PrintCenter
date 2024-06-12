<template>
<div class="flex items-center justify-center p-2 bg-secondary2">
    <i class="fa-sharp fa-light fa-timer mr-4  text-2xl text-white"></i>
    <p class="font-body w-auto text-xs font-bold text-white md:text-xl">
        Fast Turnaround Within Days
    </p>
</div>
<div class="container relative border-b">
    <div class="relative z-40 py-6 shadow-xs lg:py-10">
        <div class="flex w-full items-center justify-center">

            <a href="/">
                <img src="/storage/img/logo-main.png" class="h-auto w-20 sm:w-40" alt="logo">
            </a>

            <div class="hidden">
                <i class="bx bx-menu text-3xl text-primary" @click="mobileMenu = true"></i>
            </div>
        </div>
        <div class="hidden justify-center lg:flex lg:pt-8">
            <ul class="list-reset flex items-center">

                <li class="mr-10">
                    <Link :href="route('home')" class="block border-b-2 border-white px-2 font-hk text-lg text-secondary transition-all hover:border-primary hover:font-bold hover:text-primary">Home</Link>
                </li>

                <li class="group  mr-10 hidden lg:block">
                    <div class="flex items-center border-b-2 border-white transition-colors group-hover:border-primary">
                        <span class="cursor-pointer px-2 font-hk text-lg text-secondary transition-all group-hover:font-bold group-hover:text-primary">All products</span>
                        <i class="bx bx-chevron-down px-2 pl-2 text-secondary transition-colors group-hover:text-primary"></i>
                    </div>

                    <div class="pointer-events-none  absolute top-0 left-0 right-0 z-50 mx-auto mt-44 w-2/3 pt-10 opacity-0 group-hover:pointer-events-auto group-hover:opacity-100">
                        <div class="relative flex  rounded-b bg-white    shadow-lg transition-all">
                            <div class="relative h-[450px] overflow-y-auto z-20 flex-1 border-r p-8">
                                <ul>

                                    <li :class="category.id == hoveredCategoryId ? 'bg-gray-100 font-bold text-black' : ''" @mouseover="showCategory(category)" v-for="category in navcategories" :key="category.id" class=" p-2 cursor-pointer">
                                        <button href="/collection-grid" class="border-b border-transparent font-hk  leading-loose text-secondary-lighter hover:border-secondary-lighter">{{ category.name }}</button>
                                    </li>

                                </ul>
                            </div>

                            <div class="relative h-[450px] overflow-y-auto z-20 flex-1 p-8 border-r">
                                <ul>

                                    <li :class="product.id == hoveredProductId ? 'bg-gray-100 font-bold text-black' : ''" @mouseover="showProducts(product)" v-for="product in hoveredCategory.products" :key="product.id" class="p-2 cursor-pointer">

                                        <button href="/collection-grid" class="border-b border-transparent font-hk  leading-loose text-secondary-lighter hover:border-secondary-lighter">{{ product.name }}</button>
                                    </li>
                                </ul>
                            </div>

                            <div class="relative h-[450px] overflow-y-auto z-20 flex-1 p-8">

                                <ul>

                                    <li v-if="hoveredProduct">
                                        <Link :href="route('product.show',hoveredProduct.id)" class="border-b border-transparent font-hk  leading-loose text-secondary-lighter hover:border-secondary-lighter">

                                        <div class="w-full flex flex-col space-x-4 items-center">
                                            <div class="w-44">

                                                <img class="rounded-lg " :src="'/storage/'+hoveredProduct.product_img1" alt="" />
                                            </div>

                                            <div class="p-4">
                                                <div class="">
                                                    <h4 class="font-bold whitespace-normal text-xl text-gray-600">
                                                        {{ hoveredProduct.name }}
                                                    </h4>
                                                </div>
                                                <div>
                                                    <span class="text-gray-300">starting at</span>
                                                    <div class="flex justify-between items-center py-4">
                                                        <span class="text-2xl font-bold text-primary">{{ hoveredProduct.price }}</span>
                                                        <span class="text-primary">Per 100unit</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link :href="route('product.show',hoveredProduct.id)" class="text-white bg-primary hover:opacity-80 px-8 py-2 font-bold rounded-sm flex w-full justify-center">Select Option</Link>
                                                </div>
                                            </div>
                                        </div>

                                        </Link>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>

                </li>

                <li class="mr-10">
                    <a href="/blog" class="block border-b-2 border-white px-2 font-hk text-lg text-secondary transition-all hover:border-primary hover:font-bold hover:text-primary">Get Quote</a>
                </li>

                <li class="mr-10">
                    <a href="/contact#faq" class="block border-b-2 border-white px-2 font-hk text-lg text-secondary transition-all hover:border-primary hover:font-bold hover:text-primary">Track Orders</a>
                </li>

                <li class="mr-10">
                    <a href="/contact" class="block border-b-2 border-white px-2 font-hk text-lg text-secondary transition-all hover:border-primary hover:font-bold hover:text-primary">Contact</a>
                </li>

                <li class="mr-10">
                    <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="flex items-center space-x-2 border-b-2 border-white px-2 font-hk text-lg text-secondary transition-all hover:border-primary hover:font-bold hover:text-primary">

                    <i class="fa-sharp fa-light fa-user block text-xl"></i><span>Dashboard</span>
                    </Link>
                    <template v-else>
                        <Link  :href="route('login')" class="flex items-center space-x-2 border-b-2 border-white px-2 font-hk text-lg text-secondary transition-all hover:border-primary hover:font-bold hover:text-primary">

                        <i class="fa-sharp fa-light fa-user block text-xl"></i><span>Login</span>
                        </Link>
                    </template>
                </li>

                <li class="mr-10">
                    <Link href="/cart" class=" border-b-2 border-white flex flex-col items-center space-x-0 px-2 font-hk text-lg text-secondary transition-all hover:border-primary hover:font-bold hover:text-primary">
                    <span class="font-bold text-sm"> {{ CartCount }}</span>
                    <i class="fa-sharp fa-light fa-cart-shopping block text-xl group-hover:hidden " alt="icon cart"></i>
                    </Link>
                </li>

            </ul>
        </div>
    </div>
</div>
</template>

<script>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {
    Head,
    Link,
    useForm
} from "@inertiajs/vue3";
export default {
    props: {
        navcategories: {
            type: Object,
        },
        CartCount: {
            type: Object,
        },
        canLogin: {
            type: Boolean,
        },
    },
    components: {
        ApplicationLogo,
        PrimaryButton,
        Link,

    },

    data() {
        return {
            categoriesShow: false,
            hoveredProductId: null,
            hoveredCategoryId: null,
            showProduct: false,
            hoveredProduct: null,
            hoveredCategory: []
        };
    },

    methods: {
        showSubcategories(categoryId) {
            this.hoveredCategoryId = categoryId;
            this.showProduct = true;
            this.hoveredProduct = null
        },
        hideSubcategories() {
            this.hoveredCategoryId = null;
            this.showProduct = false;
            this.hoveredProduct = null
        },

        showProducts(product) {
            this.hoveredProduct = product;
            this.hoveredProductId = this.hoveredProduct.id
        },
        showCategory(category) {
            this.hoveredCategory = category;
            this.hoveredCategoryId = category.id
        },
        truncateTitle(title, wordCount) {
            // Split the title into words
            const words = title.split(' ');

            // Check if the number of words exceeds the wordCount
            if (words.length > wordCount) {
                // Truncate the array to contain only wordCount elements
                const truncatedWords = words.slice(0, wordCount);

                // Join the truncated array into a string
                return truncatedWords.join(' ') + '...'; // Add ellipsis at the end
            } else {
                // If the number of words is within the limit, return the original title
                return title;
            }
        }
    }

};
</script>

<style lang="scss" scoped>

</style>
