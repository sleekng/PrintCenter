<template>
    <div
        class="fixed inset-0 flex justify-center items-center overflow-y-auto px-4 py-6 sm:px-0 z-50"
        scroll-region
    >
        <div
            v-show="true"
            class="fixed inset-0 transform transition-all"
        >
            <div class="absolute inset-0 bg-black opacity-75" @click="close" />
        </div>

        <div
            :class="maxWidthClass"
            class="mb-6 bg-white rounded-lg overflow-hidden  shadow-xl transform transition-all sm:w-full sm:mx-auto"
        >
                <slot />
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'maxWidth'
    ],
    computed:{
        maxWidthClass(){
            return this.maxWidth
        }
    },

    methods: {
            close(){
                this.$emit('close');
            }
    },
};
</script>

<style lang="scss" scoped></style>
