<template>
<!-- Delivery Question -->
<site-modal v-if="readyOrder" :maxWidth="'sm:max-w-md'">
    <div class="p-10">
        <div>
            14 days is the default Delivery time for this product Want an
            earlier Delivery time?
        </div>
        <div class="flex items-center mt-4 space-x-4">
            <primary-button class="px-16 py-4 text-white bg-primary rounded-md">Yes</primary-button>
            <primary-button class="px-16 py-4 border rounded-md">No</primary-button>
        </div>
    </div>
</site-modal>

<!-- Delivery Time -->
<site-modal v-if="proceedWithOrder" :maxWidth="'sm:max-w-2xl'" class="">
    <div class="p-6 sm:p-10 relative">
        <div class="p-2 sm:p-4">
            <span @click="setDeliveryDate()" class="cursor-pointer absolute top-4 right-4 sm:right-10">
                <i class="fa-sharp text-lg sm:text-xl fa-light fa-xmark"></i>
            </span>
        </div>
        <div class="p-2 sm:p-4 bg-green-100 rounded-sm">
            <span class="font-bold">14 days is the default Delivery time</span>
            for this product Want an earlier Delivery time?
        </div>
        <div class="flex flex-col sm:flex-row items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-4 py-4 sm:py-10">
            <label class="cursor-pointer w-full sm:w-4/12 flex flex-col border">
                <div class="border-b text-center p-2 sm:p-4 font-bold flex space-x-2 items-center">
                    <input name="delivery" v-model="form.delivery" value="Standard" type="radio" class="mr-2" />
                    <span>Standard</span>
                </div>
                <div class="p-2 sm:p-4">14 working Days Delivery</div>
            </label>
            <label class="cursor-pointer w-full sm:w-4/12 flex flex-col border">
                <div class="border-b text-center p-2 sm:p-4 font-bold flex space-x-2 items-center">
                    <input name="delivery" v-model="form.delivery" type="radio" class="mr-2" value="Express" /><span>Express</span>
                </div>
                <div class="p-2 sm:p-4">6-7 working Days Delivery</div>
            </label>
            <label class="cursor-pointer w-full sm:w-4/12 flex flex-col border">
                <div class="border-b text-center p-2 sm:p-4 font-bold flex space-x-2 items-center">
                    <input name="delivery" v-model="form.delivery" type="radio" class="mr-2" value="Next Day" /><span>Next Day</span>
                </div>
                <div class="p-2 sm:p-4">1 - 2 working Day(s) Delivery</div>
            </label>
        </div>
        <div class="flex justify-center sm:justify-end">
            <primary-button @click="placeOrder()" class="px-10 py-3 sm:px-16 sm:py-4 bg-green-600 rounded-md text-white">Continue</primary-button>
        </div>
    </div>
</site-modal>

<!-- Bottom Total Cost -->
<div class="fixed bottom-0 left-0 w-full h-[100px] flex justify-center items-center backdrop-blur-sm bg-primary2/80 z-50">
    <div class="container mx-auto px-4 md:px-24">
        <div class="flex flex-col md:flex-row h-full items-center justify-between">
            <div class="hidden md:flex w-full md:w-8/12 space-x-2 items-center">
                <div class="w-16 flex-shrink-0">
                    <img class="object-cover h-full" :src="'/storage/'+mainImg" alt="Business Card" />
                </div>
                <div class="hidden md:block">
                    <div class="font-bold"> {{ product.name }}</div>
                    <span v-for="selectedName in getSelectedOptionNames" :key="selectedName">
                        <span v-if="selectedName != 'None'">{{ selectedName }}|</span>
                    </span>
                </div>
            </div>
            <div class="hidden md:flex w-3/6 flex-col items-center">
                <span>Quantity</span>
                <span class="text-lg font-bold">{{ form.quantity }}</span>
            </div>
            <div class="w-full md:w-3/6 flex items-center justify-center md:justify-end space-x-2">
                <span class="text-4xl font-bold">₦{{ calculateCost }}</span>
                <primary-button @click="setDeliveryDate()" class="p-2 md:p-4 px-4 md:px-8 rounded-sm bg-primary font-bold text-white">Order Now</primary-button>
            </div>
        </div>
    </div>
</div>

