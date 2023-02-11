<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a href="/"><img class="logo" src="./../../assets/logo.png" alt="logo" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <div class="d-flex flex-row">
                    <ul class="navbar-nav">



                        <li class="nav-item"><a class="text-decoration-none nav-link costum active" aria-current="page">
                                <router-link class="costum" to="/">Home</router-link></a></li>
                        <li class="nav-item"><a class=" nav-link costum active" aria-current="page"><router-link
                                    class="costum" to="/about">About</router-link></a></li>
                        <li class="nav-item"><a class=" nav-link costum active" aria-current="page"><router-link
                                    class="costum" to="/aktivitete">Aktivitete</router-link></a></li>
                        <li class="nav-item"> <a class=" nav-link costum active" aria-current="page"><router-link
                                    class="costum" to="/menute">Menutë</router-link></a></li>
                        <li class="nav-item"> <a class=" nav-link costum active" aria-current="page"><router-link
                                    class="costum" to="/contact">Contact</router-link></a></li>
                        <li class="nav-item"> <a class=" nav-link costum active" aria-current="page"><router-link
                                    class="costum" to="/restaurantdasmat">Dasmat</router-link></a></li>
                        <li class=" ms-auto nav-item d-flex"> <a class=" nav-link costum active"
                                aria-current="page"><router-link class="costum" to="/login">Login</router-link></a></li>
                        <li class="ms-auto nav-item d-flex"> <a class=" nav-link costum active"
                                aria-current="page"><router-link class="costum" to="/dashboard">Dashboard</router-link></a></li>

                    </ul>
                </div>

            </div>
        </div>
    </nav>
    <!-- <div class="headd">
       
        <header>
       
   
            <ul>
               
            </ul>
     
    </header>
    </div> -->

</template>


<style>
.logo {

    height: 50px;
    padding: 0px 30px 0px 30px;
    margin-top: 5px;
    margin-bottom: 5px;

}

.costum {
    text-decoration: none !important;
    font-size: 1.3rem !important;
    font-weight: 600 !important;
}
</style>