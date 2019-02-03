<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Leaderboards for {{leaderboard.name}}</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
          <v-list>
            <template v-for="(item, key) in visibleUsers">
                <v-list-tile
                    :key="'a' + key"
                    avatar>
                    <v-list-tile-action>
                        <v-list-tile-action-text>#{{key + 1}}</v-list-tile-action-text>
                    </v-list-tile-action>
                    <v-list-tile-avatar>
                        <img :src="item.avatar_url" onerror="this.onerror=null;this.src='/static/danbo.jpg';">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-flex class="d-flex" style="width:100%; align-items: center;">
                            <div class="user-info" style="display: flex; width:15%; align-items: center;">
                                <p style="text-align: center; font-size: 20px; margin-bottom: 0px;">{{item.name}}</p>
                                <p style="text-align: center; padding-right: 5px; font-size: 12px; margin-bottom: 0px;">#{{item.disc}}</p>
                            </div>
                            <div class="level-info hidden-md-and-down" style="">
                                <div class="exp-info">
                                    <p style="margin-bottom: 0px; font-size: 1vw">
                                    EXP: {{expSinceLastLevel(item.experience, item.level)}}/{{expToNextLevel(item.experience, item.level)}}
                                    </p>
                                    <p style="margin-bottom: 0px; font-size: 1vw">
                                    TOTAL EXP: {{item.experience}}
                                    </p>
                                </div>
                                <v-progress-linear
                                color="info"
                                height="10"
                                :value="expSinceLastLevel(item.experience, item.level)/expToNextLevel(item.experience, item.level)*100"
                                ></v-progress-linear>
                            </div>
                            <div class="level">
                                <p class="level">
                                    lvl {{item.level}}
                                </p>
                            </div>
                        </v-flex>
                        
                    </v-list-tile-content>
                    
                </v-list-tile>
                <v-divider
                    :key="key"
                ></v-divider>
            </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import NProgress from "nprogress";
export default {
    data() {
        return {
            bottom: false,
            leaderboard: null,
            visibleUsers: [],
            allUsers: null,
            index: 0,
        };
    },
    watch: {
        bottom(bottom) {
            if (bottom) {
                this.scrollAdvance();
            }
        }
    },
    methods: {
        expToNextLevel: function(exp, lvl) {
            return Math.ceil(((lvl + 1) * 8.6) ** 2) - Math.ceil(((lvl) * 8.6) ** 2);
        },
        expSinceLastLevel: function(exp, lvl) {
            return exp - Math.ceil((lvl * 8.6) ** 2);
        },
        bottomVisible() {
            const scrollY = window.scrollY;
            const visible = document.documentElement.clientHeight;
            const pageHeight = document.documentElement.scrollHeight;
            const bottomOfPage = visible + scrollY >= pageHeight;
            return bottomOfPage || pageHeight < visible;
        },
        scrollAdvance: function() {
            this.visibleUsers = this.visibleUsers.concat(
                this.allUsers.slice(this.index, this.index + 25)
            );
            this.index = this.index + 25;
        }
    },
    async created() {
        window.addEventListener("scroll", () => {
            this.bottom = this.bottomVisible();
        });
        try {
            const instance = axios.create();
            instance.interceptors.request.use(config => {
                NProgress.start();
                return config;
            });
            instance.interceptors.response.use(response => {
                NProgress.done();
                return response;
            });
            const response = await instance.get(`https://www.danbo.space/api/v1/servers/${this.$route.params.id}`);
            this.allUsers = response.data.users;
            this.visibleUsers = this.allUsers.slice(0, 25);
            this.index = 26;
            this.leaderboard = response.data;
        } catch (e) {
            this.errors.push(e);
        }
        
    }
};
</script>