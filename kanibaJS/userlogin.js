function loginUser(){
    var username=$("#username").val();
    var password=$("#password").val();

    $("#password").after("<img id='LoginGifloader' width=20 src='img/loading.gif'/>")

    $.ajax({
        url:`https://kanibaapp.azurewebsites.net/BackEnd/Login?UserID=${username}&Password=${password}`,
        type: 'GET',
        datatype: 'json',
        cache: false,
        success: function(data) {
            navigatetoHome(data);
        }
      });


}


function navigatetoHome(res){

    if(res.Success==true){
        sessionStorage.setItem("UserID",res.UserID);
        sessionStorage.setItem("SessionToken",res.SessionToken);
        sessionStorage.setItem("UserProfileImage",res.UserProfileImage);
        sessionStorage.setItem("team",JSON.stringify(res.Team));
        sessionStorage.setItem("FullName",res.FullName);
        sessionStorage.setItem("UserType",res.UserType);

        window.location.href = 'index.html';

    }else{
        $("#incorectpassword").remove()
        $("#password").after("<label id ='incorectpassword'style='color:red'>Incorect password</label>")
        
        $("#LoginGifloader").remove()
    }
}
