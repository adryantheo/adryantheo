<template>
  <v-container grid-list-lg class="my-3">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <span class="display-1">Contact Person</span>
      </v-col>
      <v-col fluid class="text-center" xl="4" lg="4" md="auto" sm="8" xs="auto">
        <v-row justify-md-4>
          <a href="https://github.com/adryantheo/"><v-img src="../assets/github.png" max-height="60" max-width="60"></v-img></a>
          <v-spacer></v-spacer>
          <a href="https://www.linkedin.com/in/adryan-theo-3b881b193/"><v-img src="../assets/linkedin.png" max-height="60" max-width="60"></v-img></a>
          <v-spacer></v-spacer>
          <a href="mailto:adryantheo@gmail.com?subject=Email from github.io"><v-img src="../assets/gmail.png" max-height="60" max-width="60"></v-img></a> 
          <!-- <v-img src="../assets/gmail.png" max-height="60" max-width="60" @click="popUp()"></v-img> -->
          <v-spacer></v-spacer>
          <a href="https://wa.me/628170540590"><v-img src="../assets/wa.png" max-height="60" max-width="60"></v-img></a>
          <!-- <v-dialog v-model="dialog" max-width="400">
            <v-card max-width="400">
              <v-card-title>
                Email Address
                <v-spacer></v-spacer>
                <v-icon v-clipboard:copy="myEmail" @click="myAlert()">content_copy</v-icon>
              </v-card-title>
              <v-card-text>
                <span>adryantheo@gmail.com</span> 
              </v-card-text>
            </v-card>
        </v-dialog> -->
        </v-row>
      </v-col>
    </v-row>
    <!-- <v-alert rounded dense :value="alert" type="info" max-width="270" dismissible transition="scale-transition">Coppied to clipboard </v-alert> -->
  </v-container>
</template>

<script>
export default {
  data: () => ({
    // dialog: false,
    myEmail: "adryantheo@gmail.com",
    // alert:false,
    
  }),
  methods:{
    // popUp(){
    //   this.dialog = true;
    // },
    myAlert(){
      // this.alert = true;
      // this.dialog = false;
      setTimeout(()=>{
        this.alert=false
      },1000)
    }
  },
};
</script>
