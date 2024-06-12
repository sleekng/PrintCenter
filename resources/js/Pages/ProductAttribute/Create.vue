
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
                                        <span class="text-gray-400 ml-1 md:ml-2 text-sm font-medium" aria-current="page">Products</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <h1 class="text-xl sm:text-2xl font-semibold text-gray-900">Add Product Attribute</h1>
                    </div>
                    <div class="block sm:flex items-center md:divide-x md:divide-gray-100">

                        <div class="flex items-center sm:justify-end w-full">

                            <Link :href="route('options.create')" type="button" data-modal-toggle="add-product-modal" class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2 text-center sm:ml-auto">
                            <svg class="-ml-1 mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
                            </svg>
                            Create Attribute Option
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto">
                    <div class="align-middle inline-block min-w-full">
                        <div class="shadow overflow-hidden">

                            <!-- Place your body here -->
                            <div class=" w-4/12 mx-auto my-10">
                                <div v-if="$page.props.errors">
                                    <div v-for="error in $page.props.errors" :key="error" class=" text-red-600">
                                        {{ error }}
                                    </div>
                                </div>
                                <div v-if="$page.props.flash.success" class=" text-green-500">
                                    {{ $page.props.flash.success }}
                                </div>
              

                                <form @submit.prevent="submitForm">
                                    <div class="mt-4 flex flex-col">
                                        <label for="name">Name:</label>
                                        <input type="text" v-model="form.name" id="name" @keydown="updateSlug">
                                    </div>
                                    <div class="mt-4 flex flex-col">
                                        <label for="name">slug</label>
                                        <input type="text" v-model="form.slug" placeholder="Slug"  id="slug">
                                    </div>
                                    <div class="mt-4 flex flex-col">
                                        <label for="for_product">For <span class=" text-green-600 ">Please enter which product this attribute is for</span></label>
                                        <input type="text" v-model="form.for_product" id="for_product">
                                    </div>
                                    <div class="mt-4 flex flex-col">
                                        <label for="name">Type:</label>
                                        <select v-model="form.type" @change="updateSec" name="type" id="">
                                            <option value="text">Text</option>
                                            <option value="radio">Radio</option>
                                            <option value="radio_single">Radio Single</option>
                                            <option value="textarea">textarea</option>
                                            <option value="select">Select</option>
                                            <option value="number">number</option>
                                        </select>
                                    </div>

                                    <div v-if="form.type =='radio' || form.type == 'select' || form.type == 'radio_single'" class="mt-10 border-b">
                                        <label for="option" :class=" attributeOption == null ? '' : 'text-red-600'">Select attribute options:</label>
                                    </div>
                                    <!-- Checkboxes for selecting product attribute options -->
                                    <div v-if="form.type =='radio' || form.type == 'select' || form.type == 'radio_single'" class="mt-4">

                                        <div class=" my-4">
                                            <label> Select from the list of options or Add new</label>
                                            <div v-for="option in attributeOption" :key="option.id">
                                                <input type="checkbox" v-model="form.options" :value="option.id" :id="'option_' + option.id">
                                                <label :for="'option_' + option.id">{{ option.value }}</label>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="mt-8 flex justify-end">
                                        <button class="p-2 px-4 bg-green-600 text-white rounded-sm" type="submit">Add Attribute</button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    </AuthenticatedLayout>
</template>

<script>
import axios from 'axios';
import {
    useForm,
    Link
} from '@inertiajs/vue3'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
export default {
    props: {
        options: {
            type: Array,
            required: true,
        },
    },
    components: {
        Link,
        AuthenticatedLayout
    },
    data() {
        return {
            attributeOption: null,
            form: useForm({
                name: '',
                options: [], // Array to store selected option IDs
                type: '',
                slug: '',
                for_product: ''
            }),
            value: null,
            cost: null,
            errorMessage: ''
        };
    },
    mounted() {
        this.attributeOption = this.options;
    },

    computed: {
        slug() {
            this.form.slug = this.createSlug(this.form.name);
            return this.createSlug(this.form.name);
        }
    },
    methods: {

        createSlug(str) {
            return str.toLowerCase()
                .replace(/\s+/g, '-') // Replace spaces with -
                .replace(/[^\w\-]+/g, '') // Remove all non-word chars
                .replace(/\-\-+/g, '-') // Replace multiple - with single -
                .replace(/^-+/, '') // Trim - from start of text
                .replace(/-+$/, ''); // Trim - from end of text
        },

        updateSec() {
            if (this.form.type == 'radio' || this.form.type == 'select' || this.form.type == 'radio_single') {
                this.attributeOption = this.options;
                this.form.options = [];

            } else {
                this.attributeOption = null;

            }
        },

        async submitForm() {
            try {

                this.form.post('/product-attributes', {
                    preserveScroll: true,

                })

            } catch (error) {
                console.error('Error adding product:', error);
            }
        },

        addOption() {

            axios.post('/api/product-attribute-options/store-api', {
                value: this.value,
                cost: this.cost,
            }).then((response) => {
                if (response.data.success === true) {
                    // Handle successful response
                    this.loadData();
                    // Redirect or update state as needed
                }

                if (response.data.error === true) {
                    this.errorMessage = 'Please enter an option';
                }
            }).catch((error) => {
                console.error('Error fetching data:', error);
            });

        },
        loadData() {

            axios.get('/api/product-attribute-options/load-option').then((response) => {

                this.attributeOption = response.data.data;
                this.option = null

            });
        },
    },

};
</script>
