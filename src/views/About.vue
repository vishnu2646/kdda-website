<template>
  <div>
    <Navigation />
    <section class="about-section">
      <div class="container">
        <h2>WE ARE KDDA/KDDT:</h2>
        <hr
          style="max-width:100%;width:80px;border-top-width: 4px;border-top-style: solid;border-top-color: #ea4c89;"
        />
        <p>Some of the tasks that we successfully completed:</p>
        <p>
          The KDDA has a special feature such that the same type of Association
          was near started in India until KDDA born at Mathigiri which is animal
          Live stock (Cattle form) a famous place for Cattles.
        </p>
        <p>
          The association is running in a own building of 3500 Sqft the building
          build with the help of Deaf and Dum members and Public contributions.
          At present the KDDA consists 350 members.
        </p>
        <p>
          The KDDA build a Wooden Shuttle court to play in the same premises to
          encourage the fitteness of the body, irrespective of Age who interest
          in play, body fitteness. The court was maintained by Titan Town Ship
          Badminton Club located a Titan Town Ship
        </p>
        <p>
          The TTBC encourages the children to play shuttle cock and giving
          coaching to get best training and practice.
        </p>
        <p>
          The same place can be used for multipurpose such as Marriages,
          Meetings ,Birthday parties etc with appreciate permission from KDDA.
        </p>
      </div>
    </section>
    <section class="advantages-section">
      <div class="advantages">
        <div class="advantages-title mb-2 py-5">
          <h1>OUR ADVANTAGES</h1>
        </div>
        <div class="container py-3">
          <div class="row">
            <div class="col-md-3">
              <div class="content1">
                <div class="advantages-content">
                  <div class="icon">
                    <i class="fa fa-user"></i>
                  </div>
                  <div class="icon-content">
                    <h4>ACCOUNTABLE</h4>
                    <p>
                      For those concerned about the accountability, we've been
                      rated the most transparent in our field!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="content1">
                <div class="advantages-content">
                  <div class="icon">
                    <i class="fa fa-user"></i>
                  </div>
                  <div class="icon-content">
                    <h4>EXPERIENCED</h4>
                    <p>
                      Founded back in 1923, we're slowly but surely approaching
                      the centenary of our charity organization!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="content1">
                <div class="advantages-content">
                  <div class="icon">
                    <i class="fa fa-user"></i>
                  </div>
                  <div class="icon-content">
                    <h4>COMPASSIONATE</h4>
                    <p>
                      We are just like any other major charity organization in
                      the world - trying to help everyone!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="content1">
                <div class="advantages-content">
                  <div class="icon">
                    <i class="fa fa-user"></i>
                  </div>
                  <div class="icon-content">
                    <h4>WORLDWIDE</h4>
                    <p>
                      Our charity action tank is present with a strong foothold
                      in all countries of the world, from Nauru to Djibouti!!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="testimonials-clean">
      <div class="container">
        <div class="intro">
          <h2 class="text-center">Testimonials</h2>
          <p class="text-center">
            Our customers love us! Read what they have to say below. Aliquam sed
            justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
          </p>
        </div>
        <div class="row people">
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <p class="description">
                Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                finibus est.
              </p>
            </div>
            <div class="author">
              <img
                class="rounded-circle"
                src="https://i.imgur.com/nUNhspp.jpg"
              />
              <h5 class="name">Ben Johnson</h5>
              <p class="title">CEO of Company Inc.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <p class="description">
                Praesent aliquam in tellus eu gravida. Aliquam varius finibus
                est, et interdum justo suscipit id.
              </p>
            </div>
            <div class="author">
              <img
                class="rounded-circle"
                src="https://i.imgur.com/o5uMfKo.jpg"
              />
              <h5 class="name">Carl Kent</h5>
              <p class="title">Founder of Style Co.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <p class="description">
                Aliquam varius finibus est, et interdum justo suscipit.
                Vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam
                in tellus eu.
              </p>
            </div>
            <div class="author">
              <img
                class="rounded-circle"
                src="https://i.imgur.com/At1IG6H.png"
              />
              <h5 class="name">Emily Clark</h5>
              <p class="title">Owner of Creative Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navigation from "../components/Navigation.vue";
export default {
  name: "about",
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style scoped>
.about-section {
  padding: 80px 0;
}

.abt-img {
  height: 400px;
}

.advantages-section {
  width: 100%;
  text-align: center;
  background-color: #000000;
}

.advantages {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://template68252.motopreview.com/mt-demo/68200/68252/mt-content/uploads/2018/08/mt-1387-about-bg-2.jpg);
  background-position: center;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.content1 {
  padding: 10px;
}

.fa-user {
  background-color: #ea4c89;
  color: #fff;
  padding: 30px;
  border-radius: 50%;
}
/*testimonials*/
.testimonials-clean {
  color: #313437;
  background-color: #f5f5f5;
}

.testimonials-clean p {
  color: #7d8285;
}

.testimonials-clean h2 {
  font-weight: bold;
  margin-bottom: 40px;
  padding-top: 40px;
  color: inherit;
}

@media (max-width: 767px) {
  .testimonials-clean h2 {
    margin-bottom: 25px;
    padding-top: 25px;
    font-size: 24px;
  }
}

.testimonials-clean .intro {
  font-size: 16px;
  max-width: 500px;
  margin: 0 auto;
}

.testimonials-clean .intro p {
  margin-bottom: 0;
}

.testimonials-clean .people {
  padding: 50px 0 20px;
}

.testimonials-clean .item {
  margin-bottom: 32px;
}

@media (min-width: 768px) {
  .testimonials-clean .item {
    height: 220px;
  }
}

.testimonials-clean .item .box {
  padding: 30px;
  background-color: #fff;
  position: relative;
}

.testimonials-clean .item .box:after {
  content: "";
  position: absolute;
  left: 30px;
  bottom: -24px;
  width: 0;
  height: 0;
  border: 15px solid transparent;
  border-width: 12px 15px;
  border-top-color: #fff;
}

.testimonials-clean .item .author {
  margin-top: 28px;
  padding-left: 25px;
}

.testimonials-clean .item .name {
  font-weight: bold;
  margin-bottom: 2px;
  color: inherit;
}

.testimonials-clean .item .title {
  font-size: 13px;
  color: #9da9ae;
}

.testimonials-clean .item .description {
  font-size: 15px;
  margin-bottom: 0;
}

.testimonials-clean .item img {
  max-width: 40px;
  float: left;
  margin-right: 12px;
  margin-top: -5px;
}
</style>
