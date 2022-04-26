<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <a href="/" class="navlogo">
          <img
            src="../assets/association.jpeg"
            width="80"
            height="80"
            class="imglogo"
            alt="logo"
          />
        </a>
      </div>
      <div class="logo">
        <a href="/" class="navlogo">
          <img
            src="../assets/trust1.jpeg"
            width="80"
            height="80"
            class="imglogo"
            alt="logo"
          />
        </a>
      </div>
      <ul class="main-nav">
        <li><router-link class="navlink" to="/">Home</router-link></li>
        <li>
          <router-link class="navlink" to="/objectives">Objectives</router-link>
        </li>
        <li>
          <router-link class="navlink" to="/achivements"
            >Achivements</router-link
          >
        </li>
        <li><router-link class="navlink" to="/about">About</router-link></li>
        <li>
          <router-link class="navlink" to="/gallery">Gallery</router-link>
        </li>
        <li>
          <router-link class="navlink" to="/contact">Contact</router-link>
        </li>
      </ul>
      <span
        class="mobile-nav"
        style="font-size:30px;cursor:pointer;color:#000;"
        v-on:click="openNav"
        >&#9776;</span
      >
    </div>
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav"
        >&times;</a
      >
      <router-link class="navlink" to="/">Home</router-link>
      <router-link class="navlink" to="/objectives">Objectives</router-link>
      <router-link class="navlink" to="/achivements">Achivements</router-link>
      <router-link class="navlink" to="/about">About</router-link>
      <router-link class="navlink" to="/gallery">Gallery</router-link>
      <router-link class="navlink" to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigation",
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Yomogi&display=swap");
.btn a:hover {
  text-decoration: none;
}

.navbar {
  height: 80px;
  box-shadow: 0px 0px 25px 0 rgb(0 0 0 / 8%);
  z-index: 1000;
  background-color: #ffffff;
}

.main-nav {
  list-style: none;
  display: flex;
  /* justify-content: flex-end;
  align-items: center; */
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 0 0 0px;
}

.navlink {
  margin: 25px;
  text-decoration: none;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.658);
}

.logo {
  padding: 15px 5px;
  background-color: #fff;
  box-shadow: 2px 1px 9px rgb(0 0 0 / 30%);
  border-radius: 0 0 15px 15px;
  margin-bottom: -70px;
  width: 100px;
  margin-top: 10px;
}

.imglogo {
  margin: 5px;
}

.navlogo {
  text-decoration: none;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.781);
}

.navlink:hover,
.navlogo:hover {
  text-decoration: none;
  color: black;
}

.navbar-toggler {
  background-color: black;
}

.mobile-nav {
  display: none;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #ea4c89;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  box-shadow: 0px 0px 25px 0 rgb(0 0 0 / 8%);
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #fff;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #000;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}

@media (max-width: 770px) {
  .navlink {
    display: none;
  }
  .mobile-nav,
  .logo {
    display: block;
  }
  .closebtn:hover {
    text-decoration: none;
  }
  .header-social-links {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
</style>
