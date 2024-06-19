<template>
<AuthenticatedLayout>
    <div>

        <div class="flex flex-col p-6">
            <div v-if="isLoading" class="flex justify-center items-center h-screen py-4">
                <LoadingSpinner />
            </div>
            <div v-else class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div class="mb-4 flex items-center justify-between">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">User Management</h3>
                        <span class="text-base font-normal text-gray-500">Manage your users here</span>
                    </div>
                    <div class="flex items-center space-x-2 sm:space-x-3">
                        <div class="relative">
                            <input type="text" class="block w-full pl-10 sm:text-sm border-gray-300 rounded-lg" placeholder="Search for users">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a6 6 0 100 12A6 6 0 008 4zM2 10a8 8 0 1116 0A8 8 0 012 10zm9-1h3a1 1 0 000-2H7a1 1 0 100 2h4v2a1 1 0 001 1h3a1 1 0 100-2H11V9zm3-2h-2a1 1 0 100 2h1v1a1 1 0 102 0V8h1a1 1 0 100-2h-2V5a1 1 0 00-2 0v1z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="flex items-center space-x-2 sm:space-x-3 ml-auto">
                            <button @click="addUserModal()" class="w-1/2 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-200 font-medium inline-flex items-center justify-center px-3 py-2 border border-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto text-sm">
                                <i class="fa-solid fa-plus mr-2"></i>
                                Add user
                            </button>
                            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="w-1/2 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100  focus:ring-gray-200 font-medium inline-flex items-center justify-center px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto text-sm" type="button">
                                <svg class="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414L10 3.586l4.707 4.707a1 1 0 11-1.414 1.414L11 6.414V17a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                Sort
                                <svg class="w-5 h-5 ml-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414L10 3.586l4.707 4.707a1 1 0 11-1.414 1.414L11 6.414V17a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <div id="dropdown" class="hidden z-10 w-48 bg-white rounded shadow border border-gray-100">
                                <ul class="py-1 text-sm text-gray-700">
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Name</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Date</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Transition enter-active-class="transition ease-in-out" enter-from-class="opacity-0" leave-active-class="transition ease-in-out" leave-to-class="opacity-0" class="flex justify-center py-4">
                    <p v-if="recentlySuccessful" class="text-sm  text-green-600 ">{{ recentlySuccessful }}.</p>
                </Transition>
                <div class="flex flex-col">
                    <div class="overflow-x-auto">
                        <div class="align-middle inline-block min-w-full">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-100">
                                        <tr>
                                            <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                S/N
                                            </th>
                                            <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                First Name
                                            </th>
                                            <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Last Name
                                            </th>

                                            <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Role
                                            </th>
                                            <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        <tr v-for="user,index in users.data" :key="index">
                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">{{ index+1 }}</td>
                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">{{ user.first_name }}</td>
                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">{{ user.last_name }}</td>

                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">{{ user.email }}</td>
                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">{{ user.role }}</td>
                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-green-500">{{ user.status }}</td>
                                            <td class="p-4 whitespace-nowrap space-x-2">
                                                <button @click="editUserModal(user)" class="text-sm text-gray-900 bg-gray-100 hover:bg-gray-200 border border-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 inline-flex items-center justify-center px-3 py-2">

                                                    <i class="fa-regular fa-pen-to-square mr-1"></i>
                                                    Edit
                                                </button>
                                                <button @click="deleteUser(user.id)" class="text-sm text-red-600 bg-red-100 hover:bg-red-200 border border-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-100 inline-flex items-center justify-center px-3 py-2">
                                                    <i class="fa-regular fa-trash-can mr-1"></i>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                        <!-- More rows as needed -->
                                    </tbody>
                                </table>
                                <!-- Pagination -->
                                <div class="mx-auto md:px-40">

                                    <nav class="bg-white px-4 py-3 flex items-center justify-center border-t border-gray-200 sm:px-6" aria-label="Pagination">
                                        <div class="hidden sm:block">
                                            <p class="text-sm text-gray-700">
                                                Showing
                                                <span class="font-medium">{{ users.from }}</span>
                                                to
                                                <span class="font-medium">{{ users.to }}</span>
                                                of
                                                <span class="font-medium">{{ users.total }}</span>
                                                results
                                            </p>
                                        </div>
                                        <div class="flex-1 flex justify-between sm:justify-end">
                                            <Link :href="users.prev_page_url" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100" :disabled="!users.prev_page_url">
                                            Previous
                                            </Link>
                                            <Link :href="users.next_page_url" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100" :disabled="!users.next_page_url">
                                            Next
                                            </Link>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal for editing and adding users -->
        <div class="fixed z-50 inset-0 overflow-y-auto" v-show="isModalOpen" @keydown.escape="isModalOpen = false">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity" aria-hidden="true" @click="isModalOpen = false">
                    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <form @submit.prevent="submit" class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <!-- Modal content -->
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <!-- Modal header -->
                        <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-lg leading-6 font-medium text-gray-900" v-text="isEditMode ? 'Edit User' : 'Add User'"></h3>
                            </div>
                        </div>
                        <!-- Modal body -->
                        <div class="mt-5">

                            <!-- Add user form -->
                            <!-- You can use form inputs here to add a new user -->
                            <!-- Example: -->

                            <div v-show="isAddMode || isEditMode">

                                <div class="grid grid-cols-2 gap-4">
                                    <div class="mt-4">
                                        <label class="block mb-2 text-sm font-medium text-gray-600" for="LoggingFirstName">First Name</label>
                                        <input v-model="form.first_name" id="LoggingFirstName" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-4 focus:outline-none focus:ring focus:ring-blue-300" type="text" required autofocus autocomplete="first_name" />

                                    </div>
                                    <div class="mt-4">
                                        <label class="block mb-2 text-sm font-medium text-gray-600" for="LoggingLastName">Last Name</label>
                                        <input v-model="form.last_name" id="LoggingLastName" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-4 focus:outline-none focus:ring focus:ring-blue-300" type="text" required autofocus autocomplete="last_name" />

                                    </div>
                                </div>

                                <div class="mt-4">
                                    <label class="block mb-2 text-sm font-medium text-gray-600" for="LoggingEmailAddress">Email Address</label>
                                    <input v-model="form.email" id="LoggingEmailAddress" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-4 focus:outline-none focus:ring focus:ring-blue-300" type="email" required autofocus autocomplete="email" />

                                </div>
                                <div class="mt-4">
                                    <label class="block mb-2 text-sm font-medium text-gray-600" for="LoggingEmailAddress">State</label>
                                    <input v-model="form.state" id="LoggingEmailAddress" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-4 focus:outline-none focus:ring focus:ring-blue-300" type="text" required autofocus autocomplete="state" />

                                </div>
                                <div class="mt-4">
                                    <label class="block mb-2 text-sm font-medium text-gray-600" for="LoggingEmailAddress">Address</label>
                                    <input v-model="form.address" id="LoggingEmailAddress" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-4 focus:outline-none focus:ring focus:ring-blue-300" type="text" required autofocus autocomplete="address" />
                                </div>

                                <div class="mt-4">
                                    <label class="block mb-2 text-sm font-medium text-gray-600" for="LoggingEmailAddress">Phone Number</label>
                                    <input v-model="form.phone_number" id="LoggingEmailAddress" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-4 focus:outline-none focus:ring focus:ring-blue-300" type="tel" required autofocus autocomplete="phone_number" />

                                </div>
                                <div class="mt-4">
                                    <label class="block mb-2 text-sm font-medium text-gray-600" for="LoggingEmailAddress">Role</label>
                                    <select v-model="form.role" name="" id="" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-4 focus:outline-none focus:ring focus:ring-blue-300">
                                        <option selected disabled>Select User Role</option>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>

                                </div>
                                <div class="mt-4">
                                    <label class="block mb-2 text-sm font-medium text-gray-600" for="LoggingEmailAddress">Status</label>
                                    <select v-model="form.status" name="" id="" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-4 focus:outline-none focus:ring focus:ring-blue-300">
                                        <option selected disabled>Select User Role</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>

                                </div>

                                <div class="mt-4">
                                    <div class="flex justify-between">
                                        <label class="block mb-2 text-sm font-medium text-gray-600" for="loggingPassword">Password</label>
                                    </div>

                                    <input v-model="form.password" id="loggingPassword" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" autofocus autocomplete="password" />

                                </div>
                                <div class="mt-4">
                                    <div class="flex justify-between">
                                        <label class="block mb-2 text-sm font-medium text-gray-600" for="loggingConfirmPassword">Confirm Password</label>
                                    </div>

                                    <input v-model="form.password_confirmation" id="loggingConfirmPassword" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" />

                                </div>

                            </div>

                        </div>
                    </div>

                    <!-- Modal footer with buttons -->
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <!-- Save/Update button -->
                        <button type="submit" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-cyan-600 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:ml-3 sm:w-auto sm:text-sm">
                            {{ isAddMode ? 'Add User' : 'Save' }}
                        </button>

                        <!-- Cancel button -->
                        <button type="button" @click="isModalOpen = false" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>

                </form>

            </div>
        </div>

    </div>
