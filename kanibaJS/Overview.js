var htmlNtoficationsDiv=''
var htmlNot=''
const countElemArray = {};
var CountForPaidbooking=0
var countforOutandingbookigg=0
var CreateFilterForTopcalculator={}
function CreateOverViewScreen(){


    var OverviewData=JSON.parse(sessionStorage.getItem("bookings"))["Dt"]

    var totalbookings=OverviewData.length

    
        for(var i=0; i<OverviewData.length; i++) {
            for (const element in OverviewData[i]) {
                if(element=="Description"){
                    if (countElemArray[OverviewData[i]["Description"]]) {
                        countElemArray[OverviewData[i]["Description"]] += 1;
                    } else {
                        countElemArray[OverviewData[i]["Description"]] = 1
                    }
                }
              
        }
    }
    CreateFilterForTopcalculator["totalOutsanding"]=0
    CreateFilterForTopcalculator["Amount paid"]=0
    
    for(var i=0; i<OverviewData.length; i++) {
        
        for (const element in OverviewData[i]) {
            if(element=="Amount paid"){
                if(OverviewData[i][element]!==null){
                    CountForPaidbooking+=1
                }
                if (CreateFilterForTopcalculator[element]) {
                    CreateFilterForTopcalculator[element] += OverviewData[i][element];
                }else{
                    CreateFilterForTopcalculator["Amount paid"]=OverviewData[i][element];
                }
            }
          
    }
    }
    
    for(var i=0; i<OverviewData.length; i++) {
        var amountpaid=null
       var totalOutsanding=0
        for (const element in OverviewData[i]) {
           
            if(element=="Amount paid"){
                amountpaid=OverviewData[i][element]
            }
            if(element=="Total payable inc VAT"){
                totalOutsanding=parseInt( OverviewData[i][element])
            }
         
    }
    
    if(amountpaid==null && totalOutsanding>0){
        countforOutandingbookigg+=1
        if (CreateFilterForTopcalculator["totalOutsanding"]) {
            CreateFilterForTopcalculator["totalOutsanding"] += totalOutsanding;
        } else{
            CreateFilterForTopcalculator["totalOutsanding"] = totalOutsanding;
        }
    }
    }
    
    if(CreateFilterForTopcalculator["totalOutsanding"]){
    
    }else{
        CreateFilterForTopcalculator["totalOutsanding"]=0
    }
    
    if(CreateFilterForTopcalculator["Amount paid"]){
    
    }else{
        CreateFilterForTopcalculator["Amount paid"]=0
    }
    
  
    
    topOverview=`<div class="analytics-sparkle-area">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div class="analytics-sparkle-line reso-mg-b-30">
                    <div class="analytics-content">
                        <h5>Total amount Paid</h5>
                        <h2>R<span class="counter">${CreateFilterForTopcalculator["Amount paid"]}</span> <span class="tuition-fees">exc. Cancelled and Declined</span></h2>
                        <span class="text-success">${(CountForPaidbooking/totalbookings)*100}%</span>
                        <div class="progress m-b-0">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:${(CountForPaidbooking/totalbookings)*100}%;"> <span class="sr-only">20% Complete</span> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div class="analytics-sparkle-line reso-mg-b-30">
                    <div class="analytics-content">
                        <h5>Outstanding Amount</h5>
                        <h2>R<span class="counter">${CreateFilterForTopcalculator["totalOutsanding"]}</span> <span class="tuition-fees">exc. Cancelled and Declined</span></h2>
                        <span class="text-danger">${(countforOutandingbookigg/totalbookings)*100}%</span>
                        <div class="progress m-b-0">
                            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:${(countforOutandingbookigg/totalbookings)*100}%;"> <span class="sr-only">230% Complete</span> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div class="analytics-sparkle-line reso-mg-b-30 table-mg-t-pro dk-res-t-pro-30">
                    <div class="analytics-content">
                        <h5>Total Cost</h5>
                        <h2>R<span class="counter">${CreateFilterForTopcalculator["totalOutsanding"] + CreateFilterForTopcalculator["Amount paid"]}</span> <span class="tuition-fees">Pending</span></h2>
                        <span class="text-info">100%</span>
                        <div class="progress m-b-0">
                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:100%;"> <span class="sr-only">20% Complete</span> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div class="analytics-sparkle-line table-mg-t-pro dk-res-t-pro-30">
                    <div class="analytics-content">
                        <h5>Payments difference</h5>
                        <h2>R<span class="counter">${CreateFilterForTopcalculator["totalOutsanding"] - CreateFilterForTopcalculator["Amount paid"]}</span> <span class="tuition-fees">Only approved</span></h2>
                        <span class="text-inverse">100%</span>
                        <div class="progress m-b-0">
                            <div class="progress-bar progress-bar-inverse" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:100%;"> <span class="sr-only">230% Complete</span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>`
    
    ChartOverView=`<div class="product-sales-area mg-tb-30">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                <div class="product-sales-chart">
                    <div class="portlet-title">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="caption pro-sl-hd">
                                    <span class="caption-subject"><b>Monthly payments</b></span>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="actions graph-rp graph-rp-dl">
                                    <p>These are payments that are due or have been paid for that months</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="list-inline cus-product-sl-rp">
                        <li>
                            <h5><i class="fa fa-circle" style="color: #006DF0;"></i>Approved</h5>
                        </li>
                        <li>
                            <h5><i class="fa fa-circle" style="color: #933EC5;"></i>Pending</h5>
                        </li>
                        <li>
                        <h5><i class="fa fa-circle" style="color: #933EC5;"></i>Completed</h5>
                         </li>
                       
                    <div id="extra-area-chart" style="height: 356px;"></div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div class="white-box analytics-info-cs mg-b-10 res-mg-b-30 res-mg-t-30 table-mg-t-pro-n tb-sm-res-d-n dk-res-t-d-n">
                    <h3 class="box-title">Approved bookings</h3>
                    <ul class="list-inline two-part-sp">
                        <li>
                            <div id="sparklinedash"></div>
                        </li>
                        <li class="text-right sp-cn-r"><i class="fa fa-level-up" aria-hidden="true"></i> <span class="counter text-success">1500</span></li>
                    </ul>
                </div>
                <div class="white-box analytics-info-cs mg-b-10 res-mg-b-30 tb-sm-res-d-n dk-res-t-d-n">
                    <h3 class="box-title">Pending</h3>
                    <ul class="list-inline two-part-sp">
                        <li>
                            <div id="sparklinedash2"></div>
                        </li>
                        <li class="text-right graph-two-ctn"><i class="fa fa-level-up" aria-hidden="true"></i> <span class="counter text-purple">3000</span></li>
                    </ul>
                </div>
                <div class="white-box analytics-info-cs mg-b-10 res-mg-b-30 tb-sm-res-d-n dk-res-t-d-n">
                    <h3 class="box-title">Cancelled</h3>
                    <ul class="list-inline two-part-sp">
                        <li>
                            <div id="sparklinedash3"></div>
                        </li>
                        <li class="text-right graph-three-ctn"><i class="fa fa-level-up" aria-hidden="true"></i> <span class="counter text-info">5000</span></li>
                    </ul>
                </div>
                <div class="white-box analytics-info-cs table-dis-n-pro tb-sm-res-d-n dk-res-t-d-n">
                    <h3 class="box-title">Completed</h3>
                    <ul class="list-inline two-part-sp">
                        <li>
                            <div id="sparklinedash4"></div>
                        </li>
                        <li class="text-right graph-four-ctn"><i class="fa fa-level-down" aria-hidden="true"></i> <span class="text-danger"><span class="counter">18</span>%</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>`
    
    if(countElemArray["Pending"]){
    
    }else{
        countElemArray["Pending"]=0
    }
    
    if(countElemArray["Completed"]){
    
    }else{
        countElemArray["Completed"]=0
    }
    
    if(countElemArray["Approved"]){
    
    }else{
        countElemArray["Approved"]=0
    }

      var HtmlstatsesHightlight=''
for(var i in countElemArray){
   
    HtmlstatsesHightlight+=` <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12" onclick=Listbookings()>
    <div class="analysis-progrebar">
        <div class="analysis-progrebar-content">
            <h5>${i}</h5>
            <h2 class="storage-right"><span class="counter">${countElemArray[i]}</span>%</h2>
            <div class="progress progress-mini ug-1">
                <div style="width: ${(countElemArray[i]/totalbookings)*100}%;" class="progress-bar"></div>
            </div>
            <div class="m-t-sm small">
            </div>
        </div>
    </div>
</div>`

}


bokingStatusCount=`
<div class="sedules-area mg-b-30">
<div class="container-fluid">
    <div class="row">
       ${HtmlstatsesHightlight}
    </div>
</div>
</div>`

clientOverViewSummary=`<div class="courses-area mg-b-15">
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">Suppliers visit</h3>
                <ul class="basic-list">
                    <li>Giyani nkuweni<span class="pull-right label-danger label-1 label">95.8%</span></li>
                   
                </ul>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="white-box res-mg-t-30 table-mg-t-pro-n">
                <h3 class="box-title">Cities/Town visits</h3>
                <ul class="country-state">
                    <li>
                        <h2><span class="counter">1250</span></h2> <small>Giyani</small>
                        <div class="pull-right">75% <i class="fa fa-level-up text-danger ctn-ic-1"></i></div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-danger ctn-vs-1" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:75%;"> <span class="sr-only">75% Complete</span></div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
       
    </div>
</div>
</div>`

ManageTodoTasks()

}




  //------------------------
