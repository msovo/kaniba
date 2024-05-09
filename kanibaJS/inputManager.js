strict: true

var inputsEmployee=[
    "RouteCode",
    "Name",
  "Surname",
  "Email"
 
  ]

  var InputBookingType=[
    "Client",
    "Request",
  "BookingType",
  "CityTown",
  "ReasonForTravel",
  "SpecificationOfTheProject",
  "Return"]
  var inputBookingdates=[  
  "CheckInDate",
  "CheckOutDate",
  "CompletionDate",
  "DinnerIncluded",
  "NumberOfNights",

]
  var inputSupplierDetails=[
  "SupplierName",
  "SupplierCode",
  "RatePerDay",
  "TotalPayableIncVAT",
  "PaymentRequestDate"
]

  var  InputInvoices=[
  "PaymentRequestDate",
  "Notes",
  "POnumber",
  "SupplierInvoice",
  "DatePaid",
  "AmountPaid"
]

var GetinputBookingdates=[  
"Check in date",
"Check out date",
"CompletionDate",
"Dinner included",
"No of Nights",

]
var GetinputSupplierDetails=[
"Supplier name",
"Supplier code",
"Rate per day",
"Total payable inc VAT",
"Payment Request Date"
]

var  GetInputInvoices=[
"Payment Request Date",
"Notes",
"PO number",
"Supplier Invoice",
"Date paid",
"Amount paid"
]


  function createInput(arr, field){
    var inputs='';

    for(var i =0; i<arr.length; i++){
        if(arr[i]=="RouteCode"){
            
            inputs+= `  <div class="form-group">
            <label for=${arr[i]}>${arr[i]}</label></br> ${createselect("RouteCode")}
              </div>`
        }else if(arr[i]=="Name" || arr[i]=="Email" || arr[i]=="Surname" || arr[i]=="NumberOfNights" || arr[i]=="TotalPayableIncVAT"){
            inputs+= `  <div class="form-group">
            <label for=${arr[i]}>${arr[i]}</label> <input disabled="true" id="${arr[i]}" name="${arr[i]}" type="${DetermineInputType(arr[i])}" class="form-control" placeholder="${arr[i]}"/>
              </div>`
        }else if(arr[i]=="Return" || arr[i] =="DinnerIncluded")
        {
          inputs+= '<div class="form-group">  <label for='+arr[i]+'>'+arr[i]+'</label> ' + CreateForYesOrNo(arr[i]) + "</div>"
        }else if(arr[i]=="Client" || arr[i] =="CityTown"  || arr[i] =="ReasonForTravel" || arr[i] =="SpecificationOfTheProject" || arr[i] =="BookingType" || arr[i] =="Request"){
              
               inputs+= '<div class="form-group">  <label for='+arr[i]+'>'+arr[i]+'</label> ' +  createselectMostRepeatble(arr[i])+ "</div>"

        }else if(arr[i]=="CheckInDate" || arr[i] =="CheckOutDate" ){
          inputs+= `  <div class="form-group">
          <label for=${arr[i]}>${arr[i]}</label> <input id="${arr[i]}" name="${arr[i]}" onchange="CalculatedateDiference()" type="${DetermineInputType(arr[i])}" class="form-control" placeholder="${arr[i]}"/>
            </div>`
       
        }else if(arr[i]=="RatePerDay" ){
          inputs+= `  <div class="form-group">
          <label for=${arr[i]}>${arr[i]}</label> <input id="${arr[i]}" name="${arr[i]}" onchange="Calculatetotalcost()" type="${DetermineInputType(arr[i])}" class="form-control" placeholder="${arr[i]}"/>
            </div>`
            
        }
        else{
            inputs+= `  <div class="form-group">
            <label for=${arr[i]}>${arr[i]}</label> <input id="${arr[i]}" name="${arr[i]}" type="${DetermineInputType(arr[i])}" class="form-control" placeholder="${arr[i]}"/>
              </div>`
        }
        
        
     }

     output=`<div class="review-content-section" id=${field}>
     <form id="add-department" action="#" class="add-department">
         <div class="row">
             <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" id='grid-inputs'>

                 ${inputs}                                            
           
             </div>
            
         </div>

     </form>
 </div>`

$("#inputFromOutput").append(output)
$("#Employee").hide();
$("#BookingTypes").hide();
$("#Supplier").hide();
$("#Dates").hide();
    
}

