<template>
    <div class=" w-4/12 mx-auto my-10">
        <div class=" flex justify-between items-center">
            <h1 class="text-3xl font-bold mb-4">Add Product</h1>
            <Link :href="route('attributes.create')" class="text-blue-500 hover:text-blue-800 focus:outline-none focus:ring ring-offset">
                    Create Attribute
                </Link>
        </div>
        <div v-if="$page.props.errors">
            <div v-for="error in $page.props.errors" :key="error" class=" text-red-600">
                {{ error }}
            </div>
        </div>
        <div v-if="$page.props.flash.success"  class=" text-green-500">
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
</template>

<script>
import { useForm,Link } from '@inertiajs/vue3'
export default {
    props:{
        attributes: {
            type: Array,
            required: true,
        },
        categories: {
            type: Array,
            required: true,
        },
    },

    components:{
        Link
    },
    
    data() {
        return {
            form: useForm({
                name: '',
                description: '',
                price: '',
                quantityType:'',
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

              await  this.form.post('/products-store');

            } catch (error) {
                console.error('Error adding product:', error);
            }
        }
    }
};
</script>
