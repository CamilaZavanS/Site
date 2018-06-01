var CGData = [];

CGData[0] = "Bio Fitness";
CGData[1] = "http://18.231.198.231/assets/base/img/content/apps/biof.png";
CGData[2] = "Sloganxxjshka";
CGData[3] = "Sabemos a dificuldade de encontrar uma academia com qualidade e atividades variadas, é com base nessa premissa e compromisso que planejamos a Bio Fitness para ser a mais completa e moderna academia. Nosso foco é a qualidade de vida com um verdadeiro centro de atividades físicas, esportes, bem-estar e lazer para toda a família.";
CGData[4] = "";
CGData[5] = "";
CGData[6] = "";
CGData[7] = "";
CGData[8] = true;
CGData[9] = true;
CGData[10] = true;
CGData[11] = true;
CGData[12] = true;
CGData[13] = true;
CGData[14] = true;
CGData[15] = true;
CGData[16] = true;
CGData[17] = true;
CGData[18] = true;
CGData[19] = true;
CGData[20] = true;
CGData[21] = true;
CGData[22] = true;
CGData[23] = false;
CGData[24] = false;
CGData[25] = false;
CGData[26] = false;
CGData[27] = false;
CGData[28] = false;
CGData[29] = false;
CGData[30] = false;

CGData[31] = [];
CGData[31][0] = [];
CGData[31][0][0] = "1"
CGData[31][0][1] = "Republica"
CGData[31][0][2] = "Rua Bento Freitas, 34"
CGData[31][0][3] = "São Paulo"
CGData[31][0][4] = "SP"
CGData[31][0][5] = "01012-000"
CGData[31][0][6] = "(11)3333-5433"

CGData[31][1] = [];
CGData[31][1][0] = "2"
CGData[31][1][1] = "Oscar Freire"
CGData[31][1][2] = "Rua Bento Freitas, 34"
CGData[31][1][3] = "São Paulo"
CGData[31][1][4] = "SP"
CGData[31][1][5] = "01012-000"
CGData[31][1][6] = "(11)3333-5433"

CGData[31][2] = [];
CGData[31][2][0] = "3"
CGData[31][2][1] = "Aclimacao"
CGData[31][2][2] = "Rua Bento Freitas, 34"
CGData[31][2][3] = "São Paulo"
CGData[31][2][4] = "SP"
CGData[31][2][5] = "01012-000"
CGData[31][2][6] = "(11)3333-5433"

CGData[31][3] = [];
CGData[31][3][0] = "4"
CGData[31][3][1] = "Alphaville"
CGData[31][3][2] = "Rua Bento Freitas, 34"
CGData[31][3][3] = "São Paulo"
CGData[31][3][4] = "SP"
CGData[31][3][5] = "01012-000"
CGData[31][3][6] = "(11)3333-5433"

CGData[32] = [];
CGData[32][0] = []
CGData[32][0][0] = "1"; // Id unit
CGData[32][0][1] = "1"; // Id class
CGData[32][0][2] = "1"; // Day of week
CGData[32][0][3] = "10:00"; // Time
CGData[32][0][4] = "Plinio"; // Instructor
CGData[32][0][5] = "Zumba"; // Class name

CGData[32][1] = [];
CGData[32][1][0] = "1";
CGData[32][1][1] = "2"
CGData[32][1][2] = "1"
CGData[32][1][3] = "10:30"
CGData[32][1][4] = "Plinio"
CGData[32][1][5] = "Jump"

CGData[32][2] = [];
CGData[32][2][0] = "2"
CGData[32][2][1] = "3"
CGData[32][2][2] = "1"
CGData[32][2][3] = "11:00"
CGData[32][2][4] = "Plinio"
CGData[32][2][5] = "Jump"

CGData[33] = [];
CGData[33][0] = []
CGData[33][0][0] = "1" // Id Unit
CGData[33][0][1] = "1" // Id Plan
CGData[33][0][2] = "Platinum" // Name Plan
CGData[33][0][3] = "89.00" // Price
CGData[33][0][4] = "12" // Installments
CGData[33][0][5] = "89.90" // Price
CGData[33][0][6] = "Adesão: 99.00" // Fee
CGData[33][0][7] = "Manutenção: 100.00" // Maintance Fee

