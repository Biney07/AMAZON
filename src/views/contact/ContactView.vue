<template>


 <div class="container py-4 w-25">
  <h2 style="color:green;">Kontakto</h2>
  <form id="contactForm">

    <div class="mb-3">
      <label class="form-label" for="name">Emri</label>
      <input class="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
    </div>

    <div class="mb-3">
      <label class="form-label" for="emailAddress">Email</label>
      <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required, email" />
    </div>

    <div class="col-md-12">
      <div class="form-group">
        <label class="label" for="#">Message</label>
        <textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
      </div>
    </div>

    <div class="d-grid mt-4">
      <button class="btn btn-primary btn-lg" style="background-color:green" id="submitButton" type="submit">Submit</button>
    </div>

  </form>

</div>

<div class="container mt-5 mb-5">

        <div class="row justify-content-center" data-aos="fade-up">

          <div class="col-lg-10">

            <div class="info-wrap">
              <div class="row">
                <div class="col-lg-4 info shadow p-3 mb-5 bg-white rounded">
                  <h4>Lokacioni:</h4>
                  <p>Kilometrin 8-tė tė magjistrales<br>Prishtinė – Mitrovicė</p>
                </div>

                <div class="col-lg-4 info mt-4 mt-lg-0 shadow p-3 mb-5 bg-white rounded">
                  <h4>Email:</h4>
                  <p>info@amazonahotel.com</p>
                </div>

                <div class="col-lg-4 info mt-4 mt-lg-0 shadow p-3 mb-5 bg-white rounded">
                  <h4>Telefoni:</h4>
                  <p>+38344111222</p>
                </div>
              </div>
            </div>

          </div>

        </div>
</div>
  </template>


  <style>
  .rounded:hover{
    color: rgba(126, 239, 104, 0.8);
    cursor: pointer;
  }

  input, textarea{
    border-color: rgba(126, 239, 104, 0.8);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6);
  }
  </style>
  