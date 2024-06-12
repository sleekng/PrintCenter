<template>
<!--   Navbar -->
<Header class="" />
<!-- End Navbar -->

<section class="py-12 sm:py-16 mt-[80px]">
    <div class="container mx-auto px-24">
        <div class="flex">
            <nav class="flex w-9/12">
                <ol role="list" class="flex items-center">
                    <li class="text-left">
                        <div class="-m-1">
                            <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                                Home
                            </a>
                        </div>
                    </li>

                    <li class="text-left">
                        <div class="flex items-center">
                            <span class="mx-2 text-gray-400">/</span>
                            <div class="-m-1">
                                <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                                    Products
                                </a>
                            </div>
                        </div>
                    </li>

                    <li class="text-left">
                        <div class="flex items-center">
                            <span class="mx-2 text-gray-400">/</span>
                            <div class="-m-1">
                                <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page">
                                    Coffee
                                </a>
                            </div>
                        </div>
                    </li>
                </ol>
            </nav>

            <div class="w-3/12 relative">
                <input type="text" placeholder=" Search for a product" class="w-full pr-12 h-[60px] border rounded-md" />
                <i class="fa-sharp fa-light fa-magnifying-glass absolute top-4 right-4 text-2xl"></i>
            </div>
        </div>

        <section class=" py-12 sm:py-4 lg:py-8 border bg-gray-50 mt-20">

            <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div class="px-4">
                    <p class="mt-8 text-lg font-medium">Customer Information</p>

                    <div class="mt-4">
                        <label for="email" class="mt-4 mb-2 block text-sm font-medium">First Name*</label>
                        <div class="relative">
                            <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="First Name" />

                        </div>

                    </div>

                    <div class="mt-4">
                        <label for="email" class="mt-4 mb-2 block text-sm font-medium">Last Name*</label>
                        <div class="relative">
                            <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Last Name" />

                        </div>

                    </div>

                    <div class="mt-4">
                        <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email*</label>
                        <div class="relative">
                            <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Email" />
                        </div>
                    </div>

                    <div class="mt-4">
                        <label for="text" class="mt-4 mb-2 block text-sm font-medium">Phone Number*</label>
                        <div class="relative">
                            <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Phone Number" />
                        </div>
                    </div>

                    <form class="mt-5 grid gap-6">
                        <p class="mt-8 text-lg font-medium">Shipping Methods</p>

                        <div class="relative">
                            <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
                            <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
                                <i class="fa-thin fa-cube text-4xl"></i>
                                <div class="ml-5">
                                    <span class="mt-2 font-semibold">DELIVER TO ME</span>
                                    <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                                </div>
                            </label>
                        </div>
                        <div>
                            <div class="mb-4">
                                <label for="" class="mb-[10px] block text-base font-medium text-dark">
                                    State
                                </label>
                                <div class="relative z-20">
                                    <select class="relative z-20 w-full appearance-none rounded-lg border border-stroke bg-transparent px-5 py-[10px] text-dark-6 outline-none transition  disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3">
                                        <option value="" class="">Lagos</option>
                                        <option value="" class="">Option</option>
                                        <option value="" class="">Option</option>
                                    </select>
                                    <span class="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-body-color">
                                    </span>
                                </div>
                            </div>
                            <div class="mb-4">
                                <label for="" class="mb-[10px] block text-base font-medium text-dark">
                                    City
                                </label>
                                <div class="relative z-20">
                                    <select class="relative z-20 w-full appearance-none rounded-lg border border-stroke bg-transparent px-5 py-[10px] text-dark-6 outline-none transition  disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3">
                                        <option value="" class="">Lekki</option>
                                        <option value="" class="">Option</option>
                                        <option value="" class="">Option</option>
                                    </select>
                                    <span class="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-body-color">
                                    </span>
                                </div>
                            </div>
                            <div class="mb-4">
                            <label for="" class="mb-[10px] block text-base font-medium text-dark">
                                Address
                            </label>
                            <input type="text" placeholder="Address" class="w-full rounded-md border border-stroke bg-transparent px-5 py-[10px] text-dark-6 outline-none transition disabled:cursor-default disabled:border-gray-2 disabled:bg-gray-2 dark:border-dark-3">
                            </div>
                        </div>
                        <div class="relative">
                            <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
                            <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
                                <i class="fa-thin text-4xl fa-truck"></i>
                                <div class="ml-5">
                                    <span class="mt-2 font-semibold">PICKUP ITEM AT OUR OFFICE</span>
                                    <p class="text-slate-500 text-sm leading-6">Delivery: 2 Days</p>
                                </div>
                            </label>
                        </div>
                        <div>
                            <div class="mb-4">
                                <label for="" class="mb-[10px] block text-base font-medium text-dark">
                                    State
                                </label>
                                <div class="relative z-20">
                                    <select class="relative z-20 w-full appearance-none rounded-lg border border-stroke bg-transparent px-5 py-[10px] text-dark-6 outline-none transition  disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3">
                                        <option value="" class="">Lagos</option>
                                        <option value="" class="">Option</option>
                                        <option value="" class="">Option</option>
                                    </select>
                                    <span class="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-body-color">
                                    </span>
                                </div>
                            </div>
                          
                        </div>
                    </form>
                </div>
                <div class="mt-10  px-4 pt-8 lg:mt-0">
                    <p class="text-xl font-medium">Purchase Summary</p>
                    <div class="">

                        <!-- Total -->
                        <div class="mt-6 border-t border-b py-2">
                            <div class="flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-900">Subtotal</p>
                                <p class="font-semibold text-gray-900">₦{{ subTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
                            </div>
                            <div class="flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-900">Shipping</p>
                                <p class="font-semibold text-gray-900">$8.00</p>
                            </div>
                        </div>
                        <div class="mt-6 flex items-center justify-between">
                            <p class="text-sm font-medium text-gray-900">Total</p>
                            <p class="text-2xl font-semibold text-gray-900">$408.00</p>
                        </div>
                    </div>
                    <button class="mt-4 mb-8 w-full rounded-md bg-green-600 px-6 py-3 font-medium text-white">Place Order</button>
                </div>
            </div>

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
import {
    Head,
    Link,
    useForm
} from "@inertiajs/vue3";
import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";
import SiteModal from "@/Components/SiteModal.vue";
export default {
    components: {
        ApplicationLogo,
        PrimaryButton,
        Link,
        Header,
        Footer,
        SiteModal,
    },

    props:[
        'subTotal'
    ],
    data() {
        return {
           
        };
    },

    computed:{

        calculateTotal(){

        }

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped></style>
