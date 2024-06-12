<template>
 <transition name="slide">


   <aside
     id="sidebar"
     class="fixed transition-all ease-in  z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
     aria-label="Sidebar"
   >
     <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
       <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
         <div class="flex-1 px-3 bg-white divide-y space-y-1">
           <ul class="space-y-2 pb-2">
             <li>
               <Link
                 :href="route('dashboard')"
                 class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
               >
                 <i class="fa-solid fa-grid-horizontal text-gray-500 group-hover:text-gray-900 transition duration-75"></i>
                 <span class="ml-3">Dashboard</span>
               </Link>
             </li>
             <li>
               <Link
                 :href="route('order.index')"
                 class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
               >
                 <i class="fa-sharp fa-regular fa-cart-shopping text-gray-500 group-hover:text-gray-900 transition duration-75"></i>
                 <span class="ml-3">Orders</span>
               </Link>
             </li>
 
             <template v-if="$page.props.auth.user.role === 'admin'">
               <li>
                 <Link
                   :href="route('user.index')"
                   class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                 >
                   <i class="fa-sharp fa-regular fa-bag-shopping text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"></i>
                   <span class="ml-3 flex-1 whitespace-nowrap">Users</span>
                 </Link>
               </li>
               <li>
                 <Link
                   :href="route('product.index')"
                   class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                 >
                   <i class="fa-sharp fa-regular fa-bag-shopping text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"></i>
                   <span class="ml-3 flex-1 whitespace-nowrap">Products</span>
                 </Link>
               </li>
               <li>
                 <Link
                   :href="route('attributes.index')"
                   class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                 >
                   <i class="fa-sharp fa-solid fa-arrow-up-right-from-square text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"></i>
                   <span class="ml-3 flex-1 whitespace-nowrap">Products Attribute</span>
                 </Link>
               </li>
               <li>
                 <Link
                   :href="route('options.index')"
                   class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                 >
                   <i class="fa-sharp fa-solid fa-arrow-up-right-from-square text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"></i>
                   <span class="ml-3 flex-1 whitespace-nowrap">Products Option</span>
                 </Link>
               </li>
               <li>
                 <Link
                   :href="route('category.index')"
                   class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                 >
                   <i class="fa-sharp fa-solid fa-arrow-up-right-from-square text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"></i>
                   <span class="ml-3 flex-1 whitespace-nowrap">Categories</span>
                 </Link>
               </li>
             </template>
 
             <li>
               <Link
                 :href="route('logout')"
                 method="post"
                 as="button"
                 class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
               >
                 <i class="fa-light fa-arrow-right-from-bracket text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"></i>
                 <span class="ml-3 flex-1 whitespace-nowrap">Logout</span>
               </Link>
             </li>
           </ul>
         </div>
       </div>
     </div>
   </aside>
 </transition>
</template>

<script>
import { Link } from "@inertiajs/vue3";

export default {
  components: {
    Link,
  },

};
</script>

<style lang="css" scoped>
.slide-enter-active, .slide-leave-active {
    transition: transform 0.3s;
}
.slide-enter, .slide-leave-to {
    transform: translateX(100%);
}
</style>
