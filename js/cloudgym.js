function loadData(){
   $("#title").append(CGData.name); 
    //$("#logo").attr("src", CGData[1]);	
    $("#slogan").append(CGData.slogan); 
    $("#about").append(CGData.about); 
    console.log(CGData);
    //Services
    
    if (CGData.wifi == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/signal.jpg" alt=""/><span class="c-title">Wi-Fi Livre</span></li>');
    }
    if (CGData.bicycleCarrier == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/bike.png" alt=""/><span class="c-title">Bicicletário</span></li>    ');
    }
    if (CGData.parking == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/estacionamento.png" alt=""/><span class="c-title">Est. Conveniado</span></li>    ');
    }
    if (CGData.parking == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/estacionamento.png" alt=""/><span class="c-title">Estacionamento</span></li>    ');
    }
    if (CGData.locker == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/armario.png" alt=""/><span class="c-title">Armário</span></li>    ');
    }
    if (CGData.hairDryer == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/secador.jpg" alt=""/><span class="c-title">Secador</span></li>    ');
    }
    if (CGData.massage == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/massagem.png" alt=""/><span class="c-title">Massagem</span></li>    ');
    }
    if (CGData.airConditioning == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/ar.jpg" alt=""/><span class="c-title">Ar-condicionado</span></li>    ');
    }
    if (CGData.towel == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/toalha.jpg" alt=""/><span class="c-title">Toalha</span></li>    ');
    }
    if (CGData.physicalAssessment == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/avaliacao.gif" alt=""/><span class="c-title">Avaliação Física</span></li>    ');
    }
    if (CGData.steamRoom == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/sauna.jpg" alt=""/><span class="c-title">Sauna</span></li>    ');
    }
    if (CGData.kidsSpace == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/kids.jpg" alt=""/><span class="c-title">Espaço Kids</span></li>    ');
    }
    if (CGData.store == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/loja.jpg" alt=""/><span class="c-title">Loja</span></li>    ');
    }
    if (CGData.snackBar == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/lanche.jpg" alt=""/><span class="c-title">Lanchonete</span></li>    ');
    }
    if (CGData.pool == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/pool.png" alt=""/><span class="c-title">Piscina</span></li>    ');
    }
    if (CGData.aerobic == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/esteira.png" alt=""/><span class="c-title">Aeróbico</span></li>    ');
    }
    if (CGData.functional == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/funcional.png" alt=""/><span class="c-title">Funcional</span></li>    ');
    }
    if (CGData.weightRoom == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/musc.jpeg" alt=""/><span class="c-title">Musculação</span></li>    ');
    }
    if (CGData.dance == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/dance.png" alt=""/><span class="c-title">Dança</span></li>    ');
    }
    if (CGData.gymGames == "true"){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/aerobico.png" alt=""/><span class="c-title">Gym Games</span></li>    ');
    }
    
    //Units
    $.each(CGData.units, function (index, item) {
        lineStr = '<div class="col-md-4 col-sm-6"><div class="c-content-feature-2 c-option-2 c-theme-bg-parent-hover"><div class="c-icon-wrapper c-theme-bg-on-parent-hover"><i class="c-font-38 c-theme c-icon-md icon-pin"></i></div><h3 class="c-font-uppercase c-title">';
        lineStr += item.name;
        lineStr += '</h3><p>';
        lineStr += item.address + ' <br> ' + item.city + ' - ' + item.state;
        lineStr += '<br/>';
        lineStr += item.phone;
        lineStr += '<br>';
        lineStr +=   '<button onclick=loadClasses(' + item.id + ') <button type="button" class="btn btn-default c-btn-uppercase">Grade Horária</button>'
        $("#units").append(lineStr);
    });
    
    //Classes
    
    //Plans
    $.each(CGData.plans, function (index, item) {
        lineStr = '<div class="c-tile c-tile-small wow animate fadeInLeft"> <div class="c-label c-theme-bg">';
        lineStr += getUnitName(item.unitId);
        lineStr += '</div> <p class="c-font-uppercase">';
        lineStr += item.name;
        lineStr += '</p> <p class="c-price">';
        lineStr += item.price;
        lineStr += '</p> <p class="c-font-uppercase"> <span class="c-title">Adesão:</span> </li>'; 
        lineStr += item.registrationFee;
        lineStr += '</p> <p class="c-font-uppercase"> <span class="c-title">Manutenção:</span> </li>';
        lineStr += item.maintenanceFee;
        lineStr += '</p>';
        lineStr += '<a href="#" class="btn btn-md c-btn-square c-btn-border-2x c-btn-regular c-btn-uppercase c-btn-bold">Comprar</a></div>'
        $("#price").append(lineStr);
  });
    
}

