<template>
    <div class="headd">
       <a href="/"><img src="./../../assets/logo.png" alt="logo"/></a> 
        <header>
       
   
            <ul>
                <li>
                    <router-link to="/">Home</router-link></li>
                <li> <router-link to="/about">About</router-link></li>
                <li> <router-link to="/aktivitete">Aktivitete</router-link></li>
                <li> <router-link to="/menute">Menutë</router-link></li>
                <li> <router-link to="/contact">Contact</router-link></li>
                <li> <router-link to="/login">Login</router-link></li>
            </ul>
     
    </header>
    </div>
   
</template>


<style>
.headd{
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color:#ffa726;
    height: 60px;
}
img{
   
    width: 50px;
    height: 50px;
    padding-left: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    
}
header{

   width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    

}

ul{
    width:600px;
   margin-top: 15px;
   margin-bottom: 10px;
   margin-bottom: 10px;
   font-size: 21px;
   font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
   

}
li a{
    text-decoration: none;
    color :inherit;
}
</style>