function filterFuc(filter){

let forwhat = filter.replace("F", "");
forwhat=forwhat.replaceAll("_", " ")
  data=JSON.parse(sessionStorage.getItem("bookings"))
  var newarray=[]
  for(var k =0; k<data["Dt"].length; k++){
    if(forwhat.includes("Date")){
      date=data["Dt"][k][forwhat].split("T")[0]
      getSelectedFilter= $("#"+filter).val()

    }else{
      date=parseInt( data["Dt"][k][forwhat])
      getSelectedFilter=parseInt( $("#"+filter).val())

    }

    if(date===getSelectedFilter){
      newarray.push(data["Dt"][k])
    }
  }

  data["Dt"]=newarray
  globaldata=data
  Listbookings()

}

function CalculatedateDiference(){

checkoutdate= $("#CheckOutDate").val()
checkindate= $("#CheckInDate").val()

if(checkoutdate && checkindate){
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const cout = new Date(checkoutdate);
  const cin = new Date(checkindate);
  const diffDays = Math.round(Math.abs((cin - cout) / oneDay));
  
  $("#NumberOfNights").val(diffDays)

  Calculatetotalcost()
}

}

function Calculatetotalcost(){

daysdf=  $("#NumberOfNights").val()
ratep=$("#RatePerDay").val()
    if(daysdf && ratep){
        $("#TotalPayableIncVAT").val(daysdf * ratep)
    }

}


function hightLightSelectedTab(elem){
  $(".ActiveTab").removeClass("ActiveElm")
  $("#act"+elem).addClass("ActiveElm")

}

  function DetermineInputType(arr){
    if(arr.includes("Date")){
        return "date";
    }else if(arr.includes("Number") || arr.includes("Rate")){
        return "number"
    }else if(arr.includes("Password")){
        return "password"
    }
    else{
        return "text"
    }
  }

  function callInputFunc(entity){
    
    switch(entity){
        case "Employee":
            $("#Employee").slideDown();
            $("#BookingTypes").slideUp();
            $("#Supplier").slideUp();
            $("#Dates").slideUp();

            break;
        case "BookingTypes":
            $("#BookingTypes").slideDown();
            $("#Employee").slideUp();
            $("#Supplier").slideUp();
            $("#Dates").slideUp();
            break;
        case "Supplier":
            $("#Supplier").slideDown();
            $("#Employee").slideUp();
            $("#BookingTypes").slideUp();
            $("#Dates").slideUp();   
                  break;
        case "Dates":
            $("#Dates").slideDown();
            $("#Employee").slideUp();
            $("#BookingTypes").slideUp();
            $("#Supplier").slideUp();
                     break;
        default:
            break;
    }
    hightLightSelectedTab(entity)

  }


  function createselectForStatus(){

  return  `<select class="inputdateForm" id="FStatus" onchange="filterFuc('FStatus')">
    <option value='default'> Choose a status</option>
     <option value=-3> BSS On leave</option>
      <option  value=-2 > Declined</option>
       <option  value= -1 > Cancelled </option>
       <option  value=0 > Pending </option>
       <option  value=1 > BSS Accepted</option>
       <option   value=2 > Pending PO</option>
       <option   value=3 > Pending Supervisor approval"</option>
       <option   value=4>  Pending POP</option>
       <option   value=  5>  Approved" </option>
       <option   value=  6>  BSS checked in </option>
       <option   value=  7 > Completed </option>
      </select>`

  }
  function CreateForYesOrNo(elem){
    var output='<select class="form-control" id='+elem+'><option value="default">Choose an option</option>'
              +'<option value=0>No</option>'
              + '<option value=1>Yes</option>'
              + '<select>'

      return output;
  }
  function createselectMostRepeatble(elem){
    var output='<select class="form-control" id='+elem+'><option value="default">Choose an option</option>'
    var data=[]
    switch(elem){
      case 'Client':
        data=clientOFkaniba
        break;
        case 'CityTown':
          data=city_town
          break;
          case "ReasonForTravel":
            data=reasonfortravel
          break;
          case "SpecificationOfTheProject":
            data=spcificationofproject
            break;
          case "BookingType":
            data=bookingTypeSelect
            break;
          case "Request":
            data=request
            break;
            default:
              break;
              data=[]
    }

    for(var i=0;i<data.length;i++){
      output +='<option value='+data[i]+'>'+data[i]+'</option>'
    }

    output +='<select>'

      return output;
  }
