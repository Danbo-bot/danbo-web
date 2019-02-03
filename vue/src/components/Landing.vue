<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>What is Danbo?</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <blockquote class="blockquote text-xs-center">
          Danbo is a completely free, open-source <br>
          experience + levelling bot for your discord server
        </blockquote>
      </v-flex>
    </v-layout>
    <v-layout align-center fill-width column>
      <v-flex align-center fill-width mt-5>
        <v-btn v-on:click.native="goTo('how-it-works')" large>
          How it works
        </v-btn>
        <v-btn color="#36454f" align-center large :href="danboLink">
          Add Danbo to your Server
        </v-btn>
        <v-btn large  href="https://github.com/Danbo-bot/danbo">
          Source Code
        </v-btn>
      </v-flex>
      <v-flex :style="danboStyle">

      </v-flex>
      <img :style="danboImgStyle" src="static/danbo.jpg">
      <v-timeline align-top>
      <v-timeline-item
        v-for="(item, i) in items"
        color="blue"
        :key="i"
        fill-dot
        :style="timelineStyle"
      >
          <span slot="icon">
            <img :src="item.profile" :style="styleObject" width='50px'>
          </span>
        <v-card class="elevation-2">
          <v-card-title :style="timelineStyle">{{item.user}} says:</v-card-title>
          <v-card-text>
            "{{item.comment}}"
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    </v-layout>
    
  </v-container>
</template>

<script>
export default {
    data: () => ({
        danboLink: "https://discordapp.com/oauth2/authorize?client_id=460722914711568395&scope=bot&permissions=268823744",
        items: [
            {
                user: "morstain#8746",
                profile: "https://res.cloudinary.com/dbcnwfxq0/image/upload/v1544149973/morstain8746.png",
                comment: "he's nice, unlike mee6 he's a bot that doesn't try to do a whackton of stuff at once and failing miserably at it"
            },
            {
                user: "Esberk#4854",
                profile: "https://res.cloudinary.com/dbcnwfxq0/image/upload/v1544149597/Esberk4854.gif",
                comment: "I like how danbo is like you dash; a sad robot"
            },
            {
                user: "kit#0368",
                profile: "https://res.cloudinary.com/dbcnwfxq0/image/upload/v1544150456/kit.png",
                comment: "It's pretty neat"
            },
            {
                user: "Erik.#5369",
                profile: "https://res.cloudinary.com/dbcnwfxq0/image/upload/v1544149595/Erik.5369.png",
                comment: "Sometimes I forget that Danbo exists. That means it does its job well instead of sending me pesky DMs every time I level up. If only Aniki was still alive to see this majestic piece of mechanical genius."
            },
            {
                user: "snek#5262",
                profile: "https://res.cloudinary.com/dbcnwfxq0/image/upload/v1544149889/snek.png",
                comment: "danbo fuckin slaps"
            },
            {
                user: "BAZO#8447",
                profile: "https://res.cloudinary.com/dbcnwfxq0/image/upload/v1544149657/bazo8447.png",
                comment: "Danbo's bery nice ngl. I've hung out with him a few times cracked open a few sodies with him seems pretty chill. We shared a couple thoughts as well which we both agreed apon as well. "
            },
        ],
        styleObject: {
            "border-radius": "25px",
        },
        timelineStyle: {
            "padding-bottom": "0px",
        },
        danboStyle: {
            "padding-top": "50px",
            "line-height": "0px",
        },
        danboImgStyle: {
            "border-radius": "75px",
        }
    }),
    methods: {
        goTo(route) {
            this.$router.push(route);
        }
    }
};
</script>