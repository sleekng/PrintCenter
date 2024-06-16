<template>
<div class="w-full sm:w-3/12 relative">
    <input v-model="searchTerm" @input="filterProducts" @keydown="showDropdown" @blur="hideDropdown" type="text" placeholder=" Search for a product" class="w-full pr-12 h-12 sm:h-[60px] border rounded-md" />
    <i class="fa-sharp fa-light fa-magnifying-glass absolute top-2 sm:top-4 right-4 text-xl sm:text-2xl"></i>

    <!-- Vue Dropdown -->
    <div v-if="isDropdownVisible" class="dropdown-bg absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-md">
        <div v-if="filteredProducts.length > 0" class="dropdown-content p-4">
            <Link v-for="(product, index) in filteredProducts" :key="index" :href="route('product.show', product.id)" class="dropdown-item   py-2 flex  hover:bg-gray-100">
            <img :src="'/storage/'+product.product_img1" alt="Product Image" class="w-10 h-10 mr-2">
            <span>{{ product.name }}</span>
            </Link>
        </div>
        <div v-else class="dropdown-empty p-4 text-gray-500">No matching products found</div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import {

    Link,

} from "@inertiajs/vue3";
export default {
    components:{
        Link
    },
    mounted(){
        this.loadproduct()
    },
    data() {
        return {
            searchTerm: '',
            isDropdownVisible: false,
            products:null
        }
    },
    computed: {
        filteredProducts() {
            return this.products.filter(product => product.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
        }
    },

    methods: {
        showDropdown() {
            this.isDropdownVisible = true;
        },
        hideDropdown() {
            setTimeout(() => {
                this.isDropdownVisible = false;
            }, 200); // Delay to allow click event on dropdown items
        },
        filterProducts() {
            this.isDropdownVisible = true; // Show dropdown when typing
        },

        loadproduct() {
            axios.get(route('all-get-product')).then((response)=>{
                  this.products = response.data.products
            })
        }

    },

}
</script>

<style lang="scss" scoped>

</style>