</AuthenticatedLayout>
</template>

<script>
import LoadingSpinner from "@/Components/loader.vue";
import InputError from "@/Components/InputError.vue";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {
    Head,
    Link,
    useForm
} from "@inertiajs/vue3";
import axios from 'axios';

export default {
    components: {
        InputError,
        useForm,
        LoadingSpinner,
        AuthenticatedLayout
    },
    created() {
        this.loadUsers();
    },
    data() {
        return {
            recentlySuccessful: null,
            users: null,
            form: {
                last_name: '',
                first_name: '',
                email: '',
                state: '',
                role: '',
                status: '',
                address: '',
                phone_number: '',
                password: '',
                password_confirmation: '',
            },
            isModalOpen: false, // Flag to control modal visibility
            isEditMode: false, // Flag to indicate if editing mode is active
            isAddMode: false, // Flag to indicate if adding mode is active
            editedUser: {}, // Object to store edited user details
            newUser: {}, // Object to store new user details
            isLoading: true, // Add a loading state flag
        };
    },
    methods: {
        deleteUser(userId) {
            // Remove the user with the given ID
            axios.delete(route('user-delete', userId)).then((response) => {
                if (response.status == 200) {
                    this.loadUsers();
                    this.recentlySuccessful = response.data.message;

                }
            })
        },
        // Open modal for editing user
        editUserModal(user) {
            this.form = null;
            this.isEditMode = true;
            this.isAddMode = false;
            this.form = user;
            this.isModalOpen = true;
        },
        // Open modal for adding user
        addUserModal() {
            this.form = {};
            this.isAddMode = true;
            this.isEditMode = false;
            this.isModalOpen = true;
        },
        submit() {
            if (this.isAddMode) {
                this.addUser();
            } else if (this.isEditMode) {
                this.editUser();
            }
        },
        addUser() {
            // Perform add user action (API call or form submission)
            axios.post(route('user.store'), this.form).then((response) => {
                if (response.status == 200) {
                    this.loadUsers();
                    this.recentlySuccessful = response.data.message;
                    this.isModalOpen = false;
                }
            });
        },
        editUser() {
            // Perform edit user action (API call or form submission)
            axios.put(route('user.update', this.form.id), this.form).then((response) => {
                if (response.status == 200) {
                    this.loadUsers();
                    this.recentlySuccessful = response.data.message;
                    this.isModalOpen = false;
                }
            });
        },
        loadUsers() {
            this.isLoading = true; // Set loading state to true
            axios.get(route('load-users')).then((response) => {
                this.users = response.data.users;
                this.form = {};
                this.isLoading = false; // Set loading state to false once data is loaded
            });
        },
    },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
