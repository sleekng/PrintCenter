<template>
<!-- Navbar -->
<Header :navcategories="navcategories" :CartCount="CartCount" />
<!-- End Navbar -->

<!-- Bottom Total Cost -->
<div class="fixed bottom-0 left-0 w-full h-[80px] md:h-[100px] flex justify-center items-center backdrop-blur-sm bg-primary2/80 z-50">
    <div class="container mx-auto px-4 md:px-8 lg:px-24">
        <div class="flex flex-col md:flex-row h-full items-center justify-between">
            <div class="hidden md:flex w-full md:w-8/12 space-x-2 items-center">
                <div class="w-12 md:w-16 flex-shrink-0">
                    <img class="object-cover h-full" :src="'/storage/'+ product[0].product.product_img1" alt="Business Card" />
                </div>
                <div class="hidden md:block text-sm">
                    <div class="font-bold">{{ product[0].product.name }}</div>
                    <span v-for="selectedName in product[0].attributeDetails" :key="selectedName">
                        {{ selectedName.value }} |
                    </span>
                </div>
            </div>
            <div class="hidden md:flex w-3/6 flex-col items-center">
                <span class="text-sm md:text-base">Quantity</span>
                <span>{{ product[0].quantity }}</span>
            </div>
            <div class="flex w-full md:w-4/12  items-center justify-center md:justify-end space-x-2 mt-2 md:mt-0">
                <span class="text-xl md:text-4xl font-bold">₦{{ calculateCost }}</span>
                <primary-button @click="continueToCart" class="p-2 md:p-4 px-4 md:px-8 rounded-sm bg-primary font-bold text-white">Continue</primary-button>
            </div>
        </div>
    </div>
</div>

