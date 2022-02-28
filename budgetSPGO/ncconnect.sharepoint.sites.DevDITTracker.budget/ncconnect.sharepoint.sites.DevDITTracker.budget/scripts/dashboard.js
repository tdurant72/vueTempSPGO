const dashboard = Vue.component(
    'dashboard',{
       props:['positionNumber'],
    template:`
        <div>
            <tool-bar :positionId="this.positionId" ></tool-bar>
            <v-spacer></v-spacer>
            <v-card
            class="mx-auto my-5"
            max-width="344"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">ID: {{post.ID}}</div>
                <v-list-item-subtitle>Division: {{post.Division}}</v-list-item-subtitle>
                <v-list-item-title class="headline mb-1">Position Number: {{post.Position_x0020_Number}}</v-list-item-title>
                <v-list-item-subtitle>Hiring Manager: {{post.hiringManagerName}}</v-list-item-subtitle>
                <v-list-item-subtitle>Days To Post: {{post.DaysToPost}}</v-list-item-subtitle>
                <v-list-item-subtitle>Date Vacated: {{post.DateVacated | moment}}</v-list-item-subtitle>
                <v-list-item-subtitle>Approval Status: {{post.Approval_x0020_Status}}</v-list-item-subtitle>
                
                <v-list-item-subtitle>Recruitment Type: {{post.RecruitmentType}}</v-list-item-subtitle>
                <v-card-text>
                    <div>
                        <p><i>Use the menu icon in the upper left to navigate between forms</i></p>
                    </div>
                </v-card-text>
              </v-list-item-content>
        
            </v-list-item>
        
          </v-card>
            
            
        </div>
    `,

    data(){
        return{
            search:'',
            searchRoot:'',
            status:'',
            formattedDate:null,
            isLoading: false,
             model: null,
            //positions:[],
            siteUsersRoot:[],
            positionId:null,
            post:{
                Division:'',
                Created:'',
                status:'',
                ID:'',
                Position_x0020_Number:'',
                RecruitmentType:'',
                PositionType:'',
                WorkingTitle:'',
                Approval_x0020_Status:'',
                Location:'',
                DescriptionOfWork:'',

                CIO_x0020_Approver:'',
                Division_x0020_Director_x0020_Ap:'',
                Section_x0020__x002f__x0020_Work:'',
                DateVacated:'',
                DaysToPost:'',
                hiringManagerName:'',
                HiringManagerEmail:''
            }, 
        } 
    },
    created(){
       this.getPostId()
       console.log(this.positionId)
    },
    computed:{
        filteredList(){
            return this.siteUsersRoot.filter(user =>{
                return user.Title.includes(this.search)
            })
        },
        userDisplayName(){
            return Object.value(this.siteUsersRoot)
        },

        
    },
    filters:{
        moment:function(value){
            if(value){
                return moment(value).format('MM/DD/YYYY')
            }
        }
    },
    methods:{
        moment: function () {
            return moment();
          },
        getPostId(){
            var positionId = window.location.href.split("~")[1];
            console.log("positionId",positionId)
            this.positionId = positionId;
            this.getPosition(positionId);
        },
        getPosition:function (positionId){   //axios
            //var postID = this.$route.params.id;
            
            axios.get(`https://ncconnect.sharepoint.com/sites/DevDITTracker/_api/web/lists/getByTitle('HR%20Post%20Request')/items(${positionId})?$select=Title,hiringManagerName,HiringManagerEmail,Division,Created,status,Position_x0020_Number,RecruitmentType,RecruitmentMin,RecruitmentMax,ID,PositionType,WorkingTitle,SME,Interviewer1,Interviewer2,Location,KSAs,DescriptionOfWork,AlternativeRecruitmentMethods,Division_x0020_Director_x0020_Ap,Section_x0020__x002f__x0020_Work,DateVacated,DaysToPost,Approval_x0020_Status`)
        
            .then(response =>{
                var vm = this;
                //let data = Object.entries(init)
               // let test = response.data;
                console.log(response)
                vm.post = response.data;
               
                console.log(vm.post)
            })
            .catch(function(error){
                console.log(error)
            })
            .then(function(){
                console.log("no problems")
                
            });
        },
    },
  
});