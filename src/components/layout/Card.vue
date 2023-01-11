<template>
    <div class="card" style="width: 18rem;">
        <img src="../../assets/Amazon.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            <RouterLink to="/" v-on:click="countaddone()" class="btn btn-primary">Go somewhere</RouterLink>
        </div>
        <h2>eshte shtypur {{ count }} here</h2>
    </div>
</template>
<script>


export default {
    data() {
        return {
            count: 0
        }


    },
    methods: {
        getAlbin() {
            alert("button just clicked");
        },
        countaddone() {
            this.count++;
        }
    }
}

</script>
