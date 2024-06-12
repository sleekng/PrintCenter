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
                    <h1 class="text-xl sm:text-2xl font-semibold text-gray-900">Add Product</h1>
                </div>
                <div class="block sm:flex items-center md:divide-x md:divide-gray-100">

                    <div class="flex items-center sm:justify-end w-full">

                        <Link :href="route('attributes.create')" type="button" data-modal-toggle="add-product-modal" class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2 text-center sm:ml-auto">
                        <svg class="-ml-1 mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
                        </svg>
                        Create Attribute
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
                                <div class="mb-4">
                                    <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
                                    <input type="text" v-model="form.name" id="name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                                <div class="mb-4">
                                    <label for="quantityType" class="block text-sm font-medium text-gray-700">Quantity Type</label>
                                    <select v-model="form.quantityType" name="quantityType" id="quantityType">
                                        <option value="type-1">Type 1 starts at (100)</option>
                                        <option value="type-2">Type 2 starts (1)</option>
                                        <option value="type-3">Type 3 starts (10)</option>
                                    </select>
                                </div>
                                <!-- Add input fields for other product attributes -->
                                <div class="mb-4">
                                    <label for="description" class="block text-sm font-medium text-gray-700">Description:</label>
                                    <textarea v-model="form.description" id="description" rows="3" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                                </div>
                                <div class="mb-4">
                                    <label for="price" class="block text-sm font-medium text-gray-700">Price Per unit:</label>
                                    <input type="text" v-model="form.price" id="price" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                                <div class="mb-4">
                                    <label for="unit" class="block text-sm font-medium text-gray-700">Minimum Unit(s):</label>
                                    <input type="text" v-model="form.unit" id="unit" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <label for="" class="my-4 mt-10  block">Product Image</label>
                                <!-- File upload for images -->
                                <div class="mb-4">
                                    <input type="file" @input="form.files[0] = $event.target.files[0]" />
                                    <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                                        {{ form.progress.percentage }}%
                                    </progress>
                                </div>
                                <!-- File upload for images -->
                                <div class="mb-4">
                                    <input type="file" @input="form.files[1] = $event.target.files[0]" />
                                    <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                                        {{ form.progress.percentage }}%
                                    </progress>
                                </div>
                                <!-- File upload for images -->
                                <div class="mb-4">
                                    <input type="file" @input="form.files[2] = $event.target.files[0]" />
                                    <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                                        {{ form.progress.percentage }}%
                                    </progress>
                                </div>

                                <!-- Add input fields for product attributes -->

                                <div class=" mt-4">
                                    <label :class="attributes.length > 0 ? ' text-black': ' text-red-600'"> Select Attributes:</label>

                                    <div v-for="attribute in attributes" :key="attribute.id">

                                        <input type="checkbox" v-model="form.attributes" :value="attribute.id" :id="'attribute_' + attribute.id">
                                        <label :for="'attribute_' + attribute.id">{{ attribute.name }}({{ attribute.for_product }})</label>
                                    </div>
                                </div>
                                <div class=" mt-4">
                                    <label>Select Categories:</label>
                                    <div v-for="category in categories" :key="category.id">
                                        <input type="checkbox" v-model="form.categories" :value="category.id" :id="'category_' + category.id">
                                        <label :for="'category_' + category.id">{{ category.name }}</label>
                                    </div>
                                </div>

                                <div class="my-4">
                                    <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300 disabled:opacity-25 transition ease-in-out duration-150">
                                        Add Product
                                    </button>
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
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {
    useForm,
    Link
} from '@inertiajs/vue3'
export default {
    props: {
        attributes: {
            type: Array,
            required: true,
        },
        categories: {
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
            form: useForm({
                name: '',
                description: '',
                price: '',
                quantityType: '',
                unit: '',
                files: [null, null, null], // Array to store uploaded images
                attributes: [], // Object to store selected attribute options
                categories: [], // Object to store selected Categories options
            }),

        };
    },

    methods: {

        async submitForm() {
            try {

                await this.form.post('/products-store');

            } catch (error) {
                console.error('Error adding product:', error);
            }
        }
    }
};
</script>
