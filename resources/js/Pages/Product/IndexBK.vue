<template>
<AuthenticatedLayout>
    <template #header>
            <div class="flex justify-between items-center">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">products</h2> <Link :href="route('product.create')" class=" p-4 bg-primary2 font-bold text-bold">Create Product</Link>

            </div>
        </template>
    <div class=" flex justify-center">
        <div class=" w-6/12">
            <div v-if="$page.props.flash.success" class=" text-green-500">
                {{ $page.props.flash.success }}
            </div>
          
            <table class=" table-auto ">
                <thead> </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td class=" p-4">{{ product.name }}</td>
                        <td class=" p-4">
                            <Link :href="route('product.edit', product.id)" class="  px-8">Edit</Link>
                        </td>
                        <td class=" p-4"><button @click="deleteProduct(product.id)" class=" px-8">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            <br />
            <hr />

        </div>
    </div>
</AuthenticatedLayout>
</template>

<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {
    Head,
    Link,
    router,
    useForm
} from "@inertiajs/vue3";
export default {
    props: ['products'],
    components: {
        Link,
        AuthenticatedLayout
    },
    methods: {

        deleteProduct(productID) {
            router.delete(route('product.destroy', productID))
        },

        deleteUser(productId) {
            axios.delete(`http://localhost:8000/api/users/${productId}`)
                .then(() => {
                    this.$emit('reload')
                })
        },
        editUser(product) {
            this.$emit("setproduct", product);
        }
    }

}
</script>

<style lang="scss" scoped>

</style>
