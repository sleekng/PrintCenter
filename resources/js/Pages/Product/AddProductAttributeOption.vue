<template>
    <div>
        <h1>Add Product Attribute Option</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="value">Option Value:</label>
                <input type="text" v-model="optionValue" id="value">
            </div>
            <div>
                <label for="value">Option Cost:</label>
                <input type="text" v-model="optionCost" id="value">
            </div>
            <div>
                <button type="submit">Add Option</button>
            </div>
        </form>
    </div>
</template>

<script>
import { useForm } from '@inertiajs/vue3';

export default {
    data() {
        return {
            form:useForm({
                optionCost:null,
                optionValue: null
            }),
        };
    },
    methods: {
        async submitForm() {
            await this.form.post('/product-attribute-options/store');
        }
    }
};
</script>
