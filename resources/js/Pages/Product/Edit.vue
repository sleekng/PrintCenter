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
            </div>
        </div>
        <div class="flex flex-col w-full">
            <div class="overflow-x-auto">
                <div class="align-middle inline-block min-w-full">
                    <div class="shadow overflow-hidden">
                        <!-- Product Form -->
                        <div class="md:w-4/12 px-4 mx-auto my-10">
                            <div v-if="$page.props.errors">
                                <div v-for="error in $page.props.errors" :key="error" class="text-red-600">{{ error }}</div>
                            </div>
                            <div v-if="$page.props.flash.success" class="text-green-500">{{ $page.props.flash.success }}</div>
                            <form @submit.prevent="submitForm">
                                <!-- Product Fields -->
                                <div class="mt-4 flex flex-col">
                                    <label for="name">Product Name:</label>
                                    <input type="text" v-model="form.name" id="name" @input="updateSlug">
                                </div>
                                <div class="mt-4 flex flex-col">
                                    <label for="quantityType" class="block  text-gray-700">Quantity Type</label>
                                    <select v-model="form.quantityType" name="quantityType" id="quantityType">
                                        <option value="type-1">Type 1 starts (1)</option>
                                        <option value="type-2">Type 2 starts (10)</option>
                                        <option value="type-3">Type 3 starts (12)</option>
                                        <option value="type-4">Type 4 starts (50)</option>
                                        <option value="type-5">Type 5 starts at (100)</option>
                                    </select>
                                </div>
                                <div class="mt-4 flex flex-col">
                                    <label for="slug">Product Slug:</label>
                                    <input type="text" v-model="form.slug" id="slug">
                                </div>
                                <div class="mt-4 flex  space-x-8">
                                    <span>Add to Featured Product</span>
                                    <label>
                                        <input name="featured1" type="radio" value="No" v-model="form.featured" id="featured"> No
                                    </label>
                                    <label>
                                        <input name="featured2" type="radio" value="Yes" v-model="form.featured" id="featured"> Yes
                                    </label>
                                </div>
                                <div class="mt-4 flex flex-col">
                                    <label for="description">Description:</label>
                                    <textarea v-model="form.description" id="description"></textarea>
                                </div>

                                <div class="mt-4">
                                    <label for="price" class="block">Price Per unit:</label>
                                    <input type="text" v-model="form.price" id="price" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md">
                                </div>
                                <div class="mt-4">
                                    <label for="unit" class="block">Minimum Unit(s):</label>
                                    <input type="text" v-model="form.unit" id="unit" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md">
                                </div>

                                <!--        Images -->
                                <div class="my-4 mt-10  block">
                                    <label class="block text-sm font-medium text-gray-700 mb-4">Product Image:</label>
                                    <div class="flex  flex-col ">
                                        <div class="mb-4">
                                            <img :src="'/storage/'+product.product_img1" alt="Product Image" class="w-32 h-32 object-cover rounded-md">

                                            <div class="flex space-x-4 items-center">
                                                <input type="file"  @input="uploadImage($event , 0)" />
                                               
                                            </div>
                                            <progress v-if="image1.progress" :value="image1.progress.percentage" max="100">
                                              {{ image1.progress.percentage }}% 
                                            </progress>
                                            <span v-if="image1.progress">uploading Wait...</span>
                                        </div>
                                        <div class="mb-4">
                                            <img :src="'/storage/'+product.product_img2" alt="Product Image" class="w-32 h-32 object-cover rounded-md">

                                            <div class="flex space-x-4 items-center">
                                                <input type="file" @input="uploadImage($event , 1)" />
                                               
                                            </div>
                                            <progress v-if="image2.progress" :value="image2.progress.percentage" max="100">
                                                 {{ image2.progress.percentage }}%
                                            </progress>
                                            <span v-if="image2.progress">uploading Wait...</span>
                                        </div>
                                        <div class="mb-4">
                                            <img :src="'/storage/'+product.product_img3" alt="Product Image" class="w-32 h-32 object-cover rounded-md">

                                            <div class="flex space-x-4 items-center">
                                                <input type="file" @input="uploadImage($event , 2)" />
                                            </div>
                                            <progress v-if="image3.progress" :value="image3.progress.percentage" max="100">
                                                 {{ image3.progress.percentage }}%
                                            </progress>
                                            <span v-if="image3.progress">uploading Wait...</span>
                                        </div>
                                    </div>
                                </div>

                                <div class=" mt-4">
                                    <label>Select Categories:</label>
                                    <div v-for="category in categories" :key="category.id">
                                        <input type="checkbox" v-model="form.categories" :value="category.id" :id="'category_' + category.id">
                                        <label :for="'category_' + category.id">{{ category.name }}</label>
                                    </div>
                                </div>

                                <!-- Add Attribute Button -->
                                <div class="mt-6 flex justify-between items-center border-t py-4">
                                    <h2 class="text-lg font-semibold">Attributes</h2>
                                    <button @click="addAttribute" type="button" class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2">
                                        <svg class="-ml-1 mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
                                        </svg>
                                        Add Attribute
                                    </button>
                                </div>
                                <!-- Attributes and Options -->
                                <div v-for="(attribute, index) in form.attributes" :key="index" class="mt-6 border p-4 rounded-lg">
                                    <div class="flex justify-between items-center">
                                        <h2 class="text-lg font-semibold">Attribute {{ index + 1 }}</h2>
                                        <button @click="removeAttribute(index)" type="button" class="text-red-600 hover:text-red-800 font-medium text-sm">
                                            Remove Attribute
                                        </button>
                                    </div>
                                    <div class="mt-4 flex flex-col">
                                        <label for="attribute-name">Name:</label>
                                        <input type="text" v-model="attribute.name" :id="'attribute-name-' + index">
                                    </div>
                                    <div class="mt-4 flex flex-col">
                                        <label for="attribute-type">Type:</label>
                                        <select v-model="attribute.type" @change="updateOptions(index)" :id="'attribute-type-' + index">
                                            <option value="text">Text</option>
                                            <option value="radio">Radio</option>
                                            <option value="radio_single">Radio Single</option>
                                            <option value="textarea">Textarea</option>
                                            <option value="select">Select</option>
                                            <option value="number">Number</option>
                                        </select>
                                    </div>
                                    <!-- Options for 'radio', 'radio_single', and 'select' types -->
                                    <div v-if="['radio', 'radio_single', 'select'].includes(attribute.type)" class="mt-6">
                                        <button @click="addOption(index)" type="button" class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2">
                                            <svg class="-ml-1 mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
                                            </svg>
                                            Add Option
                                        </button>
                                        <div v-for="(option, optIndex) in attribute.options" :key="optIndex" class="mt-4 flex flex-col">
                                            <div class="flex justify-between items-center">
                                                <label :for="'option-value-' + index + '-' + optIndex">Option Value:</label>
                                                <button @click="removeOption(index, optIndex)" type="button" class="text-red-600 hover:text-red-800 font-medium text-sm">
                                                    Remove Option
                                                </button>
                                            </div>
                                            <input type="text" v-model="option.value" :id="'option-value-' + index + '-' + optIndex">
                                            <label :for="'option-cost-' + index + '-' + optIndex">Option Cost:</label>
                                            <input type="text" v-model="option.cost" :id="'option-cost-' + index + '-' + optIndex">
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-8 flex justify-end">
                                    <button :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="p-2 px-4 bg-green-600 text-white rounded-sm" type="submit">Update Product</button>
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
import {
    useForm,
    Link
} from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

