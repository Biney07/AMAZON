<template>
    <div class="container py-4 w-50">
  <h2 style="color:rgba(126, 239, 104, 0.8);">Krijo Restaurantet e Dasmave</h2>
  <form id="contactForm" v-on:submit.prevent="handleCreateDasmat">

    <div class="mb-3">
      <label class="form-label" for="name">Emri</label>
      <input class="form-control" minlength="4" maxlength="100"
                v-model="newCreateDasmat.emri" type="text" placeholder="Emri" required />
    </div>

    <div class="mb-3">
      <label class="form-label" for="Qyteti">Qyteti</label>
        <select id="Qyteti" v-model="selectedQyteti" v-bind:value="newCreateDasmat.qyteti" v-on:input="newCreateDasmat.qyteti = $event.target.value">
          <option v-for="qy in Qytetet" :value="qy.name" :key="qy.name">{{ qy.name }}</option>
        </select>
    </div>

    <div class="mb-3">
      <label class="form-label" for="Address">Adresa</label>
      <input class="form-control" minlength="6" maxlength="200"
                v-model="newCreateDasmat.adresa" type="text" placeholder="Adresa" required />
    </div>

    <div class="mb-3">
        <label for="foto" class="form-label">Foto</label>
        <input type="file" name="foto" v-on:change="onFileChange" class="form-control" id="foto" accept="image/*">
      </div>

    <div class="d-grid mt-4">
      <button class="btn btn-lg" id="submitButton" type="submit">Krijo</button>
    </div>

  </form>

</div>
</template> 


<script>
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const storage = getStorage();

export default {
        data() {
            return {
                newCreateDasmat: {
                    emri: '',
                    qyteti: '',
                    adresa: '',
                    foto: ''
                },
                allDasmats: this.$store.state.dasmats,
                Qytetet: [
                    { name: 'Podujeve' },
                    { name: 'Prishtina' },
                    { name: 'Prizren' },
                    { name: 'Gjilan' },
                    { name: 'Peje'},
                    { name: 'Gjakove'},
                    { name: 'Ferizaj'},
                    { name: 'Mitrovic'},
                ],
                selectedQyteti: ''
            } 
        },
        methods: {
            onFileChange(event) {
              this.newCreateDasmat.foto = event.target.files[0];
            },
            async handleCreateDasmat() {
              const storageRef = ref(storage, 'images/' + this.newCreateDasmat.foto.name);
              const uploadTask = uploadBytesResumable(storageRef, this.newCreateDasmat.foto);
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
            },
            async () => {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

              this.newCreateDasmat.foto = downloadURL;

              this.$store.dispatch("createDasmat", { ...this.newCreateDasmat });

              this.newCreateDasmat = {
                emri: '',
                qyteti: '',
                adresa: '',
                foto: ''
              };
        }
      );
    },
  },
};
</script>


<style scoped>
  button, .info{
    background-color: rgba(126, 239, 104, 0.8);
    color: white;
  }
  button:hover{
    background-color: rgba(95, 214, 71, 0.8);
    color: black;
  }
  .info:hover{
    background-color: rgba(95, 214, 71, 0.8);
    color: black;
  }
  input{
    border-color: rgba(126, 239, 104, 0.8);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6);
  }

  select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  border: none;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(126, 239, 104, 0.8);
}

select:focus {
  outline: none;
  box-shadow: 0 2px 3px rgba(126, 239, 104, 0.8);
}

select option {
  font-size: 16px;
  background-color: white;
  color: black;
}

select option:hover {
  background-color: rgba(126, 239, 104, 0.8);
}

select option:checked {
  background-color: rgba(126, 239, 104, 0.8);
  color: white;
}
  </style>