<!--   Navbar -->
<Header :navcategories="navcategories" :CartCount="CartCount" />
<!-- End Navbar -->

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

        <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-2 lg:gap-16">
            <div class="flex justify-center items-center flex-col bg-gray-100  rounded-md">
                <div class=" md:w-[400px] overflow-hidden">
                    <img :src="'/storage/'+mainImg" alt="" class="main-image">
                </div>

                <!-- Thumbnails Container -->
                <div class="mt-2 w-full">
                    <div class="flex flex-row justify-center">
                        <button @click="changeImg(product.product_img1)" type="button" :class="mainImg == product.product_img1 ? 'border-2 border-primary':'border'" class="flex-0 hover:scale-105 transition-all ease-in-out aspect-square mb-3 w-20 overflow-hidden rounded-lg text-center mr-4">
                            <img class="thumbnail" :src="'/storage/'+product.product_img1" alt="" />
                        </button>
                        <button :class="mainImg == product.product_img2 ? 'border-2 border-primary':'border border-1'" @click="changeImg(product.product_img2)" type="button" class="flex-0 hover:scale-105 transition-all ease-in-out aspect-square mb-3 w-20 overflow-hidden rounded-lg text-center mr-4">
                            <img class="thumbnail" :src="'/storage/'+product.product_img2" alt="" />
                        </button>
                        <button :class="mainImg == product.product_img3 ? 'border-2 border-primary':'border border-1'" @click="changeImg(product.product_img3)" type="button" class="flex-0 hover:scale-105 transition-all ease-in-out aspect-square mb-3 w-20 overflow-hidden rounded-lg text-center mr-4">
                            <img class="thumbnail" :src="'/storage/'+product.product_img3" alt="" />
                        </button>
                    </div>
                </div>
            </div>

            <div class="">
                <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                    {{ product.name }}
                </h1>
                <div class="mt-5 flex items-center">
                    <span>{{product.description}}</span>
                </div>

                <div v-if="product.quantityType == 'type-1'" class="border-t  mt-2 py-4">

                    <h2 class=" text-base text-gray-900">Quantity</h2>
                    <div class="mt-3 flex select-none items-center gap-1">
                        <select v-model="form.quantity">
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

                </div>
                <div v-if="product.quantityType == 'type-2'" class="border-t  mt-2 py-4">

                    <h2 class=" text-base text-gray-900">Quantity</h2>
                    <div class="mt-3 flex select-none items-center gap-1">
                        <select v-model="form.quantity">
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="500">500</option>
                            <option value="2000">2000</option>

                        </select>

                    </div>

                </div>

                <div v-if="product.quantityType == 'type-3'" class="border-t  mt-2 py-4">

                    <h2 class=" text-base text-gray-900">Quantity</h2>
                    <div class="mt-3 flex select-none items-center gap-1">
                        <select v-model="form.quantity">
                            <option value="12">12</option>
                            <option value="24">24</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="500">500</option>
                            <option value="1000">1000</option>
                            <option value="2000">2000</option>

                        </select>

                    </div>

                </div>

                <div v-if="product.quantityType == 'type-4'" class="border-t  mt-2 py-4">

                    <h2 class=" text-base text-gray-900">Quantity</h2>
                    <div class="mt-3 flex select-none items-center gap-1">
                        <select v-model="form.quantity">
                            <option value="10">50</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="500">500</option>
                            <option value="1000">1000</option>
                            <option value="2000">2000</option>

                        </select>

                    </div>

                </div>

                <div v-if="product.quantityType == 'type-5'" class="border-t  mt-2 py-4">

                    <h2 class=" text-base text-gray-900">Quantity</h2>
                    <div class="mt-3 flex select-none items-center gap-1">
                        <select v-model="form.quantity">
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400">400</option>
                            <option value="500">500</option>
                        </select>

                    </div>

                </div>

                <!-- RELATED ATTRIBUTE -->
                <div class="" v-for="attribute in product.attributes" :key="attribute.id">
                    <div v-if="attribute.type == 'quantity'" class="border-t  mt-2 py-4">

                        <h2 class=" text-base text-gray-900">{{ attribute.name }}</h2>

                        <div class="mt-3 flex select-none items-center gap-1">
                            <select v-model="form.selectedOptions[attribute.id]">
                                <option value="" selected disabled>Select Option</option>
                                <option v-for="option in attribute.options" :key="option.id" :value="option.id">{{ option.value }}</option>
                            </select>

                        </div>

                    </div>
                    <div v-if="attribute.type == 'select'" class="border-t  mt-2 py-4">

                        <h2 class=" text-base text-gray-900">{{ attribute.name }}</h2>

                        <div class="mt-3 flex select-none items-center gap-1">
                            <select v-model="form.selectedOptions[attribute.id]">
                                <option value="" selected disabled>Select Option</option>
                                <option v-for="option in attribute.options" :key="option.id" :value="option.id">{{ option.value }}</option>
                            </select>

                        </div>

                    </div>

                    <div v-if="attribute.type == 'radio_single'" class="border-t mt-2  py-4">

                        <h2 class=" text-base text-gray-900">{{ attribute.name }}</h2>
                        <div class="mt-3 flex select-none flex-wrap items-center gap-1">
                            <label v-for="(option, index)  in attribute.options" :key="option.id">

                                <input type="radio" :checked="index === 0" v-model="form.selectedOptions[attribute.id]" :value="option.id" class="peer sr-only" />
                                <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                                    {{ option.value }}
                                </p>
                            </label>

                        </div>
                    </div>

                    <fieldset v-if="attribute.type == 'radio'" class="mt-2 py-2">
                        <legend class="mb-1 text-sm font-medium">{{ attribute.name }}</legend>

                        <div class="flex flex-wrap gap-1">
                            <label v-for="(option, index) in attribute.options" :key="index" :for="'option_' + attribute.id + '_' + index" class="cursor-pointer">
                                <input type="radio" :id="'option_' + attribute.id + '_' + index" v-model="form.selectedOptions[attribute.id]" :value="option.id" class="peer sr-only" />

                                <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">{{ option.value }}</span>
                            </label>
                        </div>
                    </fieldset>

                    <div v-if="attribute.type == 'text'" class="border-t mt-2 py-4">

                        <h2 class=" text-base text-gray-900">{{ attribute.name }}</h2>
                        <div class="mt-3 flex select-none flex-wrap items-center gap-1">
                            <label>
                                <input type="text" v-model="form.selectedOptions[attribute.id]" />

                            </label>

                        </div>
                    </div>

                    <div v-if="attribute.type == 'checkbox'" class="border-t mt-2 py-4">

                        <h2 class=" text-base text-gray-900">{{ attribute.name }}</h2>
                        <div class="mt-3 flex select-none flex-wrap items-center gap-1">
                            <label v-for="option in attribute.options" :key="option.id">
                                <input type="checkbox" v-model="form.selectedOptions[attribute.id]" :value="option.id" class="peer sr-only" />
                                <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                                    {{ option.value }}
                                </p>
                            </label>

                        </div>
                    </div>

                </div>

                <!-- Total Amount -->
                <div class="mt-10 flex flex-col  space-y-4 border-t border-b py-4 ">
                    <div class="flex items-center ">
                        <span class="text-base">Total:</span>
                        <h1 class="text-3xl font-bold ml-2">₦{{ calculateCost }}</h1>
                    </div>
                    <button @click="setDeliveryDate()" type="button" class="inline-flex w-full items-center justify-center rounded-md border-2 border-transparent bg-primary px-8 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Order Now
                    </button>
                </div>

            </div>

            <div class="lg:col-span-3">
                <div class="border-b border-gray-300">
                    <nav class="flex gap-4">
                        <a href="#" title="" class="border-b-2 text-xl font-bold border-gray-900 py-4 text-gray-900 hover:border-gray-400 hover:text-gray-800">
                            You can count on us for
                        </a>
                    </nav>
                </div>
                <div class="mt-8 flow-root sm:mt-12">
                    <div class="flex items-center space-x-2">
                        <i class="fa-thin fa-globe text-4xl text-tertiary mr-2"></i>
                        <div>
                            <h1 class="text-xl font-bold">
                                Fast Turnaround Within Days
                            </h1>
                            <p class="mt-2">
                                Your order gets to you within 3-7 working
                                days via DHL or our very own Printivo
                                Direct.
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 mt-8">
                        <i class="fa-sharp fa-solid fa-badge-check text-4xl text-tertiary mr-2"></i>
                        <div>
                            <h1 class="text-xl font-bold">
                                100% Top Quality
                            </h1>
                            <p class="mt-2">
                                Only the finest materials, machines and
                                people will be involved in fulfilling your
                                order.
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 mt-8">
                        <i class="fa-duotone fa-wallet text-4xl text-tertiary mr-2"></i>

                        <div>
                            <h1 class="text-xl font-bold">
                                Affordable Services
                            </h1>
                            <p class="mt-2">
                                All products are adequately priced to ensure
                                you get value for your money at all times.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    useForm,
    router
} from "@inertiajs/vue3";

