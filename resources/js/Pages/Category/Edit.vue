

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
                        <h1 class="text-xl sm:text-2xl font-semibold text-gray-900">Edit Category</h1>
                    </div>

                </div>
            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto">
                    <div class="align-middle inline-block min-w-full">
                        <div class="shadow overflow-hidden">

                            <!-- Place your body here -->

                            <div class="container mx-auto w-4/12 py-10">
                               
                                <form @submit.prevent="updateProduct">
                                    <!-- Product Details -->
                                   
                                    <div class=" flex flex-col">
                                      <label>Name:</label>
                                    <input type="text" v-model="category.name" required>
                                    </div>

                                    <!-- Other product details -->
                                    <!-- Add fields for other product details as needed -->

                                    <!-- Product In Category -->
                                    <div class=" mt-8">
                                      <h2 class=" border-b">Products</h2>
                                      <div v-for="product in products" :key="product.id">
                                          <label>
                                              <input type="checkbox" :value="product.id" v-model="selectedProducts">
                                              {{ product.name }}
                                          </label>
                                      </div>
                                    </div>

                                   <div class=" mt-4 flex justify-end">
                                      <button class=" px-4 bg-green-600 text-white rounded-md py-2  " type="submit">Update Product</button>
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
export default {
    props: ['products', 'category'],
    data() {
        return {
            selectedProducts: []
        };
    },
    components: {
        AuthenticatedLayout
    },
    mounted() {
        // Initialize selectedAttributes with currently selected attribute IDs
        this.selectedProducts = this.category.products.map(product => product.id);
    },
    methods: {
        async updateProduct() {
            try {
                const response = await this.$inertia.put('/category/' + this.category.id, {
                    name: this.category.name,
                    selectedProducts: this.selectedProducts
                });

                // Handle success response
                console.log('Product updated successfully:', response);

                // Optionally, you can redirect to another page or show a success message
            } catch (error) {
                // Handle error
                console.error('Error updating product:', error);
            }
        }
    }
};
</script>
