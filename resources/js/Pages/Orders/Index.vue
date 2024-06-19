<template>
<AuthenticatedLayout>
    <div>
        <!-- End Navbar -->
        <div v-if="loading" class="fixed inset-0 z-[9999] flex items-center justify-center overflow-auto bg-black bg-opacity-50">
            <div class=" rounded-lg w-1/2 p-8">
                <div class="flex justify-center">
                    <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                </div>
            </div>
        </div>
        <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
            <div class="mb-1 w-full">
                <div class="mb-4">
                    <nav class="flex mb-5" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-2">
                            <li class="inline-flex items-center">
                                <a href="#" class="text-gray-700 hover:text-gray-900 inline-flex items-center">
                                    <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                    </svg>
                                    Home
                                </a>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-400 ml-1 md:ml-2 text-sm font-medium" aria-current="page">orders</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <h1 class="text-xl sm:text-2xl font-semibold text-gray-900">All orders</h1>
                </div>
                <div class="block sm:flex items-center md:divide-x md:divide-gray-100">
                    <form class="sm:pr-3 mb-4 sm:mb-0" action="#" method="GET">
                        <label for="orders-search" class="sr-only">Search</label>
                        <div class="mt-1 relative sm:w-64 xl:w-96">
                            <input type="text" name="email" id="orders-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Search for orders">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div v-if="$page.props.errors">
            <div v-for="error in $page.props.errors" :key="error" class="text-red-600">
                {{ error }}
            </div>
        </div>
        <div v-if="$page.props.flash.success" class="text-green-500">
            {{ $page.props.flash.success }}
        </div>
        <div class="flex flex-col">
            <div class="overflow-x-auto">
                <div class="align-middle inline-block min-w-full">
                    <div class="shadow overflow-hidden">
                        <table class="table-fixed min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th scope="col" class="p-4 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase">S/N</th>
                                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">Order Number</th>
                                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                    <th scope="col" class="p-4 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase">Number of items</th>
                                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr @click="showOrderModal(order)" v-for="(order, index) in orders.data" :key="index" class="hover:bg-gray-100 cursor-pointer">
                                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{{ index + 1 }}</td>
                                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{{ order.reference_number }}</td>
                                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{{ order.status }}</td>
                                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{{ order.order_items.length }}</td>
                                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">₦{{ order.total_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{{ dateTime(order.created_at) }}</td>
                                    <td class="p-4 whitespace-nowrap space-x-2">
                                        <button @click="showOrderModal(order)" type="button" class="text-white bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">View</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div v-if="orders.length == 0" class="flex justify-center mt-10">
                        <span>No order Found</span>
                    </div>
                    <!-- Pagination -->
                    <div class="mx-auto md:px-40">

                        <nav class="bg-white px-4 py-3 flex items-center justify-center border-t border-gray-200 sm:px-6" aria-label="Pagination">
                            <div class="hidden sm:block">
                                <p class="text-sm text-gray-700">
                                    Showing
                                    <span class="font-medium">{{ orders.from }}</span>
                                    to
                                    <span class="font-medium">{{ orders.to }}</span>
                                    of
                                    <span class="font-medium">{{ orders.total }}</span>
                                    results
                                </p>
                            </div>
                            <div class="flex-1 flex justify-between sm:justify-end">
                                <Link :href="orders.prev_page_url" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100" :disabled="!orders.prev_page_url">
                                Previous
                                </Link>
                                <Link :href="orders.next_page_url" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100" :disabled="!orders.next_page_url">
                                Next
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <!-- Order Details Modal -->
        <div v-if="isOrderModalVisible" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div class=" relative md:w-[600px] h-[90vh] bg-white overflow-hidden p-6 rounded-lg">

                <div class=" max-h-[80vh]  overflow-y-auto">

                    <div class=" bg-gray-100 p-4">
                        <h2 class="text-xl font-bold mb-2">Order Details</h2>
                        <div class="pb-2 flex justify-between"><strong>Order ID:</strong> <span>{{ selectedOrder.reference_number }}</span></div>
                        <div v-if="selectedOrder.shippingType == 'ME'" class="pb-2 flex justify-between"><strong>Shipping Type:</strong> <span>Send to my location</span></div>
                        <div v-if="selectedOrder.shippingType == 'OFFICE'" class="pb-2 flex justify-between"><strong>Shipping Type:</strong> <span>Pick Up</span></div>
                        <div class="pb-2 flex justify-between"><strong>Delivery Location:</strong> <span>{{ selectedOrder.DeliveryLocation }}</span></div>
                        <div class="pb-2 flex justify-between"><strong>Delivery State:</strong> <span>{{ selectedOrder.DeliveryState }}</span></div>
                        <div class="pb-2 flex justify-between"><strong>Delivery Address:</strong> <span>{{ selectedOrder.DeliveryAddress }}</span></div>
                        <div class="pb-2 flex justify-between"><strong>Contact Email:</strong> <span>{{ selectedOrder.email }}</span></div>
                        <div class="py-2 border-t flex justify-between"><strong>Order Amount:</strong> <span class="font-bold">₦{{ selectedOrder.total_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</span></div>
                    </div>
                    <ul v-for=" orderItem , index in selectedOrder.order_items" :key="index" class="space-y-2 border-t-4 border-primary py-4">
                        <li class="pb-4 flex justify-between">

                            <select v-model="orderItem.status.status" @change="updateStatus(orderItem)" :style="selectStyle(orderItem.status.status)">
                                <option disabled>Select</option>
                                <option value="Pending" style="color: red;">Pending</option>
                                <option value="Order Processed" style="color: orange;">Order Processed</option>
                                <option value="Order Shipped" style="color: blue;">Order Shipped</option>
                                <option value="Order En Route" style="color: purple;">Order En Route</option>
                                <option value="Order Arrived" style="color: green;">Order Arrived</option>
                            </select>

                            <strong>item({{ index + 1 }})</strong>
                        </li>

                        <li><strong>Delivery Type:</strong>
                            <span v-if="orderItem.deliveryPeriod == 'Standard'">{{ orderItem.deliveryPeriod }}
                                <span>
                                    ( 14 working Days Delivery )
                                </span>
                            </span>
                            <span v-if="orderItem.deliveryPeriod == 'Express'">{{ orderItem.deliveryPeriod }}
                                <span>
                                    ( 6-7 working Days Delivery )
                                </span>
                            </span>
                            <span v-if="orderItem.deliveryPeriod == 'Next Day'">{{ orderItem.deliveryPeriod }}
                                <span>
                                    ( 1 - 2 working Day(s)Delivery )
                                </span>
                            </span>
                        </li>
                        <li><strong>Product Name:</strong> <span>{{ orderItem.product.name }}</span></li>
                        <li><strong>Expected Delivery Date:</strong> <span>{{ dateTime(orderItem.expectedDeliveryDate) }}</span></li>
                        <li><strong>Quantity:</strong> <span>{{ orderItem.quantity }}</span></li>
                        <li v-if="orderItem.hireDesigner == 1"><strong>Hire Designer:</strong> <span>Yes</span></li>

                        <li v-if="orderItem.hireDesigner == 1"><strong>Design Description:</strong> <span>{{ orderItem.designDescription }}</span></li>

                        <li class="  py-4"><strong>Product Attribute</strong>
                            <span v-for="attribute in orderItem.attributes" :key="attribute" class=" block">
                                <span class=" flex space-x-4">
                                    <strong>{{ attribute.name }}</strong> : <span>{{ getOptionName(orderItem, attribute.pivot.option_id) }}</span>
                                </span>
                            </span>
                        </li>

                        <!-- Include the Files component and pass the files data -->
                        <Files :files="orderItem.orderimages"></Files>
                    </ul>
                </div>
                <div class="mt-6 text-right  absolute w-full bottom-0 left-0 bg-white p-4">
                    <button @click="isOrderModalVisible = false" class="px-4 py-2 bg-red-600 text-white rounded">Close</button>
                </div>
            </div>
        </div>
    </div>
</AuthenticatedLayout>
</template>

<script>
import moment from 'moment';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Files from '@/Components/Files.vue'
import {
    Head,
    Link,
    router,
    useForm,

} from "@inertiajs/vue3";
import axios from 'axios';

export default {
    props: ['orders'],
    components: {
        Link,
        AuthenticatedLayout,
        Files
    },
    data() {
        return {
            isOrderModalVisible: false,
            selectedOrder: {},
            status: null,
            loading: false
        };
    },
    computed: {},
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
        updateStatus(orderItem) {
            this.loading = !this.loading
            axios.put(`/orders/${orderItem.status.order_item_id}`, {
                    status: orderItem.status.status
                })
                .then(response => {
                    // Handle success, e.g., show a notification or update the UI
                    this.loading = this.loading ? false : this.loading
                })
                .catch(error => {
                    // Handle error, e.g., show an error notification
                    this.loading = this.loading ? false : this.loading
                });
        },
        getOptionName(orderItem, optionId) {
            const option = orderItem.options.find(option => option.id === optionId);
            return option ? option.value : 'Unknown';
        },
        previeworder(orderId) {
            axios.delete(`http://localhost:8000/api/users/${orderId}`).then(() => {
                this.$emit('reload');
            });
        },
        showOrderModal(order) {
            this.selectedOrder = order;
            this.isOrderModalVisible = true;
        },
        dateTime(value) {
            return moment(value).format("MMM Do YYYY");
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
