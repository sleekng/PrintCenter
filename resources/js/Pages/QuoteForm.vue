<template>
<Header :navcategories="navcategories" :CartCount="CartCount" />

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
                                   Get Quote
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

<div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-6 px-4">
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
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <div class="text-center mb-4">

            <h2 class="text-xl font-bold">Get Custom print Quote Quickly!</h2>
            <p class="text-gray-600">Fill the details of your order below.</p>
        </div>
        <form v-if="!$page.props.auth.user" @submit.prevent="notLoginSubmitForm">
            <div class="mb-4">
                <label for="full_name" class="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                <input v-model="form.full_name" id="full_name" type="full_name" placeholder="Your first and last names" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <InputError class="mt-2" :message="form.errors.full_name" />
            </div>

           
            <div class="mb-4">
                <label for="phone_number" class="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                <input v-model="form.phone_number" id="phone_number" type="text" placeholder="Your phone number" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <InputError class="mt-2" :message="form.errors.phone_number" />
            </div>
            <div class="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email address</label>
                <input v-model="form.email" id="email" type="email" placeholder="Your email address" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <InputError class="mt-2" :message="form.errors.email" />
            </div>
            <div class="mb-4">
                <label for="quote" class="block text-gray-700 text-sm font-bold mb-2">What would you like to Print?</label>
                <textarea name="quote" v-model="form.quote" id="" cols="30" rows="3" placeholder="Tell us the name and the quantity" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                <InputError class="mt-2" :message="form.errors.qoute" />
            </div>
            <div class="mb-4 flex flex-col">
                <label for="artwork" class="block text-gray-700 text-sm font-bold mb-2">
                    How about the design (Artwork)?
                    <p class=" font-normal text-sm">Let us know if you have the artwork for the print job.</p>
                    <InputError class="mt-2" :message="form.errors.artwork" />
                </label>
                <label>
                    <input name="artwork" id="artwork" value="Yes, I have a design" v-model="form.artwork" type="radio"><span class="px-2">Yes, I have a design</span>
                </label>
                <label>
                    <input name="artwork" id="artwork" value="No, I don't have" v-model="form.artwork" type="radio"><span class="px-2">No, I don't have</span>
                </label>
            </div>
            <div class="mb-4">
                <label for="address" class="block text-gray-700 text-sm font-bold mb-2">Your Delivery Address</label>
                <textarea placeholder="Kindly give us the full delivery address" name="address" v-model="form.address" id="address" cols="30" rows="3" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                <InputError class="mt-2" :message="form.errors.address" />
            </div>
            <div class="flex items-center justify-between">
                <button :class="{ 'opacity-25': form.processing }" :disabled="form.processing" type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Send Request
                </button>
            </div>
        </form>
        <form v-if="$page.props.auth.user" @submit.prevent="loginSubmitForm">
  
           <div class="mb-4">
                <label for="phone_number" class="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                <input v-model="form.phone_number" id="phone_number" type="text" placeholder="Your phone number" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <InputError class="mt-2" :message="form.errors.phone_number" />
            </div>
            <div class="mb-4">
                <label for="quote" class="block text-gray-700 text-sm font-bold mb-2">What would you like to Print?</label>
                <textarea name="quote" v-model="form.quote" id="" cols="30" rows="3" placeholder="Tell us the name and the quantity" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                <InputError class="mt-2" :message="form.errors.quote" />
            </div>
            <div class="mb-4 flex flex-col">
                <label for="artwork" class="block text-gray-700 text-sm font-bold mb-2">
                    How about the design (Artwork)?
                    <p class=" font-normal text-sm">Let us know if you have the artwork for the print job.</p>
                    <InputError class="mt-2" :message="form.errors.artwork" />
                </label>
                <label>
                    <input name="artwork" id="artwork" value="Yes, I have a design" v-model="form.artwork" type="radio"><span class="px-2">Yes, I have a design</span>
                </label>
                <label>
                    <input name="artwork" id="artwork" value="No, I don't have" v-model="form.artwork" type="radio"><span class="px-2">No, I don't have</span>
                </label>
            </div>
            <div class="mb-4">
                <label for="address" class="block text-gray-700 text-sm font-bold mb-2">Your Delivery Address</label>
                <textarea placeholder="Kindly give us the full delivery address" name="address" v-model="form.address" id="address" cols="30" rows="3" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                <InputError class="mt-2" :message="form.errors.address" />
            </div>
            <div class="flex items-center justify-between">
                <button :class="{ 'opacity-25': form.processing }" :disabled="form.processing" type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Send Request
                </button>
            </div>
        </form>

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
import { v4 as uuidv4 } from 'uuid';

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
    props: ['navcategories', 'CartCount', 'url', 'totalAmount'],
    data() {
        return {

            form: useForm({
                full_name: '',
                phone_number: '',
                address: '',
                quote: '',
                artwork: null,
                email: '',

                user_id: uuidv4(),
            })
        };
    },
    methods: {
      notLoginSubmitForm() {
            this.form.post(route('quotes.store'), {
                preserveScroll: true,
                onSuccess: () => this.form.reset()
            })
        },
        loginSubmitForm() {
            this.form.post(route('quotes.store'), {
                preserveScroll: true,
                onSuccess: () => this.form.reset()
            })
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