<section class="py-8 md:py-12">
    <div class="container mx-auto px-4 md:px-8 lg:px-24">
        <!-- Navigation breadcrumbs and search -->
        <div class="flex flex-col sm:flex-row">
            <nav class="flex w-full sm:w-9/12 mb-4 sm:mb-0">
                <ol role="list" class="flex items-center space-x-2">
                    <li v-for="item,index in breadcrumbs" :key="index" class="text-left">
                        <div class="flex items-center">
                            <span class="mx-2 text-gray-400">/</span>
                            <div class="-m-1">
                                <Link :href="item.link" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                                {{ item.text }}
                                </Link>
                            </div>
                        </div>
                    </li>
                </ol>
            </nav>

            <div class="w-full sm:w-3/12 relative">
                <input type="text" placeholder=" Search for a product" class="w-full pr-12 h-12 sm:h-[60px] border rounded-md" />
                <i class="fa-sharp fa-light fa-magnifying-glass absolute top-2 sm:top-4 right-4 text-xl sm:text-2xl"></i>
            </div>
        </div>

        <!-- Product details section -->
        <div class="pt-10 md:pt-20">
            <!-- Product name -->
            <div>
                <h2 v-for="productDetail in product" :key="productDetail" class="font-bold text-2xl md:text-4xl">
                    {{ productDetail.product.name }}, Design Request
                </h2>
            </div>

            <!-- Description -->
            <div class="mt-3 md:mt-5">
                Now all we need is the design file to print on your product
            </div>

            <!-- Error message -->
            <div v-if="$page.props.flash.error" class="bg-red-50 border border-red-500 p-4 rounded-md dark:bg-red-800/30" role="alert">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <span class="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
                            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </span>
                    </div>
                    <div class="ms-3">
                        <h3 class="text-gray-800 font-semibold dark:text-white">
                            Error!
                        </h3>
                        <p class="text-sm text-gray-700 dark:text-gray-400">
                            {{ $page.props.flash.error  }}
                        </p>
                    </div>
                </div>
            </div>

            <div>
                
            </div>

            <!-- Design options -->
            <div v-if="selectDesignOption" class="flex flex-col md:flex-row items-center md:space-x-8 mt-5 rounded-md p-4 shadow-lg">
                <!-- Design options buttons -->
                <span class="font-bold">Do you have a Design?</span>
                <div class="flex space-x-4 mt-4">
                    <primary-button @click="design('Yes')" :class="uploadDesign ? 'bg-primary text-white' : 'border'" class="px-8 md:px-16 py-2 md:py-4 rounded-md">Yes</primary-button>
                    <primary-button :disabled="form.hireDesigner" :class="requestDesign || form.hireDesigner ? 'bg-primary text-white' : 'border'" @click="design('No')" class="px-8 md:px-16 py-2 md:py-4 rounded-md">No</primary-button>
                </div>
            </div>

            <!-- Upload or request design section -->
            <div class="mt-10 flex flex-col md:flex-row md:space-x-4 justify-between">
                <div class="w-full md:w-8/12">
                    <div v-if="uploadDesign" class="border rounded-md shadow-lg flex justify-center relative text-center space-y-4 flex-col p-10 animate-fade-up animate-duration-[400ms]">
                        <div>
                            <i class="fa-thin fa-upload text-8xl"></i>
                        </div>

                        <div class="flex justify-center flex-col items-center space-y-2">
                            <div>Kindly upload your design files</div>
                            <img class="w-52" src="/storage/img/file-formats.jpg" alt="" />
                            <br />
                        </div>
                        <div v-if="progress == null">
                            <primary-button class="font-bold relative px-16 py-4 text-white bg-black rounded-md">
                                <input :disabled="progress" @change="handleFileChange" multiple type="file" class="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer z-50" />
                                Upload Design Files

                            </primary-button>
                        </div>
                        <div v-if="progress !== null" class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                            <div class="bg-green-600 text-[10px] text-white rounded-full dark:bg-green-500" :style="{ width: `${progress}%` }">{{ progress }}%</div>
                            <span>Please wait...</span>
                        </div>
                        <!-- Display selected file names and remove button -->

                        <div class=" p-4">
                            <div v-for="(file, index) in files" :key="index" class="p-2 flex justify-between items-center hover:bg-gray-100 ">
                                <span>Artwork {{ index+1 }}</span>
                                <button  @click="removeFile(index)"><i class="fa-light fa-xmark text-xl text-red-600 "></i></button>
                            </div>
                        </div>
                    </div>

                    <div v-if="requestDesign" @click="hire" class="border rounded-md shadow-lg flex justify-center text-center space-y-4 flex-col  p-10 animate-fade-up animate-duration-[400ms]">
                        <div>
                            <i class="fa-thin fa-rocket text-8xl"></i>
                        </div>
                        <div>
                            Let our creative team provide an <br />
                            awesome design for you
                        </div>
                        <div>
                            <primary-button class="font-bold px-16 py-4 text-white bg-green-600 rounded-md">Hire a designer</primary-button>
                        </div>
                    </div>
                    <div v-if="form.hireDesigner" class="border rounded-md shadow-lg flex justify-center space-y-4 flex-col  p-4 animate-fade-up animate-duration-[400ms]">
                        <h1 class="text-4xl font-bold">Hire a designer</h1>
                        <div class="py-4">
                            <h3 class="font-bold">Grapic Design Fee</h3>
                            <span>₦5,000</span>
                        </div>
                        <div class="py-4">
                            <span>Please include all contact details and
                                information you want in your design here.
                                Add all remarks, preferred colours,
                                references and additional instructions
                                here.</span>
                        </div>
                        <div>
                            <span class="text-sm">Please be detailed, for business cards and
                                please input the company name, your name,
                                your position, contact details company
                                addres.</span>
                        </div>

                        <div>
                            <div v-if="errors.designDescription" class="my-2 bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg p-4 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500" role="alert">
                                {{ errors.designDescription }}
                            </div>

                            <textarea name="" id="" class="w-full" rows="10" v-model="form.designDescription" placeholder="Enter a request"></textarea>
                        </div>

                        <div class="border rounded-md shadow-lg flex justify-center relative text-center space-y-4 flex-col mt-8 p-4 md:w-8/12 animate-fade-up animate-duration-[400ms]">

                            <div>
                                <i class="fa-thin fa-upload text-4xl"></i>
                            </div>

                            <div class="flex justify-center flex-col items-center space-y-2">
                                <div>
                                    <span>Upload design (e.g. logo)
                                        asset if any</span>
                                </div>
                                <img class="w-52" src="/storage/img/file-formats.jpg" alt="" />
                                <br />
                            </div>

                            <div v-if="progress == null">
                                <primary-button class="font-bold relative px-8 py-4 text-white bg-black rounded-md">
                                    <input :disabled="progress" @change="handleFileChange" multiple type="file" class="absolute top-0  left-0 h-full w-full opacity-0 cursor-pointer z-50" />
                                    Upload Design Files

                                </primary-button>
                            </div>

                            <div v-if="progress !== null" class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-green-600 text-[10px] text-white rounded-full dark:bg-green-500" :style="{ width: `${progress}%` }">{{ progress }}%</div>
                                <span>Please wait...</span>
                            </div>
                            <!-- Display selected file names and remove button -->
                            <div class=" p-4">
                                <div v-for="(file, index) in files" :key="index" class="p-2 flex justify-between items-center hover:bg-gray-100 ">
                                    <span>Artwork {{ index+1 }}</span>
                                    <button  @click="removeFile(index)"><i class="fa-light fa-xmark text-xl text-red-600 "></i></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Help section -->
                <div class="w-full md:w-4/12 p-5 border shadow-lg rounded-md mt-8 md:mt-0">
                    <h2 class="text-center font-bold mb-4">Need Help?</h2>
                    <p class="mb-4">If you have any questions or need assistance with your design, feel free to contact our support team.</p>
                    <div class="flex justify-center">
                        <primary-button @click="contactSupport" class="px-8 md:px-16 py-2 md:py-4 font-bold bg-primary text-white rounded-md">Contact Support</primary-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--  Footer Section Begins -->
