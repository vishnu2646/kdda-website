<template>
    <div>
        <Navigation/>
        <section class="section2" id="AboutUs">
            <table>
                <tr>
                    <td>
                        <img src="https://images.unsplash.com/photo-1499083097717-a156f85f0516?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt="AboutUs">
                    </td>
                    <td>
                        <span class="title">Our Vision</span>
                        <span class="sub-title">Lorem ipsum dolor sit amet, consectetur adi</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="#OurMission" class="btn1">Our Misssion</a> <a href="" class="btn2">Know More</a>
                    </td>
                </tr>
            </table>
        </section>
        <section class="objectives-section">
            <div class="objective">
                <h1 class="text-center">Our Objectives</h1>
                <div class="line">
                    <hr class="divider-line">
                </div>
                <li> <i class="fas fa-star-of-life"></i> To Improve the Integration of Deaf,</li>
                <li> <i class="fas fa-star-of-life"></i> To Improve the Status of the Deaf, Dump in the present society</li>
                <li> <i class="fas fa-star-of-life"></i> Helping to the Deaf, to get govt facilities.</li>
                <li> <i class="fas fa-star-of-life"></i> To prove ourself (Deaf, Dump) to work as normal persons.</li>
                <li> <i class="fas fa-star-of-life"></i> To get Employment facilities to all Deaf, Dump</li>
            </div>
        </section>
        <section class="section3" id="OurMission">
            <table>
                <tr>
                    <td>
                        <span class="title">Our Mission</span>
                        <span class="sub-title">Lorem ipsum dolor sit amet, consectetur adi</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="" class="btn2">Know More</a>
                    </td>
                    <td>
                        <img src="https://images.unsplash.com/photo-1499083097717-a156f85f0516?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt="AboutUs">
                    </td>
                </tr>
            </table>
        </section>
        <Footer/>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Navigation from '../components/Navigation.vue'
export default {
    name:'objectives',
    components: { Navigation, Footer }
}
</script>

<style>

/*objectives*/

.divider-line{
    border-top-width: 4px;
    border-top-style: solid;
    border-top-color: #ea4c89;
    max-width:100%;
    width:80px;
}

.line{
    display: flex;
    justify-content: center;
}

.title{
		font-size:2em;
		color:#ea4c89;
		display:block;
}
		
.sub-title{
    font-size:0.8em;
    color:gray;
    display:block;
}
		
	.btn1{
    padding:10px 20px;
    background:transparent;
    border:1px solid #ea4c89;
    color:#ea4c89;
    border-radius:3px;
    outline:none;
    transition:0.5s;
	}
		
.btn1:hover{
    background:#ea4c89;
    color:#fff;
    text-decoration: none;
}
		
.btn2{
    padding:10px 20px;
    border-radius:3px;
    background:#1e1e1e;
    border:1px solid #1e1e1e;
    color:#fff;
    outline:none;
    transition:0.5s;
}
		
.btn2:hover{
    background:transparent;
    color:#1e1e1e;
    text-decoration: none;
}
		
.title:before{
    font-size:30px;
}
		
a{
	  text-decoration:none;
}
		
.section2,.section3{
    width:90%;
    margin:5% 0%;
    margin-left:auto;
    margin-right:auto;
}
		
.section2 table,.section3 table{
	  width:100%;
}
		
.section2 table td,.section3 table td{
	  width:50%;
}
		
.section2 table td img,.section3 table td img{
    width:80%;
    height:70%;
    margin-left:auto;
    margin-right:auto;
    box-shadow:0px 6px 16px -6px rgba(1,1,1,0.5);
}
		
.section3 table td img{
	  float:right;
}

td{
  line-height: 2.5rem;
  font-size: 20px;
}
		
		
@media (max-width:720px){
	.section2 table td, .section3 table td{
    width:100%;
    display:block;
	}
	.section3 table td img{
    float:none;
    margin-top:4%;
	}
	.section2 table td img,.section3 table td img{
    width:100%;
    height:60%;
	}
}

@media (max-width:300px){
  .section2,.section3{
    font-size:12px;
  }
  .section3 table td img{
		float:none;
		margin-top:8%;
		}
  .btn1,.btn2{
    padding:5px 10px;
  }
}

.objectives-section,.achivement-section{
  background-color: #f4f4f4;
  padding: 80px 0;
  text-align: center;
}

.objective{
  list-style: none;
  text-align: center;
  line-height: 3.5rem;
  font-size: 20px;
}

</style>