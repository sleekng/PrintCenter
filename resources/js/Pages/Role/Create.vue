<template>
    <div>
        <h1>Create Role</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="value">Role</label>
                <input type="text" v-model="role" id="value">
            </div>
            <div>
                <button type="submit">Add Role</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            role: ''
        };
    },
    methods: {
        async submitForm() {
            await this.$inertia.post('/role-store', { role: this.role });
        }
    }
};
</script>