<Footer />
<!--  Footer Section Ends -->
</template>

<script>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {
    Head,
    Link,
    useForm
} from "@inertiajs/vue3";
import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";
import SiteModal from "@/Components/SiteModal.vue";
import axios, {
    Axios
} from 'axios';
export default {
    props: {
        breadcrumbs: {
            type: Array,
            required: true
        },
        product: {
            type: Object,
            required: true
        },
        errors: Object,
        navcategories: {
            type: Object,
        },
        CartCount: {
            type: Object,
        }
    },
    components: {
        ApplicationLogo,
        PrimaryButton,
        Link,
        Header,
        Footer,
        SiteModal,
    },

    data() {
        return {
            selectDesignOption: true,
            files: [],
            progress: null,
            form: useForm({
                quantity: 1,
                designDescription: null,
                files: null,
                cartItemId: this.product[0].cartItemId,
                selectedOptions: {},
                designCost: 0,
                hireDesigner: false,
            }),
            selectedOptionsNames: {},
            ready: false,
            uploadDesign: false,

            requestDesign: false,
            categories: false,
            subCategories: false,
        };
    },

    computed: {
        calculateCost() {
            let totalOptionsCost = 0;
            let deliveryCost = 0;

            // Calculate total cost of selected options

            this.product[0].attributeDetails.forEach(attribute => {

                totalOptionsCost += parseFloat(attribute.cost);
            });

            if (this.product[0].delivery == 'Standard') {
                deliveryCost = 1500
            }
            if (this.product[0].delivery == 'Express') {
                deliveryCost = 5000
            }
            if (this.product[0].delivery == 'Next Day') {
                deliveryCost = 15000
            }

            // Calculate total cost including base price, quantity, and options
            this.total = (parseFloat(this.product[0].product.price) + parseFloat(totalOptionsCost)) * parseFloat(this.product[0].quantity) + parseFloat(deliveryCost) + parseFloat(this.form.designCost);

            return this.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },

    },

    methods: {
        handleFileChange(event) {
            this.files = Array.from(event.target.files);
            this.uploadFile()
        },

        removeFile(index) {

            // Get the file path from the files array
            const filePath = this.form.files[index];

            this.form.files.splice(index, 1);
            this.files.splice(index, 1);

            if (this.files.length == 0) {
                this.progress = null
            }

            // Send a request to delete the file from the server
            axios.post(route('delete-file'), {
                    filePath
                })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error deleting file:', error);
                });
        },

        async uploadFile() {
            const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB size limit
            const formData = new FormData();

            for (let i = 0; i < this.files.length; i++) {
                const file = this.files[i];
                if (file.size > MAX_FILE_SIZE) {
                    this.files = []
                    alert(`File ${file.name} exceeds the maximum size limit of 5MB.`);
                    return; // Exit the function if a file exceeds the limit
                }
                formData.append(`files[${i}]`, file);
            }

            axios.post(route('design'), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    this.progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);

                },
            }).then((response) => {
                this.form.files = response.data.files;
                console.log('Upload successful:', this.form.files);
                if (this.progress == 100) {

                    this.progress = null
                }
            })

        },

        design(option) {
            this.selectDesignOption = false
            if (option == "Yes") {
                this.form.designCost = 0
                this.uploadDesign = true;
                this.requestDesign = false;
                this.ready = true;
                this.form.hireDesigner = false;
            } else {
                this.uploadDesign = false;
                this.requestDesign = true;
                this.ready = false;
            }
        },

        hire() {
            this.form.designCost = 5000;
            this.requestDesign = false;
            this.form.hireDesigner = true;
        },

        continueToCart() {

            this.form.put('/cart/update-cart/' + this.form.cartItemId)

        },
    },
};
</script>

<style lang="scss" scoped></style>
