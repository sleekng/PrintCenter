<template>
    <div>   
        
        <h1 class="text-center">Users</h1>
        <table class="table table-striped"> 
            <thead> </thead>
            <tbody> 
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }} {{ user.surname}}</td>
                    <td><button @click="editUser(user)" class="btn btn-primary">Edit</button></td>
                    <td><button @click="deleteUser(user.id)" class="btn btn-danger">Delete</button></td>
                </tr>    
            </tbody>      
        </table>  
        <br/><hr/>
    

    </div>
</template>

<script>

    export default {
        props: ['users'],
        methods:{
           deleteUser(userId){
               axios.delete(`http://localhost:8000/api/users/${userId}`)
               .then(()=>{
                   this.$emit('reload')
               })
           },
           editUser(user) {
              this.$emit("setUser", user);
           }
        }
        
        
    }
</script>

<style lang="scss" scoped>

</style>