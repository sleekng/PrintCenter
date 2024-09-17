<template>
    <div>
      <!-- Navbar -->
      <Header :navcategories="categories" :CartCount="CartCount" />
  
      <section class="container flex w-full mx-auto py-8" id="app">
        <!-- Sidebar for Categories -->
        <div class="hidden md:block w-full md:w-1/6 p-4">
          <h2 class="text-2xl font-bold mb-4">Categories</h2>
          <ul class="category-list space-y-2">
            <li>
              <button
                @click="filterByCategory('')"
                :class="{'text-blue-500 font-bold': selectedCategory === ''}"
                class="w-full text-left font-semibold text-gray-800 hover:text-blue-500"
              >
                All Categories
              </button>
            </li>
            <li v-for="category in categories" :key="category.id">
              <button
                @click="filterByCategory(category.id)"
                :class="{'text-blue-500 font-bold': selectedCategory === category.id}"
                class="w-full text-left font-semibold text-gray-800 hover:text-blue-500"
              >
                {{ category.name }}
              </button>
            </li>
          </ul>
        </div>
  
        <!-- Main Content for Products -->
        <div class="w-full md:w-3/4 p-4">
          <!-- Product Grid -->
          <h1 class="text-3xl font-bold mb-4">Products by Category</h1>
  
          <!-- Search Bar -->
          <div class="hero-search relative mb-6">
            <input type="text" v-model="searchTerm" @input="filterProducts" @keydown="showDropdown" @blur="hideDropdown" placeholder="Search for a product" class="search-input w-full h-12 border rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button class="search-btn absolute top-0 right-0 h-full px-4 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              <i class="fa fa-search"></i>
            </button>
  
            <!-- Search Dropdown -->
            <div v-if="isDropdownVisible" class="dropdown-bg absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-md">
              <div v-if="filteredProducts.length > 0" class="dropdown-content p-4">
                <Link v-for="(product, index) in filteredProducts" :key="index" :href="route('product.show', product.id)" class="dropdown-item py-2 flex hover:bg-gray-100">
                  <img :src="'storage/'+product.product_img1" alt="Product Image" class="w-10 h-10 mr-2">
                  <span>{{ product.name }}</span>
                </Link>
              </div>
              <div v-else class="dropdown-empty p-4 text-gray-500">No matching products found</div>
            </div>
          </div>
  
          <div class="mb-6 sm:hidden">
            <select v-model="selectedCategory" @change="filterByCategory(selectedCategory)" class="w-full h-12 border rounded-md bg-white text-gray-800">
              <option value="">All Categories</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
            </select>
          </div>
  
          <!-- Product List by Category -->
          <div v-for="category in categories" :key="category.id" >
            <div v-if="filteredCategoryProducts.length > 0 && category.name != 'All Products'">

                <h2 class="text-2xl font-bold my-4 mt-8">{{ category.name }}</h2> <!-- Display category name -->
                <div class="products-grid grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-6">
                  <Link v-for="product in category.products" :key="product.id" :href="route('product.show', product.id)" class="product-card card border shadow-sm bg-white rounded-lg overflow-hidden">
                    <div class="product-image h-48 overflow-hidden">
                      <img :src="'storage/'+product.product_img1" class="w-full h-full object-cover" alt="" />
                    </div>
                    <div class="product-details p-4">
                      <h4 class="font-bold text-gray-800">{{ truncateTitle(product.name, 7) }}</h4>
                      <div class="text-gray-400">starting at</div>
                      <div class="price-details flex justify-between items-center py-4">
                        <span class="price text-2xl font-bold text-gray-800">₦{{ product.price }}</span>
                        <span class="unit text-gray-600">Per {{ product.unit }} unit</span>
                      </div>
                      <PrimaryButton :href="route('product.show', product.id)" class="bg-blue-600 text-white px-6 py-2 rounded-md text-center w-full">
                        Select Option
                      </PrimaryButton>
                    </div>
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  
  <script>
import { Link } from "@inertiajs/vue3";
import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";

export default {
  data() {
    return {
      searchTerm: '',
      isDropdownVisible: false,
      selectedCategory: '', // Track selected category
    };
  },
  props: {
    categories: Array, // Categories passed from the backend
    CartCount: Object,
  },
  components: {
    Header,
    Footer,
    PrimaryButton,
    Link,
  },
  computed: {
    allProducts() {
      return this.categories.flatMap(category => category.products);
    },
    filteredProducts() {
      return this.allProducts.filter(product => 
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
    filteredCategoryProducts() {
      if (!this.selectedCategory) {
        return this.allProducts;
      }
      const selectedCategory = this.categories.find(category => category.id === this.selectedCategory);
      return selectedCategory ? selectedCategory.products : [];
    }
  },
  methods: {
    truncateTitle(title, wordCount) {
      const words = title.split(" ");
      return words.length > wordCount ? words.slice(0, wordCount).join(" ") + "..." : title;
    },
    showDropdown() {
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      setTimeout(() => {
        this.isDropdownVisible = false;
      }, 200); // Delay to allow click event on dropdown items
    },
    filterProducts() {
      this.isDropdownVisible = true;
    },
    filterByCategory(categoryId) {
      this.selectedCategory = categoryId;
    }
  }
};
</script>

  
  
  <style lang="css">

.category-list button {
  transition: color 0.3s ease;
}

.text-blue-500 {
  color: #3b82f6;
}

.font-bold {
  font-weight: bold;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media (min-width: 640px) {
  .products-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}



  .featured-products-section .section-header .section-title {
    color: #111827;
  }
  
  .featured-products-section .section-header .section-link {
    color: #1f2937;
  }
  
  .featured-products-section .products-grid .product-card .product-image {
    overflow: hidden;
  }
  
  .featured-products-section .products-grid .product-card .product-title {
    color: #4b5563;
  }
  
  .featured-products-section .products-grid .product-card .product-price .price {
    color: #ef4444;
  }
  
  .featured-products-section .products-grid .product-card .product-price .unit {
    color: #10b981;
  }
  
  .featured-products-section .products-grid .product-card .product-action .select-option-button {
    background-color: #fbbf24;
    color: #000;
    padding: 0.5rem 2rem;
    font-weight: bold;
    border-radius: 0.125rem;
    display: flex;
    justify-content: center;
  }
  
  .product-item {
    color: #333;
    text-align: center;
  }
  </style>
  