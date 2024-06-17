<template>
<div>
    <!-- Navbar -->
    <Header :navcategories="navcategories" :CartCount="CartCount" />

    <section class="container flex-col md:flex-row w-full flex justify-between items-center  mx-auto " id="app">
        <div class="pt-4 ">
            <h1 class="text-3xl font-bold mb-4">All Products  </h1>
            

        </div>

        <div class="hero-search sm:mt-6  relative w-full sm:w-1/2">
            <input type="text" v-model="searchTerm" @input="filterProducts" @keydown="showDropdown" @blur="hideDropdown" placeholder="Search for a product" class="search-input w-full pr-12 h-12 sm:h-16 border rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button class="search-btn absolute top-0 right-0 h-full px-4 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                <i class="fa fa-search"></i>
            </button>
            <!-- Vue Dropdown -->
            <div v-if="isDropdownVisible" class="dropdown-bg absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-md">
                <div v-if="filteredProducts.length > 0" class="dropdown-content p-4">
                    <Link v-for="(product, index) in filteredProducts" :key="index" :href="route('product.show', product.id)" class="dropdown-item   py-2 flex  hover:bg-gray-100">
                    <img :src="'storage/'+product.product_img1" alt="Product Image" class="w-10 h-10 mr-2">
                    <span>{{ product.name }}</span>
                    </Link>
                </div>
                <div v-else class="dropdown-empty p-4 text-gray-500">No matching products found</div>
            </div>
        </div>
    </section>



    <!-- Featured Products Section -->
    <section class="featured-products-section sm:py-10  ">
      
        <div class="products-grid container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-10 ">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <Link :href="route('product.show', product.id)" class="product-card card border shadow-sm bg-white" v-for="product in products" :key="product.id">
                <div class="product-image overflow-hidden h-48 sm:h-60 md:h-72">
                    <img :src="'storage/'+product.product_img1" class="w-full h-full object-cover" alt="" />
                </div>
                <div class="product-details p-4">
                    <div class="product-title">
                        <h4 class="font-bold text-md text-gray-800">
                            {{ truncateTitle(product.name, 7) }}
                        </h4>
                    </div>
                    <div class="product-price">
                        <span class="text-gray-400">starting at</span>
                        <div class="price-details flex justify-between items-center py-4">
                            <span class="price text-2xl font-bold text-gray-800">₦{{ product.price }}</span>
                            <span class="unit text-gray-600">Per {{ product.unit }} unit</span>
                        </div>
                    </div>
                    <div class="product-action">
                        <PrimaryButton :href="route('product.show', product.id)" class="select-option-button bg-gray-800 text-white px-8 py-2 font-bold rounded-sm flex w-full justify-center">
                            Select Option
                        </PrimaryButton>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <Footer />
</div>
</template>

<script>
import {
    Head,
    Link
} from "@inertiajs/vue3";
import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";

export default {
    watch: {
        activeIndex() {
            this.toggleColor();
        },
    },
    data() {
        return {

            activeColor: '#c5c8cf',
            activeIndex: 0,
            cards: [{
                    icon: 'shipping',
                    alt: 'Fast Turnaround',
                    title: 'Fast Turnaround Within Days',
                    titleColor: 'text-primary',
                    description: 'Your order gets to you within 3-7 working days via DHL.'
                },
                {
                    icon: 'guarantee',
                    alt: 'Top Quality',
                    title: '100% Top Quality',
                    titleColor: 'text-secondary2',
                    description: 'Only the finest materials, machines and people will be involved in fulfilling your order.'
                },
                {
                    icon: 'wallet',
                    alt: 'Affordable Services',
                    title: 'Affordable Services',
                    titleColor: 'text-secondary',
                    description: 'All products are adequately priced to ensure you get value for your money at all times.'
                }
            ],
            autoTimer: null,
            searchTerm: '',
            isDropdownVisible: false,

        }
    },
    props: {
        products: Object,
        categories: Object,
        navcategories: Object,
        CartCount: Object,
    },
    components: {
        Header,
        Footer,
        PrimaryButton,
        Link,
    },
    created() {
        this.autoTimer = setInterval(() => {
            this.nextCard();
        }, 3000); // Change the interval as needed (in milliseconds)
    },
    beforeDestroy() {
        clearInterval(this.autoTimer);
    },
    methods: {
        toggleColor() {
            this.activeColor = this.activeColor === 'red' ? '#c5c8cf' : 'white';
        },
        truncateTitle(title, wordCount) {
            const words = title.split(" ");
            return words.length > wordCount ? words.slice(0, wordCount).join(" ") + "..." : title;
        },

        nextCard() {
            if (this.activeIndex < this.cards.length - 1) {
                this.activeIndex++;
            } else {
                this.activeIndex = 0;
            }
        },
        prevCard() {
            if (this.activeIndex > 0) {
                this.activeIndex--;
            } else {
                this.activeIndex = this.cards.length - 1;
            }
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
            this.isDropdownVisible = true; // Show dropdown when typing
        }
    },
    computed: {
        filteredProducts() {
            return this.products.filter(product => product.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
        }
    },
};
</script>

<style lang="css">
.hero-section .hero-slider .hero-slide {
    background-position: right top;
}

.hero-section .hero-slider .hero-slide .hero-content .hero-text .hero-title {
    color: #4a4a4a;
}

.hero-section .hero-slider .hero-slide .hero-content .hero-text .hero-search .search-input {
    padding-right: 3rem;
}

.hero-section .hero-slider .hero-slide .hero-content .hero-text .hero-search .search-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
}

.benefits-section .benefits-grid .benefit-item .benefit-icon {
    transition: transform 0.2s;
}

.benefits-section .benefits-grid .benefit-item .benefit-icon:hover {
    transform: scale(1.05);
}

.benefits-section .benefits-grid .benefit-item .benefit-title {
    color: #3b82f6;
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