CGData[33][1] = []
CGData[33][1][0] = "2" // Id Unit
CGData[33][1][1] = "2" // Id Plan
CGData[33][1][2] = "Platinum" // Name Plan
CGData[33][1][3] = "89.00" // Price
CGData[33][1][4] = "12" // Installments
CGData[33][1][5] = "89.90" // Price
CGData[33][1][6] = "Adesão: 99.00" // Fee
CGData[33][1][7] = "Manutenção: 100.00" // Maintance Fee

CGData[33][2] = []
CGData[33][2][0] = "3" // Id Unit
CGData[33][2][1] = "3" // Id Plan
CGData[33][2][2] = "Platinum" // Name Plan
CGData[33][2][3] = "89.00" // Price
CGData[33][2][4] = "12" // Installments
CGData[33][2][5] = "89.90" // Price
CGData[33][2][6] = "Adesão: 99.00" // Fee
CGData[33][2][7] = "Manutenção: 100.00" // Maintance Fee

CGData[33][3] = []
CGData[33][3][0] = "4" // Id Unit
CGData[33][3][1] = "4" // Id Plan
CGData[33][3][2] = "Platinum" // Name Plan
CGData[33][3][3] = "89.00" // Price
CGData[33][3][4] = "12" // Installments
CGData[33][3][5] = "89.90" // Price
CGData[33][3][6] = "Adesão: 99.00" // Fee
CGData[33][3][7] = "Manutenção: 100.00" // Maintance Fee




function loadData(){
   $("#title").append(CGData[0]); 
    $("#logo").attr("src", CGData[1]);	
    $("#slogan").append(CGData[2]); 
    $("#about").append(CGData[3]); 
    
    //Services
    if (CGData[8]){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/signal.jpg" alt=""/><span class="c-title">Wi-Fi Livre</span></li>');
    }
    if (CGData[9]){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/bike.png" alt=""/><span class="c-title">Bicicletário</span></li>    ');
    }
    if (CGData[10]){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/estacionamento.png" alt=""/><span class="c-title">Est. Conveniado</span></li>    ');
    }
    if (CGData[11]){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/estacionamento.png" alt=""/><span class="c-title">Estacionamento</span></li>    ');
    }
    if (CGData[12]){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/armario.png" alt=""/><span class="c-title">Armário</span></li>    ');
    }
    if (CGData[13]){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/secador.jpg" alt=""/><span class="c-title">Secador</span></li>    ');
    }
    if (CGData[14]){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/massagem.png" alt=""/><span class="c-title">Massagem</span></li>    ');
    }
    if (CGData[15]){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/ar.jpg" alt=""/><span class="c-title">Ar-condicionado</span></li>    ');
    }
    if (CGData[16]){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/toalha.jpg" alt=""/><span class="c-title">Toalha</span></li>    ');
    }
    if (CGData[17]){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/avaliacao.gif" alt=""/><span class="c-title">Avaliação Física</span></li>    ');
    }
    if (CGData[18]){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/sauna.jpg" alt=""/><span class="c-title">Sauna</span></li>    ');
    }
    if (CGData[19]){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/kids.jpg" alt=""/><span class="c-title">Espaço Kids</span></li>    ');
    }
    if (CGData[20]){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/loja.jpg" alt=""/><span class="c-title">Loja</span></li>    ');
    }
    if (CGData[21]){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/lanche.jpg" alt=""/><span class="c-title">Lanchonete</span></li>    ');
    }
    if (CGData[22]){
        $("#services").append('<li><img class="img-responsive" width="70" height="70" src="assets/base/img/content/avatars/pool.png" alt=""/><span class="c-title">Piscina</span></li>    ');
    }
    
    //Units
    $.each(CGData[31], function (index, item) {
        lineStr = '<div class="col-md-4 col-sm-6"><div class="c-content-feature-2 c-option-2 c-theme-bg-parent-hover"><div class="c-icon-wrapper c-theme-bg-on-parent-hover"><i class="c-font-38 c-theme c-icon-md icon-pin"></i></div><h3 class="c-font-uppercase c-title">';
        lineStr += item[1];
        lineStr += '</h3><p>';
        lineStr += item[2] + ' <br> ' + item[3] + ' - ' + item[4];
        lineStr += '<br/>';
        lineStr += item[6];
        lineStr += '<br>';
        //lineStr += '<button onclick="loadClasses(' + item[0] + ')"  type="button" class="btn btn-warning c-btn-circle"></i> GRADE HORÁRIA </button></p></div></div>'
        // lineStr += '<button onclick=loadClasses(' + item[0] + ')  type="button" class="btn btn-warning c-btn-circle"></i> GRADE HORÁRIA </button></p></div></div>'
      //lineStr += '<button onclick=loadClasses(' + item[0] + ') type="button" class="btn btn-info c-btn-uppercase c-btn-bold"></i>Grade Horária</button>'
      lineStr +=   '<button onclick=loadClasses(' + item[0] + ') <button type="button" class="btn btn-default c-btn-uppercase">Grade Horária</button>'
        $("#units").append(lineStr);
    });
    
    //Classes
    
    //Plans
    $.each(CGData[33], function (index, item) {
        lineStr = '<div class="c-tile c-tile-small wow animate fadeInLeft"> <div class="c-label c-theme-bg">';
        lineStr += item[0];
        lineStr += '</div> <p class="c-font-uppercase">';
        lineStr += item[2];
        lineStr += '</p> <p class="c-price">';
        lineStr += item[3];
        lineStr += '</p> <p class="c-font-uppercase">';
        lineStr += item[6];
        lineStr += '</p> <p class="c-font-uppercase">';
        lineStr += item[7];
        lineStr += '</p>';
        lineStr += '<a href="#" class="btn btn-md c-btn-square c-btn-border-2x c-btn-regular c-btn-uppercase c-btn-bold">Comprar</a></div>'
        $("#price").append(lineStr);
  });
    
}

