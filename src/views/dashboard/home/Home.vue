<template>
    <h1>Home Dashboard</h1>

  
    <form style="margin: auto;
  width: 40%;
 text-align: start;
  padding: 10px;" id="dhomaForm" v-on:submit.prevent="handleCreateDhome">
  <div class="mb-3">
    <label for="numri" class="form-label">Numri</label>
    <input type="number" name="numri" v-model="newDhome.numri" v-on:input="newDhome.numri = $event.target.value" class="form-control" id="numri" >
   
  </div>
  <div class="mb-3">
    <label for="pershkrimi" class="form-label">Pershkrimi</label>
    <textarea type="text" name="numri" v-model="newDhome.pershkrimi" v-on:input="newDhome.pershkrimi = $event.target.value"  class="form-control" id="pershkrimi" ></textarea>
   
  </div>


  <div class="mb-3">
    <label for="foto1" class="form-label">Foto 1</label>
   <!-- <input type="text" name="foto1" v-model="newDhome.foto1" v-on:input="newDhome.foto1 = $event.target.value"  class="form-control" id="foto1" >-->
    <input type="file" name="foto1" v-on:change="onFileChange" class="form-control" id="foto1" accept="image/*">
   
  </div>
  <div class="mb-3">
    <label for="foto2" class="form-label">Foto 2</label>
   <!-- <input type="text" name="numri" v-model="newDhome.foto2" v-on:input="newDhome.foto2 = $event.target.value" class="form-control" id="foto2" >-->
   <input type="file" name="foto2" v-on:change="onFileChange" class="form-control" id="foto2" accept="image/*">
   
  </div>
  <div class="mb-3">
    <label for="foto3" class="form-label">Foto 3</label>
   <!-- <input type="text" name="numri" v-model="newDhome.foto3" v-on:input="newDhome.foto3 = $event.target.value"  class="form-control" id="foto3" >-->
   <input type="file" name="foto3" v-on:change="onFileChange" class="form-control" id="foto3" accept="image/*">
   
  </div>
  <div class="mb-3">
    <label for="cmimi" class="form-label">Cmimi</label>
    <input type="number" name="numri" v-model="newDhome.cmimi" v-on:input="newDhome.cmimi = $event.target.value"  class="form-control" id="cmimi" >
   
  </div>

  <div class="mb-3 form-check">
      <input
        type="checkbox"
        name="statusi"
        v-model="newDhome.statusi"
        class="form-check-input"
        id="statusi"
      />
      <label class="form-check-label" for="statusi">E lirë</label>
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
      newDhome: {
        numri: '',
        pershkrimi: '',
        foto1: '',
        foto2: '',
        foto3: '',
        cmimi: '',
        statusi: false,
      },
      allDhomat: this.$store.state.dhomat,
    }
  },
  methods: {
    onFileChange(event) {
      this.newDhome.foto1 = event.target.files[0];
      this.newDhome.foto2 = event.target.files[0];
      this.newDhome.foto3 = event.target.files[0];
    },
    async handleCreateDhome() {
      console.log(this.newDhome.foto1 ? this.newDhome.foto1.name : "No foto1");
      console.log(this.newDhome.foto2 ? this.newDhome.foto2.name : "No foto2");
      console.log(this.newDhome.foto3 ? this.newDhome.foto3.name : "No foto3");
      
      const storageRef1 = ref(storage, 'images/' + this.newDhome.foto1.name);
      const uploadTask1 = uploadBytesResumable(storageRef1, this.newDhome.foto1);
      const storageRef2 = ref(storage, 'images/' + this.newDhome.foto2.name);
      const uploadTask2 = uploadBytesResumable(storageRef2, this.newDhome.foto2);
      const storageRef3 = ref(storage, 'images/' + this.newDhome.foto3.name);
      const uploadTask3 = uploadBytesResumable(storageRef3, this.newDhome.foto3);

      uploadTask1.on('state_changed',
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

      uploadTask2.on('state_changed',
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

      uploadTask3.on('state_changed',
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
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask1.snapshot.ref);
          const downloadURL2 = await getDownloadURL(uploadTask2.snapshot.ref);
          const downloadURL3 = await getDownloadURL(uploadTask3.snapshot.ref);
          console.log(downloadURL);
          this.newDhome.foto1 = downloadURL;
          this.newDhome.foto2 = downloadURL2;
          this.newDhome.foto3 = downloadURL3;

          this.$store.dispatch('createDhoma', { ...this.newDhome });

          this.newDhome = {
            numri: '',
            pershkrimi: '',
            foto1: '',
            foto2: '',
            foto3: '',
            cmimi: '',
            statusi: false,
          };
        }
      );
    },
  },
};
</script>
