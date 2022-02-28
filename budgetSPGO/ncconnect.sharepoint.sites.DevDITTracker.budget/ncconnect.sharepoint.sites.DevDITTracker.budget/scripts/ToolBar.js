Vue.component( 
   'tool-bar',{
       
    template:`
    <v-card class="mx-auto overflow-hidden">
    <v-toolbar dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>HR Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" temporary app>
        <v-list>            
            <v-list-item>
                <v-list-item-content>
                <router-link :to="{name:'position', params:{id:positionId}}">
                Post Request 
            </router-link>
                </v-list-item-content>
            </v-list-item> 

            <v-list-item>
                <v-list-item-content>
                   <router-link :to="{name:'employeeselection', params:{id:positionId}}">Employee Selection </router-link>
                </v-list-item-content>
            </v-list-item> 

            <v-divider></v-divider>
            <v-list-item class="my-5">
                <v-list-item-content>
                   <router-link to="/">All Positions</router-link>
                </v-list-item-content>
            </v-list-item> 
            
        </v-list>
    </v-navigation-drawer>
  </v-card>
    `,
    data(){
        return{
            drawer: false,
            positionID:null
        }
    },
    created(){
        this.getPostId()
    },
    methods:{
        getPostId(){
            var positionId = window.location.href.split("~")[1];
           // console.log("positionId",positionId)
            this.positionId= positionId
        }
    },
    computed:{
        
    },

});
