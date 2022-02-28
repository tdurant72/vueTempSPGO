const budgetapp = Vue.component(
    'budgetapp',{

    template:`
        <div :style="appStyle" id="hrApp">
            <h3>Position Requests</h3>
            <positions></positions>
        </div>
    `,

    data(){
        return{
            appStyle:{
                paddingRight:'5%',
                paddingLeft:'5%',
            }

        } 
    }
  
});