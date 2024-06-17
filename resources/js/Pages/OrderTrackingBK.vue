<template>
    <div class="p-8">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold">Order #{{ order.id }}</h1>
        <p class="text-sm text-gray-500">Expected Arrival: {{ order.expectedArrival }}</p>
        <p class="text-sm text-gray-500">USPS: {{ order.trackingNumber }}</p>
      </div>
  
      <div class="relative flex items-center justify-between mb-4">
        <div class="absolute inset-0 flex items-center justify-between">
          <div class="w-1/3 h-1 bg-purple-500"></div>
          <div class="w-1/3 h-1 bg-purple-500"></div>
          <div class="w-1/3 h-1 bg-gray-300"></div>
        </div>
        <div class="relative z-10 flex justify-between w-full">
          <div class="text-center w-1/4">
            <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p class="text-xs text-gray-600">Order Processed</p>
          </div>
          <div class="text-center w-1/4">
            <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p class="text-xs text-gray-600">Order Shipped</p>
          </div>
          <div class="text-center w-1/4">
            <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p class="text-xs text-gray-600">Order En Route</p>
          </div>
          <div class="text-center w-1/4">
            <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p class="text-xs text-gray-400">Order Arrived</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      order: Object,
    },
    data() {
      return {
        steps: [
          { label: 'Order Processed', iconPath: 'M9 17v2h6v-2m-3-4h.01M12 12h.01M12 8v.01M12 4v.01M21 12v.01M21 8v.01M21 4v.01M12 20h.01M4 12v.01M4 8v.01M4 4v.01M12 20H4M21 20H4', completed: true },
          { label: 'Order Shipped', iconPath: 'M17 8h2a2 2 0 012 2v2a2 2 0 01-2 2h-2m-4 4H7v-1m0 0a2 2 0 002-2V8a2 2 0 00-2-2h6a2 2 0 002 2v6a2 2 0 01-2 2z', completed: true },
          { label: 'Order En Route', iconPath: 'M3 10l1.79 1.79A2.5 2.5 0 007 13.5h10a2.5 2.5 0 002.21-1.71L21 10m-3-3h3v3', completed: true },
          { label: 'Order Arrived', iconPath: 'M3 8h3m4-4h6v6h4v6H7v4H3V8z', completed: true },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .progress-bar {
    position: relative;
  }
  
  .progress-bar::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #e0e0e0;
    z-index: -1;
  }
  </style>
  