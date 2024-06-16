<template>
    <!-- Navbar -->
    <Header :navcategories="navcategories" :CartCount="CartCount" />
    <!-- End Navbar -->
  
    <section class="py-12 sm:py-16">
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
                    <Link :href="route('home')" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                    Home
                  </Link>
                  </div>
                </div>
              </li>
  
              <li class="text-left">
                <div class="flex items-center">
                  <span class="mx-2 text-gray-400">/</span>
                  <div class="-m-1">
                    <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page">
                      PayNow
                    </a>
                  </div>
                </div>
              </li>
            </ol>
          </nav>
  
          <search />
        </div>
  
        <section class="py-12 sm:py-4 lg:py-8 flex justify-center mt-20">
          <div class="grid sm:px-4 w-full lg:grid-cols-1 border max-w-xl bg-gray-50 lg:px-4">
            <div class="px-4">
              <p class="mt-8 text-lg font-medium">Choose your Payment Method</p>
  
              <div class="py-4 border-b">
                <label for="card">
                  <input type="radio" name="card" id="card" checked> Check Out With a Debit Card Here
                </label>
              </div>
              <div class="py-4 w-80">
                <img src="/storage/img/payment_logos.png" alt="">
              </div>
  
              <div class="flex justify-center">
                <a class="mt-4 mb-8 w-full text-center rounded-md bg-green-600 px-6 py-3 font-medium text-white" :href="'https://checkout.paystack.com/'+url">
                  Pay {{ totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  
    <!-- Footer Section Begins -->
    <Footer />
    <!-- Footer Section Ends -->
  </template>
  
  <script>
  import ApplicationLogo from "@/Components/ApplicationLogo.vue";
  import PrimaryButton from "@/Components/PrimaryButton.vue";
  import { Head, Link, router, useForm } from "@inertiajs/vue3";
  import Header from "@/Components/Header.vue";
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
    },
    props: ['navcategories', 'CartCount', 'url', 'totalAmount'],
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
  