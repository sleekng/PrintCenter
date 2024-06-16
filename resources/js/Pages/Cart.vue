<template>
<!--   Navbar -->
<Header :navcategories="navcategories" :CartCount="CartCount" />
<!-- End Navbar -->
<div v-if="loading" class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
    <div class=" rounded-lg w-1/2 p-8">
        <div class="flex justify-center">
            <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
    </div>
</div>
<section class="py-12 sm:py-16">
    <div class="container mx-auto px-4 sm:px-24">
        <div class="flex flex-col sm:flex-row">
            <nav class="flex w-full sm:w-9/12 mb-4 sm:mb-0">
                <ol role="list" class="flex items-center space-x-2">
                    <li v-for="item,index in breadcrumbs" :key="index" class="text-left">
                        <div class="flex items-center">
                            <span class="mx-2 text-gray-400">/</span>
                            <div class="-m-1">
                                <Link :href="item.link" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                                {{ item.text }}
                                </Link>
                            </div>
                        </div>
                    </li>
                </ol>
            </nav>
            <search />
        </div>

        <section class=" py-12 sm:py-4 lg:py-8">

            <div class="flex items-center py-4 ">
                <h1 class="text-2xl font-semibold text-gray-900">
                    Cart
                </h1>
            </div>

            <div v-if="$page.props.flash.success" class="inline-flex rounded-lg bg-green-light-6 px-[18px] py-4  animate-bounce animate-once animate-duration-[3000ms]">

                <p class="flex items-center text-sm font-medium text-[#004434]">
                    <span class="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_961_15641)">
                                <path d="M6.00002 0.337494C2.86877 0.337494 0.337524 2.86874 0.337524 5.99999C0.337524 9.13124 2.86877 11.6812 6.00002 11.6812C9.13128 11.6812 11.6813 9.13124 11.6813 5.99999C11.6813 2.86874 9.13128 0.337494 6.00002 0.337494ZM6.00002 10.8375C3.33752 10.8375 1.18127 8.66249 1.18127 5.99999C1.18127 3.33749 3.33752 1.18124 6.00002 1.18124C8.66252 1.18124 10.8375 3.35624 10.8375 6.01874C10.8375 8.66249 8.66252 10.8375 6.00002 10.8375Z" fill="white"></path>
                                <path d="M7.61255 4.25624L5.3813 6.43124L4.3688 5.43749C4.20005 5.26874 3.93755 5.28749 3.7688 5.43749C3.60005 5.60624 3.6188 5.86874 3.7688 6.03749L4.9688 7.19999C5.0813 7.31249 5.2313 7.36874 5.3813 7.36874C5.5313 7.36874 5.6813 7.31249 5.7938 7.19999L8.21255 4.87499C8.3813 4.70624 8.3813 4.44374 8.21255 4.27499C8.0438 4.10624 7.7813 4.10624 7.61255 4.25624Z" fill="white"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_961_15641">
                                    <rect width="12" height="12" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    {{ $page.props.flash.success }}
                </p>

            </div>

            <div v-if="$page.props.flash.message" class="inline-flex rounded-lg bg-green-light-6 px-[18px] py-4  animate-bounce animate-once animate-duration-[3000ms]">

                <p class="flex items-center text-sm font-medium text-[#004434]">
                    <span class="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_961_15641)">
                                <path d="M6.00002 0.337494C2.86877 0.337494 0.337524 2.86874 0.337524 5.99999C0.337524 9.13124 2.86877 11.6812 6.00002 11.6812C9.13128 11.6812 11.6813 9.13124 11.6813 5.99999C11.6813 2.86874 9.13128 0.337494 6.00002 0.337494ZM6.00002 10.8375C3.33752 10.8375 1.18127 8.66249 1.18127 5.99999C1.18127 3.33749 3.33752 1.18124 6.00002 1.18124C8.66252 1.18124 10.8375 3.35624 10.8375 6.01874C10.8375 8.66249 8.66252 10.8375 6.00002 10.8375Z" fill="white"></path>
                                <path d="M7.61255 4.25624L5.3813 6.43124L4.3688 5.43749C4.20005 5.26874 3.93755 5.28749 3.7688 5.43749C3.60005 5.60624 3.6188 5.86874 3.7688 6.03749L4.9688 7.19999C5.0813 7.31249 5.2313 7.36874 5.3813 7.36874C5.5313 7.36874 5.6813 7.31249 5.7938 7.19999L8.21255 4.87499C8.3813 4.70624 8.3813 4.44374 8.21255 4.27499C8.0438 4.10624 7.7813 4.10624 7.61255 4.25624Z" fill="white"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_961_15641">
                                    <rect width="12" height="12" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    {{ $page.props.flash.message }}
                </p>

            </div>

            <!-- {{ cart }} -->
            <div class="bg-white grid-cols-1 mt-4  gap-20 grid  md:grid-cols-12">
                <div :class="cart.length > 0 ? 'md:col-span-8' : 'md:col-span-12'" class="  border rounded-md  col-span-1  p-4 sm:pt-10">
                    <div v-if="cart.length === 0" class="flex flex-col items-center justify-center space-y-6 p-4 text-center sm:text-left  sm:space-y-0 sm:space-x-6">

                        <div class="text-2xl sm:text-4xl font-bold text-green-600">
                            Cart is empty!
                        </div>
                        <div class="flex flex-col justify-center items-center space-y-4 sm:space-y-2 ">
                            <span>Please add some products to your shopping cart</span>
                            <Link class="text-primary underline hover:text-primary-dark" :href="route('home')">
                            Explore <i class="fa-sharp fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                        <div class="w-10/12 sm:w-4/12">
                            <img src="/storage/img/empty-cart.svg" alt="Empty cart image" class="w-full">
                        </div>
                    </div>

                    <div class="flex flex-col  gap-8">
                        <div class="flex-1 border-b border-green-600" v-for="product, index in cart" :key="index">
                            <div class="flex flex-col md:flex-row md:items-center   pb-4">
                                <img :src="'/storage/'+product.product.product_img1" alt="" class="w-24 h-24 object-cover">
                                <div class="md:ml-4 flex-grow">
                                    <h3 class="text-lg font-semibold">{{ product.product.name }}</h3>
                                    <div class="flex items-center mt-2" v-if="product.product.quantityType == 'type-2'">
                                        <label class="mr-2">Quantity:</label>
                                        <select @change="updateQuantity(product.product.id, product.quantity)" v-model="product.quantity" class=" p-1 border rounded-md text-center">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="15">15</option>
                                            <option value="20">20</option>
                                            <option value="50">50</option>
                                            <option value="70">70</option>

                                        </select>
                                    </div>
                                    <div class="flex items-center mt-2" v-if="product.product.quantityType == 'type-1'">

                                        <label class="mr-2">Quantity:</label>
                                        <select v-model="product.quantity" @change="updateQuantity(product.cartItemId, product.quantity)" class=" bg-gray-100   border-0">
                                            <option value="1">100</option>
                                            <option value="2">200</option>
                                            <option value="3">300</option>
                                            <option value="4">400</option>
                                            <option value="5">500</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="md:text-right">
                                    <p class="text-xl font-semibold"> ₦{{ perProductSubCost(product.product.price, product.quantity , product.attributeDetails, product.delivery,product.hireDesigner) }}</p>
                                    <button class="text-red-500 hover:underline mt-2" @click="removeItem(product.cartItemId,index)">Remove</button>
                                </div>
                            </div>
                            <div class="mb-4">
                                <h4 class="font-semibold">Product Specifications</h4>
                                <ul class="mt-2">
                                    <li class="flex" v-for=" attribute in product.attributeDetails" :key="attribute"><strong>{{ attribute.attribute }}</strong>: <span>{{ attribute.value }}</span></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div v-if="cart.length > 0" class="p-4 justify-end flex">
                        <button @click="clearCart()" class="text-green-600 font-bold">Clear Cart</button>
                    </div>
                </div>
                <!--  Order Summary section -->
                <div v-if="cart.length > 0 " class="   col-span-1 md:col-span-4 sm:pb-10 ">
                    <div class="py-4 font-bold">
                        Order Summary
                    </div>
                    <div class="mt-6 border-t border-b py-2">
                        <div class="flex items-center justify-between">
                            <p class="text-md text-gray-400">
                                Subtotal
                            </p>
                            <p class="text-lg font-semibold  text-gray-900">
                                ₦{{ calculateSubCost }}
                            </p>
                        </div>
                        <div class="flex items-center justify-between">
                            <p class="text-md text-gray-400">
                                Tax
                            </p>
                            <p class="text-lg font-semibold text-gray-900">
                                ₦{{ calTax }}
                            </p>
                        </div>
                    </div>
                    <div class="mt-6 flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">
                            Total
                        </p>
                        <p class="text-2xl font-semibold text-gray-900">
                            ₦{{ total }}
                        </p>
                    </div>

                    <div class="mt-6 text-center">
                        <button v-if="$page.props.auth.user" @click="loginUserSubmit" type="button" class="group inline-flex w-full items-center justify-center rounded-md  bg-green-700 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-green-800">
                            Checkout
                            <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                        <button v-else @click="showModal = true" type="button" class="group inline-flex w-full items-center justify-center rounded-md  bg-green-700 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-green-800">
                            Checkout
                            <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </section>
    </div>
