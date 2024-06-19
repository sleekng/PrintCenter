<template>
<!--   Navbar -->
<!--   Navbar -->
<Header :navcategories="navcategories" :CartCount="CartCount" />
<!-- End Navbar -->

<section class="py-12 sm:py-16 ">
    <div class="container mx-auto ">
        <div class="flex flex-col sm:flex-row">
            <nav class="flex w-full sm:w-9/12 mb-4 sm:mb-0">
                <ol role="list" class="flex items-center space-x-2">
                    <li class="text-left">
                        <div class="-m-1">
                            <Link :href="route('home')" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                                    Home
                                </Link>
                        </div>
                    </li>

                    <li class="text-left">
                        <div class="flex items-center">
                            <span class="mx-2 text-gray-400">/</span>
                            <div class="-m-1">
                                <Link :href="route('home')" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                                    Products
                                </Link>
                            </div>
                        </div>
                    </li>

                    <li class="text-left">
                        <div class="flex items-center">
                            <span class="mx-2 text-gray-400">/</span>
                            <div class="-m-1">
                                <Link :href="route('checkout')" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page">
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </li>
                </ol>
            </nav>

            <search />
        </div>
        <section class=" py-12 sm:py-4 lg:py-8 border bg-gray-50 mt-20">
            <div v-if="$page.props.flash.error" class="inline-flex  lg:px-20 xl:px-32 rounded-lg px-[18px] animate-bounce animate-once animate-duration-[3000ms]">

                <p class="flex items-center text-sm font-medium text-red-600">
                    <span class="mr-3 flex h-5 w-5 items-center justify-center rounded-full ">
                        <i class="fa-sharp fa-thin fa-diamond-exclamation"></i>
                    </span>
                    {{ $page.props.flash.error }}
                </p>

            </div>

            <form @submit.prevent="submit" class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div class="px-4">
                    <p class="mt-8 text-lg font-medium">Customer Information</p>

                    <div class="mt-4">
                        <label for="first_name" class="mt-4 mb-2 block text-sm font-medium">First Name*</label>
                        <div class="relative">
                            <input v-model="form.first_name" type="text" id="first_name" name="first_name" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="First Name" />
                            <div v-if="form.errors.first_name" class=" text-sm text-red-600">{{ form.errors.first_name }}</div>
                        </div>

                    </div>

                    <div class="mt-4">
                        <label for="last_name" class="mt-4 mb-2 block text-sm font-medium">Last Name*</label>
                        <div class="relative">
                            <input v-model="form.last_name" type="text" id="last_name" name="last_name" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Last Name" />
                            <div v-if="form.errors.last_name" class=" text-sm text-red-600">{{ form.errors.last_name }}</div>
                        </div>

                    </div>

                    <div class="mt-4">
                        <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email*</label>
                        <div class="relative">
                            <input v-model="form.email" type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Email" />
                            <div v-if="form.errors.email" class=" text-sm text-red-600">{{ form.errors.email }}</div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <label for="text" class="mt-4 mb-2 block text-sm font-medium">Phone Number*</label>
                        <div class="relative">
                            <input v-model="form.phone_number" type="text" id="phone_number" name="phone_number" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Phone Number" />
                            <div v-if="form.errors.phone_number" class=" text-sm text-red-600">{{ form.errors.phone_number }}</div>
                        </div>
                    </div>

                    <div class="mt-5 grid gap-6">
                        <p class="mt-8 text-lg font-medium">Shipping Methods</p>

                        <div class="relative">
                            <input class="peer hidden" id="radio_1" type="radio" name="radio" v-model="form.shippingType" value="ME" />
                            <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label class="peer-checked:border-2 peer-checked:border-green-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-green-600 p-4" for="radio_1">
                                <i class="fa-thin fa-cube text-4xl"></i>
                                <div class="ml-5">
                                    <span class="mt-2 font-semibold">DELIVER TO ME</span>
                                    <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                                </div>
                            </label>
                        </div>
                        <div v-if="form.shippingType == 'ME'">
                            <div class="mb-4">
                                <label for="" class="mb-[10px] block text-base font-medium text-dark">
                                    State
                                </label>
                                <div class="relative z-20">
                                    <select v-model=" form.state" class="relative z-20 w-full appearance-none rounded-lg border border-stroke bg-transparent px-5 py-[10px] text-dark-6 outline-none transition  disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3">
                                        <option disabled selected class="">Select State</option>
                                        <option value="Lagos" class="">Lagos</option>
                                        <option value="Abuja" class="">Abuja</option>
                                        <option value="Kogi" class="">Kogi</option>
                                    </select>
                                    <span class="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-body-color">
                                    </span>
                                </div>
                                <div v-if="form.errors.state" class=" text-sm text-red-600">{{ form.errors.state }}</div>
                            </div>
                            <div class="mb-4">
                                <label for="" class="mb-[10px] block text-base font-medium text-dark">
                                    Address
                                </label>
                                <input v-model=" form.address" type="text" placeholder="Address" class="w-full rounded-md border border-stroke bg-transparent px-5 py-[10px] text-dark-6 outline-none transition disabled:cursor-default disabled:border-gray-2 disabled:bg-gray-2 dark:border-dark-3">
                                <div v-if="form.errors.address" class=" text-sm text-red-600">{{ form.errors.address }}</div>
                            </div>
                        </div>

                        <div class="relative ">
                            <input class="peer hidden " id="radio_2" type="radio" v-model="form.shippingType" value="OFFICE" name="radio" />
                            <span class="peer-checked:border-gray-700  absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label class="peer-checked:border-2  peer-checked:border-green-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-green-700 p-4" for="radio_2">
                                <i class="fa-thin text-4xl fa-truck"></i>
                                <div class="ml-5">
                                    <span class="mt-2 font-semibold">PICKUP ITEM AT OUR <br class="inline md:hidden"> OFFICE</span>
                                    <p class="text-slate-500 text-sm leading-6">Delivery: 2 Days</p>
                                </div>
                            </label>
                        </div>

                        <div v-if="form.shippingType == 'OFFICE'">
                            <div class="mb-4">
                                <label for="" class="mb-[10px] block text-base font-medium text-dark">
                                    State
                                </label>
                                <div class="relative z-20">
                                    <select v-model="form.state" class="relative z-20 w-full appearance-none rounded-lg border border-stroke bg-transparent px-5 py-[10px] text-dark-6 outline-none transition  disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3">
                                        <option disabled selected class="">Select State</option>
                                        <option value="Lagos" class="">Lagos</option>

                                    </select>
                                    <span class="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-body-color">
                                    </span>
                                </div>
                                <div v-if="form.errors.state" class=" text-sm text-red-600">{{ form.errors.state }}</div>
                            </div>
                            <div class="mb-4">
                                <label for="" class="mb-[10px] block text-base font-medium text-dark">
                                    Location
                                </label>
                                <div class="relative z-20">
                                    <select v-model="form.location" class="relative z-20 w-full appearance-none rounded-lg border border-stroke bg-transparent px-5 py-[10px] text-dark-6 outline-none transition  disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3">
                                        <option disabled selected class="">Select Region</option>
                                        <option value="Lekki" class="">Lekki</option>
                                        <option value="Mainland" class="">Mainland</option>
                                    </select>
                                    <span class="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-body-color">
                                    </span>
                                </div>
                                <div v-if="form.errors.location" class=" text-sm text-red-600">{{ form.errors.location }}</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="mt-10  px-4 pt-8 lg:mt-0">
                    <p class="text-xl font-medium">Purchase Summary</p>
                    <div class="">

                        <!-- Total -->
                        <div class="mt-6 border-t border-b py-2">
                            <div class="flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-900">Subtotal</p>
                                <p class="font-semibold text-gray-900"> ₦{{ SubTotalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
                            </div>
                            <div v-if="shippingCost != 0" class="flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-900">Shipping</p>
                                <p class="font-semibold text-gray-900">₦{{ shippingCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
                            </div>
                            <div class="flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-900">Tax</p>
                                <p class="font-semibold text-gray-900"> ₦0.00</p>
                            </div>
                        </div>
                        <div class="mt-6 flex items-center justify-between">
                            <p class="text-sm font-medium text-gray-900">Total</p>
                            <p class="text-2xl font-semibold text-gray-900"> ₦{{ calTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button :class="{ 'opacity-25': form.processing }" :disabled="form.processing" @click="submit" class="mt-4 mb-8 w-full text-center rounded-md bg-green-600 px-6 py-3 font-medium text-white">Proceed</button>
                    </div>
                </div>
            </form>

        </section>
    </div>
</section>

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
        SubTotalAmount: {
            required: true
        },
        CartCount: {
            type: Object,
        }
    },

    data() {
        return {
            loading: false,
            ready: false,
            uploadDesign: false,
            hireDesigner: false,
            requestDesign: false,
            categories: false,
            subCategories: false,
            tax: 1450,
            total: 0,

            shippingCost: 0,
            form: useForm({
                createAccount: false,
                first_name: null,
                last_name: null,
                email: null,
                phone_number: null,
                state: 'Lagos',
                location: 'Lekki',
                address: null,
                shippingType: null,
            })

        };
    },

    computed: {

        calTax() {
            let taxValue = this.tax

            return taxValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        },

        calTotal() {

            if (this.form.shippingType == 'ME') {
                this.shippingCost = 5000
            }
            if (this.form.shippingType == 'OFFICE') {
                this.shippingCost = 2000
            }

            this.total = parseFloat(this.SubTotalAmount) + parseFloat(this.shippingCost) || 0;

            return this.total;
        }

    },

    methods: {

        submit() {
            this.form.post(route('order'))
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
</style>
