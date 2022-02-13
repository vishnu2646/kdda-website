<template>
    <div>
        <Navigation/>
        <section class="contact-section mt-5">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="first py-2">
                            <div class="icons1">
                                <i class="fa fa-map-marker-alt" aria-hidden="true"></i>
                            </div>
                            <div class="icon1-content">
                                <h4>ADDRESS</h4>
                                <p>4578 Marmora Road, Glasgow</p>
                            </div>
                        </div>
                        <div class="first py-2">
                            <div class="icons1">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                            </div>
                            <div class="icon1-content">
                                <h4>Phone</h4>
                                <p>4578 Marmora Road, Glasgow</p>
                            </div>
                        </div>
                        <div class="first py-2">
                            <div class="icons1">
                                <i class="fa fa-fax" aria-hidden="true"></i>
                            </div>
                            <div class="icon1-content">
                                <h4>Fax</h4>
                                <p>4578 Marmora Road, Glasgow</p>
                            </div>
                        </div>
                        <div class="first py-2">
                            <div class="icons1">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <div class="icon1-content">
                                <h4>Email</h4>
                                <p>4578 Marmora Road, Glasgow</p>
                            </div>
                        </div>
                        <div class="first py-2">
                            <div class="icons1">
                                <i class="fa fa-clock" aria-hidden="true"></i>
                            </div>
                            <div class="icon1-content">
                                <h4>ADDRESS</h4>
                                <p>4578 Marmora Road, Glasgow</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="container py-5">
                            <div class="container contact">
                                <p class="contact-text text-center">Please contact our Pro <span class="name"> Mr. Suresh Babu - 9443511638 </span></p>
                                <p class="contact-text text-center">Our Translater for Deaf Sign Language Contact </p>
                                <p class="contact-text text-center"><span class="name">Mr.Jeevanantham - 9994419798</span></p>
                                <p class="contact-text text-center"> KDDA E-mail : <a href="#"><span class="name">kddahosur@gmail.com</span></a></p>
                                <p class="contact-text text-center"> KDDT E-mail : <a href="#"><span class="name">kddakddt@yahoo.com</span></a></p>
                            </div>
                            <div class="drop">
                                <h2>DROP US A LINE</h2>
                            </div>
                            <div class="form">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="text" class="form-control" placeholder="Your Name">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" placeholder="Your Email">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Comment</label>
                                        <textarea id="reason"  class="form-control" cols="30" rows="5" placeholder="Your Content"></textarea>
                                    </div>
                                    <button type="submit" class="btn2">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
    name:'contact'
}
</script>

<style scoped>

.contact-text{
    color:#000;
    font-size:20px;
}

a{
    text-decoration: none;
}

.name{
    color:#ea4c89;
}

.first{
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.icons1{
  background-color: #ffff;
  border-radius: 50%;
  border: 1px solid  #000;
  padding: 20px;
  margin: 10px;
}

.btn2{
  float: right;
  background-color: #ea4c89;
  color: #fff;
  border: 0;
}

.btn2:hover{
  background-color: #ea4c89;
  color: #fff;
}

.fa-facebook-f,.fa-twitter,.fa-linkedin{
  font-size: 20px;
}
</style>