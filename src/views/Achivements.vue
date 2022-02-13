<template>
    <div>
        <Navigation/>
        <section class="achivement-section">
            <div class="achivement">
                <div class="card1">
                    <div class="card__badge">
                        <div class="card__badge-border">
                            <img src="../assets/bus.jpg" alt="transport" height="100%">
                        </div>
                    </div>
                    <div class="card__title">Achivement 1</div>
                    <div class="card__description">
                        <p>Free bus pass up to 100km in Town Buses of Tamil Nadu State Transport.</p>
                    </div>
                    <div class="card__footer">
                        <p>This card was unlocked on <time>Monday, 01.08.2016</time></p>
                    </div>
                </div>
                <div class="card1">
                    <div class="card__badge">
                        <div class="card__badge-border">
                            <img src="../assets/travel.jpg" alt="transport" height="100%">
                        </div>
                    </div>
                    <div class="card__title">Achivement 2</div>
                    <div class="card__description">
                        <p>75% Discount fare for the long distance travel at anytime / anywhere.</p>
                    </div>
                    <div class="card__footer">
                        <p>This card was unlocked on <time>Monday, 01.08.2016</time></p>
                    </div>
                </div>
                <div class="card1">
                    <div class="card__badge">
                        <div class="card__badge-border">
                            <img src="../assets/tax.jpeg" alt="transport" height="100%">
                        </div>
                    </div>
                    <div class="card__title">Achivement 3</div>
                    <div class="card__description">
                        <p>Income tax Rebate upto 100000 excluding the normal rebate 200000 total of 3lakhs.</p>
                    </div>
                    <div class="card__footer">
                        <p>This card was unlocked on <time>Monday, 01.08.2016</time></p>
                    </div>
                </div>
                <div class="card1">
                    <div class="card__badge">
                        <div class="card__badge-border">
                            <img src="../assets/help.jpg" alt="transport" height="100%">
                        </div>
                    </div>
                    <div class="card__title">Achivement 4</div>
                    <div class="card__description">
                        <p>Raising the helping hands to the both.</p>
                    </div>
                    <div class="card__footer">
                        <p>This card was unlocked on <time>Monday, 01.08.2016</time></p>
                    </div>
                </div>
                <div class="card1">
                    <div class="card__badge">
                        <div class="card__badge-border">
                            <img src="../assets/fund.jpg" alt="transport" height="100%">
                        </div>
                    </div>
                    <div class="card__title">Achivement 5</div>
                    <div class="card__description">
                        <p>Deaf, couples gets the marriage fund from the govt authorities.</p>
                    </div>
                    <div class="card__footer">
                        <p>This card was unlocked on <time>Monday, 01.08.2016</time></p>
                    </div>
                </div>
                <div class="card1">
                    <div class="card__badge">
                        <div class="card__badge-border">
                            <img src="../assets/train.jpg" alt="transport" height="100%">
                        </div>
                    </div>
                    <div class="card__title">Achivement 6</div>
                    <div class="card__description">
                        <p>50% Discount in Train fare for any Time / anywhere</p>
                    </div>
                    <div class="card__footer">
                        <p>This card was unlocked on <time>Monday, 01.08.2016</time></p>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Navigation from '../components/Navigation.vue'
export default {
  components: { Navigation, Footer },

}
</script>

<style scoped>

.card1{
	background: white;
  display: inline-block;
	border: 1px solid #eee;
	max-width: 20em;
	margin: 1em;
	padding: 1.5em;
  text-align: center;
  font-size: 20px;
}

.card__badge  img{
		max-width: 100%;
		width: 100%;
}

.card__badge-border {
	border: 10px solid #eee;
	height: 12em;
  margin: 0 auto 1.5em;
}

.card__title {
	font-size: 1.4em;
	font-weight: bold;
	margin-bottom: 0.85em;
	text-transform: uppercase;
}

.card__footer {
	font-size: 0.8em;
	margin-top: 0.5em;
}
</style>