function ManageTodoTasks(){

    bookingData=JSON.parse( sessionStorage.getItem("bookings"))["Dt"]
    for(var i=0;i<bookingData.length;i++){
        var ID=bookingData[i].ID
    if(sessionStorage.getItem("UserID")==bookingData[i].RouteCode){
        
            switch(bookingData[i].Status){
                case 0:
    
                   btnBSSbooking=`   <div class="review-item-rating"> <Button type='button' onclick="UpdateCheckStatus(1,${ID},${i})" class='btn btn-primary'>Accept a booking</Button></br>
                  <Button type='button' onclick="UpdateCheckStatus(-2,${ID},${i})" class='btn btn-primary'>Decline a booking</Button></br>
                  <Button type='button' onclick="UpdateCheckStatus(-3,${ID},${i})"  class='btn btn-primary'>Currently on Leave</Button></br>
                   <Button type='button' onclick="BookingDetails(${i},${i})"  class='btn btn-primary'>Read more!</Button></div>`
                    htmlNot+=`<div class=" taskTodoOverPage">
                    
                    <div class="review-ctn-hf">
                        <h3>You have been booked to ${bookingData[i].CityTown}</h3>
                        <p>To check in on ${bookingData[i]["Check in date"]} at ${bookingData[i]["Supplier name"]}</p>
                        <p>To stay for ${bookingData[i]["No of Nights"]} days and Dinner included: ${bookingData[i].Created}</p>
                        <p>Created on ${bookingData[i].CreationDate}</p>
                    </div>
                     ${ btnBSSbooking}
                    
                </div>`
                    break;
                case 5:
    
                    btnBSSbooking=`  <div > <Button type='button' onclick="UpdateCheckStatus(6,${ID},${i})"  class='btn btn-primary'>Check in</Button></br>
                     <Button type='button' onclick="UpdateCheckStatus(-1,${ID},${i})"  class='btn btn-primary'>Cancel!</Button></br>
                     <Button type='button' onclick="BookingDetails(${i},${i})"  class='btn btn-primary'>Read more!</Button></div>`
                    htmlNot+=`<div class=" taskTodoOverPage">
                    
                    <div class="review-ctn-hf">
                        <h3>Your booking to ${bookingData[i].CityTown} been approved</h3>
                        <p>Please check in at ${bookingData[i]["Supplier name"]} on the ${bookingData[i]["Check in date"]}</p>
                    </div>
                ${btnBSSbooking}
                </div>`
                    break;
                case 6:
                    btnBSSbooking="  <div><Button type='button' onclick='UpdateCheckStatus(9,"+ID+","+i+")'  class='btn btn-primary'>Check out</Button></br><Button type='button' onclick='BookingDetails("+i+")'   class='btn btn-primary'>Read more!</Button></div>"
                    htmlNot+=`<div class=" taskTodoOverPage">
                    
                    <div class="review-ctn-hf">
                        <h3>You have checked in at ${bookingData[i]["Supplier name"]}</h3>
                        <p>Please remember to check out on ${bookingData[i]["Check out date"]}</p>
                    </div>
                  
                       ${btnBSSbooking}
                
                </div>`
                break;
            }
            
    }

    switch(sessionStorage.getItem("UserType")){
        case "Manager":
            if(sessionStorage.getItem("UserID").includes("FM")){

                  switch(bookingData[i].Status){
                    case 9:
                       btnBSSbooking=" <div '><Button type='button' onclick='UpdateCheckStatus(7,"+ID+","+i+")'  class='btn btn-primary'>Complete</Button> </br><Button type='button' onclick='BookingDetails("+i+")'   class='btn btn-primary'>Read more!</Button></div>"
                       htmlNot+=`<div class=" taskTodoOverPage">
                       
                       <div class="review-ctn-hf">
                           <h3>${bookingData[i].RouteCode} has checked out</h3>
                           <p>Please confirm complection of the work as complection date is supposed to be at ${bookingData[i].CompletionDate}</p>
                       </div>
                       ${btnBSSbooking}
                   </div>`
                       break;
                  }
            }else{
                switch(bookingData[i].Status){
                    case 3:
                       btnBSSbooking=" <div ><Button type='button' onclick='UpdateCheckStatus(10,"+ID+","+i+")'  class='btn btn-primary'>Pre-Approve</Button></br><Button type='button' onclick='BookingDetails("+i+")'   class='btn btn-primary'>Read more!</Button></div>"
                       htmlNot+=`<div class=" taskTodoOverPage">
                       
                       <div class="review-ctn-hf">
                           <h3>${bookingData[i].RouteCode} has accepted a booking to ${bookingData[i].CityTown}</h3>
                           <p>The PO has been attached to the booking and to check in on ${bookingData[i]["Check in date"]}</p>
                       </div>
                       ${btnBSSbooking}
                   </div>`
                       break;
                       case 8:
                      btnBSSbooking="<div ><Button onclick='UpdateCheckStatus(5,"+ID+","+i+")'  type='button' class='btn btn-primary'>Approve</Button></br><Button type='button' onclick='BookingDetails("+i+")'  class='btn btn-primary'>Read more!</Button></div>"
                      htmlNot+=`<div class=" taskTodoOverPage">
                      
                      <div class="review-ctn-hf">
                          <h3>POP has been acquired and attached for a booking ref #${ID}</h3>
                          <p>${bookingData[i].RouteCode} travelling to ${bookingData[i].CityTown} </p>
                      </div>
                      ${btnBSSbooking}
                  </div>`
                        break;
                  }
            }

            break;
            
        case "BackOffice":
            switch(bookingData[i].Status){
                case 1:
                   btnBSSbooking=`<div ><Button type='button' onclick='AddAttachement("PO",${ID},${i})'  class='btn btn-primary'>Attach a PO</Button></br><Button type='button' onclick="BookingDetails(${i})" class='btn btn-primary'>Read more!</Button></div>`
                   htmlNot+=`<div class=" taskTodoOverPage">
                   
                   <div class="review-ctn-hf">
                       <h3>${bookingData[i].RouteCode} has Accepted the booking</h3>
                       <p>You are required to acquire a PO from Supplier: ${bookingData[i].CityTown} and attach it</p>
                   </div>
                   ${btnBSSbooking}
               </div>`
                   break;
                case 10:
                  btnBSSbooking=` <div ><Button type='button' onclick='AddAttachement("POP",${ID},${i})'  class='btn btn-primary'>Attach POP</Button></br><Button type='button' onclick="BookingDetails(${i})"  class='btn btn-primary'>Read more!</Button></div>`
                  htmlNot+=`<div class=" taskTodoOverPage">
                  
                  <div class="review-ctn-hf">
                      <h3>Supervisor has Pre-approved.</h3>
                      <p>Please attach the POP for booking Ref #${ID}</p>
                  </div>
                  ${btnBSSbooking}
              </div>`
                    break;
              }

    }
    
}

$.ajax({
    url:`https://kanibaapp.azurewebsites.net/BackEnd/GetActivityByUserID?UserID=${sessionStorage.getItem("UserID")}`,
    type: 'GET',
    datatype: 'json',
    cache: false,
    success: function(data) {
        buildnotification(data);
    }
  });
}









