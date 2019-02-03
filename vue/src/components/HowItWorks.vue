<template>
  <v-container id="contentContainer">
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>How it works:</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <p class="textInfo">When you send a message in a channel danbo can see, you will receive 14-27 experience once a minute. If the server has rewarded roles set up, you will be awarded the role once you have achieved the level required.</p>
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
