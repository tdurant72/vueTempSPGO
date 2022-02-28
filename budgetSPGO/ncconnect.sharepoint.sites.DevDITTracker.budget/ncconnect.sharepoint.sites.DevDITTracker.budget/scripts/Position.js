const position = Vue.component(
    'position',{
    template:`
    <div>
    <tool-bar :positionId="this.positionId" ></tool-bar>
    <v-container >
    <h3  class="text-center blue white--text py-10 mx-3">Post Request</h3>
        <v-form class="px-3 " :style="formPost" id="postForm"  @submit.prevent="submitForm()"  :ref="post" >
        <div :style="sectOne" id="sectOne">
        <h4>Section I</h4>
        <v-divider class="py-5"></v-divider>
        <div :style="half">
            
            <v-select
                v-model="postData.Division"
                :items="divisionItems"
                item-text="Division"
                item-value="Division"
                label="Divsion"
                return-object
            ></v-select>
            <v-text-field
                
                v-model="postData.Section_x0020__x002f__x0020_Work"
                label="Section Of Work"
                id="Section_x0020__x002f__x0020_Work"
                >
            </v-text-field>

            <v-text-field
                
                v-model="postData.Position_x0020_Number"
                label="Position Number"
                id="Position_x0020_Number"
                >
            </v-text-field>

            
            <v-menu ref="menu" v-model="menu" :close-on-content-click="false"
            transition="scale-transition" offset-y min-width="290px"><template
                v-slot:activator="{ on }">
                <v-text-field v-model="formatDate" label="Date Vacated" readonly
                    v-on="on" >
                </v-text-field>
            </template>
            <v-date-picker v-model="formatDate" no-title @input="menu=false"></v-date-picker>
        </v-menu>
            <v-select

                v-model="postData.RecruitmentType"
                :items="recruitmentTypeItems"
                item-text="RecruitmentType"
                item-value="RecruitmentType"
                label="Recruitment Type"
                return-object
            ></v-select>
            <v-text-field 
                
                v-model="postData.DaysToPost"
                label="Days To Post"
                id="DaysToPost"
                >
            </v-text-field>

            <div class="classSearchFields">
                <label class="autoLabel">Classification Search</label>
                <input 
                    class="autoInput"
                    type="text"
                    v-model="searchClassification"
                    @input="getclassificationNames"
                    placeholder="Search..."
                />
                <ul 
                    v-show="isOpen"
                    class="autocomplete-results">
                    <li 
                        v-for="(classification , i) in siteClassifications"
                        :key="i"
                        @click="updateSelectedClassification(classification)"
                        class="autocomplete-result">
                        {{classification.Job_x0020_Title}}
                    </li>
                </ul>
            </div>

            <v-text-field 
                v-model="postData.Classification_x002d_value"
                label="Classification"
                id="Classification_x002d_value"
                >
            </v-text-field>
            <v-text-field 
            
                v-model="postData.SalaryGrade"
                label="Salary Grade"
                id="SalaryGrade"
                >
            </v-text-field> 

            <v-text-field 
            
                v-model="postData.RecruitmentMin"
                label="Recruitment Min"
                id="RecruitmentMin"
                >
            </v-text-field>

            <v-text-field 
            
                v-model="postData.RecruitmentMax"
                label="Recruitment Max"
                id="RecruitmentMax"
                >
            </v-text-field>
            <v-select
                v-model="postData.PositionType"
                :items="positionTypeItems"
                label="Position Type"
                return-object
            ></v-select>
            <v-text-field 
            
                v-model="postData.WorkingTitle"
                label="WorkingTitle"
                id="WorkingTitle"
                >
            </v-text-field>
            </div>
            <div :style="half">
            <v-text-field 
            
                v-model="postData.hiringManagerName"
                label="Hiring Manager"
                id="HiringManager"
                >
            </v-text-field>
            <v-text-field 
            
                v-model="postData.HiringManagerEmail"
                label="Hiring Manager Email"
                id="HiringManager"
                >
            </v-text-field>

            <v-text-field 
            
                v-model="postData.SME"
                label="SME"
                id="SME"
                >
            </v-text-field>

            <v-text-field 
            
                v-model="postData.Interviewer1"
                label="Interviewer1"
                id="Interviewer1"
                >
            </v-text-field>

            <v-text-field
            
                v-model="postData.Interviewer2"
                label="Interviewer2"
                id="Interviewer2"
                >
            </v-text-field>

            <v-text-field 
            
                v-model="postData.Location"
                label="Location"
                id="Location"
                >
            </v-text-field>
            <v-text-field 
            
                v-model="postData.firstDivMgmtApproveName"
                label="1st Division Mgt Approver"
                id="firstDivMgmtApproveName"
                >
            </v-text-field>
            <v-text-field 
            
                v-model="postData.firstDivMgmtApproveEmail"
                label="1st Division Mgt Approver Email"
                id="firstDivMgmtApproveEmail"
                >
            </v-text-field>

            <v-text-field 
            
                v-model="postData.secondDivMgmtApproveName"
                label="2nd Division Mgt Approver"
                id="secondDivMgmtApproveName"
                >
            </v-text-field>
            <v-text-field 
            
                v-model="postData.secondDivMgmtApproveEmail"
                label="2nd Division Mgt Approver Email"
                id="secondDivMgmtApproveEmail"
                >
            </v-text-field>

            <v-text-field 
            
                v-model="postData.Division_x0020_Director_x0020_Ap"
                label="Division Director Approver"
                id="Division_x0020_Director_x0020_Ap"
                >
            </v-text-field>
            <v-text-field 
            
                v-model="postData.Division_x0020_Director_x0020_Em"
                label="Division Director Email"
                id="Division_x0020_Director_x0020_Em"
                >
            </v-text-field>

            <v-text-field 
            
                v-model="postData.CIO_x0020_Approver"
                label="CIO Approver"
                id="CIO_x0020_Approver"
                >
            </v-text-field>
            <v-text-field 
            
                v-model="postData.CIO_x0020_Email"
                label="CIO Email"
                id="CIO_x0020_Email"
                >
            </v-text-field>


        </div>
        <div :style="full">
            <v-textarea 
            textarea
            rows="5"
                v-model="postData.DescriptionOfWork"
                label="Description Of Work"
                id="DescriptionOfWork"
                >
            </v-textarea>

            <v-textarea 
            textarea
            rows="5"
                v-model="postData.KSAs"
                label="KSAs"
                id="KSAs"
                >
            </v-textarea>

            <v-textarea
            textarea
            rows="5"
            v-model="postData.ManagementPreferenes"
                label="Management Preferences"
                id="ManagementPreferenes"
                >
            </v-textarea>

            <v-textarea
                textarea
                rows="5"
                v-model="postData.AlternativeRecruitmentMethods"
                label="Alternative Recruitment Methods"
                id="AlternativeRecruitmentMethods"
                >
            </v-textarea>

            <v-textarea 
                textarea
                rows="5"
                v-model="postData.HiringManagerNotes"
                label="Hiring Manager Notes"
                id="HiringManagerNotes"
                >
            </v-textarea> 
    </div>
    
    </div>
            <div class="my-2">
                <v-btn small color="primary" @click="submitForm">Save</v-btn>
            </div>
        </v-form>
    </v-container>
    </div>
    `,
    data(){
        return{
            //reg:/^((\w+\.)*\w+)@(\ncdot | ncdit+\.)+(gov)/,
            itemID:null,
            key:'',
            positionId:null,
            classifications:[],
           positions:[] ,
           post:[],
           post:{
                Division:'',
                Created:'',
                status:'',
                ID:'',
                Position_x0020_Number:'',
                RecruitmentType:'',
                RecruitmentMin:'',
                RecruitmentMax:'',
                PositionType:'',
                WorkingTitle:'',
                SME:'',
                Interviewer1:'',
                Interviewer2:'',
                Location:'',
                KSAs:'',
                DescriptionOfWork:'',
                AlternativeRecruitmentMethods:'',
                HiringManagerNotes:'',
                OData__x0031_st_x0020_Division_x0020_M:'',
                OData__x0032_ndDivision_x0020_Manageme:'',
                CIO_x0020_Approver:'',
                Division_x0020_Director_x0020_Ap:'',
                ManagementPreferenes:'',
                Section_x0020__x002f__x0020_Work:'',
                DateVacated:'',
                DaysToPost:'',
                hiringManagerName:'',
                HiringManagerEmail:'',
                firstDivMgmtApproveName:'',
                firstDivMgmtApproveEmail:'',
                secondDivMgmtApproveName:'',
                secondDivMgmtApproveEmail:'',
                CIO_x0020_Approver:'',
                CIO_x0020_Email:'',
                Division_x0020_Director_x0020_Ap:'',
                Division_x0020_Director_x0020_Em:'',
            },    
            siteClassificationsData:[],              
            searchClassification:'',
            status:'',
            isLoading: false,
            model: null,
            siteClassifications:[],
            isOpen:false,
            isAsync:{
                type:Boolean,
                required:false,
                default:false,
            },
            selectedClassification:{
                Id:null,
                ID:null,
                Job_x0020_Title:null,
                Minimum:null,
                Job_x0020_Pay_x0020_Group:null,
                Title:null
            },
            menu: false,
            modal: false,
            dataLoaded:false,
            divisionItems:[],
             positionTypeItems:['Permanent Full-Time', 'Permanent Part-Time', 'Time Limited Full-Time', 'Time Limited Part-Time', 'Exempt', 'Exempt Managerial', 'Exempt Statutory', 'Exempt Policymaking'],
             recruitmentTypeItems:[],
            postData:{},
            classificationsData:{},
            //js css
            formPost:{
             display:'grid' 
           },
           full:{
              display:'grid',
             gridTemplateColumns:'1fr',  
           },
           half:{
            display:'grid',
            gridTemplateColumns:'repeat(2, 1fr)',
            gridGap:'20px'
           },
           sectOne:{
            backgroundColor:'#fac070',
            paddingRight:'20px',
            paddingLeft:'20px',
            paddingTop:'40px'
            },
            sectTwo:{
                backgroundColor:'#fcda18',
                paddingRight:'20px',
                paddingLeft:'20px',
            },
            sectThree:{
                backgroundColor:'#cccccc',
                paddingRight:'20px',
                paddingLeft:'20px',
            },
            sectFour:{
                backgroundColor:'#bbdd8c',
                paddingRight:'20px',
                paddingLeft:'20px',
            },
        }  
    },
    created(){
        this.getPositionId();
    },
    computed:{
        updatePost:{
            get:function(){
               return this.post 
            },
            set:function(val){
                this.postData = val
            }
        },
        updateClassifications:{
            get:function(){
               return this.classifications
            },
            set:function(val){
                this.classificationsData = val
            }
        },
        
        formatDate(){
            let dateCheck = this.postData.DateVacated;
            if(dateCheck !== null){
                return moment(this.postData.DateVacated).format('MM/DD/YYYY')
            }
            
        },
    },
    watch:{
        '$route':'getPosition',
        positionId:{
            handler(val){
                this.key = val.ID
                console.log(this.key)
                
            },
        },
        formatDate:{
            handler(val){
              if(val !==null){
                    return moment(val).format('MM/DD/YYYY hh:mm')
                }  
            },
            immediate:true
        },
        post:{
            handler(val){
                   this.postData = val;
                   if(this.postData.DateVacated !== null)this.postData.DateVacated.substr(0, 10)
                   this.dataLoaded = true;
                   
              //console.log("from watcher postData",this.postData ) 

            },
           immediate:true,
            deep:true
        },
        classifications:{
            handler(val){
                   this.classificationsData = val;
                   this.dataLoaded = true;
             // console.log("from watcher classificationsData",this.classificationsData ) 
            },
           immediate:true,
            deep:true
        },
        searchClassificationsData:{
            handler(val){
                this.postData.RecruitmentMin = val.Minimum
                this.postData.Classification_x002d_value = val.Job_x0020_Title
                this.postData.ClassificationId = val.Id

             // console.log("this.postData.RecruitmentMin",this.postData.RecruitmentMin)
            },
        },
        siteClassifications:function(value, oldValue){
            if(this.isAsync){
                this.siteClassifications = value;
                this.isOpen = true;
                this.isLoading = false;
            }
        },
    },
    filters:{
        moment:function(value){
            if(value){
                return moment(value).format('MM/DD/YYYY hh:mm')
            }
        }
    },
    methods:{
        moment: function () {
            return moment();
          },
        getPositionId(){
            var positionId = window.location.href.split("~")[1];
            this.positionId = positionId;
            this.itemID = positionId;
            console.log("getPositionId:",positionId)
            // this.getPosition(positionId);
            this.getSPData(positionId);
        },
        getSPData:function (positionId){
            axios.all([
                axios.get(`https://ncconnect.sharepoint.com/sites/DevDITTracker/_api/web/lists/getByTitle('HR%20Post%20Request')/items(${positionId})?$select=Title,hrRecruiterName,hrRecruiterEmail,hiringManagerName,HiringManagerEmail,Division,Created,status,ID,Position_x0020_Number,RecruitmentType,RecruitmentMin,RecruitmentMax,PositionType,WorkingTitle,SME,Interviewer1,Interviewer2,Location,KSAs,DescriptionOfWork,AlternativeRecruitmentMethods,HiringManagerNotes,OData__x0031_st_x0020_Division_x0020_M,OData__x0032_ndDivision_x0020_Manageme,CIO_x0020_Approver,Division_x0020_Director_x0020_Ap,ManagementPreferenes,Section_x0020__x002f__x0020_Work,DateVacated,DaysToPost,ClassificationId,Classification_x002d_value,CIO_x0020_Approver,CIO_x0020_Email,Division_x0020_Director_x0020_Ap,Division_x0020_Director_x0020_Em,firstDivMgmtApproveName,firstDivMgmtApproveEmail,secondDivMgmtApproveName,secondDivMgmtApproveEmail,SalaryGrade`),
                axios.get("https://ncconnect.sharepoint.com/sites/DevDITTracker/_api/web/lists/getByTitle('Classification')/items"),
                axios.get("https://ncconnect.sharepoint.com/sites/DevDITTracker/_api/web/lists/getByTitle('HR%20Post%20Request')/fields?$filter=EntityPropertyName eq 'status'") ,
                axios.get("https://ncconnect.sharepoint.com/sites/DevDITTracker/_api/web/lists/getByTitle('HR%20Post%20Request')/fields?$filter=EntityPropertyName eq 'Division'") ,
                axios.get("https://ncconnect.sharepoint.com/sites/DevDITTracker/_api/web/lists/getByTitle('HR%20Post%20Request')/fields?$filter=EntityPropertyName eq 'PositionType'") ,
                axios.get("https://ncconnect.sharepoint.com/sites/DevDITTracker/_api/web/lists/getByTitle('HR%20Post%20Request')/fields?$filter=EntityPropertyName eq 'RecruitmentType'") 
              ])
              .then(axios.spread((postRes, classRes,statusRes, divisionRes, positionRes, recruitmentRes) => {
                var vm = this;
                vm.post = postRes.data;
                if(vm.post.DateVacated !== null){
                    vm.post.DateVacated.substring(0,10)
                }
               // console.log(vm.post.PositionType)
               // console.log(vm.post);
                classRes.data.value.forEach((item)=>{
                    vm.classifications.push(item)
                })
                //console.log(vm.classifications)
                ////console.log("status", statusRes.data.value[0].Choices)
                console.log("postition type", positionRes.data.value[0].Choices)
               // console.log("division", divisionRes.data.value[0].Choices)
                vm.divisionItems = divisionRes.data.value[0].Choices;
               // console.log("recruitment type", recruitmentRes.data.value[0].Choices)
                vm.recruitmentTypeItems = recruitmentRes.data.value[0].Choices;
              }));
        },
        onChange(){
            this.isOpen = true;
            if(this.isAsync){
                this.isLoading = true;
            }else{
                this.isOpen = true
            }

        },
        updateSelectedClassification(selectedItem){
            this.selectedclassification = selectedItem;
            this.searchClassification = selectedItem.Job_x0020_Title;
            this.searchClassificationsData = this.selectedItem
            this.postData.RecruitmentMin = selectedItem.Minimum
            this.postData.Classification_x002d_value = selectedItem.Job_x0020_Title
            this.postData.SalaryGrade = selectedItem.Job_x0020_Pay_x0020_Group
            this.postData.ClassificationId = selectedItem.Id
            console.log("from updateSelectedClassification",this.postData.RecruitmentMin)
            this.isOpen = false;
        },
        getclassificationNames(){   
            axios.get("https://ncconnect.sharepoint.com/sites/DevDITTracker/_api/web/lists/getByTitle('Classification')/items?$select=Job_x0020_Title,Id,Minimum,Job_x0020_Pay_x0020_Group,Title&$filter=startswith(Job_x0020_Title,'"+this.searchClassification+"')")
            .then(response =>{
                this.isOpen = true;
                var vm = this;
                let classdata = response.data.value.forEach((item)=>{
                    vm.siteClassifications.push(item)
                })
               // console.log("siteClassifications",vm.siteClassifications)
            })
            .catch(function(error){
                console.log(error)
            })
            .then(function(){
                console.log("no problems")
            });
        },


        submitForm(){
            //console.log(this.post)
            var clientContext = new SP.ClientContext('https://ncconnect.sharepoint.com/sites/DevDITTracker');
            var listName = "HR Post Request";
            var oList = clientContext.get_web().get_lists().getByTitle(listName);
            var itemID = this.itemID;
            //var itemCreateInfo = new SP.ListItemCreationInformation();
            var oListItem = oList.getItemById(itemID);
            oListItem.set_item("Division",this.postData.Division);
            oListItem.set_item('Section_x0020__x002f__x0020_Work', this.postData.Section_x0020__x002f__x0020_Work);
            oListItem.set_item('Position_x0020_Number', this.post.Position_x0020_Number);
            oListItem.set_item('DateVacated', this.postData.DateVacated);
            oListItem.set_item('RecruitmentType', this.postData.RecruitmentType);
            oListItem.set_item('DaysToPost', this.postData.DaysToPost);
            oListItem.set_item('Classification_x002d_value', this.post.Classification_x002d_value);
            oListItem.set_item('SalaryGrade', this.postData.SalaryGrade);
            oListItem.set_item('RecruitmentMin', this.postData.RecruitmentMin);
            oListItem.set_item('RecruitmentMax', this.postData.RecruitmentMax);
            oListItem.set_item('PositionType', this.postData.PositionType);
            oListItem.set_item('WorkingTitle', this.postData.WorkingTitle);
            oListItem.set_item('hiringManagerName', this.postData.hiringManagerName);
            oListItem.set_item('HiringManagerEmail', this.postData.HiringManagerEmail);
            oListItem.set_item('firstDivMgmtApproveName', this.postData.firstDivMgmtApproveName);
            oListItem.set_item('firstDivMgmtApproveEmail', this.postData.firstDivMgmtApproveEmail);
            oListItem.set_item('secondDivMgmtApproveName', this.postData.secondDivMgmtApproveName);
            oListItem.set_item('secondDivMgmtApproveEmail', this.postData.secondDivMgmtApproveEmail);
            oListItem.set_item('Division_x0020_Director_x0020_Ap', this.postData.Division_x0020_Director_x0020_Ap);
            oListItem.set_item('Division_x0020_Director_x0020_Em', this.postData.Division_x0020_Director_x0020_Em);
            oListItem.set_item('CIO_x0020_Approver', this.postData.CIO_x0020_Approver);
            oListItem.set_item('CIO_x0020_Email', this.postData.CIO_x0020_Email);
            oListItem.set_item('SME', this.postData.SME);
            oListItem.set_item('Interviewer1', this.postData.Interviewer1);
            oListItem.set_item('Interviewer2', this.postData.Interviewer2);
            oListItem.set_item('Location', this.postData.Location);
            oListItem.set_item('DescriptionOfWork', this.postData.DescriptionOfWork);
            oListItem.set_item('KSAs', this.postData.KSAs);
            oListItem.set_item('ManagementPreferenes', this.postData.ManagementPreferenes);
            oListItem.set_item('AlternativeRecruitmentMethods', this.postData.AlternativeRecruitmentMethods);
            oListItem.set_item('HiringManagerNotes', this.postData.HiringManagerNotes);
            oListItem.update();
            clientContext.executeQueryAsync(
                Function.createDelegate(this, this.editPostRequestSucceeded),
                Function.createDelegate(this, this.editPostRequestFailed)
            );
        },
        editPostRequestSucceeded() {
            // console.log('Item edited with ID: ' + oListItem.get_id());
            console.log('Item edited');
            this.$router.push('/')
        },
        editPostRequestFailed(sender, args) {
            // console.log('failed');
            console.log('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
        },
    },
})