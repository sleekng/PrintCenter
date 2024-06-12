

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
                        <h1 class="text-xl sm:text-2xl font-semibold text-gray-900">Add Product Attribute Option</h1>
                    </div>

                </div>
            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto">
                    <div class="align-middle inline-block min-w-full">
                        <div class="shadow overflow-hidden">

                            <!-- Place your body here -->
                            <div class=" my-10 container mx-auto w-4/12">

<div v-if="$page.props.flash.success" class=" text-green-500">
    {{ $page.props.flash.success }}
</div>

<form @submit.prevent="submitForm">
    <div class=" mt-4 flex flex-col ">
        <label for="value">Option Value:</label>
        <input type="text" v-model="form.value" id="value">
        <div v-if=" form.errors.value" class=" text-red-500">{{ form.errors.value }}</div>
    </div>
    <div class=" mt-4 flex flex-col ">
        <label for="value">Option is For <span class=" text-green-600">(Please enter which product this option is for)</span></label>
        <input type="text" v-model="form.for" id="value">
        <div v-if=" form.errors.for" class=" text-red-500">{{ form.errors.for }}</div>
    </div>
    <div class=" mt-4 flex flex-col ">
        <label for="value">Option Cost:</label>
        <input type="text" v-model="form.cost" id="value">
    </div>
    <div class=" mt-4 flex  justify-end">
        <button class=" p-2 px-4 bg-green-600 text-white" type="submit">Add Option</button>
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
    useForm
} from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
export default {
    data() {
        return {
            form: useForm({
                value: null,
                for: null,
                cost: 0
            })
        };
    },
    components:{
        AuthenticatedLayout
    },
    methods: {
        async submitForm() {
            await this.form.post('/product-attribute-options/store');
        }
    }
};
</script>
