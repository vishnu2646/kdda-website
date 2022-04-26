<template>
    <div>
        <Navigation/>
        <br>
            <div class="container-fluid fade-in mt-5">
                <div class="container">
                    <div class="back"><router-link class="link1" to="/gallery"><i class="fas fa-arrow-left"></i> back</router-link></div>
                </div>
                <h3 class="text-center">Pictures</h3>
                <div class="pic">
                    <img v-for="image of gallery" :key="image.id" :src="image" class="img-fluid">
                </div>
            </div>
            <br>
        <Footer/>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Navigation from '../components/Navigation.vue'
import axios from 'axios'
export default {
    name:'gallerydetail',
    components: { 
        Navigation, 
        Footer 
    },
    data(){
        return{
            id:this.$route.params.id,
            gallery:[]
        }
    },
    async created(){
        const response = await axios.get(`http://localhost:8000/api/event-detail/${this.id}/`);
        this.gallery = response.data.images
    }
}
</script>

<style scoped>
    
img {
    margin: 20px;
    width: 250px;
    height: 250px;           
}

.pic{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.container-fluid > .container{
    cursor: pointer;
}

.link1{
    text-decoration: none;
    color: black;
}
</style>