function loadClasses(id){
    $("#gradeclasses").empty();
    rowClass = "odd";
    $.each(CGData[32], function (index, item) {
        if (item[0] == id){
            console.log(item[5])
        }
    });
    
}

function laodUnits(){
	unitItem = "<div class='container'><div class='section-title'><h2>Unidades</h2></div><div class='row'>";
	$.each(CGData.units, function (index, item) {
		$("#unitClass").append("<option value=" + item[6] + ">" + item[0] + "</option>");
		$("#unitPlans").append("<option value=" + item[6] + ">" + item[0] + "</option>");
		unitItem += "<div class='col-lg-4 col-md-4 col-sm-4 col-xs-12 hvr-float-shadow'><div class='price-table-box'>";
		unitItem += "<h4 class='unit'>" + item[0].substr(0, 18) + "</h4>";
		unitItem += "<i class='fa fa-phone' aria-hidden='true'></i> " + item[1] + "<br>";
		unitItem += "<i class='fa fa-envelope' aria-hidden='true'></i> " + item[2] + "<br>" + item[3] + "/" + item[4];
		unitItem += "</div></div>"
	});	
	gymId = $("#unit").val(); 
	unitItem += "</div>"
    $("#unitList").append(unitItem);
}

function laodPlans(){
	$("#planList").empty();
	plans = "";
	$.each(CGData.plans, function (index, item) {
		if (gymId == item[0]){
			plans += "<div class='col-lg-4 col-md-4 col-sm-4 col-xs-12 hvr-float-shadow'><div class='price-table-box'>";
			plans += "<span>" + item[2].substr(0, 18) + "</span>";
			plans += "<h3>" + formatCurrency(item[3]) + "<span> / Mês </span></h3>";
			plans += "<span>Matricula: " + formatCurrency(item[4]) + "</span>";
			plans += "<span>Manutenção: " + formatCurrency(item[5]) + "</span>";
			plans += "<a class='custom-button' data-title='Become A Member' href='#'>Contratar</a>";
			plans += "</div></div>"
			console.log("Plan: " + item[0] + " " + item[1] + " " + item[2] + " " + item[3] + " " + item[4] + " " + item[5]);
		}
	});	
	$("#planList").append(plans);
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
			if(item[3] != null){
				startTime = item[3].substr(0,5); 	
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