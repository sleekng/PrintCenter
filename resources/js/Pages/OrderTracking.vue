<template>
<Header :navcategories="navcategories" :CartCount="CartCount" />
<div v-if="loading" class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
    <div class=" rounded-lg w-1/2 p-8">
        <div class="flex justify-center">
            <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
    </div>
</div>
<section class="py-4">
    <div class="container mx-auto px-4 sm:px-6 lg:px-24">
        <div class="flex flex-col lg:flex-row">
            <nav class="flex w-full lg:w-9/12 mb-4 lg:mb-0">
                <ol role="list" class="flex items-center">
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
                                <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page">
                                    Order Tracking
                                </a>
                            </div>
                        </div>
                    </li>
                </ol>
            </nav>

            <search />
        </div>

    </div>
</section>

<div class="flex flex-col items-center justify-center bg-gray-100 py-6 px-4">
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
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-2xl">
        <div class="text-center mb-4">

            <h2 class="text-xl font-bold">Track your print order without hassles</h2>
            <p class="text-gray-600">Easily track the status of your PrintCenter order using your order number and see step by step progress on your order.</p>
        </div>

        <div v-if="!order" class="flex items-center justify-center">
            <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 class="text-2xl font-bold mb-6 text-center">Order Tracking</h1>
                <div class=" text-red-600">
                    {{ error }}
                </div>
                <input v-model="form.orderNumber" @focus="error=null" class="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your order number">
                <button @click="trackOrder" :class="{ 'opacity-25': processing }" :disabled="processing" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Track Order
                </button>

            </div>
        </div>
        <div v-if="order" class="flex items-center flex-col justify-center mt-8">
            <div class="text-center mb-8 border-b">
                <h1 class="text-2xl font-bold text-green-600">Order: {{ order.reference_number }}</h1>
                <div v-for="orderItem in order.order_items" :key="orderItem" class=" border-t py-4">
                    <p class="text-sm text-gray-500">Product Name: {{ orderItem.product.name }}</p>
                    <p class="text-sm text-gray-500">Expected Arrival: {{ orderItem.expectedDeliveryDate }}</p>
                    <div class="mt-2">
                        <h2 class="text-xl font-semibold">Status: <span :style="selectStyle(orderItem.status.status)">{{ orderItem.status.status }}</span></h2>
                    </div>
                </div>

            </div>
            <div class=" flex justify-end">
                <button @click="ClearSearch" class="py-2 rounded-sm self-end px-8 bg-blue-600 text-white">Done</button>

            </div>

        </div>

    </div>
    <!-- Help section -->
    <div class="w-full md:w-4/12 p-5 border shadow-lg rounded-md mt-8 md:mt-0">
        <h2 class="text-center font-bold mb-4">Need Help?</h2>
        <p class="mb-4">If you have any questions or need assistance with your design, feel free to contact our support team.</p>
        <div class="flex justify-center">
            <primary-button @click="contactSupport" class="px-8 md:px-16 py-2 md:py-4 font-bold bg-primary text-white rounded-md">Contact Support</primary-button>
        </div>
    </div>
</div>

<!-- Footer Section Begins -->
<Footer />
<!-- Footer Section Ends -->
</template>

<script>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {
    Head,
    Link,
    router,
    useForm
} from "@inertiajs/vue3";
import Header from "@/Components/Header.vue";
import InputError from '@/Components/InputError.vue';
import Footer from "@/Components/Footer.vue";
import SiteModal from "@/Components/SiteModal.vue";
import Search from "@/Components/Search.vue"
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
        InputError
    },

    props: ['navcategories', 'CartCount', 'url', 'totalAmount', ],
    data() {
        return {
            error: null,
            form: useForm({

                orderNumber: null,
            }),
            order: null,
            loading: false,
            processing:false
        };
    },
    methods: {
        selectStyle(status) {
            switch (status) {
                case 'Pending':
                    return {
                        color: 'red'
                    };
                case 'Order Processed':
                    return {
                        color: 'orange'
                    };
                case 'Order Shipped':
                    return {
                        color: 'blue'
                    };
                case 'Order En Route':
                    return {
                        color: 'purple'
                    };
                case 'Order Arrived':
                    return {
                        color: 'green'
                    };
                default:
                    return {
                        color: 'black'
                    };
            }
        },
        trackOrder() {
            this.processing =true
            if (!this.form.orderNumber) {
                this.error = 'Kindly Enter Tracking Number'
                this.processing =false
                // Display an error or prevent the request if orderNumber is empty
                return;
            }
            // Proceed with the request
            this.loading = true;
            axios.get(`/order-tracking/${this.form.orderNumber}`)
                .then((response) => {
                    

                    this.order = response.data.order;
                    this.processing = false

                })
                .catch((error) => {
                    this.error = error.response.data.message;
                    this.processing = false
                    console.error('Error fetching order:', error);
                })
                .finally(() => {
                    this.processing = false
                    this.loading = false;
                });
        },
        ClearSearch() {
            this.order = null
            this.form.orderNumber = null
        }

    },
};
</script>

<style scoped>
.progress-bar {
    position: relative;
}

.progress-bar::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #e0e0e0;
    z-index: -1;
}

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
