<template>
  <v-container fill-height>
    <v-row class="d-flex flex-row">
      <v-col class="d-flex align-center justify-end">
        <v-img
          class="rounded-circle mb-4 mx-2"
          src="meee.jfif"
          max-width="400px"
        >
        </v-img>
      </v-col>
      <v-col class="d-flex align-center justify-start mb-6">
        <v-container>
          <v-row>
            <v-sheet
              class="ma-1"
              color="teal"
              elevation="7"
              height="113"
              rounded
              width="103"
            >
              <sheet-footer>Flask</sheet-footer>
            </v-sheet>
          </v-row>
          <v-row>
            <v-sheet
              class="ma-1"
              color="teal"
              elevation="7"
              height="113"
              rounded
              width="103"
            >
              <sheet-footer> MongoDB </sheet-footer>
            </v-sheet>
            <v-sheet
              class="ma-1"
              color="teal"
              elevation="7"
              height="113"
              rounded
              width="103"
            >
              <sheet-footer> Firebase </sheet-footer>
            </v-sheet>
          </v-row>
          <v-row>
            <v-sheet
              class="ma-1"
              color="teal"
              elevation="7"
              height="113"
              rounded
              width="103"
            >
              <sheet-footer> React </sheet-footer>
            </v-sheet>
            <v-sheet
              class="ma-1"
              color="teal"
              elevation="7"
              height="113"
              rounded
              width="103"
            >
              <sheet-footer> Vue </sheet-footer>
            </v-sheet>
            <v-sheet
              class="ma-1"
              color="teal"
              elevation="7"
              height="113"
              rounded
              width="103"
            >
              <sheet-footer> Svelte </sheet-footer>
            </v-sheet>
          </v-row>
        </v-container>
      </v-col>
      <v-col>
        <blockquote
          class="d-flex align-start justify-start text-h6 my-4 font-weight-thin"
        >
          Hi my name is Justin Crisp! Thanks for visiting my website.
        </blockquote>
        <!-- <p>
          Placeholder text hi please see the rest of my site by clicking around and checking out
          all the cool things that I have to show off okay!?
        </p> -->
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <v-btn icon x-large href="https://www.linkedin.com/in/justcrisp" class="mx-4">
          <v-avatar color="blue mx-4" size="62">
            <v-icon dark> mdi-linkedin </v-icon>
          </v-avatar>
        </v-btn>
        <v-btn icon x-large href="twitch.tv/zill4" class="mx-4">
        <v-avatar color="purple mx-4" size="62">
          <v-icon dark> mdi-twitch </v-icon>
        </v-avatar>
        </v-btn>
        <v-btn icon x-large href="https://warlok.net/w/zill4" class="mx-4">
        <v-avatar color="purple mx-4" size="62">
          <img src="warlok_color.png" alt="Warlok" />
        </v-avatar>
        </v-btn>
        <v-btn icon x-large href="https://www.facebook.com/justin.l.troutman" class="mx-4">
        <v-avatar color="blue mx-4" size="62">
          <v-icon dark> mdi-facebook </v-icon>
        </v-avatar>
        </v-btn>
        <v-btn icon x-large href="https://github.com/zill4" class="mx-4">
        <v-avatar color="green mx-4" size="62">
          <v-icon dark> mdi-github </v-icon>
        </v-avatar>
        </v-btn>
        <v-btn icon x-large href="https://twitter.com/Justcr1sp/" class="mx-4">
        <v-avatar color="blue mx-4" size="62">
          <v-icon dark> mdi-twitter </v-icon>
        </v-avatar>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    // A simple helper component
    SheetFooter: {
      functional: true,

      render(h, { children }) {
        return h(
          "v-sheet",
          {
            staticClass:
              "rounded mt-auto align-center justify-center d-flex px-2 ",
            props: {
              color: "rgba(236, 120, 236, .56)",
              dark: true,
              height: 50,
            },
          },
          children
        );
      },
    },
  },
};
</script>