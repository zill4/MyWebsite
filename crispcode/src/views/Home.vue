<template>
  <v-container>
    <v-container>
      <v-row class="py-16">
        <v-col cols="12">
          <h2
            class="
              text-h4 text-md-h3 text-center
              font-weight-black
              text-capitalize
            "
          >
            CrispCode.io
          </h2>
          <h3 class="text-h4 text-uppercase font-weight-thin text-center my-8">
            by Justin Crisp
          </h3>
        </v-col>
        <v-col >
          <p>
            Thank you for taking the time to visit my website! As a full-stack developer with experience working with multiple programming languages and technologies, my goal is to better my skills in software development,
            such that I can work on great products that make peoples lives better. This year my focus is to refine my full stack development skills with my project Warlok, grow my social skills by building a Twitch and YouTube channel, and share
            my blogging.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col class="d-flex">
        <v-card class="pa-2" max-width="344">
          <v-img
            class="white--text align-end"
            src="https://firebasestorage.googleapis.com/v0/b/ember-hearth.appspot.com/o/centered.PNG?alt=media&token=da34c0b3-6701-4441-94ac-16a0dcd5cecc"
            height="200px"
          ></v-img>

          <v-card-title> Warlok </v-card-title>

          <v-card-subtitle> Platform for content creators to share their content. </v-card-subtitle>

          <v-card-actions>
            <v-btn color="purple lighten-2" class="align-center" text> Visit Site </v-btn>

            <v-spacer></v-spacer>

          </v-card-actions>
        </v-card>
        <v-col cols="12" md="7">
          <p>Warlok is a project built to help content creators</p>
          <blockquote class="text-h6 pa-5 my-4 font-weight-thin">
            Many creators seek growth, but have a hard time finding their audience...
          </blockquote>
          <p>
            Warlok aims to solve this through creating a shared space for analyzing content and by connecting with fans, and other creators.
          </p>
        </v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-row-reverse">
        <v-card class="pa-2" max-width="344">
          <v-img
            class="white--text align-end"
            src="http://i3.ytimg.com/vi/gVugJvbMsq0/maxresdefault.jpg"
            height="200px"
          ></v-img>

          <v-card-title> ZillA </v-card-title>

          <v-card-subtitle> Game development and content creation. </v-card-subtitle>

          <v-card-actions>
            <v-btn color="purple lighten-2" text> Visit my YouTube Channel </v-btn>
          </v-card-actions>
        </v-card>
        <v-col cols="12" md="7">
          <p>
            ZillA is a project for streaming and game development. With a focus on building with Unreal Engine and C++, I aim to work on games in my free time for fun. 
            I'm a huge fan of video games with Kingdom Hearts, Dark Souls, and Halo being some of my favorite series. My goal is to eventually turn my hobby into something I can focus on full-time someday.
          </p>
        </v-col>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="d-flex">
        <v-card class="pa-2" max-width="344">
          <v-img
            class="white--text align-end"
            src="SocialEye.PNG"
            height="200px"
          ></v-img>

          <v-card-title> SocialEye </v-card-title>

          <v-card-subtitle> Tool for searching YouTube accounts using the YouTube API. </v-card-subtitle>
          
          <v-btn color="green lighten-2" text> Visit my YouTube Channel </v-btn>
          <v-btn color="green lighten-2" text> SocialEye backend Github </v-btn>
        </v-card>
        <v-col cols="12" md="7">
          <blockquote class="text-h6 pa-5 my-4 font-weight-thin">
            SocialEye was originally a Google Chrome extension used to determine if a given Amazon item was socially responsible. 
            This was done by scraping websites like GoodCompanies and B-Corp for companies that were considered by their standards to be socially responsible.
            Unfortunately this idea didn't scale with most companies, because of this I decided to build a simple YouTube API search tool to help with finding emails from content creators on YouTube.
          </blockquote>
        </v-col>
      </v-col>
    </v-row>
        <v-row>
      <v-col class="d-flex flex-row-reverse">
        <v-card class="pa-2" max-width="344">
          <v-img
            class="white--text align-end"
            src="https://www.42.us.org/wp-content/uploads/2019/05/samsung-bixby-1.jpg"
            height="200px"
          ></v-img>

          <v-card-title> 42 Silicon Valley Projects </v-card-title>

          <v-card-subtitle> Game development and content creation. </v-card-subtitle>

          <v-card-actions>
            <v-btn color="purple lighten-2" text> 42 Silicon Valley Projects Github </v-btn>


          </v-card-actions>

        </v-card>
        <v-col cols="12" md="7">
          <p>
            42 Silicon Valley was a programming school that helped students learn how to learn new technologies. We started with learning how to use C with GCC using only the terminal, but gradually built our own libraries from scratch and worked on projects that included recreating the printf function, the LS bash command, and many other projects predominantly with C.
          </p>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
