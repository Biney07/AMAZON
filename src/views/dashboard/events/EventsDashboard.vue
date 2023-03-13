<template>

    <div class="form-group mt-4">
        <label for="search">Kerko:</label>
        <input type="text" v-model="searchQuery" id="search" class="form-control w-50 m-auto" placeholder="Kerko...">
    </div>
        <div class="float-start" style="margin-left:47px; margin-top:6px;">
            <a><router-link class="btn btn-success" to="/dashboard/events/create">Krijo</router-link></a>
          
        </div>
        <div class="m-5">
                <div class="table-responsive">
                    <table class="table">
                        <thead class="table-info">
                            <tr>
                                <th>Titulli</th>
                                <th>Pershkrimi</th>
                                <th>Foto</th>
                                <th>Lokacioni</th>
                                <th>Koha e fillimit</th>
                                <th>Data</th>
                           
                                <th>Veprime</th>
                                <th></th>
    
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="event in this.paginatedEvents" :key="event._id">
                                <td>{{ event.title}}</td>
                                <td>{{ event.description }}</td>
                                <td>{{ event.photo }}</td>
                                <td>{{ event.location }}</td>
                                <td>{{ event.starttime }}</td>
                                <td>{{ event.date }}</td>
                               
                                <td><button class="btn btn-sm btn-success"><router-link class="btn-success" :to="`/dashboard/event/edit/${event._id}`" >Edit</router-link></button> </td>
                                <td><button class="btn btn-sm btn-danger" @click="handleDeleteEvent(event._id)">Delete</button></td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="text-center">
                  <button class="btn btn-success" :disabled="currentPage === 1" @click="currentPage--">Previous</button>
                 <span v-for="pageNumber in totalPages" :key="pageNumber">
                   <button class="btn btn-success" :class="{ active: pageNumber === currentPage }" @click="currentPage = pageNumber">{{ pageNumber }}</button>
                 </span>
                <button class="btn btn-success" :disabled="currentPage === totalPages" @click="currentPage++">Next</button>
               </div>
            </div>
    </template> 
    
    
    <script>
    import { mapState } from 'vuex';
    
    export default {
        data() {
            return {
            currentPage: 1,
            searchQuery: ''
        }
            },
        computed: {
                ...mapState(['events']),
                pageSize() {
            return 5
        },
        filteredEvents() {
      return this.events.filter(event => {
        return event.title.toString().includes(this.searchQuery.toLowerCase());
      });
    },
    totalPages() {
            return Math.ceil(this.filteredEvents.length / this.pageSize)
        },
        paginatedEvents() {
            const startIndex = (this.currentPage - 1) * this.pageSize
            const endIndex = startIndex + this.pageSize
            return this.filteredEvents.slice(startIndex, endIndex)
        },
            },
            mounted() {
                this.$store.dispatch('fetchEvents');
            },
      methods: {

      }
    };
    </script>