request=[
  "Accomodation",
  "Transport"
]
  bookingTypeSelect=[
    "Normal",
    "Emergency"
  ]


  city_town=["ADDO", 
  "Addo", 
  "Addo (Addo Elephant)", 
  "Aldarado Kuruman",
   "Alldays", 
   "Also Beach", 
   "Alvarado kurumane", 
   "AMSTERDAM MPUMALANGA", 
   "Ankuweni",
    "Ankuweni Giyani", 
    "Ankuweni Lodge",
     "Ankuweni Lodge(Giyani)", 
     "ASM004", "Baberton", 
     "Badbplass", "BADPLAAS", 
     "Badplaas", "badplaas",
      "Badplas", "Badplass", 
      "badplass", "Balfour", 
      "Balito", "BALLITO", "Ballito",
       "ballito", "Ballito / Umhlanga", 
       "Barckly East", "Barely east", 
       "Barely east  royal", "Barely east Royal", 
       "Barkley East", "Barkley east", "barkley east", 
       "Barkley East(Royal)", "Barkly", "BARKLY EAST", 
       "Barkly East", "Barkly east", "barkly east", 
       "Barkly east royal Manor", "Bedford", "BELA BELA",
        "Bela Bela", "Bela Bela Lodge", "Bela-Bela",
         "Bergersdorp", "Bergville", "Bethelehem", 
         "BETHLEHEM", "Bethlehem", "Bethlehem (Orchid)",
          "BETLHEHEM", "Betlhehem", "BIG TREE", 
          "Big tree Lodge(Thoyandou)", "Bila Bila",
           "Bizana", "Bizana (Eastern Cape)", 
           "Blackly East", "BLOEMFONTEIN",
            "Bloemfontein", "Bloemfotein",
             "Bloemhof", "BOCHUM", "Bochum", "bochum", 
             "Bochum (Limpopo)", "Bochum Senwabarwana",
              "Bochum-Makoppas Guest House", 
              "Bochum-Makoppas Guest house", 
              "Boksburg Birchwood", "Boksburg Birchwood Hotel",
               "Bothas Hill", "Bothas Hill/Lindisfarne", 
               "Bothashill", "Bothashill  - Lindisfarne", 
               "Bothashill - Lindisfarne", "Bothaville",
                "Bothokwa sleepover mathoks", "Bothokwa Sleepover matoks", 
                "bothokwa sleepover matoks", "Botlokwa (RISIMA Resort)", "Botshabelo", "Bristhtown",
                 "Brits", "Britstown", "Britstown or De aar", "BSS035", "BSS082", "BSS083", "Bss173",
                  "Bss179", "BSS 147", "BUEGERSFORT", "Burgerfort", "BURGERSDORP", "Burgersdorp",
                   "Burgersdorp (the heart", "Burgersdorp (the heart)", "Burgersdorp (the heat BND)",
                    "Burgersdorpt", "Burgersford", "BURGERSFORT", "Burgersfort", "burgersfort",
                     "BURGERSFORT - GRACIOUS LODGE", "BURGESFORT", "Burgestford", "Burgsdorp",
                      "bushbuck Ridge", "Bushbuckridge", "BUTTERWORTH", "Butterworth", "Cacadu/Queenstown", 
                      "CALA", "CALABAS", "CALABASH", "calabash", "caoabash", "Cape Town", "cape town",
                       "Cape Town - Khayelistha (or safe area closest to it)", "CapeTown Airport", 
                       "Christiana", "City/Town ( specify )", "Cofimvaba (Transkei)",
                        "Corner stone-Bochum", "CRADOCK", "Cradock", "Cradock - Old Butler House",
                         "Damara", "De aar", "De Aar Town", "DELARETVILLE", "DELAREYVILLE",
                          "Delareyville", "Delaryville", "Delaryville  restaurant North West", "Delaryville North West", "Delaryville Restaurant", "Delaryville Restaurant N.W", "Delaryville Restaurant North West", "Delaryville Restuarant North West", "Devon", "Dimbaza", "Diphororo guest house", "Driefontein (Mpumalanga)", "DURBAN", "Durban", "durban", "Durban - Umhlanga", "EAST LONDON", "East London", "East Rand", "Eastern Cape", "Eastern Cape Mtata", "Edenvale, Johannesburg", "Ehlazatje", "Eldorado  kurumane", "Eldorado kurumane", "Eldorado Lodge.", "Elephant  spring hotel & apartment", "Elephant Spring  hotel &  apartment", "ELEPHANT SPRING HOTEL", "Elephant Spring Hotel", "Elephant Spring hotel", "Elephant spring hotel", "Elephant Spring hotel &  apartment", "Elephant Sring  hotel & apartment", "ELEPHANT SRING HOTEL", "Elim", "Elliotdale", "Emalahleni Stayeasy", "eMBALENHLE - secunda",
                           "EMELO", "Emerlo", "Empangeni", "ERMELO", "Ermelo", "ermelo", "Eshowe", "eshowe", "Eshowe/Stanger", "ESTCOURT", "Estcourt", "Estcourt  -  Ashton Terraces", "Estcourt  - Ashton Terraces", "Estcourt - ASHTON TERRACE", "Estcourt - Ashton Terraces", "Estcourt- Ashton Terraces", "Estscourt", "FICKSBURG", "Flagstaff", "FM011", "Fort Beaufort", "Fort Bedford", "Fort Beufort", "FortBeufort", "FOURIESMITH", "Fouriesmith", "Freestate (Sisonke Guest House) QwaQwa", "GANYESA", "Ganyesa", "Ganyesa (North West) setlhare gues loudge", "Giyane", "GIYANI", "Giyani", "giyani", "Giyani - Ankuweni", "Giyani - Ankuweni Lodge", "Giyani(Ankuweni", "Giyani(Ankuweni Lodge)", "Giyani(Ankuweni lodge)", "Giyani(Ankuweni)", "Giyani-Ankuweni", "Giyani-Ankweni", "Giyqni(Ankuweni)", "GLOBLERSDAL", "Gqeberha", "Graaf - Reinet", "GRAAF REINET", "Graaf Reinet", "GRAAF-REINET", "Graaf-Reinet", 
                           "Graaff-Reinet", "Graff Reinet", "Grahamstown", "GREYTOWN", "GreyTown", "Greytown", "Greytown  - Mageba Lodge", "Greytown ( Mageba Lodge)", "Greytown (Mageba Lodge)", "Greytown - Mageba Lodge", "Greytown Mageba Lodge", "Greytown- Mageba Lodge", "Grobblesdal", "Groblerdale", "GROBLERSDAL", "Groblersdal", "GROBLERSDAL - LOSKOP VALLEY LODGE", "Groblersdale", "GROBLESDAL", "Groblesdal", "groblesdal", "Hardin", "HARDING", "Harding", "harding", "Harding Area", "HARDING GREEN ACRES", "Harding Green Acres", "Harding Green Acres Bnb", "Harrismith", "Hartzog", "Hazeyview", "Hazyview/Whiteriver", "Heilbron", "Heinenvlei", "Heinevlei", "HEUNINGVLEI", "Heuningvlei", "Heuningvlei (northwest)", "Heuningvlei Northwest", "HIGHVELD - WITBANK", "Hirding", "Hluhlewe", "HLUHLUWE", "Hluhluwe", "hluhluwe", "Hoopstad", "Hoopstad (North West)", "Hueiningvlei", "Hueiningvleii", "Huingnivlei", "HUININGVLEI", "Huiningvlei", "Huininvlei", "Idutywa", "Inkomazi", "Ixopo", "ixopo", "JACQUESFONTEIN",
                            "JAGERSFONTEIN", "JAGERSFONTEIN/FOURIESMITH", "Jaggersfontei", "JAGGERSFONTEIN", "Jaggersfontein", "JANE FURSE", "Jane Furse", "Jane furse", "Jansenville", "jhb", "Johannesburg", "Johannesburg -Birchwood Hotel", "JOZINI", "Jozini", "jozini", "KIMBERLY", "Kimberly", "Kirkwood", "Kirkwood / Addo", "Klerksdorp", "Klerksdorp (Adante)", "Klerksdorp (Andante Gastehuis)", "Klerksdorp (Andante Guesthouse)", "Klerksdorp(Sentraal 3)", "Klerksdorp-Adante", "Klerksdorp-Adante Guest house", "Kokstad", "Kokstard", "Kronsstad", "Kroonsdstad", "KROONSSTAD", "Kroonsstad", "Kroonstad", "kurumaan", "KURUMAN", "Kuruman", "kuruman", "Kuruman (Eldorado)", "Kurumane", "Kurumane  Postmasbug", "Kurumane  Postsmasburg", "Kurumane aldarado", "Kurumane Eldarodo guest houses", "Kurumane Postmasburg", "La Peter (north west taung)", "La Peter( taung North West", "La Petra  taung North West", "La Petra (taung  North West)", "La Petra (taung North West)", "La Petre (taung North West)", "La petre taung", "La petre taung North West", "La- Petre(taung  North West)", "La-Petro (taung  North West)", "Ladybrand", "Ladysmith", "Langa", "Lani  Guest House", "Lani Guest house", "Lanis Guest House(Musina)", "Lanis Guest house(Musina)", "Lannis Guest House", "Lannis Guest house", "lannis Guest House", "Laphalale", "Leboakgomo", "Lebowakgomo", "Lephalale", "Lephalale (Limpopo)", "Lichtenberg", "LICHTENBURG", "Lichtenburg", "Limpopo Giyani",
                             "LIMPOPO,BELA BELA -WARMBARTHS", "Lisikisiki", "Litchenburg", "LOIUS TRICHARDT", "LOIUSTRICHADT",
                              "Loiustrichard", "LOIUSTRICHARDT", "LOIUSTRICHART", "Louis Trichard", "Louis trichard", "Louis Trichard -Lodge", 
                              "Louis Trichard(Makhado)", "Louis Trichards Lodge", "Louis Trichards( louis Trichards Lodge)", "LOUIS TRICHARDT", "Louis Trichardt", "Louis trichardt", "louis trichardt", "LOUIS TRICHARTD", "louis trichrdt", "Louis Trochardt", "LOUISTRICHARD", "Lous Trichard Lodge", "Lous Trichards Lodge", "LOUSTRICHARD", "loustrichard", "Lusikisiki", "lusikisiki", "Lusikisiki (Eastern Cape)", "Lusikisiki (Mvemve)", "Lusikisiki (ZET ZET GUEST HOUSE", "Lusikisiki (ZET ZET gusts house)", "Lusikisiki areas", "Lusisiki", "Mababango/Melmoth area", "Maclear", "MAFIKENG", "Mafikeng", "Mahikeng", "Makanye  lodge", "Makanye Lodge", "Makganya Lodge", "Makhado", "Makhado/Louis Trichardt", "MAKOPAS NEST", "Makoppas nest", "makoppas nest allday", "Makoppas nest alldays", "Malala Ldge(Sekororo Tzaneen", "Malala Lodge", "malala lodge", "MALALA LODGE SEKORORO", "Malala lodge sekororo", "Malala Lodge(Sekororo-Tzaneen)", "Malala Lodge(Tzaneedn)", "Margate", "MARQUARD", "Masili Guesthouse and Conference - Venda", "Matatiel", "Matatiele", "Matatile", "MATHATIE", "Mathatie", "Matoka", "Matoks", "MBOMBELA", "Mbombela", "MBOMBELA/NELSPRUIT", "Mbombela/Nelspruit", "Middelburg", "Middelburg (Mpumalanga)", "Middelburg, Eastern Cape", "Middleburg", "Midrand /pretoria", "Midrand/ pretoria", "MOGRWASE", "MOGWASE", "Mogwase", "mogwase", "Mogwase/Moruleng", "MOKOPANE", "Mokopane", "Morokweng", "Mount aylff", "MOUNT AYLIFF", "Mount Ayliff", "Mount ayliff", 
                              "mount ayliff", "Mount aylliff", "Mount Fletcher", "Mount Fletcher or Matatiele", "Mout aylif", "Mphumalanga,(Marapyane area)", "Mpumalanga", "MPUMALANGA,MAKANYE LODGE", "Mtata", "Mthahta", "MTHATHA", "Mthatha", "MTHATHA (Wesley guest house", "MTHATHA (Wesley guest house. Currently @)", "Mthatha. Wesley guests house", "MUSINA", "Musina", "musina", "Musina Lani Guest House", "Musina Lani guest house", "MZIMKHULU", "Mzimkhulu", "Naledzi", "Naledzi  Lodge", "Naledzi Lodge", "Naledzi(Thoyandou)", "Nelspruit", "Nelspruit  babarton (ndalo hote)", "Nelspruit  Nkomazi  (mamli guest house)", "Nelspruit Nkomazi (mamli guest house)", "New Castle", "Newcastl", "NEWCASTLE", "Newcastle", "Ngcobo", "Nhlazatje", "Nkandla", "Nkomasi", "NKOMAZI", "Nkomazi", "nkomazi", "Nkomazi  - Mamli Guest house", "NKOMAZI - MAMALI GUEST HOUSE", "NKOMAZI - MAMLI GUEST HOUSE", "Nkomazi - Mamli Guest House", "NKOMAZI - MAMMLI GUEST HOUSE", "Nkomazi Mamli Guest House", "Nkomazi- Mamli Guest House", "Nkomazi- Mamli Guest house", "Nkwonkowa/Tzaneen", "NONGOM", "NONGOMA", "Nongoma", "nongoma", "North cape kurumane", "North cape Postmasburg", "North West  Delarayville", "North West  Delaryville", "North West Delarayville", "North West heuningvlei", "North West Heuningvli guest house", "NORTH WEST RUSTENBURG", "NORTH WEST RUSTENBURG/ MOGWASE", "NORTH WEST/ ZEERUST GOEDEHOOP GUEST HOUSE", "Northwest", "Northwest Delaryville", "Nquthu/Vryheid", "Nwamitwa", "nwamitwa", "Nwamitwa Africa calabash lodge", "nwamitwa african calabash", "Nwamitwa African Calabash Lodge", "Nwamitwa African Calabash lodge", "Nwamitwa African calabash lodge", 
                             "Nwamitwa african calabash lodge", "nwamitwa african calabash lodge", "Nwamitwa African calabash lodghe", "Nwamitwa African calabsh lodge", "Nwamitwa African Kalabash lodge", "Nwamitwa African kalabash lodge", "nwamitwa african kalabash lodge", "NWAMITWA LODGE AFRICAN CALABASH", "nwamitwa lodge african calabash", "Odendaalsrus", "P.E", "Paar, town", "PAARL", "Paarl", "Paarl Cape Town", "Paarl, cape Town", "Paarl, town", "Paarl,town", "Partys", "PARYS", "Parys", "PE", "Peddie", "PETERMARITZBURG", "Petermaritzburg - Road Lodge", "PHALABORWA", "Phalaborwa", "phalaborwa", "PHONGOLA", "Phongola", "Phtuhaditjhaba", "Phuthaditjaba", "Phuthaditjhaba", "Phuthaditjhaba/Qwa Qwa", "Phuthuditjaba", "PIET RETIEF", "Piet Retief", "Piet retief", "piet retief", "PIET RITIEF", "Piet Ritief", "Piet ritief", "PIETERMARITZBURG", "Pietermaritzburg", "Pietermaritzburg  - Road Lodge", "Pietremaritzburg", "PMB  - CITY LODGE", "Pochefstroom", "POLOKWANE", "Polokwane", "polokwane", "Polokwane - City Lodge", "Polokwane - City Lodge Meropa", "Polokwane - Road Lodge", "Polokwane - Town Lodge", "Polokwane -Town Lodge", "Polokwane Lodge", "Polokwane/ Town lodge", "Polowkane", "PONGOLA", "Pongola", "pongola", "Port Alfred", "Port Alfred - Panorama House", "Port Alfred - Panorama Lodge", "Port Edward", "Port Elizabet", "Port Elizabeth", "Port Elizabeth - Road Lodge", "PORT SHEPSTONE", "Port Shepstone", "Portsmusburg", "Posmansburg", "Posmasburg", "POSTMANSBURG", "Postmansburg", "POSTMASBURG", "Postmasburg", "postmasburg", "Postmasburg kurumane", "Potchefstroom", "Potshefstroom", "Pretoria- test", "Prieska", "Prieska / Britstown", "QUEENSTOWN", 
                             "Queenstown", "queenstown", "QUENSTOWN", "QWA QWA", "Qwa Qwa", "Qwa qwa", "QWAQWA", "QwaQwa", "Qwaqwa", "QWAQWA/PHUTHADITJHABA", "RICHARDS BAY", "Richards Bay", "Richardsbay", "richardsbay", "Richmond", "Road Lodge - Petersmaritzburg", "Royal Barkley East", "Royal Calabash(Tzaneen)", "Royal Calabsh (Tzaneen)", "RUSTENBURG", "Rustenburg", "Rustenburg - Mulmsey's BnB", "Rustenburg - Road Lodge", "RUSTENBURG MOGWASE", "Rusternburg", "SECUNDA", "SEcunda", "Secunda", "secunda", "SECUNDA - LAKE UMUZI", "Sekhukhune (Limpopo)", "Sekhukhune/Burgersfort (Mpumalanga)", "SEKORORO", "Sekororo", "sekororo", "Senaekal", "SENEKAL", "Senekal", "SENEKAL FAIRWAYS", "Seshego (Polokwane)", "Setlagole (North West Region)", "SHANGRI-LA COUNTRY HOTEL", "SHANGRI-LA Country hotel", "SHOWE", "Showe", "SIYABUSWA", "Siyabuswa", "siyabuswa", "Siyabuswa (Mpumalanga)", "Springbok", "STANGER", "Stanger", "Stay easy eMalahleni", "StayEasy Emalahleni", "Steytlerville", "Swarturggens", "Swartzreinnek", "Swartzreinnek (North West)", "Sweizer-Reneke", "TAUNG", "Taung", "Thaba Nchu", "Thabazimbi", "The Big tree Lodge", "The Big tree(Venda)", "The heart BNB Burgersdorp", "Theunessen", "Theunnessen", "THIHOYANDOU", "THOHOYANDOE", "THOHOYANDOU", "Thohoyandou", "thohoyandou", "THOHOYANDOU BIGTREE", "THOHOYANDOY", "THOHOYONDOU", "Thoyandou Naledzi Lodge", "TLOKWEN", "TLOKWENG", "Tlokweng", "tlokweng", "Tohoyandou", "Tsolo", "Tsolo/Qumbu (Eastern Cape)", "TZANEEN", "Tzaneen", "tzaneen", "Tzaneen /MALA", "Tzaneen Guest House", "Tzaneen guest house", "TZANEEN/ MALALA", "TZANEEN/MALALA", "ULUNDI", "Ulundi", "ulundi", "Umhlanga", "UMTHATHA", "Umzimkhulu", "uMzimkhulu", "Umzimkulu", "Umzumbe (Hiberdene)", "Upington", "Upington - High Breeze Lodge", "Venda", "Venda - Naledzi Lodge", "Venda(Thoyandou Naledzi)", "Venda(Thoyandou)", "Venterdorp", "VENTERSDORP", "Ventersdorp", "VERKEERDEVLEI", "VILLERS (NIKI,S STONEHOUSE - B&B", "Virginia", "Vrede", "VRYBURG", "Vryburg", "Vryburg 41 on Market", "Vryburg (41 Market)", "Vryburg - 41 on Market", "VRYHEID", "Vryheid", "vryheid", "Vryheid  - Rita's", "Walmaransstad", "Walmarasstad", "WELKOM", "Welkom", "welkom", 
                             "Welkom Captain's Cabin Guest House", "Wellington", "Wellom", "WEPENNAAR", "WEPPENAAR", "Weppenaar", "Western Cape", "Western Cape Mthata", "Whittlesea", "WINBURG", "Witbank", "Witbank/ Stayeasy hotel", "Wolamansstad", "Wolamaransstad", "Wolamaranstad", "Wolmansstad", "WOLMARANSSTAD", "Wolmaransstad", "WOLMARANSTAD", "Wolmaranstad", "Wolmaranstado", "Woolmaranstad", "WORCESTER", "Worcester", "Xisaka Guest House - 0158123986 / 0832830515", "Xisaka Guesthouse - Giyani", "ZEERUST", "Zeerust", "zeerust", "Zeerust - Goedehoop B&B", "Zeerust - Goedehoop Guest House", "ZEERUST GOEDEHOOP GUEST HOUSE", "Zerrust"]

