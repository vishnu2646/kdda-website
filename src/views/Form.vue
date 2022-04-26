<template>
    <div>
        <Navigation/>
            <div class="container mt-5 p-4">
                <form class="form">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="title"
                            placeholder="Enter Title"
                        />
                    </div>
                    <div class="form-group">
                        <label for="images">Select Your Images</label>
                        <input type="file" multiple class="form-control-file" id="images">
                    </div>
                    <button class="btn btn-block btn-info">Upload Data</button>
                </form>
            </div>
        <Footer/>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'

export default {
    components: { 
        Navigation,
        Footer
    },
}
</script>

<style>
    
</style>