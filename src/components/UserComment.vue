<template>

    <div class="card bg-dark text-white">
        <img :src="require(`@/assets/${filename}`)" class="card-img img-fluid" style="height:40rem; object-fit: cover;"
            alt="...">
        <div class="card-img-overlay d-flex justify-content-center flex-column">
            <h1 class="card-title title" contenteditable>Tradita Vazhdon</h1>
            <div class="comment" style="width:700px;">
            <h5 class="card-text" >{{ Comment }}</h5>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        filename: String,
        Comment: String,
    }
}
</script>
<style>
.title {


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

.title:hover {
    font-variation-settings: "wght" 582;
    letter-spacing: 1px;
}

@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@300;500&display=swap');
</style>