<template>
<div class="d-flex flex-wrap m-4">
<div v-for="item in dashboardItems"
                v-bind:key="item.path">
   <div class="card m-4" style="width: 18rem;">
      <router-link class="card-link text-decoration-none" v-bind:to="item.path">
        <div class="card-body">
           <h5 class="card-title">{{item.name}}</h5>
           <h6 class="card-subtitle mb-2">{{item.subtitle}}</h6>
        </div>
      </router-link>
    </div>
</div>
</div>

</template>


<style>
.card{
  background-color: rgba(126, 239, 104, 0.8);
}

.card:hover{
  background-color: rgba(95, 214, 71, 0.8);
}

.card-subtitle, .card-title{
   color: rgba(49, 51, 48, 0.8);
}

.card-subtitle:hover, .card-title:hover{
   color: white;
}
</style>

<script>
    export default {
        data() {
            return {
                dashboardItems: [
                   // { path: '/dashboard/home', name: 'Home', subtitle: 'Menaxho Home' },
                    { path: '/dashboard/home', name: 'Home', subtitle: 'Menaxho Home' },
                    { path: '/dashboard/about', name: 'About Us', subtitle: 'Menaxho About' },
                    { path: '/dashboard/aktivitete', name: 'Aktivitete', subtitle: 'Menaxho Aktivitete' },
                    { path: '/dashboard/menute', name: 'Menute', subtitle: 'Menaxho Menute' },
                    { path: '/dashboard/dasmat', name: 'Dasmat', subtitle: 'Menaxho Restaurantet e Dasmave' },
                    { path: '/dashboard/contact', name: 'Contact', subtitle: 'Menaxho Contact' },
                    { path: '/dashboard/register', name: 'Register', subtitle: 'Menaxho Register' },
                ]
            }
        },
    }
</script>