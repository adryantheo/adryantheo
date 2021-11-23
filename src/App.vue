<template>
  <div class="float-sm-none">
    <v-app id="main">
      <div id="print">
        <v-parallax height="100%" dark src="./assets/asset1.jpg">
          <!-- biodata -->
          <v-main>
            <biodata/>
          </v-main>
          <!-- Personal Skill -->
          <keep-alive>
            <v-lazy v-model="isActive" :options="{threshold: 1}" min-height="200" transition="fade-transition">
              <v-main>
                <SE/>
              </v-main>
            </v-lazy>
          </keep-alive>
          <!-- experiences -->
          <keep-alive>
            <v-lazy v-model="isActive2" :options="{threshold: 1}" min-height="200" transition="fade-transition">
              <v-main>
                <experiences/>
              </v-main>
            </v-lazy>
          </keep-alive>
          <!-- contact us -->
          <keep-alive>
            <v-lazy v-model="isActive3" :options="{threshold: 1}" min-height="200" transition="fade-transition">
              <v-main>
                <conctact/>
              </v-main>
            </v-lazy>
          </keep-alive>
        </v-parallax>
        <!-- Parallax ends here -->
        <!-- Footer Section -->
        </div>
        <v-footer height="auto" color="#004242">  
          <v-flex py-3 text-center white--text xs12>
            &copy;2021 — <strong><a href="https://github.com/adryantheo" style="color: white">Adryan Theo</a></strong>
          </v-flex>          
        </v-footer>
    </v-app>
  </div>
</template>

<script>
import biodata from './components/biodata';
import SE from './components/SE';
import experiences from './components/experiences';
import conctact from './components/contact';

export default {
  name: 'App',
  components: {
    biodata,
    SE,
    experiences,
    conctact,
  },
  data: () => ({
    isActive:false,
    isActive2:false,
    isActive3:false,
  }),
  methods:{
    printMe(){
      this.$htmlToPaper('print');
    }
  }
};
</script>
