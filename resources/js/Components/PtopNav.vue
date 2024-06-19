<template>
        <nav class="bg-white border-b border-gray-200 fixed z-30 w-full">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <button @click="toggleAside" id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                        <svg v-if="sidebarOpen" id="toggleSidebarMobileClose" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                        <svg v-else id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <Link :href="route('home')" class="text-xl font-bold flex items-center lg:ml-2.5">
                        <img src="/storage/img/logo-main.png" class="h-10 mr-2" alt="Print Center Logo">
                    </Link>

                </div>
                <div class="flex items-center">

                    <div class="flex items-center">
                        <Link :href="route('profile.edit')" class="text-base font-normal text-gray-500 mr-5">Profile</Link>
                        <div class="-mb-1">
                            <span></span>
                        </div>
                    </div>
                    <a href="https://demo.themesberg.com/windster/pricing/" class="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
                        <svg class="svg-inline--fa fa-gem -ml-1 mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path>
                        </svg>
                       {{ $page.props.auth.user.first_name }}
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>
    
    <script>
    import {Link} from '@inertiajs/vue3'
    export default {
        components:{
            Link
        },
        data(){
            return{
                sidebarOpen:false,


                }

        },

        methods: {
        toggleAside() {
            this.sidebarOpen = !this.sidebarOpen
            this.$emit('toggle-aside');
        }
    }
    }
    </script>
    
    <style lang="scss" scoped>
    
    </style>
    