clientOFkaniba=["Phutikisa", "Sebenzela", "Progistic", "BBQT", "TBBC"]


reasonfortravel=["accommodation", "account clearances and RTMP surveys.", "amstel ghost audit", 
"asm training", "assets collection. caroline is moving to gauteng north", "assist bss138 with transport when his car go for service", "assist bss with vehicle", "audit", "baseline survey", "baseline survey and FM checks", "bss032 call cycle", "bss080 phone is not working i am going to work with the bss for today", "bss151 was at service and service vehicle has delayed", "bss coaching", "bss counselling session and trade visit", "bss has been mugged and stabbed must assist.", "bss induction and coaching", "bss misconduct", "bss sign - off", "bss sign offs", "bss sign-off", "bss vehicle went to service.", "bss visit", "bss will be working in ermelofor the whole week", "bss will be working in that area", "bss's visit", "business", "business /work", "call cycle", "call cycle change", "candidate assessments", "care-taking", "central meeting", "clearances", 
"closing bss202 calls, look cooler that is outstanding for combined mess and do assessments", "coaching", "coaching and RTMP survey", "conduct candidate assessments for new bss, and collection of company property from outgoing bss and alignment with team PE.", "cooler recovery", "cooler verification", "cooler verification bss189", "cooler verifications, SDS addendum, account clearance", "counselling session with HR", "cycle brief", "DC hearing", "delivery a car to bss199 and collect a rental vehicle in upington.", "disciplinary hearing", "do deliver price it right pamphlets before module goes live", "drop off fuel cards and trade assessment", "face to face meeting on saturday", "field audit", "FM010 interviews for bss068 walter mkhabela and trade assessments bss065", "FM ghost audit", "FM survey", "FM survey checks", "ghost audit", "give bss199 his fuel card as he lost his fuel card last week wednesday and he got no money to fill up the tank and no skynet in the area.", "GM is coming for trade visit", "going to deliver work material and work with the bss", "he will be working in that area for the day.", "he will be working in that area for the week.", "he will be working in that area for the whole week", "heineken cycle brief", "heineken cycle meeting", "heineken outlet surveys", "HR matters", "HR meeting", "HSA cycle brief and in trade assessment",
 "I will be doing FM survey, the place are too far apart", "I will be doing FM surveys around Groblersdal",
  "in field audit", "in trade assessment", "inactive cooler verifications", "induction", "induction and KPI support", 
  "induction in-trade training", "induction training", "induction training on SDS", "infield coaching", "intervention",
   "interviews", "interviews and assessments", "interviews and driving assessments", "interviews for bss200 vacant area", "IOD", "IOD check", "IOD operation in kimberly", "IOD, take IOD patient to hospital", "jason cox trade visit", "KZN audit", "KZN north audit", "limpopo 2 audit", "limpopo 3 audit", "limpopo audit", "limpopo field audit", "lowveld audit", "meeting", "meeting with heineken SM", "meeting with SD", "new bss induction", "new CMD / baseline survey", "new FM introduction and RTM SDS sign up issues", "new pilot project training", "new route evaluation", "newly appointed ASM", "north region meeting", "open case at police station for bss167", "outlets in that area far from each, driving there and from the too home is 1:45 minutes. please do not book at the one was booked for last week .", "perfect store audits", "PHUTHUKISA BSS's sign off and coaching", "pilot and team induction", "pilot project training", "POC", "POC coverage", "POC refreshier training", "POC training", "polygraph test", "polygraph testing", "POS audit", "POS pickup", "project spear", "reason for travel", "resignation, asset collection", "rest", "returning asset to office", "road show", "RSM meeting and heineken SD", "RSM meetings and heineken SD", "RTMP pricing", "RTMP survey at Isicebi trading. will be driving from kuruman", "sales audit", "SDS", "SDS assist for new bss", "SDS audit", "SDS audits", "SDS coverage", "SDS induction", "SDS project", "SDS support", "SDS support and BSS sign-off", "SDS, bss car going for service", "sekororo", "sentraal 1 audit", "sentraal 2 audit", "sentraal field audit", "sign off", "spear project", "survey", "survey checks", "touchside POC new customers sign on for decommed devices", "touchside POC with ishmael tlhopane team to assess non performing outlets", "touchsides pilot", "touchsides POC team", "touchsides POC team trade visit", "trade coverage", "trade visit", "training", "transkei audit", "transkei field audit", "TS audit", "TS POC (visiting laggards outlets)", "TS project", "TS project visit", "TS survey", "vacant route coolers", "VDS vehicle drop off", "vehicle service", "welcoming new FM, introducing him to the team and do the hand over.", "will be delivering work material and will be working with the two Bss in the area", "will be doing FM surveys in that area.", "will be working with both Bss in that area", "will be working with BSS in those areas", "will take BSS199 to hospital due to IOD", 
"with training department", "work", "working in the area", "working with Bss in the area"]
spcificationofproject=["BSS SIGN OFF", "BSS Sign OFF", "BSS Sign Off - Sebenzela Candidate", "BSS Sign off and Coaching", "BSS Sign Offs", "Business", "CAM", "COACHING", "Coaching", "coaching", "Cooler Recovery Project", "Cooler recovery project", "cooler recovery project", "Cooler Verification Project", "Field Audit", "Heineken Cycle Brief", "Heineken cycle brief", "HSA Cycle Brief", "Nkosinathi", "Nondumiso Mashapha", "Please specify project", "POC", "POC Coverage", "POC refreshier training", "POC SENTRAAL", "Project Spear", "Sales Force", "Sales force", "SDS", "SDS Coverage", "SDS SUPOORT AND BSS SIGN OFFS", "SDS Support", "SDS Support - FM support", "SDS SUPPORT AND BSS SIGN OFF", "SDS Support and BSS Sign-OFF", "SDS Support and sign off", "Sebenzela", "Sign - off", "Sign Off", "Sign off", "Spear", "TBBC", "TRADE COVERAGE", "Trade Coverage", "Training", "TS Project", "Tshepho Malegasa Shogole", "work"]