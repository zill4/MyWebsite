<template>
  <v-container>
    <div class="about">
      <v-timeline>
        <v-timeline-item color="pink">
          <template>
            <span
              :class="`headline font-weight-bold pink--text`"
              v-text="2021"
            ></span>
          </template>
          <v-card>
            <v-img
              class="white--text align-end"
              src="warlok_logo.png"
              height="80px"
            ></v-img>
            <v-container>
              <v-row>
                <v-col>
                  <blockquote class="text-h6 pa-2 my-2 font-weight-thin">
                    In 2021 I started focusing on solving the problem I was having at Samsung.
                    With Warlok I aimed to build a tool that would help content creators connect with fans, businesses, and other creators.
                  </blockquote>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="purple">
          <template>
            <span
              :class="`headline font-weight-bold purple--text`"
              v-text="2020"
            ></span>
          </template>
          <v-card>
            <v-img
              class="white--text align-end"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_V4MZKBMaorY0fuxPZY79NKFCAA0gh2lGKw&usqp=CAU"
              height="120px"
            ></v-img>
            <v-container>
              <v-row>
                <v-col>
                  <blockquote class="text-h6 pa-2 my-2 font-weight-thin">
                    Continuing with Samsung during 2020 we shifted our focus on finding content creators to help promote and draw users to the Bixby Marketplace.
                    I built a small website that helped our team source YouTubers, saving time searching through actual YouTube.
                  </blockquote>
                </v-col>
                <!-- <v-col class="hidden-sm-and-down text-right" md="2">
                  <v-icon size="64"> mdi-calendar-text </v-icon>
                </v-col> -->
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="blue">
          <template>
            <span
              :class="`headline font-weight-bold blue--text`"
              v-text="2019"
            ></span>
          </template>
          <v-card>
            <v-img
              class="white--text align-end"
              src="https://www.sammobile.com/wp-content/uploads/2019/08/Samsung-Research-America.jpg"
              height="160px"
            ></v-img>
            <v-container>
              <v-row>
                <v-col>
                  <blockquote class="text-h6 pa-2 my-2 font-weight-thin">
                    In 2019 I won the Samsung Bixby Hackathon at 42 Silicon Valley and joined the 
                    Helped populate the Bixby Marketplace from initial Capsule
                    count of less than 20 live Capsules to over 150, over 700%
                    growth, in less than 6-months. 
                  </blockquote>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="green">
          <template>
            <span
              :class="`headline font-weight-bold green--text`"
              v-text="2018"
            ></span>
          </template>
          <v-card>
            <v-img
              class="white--text align-end"
              src="https://pbs.twimg.com/media/D_4XF13UEAAqPSE.jpg"
              height="120px"
            ></v-img>
            <v-container>
              <v-row>
                <v-col>
                  <blockquote class="text-h6 pa-2 my-2 font-weight-thin">
                    In 2018 I started attending 42 Silicon Valley a programmign school that required a month long 70 hour minimum attendance a week bootcamp to join.
                    42 had no instrutors and no classes, but used project based learning to guide students down branches of programming, predominantly in C.
                  </blockquote>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="teal">
          <template>
            <span
              :class="`headline font-weight-bold teal--text`"
              v-text="2017"
            ></span>
          </template>
          <v-card>
            <v-img
              class="white--text align-end"
              src="https://media.bizj.us/view/img/11841832/downloaded-08212020-ringcentral-hq-in-belmont*1200xx5760-3240-0-300.jpg"
              height="120px"
            ></v-img>
            <v-container>
              <v-row>
                <v-col>
                  <blockquote class="text-h6 pa-2 my-2 font-weight-thin">
                    In 2017 I started my internship on the product team at RingCentral. There I used my skills with python to build a sentiment analysis tool for analyzing sentiment of user reviews from the Glip product.
                    After my internship ended I was lucky enough to join the team as a product analyst.
                  </blockquote>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="yellow">
          <template>
            <span
              :class="`headline font-weight-bold yellow--text`"
              v-text="2016"
            ></span>
          </template>
          <v-card>
            <v-img
              class="white--text align-end"
              src="https://www.deanza.edu/facilities/images/campus-aerial.jpg"
              height="180px"
            ></v-img>
            <v-container>
              <v-row>
                <v-col>
                  <blockquote class="text-h6 pa-2 my-2 font-weight-thin">
                    Starting in fall of 2015 I attended De Anza college studying computer science. Living in the bay area I was amazed by how many people were working on startups, hackathons, and projects.
                  </blockquote>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="red">
          <template>
            <span
              :class="`headline font-weight-bold yellow--text`"
              v-text="2015"
            ></span>
          </template>
          <v-card>
            <v-img
              class="white--text align-end"
              src="https://www.bernards.com/wp-content/uploads/2018/03/newport_harbor_hs_ext_3-1920x1038.jpg"
              height="180px"
            ></v-img>
            <v-container>
              <v-row>
                <v-col>
                  <blockquote class="text-h6 pa-2 my-2 font-weight-thin">
                    I started my journey with programming after graduating Newport Harbor High School in 2015 and moving to the bay area to immerse myself in the
                    culture of Silicon Valley.
                  </blockquote>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: "cyan",
        year: "2021",
      },
      {
        color: "pink",
        year: "2020",
      },
      {
        color: "cyan",
        year: "2019",
      },
      {
        color: "green",
        year: "2018",
      },
      {
        color: "pink",
        year: "2017",
      },
      {
        color: "amber",
        year: "2016",
      },
      {
        color: "orange",
        year: "2015",
      },
    ],
  }),
};
</script>