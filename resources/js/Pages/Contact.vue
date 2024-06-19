<template>
<!-- Navbar -->
<Header :navcategories="navcategories" :CartCount="CartCount" />
<!-- End Navbar -->

<section class="py-12 sm:py-16 ">
    <div class="container mx-auto px-4 lg:px-24">
        <div class="flex flex-col lg:flex-row">
            <nav class="flex w-full lg:w-9/12 mb-4 lg:mb-0">
                <ol role="list" class="flex items-center">
                    <li class="text-left">
                        <div class="-m-1">
                            <Link :href="route('home')" class="rounded-md p-1 text-sm font-medium text-gray-900 focus:text-gray-900 focus:shadow hover:text-gray-800">
                            Home
                            </Link>
                        </div>
                    </li>

                    <li class="text-left">
                        <div class="flex items-center">
                            <span class="mx-2 text-gray-400">/</span>
                            <div class="-m-1">
                                <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-900 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </li>
                </ol>
            </nav>

            <search />
        </div>

        <div class="flex items-center justify-center  py-12  lg:px-8">
            <div class="flex w-full max-w-4xl bg-white rounded-lg shadow-md">
                <!-- Left Section with Image and Contact Info -->
                <div class="w-1/2 hidden sm:block relative bg-cover bg-center rounded-l-lg" style="background-image: url('storage/img/contact.jpg');">
                    <div class="absolute inset-0 bg-gray-900 bg-opacity-75 rounded-l-lg flex flex-col justify-center p-8">
                        <div class="text-white text-lg mb-4">
                            <i class="fas fa-map-marker-alt"></i>
                            <span class="ml-2">Address</span>
                        </div>
                        <div class="text-gray-300 mb-8">
                            4B Cappa Avenue, Palmgrove,<br>Lagos, Nigeria
                        </div>
                        <div class="text-white text-lg mb-4">
                            <i class="fas fa-phone-alt"></i>
                            <span class="ml-2">Let's Talk</span>
                        </div>
                        <div class="text-gray-300 mb-8">
                            +234 803 301 9848 <br>
                            +234 817 303 5032
                        </div>
                        <div class="text-gray-300 text-lg mb-4">
                            <i class="fas fa-envelope"></i>
                            <span class="ml-2">General Support</span>
                        </div>
                        <div class="text-gray-400">
                            infoprintcentrenigeria.com
                        </div>
                    </div>
                </div>

                <!-- Right Section with Form -->
                <div class="sm:w-1/2 w-full p-8">
                    <h2 class="text-2xl font-bold mb-6 text-gray-900">CONTACT US</h2>
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
                    <form @submit.prevent="submitForm">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name*</label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="form.name" id="name" type="text" placeholder="Name">
                            <InputError class="mt-2" :message="form.errors.name" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email*</label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="form.email" id="email" type="email" placeholder="Email">
                            <InputError class="mt-2" :message="form.errors.email" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">Phone*</label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="form.phone" id="phone" type="tel" placeholder="Phone">
                            <InputError class="mt-2" :message="form.errors.phone" />
                        </div>

                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Message*</label>
                            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="form.message" id="message" placeholder="Message"></textarea>
                            <InputError class="mt-2" :message="form.errors.message" />
                        </div>
                        <div class="flex items-center justify-end">
                            <PrimaryButton class="ms-4 bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                Send
                            </PrimaryButton>

                        </div>

                    </form>
                </div>
            </div>
        </div>

    </div>
</section>

<!-- Footer Section Begins -->
<Footer />
<!-- Footer Section Ends -->
</template>

<script>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputError from '@/Components/InputError.vue';
import {
    Head,
    Link,
    router,
    useForm
} from "@inertiajs/vue3";
import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";
import SiteModal from "@/Components/SiteModal.vue";
import Search from "@/Components/Search.vue"
import axios from 'axios';

export default {
    components: {
        InputError,
        Search,
        ApplicationLogo,
        PrimaryButton,
        Link,
        Header,
        Footer,
        SiteModal,
    },
    props: ['navcategories', 'CartCount', 'url', 'totalAmount'],
    data() {
        return {
            loading: false,
            total: 0,
            shippingCost: 0,
            form: useForm({
                name: '',
                email: '',
                phone: '',
                message: '',
            })
        };
    },
    methods: {
        submitForm() {
            this.form.post('/contact', {
                preserveScroll: true,
                onSuccess: () => form.reset(),
            })
        }
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
