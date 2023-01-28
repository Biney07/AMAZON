<template>


 <div class="container py-4 w-50">
  <h2 style="color:rgba(126, 239, 104, 0.8);">Kontakto</h2>
  <form id="contactForm" v-on:submit.prevent="handleCreateKontakt">

    <div class="mb-3">
      <label class="form-label" for="name">Emri</label>
      <input class="form-control" name="emri" v-model="newContact.emri" v-on:input="newContact.emri = $event.target.value"
                 type="text" placeholder="Emri" data-sb-validations="required" />
    </div>

    <div class="mb-3">
      <label class="form-label" for="emailAddress">Email</label>
      <input class="form-control" name="email" v-model="newContact.email" v-on:input="newContact.email = $event.target.value" type="email" placeholder="Email" data-sb-validations="required, email" />
    </div>

    <div class="col-md-12">
      <div class="form-group">
        <label class="label" for="#">Mesazhi</label>
        <textarea name="message" class="form-control" v-model="newContact.mesazhi" v-on:input="newContact.mesazhi = $event.target.value" cols="30" rows="4" placeholder="Mesazhi"></textarea>
      </div>
    </div>

    <div class="d-grid mt-4">
      <button class="btn btn-lg" id="submitButton" type="submit">Dergo</button>
    </div>

  </form>

</div>

<div class="container mt-5 mb-5">

        <div class="row justify-content-center" data-aos="fade-up">

          <div class="col-lg-10">

            <div class="info-wrap">
              <div class="row">
                <div class="col-lg-4 info shadow p-3 mb-5 rounded">
                  <h4>Lokacioni:</h4>
                  <p>Kilometrin 8-tė tė magjistrales<br>Prishtinė – Mitrovicė</p>
                </div>

                <div class="col-lg-4 info mt-4 mt-lg-0 shadow p-3 mb-5 rounded">
                  <h4>Email:</h4>
                  <p>info@amazonahotel.com</p>
                </div>

                <div class="col-lg-4 info mt-4 mt-lg-0 shadow p-3 mb-5 rounded">
                  <h4>Telefoni:</h4>
                  <p>+38344111222</p>
                </div>
              </div>
            </div>

          </div>

        </div>
</div>
  </template>

  <script>
  export default {
        data() {
            return {
                newContact: {
                    emri: '',
                    email: '',
                    mesazhi: ''
                },
                allContacts: this.$store.state.contacts,
            }
        },
        methods: {
        async handleCreateKontakt() {
            this.$store.dispatch('createContact', { ...this.newContact })
        }
    }
  }
  </script>


  <style scoped>
  .btn, .info{
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

  input, textarea{
    border-color: rgba(126, 239, 104, 0.8);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6);
  }
  </style>
  