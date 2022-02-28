const employeeselection = Vue.component(
    'employeeselection',{

        template:`
        <div>
        <tool-bar :positionId="selectionId" ></tool-bar>
        <v-container >
        <h3 class="text-center blue white--text py-10 mx-3">Employee Selection</h3>
        <v-form class="px-3 " :style="formPost" id="esForm"  @submit.prevent="submitForm()"  :ref="selections" >
            <div :style="sectOne" id="sectOne">
            <h4>Section I</h4>
            <v-divider class="py-5"></v-divider>
                <div :style="half">
                    <v-text-field
                        v-model="selections.EmployeeName"
                        label="Employee Name"
                        id="EmployeeName"
                        >
                    </v-text-field>
                    <v-text-field
                    
                        v-model="selections.Position_x0020_Number"
                        label="Position Number"
                        id="Position_x0020_Number"
                        >
                    </v-text-field>
                    <v-text-field
                    
                        v-model="selections.Classification_x002d_value"
                        label="Classification"
                        id="Classification_x002d_value"
                        >
                    </v-text-field>
                    <v-select
                        v-model="selections.Division"
                        :items="divisionItems"
                        item-text="Division"
                        :item-value="selections.Division"
                        label="Divsion"
                        return-object
                    ></v-select>
                </div>
                <div :style="full">
                    <v-textarea
                        v-model="selections.HiringManagerNotes"
                        label="Hiring Manager Notes"
                        id="HiringManagerNotes"
                        >
                    </v-textarea>  
                </div>
            </div>

            <div :style="sectTwo" id="sectTwo"  class="py-5">
                <h4>Section II</h4>
                <v-divider  class="py-5"></v-divider>
                <div :style="half">
                    <v-text-field
                        v-model="selections.Type_x0020_of_x0020_Salary_x0020"
                        label="Type of Action"
                        id="Type_x0020_of_x0020_Salary_x0020"
                        >
                    </v-text-field> 
                    <v-text-field
                        v-model="selections.Total_x0020_Related_x0020_E_x002"
                        label="Total Related E/E"
                        id="Total_x0020_Related_x0020_E_x002"
                        >
                    </v-text-field> 
                    <v-text-field
                        v-model="selections.Total_x0020_Mos_x0020_Above_x002"
                        label="Total Mos Above Minimimum"
                        id="Total_x0020_Mos_x0020_Above_x002"
                        >
                    </v-text-field> 
                </div>
                <div :style="full">
                    <v-textarea
                        v-model="selections.HR_x0020_Notes_x0020_ES"
                        label="HR Notes"
                        id="HR_x0020_Notes_x0020_ES"
                        >
                    </v-textarea> 
                </div>
                <div :style="half">
                    <v-text-field
                        v-model="selections.HR_x0020_Approved_x0020_Salary"
                        label="HR Approved Salary"
                        id="
                        HR_x0020_Approved_x0020_Salary"
                        >
                    </v-text-field> 
                    <v-text-field
                        v-model="selections.Different_x0020_than_x0020_Requs"
                        label="HR Approved Salary"
                        id="
                        Different_x0020_than_x0020_Requs"
                        >
                    </v-text-field> 
                    <v-text-field
                        v-model="selections.hrRecruiterName"
                        label="AssignedTo"
                        id="
                        hrRecruiterName"
                        >
                    </v-text-field> 
                    <v-text-field
                        v-model="selections.hrRecruiterEmail"
                        label="AssignedTo Email"
                        id="
                        hrRecruiterName"
                        >
                    </v-text-field> 
                    <v-text-field
                        v-model="selections.hrApproverName"
                        label="HR Management"
                        id="
                        hrApproverName"
                        >
                    </v-text-field> 
                    <v-text-field
                        v-model="selections.hrApproverEmail"
                        label="HR Management Email"
                        id="
                        hrApproverEmail"
                        >
                    </v-text-field> 
                </div>
            </div>
            <div :style="sectThree" id="sectThree"  class="py-5">
                <h4>Section III</h4>
                <v-divider class="py-5"></v-divider>
                <div :style="half">
                    <v-text-field 
                        v-model="selections.hiringManagerName"
                        label="Hiring Manager"
                        id="HiringManager"
                        >
                    </v-text-field>
                    <v-text-field 
                    
                        v-model="selections.HiringManagerEmail"
                        label="Hiring Manager Email"
                        id="HiringManager"
                        >
                    </v-text-field>
                    <v-text-field 
                    
                        v-model="selections.firstDivMgmtApproveName"
                        label="1st Division Manager Approver"
                        id="firstDivMgmtApproveName"
                        >
                    </v-text-field>
                    <v-text-field 
                    
                        v-model="selections.firstDivMgmtApproveEmail"
                        label="1st Division Manager Approver Email"
                        id="firstDivMgmtApproveEmail"
                        >
                    </v-text-field>
                    <v-text-field 
                        v-model="selections.secondDivMgmtApproveName"
                        label="2nd Division Manager Approver"
                        id="secondDivMgmtApproveName"
                        >
                    </v-text-field>
                    <v-text-field 
                        v-model="selections.secondDivMgmtApproveEmail"
                        label="2nd Division Manager Approver Email"
                        id="secondDivMgmtApproveEmail"
                        >
                    </v-text-field>
                    <v-text-field 
                        v-model="selections.Division_x0020_Director_x0020_Ap"
                        label="Division Director Approver"
                        id="Division_x0020_Director_x0020_Ap"
                        >
                    </v-text-field>
                    <v-text-field 
                        v-model="selections.Division_x0020_Director_x0020_Em"
                        label="Division Dirctor Email"
                        id="Division_x0020_Director_x0020_Em"
                        >
                    </v-text-field>
                    <v-text-field 
                    
                        v-model="selections.CIO_x0020_Approver"
                        label="CIO Approver"
                        id="CIO_x0020_Approver"
                        >
                    </v-text-field>
                    <v-text-field 
                    
                        v-model="selections.CIO_x0020_Email"
                        label="CIO Email"
                        id="CIO_x0020_Email"
                        >
                    </v-text-field>
                </div>
            </div>

            <div :style="sectFour" id="sectFour" class="py-5">
                <h4>Section IV</h4>
                <v-divider class="py-5"></v-divider>
                <div :style="half">
                    <v-text-field 
                        v-model="selections.Budget_x0020_Code"
                        label="Budget Code"
                        id="Budget_x0020_Code"
                        >
                    </v-text-field>
                    <v-text-field 
                        v-model="selections.Email_x002f_Desktop_x0020_Bill_x"
                        label="Email/Desktop Bill Code"
                        id="Email_x002f_Desktop_x0020_Bill_x"
                        >
                    </v-text-field>
                    <v-text-field 
                        v-model="selections.Funds"
                        label="Funds"
                        id="Funds"
                        >
                    </v-text-field>
                    <v-text-field 
                        v-model="selections.Telephone_x002f_LAN_x002f_WAN_x0"
                        label="Telephone/LAN/WAN CC"
                        id="Telephone_x002f_LAN_x002f_WAN_x0"
                        >
                    </v-text-field>
                    <v-text-field 
                        v-model="selections.Cost_x0020_Center"
                        label="Cost Center"
                        id="Cost_x0020_Center"
                        >
                    </v-text-field>
                    <v-text-field 
                        v-model="selections.Cellphone_x0020_CC"
                        label="Cellphone CC"
                        id="Cellphone_x0020_CC"
                        >
                    </v-text-field>
                </div>
                <div :style="full">
                    <v-textarea 
                        v-model="selections.Budget_x0020_Notes"
                        label="Budget Notes"
                        id="Budget_x0020_Notes"
                        >
                    </v-textarea>
                </div>
                <div :style="half">
                    <v-text-field 
                        v-model="selections.Budget_x0020_Approved_x0020_Sala"
                        label="Budget Approved Salary"
                        id="Budget_x0020_Approved_x0020_Sala"
                        >
                    </v-text-field>
                    <v-text-field 
                        v-model="selections.Reserves"
                        label="Reserves (+)(-)"
                        id="Reserves"
                        >
                    </v-text-field>
                    <v-text-field 
                        v-model="selections.budgetApproverName"
                        label="Budget Approver"
                        id="budgetApproverName"
                        >
                    </v-text-field>
                    <v-text-field 
                        v-model="selections.budgetApproverEmail"
                        label="Budget Approver Email"
                        id="budgetApproverEmail"
                        >
                    </v-text-field>
                    <v-text-field 
                        v-model="selections.budgetOfficerName"
                        label="Budget Officer/Management"
                        id="budgetOfficerName"
                        >
                    </v-text-field>
                    <v-text-field 
                        v-model="selections.budgetOfficerEmail"
                        label="Budget Officer Email"
                        id="budgetOfficerEmail"
                        >
                    </v-text-field>
                </div>
            </div>
            <div :style="sectFive" id="sectFive" class="py-5">
                <h4>Section V</h4>
                <v-divider class="py-5"></v-divider>
                <v-textarea 
                    v-model="selections.Executive_x0020_Summary"
                    label="Executive Summary"
                    id="Executive_x0020_Summary"
                    >
                </v-textarea>
                <v-textarea
                    v-model="selections.Recruitment_x002f_Retention_x002"
                    label="Recruitment/Retention Issues"
                    id="Recruitment_x002f_Retention_x002"
                    >
                </v-textarea>
                <v-textarea 
                    v-model="selections.Internal_x0020_Equity"
                    label="Internal Equity"
                    id="Internal_x0020_Equity"
                    >
                </v-textarea>
                <v-textarea 
                    v-model="selections.Market_x0020_Relativity_x002f_Co"
                    label="Market Relativity Comp-Ratio"
                    id="Market_x0020_Relativity_x002f_Co"
                    >
                </v-textarea>
                <v-textarea 
                    v-model="selections.Specialized_x0020_Skillset"
                    label="Specialized Skillset"
                    id="Specialized_x0020_Skillset"
                    >
                </v-textarea>
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
                key:'',
                selectionId:null,
               positions:[] ,
               selections:[],
               selections:{
                hrRecruiterName:'',
                hrRecruiterEmail:'',
                ID:'',
                Employee_x0020_Name:'',
                hiringManagerName:'',
                HiringManagerEmail:'',
                Division:'',
                HM_x0020_Notes_x0020_ES:'',
                Requested_x0020_Salary:'',
                Anticipated_x0020_Start_x0020_Da:'',
                Type_x0020_of_x0020_Salary_x0020:'',
                Total_x0020_Related_x0020_E_x002:'',
                Total_x0020_Mos_x0020_Above_x002:'',
                Equity_x0020_Concern:'',
                HR_x0020_Notes_x0020_ES:'',
                HR_x0020_Approved_x0020_Salary:'',
                Position_x0020_Number:'',
                DescriptionOfWork:'',
                AlternativeRecruitmentMethods:'',
                HiringManagerNotes:'',
                OData__x0031_st_x0020_Division_x0020_M:'',
                OData__x0032_ndDivision_x0020_Manageme:'',
                CIO_x0020_Approver:'',
                CIO_x0020_Email:'',
                Division_x0020_Director_x0020_Ap:'',
                Division_x0020_Director_x0020_Em:'',
                Budget_x0020_Code:'',
                Funds:'',
                Different_x0020_than_x0020_Requs:'',
                hrApproverName:'',
                hrApproverEmail:'',
                Cost_x0020_Center:'',
                Cellphone_x0020_CC:'',
                Budget_x0020_Notes:'',
                Budget_x0020_Approved_x0020_Sala:'',
                Reserves:'',
                budgetApproverName:'',
                budgetApproverEmail:'',
                budgetOfficerName:'',
                budgetOfficerEmail:'',
                Specialized_x0020_Skillset:'',
                Internal_x0020_Equity:'',
                Executive_x0020_Summary:'',
                Email_x002f_Desktop_x0020_Bill_x:'',
                Telephone_x002f_LAN_x002f_WAN_x0:'',
                Recruitment_x002f_Retention_x002:'',
                Market_x0020_Relativity_x002f_Co:'',
                firstDivMgmtApproveName:'',
                firstDivMgmtApproveEmail:'',
                secondDivMgmtApproveName:'',
                secondDivMgmtApproveEmail:''
                }, 
                menu: false,
                    modal: false,
                    dataLoaded:false,
                    divisionItems:[],
                     positionTypeItems:[],
                     recruitmentTypeItems:[],
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
                   sectFive:{
                       backgroundColor:'#fac070',
                       paddingRight:'20px',
                       paddingLeft:'20px',
                   },   
            }  
        },
        created(){
            this.getPositionId();

        },
        watch:{
            '$route':'getPostitionId',
            selectionId:{
                handler(val){
                    this.key = val
                    console.log(this.key)
                    
                },
                immediate:true
            }
        },
        methods:{
            getPositionId(){
                var selectionId = window.location.href.split("~")[1];
                console.log("selectionId",selectionId)
                this.selectionId = selectionId
                this.getSelection()
            },
            getSelection:function (){   //axios
                axios.all([
                    axios.get(`https://ncconnect.sharepoint.com/sites/DevDITTracker/_api/web/lists/getByTitle('HR%20Post%20Request')/items(${this.selectionId})`),
                    axios.get("https://ncconnect.sharepoint.com/sites/DevDITTracker/_api/web/lists/getByTitle('HR%20Post%20Request')/fields?$filter=EntityPropertyName eq 'Division'") ,
                    axios.get("https://ncconnect.sharepoint.com/sites/DevDITTracker/_api/web/lists/getByTitle('HR%20Post%20Request')/fields?$filter=EntityPropertyName eq 'RecruitmentType'"),
                    axios.get("https://ncconnect.sharepoint.com/sites/DevDITTracker/_api/web/lists/getByTitle('HR%20Post%20Request')/fields?$filter=EntityPropertyName eq 'PositionType'")
                ])
                
                
                .then(axios.spread((selectionRes, divisionRes,recruitmentRes, positionRes) =>{
                    var vm = this;
                    vm.selections = selectionRes.data;
                    vm.divisionItems = divisionRes.data.value[0].Choices;
                    vm.recruitmentTypeItems = recruitmentRes.data.value[0].Choices;
                    vm.positionTypeItems = positionRes.data.value[0].Choices;
                    //console.log(vm.selections)
                }))
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
                oListItem.set_item("Employee_x0020_Name",this.selections.Employee_x0020_Name);
                oListItem.set_item('Position_x0020_Number', this.selections.Position_x0020_Number);
                oListItem.set_item('Position_x0020_Number', this.selections.Position_x0020_Number);
                oListItem.set_item('Classification_x002d_value', this.selections.Classification_x002d_value);
                oListItem.set_item('Division', this.selections.Division);
                oListItem.set_item('HiringManagerNotes', this.selections.HiringManagerNotes);
                oListItem.set_item('Type_x0020_of_x0020_Salary_x0020', this.selections.Type_x0020_of_x0020_Salary_x0020);
                oListItem.set_item('Total_x0020_Related_x0020_E_x002', this.selections.Total_x0020_Related_x0020_E_x002);
                oListItem.set_item('Total_x0020_Mos_x0020_Above_x002', this.selections.Total_x0020_Mos_x0020_Above_x002);
                oListItem.set_item('HR_x0020_Notes_x0020_ES', this.selections.HR_x0020_Notes_x0020_ES);
                oListItem.set_item('HR_x0020_Approved_x0020_Salary', this.selections.HR_x0020_Approved_x0020_Salary);
                oListItem.set_item('hrRecruiterName', this.selections.hrRecruiterName);
                oListItem.set_item('hrRecruiterEmail', this.selections.hrRecruiterEmail);
                oListItem.set_item('hrApproverName', this.selections.hrApproverName);
                oListItem.set_item('hrApproverEmail', this.selections.hrApproverEmail);
                oListItem.set_item('hiringManagerName', this.selections.hiringManagerName);
                oListItem.set_item('HiringManagerEmail', this.selections.HiringManagerEmail);
                oListItem.set_item('firstDivMgmtApproveName', this.selections.firstDivMgmtApproveName);
                oListItem.set_item('firstDivMgmtApproveEmail', this.selections.firstDivMgmtApproveEmail);
                oListItem.set_item('secondDivMgmtApproveName', this.selections.secondDivMgmtApproveName);
                oListItem.set_item('secondDivMgmtApproveEmail', this.selections.secondDivMgmtApproveEmail);
                oListItem.set_item('Division_x0020_Director_x0020_Ap', this.selections.Division_x0020_Director_x0020_Ap);
                oListItem.set_item('Division_x0020_Director_x0020_Em', this.selections.Division_x0020_Director_x0020_Em);
                oListItem.set_item('CIO_x0020_Approver', this.selections.CIO_x0020_Approver);
                oListItem.set_item('CIO_x0020_Email', this.selections.CIO_x0020_Email);
                oListItem.set_item('Budget_x0020_Code', this.selections.Budget_x0020_Code);
                oListItem.set_item('Email_x002f_Desktop_x0020_Bill_x', this.selections.Email_x002f_Desktop_x0020_Bill_x);
                oListItem.set_item('Funds', this.selections.Funds);
                oListItem.set_item('Telephone_x002f_LAN_x002f_WAN_x0', this.selections.Telephone_x002f_LAN_x002f_WAN_x0);
                oListItem.set_item('Cost_x0020_Center', this.selections.Cost_x0020_Center);
                oListItem.set_item('Cellphone_x0020_CC', this.selections.Cellphone_x0020_CC);
                oListItem.set_item('Budget_x0020_Notes', this.selections.Budget_x0020_Notes);
                oListItem.set_item('Budget_x0020_Approved_x0020_Sala', this.selections.Budget_x0020_Approved_x0020_Sala);
                oListItem.set_item('Reserves', this.selections.Reserves);
                oListItem.set_item('budgetApproverName', this.selections.budgetApproverName);
                oListItem.set_item('budgetApproverEmail', this.selections.budgetApproverEmail);
                oListItem.set_item('budgetApproverName', this.selections.budgetApproverName);
                oListItem.set_item('budgetOfficerName', this.selections.budgetOfficerName);
                oListItem.set_item('budgetOfficerEmail', this.selections.budgetOfficerEmail);
                oListItem.set_item('Executive_x0020_Summary', this.selections.Executive_x0020_Summary);
                oListItem.set_item('Recruitment_x002f_Retention_x002', this.selections.Recruitment_x002f_Retention_x002);
                oListItem.set_item('Internal_x0020_Equity', this.selections.Internal_x0020_Equity);
                oListItem.set_item('Specialized_x0020_Skillset', this.selections.Specialized_x0020_Skillset);
                oListItem.set_item('Market_x0020_Relativity_x002f_Co', this.selections.Market_x0020_Relativity_x002f_Co);

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
        }
    })
    
