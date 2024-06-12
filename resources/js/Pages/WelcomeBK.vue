<template>
<div>
    <!--   Navbar -->
    <Header @mouseover="hideSubcategories" class="" />

    <div @mouseover="hideSubcategories" v-if="showProduct" class="backdrop-blur-lg fixed h-screen w-screen bg-secondary2/30 top-0 left-0 z-40">
    </div>

    <ul class="flex  justify-start fixed w-full z-50 overflow-x-auto  border bg-tertiary items-center  mt-[80px]">
        <li v-for="category in categories" :key="category.id" @mouseenter="showSubcategories(category.id)" class="whitespace-nowrap px-8 hover:font-bold transition-all ease-in-out py-4">
            {{ category.name }}

            <div v-if="showProduct && category.id === hoveredCategoryId" class="fixed  bg-white
         border top-[135px] left-0 w-full h-[70vh] overflow-y-auto z-20">

                <div class="container mx-auto flex justify-center items-center h-full  relative  ">
                    <i @click="close" class="fa-light fa-xmark absolute cursor-pointer text-2xl right-0 top-10"></i>
                    <div class="flex      border   bg-white">

                        <ul class="flex overflow-y-auto flex-col sm:w-[400px] border-r bg-tertiary sm:h-[600px]  animate-fade-right animate-duration-[300ms] animate-ease-out">
                            <li :class="product.id === hoveredProductId ? 'bg-white text-black' : ''" @mouseover="showProducts(product)" v-for="product in category.products" :key="product.id" class="py-4  cursor-pointer  font-normal whitespace-normal w-full text-gray-500 hover:text-black px-8">
                                {{ product.name }}
                            </li>

                        </ul>

                        <div v-if="hoveredProduct" class="rounded-lg animate-fade-right animate-duration-[300ms] animate-ease-out flex justify-center items-center p-10 bg-white ">
                            <div class="w-full flex space-x-4">
                                <img class="rounded-lg w-80" :src="'/storage/'+hoveredProduct.product_img1" alt="" />

                                <div class="p-4 w-80">
                                    <div class="">
                                        <h4 class="font-bold whitespace-normal text-2xl text-gray-600">
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
                        </div>
                    </div>
                </div>
            </div>

        </li>
    </ul>

    <!--  Header Section Begins -->
    <div class="header h-[90vh] flex justify-center items-center relative  ">
        <div class="">
            <div class="grid grid-cols-12 gap-20">
                <div class="col-span-6 flex-col flex h-[90vh] justify-center items-center">
                    <div class="container mx-auto px-24">
                        <h1 class="text-6xl font-bold py-4 animate-fade-up">
                            FOR YOUR NOW NOW PRINTING JOBS
                        </h1>
                        <p>Highest quality print at affordable prices</p>
                        <div class=" mt-8 w-full relative">

                            <input type="text" placeholder=" Search for a product" class="w-full pr-12 h-[60px] border rounded-md">
                            <i class="fa-sharp fa-light fa-magnifying-glass absolute top-4 right-4 text-2xl"></i>
                        </div>
                    </div>
                </div>
                <div class="col-span-6 h-[90vh]" style="
                            background-image: url('/storage/img/header-img.png');
                            background-size: cover;
                            background-repeat: no-repeat;
                        "></div>
            </div>
        </div>

    </div>
    <section class=" py-20 dark:bg-dark lg:py-[10px] bg-tertiary">
        <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4">
                    <div class="flex flex-wrap items-center justify-center">
                        <a href="javascript:void(0)" class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
                            <img src="assets/images/brands/graygrids.svg" alt="image" class="h-10 w-full">
                        </a>
                        <a href="javascript:void(0)" class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
                            <img src="assets/images/brands/lineicons.svg" alt="image" class="h-10 w-full">
                        </a>
                        <a href="javascript:void(0)" class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
                            <img src="assets/images/brands/uideck.svg" alt="image" class="h-10 w-full">
                        </a>
                        <a href="javascript:void(0)" class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
                            <img src="assets/images/brands/ayroui.svg" alt="image" class="h-10 w-full">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div>

    </div>
    <!--  Header Section Ends -->

    <!--  Featured product Section Begins -->
    <div class="featured-products py-20">
        <div class="container mx-auto px-24  ">
            <div class=" justify-between flex font-bold">
                <h1 class="text-4xl animate-pulse">
                    Featured | Popular Products
                </h1>
                <Link :href="route('home')" class=" underline">See All Product <i class="fa-sharp fa-light fa-arrow-right ml-2"></i></Link>
            </div>
        </div>
        <div class="container mx-auto px-24 py-20">
            <div class="grid grid-cols-4 gap-10">
                <Link :href="route('product.show',product.id)" class="card border shadow-sm" v-for="product in products" :key="product">
                <div class="overflow-hidden h-[250px]">
                    <img :src="'storage/'+product.product_img1" alt="" />
                </div>
                <div class="p-4">
                    <div class="">
                        <h4 class="font-bold text-2xl text-gray-600">

                            {{ truncateTitle(product.name, 3) }}
                        </h4>
                    </div>
                    <div>
                        <span class="text-gray-300">starting at</span>
                        <div class="flex justify-between items-center py-4">
                            <span class="text-2xl font-bold text-primary">₦{{ product.price }}</span>
                            <span class="text-primary">Per {{ product.unit }}unit</span>
                        </div>
                    </div>
                    <div>
                        <primary-button :href="route('product.show',product.id)" class="bg-tertiary text-black px-8 py-2 font-bold rounded-sm flex w-full justify-center">Select Option</primary-button>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    </div>
    <!--  Featured product Section Ends-->

    <!--  Footer Section Begins -->
    <Footer />
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
import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";
export default {
    props: {
        products: {
            type: Object,
            required: true
        },
        categories: {
            type: Object,
            required: true
        }
    },
    components: {
        ApplicationLogo,
        PrimaryButton,
        Link,
        Header,
        Footer,
    },

    data() {
        return {
            categoriesShow: false,
            hoveredProductId: null,
            hoveredCategoryId: null,
            showProduct: false,
            hoveredProduct: null
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

        close() {
            this.hoveredCategoryId = null;
            this.showProduct = false;
        },
        showProducts(product) {
            this.hoveredProduct = product;
            this.hoveredProductId = this.hoveredProduct.id
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

<style lang="scss" scoped></style>
