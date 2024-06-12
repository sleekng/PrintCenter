<template>
<div>
    <!-- Navbar -->
    <Header :navcategories="navcategories" :CartCount="CartCount" />

    <section class="hero-section container mx-auto px-4 sm:px-6 lg:px-8" id="app">
    <div class="hero-slider relative splide splide--loop splide--ltr splide--draggable is-active is-initialized" id="splide04">
        <div>
            <ul>
                <li>
                    <div class="hero-slide bg-cover bg-center bg-no-repeat relative" style="background-image:url('/storage/img/home-bg.jpg');">
                        <div class="hero-content py-12 md:py-24 px-4 sm:px-10 md:px-12 lg:px-24 text-center sm:text-left mx-auto">
                            <div class="hero-text-container relative p-4 rounded-md bg-white bg-opacity-75">
                                <div class="hero-text max-w-xl mx-auto sm:mx-0 text-gray-800">
                                    <h1 class="text-4xl sm:text-6xl font-bold py-4">
                                        Get Your Printing Jobs Done Now
                                    </h1>
                                    <p class="hero-subtitle text-lg sm:text-xl">
                                        Top-quality printing services at competitive prices
                                    </p>
                                    <div class="hero-search mt-6 sm:mt-8 w-full relative">
                                        <input type="text" v-model="searchTerm" @input="filterProducts" @keydown="showDropdown"  @blur="hideDropdown" placeholder="Search for a product" class="search-input w-full pr-12 h-12 sm:h-16 border rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>


    <!-- Mobile Version -->
    <section class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:hidden block">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center md:flex-wrap">
            <div v-for="(card, index) in cards" :key="index" class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center" v-show="index === activeIndex">
                <img :src="'storage/img/icons8-' + card.icon + '-64.png'" class="h-16 w-16 mb-4 object-contain object-center transition-transform transform hover:scale-105" :alt="card.alt">
                <h3 class="font-hk text-xl font-semibold tracking-wide" :class="card.titleColor">{{ card.title }}</h3>
                <p class="font-hk text-base tracking-wide text-secondary-lighter">{{ card.description }}</p>
            </div>
        </div>

    </section>

    <section class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:block hidden ">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center md:flex-wrap">
        <div class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img src="storage/img/icons8-shipping-64.png" class="h-16 w-16 mb-4 object-contain object-center transition-transform transform hover:scale-105" alt="Fast Turnaround">
            <h3 class="font-hk text-xl font-semibold tracking-wide text-primary mb-2">
                Fast Turnaround Within Days
            </h3>
            <p class="font-hk text-base tracking-wide text-secondary-lighter">
                Your order gets to you within 3-7 working days via DHL or our very own Printivo Direct.
            </p>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img src="storage/img/icons8-guarantee-64.png" class="h-16 w-16 mb-4 object-contain object-center transition-transform transform hover:scale-105" alt="Top Quality">
            <h3 class="font-hk text-xl font-semibold tracking-wide text-secondary2 mb-2">
                100% Top Quality
            </h3>
            <p class="font-hk text-base tracking-wide text-secondary-lighter">
                Only the finest materials, machines and people will be involved in fulfilling your order.
            </p>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img src="storage/img/icons8-wallet-64.png" class="h-16 w-16 mb-4 object-contain object-center transition-transform transform hover:scale-105" alt="Affordable Services">
            <h3 class="font-hk text-xl font-semibold tracking-wide text-secondary mb-2">
                Affordable Services
            </h3>
            <p class="font-hk text-base tracking-wide text-secondary-lighter">
                All products are adequately priced to ensure you get value for your money at all times.
            </p>
        </div>
    </div>
</section>


    <!-- Featured Products Section -->
    <section class="featured-products-section sm:py-8 ">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="section-header flex justify-between font-bold">
                <h1 class="section-title text-2xl sm:text-4xl text-gray-800">
                    Featured | Popular Products
                </h1>
                <a href="{{ route('home') }}" class="section-link whitespace-nowrap underline text-gray-600">
                    See All <i class="fa fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
        <div class="products-grid container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <a :href="route('product.show', product.id)" class="product-card card border shadow-sm bg-white" v-for="product in products" :key="product.id">
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
                </a>
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
    data() {
        return {
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
