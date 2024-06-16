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

                            <div class="w-4/12 mx-auto my-10">

                                <div v-if="$page.props.errors">
                                    <div v-for="error in $page.props.errors" :key="error" class="text-red-600">
                                        {{ error }}
                                    </div>
                                </div>
                                <div v-if="$page.props.flash.success" class="text-green-500">
                                    {{ $page.props.flash.success }}
                                </div>
                                <form @submit.prevent="submitForm">
                                    <!-- Product Details -->
                                    <div class="mt-4 flex flex-col">
                                        <label>Name:</label>
                                        <input type="text" v-model="form.name" required>
                                    </div>

                                    <div class="mt-4 flex flex-col">

                                        <label>Quantity Type</label>
                                        <select v-model="form.quantityType" name="quantityType" id="quantityType">
                                            <option value="type-1">Type 1 starts at (100)</option>
                                            <option value="type-2">Type 2 starts (1)</option>
                                        </select>
                                    </div>

                                    <div class="mt-4 flex flex-col">
                                        <label>Description:</label>
                                        <textarea v-model="form.description"></textarea>
                                    </div>
                                    <div class="mt-4 flex flex-col">

                                        <label>Price:</label>
                                        <input type="number" v-model="form.price" required>
                                    </div>

                                    <div class="my-4 mt-10  block">
                                        <label class="block text-sm font-medium text-gray-700 mb-4">Product Image:</label>
                                        <div class="flex  flex-col ">
                                            <div class="mb-4">
                                                <img :src="'/storage/'+product.product_img1" alt="Product Image" class="w-32 h-32 object-cover rounded-md">

                                                <input type="file" @input="form.files[0] = $event.target.files[0]" />
                                                <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                                                    {{ form.progress.percentage }}%
                                                </progress>
                                            </div>
                                            <div class="mb-4">
                                                <img :src="'/storage/'+product.product_img2" alt="Product Image" class="w-32 h-32 object-cover rounded-md">

                                                <input type="file" @input="form.files[1] = $event.target.files[0]" />
                                                <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                                                    {{ form.progress.percentage }}%
                                                </progress>
                                            </div>
                                            <div class="mb-4">
                                                <img :src="'/storage/'+product.product_img3" alt="Product Image" class="w-32 h-32 object-cover rounded-md">

                                                <input type="file" @input="form.files[2] = $event.target.files[0]" />
                                                <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                                                    {{ form.progress.percentage }}%
                                                </progress>
                                            </div>
                                        </div>
                                    </div>

                                    <!--             <div class="mb-4">
                    <input type="file" @input="form.files[0] = $event.target.files[0]" />
                    <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                    {{ form.progress.percentage }}%
                    </progress>
                </div>

                <div class="mb-4">
                    <input type="file" @input="form.files[1] = $event.target.files[0]" />
                    <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                    {{ form.progress.percentage }}%
                    </progress>
                </div>

                <div class="mb-4">
                    <input type="file" @input="form.files[2] = $event.target.files[0]" />
                    <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                    {{ form.progress.percentage }}%
                    </progress>
                </div> -->

                                    <!-- ... (other fields) ... -->

                                    <!-- Product Attributes -->
                                    <h2 :class="attributes.length > 0 == null ? '' : 'text-red-600'" class=" mt-8">Attributes</h2>
                                    <div v-for="attribute in attributes" :key="attribute.id">
                                        <label>
                                            <input type="checkbox" :value="attribute.id" v-model="form.attributes">
                                            {{ attribute.name }} ({{ attribute.for_product }})
                                        </label>
                                    </div>
                                    <!-- Product Categories -->
                                    <h2 :class="categories.length > 0 ? '' : 'text-red-600'" class=" mt-8">Categories</h2>
                                    <div v-for="category in categories" :key="category.id">
                                        <label>
                                            <input type="checkbox" :value="category.id" v-model="form.categories">
                                            {{ category.name }}
                                        </label>
                                    </div>

                                    <div class="my-4">
                                        <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300 disabled:opacity-25 transition ease-in-out duration-150">
                                            Update Product
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
                name: this.product.name,
                productId: this.product.id,
                description: this.product.description,
                price: this.product.price,
                quantityType: this.product.quantityType,
                unit: this.product.unit,
                files: [null, null, null], // Array to store new uploaded images
                progress: null,
                attributes: this.product.attributes.map(attr => attr.id),
                categories: this.product.categories.map(cat => cat.id),
            }),
        };
    },

    methods: {
        async submitForm() {
            try {
                await this.form.post('/product-update');
            } catch (error) {
                console.error('Error updating product:', error);
            }
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