function buildnotification(data){
    data=data["Dt"]

  
        data.sort(function(a, b) {
            return new Date (b.Date) - new Date(a.Date);
            });
        
       
     
    
for(var k=0;k<data.length;k++){

    var Msg=''
    switch(data[k].Status){
        case "BSS On leave":
            Msg=data[k].UpdatedBy+' is on Leave'
        break;
        case "Pending PO":
            Msg=data[k].UpdatedBy+' has accepted the booking request'
        break;
        case "Pending Supervisor pre approval":
            Msg=data[k].UpdatedBy+' has attached a PO'
            break;
        case "Supervisor Pre-approved":
            Msg=data[k].UpdatedBy+' has pre approved the request'
                break;
        case "Pending POP":
            break;
        case "Pending Supervisor approval":
            Msg=data[k].UpdatedBy+' has been attached the PO'
                break;
        case "Approved":
            Msg=data[k].UpdatedBy+' has been approved the booking request'
                break;
        case "BSS checked in":
            Msg=data[k].UpdatedBy+' has checked in'
                break;
        case "Completed":
            Msg=data[k].UpdatedBy+' has marked the booking request as complete'
             break;
        case "BSS checked out":
            Msg=data[k].UpdatedBy+' has checked out'
            break;
        case "Declined":
            Msg=data[k].UpdatedBy+' has declined the booking'
                break;
        case "Cancelled":
            Msg=data[k].UpdatedBy+' has cancelled the booking'
             break;
        case "Pending":
            Msg=data[k].UpdatedBy+' has created a booking request'
            
                break;
            
    }
    htmlNtoficationsDiv+=`<div class="single-product-text edu-pro-tx">
  
    <h5>${Msg}</h5>
    <div class="product-price">
        <h5> On ${ data[k].Date}</h5>
    </div>
    <div class="product-buttons">
        <button type="button" class="button-default  cart-btn">Ref #${data[k].BookingID}</button>
      
    </div>
</div>`
}


overveiwSummary=`<div class="library-book-area mg-t-30" >
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="single-cards-item">
                <div class="single-product-image">
                    <a href="#"><img src="img/product/profile-bg.jpg" alt=""></a>
                </div>
                <div class="single-product-text">
                    <img src="${sessionStorage.getItem("UserProfileImage")}" alt="">
                    <h4><a class="cards-hd-dn" href="#">${sessionStorage.getItem("UserID")}</a></h4>
                    <h5>${sessionStorage.getItem("FullName")}</h5>
                    <p class="ctn-cards">Number of bookings</p>
                    <a class="follow-cards" onclick="Listbookings()" href="#">View more</a>
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                            <div class="cards-dtn">
                                <h3><span class="counter">${countElemArray["Pending"]}</span></h3>
                                <p>Pending</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                            <div class="cards-dtn">
                                <h3><span class="counter">${countElemArray["Approved"]}</span></h3>
                                <p>Approved</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                            <div class="cards-dtn">
                                <h3><span class="counter">${countElemArray["Completed"]}</span></h3>
                                <p>Completed</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="single-review-st-item res-mg-t-30 table-mg-t-pro-n" id="TodotaskOverview">
                <div class="single-review-st-hd">
                    <h2>Task/To-do</h2>
                </div>

              ${htmlNot}
      
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12" id="notificationBookingRequest">
            <div class="single-product-item res-mg-t-30 table-mg-t-pro-n tb-sm-res-d-n dk-res-t-d-n">
                <h3>Notifications<h3>
                ${htmlNtoficationsDiv}
            </div>
        </div>
    </div>
</div>
</div>`


var HtmlLoad=topOverview+overveiwSummary+bokingStatusCount
$("#HTML_Loader").html('')
$("#HTML_Loader").html(HtmlLoad)
}