import Header from "@/Components/Header.vue";
import Search from "@/Components/Search.vue"
import Footer from "@/Components/Footer.vue";
import SiteModal from "@/Components/SiteModal.vue";
export default {
    props: {
        breadcrumbs: {
            type: Array,
            required: true
        },
        product: {
            type: Object,
            required: true
        },
        navcategories: {
            type: Object,
        },
        CartCount: {
            type: Object,
        }
    },
    components: {
        ApplicationLogo,
        PrimaryButton,
        Link,
        Header,
        Footer,
        SiteModal,
        Search
    },

    data() {
        return {
            mainImg: null,
            form: {
                quantity: this.product.unit,
                delivery: null,
                product_id: this.product.id,
                selectedOptions: {},
            },
            selectedOptionsNames: {},
            productInput: {},
            sm: "sm:max-w-sm",
            md: "sm:max-w-md",
            lg: "sm:max-w-lg",
            xl: "sm:max-w-xl",
            "2xl": "sm:max-w-2xl",
            categories: false,
            subCategories: false,
            readyOrder: false,
            proceedWithOrder: false,
            total: null
        };
    },
    computed: {
        calculateCost() {
            let totalOptionsCost = 0;
            let deliveryCost = 0;

            // Calculate total cost of selected options
            for (let attributeId in this.form.selectedOptions) {

                let selectedOptionId = this.form.selectedOptions[attributeId];

                // Find the selected option in product attributes
                let attribute = this.product.attributes.find(attr => attr.id == attributeId);

                if (attribute && attribute.options) {
                    let selectedOption = attribute.options.find(opt => opt.id == selectedOptionId);
                    if (selectedOption && selectedOption.cost) {

                        totalOptionsCost += parseFloat(selectedOption.cost);
                    }
                }
            }
            if (this.form.delivery == 'Standard') {
                deliveryCost = 1500
            }
            if (this.form.delivery == 'Express') {
                deliveryCost = 5000
            }
            if (this.form.delivery == 'Next Day') {
                deliveryCost = 15000
            }

            // Calculate total cost including base price, quantity, and options
            this.total = ((parseFloat(this.product.price) + parseFloat(totalOptionsCost)) * parseFloat(this.form.quantity)) + parseFloat(deliveryCost);

            return this.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },

        getSelectedOptionNames() {
            let selectedNames = [];

            // Calculate total cost of selected options
            for (let attributeId in this.form.selectedOptions) {

                let selectedOptionId = this.form.selectedOptions[attributeId];

                // Find the selected option in product attributes
                let attribute = this.product.attributes.find(attr => attr.id == attributeId);

                if (attribute && attribute.options) {

                    let selectedOption = attribute.options.find(opt => opt.id == selectedOptionId);

                    if (selectedOption && selectedOption.cost) {
                        selectedNames.push(selectedOption.value);
                    }
                }
            }

            return selectedNames;
        }

    },
    mounted() {
        this.form.delivery = 'Standard'
        this.mainImg = this.product.product_img1
        // Assuming attribute.options is an array and the first option is available

        this.product.attributes.forEach(attribute => {

            // Assuming attribute.options is an array and the first option is available
            if (attribute.options && attribute.options.length > 0) {
                this.form.selectedOptions[attribute.id] = attribute.options[0].id;
            }
        });

    },

    methods: {
        placeOrder() {

            router.post(route('cart.store', this.form))
        },

        changeImg(image) {
            this.mainImg = image
        },

        setDeliveryDate() {
            this.proceedWithOrder = !this.proceedWithOrder
        }
    }
};
</script>

<style lang="scss" scoped></style>
