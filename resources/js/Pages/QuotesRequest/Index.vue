<template>
<AuthenticatedLayout>
    <div>
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
                                    <span class="text-gray-400 ml-1 md:ml-2 text-sm font-medium" aria-current="page">Order Request</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <h1 class="text-xl sm:text-2xl font-semibold text-gray-900">All Order Requests</h1>
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
                                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">S/N</th>
                                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">Full Name</th>
                                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">Phone Number</th>
                                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr @click="showQuoteModal(quote)" v-for="(quote, index) in QuoteRequest.data" :key="index" class="hover:bg-gray-100 cursor-pointer">
                                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{{ index + 1 }}</td>
                                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{{ quote.full_name }}</td>
                                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{{ quote.phone_number }}</td>
                                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{{ quote.email }}</td>
                                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">{{ dateTime(quote.created_at) }}</td>
                                    <td class="p-4 whitespace-nowrap space-x-2">
                                        <button @click="showQuoteModal(quote)" type="button" class="text-white bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">View</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div v-if="QuoteRequest.length == 0" class="flex justify-center mt-10">
                        <span>No Request Found</span>
                    </div>

                    <!-- Pagination -->
                     <div class="mx-auto md:px-40">

                         <nav class="bg-white px-4 py-3 flex items-center justify-center border-t border-gray-200 sm:px-6" aria-label="Pagination">
                             <div class="hidden sm:block">
                                 <p class="text-sm text-gray-700">
                                     Showing
                                     <span class="font-medium">{{ QuoteRequest.from }}</span>
                                     to
                                     <span class="font-medium">{{ QuoteRequest.to }}</span>
                                     of
                                     <span class="font-medium">{{ QuoteRequest.total }}</span>
                                     results
                                 </p>
                             </div>
                             <div class="flex-1 flex justify-between sm:justify-end">
                                 <Link :href="QuoteRequest.prev_page_url" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100" :disabled="!QuoteRequest.prev_page_url">
                                     Previous
                                 </Link>
                                 <Link :href="QuoteRequest.next_page_url" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100" :disabled="!QuoteRequest.next_page_url">
                                     Next
                                 </Link>
                             </div>
                         </nav>
                     </div>


                </div>
            </div>
        </div>

        <!-- Order Details Modal -->
        <div v-if="isQuoteModalVisible" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div class=" relative md:w-[600px] h-[90vh] bg-white overflow-hidden p-6 rounded-lg">

                <div class=" max-h-[80vh]  overflow-y-auto">
                    <form @submit.prevent="submitForm">
                        <div class="mb-4">
                            <label for="full_name" class="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                            <input disabled v-model="form.full_name" id="full_name" type="full_name" placeholder="Your first and last names" class="shadow bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-4">
                            <label for="phone_number" class="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                            <input disabled v-model="form.phone_number" id="phone_number" type="text" placeholder="Your phone number" class="shadow bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email address</label>
                            <input disabled v-model="form.email" id="email" type="email" placeholder="Your email address" class="shadow bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">

                        </div>
                        <div class="mb-4">
                            <label for="request" class="block text-gray-700 text-sm font-bold mb-2">What would you like to Print?</label>
                            <textarea disabled name="request" v-model="form.request" id="" cols="30" rows="3" placeholder="Tell us the name and the quantity" class="shadow bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>

                        </div>
                        <div class="mb-4 flex flex-col">
                            <label for="artwork" class="block text-gray-700 text-sm font-bold mb-2">
                                How about the design (Artwork)?
                                <p class=" font-normal text-sm">Let us know if you have the artwork for the print job.</p>
                            </label>
                            <input disabled v-model="form.artwork" id="email" type="text" placeholder="Your email address" class="shadow bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-4">
                            <label for="address" class="block text-gray-700 text-sm font-bold mb-2">Your Delivery Address</label>
                            <textarea disabled placeholder="Kindly give us the full delivery address" name="address" v-model="form.address" id="address" cols="30" rows="3" class="shadow bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>

                        </div>
                        <div class="mt-6 text-right  absolute w-full bottom-0 left-0 bg-white p-4">
                            <button @click="isQuoteModalVisible = false" class="px-4 py-2 bg-red-600 text-white rounded">Close</button>
                        </div>
                    </form>

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
    props: ['QuoteRequest'],
    components: {
        Link,
        AuthenticatedLayout,
        Files
    },
    data() {
        return {
            isQuoteModalVisible: false,
            selecteQuote: {},
            form: useForm({
                full_name: '',
                phone_number: '',
                address: '',
                request: '',
                artwork: null,
                email: '',
            })
        };
    },
    methods: {

        showQuoteModal(quote) {
            this.form = quote;
            this.isQuoteModalVisible = true;
        },
        dateTime(value) {
            return moment(value).format("MMM Do YYYY");
        },
    },
};
</script>

<style lang="scss" scoped>
      </style>
