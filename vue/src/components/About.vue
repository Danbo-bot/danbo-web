<template>
  <v-container id="contentContainer">
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>About</h1>
      </v-flex>
      <v-flex xs12 class="aboutText text-xs-center" mt-3>
        <p class="textInfo">Danbo is a bot that I created when I got frustrated at how poorly mee6 did levelling, and how intrusive I felt it was getting. I decided to make a bot that would do levelling in a simple, easy to understand way without constantly DMing users in your server or resetting leaderboards randomly</p>
        <p class="textInfo"> This website was created so that there would be an easy to share link to get info on the bot as well as to host leaderboards.</p>
        <p class="textInfo"> At some point I would like to add a web-hosted management panel but I do not foresee myself having the time for that, so feel free to make a PR on the danbo-web github repo.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data: () => ({})
};
</script>

<style scoped>
.contentContainer {
  max-width: 60%;
}
.textInfo {
  margin-top: 15px;
}
</style>