function loadClasses(id){
    $("#gradeclasses").empty();
    rowClass = "odd";
    $.each(CGData.classes, function (index, item) {
        if (item[0] == id){
            console.log(item.name)
        }
    });
    
}

function loadClassesOld(){
	rowClass = "odd";
	$("#monday").empty();
	$("#tuesday").empty();
	$("#wednesday").empty();
	$("#thursday").empty();
	$("#friday").empty();
	$("#saturday").empty();
	$("#sunday").empty();
	$.each(CGData.classes, function (index, item) {
		if (gymId == item[0]){
			startTime = "";
			endTime = "";
			instructorName = "";
			if(item.startTime != null){
				startTime = item.startTime.substr(0,5); 	
			}
			if(item[4] != null){
				endTime = " às " + item[4].substr(0,5);
			}
			
			if(item[8] != null){
				instructorName = item[8]; 
			}
			itemclass = "<ul class=" + rowClass + "><li>" + item[5] + "</li><li>" + startTime + endTime + "</li><li>" + instructorName + "</li></ul>";
			if (item[6] == 1){
				week = "monday"; 
			}else if (item[6] == 2){
				week = "tuesday";
			}else if (item[6] == 3){
				week = "wednesday";
			}else if (item[6] == 4){
				week = "thursday";
			}else if (item[6] == 5){
				week = "friday";
			}else if (item[6] == 6){
				week = "saturday";
			}else if (item[6] == 7){
				week = "sunday";
			}
			$("#" + week).append(itemclass);
			
			if (rowClass == "odd"){
				rowClass = "even";
			}else{
				rowClass = "odd";
			}
		}
	});	
}


function getUnitName(id){
    name = "";
    $.each(CGData.units, function (index, item) {    
        if (item.id == id){
            name = item.name;
        }
    });
    return name;
}

function changeUnitClass(){
	gymId = $("#unitClass").val();
	$("#unitPlans").val(gymId);
	loadClasses();
	laodPlans();
}

function changeUnitPlan(){
	gymId = $("#unitPlans").val();
	$("#unitClass").val(gymId);
	loadClasses();
	laodPlans();
}

function formatCurrency(str) {
	if (str == null){
		str = "0";
	}
    var parts = (str + "").split("."),
        main = parts[0],
        len = main.length,
        output = "",
        i = len - 1;

    while(i >= 0) {
        output = main.charAt(i) + output;
        if ((len - i) % 3 === 0 && i > 0) {
            output = "," + output;
        }
        --i;
    }
    // put decimal part back
    if (parts.length > 1) {
    	if (parts[1].length < 2){
    		parts[1] = parts[1] + "0";
    	}
        output += "." + parts[1].substr(0,2);
    }else{
    	output += ".00";
    }
    return output;
}

function shadeBlend(p,c0,c1) {
    var n=p<0?p*-1:p,u=Math.round,w=parseInt;
    if(c0.length>7){
        var f=c0.split(","),t=(c1?c1:p<0?"rgb(0,0,0)":"rgb(255,255,255)").split(","),R=w(f[0].slice(4)),G=w(f[1]),B=w(f[2]);
        return "rgb("+(u((w(t[0].slice(4))-R)*n)+R)+","+(u((w(t[1])-G)*n)+G)+","+(u((w(t[2])-B)*n)+B)+")"
    }else{
        var f=w(c0.slice(1),16),t=w((c1?c1:p<0?"#000000":"#FFFFFF").slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF;
        return "#"+(0x1000000+(u(((t>>16)-R1)*n)+R1)*0x10000+(u(((t>>8&0x00FF)-G1)*n)+G1)*0x100+(u(((t&0x0000FF)-B1)*n)+B1)).toString(16).slice(1)
    }
}