</section>

<!-- Modal -->
<transition name="modal">
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div class="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
            <div class="flex items-center justify-end">
                <span @click="showModal = false" class="cursor-pointer">
                    <i class="fa-sharp fa-light fa-circle-xmark text-2xl "></i>
                </span>
            </div>
            <form @submit.prevent="submit" class="w-full px-6 py-8 md:px-8 ">
                <div class="flex justify-center mx-auto">
                    <Link :href="route('home')">
                    <img class=" w-40" src="/storage/img/logo-main.png" alt="" />
                    </Link>
                </div>

                <p class="mt-3 text-xl text-center text-gray-600">Welcome back!</p>

                <div class="flex items-center justify-between mt-4">
                    <span class="w-1/5 border-b lg:w-1/4"></span>

                    <a href="#" class="text-xs text-center text-gray-500 uppercase hover:underline">or login with email</a>

                    <span class="w-1/5 border-b  lg:w-1/4"></span>
                </div>

                <div v-if="$page.props.flash.error" class="inline-flex rounded-lg bg-red-light-6 px-[18px] py-4  animate-bounce animate-once animate-duration-[3000ms]">

                    <p class="flex items-center text-sm font-medium text-red-600">
                        <span class="mr-3 flex h-5 w-5 items-center justify-center rounded-full ">
                            <i class="fa-sharp fa-thin fa-diamond-exclamation"></i>
                        </span>
                        {{ $page.props.flash.error }}
                    </p>

                </div>

                <div class="mt-4">
                    <label class="block mb-2 text-sm font-medium text-gray-600 " for="LoggingEmailAddress">Email Address</label>
                    <input v-model="form.email" id="LoggingEmailAddress" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-4 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                    <InputError class="mt-2" :message="form.errors.email" />
                </div>

                <div v-if="canResetPassword" class="mt-4">
                    <div class="flex justify-between">
                        <label class="block mb-2 text-sm font-medium text-gray-600 " for="loggingPassword">Password</label>
                        <a :href="route('password.request')" class="text-xs text-gray-500 hover:underline">Forget Password?</a>
                    </div>

                    <input v-model="form.password" id="loggingPassword" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                    <InputError class="mt-2" :message="form.errors.password" />
                </div>
                <div class="block mt-4">
                    <label class="flex items-center">
                        <Checkbox name="remember" v-model:checked="form.remember" />
                        <span class="ms-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div class="mt-6">
                    <button :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Sign In
                    </button>
                </div>

                <div class="flex items-center justify-between mt-4">
                    <span class="w-1/5 border-b md:w-1/4"></span>
                    <Link :href="route('register')" class="text-xs text-gray-500 uppercase hover:underline">or sign up</Link>
                    <span class="w-1/5 border-b md:w-1/4"></span>
                </div>

                <div class="mt-4 flex justify-end">
                    <button @click="guest()" type="button" class="px-6 py-3 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300">
                        Continue as Guest
                    </button>
                </div>
            </form>
        </div>
    </div>
