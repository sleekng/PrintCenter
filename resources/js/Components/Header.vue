<template>
<div class="flex items-center justify-center p-2 bg-secondary2">
    <i class="fa-sharp fa-light fa-timer mr-4 text-2xl text-white"></i>
    <p class="font-body w-auto text-xs font-bold text-white md:text-xl">
        Fast Turnaround Within Days
    </p>
</div>
<div :class="{ 'block': mobileMenu, 'hidden': !mobileMenu }" class="z-[9999999] h-screen top-0 left-0  fixed bg-black bg-opacity-50">

</div>
<div class="container relative border-b">
    <div class="relative z-40 py-6 shadow-xs lg:py-10">
        <div class="flex w-full items-center justify-center">
            <a href="/">
                <img src="/storage/img/logo-main.png" class="h-auto w-20 sm:w-28" alt="logo">
            </a>
            <div class="lg:hidden ml-auto">

                <i class="fa-sharp fa-regular fa-bars text-3xl  cursor-pointer" @click="mobileMenu = !mobileMenu"></i>
            </div>
        </div>
        <div class="">
            <ul class="lg:hidden items-center justify-end space-x-3 flex">

                <li class="m">
                    <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="flex items-center space-x-2 border-b-2 border-white px-2 font-hk text-lg text-secondary transition-all hover:border-primary hover:font-bold hover:text-primary">
                    <i class="fa-sharp fa-light fa-user block text-xl"></i><span>Dashboard</span>
                    </Link>
                    <template v-else>
                        <Link :href="route('login')" class="flex items-center space-x-2 border-b-2 border-white px-2 font-hk text-lg text-secondary transition-all hover:border-primary hover:font-bold hover:text-primary">
                        <i class="fa-sharp fa-light fa-user block text-xl"></i><span>Login</span>
                        </Link>
                    </template>
                </li>

                <li class="">
                    <Link href="/cart" class="border-b-2 border-white justify-center flex flex-col items-center space-x-0  px-2 relative font-hk text-lg text-secondary transition-all hover:border-primary hover:font-bold hover:text-primary">
                        <span class="text-[14px] font-bold -mb-3">{{ CartCount }}</span>
                        <i class="fa-sharp fa-light fa-cart-shopping block text-xl group-hover:hidden" alt="icon cart"></i>
                    </Link>
                </li>
            </ul>
        </div>
        <div :class="{ 'block': mobileMenu, 'hidden': !mobileMenu }" class="lg:hidden fixed bg-white w-full top-0 left-0 px-4 z-50 h-[100vh] justify-center pt-8">

            <i class="fa-sharp fa-light fa-xmark cursor-pointer top-4  text-3xl  absolute right-10" @click="mobileMenu = false"></i>
            <ul class="list-reset">
                <li class="mb-4">
                    <Link :href="route('home')" class="block font-hk text-lg text-secondary transition-all hover:font-bold hover:text-primary">Home</Link>
                </li>
                <li class="mb-4">
                    <span @click="allProductMethod" class="flex items-center space-x-4 text-lg text-secondary transition-all hover:font-bold hover:text-primary cursor-pointer">
                        <span>All Products</span>
                        <i :class="{ 'fa-chevron-down': allProductsMenu, 'fa-chevron-right': !allProductsMenu }" class="fa-regular transition-transform duration-200"></i>
                    </span>
                    <!-- Submenu for all products -->
                    <ul :class="{ 'block': allProductsMenu, 'hidden': !allProductsMenu }" class="list-reset pl-4 mt-2">
                        <li v-for="category in navcategories" :key="category.id" class="mb-2">
                            <span @click="categoryMenu = categoryMenu === category.id ? null : category.id" class="flex items-center space-x-4 font-hk text-md text-secondary transition-all hover:font-bold hover:text-primary cursor-pointer font-bold">
                                <span>{{ category.name }}</span>
                                <i :class="{ 'fa-chevron-down': categoryMenu === category.id, 'fa-chevron-right': categoryMenu !== category.id }" class="fa-regular transition-transform duration-200"></i>
                            </span>
                            <ul :class="{ 'block': categoryMenu === category.id, 'hidden': categoryMenu !== category.id }" class="list-reset pl-4 mt-2">
                                <li v-for="product in category.products" :key="product.id" class="mb-3">
                                    <Link :href="route('product.show', product.id)" class="block font-hk text-secondary transition-all hover:font-bold hover:text-primary">{{ product.name }}</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li class="mb-4">
                    <Link :href="route('quotes.create')" class="block font-hk text-lg text-secondary transition-all hover:font-bold hover:text-primary">Get Quote</Link>
                </li>
                <li class="mb-4">
                    <Link :href="route('order-tracking.index')" class="block font-hk text-lg text-secondary transition-all hover:font-bold hover:text-primary">Track Orders</Link>
                </li>
                <li class="mb-4">
                    <Link :href="route('contact-us')" class="block font-hk text-lg text-secondary transition-all hover:font-bold hover:text-primary">Contact</Link>
                </li>
                <li class="mb-2">
                    <template v-if="$page.props.auth.user">
                        <Link :href="route('dashboard')" class="block font-hk text-lg text-secondary transition-all hover:font-bold hover:text-primary">Dashboard</Link>
                    </template>
                    <template v-else>
                        <Link :href="route('login')" class="block font-hk text-lg text-secondary transition-all hover:font-bold hover:text-primary">Login</Link>
                    </template>
                </li>
                <li class="mb-4 flex justify-start">
                    <Link href="/cart" class="border-b-2 border-white flex flex-col items-center space-x-0 px-2 font-hk text-lg text-secondary transition-all hover:border-primary hover:font-bold hover:text-primary">
                    <span class="font-bold text-[14px]  -mb-3">{{ CartCount }}</span>
                    <i class="fa-sharp fa-light fa-cart-shopping block text-xl"></i>
                    </Link>
                </li>
            </ul>
        </div>

        <div class="hidden justify-center lg:flex lg:pt-8">
            <ul class="list-reset flex items-center">

                <li class="mr-10">
                    <Link :href="route('home')" class="block border-b-2 border-white px-2 font-hk text-lg text-secondary transition-all hover:border-primary hover:font-bold hover:text-primary">Home</Link>
                </li>

                <li class="group mr-8 hidden lg:block">
                    <div class="flex items-center border-b-2 border-white transition-colors group-hover:border-primary">
                        <span class="cursor-pointer px-3 py-2 font-hk text-lg text-secondary transition-all group-hover:font-bold group-hover:text-primary">
                            All products
                        </span>
                        <i class="bx bx-chevron-down px-2 pl-2 text-secondary transition-colors group-hover:text-primary"></i>
                    </div>

                    <!-- Dropdown Content -->
                    <div class="pointer-events-none absolute top-0 left-0 right-0 z-50 mx-auto mt-44 w-2/3 pt-6 opacity-0 group-hover:pointer-events-auto group-hover:opacity-100">
                        <div class="relative flex rounded-b bg-white shadow-lg transition-all">

                            <!-- Categories List -->
                            <div class="relative h-[450px] overflow-y-auto z-20 flex-1 border-r border-gray-200 p-6 bg-white">
                                <ul>
                                    <li v-for="category in navcategories" :key="category.id" :class="category.id == hoveredCategoryId ? 'bg-gray-100 font-bold text-black' : 'text-gray-700'" @mouseover="showCategory(category)" class="p-3 cursor-pointer hover:bg-gray-100 transition duration-150 ease-in-out">
                                        <button class="w-full text-left border-b border-transparent font-hk leading-loose hover:border-secondary-lighter focus:outline-none focus:border-secondary-lighter">
                                            {{ category.name }}
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <!-- Products List -->
                            <div class="relative h-[450px] overflow-y-auto z-20 flex-1 p-6 border-r border-gray-200 bg-white">
                                <ul>
                                    <li v-for="product in hoveredCategory.products" :key="product.id" :class="product.id == hoveredProductId ? 'bg-gray-100 font-bold text-black' : 'text-gray-700'" @mouseover="showProducts(product)" class="p-3 cursor-pointer hover:bg-gray-200 transition duration-150 ease-in-out">
                                        <button class="w-full text-left border-b border-transparent font-hk leading-loose hover:border-secondary-lighter focus:outline-none focus:border-secondary-lighter">
                                            {{ product.name }}
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <!-- Product Details -->
                            <div class="relative h-[450px] w-full overflow-y-auto z-20 flex-1 p-6 bg-white shadow-md rounded-lg">
                                <ul>
                                    <li v-if="hoveredProduct" class=" border-gray-200 pb-4 mb-4">
                                        <Link :href="route('product.show', hoveredProduct.id)" class="flex flex-col items-center space-y-6 text-center transition-transform transform hover:scale-105">
                                        <div class="w-44">
                                            <img class="rounded-lg shadow-lg" :src="'/storage/' + hoveredProduct.product_img1" alt="" />
                                        </div>
                                        <div class="p-4 bg-gray-50 rounded-lg shadow-inner">
                                            <h4 class="font-bold text-xl text-gray-800">
                                                {{ hoveredProduct.name }}
                                            </h4>
                                            <div class="text-gray-500 mt-2">
                                                <span>Starting at</span>
                                                <div class="flex justify-center items-center py-2">
                                                    <span class="text-2xl font-bold text-primary mr-2">{{ hoveredProduct.price }}</span>
                                                    <span class="text-sm text-gray-400">Per 100 units</span>
                                                </div>
                                            </div>
                                            <Link :href="route('product.show', hoveredProduct.id)" class="text-white bg-primary hover:bg-primary-dark px-8 py-2 mt-4 font-bold rounded-md transition-colors duration-300">
                                            Select Option
                                            </Link>
                                        </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </li>

                <li class="mr-10">
                    <Link :href="route('quotes.create')" class="block border-b-2 border-white px-2 font-hk text-lg text-secondary transition-all hover:border-primary hover:font-bold hover:text-primary">Get Quote</Link>
                </li>

                <li class="mr-10">
                    <Link :href="route('order-tracking.index')" class="block border-b-2 border-white px-2 font-hk text-lg text-secondary transition-all hover:border-primary hover:font-bold hover:text-primary">Track Orders</Link>
                </li>

                <li class="mr-10">
                    <Link :href="route('contact-us')" class="block border-b-2 border-white px-2 font-hk text-lg text-secondary transition-all hover:border-primary hover:font-bold hover:text-primary">Contact</Link>
                </li>

                <li class="mr-10">
                    <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="flex items-center space-x-2 border-b-2 border-white px-2 font-hk text-lg text-secondary transition-all hover:border-primary hover:font-bold hover:text-primary">
                    <i class="fa-sharp fa-light fa-user block text-xl"></i><span>Dashboard</span>
                    </Link>
                    <template v-else>
                        <Link :href="route('login')" class="flex items-center space-x-2 border-b-2 border-white px-2 font-hk text-lg text-secondary transition-all hover:border-primary hover:font-bold hover:text-primary">
                        <i class="fa-sharp fa-light fa-user block text-xl"></i><span>Login</span>
                        </Link>
                    </template>
                </li>

                <li class="mr-10">
                    <Link href="/cart" class="border-b-2 border-white flex flex-col items-center space-x-0 px-2 font-hk text-lg text-secondary transition-all hover:border-primary hover:font-bold hover:text-primary">
                    <span class="font-bold text-[14px]  -mb-3">{{ CartCount }}</span>
                    <i class="fa-sharp fa-light fa-cart-shopping block text-xl group-hover:hidden" alt="icon cart"></i>
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
            default: 0
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
            categoryMenu: false,
            allProductsMenu: false,
            mobileMenu: false,
            categoriesShow: false,
            hoveredProductId: null,
            hoveredCategoryId: null,
            showProduct: false,
            hoveredProduct: null,
            hoveredCategory: []
        };
    },

    methods: {
        allProductMethod() {
            this.allProductsMenu = !this.allProductsMenu
        },
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

<style lang="css" scoped>
.fa-chevron-down {
    transform: rotate(360deg);
}
</style>
