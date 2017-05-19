//Requesting access to KoboCat API
var xhr = new XMLHttpRequest();

//Sending Developer API Token
xhr.open("GET", "https://kc.kobotoolbox.org/api/v1/data/91203?format=json",true, "Authorization", "Token", "24e6c56f18e08f27a95722824d44f5c33d38c0af");
xhr.setRequestHeader("Authorization", "Token " + ("24e6c56f18e08f27a95722824d44f5c33d38c0af"));

//when the page loads, take data retrieved from Kobo API and put it into a table and 
//display Kobo data in console

xhr.onload = function(){
	var ourData = JSON.parse(xhr.responseText);
	console.log(ourData);

       var html = '<table id=myTable border="1">';
        //$.each(ourData.County, function(key, value){
        for(i in ourData){
            html += '<tr>';
            html += '<td>' + ourData[i].County + '</td>';
            html += '<td>' + ourData[i].Uploaded + '</td>';
            html += '</tr>';
        };
        html += '</table>';

//Use search bar to filter through data

        $('div').html(html);
$("#myInput").keyup(function() {
	var rows = $("#myTable").find("tr").hide();
	var data = this.value.split(" ");
	$.each(data, function(i, v) {
		rows.filter(":contains('" + v + "')").show();
	});
});
	
	


}
//Check status of connection in console(200 == success)
xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);








