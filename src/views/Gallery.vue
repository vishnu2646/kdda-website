<template>
  <div>
      <Navigation/>
      <br>
        <div>
            <div class="container mt-5">
                <h4 data-toggle="modal" data-target="#exampleModal">Photos Title</h4>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <h3>cbishcb</h3>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <h6>1.<a href="/gallery1.html" class="text">Ngo-10th July 2015</a></h6> -->
                <h6>1.<router-link class="link1" to="/gallerypictures">Ngo-10th July 2015</router-link></h6>
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
    name:"gallery",
    components: { 
        Navigation, 
        Footer 
    },
}
</script>

<style scoped>
.link1{
    color:rgb(255, 2, 44);text-decoration:none;
}
</style>