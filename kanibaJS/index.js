
$("#imageProfile").attr("src",sessionStorage.getItem("UserProfileImage"));

//$("#imageProfile").html("<img src="+sessionStorage.getItem("UserProfileImage")+" alt='profile image' />");
$(".admin-name").append(sessionStorage.getItem("FullName"));

switch(sessionStorage.getItem("UserType")){
    case "BSS":
        $("#ASMTab").remove()
        $("#FMTab").remove()
        $("#BSSTab").remove()
        $("#ClientsTab").remove()
        $("#SupplierTab").remove()
        $("#EmailTab").remove()
        $("#ChatsTab").remove()
        $("#BookingsTabList").remove()

        
        break;
    case "Manager":
        $("#ASMTab").remove()
        $("#FMTab").remove()
        $("#BSSTab").remove()
        $("#ClientsTab").remove()
        $("#SupplierTab").remove()
        $("#EmailTab").remove()
        $("#ChatsTab").remove()
        break;
    case "BackOffice":
        $("#ASMTab").remove()
        $("#FMTab").remove()
        $("#BSSTab").remove()
        $("#ClientsTab").remove()
        $("#EmailTab").remove()
        $("#ChatsTab").remove()
        break;
    case "Supervisor":
        $("#ASMTab").remove()
        $("#FMTab").remove()
        $("#BSSTab").remove()
        $("#ClientsTab").remove()
        $("#SupplierTab").remove()
        $("#EmailTab").remove()
        $("#ChatsTab").remove()
        break;
}


var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();


var globaldata=[]

function getBookings(check)
{
  var  SessionToken=sessionStorage.getItem("SessionToken");
  var UserID=sessionStorage.getItem("UserID");
  var header={}
  header["User"]=UserID;
  header["SessionToken"]=SessionToken;

  if(sessionStorage.getItem("UserType")=="BackOffice"){
    $.ajax({
        url:`https://kanibaapp.azurewebsites.net/BackEnd/GetAllRequests`,
        type: 'GET',
        datatype: 'json',
        cache: false,
        success: function(data) {
            proccessBookings(data,check);
        }
      });
  }else{
    $.ajax({
        url:`https://kanibaapp.azurewebsites.net/BackEnd/GetUsersRequests?loogedInUser=${UserID}`,
        type: 'GET',
        datatype: 'json',
        cache: false,
        success: function(data) {
            proccessBookings(data,check);
        }
      });
  }
    
}

 getBookings()

 function proccessBookings(data,check=-1) {
    if(data.Success==true){

        data["Dt"].sort(function(a, b) {
            return new Date (b.ID) - new Date(a.ID);
            });
        
        globaldata=data
        sessionStorage.setItem('bookings',JSON.stringify(data));
        if(check==-1){
            CreateOverViewScreen()
        }
    }else{
        window.location.href = 'index.html';
    }
    
 }

 var countNumberOfBookingsToUpdate=0
 function UpdateCheckStatus(StatusID,IDI=-1,index=-1) {
    
    var headers={}
    var s=sessionStorage.getItem('SessionToken')
    var id=sessionStorage.getItem("UserID")
    headers["SessionToken"]=s;
    headers["UserID"]=id;
    
    var data=globaldata.Dt 
    
        if(IDI!==-1){
       
                
                countNumberOfBookingsToUpdate=countNumberOfBookingsToUpdate+1
                $.ajax({
                    url:`https://kanibaapp.azurewebsites.net/BackEnd/UpdateBookingStatus?bookingID=${IDI}&StatusID=${StatusID}`,
                    type: 'PUT',
                    datatype: 'json',
                    cache: false,
                    headers:headers,
                    success: function(rdata) {
                        markcheckedWhenSuccess(rdata,IDI,StatusID,index);
                    }
                });
            
        }else{
            for(var i=0;i<data.length;i++)
            {
            checked=$("#CheckFor"+data[i]["ID"]).is(":Checked")
            if(checked){
                id=data[i]["ID"]
                countNumberOfBookingsToUpdate=countNumberOfBookingsToUpdate+1
                $.ajax({
                    url:`https://kanibaapp.azurewebsites.net/BackEnd/UpdateBookingStatus?bookingID=${data[i]["ID"]}&StatusID=${StatusID}`,
                    type: 'PUT',
                    datatype: 'json',
                    cache: false,
                    headers:headers,
                    success: function(rdata) {
                        markcheckedWhenSuccess(rdata,id,StatusID);
                    }
                });
            }
        }
 
    }
 }

 var CountForRefgreshPage=0
 function markcheckedWhenSuccess(res,id,StatusID,index){

    if(res.Success==true){
        CountForRefgreshPage=CountForRefgreshPage+1;
        UID=sessionStorage.getItem("UserID");
        var data={}
        data["bookingID"]=id
        data["StatusID"]=StatusID
        data["UpdatedBy"]=UID
        $.ajax({
            url:`https://kanibaapp.azurewebsites.net/BackEnd/InsertActivity?`,
            type: 'POST',
            datatype: 'json',
            cache: false,
            data:data,
            success: function(rdata) {
                ActiitystatusRes(rdata,id,index);
            }
        });
        if(countNumberOfBookingsToUpdate==CountForRefgreshPage){
          //  getBookings()
          //  Listbookings()
            countNumberOfBookingsToUpdate=0
            CountForRefgreshPage=0
        }

        $(".list-product"+id).before(`<i style="color:green" class="fa fa-check-square-o" aria-hidden="true"></i>`)
    }else{
        $(".list-product"+id).before(`<i style="color:red"  class="fa fa-times" aria-hidden="true"></i>`)
    }
 }
function ActiitystatusRes(rdata, id,index){

    if(rdata.Success==true){
        if(index==-1){

        }else{
            refreshlist(index)
        }
    }

}