</transition>

<!--  Footer Section Begins -->
<Footer />
<!--  Footer Section Ends -->
</template>

<script>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import Search from "@/Components/Search.vue"
import {
    Head,
    Link,
    router,
    useForm
} from "@inertiajs/vue3";

import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";
import SiteModal from "@/Components/SiteModal.vue";
import axios from 'axios';
export default {
    components: {
        Search,
        ApplicationLogo,
        PrimaryButton,
        Link,
        Header,
        Footer,
        SiteModal,
    },

    props: {
        navcategories: {
            type: Object,
        },
        cart: {
            required: true
        },
        breadcrumbs: {
            required: true
        },
        CartCount: {
            required: true
        }
    },

    data() {
        return {
            isSticky: false,
            canResetPassword: true,
            showModal: false,
            loading: false,
            ready: false,
            uploadDesign: false,
            hireDesigner: false,
            requestDesign: false,
            categories: false,
            subCategories: false,
            tax: 0,
            total: 0,
            form: useForm({
                createAccount: null,
                email: '',
                password: '',
                remember: false,
            })

        };
    },

    computed: {

        calTax() {
            let taxValue = this.tax

            return taxValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        },

        calculateSubCost() {
            let totalOptionsCost = 0;
            let deliveryCost = 0;
            let hireDesignerCost = 0;
            let total = 0

            // Calculate total cost of selected options
            for (let productId in this.cart) {

                this.cart[productId].attributeDetails.forEach(option => {
                    totalOptionsCost += parseFloat(option.cost);
                });

                if (this.cart[productId].delivery == 'Standard') {
                    deliveryCost = 1500
                }
                if (this.cart[productId].delivery == 'Express') {
                    deliveryCost = 5000
                }
                if (this.cart[productId].delivery == 'Next Day') {
                    deliveryCost = 15000
                }

                if (this.cart[productId].hireDesigner == true) {
                    hireDesignerCost = 5000
                }

                // Calculate total cost including base price, quantity, and options
                total += ((parseFloat(this.cart[productId].product.price) + parseFloat(totalOptionsCost)) * parseFloat(this.cart[productId].quantity)) + parseFloat(deliveryCost) + parseFloat(hireDesignerCost);

                totalOptionsCost = 0

            }

            this.totalSubCost(total)

            axios.post(route('update-sub-total'), {
                subTotal: total
            }).then((response) => {
                console.log(response);
            })

            return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        },
    },

    methods: {
        guest() {
            this.showModal = false
            this.form.createAccount = 'guest'
            this.form.post(route('checkout'))
        },

        submit() {
            this.form.createAccount = 'login'
            this.form.post(route('checkout'))
        },
        loginUserSubmit() {
            this.form.createAccount = 'loggedIn'
            this.form.post(route('checkout'))
        },

        totalSubCost(total) {
            this.total = (total + parseFloat(this.tax)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },

        perProductSubCost(productPrice, quantity, attribute, productDelivery, hireDesigner) {

            let totalOptionsCost = 0;
            let deliveryCost = 0;
            let hireDesignerCost = 0;
            let total = 0

            attribute.forEach(option => {
                totalOptionsCost += parseFloat(option.cost);
            });

            if (productDelivery == 'Standard') {
                deliveryCost = 1500
            }
            if (productDelivery == 'Express') {
                deliveryCost = 5000
            }
            if (productDelivery == 'Next Day') {
                deliveryCost = 15000
            }

            if (hireDesigner == true) {
                hireDesignerCost = 5000
            }

            // Calculate total cost including base price, quantity, and options
            total = ((parseFloat(productPrice) + parseFloat(totalOptionsCost)) * parseFloat(quantity)) + parseFloat(deliveryCost) + parseFloat(hireDesignerCost);

            return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;

        },
        clearCart() {

            router.post('/cart/clear')

        },
        updateQuantity(cartItemId, quantity) {
            this.loading = !this.loading
            this.$page.props.flash.success = false
            this.$page.props.flash.message = false
            // Update cart in API or local storage
            axios.put('/cart/update/' + cartItemId, {
                quantity: quantity
            }).then((response) => {
                this.$page.props.flash.message = response.data.message
                this.loading = this.loading ? false : this.loading
            })
        },
        design(option) {
            if (option == "Yes") {
                this.uploadDesign = true;
                this.requestDesign = false;
                this.ready = true;
                this.hireDesigner = false;
            } else {
                this.uploadDesign = false;
                this.requestDesign = true;
                this.ready = true;
            }
        },

        hire() {
            this.requestDesign = false;
            this.hireDesigner = true;
        },

        removeItem(cartItemId, index) {

            this.cart.splice(index, 1);

            router.post(route('cart.remove', cartItemId));

        },

    },

};
</script>

<style lang="css" scoped>
.loader {
    border-top-color: #3498db;
    border-left-color: #3498db;
    animation: spin 1.5s infinite linear;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.sticky-top {
    position: fixed;
    top: 200px;
    width: inherit;
    /* Maintain the width of the original container */
    z-index: 1000;
    /* Adjust the z-index if necessary */
}
</style>
