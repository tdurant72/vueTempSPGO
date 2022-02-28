const positions = Vue.component(
    'positions',{
        props:['id'],
    template:`
    <div>
    <h3>Positions</h3>
    <v-tabs>
        <v-tab ripple>All Items</v-tab><v-tab ripple>My Items</v-tab>

        <v-tab-item>
        <v-text-field
        v-model="search"
        label="Search"
        id="searchField"
        >
        </v-text-field>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">ID</th>
                    <th class="text-left">Position</th>
                    <th class="text-left">Title</th>
                    <th class="text-left">Division</th>
                    <th class="text-left">Hiring Manager</th>
                    <th>Created</th>
                    <th>Status</th>
                    <th>Posting Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="position in filteredPosts" :key="position.ID" >
                        <td> 
                            <router-link :to="{name: 'dashboard', params:{id:position.ID,positionNumber:position.Position_x0020_Number},props:true}">
                                ID:{{position.ID}}
                            </router-link>
                        </td>
                        <td> Position Number:{{position.Position_x0020_Number}}</td>
                        <td> {{position.Title}}</td>
                        <td>{{position.Division}}</td>
                        <td>{{position.hiringManagerName}}</td>
                        <td>{{position.Created | moment}}</td>
                        <td>{{position.status}}</td>
                        <td>{{position.PostingStatus}}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        </v-tab-item>
        <v-tab-item>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">ID</th>
                    <th class="text-left">Position</th>
                    <th class="text-left">Title</th>
                    <th class="text-left">Division</th>
                    <th class="text-left">Hiring Manager</th>
                    <th>Created</th>
                    <th>Status</th>
                    <th>Posting Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="position in mine" :key="position.ID" >
                        <td> 
                            <router-link :to="{name: 'dashboard', params:{id:position.ID,positionNumber:position.Position_x0020_Number},props:true}">
                                ID:{{position.ID}}
                            </router-link>
                        </td>
                        <td> Position Number:{{position.Position_x0020_Number}}</td>
                        <td> {{position.Title}}</td>
                        <td>{{position.Division}}</td>
                        <td>{{position.hiringManagerName}}</td>
                        <td>{{position.Created | moment}}</td>
                        <td>{{position.status}}</td>
                        <td>{{position.PostingStatus}}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        </v-tab-item>
    </v-tabs>
    
    </div>
    `,
    data(){
        return{
            positionDataLoaded:false,
            positionData:{},
            positions:[],
            user:[],
            mine:[],
            search:''

        }  
    },
    mounted(){
        this.getPostItems();
    },
    methods:{

        moment: function () {
            return moment();
          },
          dataFilter(){
              let allEmails = this.postions.filter((position)=>{
                  position.hrReruiterEmail.match(this.user.Email)
              })
              
          },
        getPostItems:function (){   
                axios.all([
                   axios.get("https://ncconnect.sharepoint.com/sites/DevDITTracker/_api/web/lists/getByTitle('HR%20Post%20Request')/items?$select=Title,hiringManagerName,Division,Created,status,ID,Position_x0020_Number,PostingStatus,hrRecruiterName,hrRecruiterEmail,budgetApproverName,budgetApproverEmail,budgetOfficerName,budgetOfficerEmail") ,
                   axios.get("https://ncconnect.sharepoint.com/sites/DevDITTracker/_api/web/currentuser?$select=Title,Email,id")
                   
                ])
            .then(axios.spread((positionRes, userRes) =>{
                var vm = this;
                positionRes.data.value.forEach((item)=>{
                    item.Position_x0020_Number  == null?item.Position_x0020_Number = '':item.Position_x0020_Number.toString()
                    item.Title == null?item.Title = '':item.Title
                    item.hiringManagerName == null?item.hiringManagerName = '':item.hiringManagerName
                    item.hrRecruiterEmail == null?item.hrRecruiterEmail = '':item.hrRecruiterEmail
                    item.budgetOfficerEmail == null?item.budgetOfficerEmail = '':item.budgetOfficerEmail
                    item.budgetApproverEmail == null?item.budgetApproverEmail = '':item.budgetApproverEmail
                    item.hrRecruiterName == null?item.hrRecruiterName = '':item.hrRecruiterName
                    item.Division == null?item.Division = '':item.Division
                    vm.positions.push(item)
                })
                //console.log("position number:",vm.positions)
                vm.user = userRes.data;
                //console.log("user data",vm.user)

                let data = positionRes.data.value
                data.forEach((item)=>{
                    item.budgetOfficerEmail == null?item.budgetOfficerEmail = '':item.budgetOfficerEmail
                    item.budgetApproverEmail == null?item.budgetApproverEmail = '':item.budgetApproverEmail
                    if(item.budgetOfficerEmail == this.user.Email || item.budgetApproverEmail == this.user.Email){
                        vm.mine.push(item)
                    }
                })
            }))
            
            .catch(function(error){
                console.log(error)
            })
            .then(function(){
                console.log("no problems")
            });
        },
    },
    computed:{
        filteredPosts:function(){
            let value = this.search.toLowerCase().slice(1);
            return this.positions.filter(function(post){
                return post.hrRecruiterEmail.indexOf(value)> -1 ||
                post.Title.toLowerCase().indexOf(value)> -1 ||
                post.Division.toLowerCase().indexOf(value)> -1 ||
                post.Position_x0020_Number.indexOf(value)> -1 ||
                post.hiringManagerName.indexOf(value)> -1 ||
                post.hrRecruiterName.toLowerCase().indexOf(value)> -1
            })
        },

    },
    filters:{
        moment:function(value){
            if(value){
                return moment(value).format('MM/DD/YYYY')
            }
        }
    },
})