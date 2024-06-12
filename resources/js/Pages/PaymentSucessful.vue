<template>
    <div class="px-4">
        <div class="flex justify-center items-center h-screen bg-white m-0 font-sans">
            <div id="receipt-content" class="bg-white max-w-[500px] text-center border border-gray-300 rounded-lg p-5">
                <div class=" py-4 font-bold text-green-600">
                    <p>Payment Successful <i class="fa-sharp fa-solid fa-badge-check"></i></p>
                </div>
                <div class="mb-2.5">
                    <Link :href="route('home')">
                        <img src="/storage/img/logo-main.png" alt="Print Centre" class="h-20 mx-auto">
                    </Link>
                </div>
                <div class="mb-5 border-b border-gray-300 pb-2.5">
                    <p class="py-2.5 m-0 flex justify-center">
                        <strong>Order Amount</strong>
                    </p>
                    <span class="text-2xl text-blue-600 font-bold">
                        &#8358;{{ order.total_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
                    </span>
                </div>
                <div class="bg-gray-100 p-10 rounded-lg text-left">
                    <p class="py-4 border-b border-gray-300 m-0 space-x-8 flex justify-between whitespace-nowrap"><strong>Customer's Name</strong> <span>{{ order.user.first_name }} {{ order.user.last_name }}</span></p>
                    <p class="py-4 border-b border-gray-300 m-0 space-x-8 flex justify-between"><strong>Reference:</strong> <span>{{ order.reference_number }}</span></p>
                    <p v-if="order.shippingType == 'OFFICE'" class="py-4 border-b border-gray-300 m-0 flex justify-between"><strong>Delivery Type:</strong> <span>Pick up</span></p>
                    <p class="py-4 border-b border-gray-300 m-0 space-x-8 flex justify-between"><strong>Delivery State</strong> <span>{{ order.DeliveryState }}</span></p>
                    <p v-if="order.shippingType == 'OFFICE'" class="py-4 border-b border-gray-300 m-0 flex justify-between"><strong>Delivery Location</strong> <span>{{ order.DeliveryLocation }}</span></p>
                    <p v-if="order.shippingType == 'ME'" class="py-4 border-b border-gray-300 m-0 flex justify-between"><strong>Delivery Address</strong> <span>{{ order.DeliveryAddress }}</span></p>
                    <p class="py-4 border-b border-gray-300 m-0 space-x-8 flex justify-between"><strong>Date:</strong> <span>{{ dateTime(order.created_at) }}</span></p>
                    <div class="pt-4">
                        <span v-if="order.shippingType == 'OFFICE'">
                            Kindly come to the pick up center with the a screenshot or print out of the above receipt to claim item(s).
                        </span>
                        <span v-if="order.shippingType == 'ME'">
                            Thanks, your order is on its way.
                        </span><br>
                        <div>
                            <Link class=" text-blue-600" v-if="$page.props.auth.user" :href="route('order')">Proceed to Order List</Link>
                            <Link class=" text-blue-600" v-else :href="route('home')">Proceed Home</Link>
                        </div>
                        <div class="mt-4">
                            <button @click="printPage" class="bg-blue-500 text-white py-2 px-4 rounded">Download Receipt</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    import moment from 'moment'
    import { Link } from '@inertiajs/vue3'
    
    export default {
        name: "PaymentSuccessful",
        props: ['order'],
        components: { Link },
        methods: {
            dateTime(value) {
                return moment(value).format("MMM Do YYYY");
            },
            printPage() {
                window.print();
            }
        }
    }
    </script>
    
    <style lang="scss" scoped>
    </style>
    