<template>
    <div>
        <Navigation/>
        <br>
            <div class="container-fluid fade-in mt-5">
                <h3 class="text-center">Pictures</h3>
                <div class="row"> 
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <img src="https://www.w3schools.com/w3images/wedding.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/rocks.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/falls2.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/paris.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/nature.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/mist.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/paris.jpg"  class="img-fluid">
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <img src="https://www.w3schools.com/w3images/underwater.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/ocean.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/wedding.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/mountainskies.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/rocks.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/underwater.jpg"  class="img-fluid">
                    </div>  
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <img src="https://www.w3schools.com/w3images/wedding.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/rocks.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/falls2.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/paris.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/nature.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/mist.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/paris.jpg"  class="img-fluid">
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <img src="https://www.w3schools.com/w3images/underwater.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/ocean.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/wedding.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/mountainskies.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/rocks.jpg"  class="img-fluid">
                        <img src="https://www.w3schools.com/w3images/underwater.jpg"  class="img-fluid">
                    </div>
                </div>
            </div>
            <br>
        <Footer/>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Navigation from '../components/Navigation.vue'
export default {
    name:'gallerydetail',
    components: { 
        Navigation, 
        Footer 
    },

}
</script>

<style scoped>
.row > div {
    padding: 0 4px !important;
}
    
img {
    margin-top: 8px;
    vertical-align: middle;
            
}
</style>