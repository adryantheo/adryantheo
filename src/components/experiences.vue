<template>
  <v-container grid-list-lg class="my-3">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <span class="display-1">Experiences</span>
      </v-col>
      <v-col class="text-center" xl="auto" lg="auto" md="10" sm="auto" xs="auto">
        <v-timeline :dense="$vuetify.breakpoint.xs">          
          <!-- 2016 -->
            <v-timeline-item color="purple lighten-2" fill-dot right small>
              <template v-slot:opposite>
                <span :class="`headline font-weight-bold white--text`" v-text="2016"></span>
              </template>
              <v-card>
                <v-card-title class="purple lighten-2">
                  <v-icon dark size="36" class="mr-4">mdi-school</v-icon>
                  <h6 class="display-1 white--text font-weight-light">College</h6>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col xl="auto" lg="auto" md="10" sm="12" xs="auto">
                      <p>Start Studying at Atma Jaya Yogyakarta University (UAJY) </p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>

            <v-timeline-item color="amber lighten-1" fill-dot left small>
              <template v-slot:opposite>
                <span :class="`headline font-weight-bold white--text`" v-text="2017"></span>
              </template>
              <v-card>
                <v-card-title class="amber lighten-1 justify-end">
                  <h6 class="display-1 mr-4 white--text font-weight-light">Groups</h6>
                  <v-icon dark size="36">groups</v-icon>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col xl="auto" lg="auto" md="10" sm="12" xs="auto">
                      <p>Kelompok Studi Linux (KSL) as Vice Leader (2017-2018)</p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>

            <v-timeline-item color="cyan lighten-1" fill-dot right small>
              <template v-slot:opposite>
                <span :class="`headline font-weight-bold white--text`" v-text="2018"></span>
              </template>
              <v-card>
                <v-card-title class="cyan lighten-1">
                  <v-icon class="mr-4" dark size="36">public</v-icon>
                  <h6 class="display-1 white--text font-weight-light">Activities</h6>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col xl="auto" lg="auto" md="10" sm="12" xs="auto">
                      <p>- National Workshop "Cybercrime and Digital Forensics" as Workshop Leaders</p>
                      <p>- Programming Extracurricular at Pangudi Luhur Yogyakarta High School as Mentor (2018-2020)</p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>

            <v-timeline-item
              color="red lighten-1" fill-dot left small>
              <template v-slot:opposite>
                <span :class="`headline font-weight-bold white--text`" v-text="2019"></span>
              </template>
              <v-card>
                <v-card-title class="red lighten-1 justify-end">
                  <h6 class="display-1 mr-4 white--text font-weight-light">Activities</h6>
                  <v-icon dark size="36">
                    mdi-account-multiple-outline
                  </v-icon>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col xl="auto" lg="auto" md="10" sm="12" xs="auto">
                      <p>- High School Food Bazaar Application Using Vuejs and Laravel as Back-End Engineer</p>
                      <p>- Ticket Sales Application for High School's Event Using Vuejs and Laravel as Full Stack Developer</p>
                      <p>- Workshop Himaforka UAJY "Internet of Things" as Co-Trainer</p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>

            <v-timeline-item
              color="green lighten-1" fill-dot right small>
              <template v-slot:opposite>
                <span :class="`headline font-weight-bold white--text`" v-text="2020"></span>
              </template>
              <v-card>
                <v-card-title class="green lighten-1">
                  <v-icon class="mr-4" dark size="36">person</v-icon>
                  <h6 class="display-1 white--text font-weight-light">Existing</h6>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col xl="auto" lg="auto" md="10" sm="12" xs="auto">
                      <p>- Intern at Astra Credits Companies as Software Engineer (Jan - July)</p>
                      <p>- Graduated from Atma Jaya Yogyakarta University (June)</p>
                      <p>- Freelance at Astra Credits Companies as Mobile Engineer (July) </p>
                      <p>- Working at PT. Enseval Putra Megatrading as E-Commerce Developer (August - Now) </p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  }),
};
</script>
