<template>
    <div class="card  text-white" style="border: none; border-radius: 0;">
       <div class="card-img-wrapper">
      <img :src="require(`@/assets/${filename}`)" class="card-img img-fluid" alt="..." style="height:50rem; object-fit: cover;">
    </div>
        <div class="card-img-overlay d-flex justify-content-center align-items-center flex-column">
            <h1 class="card-title title custom-title" >Tradita Vazhdon</h1>
            <div class="comment" style="width:900px;">
                <h5 class="card-text text-center">{{ Comment }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        filename: String,
        Comment: String,
    },
};
</script>

<style>
.custom-title {
    font-size: 120px;
    text-transform: uppercase;
    font-family: 'Gambetta', serif;
    letter-spacing: -3px;
    transition: 700ms ease;
    font-variation-settings: "wght" 311;
    margin-bottom: 0.8rem;
    color: PaleGoldenRod;
    outline: none;
    text-align: center;
}

.custom-title:hover {
    font-variation-settings: "wght" 582;
    letter-spacing: 1px;
}

.card-img-overlay {
    border: none;
}

.card-text {
    text-align: center;
}
.card-img-wrapper {
  position: relative;
}

.card-img-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
}
</style>
