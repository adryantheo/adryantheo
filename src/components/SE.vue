<template>
  <v-container grid-list-lg class="my-3">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <span class="display-1">Personal Skills</span>
      </v-col>
            
      <!-- coloumn1 -->
      <v-col xl="8" lg="8" md="8" sm="10" xs="auto" class="text-center">
        <v-row align="center" justify="center">
          <!-- laravel -->
          <v-card class=" pa-2 ma-4" height="210" width="250">
             <template v-if="isLoading">                
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="100"
                  type="image"
                ></v-skeleton-loader>
                <v-card-title class="headline">
                  <v-skeleton-loader
                    class="mx-auto"
                    width="200"
                    height="40"
                    type="text"
                  ></v-skeleton-loader>
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="60" 
                  type="text"
                ></v-skeleton-loader>
                </v-card-title>
            </template>
            <template v-else>
            <v-img contain height="100" src="../assets/laravel.png">
            </v-img>
            <v-card-title class="headline">
               <span class="pl-16" >Laravel</span>
                <v-spacer></v-spacer>
                <v-rating
                    :value="4"
                    color="yellow"
                    background-color="orange lighten-3"
                    dense
                    light
                    half-increments
                    readonly
                    size="28"
                    class="pl-6"
                  ></v-rating>
            </v-card-title>
            </template>
          </v-card>
          
          <!-- vuejs -->
          <v-card class=" pa-2 ma-4" height="210" width="250">
             <template v-if="isLoading">                
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="100"
                  type="image"
                ></v-skeleton-loader>
                <v-card-title class="headline">
                  <v-skeleton-loader
                    class="mx-auto"
                    width="200"
                    height="40"
                    type="text"
                  ></v-skeleton-loader>
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="60" 
                  type="text"
                ></v-skeleton-loader>
                </v-card-title>
            </template>
            <template v-else>
            <v-img
              contain
              height="100"
              src="../assets/vuejs.png"
            ></v-img>
            <v-card-title class="headline">
               <span class="pl-16">Vue.Js</span>
                <v-spacer></v-spacer>
                <v-rating
                    :value="3.5"
                    color="yellow"
                    background-color="orange lighten-3"
                    dense
                    light
                    half-increments
                    readonly
                    size="28"
                    class="pl-6"
                  ></v-rating>
            </v-card-title>
            </template>
          </v-card>

          <!-- Vuetify -->
          <v-card class=" pa-2 ma-4" height="210" width="250">
             <template v-if="isLoading">                
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="100"
                  type="image"
                ></v-skeleton-loader>
                <v-card-title class="headline">
                  <v-skeleton-loader
                    class="mx-auto"
                    width="200"
                    height="40"
                    type="text"
                  ></v-skeleton-loader>
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="60" 
                  type="text"
                ></v-skeleton-loader>
                </v-card-title>
            </template>
            <template v-else>
            <v-img
              contain
              height="100"
              src="../assets/vuetify.png"
            ></v-img>
            <v-card-title class="headline">
               <span class="pl-16">Vuetify</span>
                <v-spacer></v-spacer>
                <v-rating
                  :value="3.5"
                  color="yellow"
                  background-color="orange lighten-3"
                  dense
                  light
                  half-increments
                  readonly
                  size="28"
                  class="pl-6"
                  ></v-rating>
            </v-card-title>
            </template>
          </v-card>

          <!-- Javascript -->
          <v-card class=" pa-2 ma-4" height="210" width="250">
             <template v-if="isLoading">                
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="100"
                  type="image"
                ></v-skeleton-loader>
                <v-card-title class="headline">
                  <v-skeleton-loader
                    class="mx-auto"
                    width="200"
                    height="40"
                    type="text"
                  ></v-skeleton-loader>
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="60" 
                  type="text"
                ></v-skeleton-loader>
                </v-card-title>
            </template>
            <template v-else>
            <v-img
              contain
              height="100"
              src="../assets/js.png"
            ></v-img>
            <v-card-title class="headline">
               <span class="pl-11">Javascript</span>
                <v-spacer></v-spacer>
                <v-rating
                  :value="3.5"
                  color="yellow"
                  background-color="orange lighten-3"
                  dense
                  light
                  half-increments
                  readonly
                  size="28"
                  class="pl-6"
                  ></v-rating>
            </v-card-title>
            </template>
          </v-card>

           <!-- Selenium -->
          <v-card class=" pa-2 ma-4" height="210" width="250">
             <template v-if="isLoading2">                
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="100"
                  type="image"
                ></v-skeleton-loader>
                <v-card-title class="headline">
                  <v-skeleton-loader
                    class="mx-auto"
                    width="200"
                    height="40"
                    type="text"
                  ></v-skeleton-loader>
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="60" 
                  type="text"
                ></v-skeleton-loader>
                </v-card-title>
            </template>
            <template v-else>
            <v-img
              contain
              height="100"
              src="../assets/selenium.png"
            ></v-img>
            <v-card-title class="headline">
                <span class="pl-14" >Selenium</span>
                <v-spacer></v-spacer>
                <v-rating
                    :value="3"
                    color="yellow"
                    background-color="orange lighten-3"
                    dense
                    light
                    half-increments
                    readonly
                    size="28"
                    class="pl-6"
                  ></v-rating>
            </v-card-title>
            </template>
          </v-card>
          
          <!-- IoT -->
          <v-card class=" pa-2 ma-4" height="210" width="250">
            <template v-if="isLoading2">                
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="100"
                  type="image"
                ></v-skeleton-loader>
                <v-card-title class="headline">
                  <v-skeleton-loader
                    class="mx-auto"
                    width="200"
                    height="40"
                    type="text"
                  ></v-skeleton-loader>
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="60" 
                  type="text"
                ></v-skeleton-loader>
                </v-card-title>
            </template>
            <template v-else>
            <v-img
              contain
              height="100"
              src="../assets/iot.png"
            ></v-img>
            <v-card-title class="headline">
               <span class="pl-2">Internet of Things</span>
                <v-spacer></v-spacer>
                <v-rating
                    :value="3"
                    color="yellow"
                    background-color="orange lighten-3"
                    dense
                    light
                    half-increments
                    readonly
                    size="28"
                    class="pl-6"
                  ></v-rating>
            </v-card-title>
            </template>
          </v-card>

          <!-- RPA -->
          <v-card class=" pa-2 ma-4" height="210" width="250">
            <template v-if="isLoading2">                
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="100"
                  type="image"
                ></v-skeleton-loader>
                <v-card-title class="headline">
                  <v-skeleton-loader
                    class="mx-auto"
                    width="200"
                    height="40"
                    type="text"
                  ></v-skeleton-loader>
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="60" 
                  type="text"
                ></v-skeleton-loader>
                </v-card-title>
            </template>
            <template v-else>
            <v-img
              contain
              height="100"
              src="../assets/uipath.png"
            ></v-img>
            <v-card-title class="headline">
               <span class="pl-16">UiPath</span>
                <v-spacer></v-spacer>
                <v-rating
                  :value="4"
                  color="yellow"
                  background-color="orange lighten-3"
                  dense
                  light
                  half-increments
                  readonly
                  size="28"
                  class="pl-6"
                  ></v-rating>
            </v-card-title>
            </template>
          </v-card>

          <!-- Outsystems -->
          <v-card class=" pa-2 ma-4" height="210" width="250">
            <template v-if="isLoading2">                
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="100"
                  type="image"
                ></v-skeleton-loader>
                <v-card-title class="headline">
                  <v-skeleton-loader
                    class="mx-auto"
                    width="200"
                    height="40"
                    type="text"
                  ></v-skeleton-loader>
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="60" 
                  type="text"
                ></v-skeleton-loader>
                </v-card-title>
            </template>
            <template v-else>
            <v-img
              contain
              height="100"
              src="../assets/outsystems.jpg"
            ></v-img>
            <v-card-title class="headline">
               <span class="pl-10">Outsystems</span>
                <v-spacer></v-spacer>
                <v-rating
                  :value="3"
                  color="yellow"
                  background-color="orange lighten-3"
                  dense
                  light
                  half-increments
                  readonly
                  size="28"
                  class="pl-6"
                  ></v-rating>
            </v-card-title>
            </template>
          </v-card>

          <!-- React -->
          <v-card class=" pa-2 ma-4" height="210" width="250">
            <template v-if="isLoading3">                
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="100"
                  type="image"
                ></v-skeleton-loader>
                <v-card-title class="headline">
                  <v-skeleton-loader
                    class="mx-auto"
                    width="200"
                    height="40"
                    type="text"
                  ></v-skeleton-loader>
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="60" 
                  type="text"
                ></v-skeleton-loader>
                </v-card-title>
            </template>
            <template v-else>
            <v-img
              contain
              height="100"
              src="../assets/React.png"
            ></v-img>
            <v-card-title class="headline">
               <span class="pl-10">React JS</span>
                <v-spacer></v-spacer>
                <v-rating
                  :value="4"
                  color="yellow"
                  background-color="orange lighten-3"
                  dense
                  light
                  half-increments
                  readonly
                  size="28"
                  class="pl-6"
                  ></v-rating>
            </v-card-title>
            </template>
          </v-card>

            <!-- PostgreSQL -->
          <v-card class=" pa-2 ma-4" height="210" width="250">
            <template v-if="isLoading3">                
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="100"
                  type="image"
                ></v-skeleton-loader>
                <v-card-title class="headline">
                  <v-skeleton-loader
                    class="mx-auto"
                    width="200"
                    height="40"
                    type="text"
                  ></v-skeleton-loader>
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="60" 
                  type="text"
                ></v-skeleton-loader>
                </v-card-title>
            </template>
            <template v-else>
            <v-img
              contain
              height="100"
              src="../assets/Postgres.png"
            ></v-img>
            <v-card-title class="headline">
               <span class="pl-10">PostgreSQL</span>
                <v-spacer></v-spacer>
                <v-rating
                  :value="3.5"
                  color="yellow"
                  background-color="orange lighten-3"
                  dense
                  light
                  half-increments
                  readonly
                  size="28"
                  class="pl-6"
                  ></v-rating>
            </v-card-title>
            </template>
          </v-card>

          <!--React Native -->
          <v-card class=" pa-2 ma-4" height="210" width="250">
            <template v-if="isLoading3">                
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="100"
                  type="image"
                ></v-skeleton-loader>
                <v-card-title class="headline">
                  <v-skeleton-loader
                    class="mx-auto"
                    width="200"
                    height="40"
                    type="text"
                  ></v-skeleton-loader>
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="60" 
                  type="text"
                ></v-skeleton-loader>
                </v-card-title>
            </template>
            <template v-else>
            <v-img
              contain
              height="100"
              src="../assets/React-Native.png"
            ></v-img>
            <v-card-title class="headline">
               <span class="pl-10">React Native</span>
                <v-spacer></v-spacer>
                <v-rating
                  :value="4"
                  color="yellow"
                  background-color="orange lighten-3"
                  dense
                  light
                  half-increments
                  readonly
                  size="28"
                  class="pl-6"
                  ></v-rating>
            </v-card-title>
            </template>
          </v-card>

          <!-- GrahpQL -->
          <v-card class=" pa-2 ma-4" height="210" width="250">
            <template v-if="isLoading3">                
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="100"
                  type="image"
                ></v-skeleton-loader>
                <v-card-title class="headline">
                  <v-skeleton-loader
                    class="mx-auto"
                    width="200"
                    height="40"
                    type="text"
                  ></v-skeleton-loader>
                  <v-skeleton-loader
                  class="mx-auto"
                  width="200"
                  height="60" 
                  type="text"
                ></v-skeleton-loader>
                </v-card-title>
            </template>
            <template v-else>
            <v-img
              contain
              height="100"
              src="../assets/Grahpql.png"
            ></v-img>
            <v-card-title class="headline">
               <span class="pl-12">GrahpQL</span>
                <v-spacer></v-spacer>
                <v-rating
                  :value="3.5"
                  color="yellow"
                  background-color="orange lighten-3"
                  dense
                  light
                  half-increments
                  readonly
                  size="28"
                  class="pl-6"
                  ></v-rating>
            </v-card-title>
            </template>
          </v-card>

        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    isLoading: true,
    isLoading2: true,
    isLoading3: true,
    // isLoading3: true
  }),
  
  methods:{
    loadData(){
      setTimeout(() => {  this.isLoading = false }, (Math.random() * 2000)+500);
      setTimeout(() => {  this.isLoading2 = false }, (Math.random() * 2000)+1000);
      setTimeout(() => {  this.isLoading3 = false }, (Math.random() * 2000)+1500);
    },
  },

  mounted(){
    this.loadData();
  }
};
</script>