export default {
    props: {
        product: {
            type: Object,
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

    mounted() {
        // Populate form with existing product data on mount
        this.form.name =this.image1.name = this.image2.name = this.image3.name = this.product.name;
        this.image1.product_id = this.image2.product_id = this.image3.product_id = this.product.id;
        this.form.slug = this.product.slug;
        this.form.featured = this.product.featured;
        this.form.description = this.product.description;
        this.form.price = this.product.price;
        this.form.quantityType = this.product.quantityType;
        this.form.unit = this.product.unit;
        // Populate categories based on existing product's categories
        this.form.categories = this.product.categories.map(category => category.id);

        // Assuming attributes are also populated similarly
        this.form.attributes = this.product.attributes.map(attr => ({
            name: attr.name,
            slug: attr.slug,
            type: attr.type,
            options: attr.options.map(opt => ({
                value: opt.value,
                cost: opt.cost
            }))
        }));

        // File handling logic if updating existing files
        // Initialize form.files based on existing file URLs or IDs
    },

    data() {
        return {
            form: useForm({
                product_id: '',
                name: '',
                imageIndex: '',
                slug: '',
                description: '',
                featured: 'No',
                price: '',
                quantityType: '',
                unit: '',
                files: [],
                attributes: [],
                categories: [],
            }),
            image1: useForm({
                name: '',
                product_id: '',
                imageIndex: '',
                file: null
            }),
            image2: useForm({
                name: '',
                product_id: '',
                imageIndex: '',
                file: null
            }),
            image3: useForm({
                name: '',
                product_id: '',
                imageIndex: '',
                file: null
            })
        };
    },

    methods: {

        uploadImage(event,index) {

            
            if (index == 0) {
                this.image1.imageIndex = index;
                this.image1.file = event.target.files[0]
                
                this.image1.post(route('products.image-upload'))
            }
            if (index == 1) {
                this.image2.imageIndex = index;
                this.image2.file = event.target.files[0]
                this.image2.post(route('products.image-upload'))
            }
            if (index == 2) {
                this.image3.imageIndex = index;
                this.image3.file = event.target.files[0]
                this.image3.post(route('products.image-upload'))
            }
        },

        updateSlug() {
            // Function to update slug based on product name
            this.form.slug = this.createSlug(this.form.name);
        },
        createSlug(str) {
            // Function to create slug from string
            return str.toLowerCase()
                .replace(/\s+/g, '-') // Replace spaces with -
                .replace(/[^\w\-]+/g, '') // Remove all non-word chars
                .replace(/\-\-+/g, '-') // Replace multiple - with single -
                .replace(/^-+/, '') // Trim - from start of text
                .replace(/-+$/, ''); // Trim - from end of text
        },

        async submitForm() {
            await this.form.put(route('product-update-product', this.product.id));
        },
        addAttribute() {
            this.form.attributes.push({
                name: '',
                type: 'text',
                options: []
            });
        },
        removeAttribute(index) {
            this.form.attributes.splice(index, 1);
        },
        updateOptions(index) {
            // Reset options when changing attribute type
            this.form.attributes[index].options = [];
        },
        addOption(attrIndex) {
            this.form.attributes[attrIndex].options.push({
                value: '',
                cost: 0
            });
        },
        removeOption(attrIndex, optIndex) {
            this.form.attributes[attrIndex].options.splice(optIndex, 1);
        },

        updateNewImage(index, file) {
            this.form.files.splice(index, 1, file);
        },

        deleteExistingImage(index) {
            // You can implement logic to delete the image from storage and update the form data
            this.form.existingImages.splice(index, 1);
        },
    },
};
</script>
