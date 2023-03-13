<template>
    <h1>Events Dashboard</h1>

  
    <form style="margin: auto;
  width: 40%;
 text-align: start; padding: 10px;" id="eventForm" v-on:submit.prevent="handleCreateEvent">
  <div class="mb-3">
    <label for="title" class="form-label">Titulli</label>
    <input type="text" name="title" v-model="newEvent.title" v-on:input="newEvent.title = $event.target.value" class="form-control" id="title" >
   
  </div>
  <div class="mb-3">
    <label for="description" class="form-label">Pershkrimi</label>
    <textarea type="text" name="description" v-model="newEvent.description" v-on:input="newEvent.description = $event.target.value"  class="form-control" id="description" ></textarea>
   
  </div>


  <div class="mb-3">
    <label for="photo" class="form-label">Foto</label>
    <input type="file" name="photo" v-on:change="onFileChange" class="form-control" id="photo" accept="image/*">
   
  </div>
  <div class="mb-3">
    <label for="location" class="form-label">Lokacioni</label>
    <input type="text" name="title" v-model="newEvent.location" v-on:input="newEvent.location = $event.target.value" class="form-control" id="location" >
   
  </div>
  <div class="mb-3">
    <label for="starttime" class="form-label">Koha e fillimit</label>
    <input type="text" name="title" v-model="newEvent.starttime" v-on:input="newEvent.starttime = $event.target.value" class="form-control" id="starttime" >
   
  </div>
  <div class="mb-3">
  <label for="date" class="form-label">Data</label>
  <input type="date" name="date" v-model="newEvent.date" v-on:input="newEvent.date = $event.target.value" class="form-control" id="date">
</div>

  

  <div class=" mt-4">
      <button class="btn btn-lg btn-primary" id="submitButton" type="submit">Ruaj</button>
    </div>
</form>
</template>

<script>
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const storage = getStorage();
export default {
  data() {
    return {
      newEvent: {
        title: '',
        description: '',
        photo: '',
        location: '',
        starttime: '',
        date: '',
        
      },
      allEvents: this.$store.state.events,
    }
  },
  methods: {
    onFileChange(event) {
      this.newEvent.photo = event.target.files[0];
      
    },
    async handleCreateEvent() {
      console.log(this.newEvent.photo ? this.newEvent.photo.name : "No photo");

      
      const storageRef = ref(storage, 'images/' + this.newEvent.photo.name);
      const uploadTask = uploadBytesResumable(storageRef, this.newEvent.photo);
 

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          console.error(error);
        }
      );

    
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          
          console.log(downloadURL);
          this.newEvent.photo = downloadURL;
          

          this.$store.dispatch('createEvent', { ...this.newEvent });

          this.newEvent = {
            title: '',
        description: '',
        photo: '',
        location: '',
        starttime: '',
        date: '',
          };
        }
    
    },
  },
};
</script>
