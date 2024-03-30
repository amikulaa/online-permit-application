/** Get required information based off parcel number */
if ($('#parcel').length > 0) {
	$('#parcel').mask("000-0000-0000-000", { placeholder: "___-____-____-___" });
	$("#parcel").on('input', function() {
		var parcel = $(this).val();
		if (parcel.length < 17 || parcel.length > 17) {
			document.getElementById("error_msg").value = "INVALID PARCEL";
			clear_sections();
			$('#parcel').val(parcel);
			return;
		}
		var postUrl = url + 'zoning/validate_parcel';
		var postData = {
			parcel: parcel
		};
		$.ajax({
			url: postUrl,
			type: 'POST',
			data: postData,
			dataType: 'text',
			error: function(xhr, thrownError) {
				alert(xhr.status);
				alert(thrownError);
			},
			success: function(response) {
				if (response == 0) {
					document.getElementById("error_msg").value = "NO PARCEL EXISTS";
				} else {
					document.getElementById('parcel').readOnly = true;
					document.getElementById("error_msg").value = "";
					document.getElementById('navigation_fieldset').hidden = false;
					document.getElementById('SECTION_ONE').hidden = false;
					document.getElementById('section_one_show').style.color = '#FFFFFF';
					document.getElementById('section_one_show').style.backgroundColor = '#304040';
					get_land_owners(parcel);
					get_description(parcel);
					get_fireno(parcel);
					get_acres(parcel);
					get_town(parcel);
					set_date();
				}
			}
		});
	});
}

/** clears inputs on parcel num change */
function clear_sections() {
	document.getElementById('navigation_fieldset').hidden = false;
	document.getElementById('SECTION_ONE').hidden = false;
	document.getElementById('SECTION_TWO').hidden = false;
	document.getElementById('SECTION_THREE').hidden = false;
	document.getElementById('SECTION_FOUR').hidden = false;
	document.getElementById('SECTION_FIVE').hidden = false;
	document.getElementById('SECTION_SIX').hidden = false;
	last_section = 'SECTION_ONE';
	//progressbar.style.width = 0;
	//curr_progress = 0;
	section1 = 0;
	section2 = 0;
	section3 = 0;
	section4 = 0;
	section5 = 0;
	section_one_complete = false;
	section_two_complete = false;
	section_three_complete = false;
	section_four_complete = false;
	section_five_complete = false;
	document.getElementById('section_one_show').style.color = '#304040';
	document.getElementById('section_two_show').style.color = '#818181';
	document.getElementById('section_three_show').style.color = '#818181';
	document.getElementById('section_four_show').style.color = '#818181';
	document.getElementById('section_five_show').style.color = '#818181';
	document.getElementById("permit_container").reset();
	document.getElementById('navigation_fieldset').hidden = true;
	document.getElementById('SECTION_ONE').hidden = true;
	document.getElementById('SECTION_TWO').hidden = true;
	document.getElementById('SECTION_THREE').hidden = true;
	document.getElementById('SECTION_FOUR').hidden = true;
	document.getElementById('SECTION_FIVE').hidden = true;
	document.getElementById('SECTION_SIX').hidden = true;
}

//searchable select of cities to select from
//new js function?
function get_towns_select() {
	var postUrl = url + 'zoning/get_towns_select';
	$.ajax({
		url: postUrl,
		type: 'POST',
		dataType: 'json',
		error: function(xhr, thrownError) {
			alert(xhr.status);
			alert(thrownError);
		},
		success: function(response) {
			if (response != 0) {
				var id_element = "desc_town_name";
				//remove old input element
				document.getElementById(id_element).remove();
				//Create and append select list
				var selectList = document.createElement("select");
				selectList.title = 'SELECT';
				selectList.id = id_element;
				selectList.name = id_element;
				selectList.style.cursor = 'pointer';
				selectList.className = "form-control";
				var myParent = document.getElementById('town_span');
				myParent.appendChild(selectList);
				//append select value option
				var option = document.createElement("option");
				option.value = '';
				option.text = 'Select...';
				option.hidden = true;
				selectList.appendChild(option);
				//Create and append the options
				for (var i = 0; i < response.length; i++) {
					var option = document.createElement("option");
					option.value = response[i].name;
					option.text = response[i].name;
					selectList.appendChild(option);
				}
			}
		}
	});
}

/** Set town */
function get_town(parcel) {
	var postUrl = url + 'zoning/get_town';
	var postData = {
		parcel: parcel
	};
	$.ajax({
		url: postUrl,
		type: 'POST',
		data: postData,
		dataType: 'text',
		error: function(xhr, thrownError) {
			alert(xhr.status);
			alert(thrownError);
		},
		success: function(response) {
			if (response != 0) {
				document.getElementById('desc_town_name').value = response;
				document.getElementById('desc_town_name').readOnly = true;
			} else {
				get_towns_select();
			}
		}
	});
}

/** Set town */
function get_acres(parcel) {
	var postUrl = url + 'zoning/get_acres';
	var postData = {
		parcel: parcel
	};
	$.ajax({
		url: postUrl,
		type: 'POST',
		data: postData,
		dataType: 'text',
		error: function(xhr, thrownError) {
			alert(xhr.status);
			alert(thrownError);
		},
		success: function(response) {
			if (response != 0) {
				document.getElementById('desc_acres').value = response;
				document.getElementById('desc_acres').readOnly = true;
			}
		}
	});
}

/** Set fireno */
function get_fireno(parcel) {
	var postUrl = url + 'zoning/get_fireno';
	var postData = {
		parcel: parcel
	};
	$.ajax({
		url: postUrl,
		type: 'POST',
		data: postData,
		dataType: 'text',
		error: function(xhr, thrownError) {
			alert(xhr.status);
			alert(thrownError);
		},
		success: function(response) {
			if (response != 0) {
				console.log(response);
				document.getElementById('desc_fire_num_road').value = response;
				document.getElementById('desc_fire_num_road').readOnly = true;
			}
		}
	});
}

/** Get the tax parcel description */
function get_description(parcel) {
	var postUrl = url + 'zoning/get_legal';
	var postData = {
		parcel: parcel
	};
	$.ajax({
		url: postUrl,
		type: 'POST',
		data: postData,
		dataType: 'json',
		error: function(xhr, thrownError) {
			alert(xhr.status);
			alert(thrownError);
		},
		success: function(response) {
			if (response != 0) {
				document.getElementById('desc').textContent = '';
				for (var i = 0; i < response.length; i++) {
					document.getElementById('desc').textContent += ' ' + response[i].description;
				}
			}
		}
	});
}

/** gets quantity of gaqrage or deck/porches */
function get_quantity(id){
	switch(id){
		case 'input_garageattached':
			if(document.getElementById('input_garageattached').checked == false){
				document.getElementById('garage_quantity').hidden = true;
				document.getElementById('input_garage_quantity').value = 0;
				document.getElementById('input_garage_quantity').style.borderColor = "#ced4da";
				if($('#GARAGE_INPUT_LIST').length >= 0){
					$('#GARAGE_INPUT_LIST').remove();
				}
			} else if(document.getElementById('input_garageattached').checked == true) {
				document.getElementById('garage_quantity').hidden = false;
			}
			break;
		case 'input_deckporch':
		case 'input_deck_enclosed':
		case 'input_deck_nonenclosed':
			if(document.getElementById('input_deckporch').checked == false){
				document.getElementById('deck_quantity').hidden = true;
				document.getElementById('input_deck_quantity').value = 0;
				document.getElementById('input_deck_quantity').style.borderColor = "#ced4da";
				if($('#DECK_INPUT_LIST').length >= 0){
					$('#DECK_INPUT_LIST').remove();
				}
			} else if(document.getElementById('input_deckporch').checked == true) {
				document.getElementById('deck_quantity').hidden = false;
			}
			break;
	}
}

var GAR_QUANTITY = 0;
var DECK_QUANTITY = 0;

/* add inputs for garage or deck */
function add_inputs(id){
	var max = document.getElementById(id).value;
	var error_header = "<div id='ERROR_QUANTITY' class='col-md-4 offset-md-4'><h3 class='red'>ERROR, invalid quantity.</h3></div>";
	switch(id){
		case 'input_garage_quantity':
			if(max <= 0 || max > 10){
				if($('#GARAGE_INPUT_LIST').length >= 0){
					$('#GARAGE_INPUT_LIST').remove();
				}
				$('#GARAGE_CONTAINER').append(error_header);
				GAR_QUANTITY = 0;
			} else {
				if($('#ERROR_QUANTITY').length >= 0){
					$('#ERROR_QUANTITY').remove();
				}
				var html = "<div id='GARAGE_INPUT_LIST' class='col-md-2 offset-md-4'><ol>";
				for(var i = 1; i <= max; i++){
					html += "<li><div class='input-group input-group-sm'><input id='input_sqftgar_" + i + "' name='input_sqftgar_" + i + "' type='number' min=0 class='form-control text-validate'><div class='input-group-prepend'><span class='input-group-text'>SQ. FT.</span></div></div></li>";
				}
				html += "</ol></div>";
				$('#GARAGE_INPUT_LIST').remove();
				$('#GARAGE_CONTAINER').append(html);
				GAR_QUANTITY = max;
			}
			break;
		case 'input_deck_quantity':
			if(max <= 0 || max > 10){
				if($('#DECK_INPUT_LIST').length >= 0){
					$('#DECK_INPUT_LIST').remove();
				}
				$('#DECK_CONTAINER').append(error_header);
				DECK_QUANTITY = 0;
			} else {
				if($('#ERROR_QUANTITY').length >= 0){
					$('#ERROR_QUANTITY').remove();
				}
				var html = "<div id='DECK_INPUT_LIST' class='col-md-2 offset-md-4'><ol>";
				for(var i = 1; i <= max; i++){
					html += "<li><div class='input-group input-group-sm'><input id='input_sqftdeck_" + i + "' name='input_sqftdeck_" + i + "' type='number' min=0 class='form-control text-validate'><div class='input-group-prepend'><span class='input-group-text'>SQ. FT.</span></div></div></li>";
				}
				html += "</ol></div>";
				$('#DECK_INPUT_LIST').remove();
				$('#DECK_CONTAINER').append(html);
				DECK_QUANTITY = max;
			}
			break;
	}
}

/** Validate the text inputs on the page */
$('.text-validate').on('change', function() {
	var curr_id = this.id;
	var curr_new_val = this.value;
	var postUrl = url + 'zoning/validate_input';
	var postData = {
		curr_value: curr_new_val
	};
	$.ajax({
		url: postUrl,
		type: 'POST',
		data: postData,
		dataType: 'text',
		error: function(xhr, thrownError) {
			alert(xhr.status);
			alert(thrownError);
		},
		success: function(response) {
			if (response == 'ERROR') {
				document.getElementById(curr_id).value = 'ERROR';
				document.getElementById(curr_id).style.borderColor = "red";
			} else {
				if (response == null || response == '' || response == 'undefined') {
					document.getElementById(curr_id).value = '';
					document.getElementById(curr_id).style.borderColor = "#ced4da"; //input border color
				} else {
					document.getElementById(curr_id).value = response;
					document.getElementById(curr_id).style.borderColor = "green";
				}
			}
		}
	});
});

/** Zip codes */
function validate_zip(id, zip) {
	if ((zip != null && zip != '') && zip.length != 5) {
		document.getElementById(id).style.borderColor = "red";
	} else if (zip == null || zip == '') {
		document.getElementById(id).style.borderColor = "#ced4da"; //input border color
	} else {
		document.getElementById(id).style.borderColor = "green";
	}
}

if ($('#zip').length > 0) {
	$('#zip').mask("99999");
	$("#zip").on('change', function() {
		validate_zip(this.id, this.value);
	});
}
if ($('#zip1').length > 0) {
	$('#zip1').mask("99999");
	$("#zip1").on('change', function() {
		validate_zip(this.id, this.value);
	});
}
if ($('#contractzip').length > 0) {
	$('#contractzip').mask("99999");
	$("#contractzip").on('change', function() {
		validate_zip(this.id, this.value);
	});
}

/** Phones */
function validate_phone(id, phoneno) {
	if ((phoneno != null && phoneno != '') && phoneno.length < 12) {
		document.getElementById(id).style.borderColor = "red";
	} else if (phoneno == null || phoneno == '') {
		document.getElementById(id).style.borderColor = "#ced4da"; //input border color
	} else {
		document.getElementById(id).style.borderColor = "green";
	}
}

/** Phone number mask for user ease of input */
if ($('#pickup_number').length > 0) {
	$('#pickup_number').mask("000-000-0000", { placeholder: "___-___-____" });
	$("#pickup_number").on('change', function() {
		validate_phone(this.id, this.value);
	});
}

/** Phone number mask for user ease of input */
if ($('#phoneno').length > 0) {
	$('#phoneno').mask("000-000-0000", { placeholder: "___-___-____" });
	$("#phoneno").on('change', function() {
		validate_phone(this.id, this.value);
	});
}

/** Phone number mask for user ease of input */
if ($('#phoneno1').length > 0) {
	$('#phoneno1').mask("000-000-0000", { placeholder: "___-___-____" });
	$("#phoneno1").on('change', function() {
		validate_phone(this.id, this.value);
	});
}

/** Phone number mask for user ease of input */
if ($('#contractphoneno').length > 0) {
	$('#contractphoneno').mask("000-000-0000", { placeholder: "___-___-____" });
	$("#contractphoneno").on('change', function() {
		validate_phone(this.id, this.value);
	});
}

/** Phone number mask for user ease of input */
if ($('#contact_phone').length > 0) {
	$('#contact_phone').mask("000-000-0000", { placeholder: "___-___-____" });
	$("#contact_phone").on('change', function() {
		if ((this.value != null && this.value != '') && this.value.length < 12) {
			document.getElementById(this.id).style.borderColor = "red";
			document.getElementById(this.id).value = '';
		} else {
			document.getElementById(this.id).style.borderColor = "green";
		}
	});
}

/** Email validation */
if ($('#contact_email').length > 0) {
	$("#contact_email").on('change', function() {
		var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if(this.value.match(validRegex)){
			document.getElementById(this.id).style.borderColor = "green";
		} else {
			document.getElementById(this.id).style.borderColor = "red";
			document.getElementById(this.id).value = "";
		}
	});
}

/** Sanitary permit mask */
if ($('#input_sanitary_permit').length > 0) {
	$('#input_sanitary_permit').mask("0000 00000", { placeholder: "___ _____" });
}

//default first section shown to user
var last_section = 'SECTION_ONE';
var curr_tab = '';
const menu_tabs = ['SECTION_ONE', 'SECTION_TWO','SECTION_THREE','SECTION_FOUR','SECTION_FIVE'];
const back_next_tabs = [
['SECTION_ONE', 'section_one_show'], 
['SECTION_TWO', 'section_two_show'],  
['SECTION_THREE', 'section_three_show'], 
['SECTION_FOUR', 'section_four_show'],  
['SECTION_FIVE', 'section_five_show']
];

/** BACK BUTTON */
$('.BACK_BTN').on('click', function() {
	if(menu_tabs.indexOf(last_section) != 0 && menu_tabs.indexOf(last_section) != -1){
		var newtab = menu_tabs.indexOf(last_section) - 1;
		document.getElementById(back_next_tabs[newtab][1]).dispatchEvent(new Event('click'));
	}
});

/** NEXT BUTTON */
$('.NXT_BTN').on('click', function() {
	if((menu_tabs.indexOf(last_section) != (menu_tabs.length - 1)) && menu_tabs.indexOf(last_section) != -1){
		var newtab = menu_tabs.indexOf(last_section) + 1;
		document.getElementById(back_next_tabs[newtab][1]).dispatchEvent(new Event('click'));
	}
});

/** SWEETALERT2 swal alert */
function alert_incomplete() {
	Swal.fire({
		title: "OPE!",
		text: "Missing input in " + last_section.replace("_", " ") + ", please complete to continue.",
		icon: "error"
	});
}

/** helper functions for tab nav */
function highlight_me(id) {
	document.getElementById(id).style.backgroundColor = '#304040';
	document.getElementById(id).style.color = '#ffffff';
}

/** helper functions for tab nav */
function unhighlight_me(id) {
	document.getElementById(id).style.backgroundColor = 'transparent';
	document.getElementById(id).style.color = '#818181';
}

/** ON CLICK SHOW SECTION ONE */
$('#section_one_show').on('click', function() {
	if (validate_sections(last_section)) {
		document.getElementById('SECTION_ONE').hidden = false;
		document.getElementById('SECTION_TWO').hidden = true;
		document.getElementById('SECTION_THREE').hidden = true;
		document.getElementById('SECTION_FOUR').hidden = true;
		document.getElementById('SECTION_FIVE').hidden = true;
		document.getElementById('SECTION_SIX').hidden = true;
		highlight_me('section_one_show');
		unhighlight_me('section_two_show');
		unhighlight_me('section_three_show');
		unhighlight_me('section_four_show');
		unhighlight_me('section_five_show');
		last_section = 'SECTION_ONE';
	} else {
		alert_incomplete();
	}
});

/** ON CLICK SHOW SECTION ONE */
$('#section_two_show').on('click', function() {
	if (validate_sections(last_section)) {
		document.getElementById('SECTION_ONE').hidden = true;
		document.getElementById('SECTION_TWO').hidden = false;
		document.getElementById('SECTION_THREE').hidden = true;
		document.getElementById('SECTION_FOUR').hidden = true;
		document.getElementById('SECTION_FIVE').hidden = true;
		document.getElementById('SECTION_SIX').hidden = true;
		highlight_me('section_two_show');
		unhighlight_me('section_one_show');
		unhighlight_me('section_three_show');
		unhighlight_me('section_four_show');
		unhighlight_me('section_five_show');
		last_section = 'SECTION_TWO';
	} else {
		alert_incomplete();
	}
});

/** ON CLICK SHOW SECTION ONE */
$('#section_three_show').on('click', function() {
	if (validate_sections(last_section)) {
		document.getElementById('SECTION_ONE').hidden = true;
		document.getElementById('SECTION_TWO').hidden = true;
		document.getElementById('SECTION_THREE').hidden = false;
		document.getElementById('SECTION_FOUR').hidden = true;
		document.getElementById('SECTION_FIVE').hidden = true;
		document.getElementById('SECTION_SIX').hidden = true;
		highlight_me('section_three_show');
		unhighlight_me('section_one_show');
		unhighlight_me('section_two_show');
		unhighlight_me('section_four_show');
		unhighlight_me('section_five_show');
		last_section = 'SECTION_THREE';
	} else {
		alert_incomplete();
	}
});

/** ON CLICK SHOW SECTION ONE */
$('#section_four_show').on('click', function() {
	if (validate_sections(last_section)) {
		document.getElementById('SECTION_ONE').hidden = true;
		document.getElementById('SECTION_TWO').hidden = true;
		document.getElementById('SECTION_THREE').hidden = true;
		document.getElementById('SECTION_FOUR').hidden = false;
		document.getElementById('SECTION_FIVE').hidden = true;
		document.getElementById('SECTION_SIX').hidden = true;
		highlight_me('section_four_show');
		unhighlight_me('section_one_show');
		unhighlight_me('section_two_show');
		unhighlight_me('section_three_show');
		unhighlight_me('section_five_show');
		last_section = 'SECTION_FOUR';
	} else {
		alert_incomplete();
	}
});

/** ON CLICK SHOW SECTION ONE */
$('#section_five_show').on('click', function() {
	if (validate_sections(last_section)) {
		isvalid();
		document.getElementById('SECTION_ONE').hidden = true;
		document.getElementById('SECTION_TWO').hidden = true;
		document.getElementById('SECTION_THREE').hidden = true;
		document.getElementById('SECTION_FOUR').hidden = true;
		document.getElementById('SECTION_FIVE').hidden = false;
		document.getElementById('SECTION_SIX').hidden = false;
		highlight_me('section_five_show');
		unhighlight_me('section_one_show');
		unhighlight_me('section_two_show');
		unhighlight_me('section_three_show');
		unhighlight_me('section_four_show');
		last_section = 'SECTION_FIVE';
	} else {
		alert_incomplete();
	}
});

/** Progress bar and section validation */
//const progressbar = document.querySelector(".progress");
//var curr_progress = 0;
var section1 = 0;
var section2 = 0;
var section3 = 0;
var section4 = 0;
var section5 = 0;

var section_one_complete = false;
var section_two_complete = false;
var section_three_complete = false;
var section_four_complete = false;
var section_five_complete = false;

const changeProgress = (progress) => {
	curr_progress += progress;
	progressbar.style.width = `${curr_progress}%`;
};

/** submission isvalid */
function isvalid() {
	if (section_one_complete != true || section_two_complete != true || section_three_complete != true || section_four_complete != true) {
		document.getElementById('submit_button').disabled = true;
	} else {
		document.getElementById('submit_button').disabled = false;
	}
}

/** Section complete */
function modify_section(section_num) {
	switch (section_num) {
		case 1:
			//changeProgress(20);
			section1 = 1;
			break;
		case 2:
			//changeProgress(15);
			section2 = 1;
			break;
		case 3:
			//changeProgress(30);
			section3 = 1;
			break;
		case 4:
			//changeProgress(35);
			section4 = 1;
			break;
		case 5:
			section5 = 1;
			break;
	}
}

/** validate section 1 */
function validate_section1() {
	var isvalid = true;
	//applicant property owner full name
	var fullname = document.getElementById('fullname').value;
	if (fullname == null || fullname == '') {
		document.getElementById('fullname').style.borderColor = "red";
		isvalid = false;
	} else {
		document.getElementById('fullname').style.borderColor = "green";
	}

	//mailing address
	var street_add = document.getElementById('streetaddress').value;
	if (street_add == null || street_add == '') {
		document.getElementById('streetaddress').style.borderColor = "red";
		isvalid = false;
	} else {
		document.getElementById('streetaddress').style.borderColor = "green";
	}

	//city
	var city = document.getElementById('city').value;
	if (city == null || city == '') {
		document.getElementById('city').style.borderColor = "red";
		isvalid = false;
	} else {
		document.getElementById('city').style.borderColor = "green";
	}

	//zip
	var zip = document.getElementById('zip').value;
	if (zip == null || zip == '' || (zip.length != 5)) {
		document.getElementById('zip').style.borderColor = "red";
		isvalid = false;
	} else {
		document.getElementById('zip').style.borderColor = "green";
	}

	//phone_no
	var phoneno = document.getElementById('phoneno').value;
	if (phoneno == null || phoneno == '' || phoneno.length < 12) {
		document.getElementById('phoneno').style.borderColor = "red";
		isvalid = false;
	} else {
		document.getElementById('phoneno').style.borderColor = "green";
	}

	var childDivs = document.getElementById('SECTION_ONE').getElementsByTagName('input');
	for (var i = 0; i < childDivs.length; i++) {
		var childDiv = childDivs[i];
		if (childDiv.style.borderColor == "red") {
			isvalid = false;
		}
	}

	return isvalid;
}

/** validate section 2 */
function validate_section2() {
	var isvalid = true;

	//TOWN
	var TOWN = document.getElementById('desc_town_name').value;
	if (TOWN == null || TOWN == '') {
		document.getElementById('desc_town_name').style.borderColor = "red";
		isvalid = false;
	} else {
		document.getElementById('desc_town_name').style.borderColor = "green";
	}

	//ACRES
	var ACRES = document.getElementById('desc_acres').value;
	if (ACRES == null || ACRES == '') {
		document.getElementById('desc_acres').style.borderColor = "red";
		isvalid = false;
	} else {
		document.getElementById('desc_acres').style.borderColor = "green";
	}

	//PROJECT SITE
	var ROAD = document.getElementById('desc_fire_num_road').value;
	if (ROAD == null || ROAD == '') {
		document.getElementById('desc_fire_num_road').style.borderColor = "red";
		isvalid = false;
	} else {
		document.getElementById('desc_fire_num_road').style.borderColor = "green";
	}

	var childDivs = document.getElementById('SECTION_TWO').getElementsByTagName('input');
	for (var i = 0; i < childDivs.length; i++) {
		var childDiv = childDivs[i];
		if (childDiv.style.borderColor == "red") {
			isvalid = false;
		}
	}

	return isvalid;
}

/** validate section 3 */
function validate_section3() {
	var isvalid = true;

	//RES VS NON RES
	var RES = document.getElementById('input_res').checked;
	var NON = document.getElementById('input_non_res').checked;
	var NONSTRUCT = document.getElementById('input_nonstruct').checked;
	if (RES == false && NON == false && NONSTRUCT == false) {
		isvalid = false;
	}

	//NEW STRUCT VS ADD
	var NEW = document.getElementById('input_new').checked;
	var ADD = document.getElementById('input_add').checked;
	var OTHER = document.getElementById('input_nonstruc_other').checked;
	if (NEW == false && ADD == false && OTHER == false) {
		isvalid = false;
	}

	if (RES == true) {
		var CHOICE1 = document.getElementById('input_signlefamres').checked;
		var CHOICE2 = document.getElementById('inputmh_singlefamily').checked;
		var CHOICE3 = document.getElementById('input_multifamily').checked;
		var CHOICE4 = document.getElementById('input_other').checked;
		var CHOICE5 = document.getElementById('input_gardet').checked;
		if (CHOICE1 == false && CHOICE2 == false && CHOICE3 == false && CHOICE4 == false && CHOICE5 == false) {
			document.getElementById('select_one_res').style.color = 'red';
			isvalid = false;
		} else {
			document.getElementById('select_one_res').style.color = 'green';
		}

		if (CHOICE1 == true) {
			var CHILD = document.getElementById('inputnobedrooms').value;
			if (CHILD == '' || CHILD == null) {
				document.getElementById('inputnobedrooms').style.borderColor = "red";
				document.getElementById('select_additional_information').style.color = "red";
				isvalid = false;
			} else {
				document.getElementById('inputnobedrooms').style.borderColor = "green";
				document.getElementById('select_additional_information').style.color = "#CED4DA";
			}
		} else if (CHOICE2 == true) {
			//addition or accessory need to be checked
			var CHILD = document.getElementById('inputmh_addition').checked;
			var CHILD2 = document.getElementById('inputmh_accessory').checked;
			if (CHILD == false && CHILD2 == false) {
				document.getElementById('select_additional_information').style.color = "red";
				isvalid = false;
			} else {
				document.getElementById('select_additional_information').style.color = "#CED4DA";
			}
		} else if (CHOICE3 == true) {
			var CHILD = document.getElementById('inputmultiunits').value;
			if (CHILD == '' || CHILD == null) {
				document.getElementById('inputmultiunits').style.borderColor = "red";
				document.getElementById('select_additional_information').style.color = "red";
				isvalid = false;
			} else {
				document.getElementById('inputmultiunits').style.borderColor = "green";
				document.getElementById('select_additional_information').style.color = "#CED4DA";
			}
			var CHILD2 = document.getElementById('inputmultibedrooms').value;
			if (CHILD2 == '' || CHILD2 == null) {
				document.getElementById('inputmultibedrooms').style.borderColor = "red";
				document.getElementById('select_additional_information').style.color = "red";
				isvalid = false;
			} else {
				document.getElementById('inputmultibedrooms').style.borderColor = "green";
				document.getElementById('select_additional_information').style.color = "#CED4DA";
			}
		} else if (CHOICE4 == true) {
			var CHILD = document.getElementById('input_other_ans').value;
			if (CHILD == '' || CHILD == null) {
				document.getElementById('input_other_ans').style.borderColor = "red";
				document.getElementById('select_additional_information').style.color = "red";
				isvalid = false;
			} else {
				document.getElementById('input_other_ans').style.borderColor = "green";
				document.getElementById('select_additional_information').style.color = "#CED4DA";
			}
		}

		//area
		var CHILD = document.getElementById('input_sqftres').value;
		if (CHILD == '' || CHILD == null) {
			document.getElementById('input_sqftres').style.borderColor = "red";
			isvalid = false;
		} else {
			document.getElementById('input_sqftres').style.borderColor = "green";
		}

		//height
		var CHILD = document.getElementById('input_height').value;
		if (CHILD == '' || CHILD == null) {
			document.getElementById('input_height').style.borderColor = "red";
			isvalid = false;
		} else {
			document.getElementById('input_height').style.borderColor = "green";
		}
		
		//value
		var CHILD = document.getElementById('input_value_const').value;
		if (CHILD == '' || CHILD == null) {
			document.getElementById('input_value_const').style.borderColor = "red";
			isvalid = false;
		} else {
			document.getElementById('input_value_const').style.borderColor = "green";
		}

		//specify use
		var CHILD = document.getElementById('input_specify_use').value;
		if (CHILD == '' || CHILD == null) {
			document.getElementById('input_specify_use').style.borderColor = "red";
			isvalid = false;
		} else {
			document.getElementById('input_specify_use').style.borderColor = "green";
		}
		
		//children of selections
		var PARENT = document.getElementById('input_deckporch').checked;
		var CHILD1 = document.getElementById('input_deck_enclosed').checked;
		var CHILD2 = document.getElementById('input_deck_nonenclosed').checked;
		if (PARENT == true && (CHILD1 == false && CHILD2 == false)) {
			document.getElementById('select_children_res').style.color = "red";
			isvalid = false;
		} else {
			document.getElementById('select_children_res').style.color = "green";
		}
		
		var PARENT = document.getElementById('input_floodplain').checked;
		var CHILD1 = document.getElementById('input_ff').checked;
		var CHILD2 = document.getElementById('input_fw').checked;
		if (PARENT == true && (CHILD1 == false && CHILD2 == false)) {
			document.getElementById('select_children_res').style.color = "red";
			isvalid = false;
		} else {
			if(isvalid){
				document.getElementById('select_children_res').style.color = "green";
			}
		}
		
		//quantity garage if garage attached selected
		var PARENT = document.getElementById('input_garageattached').checked;
		var CHILD = document.getElementById('input_garage_quantity').value;
		if(PARENT == true && (CHILD == null || CHILD == 0 || CHILD == '')){
			document.getElementById('input_garage_quantity').style.borderColor = "red";
			isvalid = false;
		} else {
			document.getElementById('input_garage_quantity').style.borderColor = "green";
		}
		
		if(PARENT == true && (CHILD != null && CHILD != 0 && CHILD != '')){
			for(var i = 1; i <= GAR_QUANTITY; i++){
				var CURR_GAR = document.getElementById('input_sqftgar_' + i);
				if(CURR_GAR.value <= 0 || CURR_GAR.value == null){
					CURR_GAR.style.borderColor = "red";
					isvalid = false;
				} else {
					CURR_GAR.style.borderColor = "green";
				}
			}
		}
		
		//quantity deck if deck selected
		var PARENT = document.getElementById('input_deckporch').checked;
		var CHILD = document.getElementById('input_deck_quantity').value;
		if(PARENT == true && (CHILD == null || CHILD == 0 || CHILD == '')){
			document.getElementById('input_deck_quantity').style.borderColor = "red";
			isvalid = false;
		} else {
			document.getElementById('input_deck_quantity').style.borderColor = "green";
		}
		
		if(PARENT == true && (CHILD != null && CHILD != 0 && CHILD != '')){
			for(var i = 1; i <= DECK_QUANTITY; i++){
				var CURR_DECK = document.getElementById('input_sqftdeck_' + i);
				if(CURR_DECK.value <= 0 || CURR_DECK.value == null){
					CURR_DECK.style.borderColor = "red";
					isvalid = false;
				} else {
					CURR_DECK.style.borderColor = "green";
				}
			}
		}
	} else if (NON == true) {
		//ag OR indust OR business OR camp OR shore OR other
		//if other
		//answer
		var CHOICE1 = document.getElementById('input_non_agricultural').checked;
		var CHOICE2 = document.getElementById('input_non_industrial').checked;
		var CHOICE3 = document.getElementById('input_non_business').checked;
		var CHOICE4 = document.getElementById('input_non_campground').checked;
		var CHOICE6 = document.getElementById('input_non_other').checked;
		if (CHOICE1 == false && CHOICE2 == false && CHOICE3 == false
			&& CHOICE4 == false && CHOICE6 == false) {
			document.getElementById('select_one_non').style.color = "red";
			isvalid = false;
		} else {
			document.getElementById('select_one_non').style.color = "green";
		}

		if (CHOICE6 == true) {
			var CHILD = document.getElementById('input_non_other_ans').value;
			if (CHILD == '' || CHILD == null) {
				document.getElementById('input_non_other_ans').style.borderColor = "red";
				isvalid = false;
			} else {
				document.getElementById('input_non_other_ans').style.borderColor = "green";
			}
		}

		//area
		var CHILD = document.getElementById('input_non_sqftres').value;
		if (CHILD == '' || CHILD == null) {
			document.getElementById('input_non_sqftres').style.borderColor = "red";
			isvalid = false;
		} else {
			document.getElementById('input_non_sqftres').style.borderColor = "green";
		}

		//height
		var CHILD = document.getElementById('input_non_height').value;
		if (CHILD == '' || CHILD == null) {
			document.getElementById('input_non_height').style.borderColor = "red";
			isvalid = false;
		} else {
			document.getElementById('input_non_height').style.borderColor = "green";
		}
		
		//value
		var CHILD = document.getElementById('input_non_value_const').value;
		if (CHILD == '' || CHILD == null) {
			document.getElementById('input_non_value_const').style.borderColor = "red";
			isvalid = false;
		} else {
			document.getElementById('input_non_value_const').style.borderColor = "green";
		}

		//specify use
		var CHILD = document.getElementById('input_non_specify_use').value;
		if (CHILD == '' || CHILD == null) {
			document.getElementById('input_non_specify_use').style.borderColor = "red";
			isvalid = false;
		} else {
			document.getElementById('input_non_specify_use').style.borderColor = "green";
		}
		
		//children of selections
		var PARENT = document.getElementById('input_non_floodplain').checked;
		var CHILD1 = document.getElementById('input_non_ff').checked;
		var CHILD2 = document.getElementById('input_non_fw').checked;
		if (PARENT == true && (CHILD1 == false && CHILD2 == false)) {
			document.getElementById('select_children_nonres').style.color = "red";
			isvalid = false;
		} else {
			document.getElementById('select_children_nonres').style.color = "green";
		}
	} else if(NONSTRUCT == true){
		var CHOICE1 = document.getElementById('input_nonstruc_fill').checked;
		var CHOICE2 = document.getElementById('input_nonstruc_dist').checked;
		var CHOICE3 = document.getElementById('input_nonstruc_remov').checked;
		var CHOICE6 = document.getElementById('input_nonstruc_othernon').checked;
		if (CHOICE1 == false && CHOICE2 == false && CHOICE3 == false && CHOICE6 == false) {
			document.getElementById('select_one_nonstruc').style.color = "red";
			isvalid = false;
		} else {
			document.getElementById('select_one_nonstruc').style.color = "green";
		}

		if (CHOICE6 == true) {
			var CHILD = document.getElementById('input_nonstruc_othernon_ans').value;
			if (CHILD == '' || CHILD == null) {
				document.getElementById('input_nonstruc_othernon_ans').style.borderColor = "red";
				isvalid = false;
			} else {
				document.getElementById('input_nonstruc_othernon_ans').style.borderColor = "green";
			}
		}

		//area
		var CHILD = document.getElementById('input_nonstruc_sqft').value;
		if (CHILD == '' || CHILD == null) {
			document.getElementById('input_nonstruc_sqft').style.borderColor = "red";
			isvalid = false;
		} else {
			document.getElementById('input_nonstruc_sqft').style.borderColor = "green";
		}

		//specify use
		var CHILD = document.getElementById('input_nonstruc_use').value;
		if (CHILD == '' || CHILD == null) {
			document.getElementById('input_nonstruc_use').style.borderColor = "red";
			isvalid = false;
		} else {
			document.getElementById('input_nonstruc_use').style.borderColor = "green";
		}

		//value
		var CHILD = document.getElementById('input_nonstruc_value').value;
		if (CHILD == '' || CHILD == null) {
			document.getElementById('input_nonstruc_value').style.borderColor = "red";
			isvalid = false;
		} else {
			document.getElementById('input_nonstruc_value').style.borderColor = "green";
		}
	}

	var childDivs = document.getElementById('SECTION_THREE').getElementsByTagName('input');
	for (var i = 0; i < childDivs.length; i++) {
		var childDiv = childDivs[i];
		if (childDiv.style.borderColor == "red") {
			isvalid = false;
		}
	}
	return isvalid;
}

/** validate section 4 */
function validate_section4() {
	if (document.getElementById("plot_plan").files.length == 0) {
		return false;
	} else {
		return true;
	}
}

function validate_sections(id) {
	switch (id) {
		case 'SECTION_ONE':
			if (validate_section1() && !section_one_complete) {
				modify_section(1);
				section_one_complete = true; //completed once, no more progress bar needed
				return true;
			} else if (validate_section1() && section_one_complete) {
				return true;
			} else {
				return false;
			}
		case 'SECTION_TWO':
			if (validate_section2() && !section_two_complete) {
				modify_section(2);
				section_two_complete = true; //completed once, no more progress bar needed
				return true;
			} else if (validate_section2() && section_two_complete) {
				return true;
			} else {
				return false;
			}
		case 'SECTION_THREE':
			if (validate_section3() && !section_three_complete) {
				modify_section(3);
				section_three_complete = true; //completed once, no more progress bar needed
				return true;
			} else if (validate_section3() && section_three_complete) {
				return true;
			} else {
				return false;
			}
		case 'SECTION_FOUR':
			if (validate_section4() && !section_four_complete) {
				modify_section(4);
				section_four_complete = true; //completed once, no more progress bar needed
				return true;
			} else if (validate_section4() && section_four_complete) {
				return true;
			} else {
				return false;
			}
		case 'SECTION_FIVE':
			return true;
	}
	return false;
}

/** Setting todays date as today */
if ($('#accepted_date').length > 0) {
	set_date();
}

/** Setting todays date as today */
function set_date() {
	var now = new Date();
	var day = ("0" + now.getDate()).slice(-2);
	var month = ("0" + (now.getMonth() + 1)).slice(-2);
	var today = now.getFullYear() + "-" + (month) + "-" + (day);
	document.getElementById('accepted_date').value = today;
	document.getElementById('accepted_date').readOnly = true;
}

/** Show jeffco onclick address image */
$("#address_zoning").on('click', function() {
	if (document.getElementById('address_image').hidden == true) {
		document.getElementById('address_image').hidden = false;
	} else {
		document.getElementById('address_image').hidden = true;
	}
});

/** Validate that only one of the checkboxes are selected 
 * and the inputs are required if the pickup is selected */
function validate_permit_delivery(id) {
	switch (id) {
		case 'mail_permit':
			//require mailing input
			document.getElementById('mail_permit').checked = true;
			document.getElementById('mail_permit').required = true;
			//unrequire pickup inputs
			document.getElementById('pickup_permit').checked = false;
			document.getElementById('pickup_permit').required = false;
			document.getElementById('pickup_name').hidden = true;
			document.getElementById('pickup_name').required = false;
			document.getElementById('pickup_number').hidden = true;
			document.getElementById('pickup_number').required = false;
			break;
		case 'pickup_permit':
			//require pickup inputs
			document.getElementById('pickup_permit').checked = true;
			document.getElementById('pickup_permit').required = true;
			document.getElementById('pickup_name').required = true;
			document.getElementById('pickup_name').hidden = false;
			document.getElementById('pickup_name').focus();
			document.getElementById('pickup_number').required = true;
			document.getElementById('pickup_number').hidden = false;
			//unrequire mailing input
			document.getElementById('mail_permit').checked = false;
			document.getElementById('mail_permit').required = false;
			break;
	}
}

/** Control flow residential vs non residential */
function swp_res(id) {
	switch (id) {
		case 'input_res':
			document.getElementById('input_res').checked = true;
			document.getElementById('input_non_res').checked = false;
			document.getElementById('new_or_addition').hidden = false;
			document.getElementById('NON_RESIDENTIAL').hidden = true;
			document.getElementById('RESIDENTIAL').hidden = false;
			document.getElementById('RES_NONRES_FOOT').hidden = true;
			document.getElementById('RES_NONRES_FOOT2').hidden = true;
			//reset nonresidential page values
			document.getElementById('input_non_agricultural').checked = false;
			document.getElementById('input_non_industrial').checked = false;
			document.getElementById('input_non_business').checked = false;
			document.getElementById('input_non_campground').checked = false;
			document.getElementById('input_non_other').checked = false;
			document.getElementById('input_non_other_ans').value = null;
			document.getElementById('input_non_other_ans').style.borderColor = "#ced4da";
			document.getElementById('input_non_shorewet').checked = false;
			document.getElementById('input_non_floodplain').checked = false;
			document.getElementById('input_non_ff').checked = false;
			document.getElementById('input_non_fw').checked = false;
			document.getElementById('input_non_sqftres').value = null;
			document.getElementById('input_non_sqftres').style.borderColor = "#ced4da";
			document.getElementById('input_non_height').value = null;
			document.getElementById('input_non_height').style.borderColor = "#ced4da";
			document.getElementById('input_non_specify_use').value = null;
			document.getElementById('input_non_specify_use').style.borderColor = "#ced4da";
			document.getElementById('input_non_value_const').value = null;
			document.getElementById('input_non_value_const').style.borderColor = "#ced4da";
			//footer
			document.getElementById('RES_NONRES_FOOT').hidden = false;
			document.getElementById('RES_NONRES_FOOT2').hidden = true;
			document.getElementById('select_one_res').style.color = "#818181";
			document.getElementById('select_one_non').style.color = "#818181";
			document.getElementById('select_additional_information').style.color = "#CED4DA";
			//HIDEAWAY
			document.getElementById('HIDEAWAY5A').hidden = true;
			document.getElementById('HIDEAWAY6A').hidden = true;
			//HIDE NONSTRUCT
			document.getElementById('input_nonstruct').checked = false;
			document.getElementById('NON_STRUCTURAL').hidden = true;
			//NEW NONSTRUCT VARS
			document.getElementById('input_nonstruc_fill').checked = false;
			document.getElementById('input_nonstruc_dist').checked = false;
			document.getElementById('input_nonstruc_remov').checked = false;
			document.getElementById('input_nonstruc_othernon').checked = false;
			document.getElementById('input_nonstruc_othernon_ans').value = null;
			document.getElementById('input_nonstruc_othernon_ans').style.borderColor = "#ced4da";
			document.getElementById('input_nonstruc_sqft').value = null;
			document.getElementById('input_nonstruc_sqft').style.borderColor = "#ced4da";
			document.getElementById('input_nonstruc_use').value = null;
			document.getElementById('input_nonstruc_use').style.borderColor = "#ced4da";
			document.getElementById('input_nonstruc_value').value = null;
			document.getElementById('input_nonstruc_value').style.borderColor = "#ced4da";
			document.getElementById('select_one_nonstruc').style.color = "#818181";
			break;
		case 'input_non_res':
			document.getElementById('input_non_res').checked = true;
			document.getElementById('input_res').checked = false;
			document.getElementById('new_or_addition').hidden = false;
			document.getElementById('RESIDENTIAL').hidden = true;
			document.getElementById('NON_RESIDENTIAL').hidden = false;
			document.getElementById('RES_NONRES_FOOT').hidden = true;
			document.getElementById('RES_NONRES_FOOT2').hidden = true;
			//reset residential page values
			document.getElementById('input_signlefamres').checked = false;
			document.getElementById('inputnobedrooms').value = null;
			document.getElementById('inputnobedrooms').style.borderColor = "#ced4da";
			document.getElementById('inputmh_singlefamily').checked = false;
			document.getElementById('input_multifamily').checked = false;
			document.getElementById('inputmultiunits').value = null;
			document.getElementById('inputmultiunits').style.borderColor = "#ced4da";
			document.getElementById('inputmultibedrooms').value = null;
			document.getElementById('inputmultibedrooms').style.borderColor = "#ced4da";
			document.getElementById('input_garageattached').checked = false;
			document.getElementById('input_floodplain').checked = false;
			document.getElementById('input_wetland').checked = false;
			document.getElementById('input_gardet').checked = false;
			document.getElementById('input_other').checked = false;
			document.getElementById('input_other_ans').value = null;
			document.getElementById('input_other_ans').style.borderColor = "#ced4da";
			document.getElementById('input_fw').checked = false;
			document.getElementById('input_ff').checked = false;
			document.getElementById('inputmh_accessory').checked = false;
			document.getElementById('inputmh_addition').checked = false;
			document.getElementById('input_deckporch').checked = false;
			document.getElementById('input_deck_enclosed').checked = false;
			document.getElementById('input_deck_nonenclosed').checked = false;
			document.getElementById('input_sqftres').value = null;
			document.getElementById('input_sqftres').style.borderColor = "#ced4da";
			document.getElementById('input_height').value = null;
			document.getElementById('input_height').style.borderColor = "#ced4da";
			document.getElementById('input_sqftgar').value = null;
			document.getElementById('input_sqftdeck').value = null;
			document.getElementById('input_specify_use').value = null;
			document.getElementById('input_specify_use').style.borderColor = "#ced4da";
			document.getElementById('input_value_const').value = null;
			document.getElementById('input_value_const').style.borderColor = "#ced4da";
			document.getElementById('input_garage_quantity').style.borderColor = "#ced4da";
			document.getElementById('input_deck_quantity').style.borderColor = "#ced4da";
			//footer
			document.getElementById('RES_NONRES_FOOT2').hidden = false;
			document.getElementById('RES_NONRES_FOOT').hidden = true;
			document.getElementById('select_one_res').style.color = "#818181";
			document.getElementById('select_one_non').style.color = "#818181";
			document.getElementById('select_additional_information').style.color = "#CED4DA";
			//hideaways
			document.getElementById('HIDEAWAY1A').hidden = true;
			document.getElementById('HIDEAWAY1B').hidden = true;
			document.getElementById('HIDEAWAY2A').hidden = true;
			document.getElementById('HIDEAWAY2B').hidden = true;
			document.getElementById('HIDEAWAY3A').hidden = true;
			document.getElementById('HIDEAWAY3B').hidden = true;
			document.getElementById('HIDEAWAY3C').hidden = true;
			document.getElementById('HIDEAWAY3D').hidden = true;
			document.getElementById('HIDEAWAY4A').hidden = true;
			document.getElementById('HIDEAWAY6A').hidden = true;
			//HIDE NONSTRUCT
			document.getElementById('input_nonstruct').checked = false;
			document.getElementById('NON_STRUCTURAL').hidden = true;
			//NEW NONSTRUCT VARS
			document.getElementById('input_nonstruc_fill').checked = false;
			document.getElementById('input_nonstruc_dist').checked = false;
			document.getElementById('input_nonstruc_remov').checked = false;
			document.getElementById('input_nonstruc_othernon').checked = false;
			document.getElementById('input_nonstruc_othernon_ans').value = null;
			document.getElementById('input_nonstruc_othernon_ans').style.borderColor = "#ced4da";
			document.getElementById('input_nonstruc_sqft').value = null;
			document.getElementById('input_nonstruc_sqft').style.borderColor = "#ced4da";
			document.getElementById('input_nonstruc_use').value = null;
			document.getElementById('input_nonstruc_use').style.borderColor = "#ced4da";
			document.getElementById('input_nonstruc_value').value = null;
			document.getElementById('input_nonstruc_value').style.borderColor = "#ced4da";
			document.getElementById('select_one_nonstruc').style.color = "#818181";
			document.getElementById('select_children_res').style.color = "#818181";
			break;
		case 'input_nonstruct':
			document.getElementById('input_non_res').checked = false;
			document.getElementById('input_res').checked = false;
			document.getElementById('new_or_addition').hidden = false;
			document.getElementById('RESIDENTIAL').hidden = true;
			document.getElementById('NON_RESIDENTIAL').hidden = true;
			document.getElementById('RES_NONRES_FOOT').hidden = true;
			document.getElementById('RES_NONRES_FOOT2').hidden = true;
			//reset residential page values
			document.getElementById('input_signlefamres').checked = false;
			document.getElementById('inputnobedrooms').value = null;
			document.getElementById('inputnobedrooms').style.borderColor = "#ced4da";
			document.getElementById('inputmh_singlefamily').checked = false;
			document.getElementById('input_multifamily').checked = false;
			document.getElementById('inputmultiunits').value = null;
			document.getElementById('inputmultiunits').style.borderColor = "#ced4da";
			document.getElementById('inputmultibedrooms').value = null;
			document.getElementById('inputmultibedrooms').style.borderColor = "#ced4da";
			document.getElementById('input_garageattached').checked = false;
			document.getElementById('input_floodplain').checked = false;
			document.getElementById('input_wetland').checked = false;
			document.getElementById('input_gardet').checked = false;
			document.getElementById('input_other').checked = false;
			document.getElementById('input_other_ans').value = null;
			document.getElementById('input_other_ans').style.borderColor = "#ced4da";
			document.getElementById('input_fw').checked = false;
			document.getElementById('input_ff').checked = false;
			document.getElementById('inputmh_accessory').checked = false;
			document.getElementById('inputmh_addition').checked = false;
			document.getElementById('input_deckporch').checked = false;
			document.getElementById('input_deck_enclosed').checked = false;
			document.getElementById('input_deck_nonenclosed').checked = false;
			document.getElementById('input_sqftres').value = null;
			document.getElementById('input_sqftres').style.borderColor = "#ced4da";
			document.getElementById('input_height').value = null;
			document.getElementById('input_height').style.borderColor = "#ced4da";
			document.getElementById('input_sqftgar').value = null;
			document.getElementById('input_sqftdeck').value = null;
			document.getElementById('input_specify_use').value = null;
			document.getElementById('input_specify_use').style.borderColor = "#ced4da";
			document.getElementById('input_value_const').value = null;
			document.getElementById('input_value_const').style.borderColor = "#ced4da";
			document.getElementById('input_garage_quantity').style.borderColor = "#ced4da";
			//footer
			document.getElementById('RES_NONRES_FOOT2').hidden = true;
			document.getElementById('RES_NONRES_FOOT').hidden = true;
			document.getElementById('select_one_res').style.color = "#818181";
			document.getElementById('select_one_non').style.color = "#818181";
			document.getElementById('select_additional_information').style.color = "#CED4DA";
			//hideaways
			document.getElementById('HIDEAWAY1A').hidden = true;
			document.getElementById('HIDEAWAY1B').hidden = true;
			document.getElementById('HIDEAWAY2A').hidden = true;
			document.getElementById('HIDEAWAY2B').hidden = true;
			document.getElementById('HIDEAWAY3A').hidden = true;
			document.getElementById('HIDEAWAY3B').hidden = true;
			document.getElementById('HIDEAWAY3C').hidden = true;
			document.getElementById('HIDEAWAY3D').hidden = true;
			document.getElementById('HIDEAWAY4A').hidden = true;
			document.getElementById('input_res').checked = false;
			document.getElementById('input_non_res').checked = false;
			document.getElementById('NON_RESIDENTIAL').hidden = true;
			document.getElementById('RESIDENTIAL').hidden = true;
			document.getElementById('RES_NONRES_FOOT').hidden = true;
			document.getElementById('RES_NONRES_FOOT2').hidden = true;
			//reset nonresidential page values
			document.getElementById('input_non_agricultural').checked = false;
			document.getElementById('input_non_industrial').checked = false;
			document.getElementById('input_non_business').checked = false;
			document.getElementById('input_non_campground').checked = false;
			document.getElementById('input_non_other').checked = false;
			document.getElementById('input_non_other_ans').value = null;
			document.getElementById('input_non_other_ans').style.borderColor = "#ced4da";
			document.getElementById('input_non_shorewet').checked = false;
			document.getElementById('input_non_floodplain').checked = false;
			document.getElementById('input_non_ff').checked = false;
			document.getElementById('input_non_fw').checked = false;
			document.getElementById('input_non_sqftres').value = null;
			document.getElementById('input_non_sqftres').style.borderColor = "#ced4da";
			document.getElementById('input_non_height').value = null;
			document.getElementById('input_non_height').style.borderColor = "#ced4da";
			document.getElementById('input_non_specify_use').value = null;
			document.getElementById('input_non_specify_use').style.borderColor = "#ced4da";
			document.getElementById('input_non_value_const').value = null;
			document.getElementById('input_non_value_const').style.borderColor = "#ced4da";
			//footer
			document.getElementById('RES_NONRES_FOOT').hidden = true;
			document.getElementById('RES_NONRES_FOOT2').hidden = true;
			document.getElementById('select_one_res').style.color = "#818181";
			document.getElementById('select_one_non').style.color = "#818181";
			document.getElementById('select_additional_information').style.color = "#CED4DA";
			//HIDEAWAY
			document.getElementById('HIDEAWAY5A').hidden = true;
			//SHOW NONSTRUCT
			document.getElementById('input_nonstruct').checked = true;
			document.getElementById('NON_STRUCTURAL').hidden = false;
			document.getElementById('select_one_nonstruc').style.color = "#818181";
			document.getElementById('select_children_res').style.color = "#818181";
			break;
	}
}

/** Control flow new vs add with the selection of res and non-res */
function swp_new(id) {
	switch (id) {
		case 'input_new':
			document.getElementById('input_nonstruc_other').checked = false;
			document.getElementById('input_new').checked = true;
			document.getElementById('input_add').checked = false;
			document.getElementById('res_nonres').hidden = false;
			break;
		case 'input_add':
			document.getElementById('input_nonstruc_other').checked = false;
			document.getElementById('input_new').checked = false;
			document.getElementById('input_add').checked = true;
			document.getElementById('res_nonres').hidden = false;
			break;
		case 'input_nonstruc_other':
			document.getElementById('input_nonstruc_other').checked = true;
			document.getElementById('input_add').checked = false;
			document.getElementById('input_new').checked = false;
			document.getElementById('res_nonres').hidden = false;
			break;
	}
}

/** Control flow children residential*/
function clear_children(id) {
	switch (id) {
		case 'input_deckporch':
			document.getElementById('input_deckporch').checked = document.getElementById('input_deckporch').checked == true ? true : false;
			document.getElementById('input_deck_enclosed').checked = false;
			document.getElementById('input_deck_nonenclosed').checked = false;
			get_quantity(id);
			break;
		case 'input_floodplain':
			document.getElementById('input_floodplain').checked = document.getElementById('input_floodplain').checked == true ? true : false;
			document.getElementById('input_ff').checked = false;
			document.getElementById('input_fw').checked = false;
			break;
		case 'input_non_floodplain':
			document.getElementById('input_non_floodplain').checked = document.getElementById('input_non_floodplain').checked == true ? true : false;
			document.getElementById('input_non_ff').checked = false;
			document.getElementById('input_non_fw').checked = false;
	}
}

/** Control flow deck on residential */
function swp_deck(id) {
	switch (id) {
		case 'input_deck_enclosed':
			document.getElementById('input_deckporch').checked = true;
			document.getElementById('input_deck_enclosed').checked = true;
			document.getElementById('input_deck_nonenclosed').checked = false;
			break;
		case 'input_deck_nonenclosed':
			document.getElementById('input_deckporch').checked = true;
			document.getElementById('input_deck_nonenclosed').checked = true;
			document.getElementById('input_deck_enclosed').checked = false;
			break;
	}
	get_quantity(id);
}

/** Control flow mobile home addition vs accessory */
function swp_mob(id) {
	switch (id) {
		case 'inputmh_addition':
			document.getElementById('inputmh_singlefamily').checked = true;
			document.getElementById('inputmh_addition').checked = true;
			document.getElementById('inputmh_accessory').checked = false;
			break;
		case 'inputmh_accessory':
			document.getElementById('inputmh_singlefamily').checked = true;
			document.getElementById('inputmh_accessory').checked = true;
			document.getElementById('inputmh_addition').checked = false;
			break;
	}

	document.getElementById('input_signlefamres').checked = false;
	document.getElementById('input_multifamily').checked = false;
	document.getElementById('input_gardet').checked = false;
	document.getElementById('input_other').checked = false;

	document.getElementById('inputnobedrooms').value = null;
	document.getElementById('inputmultiunits').value = null;
	document.getElementById('inputmultibedrooms').value = null;
	document.getElementById('input_other_ans').value = null;
	document.getElementById('input_other_ans').style.borderColor = "#ced4da";
}

/** Control flow ff vs fw residential floodplain */
function swp_fp(id) {
	switch (id) {
		case 'input_ff':
			document.getElementById('input_floodplain').checked = true;
			document.getElementById('input_ff').checked = true;
			document.getElementById('input_fw').checked = false;
			break;
		case 'input_fw':
			document.getElementById('input_floodplain').checked = true;
			document.getElementById('input_fw').checked = true;
			document.getElementById('input_ff').checked = false;
			break;
	}
}

/** Control flow ff vs fw residential floodplain */
function swp_non_fp(id) {
	switch (id) {
		case 'input_non_ff':
			document.getElementById('input_non_floodplain').checked = true;
			document.getElementById('input_non_ff').checked = true;
			document.getElementById('input_non_fw').checked = false;
			break;
		case 'input_non_fw':
			document.getElementById('input_non_floodplain').checked = true;
			document.getElementById('input_non_fw').checked = true;
			document.getElementById('input_non_ff').checked = false;
			break;
	}
}

/** Control flow inputs */
function swp_input_type(id) {
	//other reset
	document.getElementById('input_signlefamres').checked = false;
	document.getElementById('inputmh_singlefamily').checked = false;
	document.getElementById('input_multifamily').checked = false;
	document.getElementById('input_other').checked = false;
	document.getElementById('input_gardet').checked = false;
	document.getElementById('inputmh_accessory').checked = false;
	document.getElementById('inputmh_addition').checked = false;
	document.getElementById('select_additional_information').style.color = "#ced4da";

	switch (id) {
		case 'inputnobedrooms':
			document.getElementById('input_signlefamres').checked = true;
			document.getElementById('inputmultiunits').value = null;
			document.getElementById('inputmultiunits').style.borderColor = "#ced4da";
			document.getElementById('inputmultibedrooms').value = null;
			document.getElementById('inputmultibedrooms').style.borderColor = "#ced4da";
			document.getElementById('input_other_ans').value = null;
			document.getElementById('input_other_ans').style.borderColor = "#ced4da";
			break;
		case 'inputmultiunits':
			document.getElementById('input_multifamily').checked = true;
			document.getElementById('inputnobedrooms').value = null;
			document.getElementById('inputnobedrooms').style.borderColor = "#ced4da";
			document.getElementById('input_other_ans').value = null;
			document.getElementById('input_other_ans').style.borderColor = "#ced4da";
			break;
		case 'inputmultibedrooms':
			document.getElementById('input_multifamily').checked = true;
			document.getElementById('inputnobedrooms').value = null;
			document.getElementById('inputnobedrooms').style.borderColor = "#ced4da";
			document.getElementById('input_other_ans').value = null;
			document.getElementById('input_other_ans').style.borderColor = "#ced4da";
			break;
		case 'input_other_ans':
			document.getElementById('input_other').checked = true;
			document.getElementById('inputnobedrooms').value = null;
			document.getElementById('inputnobedrooms').style.borderColor = "#ced4da";
			document.getElementById('inputmultiunits').value = null;
			document.getElementById('inputmultiunits').style.borderColor = "#ced4da";
			document.getElementById('inputmultibedrooms').value = null;
			document.getElementById('inputmultibedrooms').style.borderColor = "#ced4da";
			break;
	}
}


function hideaway_NONSTRUCT(id){
	switch (id) {
		case 'input_nonstruc_othernon':
			document.getElementById('HIDEAWAY6A').hidden = false;
			break;
		case 'input_nonstruc_othernon_ans':
			document.getElementById('HIDEAWAY6A').hidden = false;
			break;
		default:
			document.getElementById('HIDEAWAY6A').hidden = true;
			break;
	}
}

function hideaway_NONRES(id){
	switch (id) {
		case 'input_non_other_ans':
			document.getElementById('HIDEAWAY5A').hidden = false;
			break;
		case 'input_non_other':
			document.getElementById('HIDEAWAY5A').hidden = false;
			break;
		default:
			document.getElementById('HIDEAWAY5A').hidden = true;
			break;
	}
}

function hideaway(id){
	document.getElementById('HIDEAWAY1A').hidden = true;
	document.getElementById('HIDEAWAY1B').hidden = true;
	document.getElementById('HIDEAWAY2A').hidden = true;
	document.getElementById('HIDEAWAY2B').hidden = true;
	document.getElementById('HIDEAWAY3A').hidden = true;
	document.getElementById('HIDEAWAY3B').hidden = true;
	document.getElementById('HIDEAWAY3C').hidden = true;
	document.getElementById('HIDEAWAY3D').hidden = true;
	document.getElementById('HIDEAWAY4A').hidden = true;
	
	switch (id) {
		case 'input_signlefamres':
			document.getElementById('HIDEAWAY1A').hidden = false;
			document.getElementById('HIDEAWAY1B').hidden = false;
			break;
		case 'inputmh_singlefamily':
			document.getElementById('HIDEAWAY2A').hidden = false;
			document.getElementById('HIDEAWAY2B').hidden = false;
			break;
		case 'input_multifamily':
			document.getElementById('HIDEAWAY3A').hidden = false;
			document.getElementById('HIDEAWAY3B').hidden = false;
			document.getElementById('HIDEAWAY3C').hidden = false;
			document.getElementById('HIDEAWAY3D').hidden = false;
			break;
		case 'input_other':
			document.getElementById('HIDEAWAY4A').hidden = false;
			break;
	}
}

/** Control flow for residential type */
function swp_type(id) {
	/** Reset Borders */
	document.getElementById('inputnobedrooms').style.borderColor = "#ced4da";
	document.getElementById('inputmultiunits').style.borderColor = "#ced4da";
	document.getElementById('inputmultibedrooms').style.borderColor = "#ced4da";
	document.getElementById('input_other_ans').style.borderColor = "#ced4da";
	document.getElementById('select_additional_information').style.color = "#ced4da";

	/** Swap based on selected check box */
	switch (id) {
		case 'input_signlefamres':
			document.getElementById('input_signlefamres').checked = true;
			document.getElementById('inputmh_singlefamily').checked = false;
			document.getElementById('input_multifamily').checked = false;
			document.getElementById('input_other').checked = false;
			document.getElementById('input_gardet').checked = false;
			document.getElementById('inputmh_accessory').checked = false;
			document.getElementById('inputmh_addition').checked = false;
			document.getElementById('inputmh_addition').checked = false;
			document.getElementById('inputmh_accessory').checked = false;
			document.getElementById('inputmultiunits').value = null;
			document.getElementById('inputmultibedrooms').value = null;
			document.getElementById('input_other_ans').value = null;
			document.getElementById('input_other_ans').style.borderColor = "#ced4da";
			break;
		case 'inputmh_singlefamily':
			document.getElementById('input_signlefamres').checked = false;
			document.getElementById('inputmh_singlefamily').checked = true;
			document.getElementById('input_multifamily').checked = false;
			document.getElementById('input_other').checked = false;
			document.getElementById('input_gardet').checked = false;
			document.getElementById('inputmh_accessory').checked = false;
			document.getElementById('inputmh_addition').checked = false;
			document.getElementById('inputmh_addition').checked = false;
			document.getElementById('inputmh_accessory').checked = false;
			document.getElementById('inputnobedrooms').value = null;
			document.getElementById('inputmultiunits').value = null;
			document.getElementById('inputmultibedrooms').value = null;
			document.getElementById('input_other_ans').value = null;
			document.getElementById('input_other_ans').style.borderColor = "#ced4da";
			break;
		case 'input_multifamily':
			document.getElementById('input_signlefamres').checked = false;
			document.getElementById('inputmh_singlefamily').checked = false;
			document.getElementById('input_multifamily').checked = true;
			document.getElementById('input_other').checked = false;
			document.getElementById('input_gardet').checked = false;
			document.getElementById('inputmh_accessory').checked = false;
			document.getElementById('inputmh_addition').checked = false;
			document.getElementById('inputmh_addition').checked = false;
			document.getElementById('inputmh_accessory').checked = false;
			document.getElementById('inputnobedrooms').value = null;
			document.getElementById('inputmultiunits').value = null;
			document.getElementById('inputmultibedrooms').value = null;
			document.getElementById('input_other_ans').value = null;
			document.getElementById('input_other_ans').style.borderColor = "#ced4da";
			break;
		case 'input_gardet':
			document.getElementById('input_signlefamres').checked = false;
			document.getElementById('inputmh_singlefamily').checked = false;
			document.getElementById('input_multifamily').checked = false;
			document.getElementById('input_other').checked = false;
			document.getElementById('input_gardet').checked = true;
			document.getElementById('inputmh_accessory').checked = false;
			document.getElementById('inputmh_addition').checked = false;
			document.getElementById('inputmh_addition').checked = false;
			document.getElementById('inputmh_accessory').checked = false;
			document.getElementById('inputnobedrooms').value = null;
			document.getElementById('inputmultiunits').value = null;
			document.getElementById('inputmultibedrooms').value = null;
			document.getElementById('input_other_ans').value = null;
			document.getElementById('input_other_ans').style.borderColor = "#ced4da";
			break;
		case 'input_other':
			document.getElementById('input_signlefamres').checked = false;
			document.getElementById('inputmh_singlefamily').checked = false;
			document.getElementById('input_multifamily').checked = false;
			document.getElementById('input_gardet').checked = false;
			document.getElementById('input_other').checked = true;
			document.getElementById('inputmh_accessory').checked = false;
			document.getElementById('inputmh_addition').checked = false;
			document.getElementById('inputmh_addition').checked = false;
			document.getElementById('inputmh_accessory').checked = false;
			document.getElementById('inputnobedrooms').value = null;
			document.getElementById('inputmultiunits').value = null;
			document.getElementById('inputmultibedrooms').value = null;
			break;
	}
	hideaway(id);
}

/** Control flow non residential type */
function swp_type_nonres(id) {
	switch (id) {
		case 'input_non_agricultural':
			document.getElementById('input_non_agricultural').checked = true;
			document.getElementById('input_non_industrial').checked = false;
			document.getElementById('input_non_business').checked = false;
			document.getElementById('input_non_campground').checked = false;
			document.getElementById('input_non_other').checked = false;
			document.getElementById('input_non_other_ans').value = null;
			document.getElementById('input_non_other_ans').style.borderColor = "#ced4da";
			break;
		case 'input_non_industrial':
			document.getElementById('input_non_agricultural').checked = false;
			document.getElementById('input_non_industrial').checked = true;
			document.getElementById('input_non_business').checked = false;
			document.getElementById('input_non_campground').checked = false;
			document.getElementById('input_non_other').checked = false;
			document.getElementById('input_non_other_ans').value = null;
			document.getElementById('input_non_other_ans').style.borderColor = "#ced4da";
			break;
		case 'input_non_business':
			document.getElementById('input_non_agricultural').checked = false;
			document.getElementById('input_non_industrial').checked = false;
			document.getElementById('input_non_business').checked = true;
			document.getElementById('input_non_campground').checked = false;
			document.getElementById('input_non_other').checked = false;
			document.getElementById('input_non_other_ans').value = null;
			document.getElementById('input_non_other_ans').style.borderColor = "#ced4da";
			break;
		case 'input_non_campground':
			document.getElementById('input_non_agricultural').checked = false;
			document.getElementById('input_non_industrial').checked = false;
			document.getElementById('input_non_business').checked = false;
			document.getElementById('input_non_campground').checked = true;
			document.getElementById('input_non_other').checked = false;
			document.getElementById('input_non_other_ans').value = null;
			document.getElementById('input_non_other_ans').style.borderColor = "#ced4da";
			break;
		case 'input_non_other':
			document.getElementById('input_non_agricultural').checked = false;
			document.getElementById('input_non_industrial').checked = false;
			document.getElementById('input_non_business').checked = false;
			document.getElementById('input_non_campground').checked = false;
			document.getElementById('input_non_other').checked = true;
			break;
	}
	hideaway_NONRES(id);
}

/** Control flow non residential type */
function swp_type_nonstruct(id) {
	switch (id) {
		case 'input_nonstruc_fill':
			document.getElementById('input_nonstruc_fill').checked = true;
			document.getElementById('input_nonstruc_dist').checked = false;
			document.getElementById('input_nonstruc_remov').checked = false;
			document.getElementById('input_nonstruc_othernon').checked = false;
			document.getElementById('input_nonstruc_othernon_ans').value = null;
			document.getElementById('input_nonstruc_othernon_ans').style.borderColor = "#ced4da";
			break;
		case 'input_nonstruc_dist':
			document.getElementById('input_nonstruc_fill').checked = false;
			document.getElementById('input_nonstruc_dist').checked = true;
			document.getElementById('input_nonstruc_remov').checked = false;
			document.getElementById('input_nonstruc_othernon').checked = false;
			document.getElementById('input_nonstruc_othernon_ans').value = null;
			document.getElementById('input_nonstruc_othernon_ans').style.borderColor = "#ced4da";
			break;
		case 'input_nonstruc_remov':
			document.getElementById('input_nonstruc_fill').checked = false;
			document.getElementById('input_nonstruc_dist').checked = false;
			document.getElementById('input_nonstruc_remov').checked = true;
			document.getElementById('input_nonstruc_othernon').checked = false;
			document.getElementById('input_nonstruc_othernon_ans').value = null;
			document.getElementById('input_nonstruc_othernon_ans').style.borderColor = "#ced4da";
			break;
		case 'input_nonstruc_othernon':
			document.getElementById('input_nonstruc_fill').checked = false;
			document.getElementById('input_nonstruc_dist').checked = false;
			document.getElementById('input_nonstruc_remov').checked = false;
			document.getElementById('input_nonstruc_othernon').checked = true;
			break;
	}
	hideaway_NONSTRUCT(id);
}

/** Clear the owners on parcel number change */
var owner_count = 0;
function clear_owners() {
	var add = '';
	for (var i = 0; i < owner_count; i++) {
		if (i > 0) {
			add = i;
		} else {
			add = '';
		}
		document.getElementById('fullname' + add).value = '';
		document.getElementById('streetaddress' + add).value = '';
		document.getElementById('city' + add).value = '';
		document.getElementById('state' + add).value = '';
		document.getElementById('zip' + add).value = '';
	}
}

/** Show current land owners for parcel number */
function get_land_owners(parcel) {
	var add = '';
	var postUrl = url + 'zoning/validate_parcel_owners';
	var postData = {
		parcel: parcel
	};
	$.ajax({
		url: postUrl,
		type: 'POST',
		data: postData,
		dataType: 'json',
		error: function(xhr, thrownError) {
			alert(xhr.status);
			alert(thrownError);
		},
		success: function(response) {
			if (response != 0) {
				for (var i = 0; i < response.length; i++) {
					if (i > 0) {
						add = i;
					} else {
						add = '';
					}
					document.getElementById('fullname' + add).value = response[i].OWNERNAME;
					document.getElementById('streetaddress' + add).value = response[i].ADDRESS_2;
					document.getElementById('city' + add).value = response[i].CITY;
					document.getElementById('state' + add).value = response[i].STATE;
					document.getElementById('zip' + add).value = response[i].ZIP5;
				}
				owner_count = response.length;
			}
		}
	});
}

/** Upload size */
/** 1MB =  1,048,576 */
if ($('#plot_plan').length > 0) {
	var uploadField = document.getElementById("plot_plan");
	uploadField.onchange = function() {
		if (this.files[0].size !== 'undefined') {
			if (this.files[0].size > 10485760) {
				Swal.fire({
					title: "OPE!",
					text: "File size is too big! We accept file size less than or equal to 10MB.",
					icon: "warning"
				});
				this.value = "";
			};
		}
	};
}

/** focus when selecting text */
$('#text').on('click', function() {
	$('#text_toolbox').focus();
});

/** DRAWING PAD JAVASCRIPT ******************************************************************************/
/** Drawpad show */
function drawpad() {
	document.getElementById('drawpad_fieldset').hidden = document.getElementById('drawpad_fieldset').hidden == true ? false : true;
}

var CURR_TEXT = '';
function set_text(text_val) {
	//CURR TEXT TO BE DRAWN
	CURR_TEXT = text_val;
}

if ($('.drawpad_container').length > 0) {
	const canvas = document.querySelector("canvas"),
		toolBtns = document.querySelectorAll(".tool"),
		fillColor = document.querySelector("#fill-color"),
		sizeSlider = document.querySelector("#size-slider"),
		colorBtns = document.querySelectorAll(".colors .option"),
		colorPicker = document.querySelector("#color-picker"),
		clearCanvas = document.querySelector(".clear-canvas"),
		saveImg = document.querySelector(".save-img"),
		ctx = canvas.getContext("2d");

	// global variables with default value
	let prevMouseX, prevMouseY, snapshot,
		isDrawing = false,
		selectedTool = "brush",
		brushWidth = 5,
		selectedColor = "#000";

	const setCanvasBackground = () => {
		// setting whole canvas background to white, so the downloaded img background will be white
		ctx.fillStyle = "#fff";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = selectedColor; // setting fillstyle back to the selectedColor, it'll be the brush color
	}

	window.addEventListener("load", () => {
		// setting canvas width/height.. offsetwidth/height returns viewable width/height of an element
		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;
		setCanvasBackground();
	});

	const drawRect = (e) => {
		// if fillColor isn't checked draw a rect with border else draw rect with background
		if (!fillColor.checked) {
			// creating circle according to the mouse pointer
			return ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
		}
		ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
	}

	const drawCircle = (e) => {
		ctx.beginPath(); // creating new path to draw circle
		// getting radius for circle according to the mouse pointer
		let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2));
		ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI); // creating circle according to the mouse pointer
		fillColor.checked ? ctx.fill() : ctx.stroke(); // if fillColor is checked fill circle else draw border circle
	}

	const drawTriangle = (e) => {
		ctx.beginPath(); // creating new path to draw circle
		ctx.moveTo(prevMouseX, prevMouseY); // moving triangle to the mouse pointer
		ctx.lineTo(e.offsetX, e.offsetY); // creating first line according to the mouse pointer
		ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY); // creating bottom line of triangle
		ctx.closePath(); // closing path of a triangle so the third line draw automatically
		fillColor.checked ? ctx.fill() : ctx.stroke(); // if fillColor is checked fill triangle else draw border
	}

	const drawText = (e) => {
		prevMouseX = e.offsetX; // passing current mouseX position as prevMouseX value
		prevMouseY = e.offsetY; // passing current mouseY position as prevMouseY value
		ctx.lineWidth = brushWidth;
		ctx.font = "40px Times";
		ctx.strokeText(CURR_TEXT, prevMouseX, prevMouseY);
	}

	const drawLine = (e) => {
		ctx.beginPath();
		ctx.strokeStyle = selectedColor;
		ctx.lineWidth = brushWidth;
		ctx.moveTo(prevMouseX, prevMouseY);
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
	}

	const startDraw = (e) => {
		isDrawing = true;
		prevMouseX = e.offsetX; // passing current mouseX position as prevMouseX value
		prevMouseY = e.offsetY; // passing current mouseY position as prevMouseY value
		ctx.beginPath(); // creating new path to draw
		ctx.lineWidth = brushWidth; // passing brushSize as line width
		ctx.strokeStyle = selectedColor; // passing selectedColor as stroke style
		ctx.fillStyle = selectedColor; // passing selectedColor as fill style
		// copying canvas data & passing as snapshot value.. this avoids dragging the image
		snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
	}

	const drawing = (e) => {
		if (!isDrawing) return; // if isDrawing is false return from here
		ctx.putImageData(snapshot, 0, 0); // adding copied canvas data on to this canvas
		if (selectedTool === "brush" || selectedTool === "eraser") {
			// if selected tool is eraser then set strokeStyle to white 
			// to paint white color on to the existing canvas content else set the stroke color to selected color
			ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;
			ctx.lineTo(e.offsetX, e.offsetY); // creating line according to the mouse pointer
			ctx.stroke(); // drawing/filling line with color
		} else if (selectedTool === "rectangle") {
			drawRect(e);
		} else if (selectedTool === "circle") {
			drawCircle(e);
		} else if (selectedTool === "line") {
			drawLine(e);
		} else if (selectedTool === "text_ans") {
			var temp_brush = brushWidth;
			brushWidth = 5;
			drawText(e);
			brushWidth = temp_brush;
		} else {
			drawTriangle(e);
		}
	}

	toolBtns.forEach(btn => {
		btn.addEventListener("click", () => { // adding click event to all tool option
			// removing active class from the previous option and adding on current clicked option
			document.querySelector(".options .active").classList.remove("active");
			btn.classList.add("active");
			selectedTool = btn.id;
		});
	});

	sizeSlider.addEventListener("change", () => brushWidth = sizeSlider.value); // passing slider value as brushSize

	colorBtns.forEach(btn => {
		btn.addEventListener("click", () => { // adding click event to all color button
			// removing selected class from the previous option and adding on current clicked option
			document.querySelector(".options .selected").classList.remove("selected");
			btn.classList.add("selected");
			// passing selected btn background color as selectedColor value
			selectedColor = window.getComputedStyle(btn).getPropertyValue("background-color");
		});
	});

	colorPicker.addEventListener("change", () => {
		// passing picked color value from color picker to last color btn background
		colorPicker.parentElement.style.background = colorPicker.value;
		colorPicker.parentElement.click();
	});

	clearCanvas.addEventListener("click", () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing whole canvas
		setCanvasBackground();
	});

	saveImg.addEventListener("click", () => {
		//saves as pdf, link to jsPDF script in footer
		var doc = new jsPDF('p', 'mm', 'Legal');
		doc.addImage(canvas, 10, 10);
		var dateObj = new Date();
		var month = dateObj.getUTCMonth() + 1; //months from 1-12
		var day = dateObj.getUTCDate();
		var year = dateObj.getUTCFullYear();
		var hour = dateObj.getHours(); //hours from 0 - 23
		var minutes = dateObj.getMinutes();
		var seconds = dateObj.getSeconds();
		var DATE = year + "." + month + "." + day + "-" + hour + "." + minutes + "." + seconds;
		doc.save('PLOT_PLAN_' + DATE + '.pdf');
	});

	canvas.addEventListener("mousedown", startDraw);
	canvas.addEventListener("mousemove", drawing);
	canvas.addEventListener("mouseup", () => isDrawing = false);
}

/** PERMIT FEES **********************************************************************************/
var one = [
	["Base Fee", 50, false]
];

var two = [
	["Single Family Home", 600, false],
	["Duplex & Multi-Family", 400, true],
	["Addition (HABITABLE) < 500 sq. ft.", 150, false],
	["Addition (HABITABLE) >= 500 sq. ft.", 200, false],
	["Addition (NON-HABITABLE) < 500 sq. ft.", 50, false],
	["Addition (NON-HABITABLE) >= 500 sq. ft.", 100, false],
	["Accessory Structures (ENCLOSED W/ ROOF) <= 200 sq. ft.", 30, false],
	["Accessory Structures (ENCLOSED W/ ROOF) < 500 sq. ft.", 50, false],
	["Accessory Structures (ENCLOSED W/ ROOF) >= 500 sq. ft.", 100, false],
	["Accessory Structures (NOT ENCLOSED) < 500 sq. ft.", 30, false],
	["Accessory Structures (NOT ENCLOSED) >= 500 sq. ft", 100, false],
	["Non-Structural (FLOODPLAIN FILL, PONDS, ETC.) < 250 sq. ft.", 50, false],
	["Non-Structural (FLOODPLAIN FILL, PONDS, ETC.) >= 250 sq. ft.", 100, false],
	["Viewing/Access Corridor Establishment", 100, false],
	["Navigability Determination", 100, false],
	["Waterfront Property Review", 50, false],
	["Mitigation/Impervious Surface Plan", 100, false],
	["Tree Removal", 30, false]
];

var three = [
	["+$150 TO NON-RESIDENTIAL BUILD STRUCTURE FEES.", 150, false]
];

var four = [
	["+$50 TO RESIDENTIAL BUILD STRUCTURE FEES.", 50, false]
];

var five = [
	["500 - 999 sq. ft.", 50, false],
	["1000 - 1499 sq. ft.", 80, false],
	["1500 - 1999 sq. ft.", 100, false],
	["2000 - 4999 sq. ft.", 150, false],
	["5000+ sq. ft.", 200, false]
];

var six = [
	["Principal Structure", 500, false],
	["Addition < 500 sq. ft.", 150, false],
	["Addition >= 500 sq. ft.", 300, false],
	["Accessory Structures >= 1,000", 150, false],
	["Accessory Structures < 1,000", 100, false],
	["Outside Storage in I Zone", 50, false]
];

var seven = [
	["Base Fee", 30, false]
];

var eight = [
	["Base Fee", 50, false]
];

var nine = [
	["Base Fee", 50, false]
];

var ten = [
	["Base Fee", 100, false]
];

var eleven = [
	["Principal", 300, false],
	["Additions", 150, false],
	["Accessory Structures >= 1,000 sq. ft", 100, false],
	["Accessory Structures < 1,000 sq. ft", 50, false]
];

var twelve = [
	["$25 OR $0.50 PER SQ. FT., WHICHEVER IS GREATER.", 25, true]
];

var thirteen = [
	["Preliminary Plat", 350, true],
	["Final Subdivision Plat", 200, false],
	["Condominium Plat", 200, true]
];

var fourteen = [
	["Certified Survey - Preliminary", 50, false],
	["Certified Survey - Final", 50, false]
];

var fifteen = [
	["Fill", 50, false],
	["Accessory", 50, false]
];

var sixteen = [
	["New and Class 1 Collocation", 3000, false],
	["Class 2 Collocation", 500, false]
];

/** Show the fees png for the user to see calculated fees */
function show_fees() {
	if (document.getElementById('permit_fees').hidden === false) {
		document.getElementById('permit_fees').hidden = true;
	} else {
		document.getElementById('permit_fees').hidden = false;
	}
}

/** Do math */
var CURRENT_SECTION = 0;
var curr_plat = 0;
function do_math(new_val) {
	var total_value = 0;
	switch (CURRENT_SECTION) {
		case '2':
			total_value = 400 * parseInt(new_val);
			document.getElementById('fee_answer2').value = total_value;
			break;
		case '12':
			total_value = .5 * parseFloat(new_val);
			document.getElementById('fee_answer2').value = total_value;
			break;
		case '13':
			total_value = curr_plat + (parseInt(new_val) * 10);
			document.getElementById('fee_answer2').value = total_value;
			break;
	}
}

/** Second input for calculating fee */
function add_addition(section) {
	let new_div = document.createElement('div');
	new_div.id = 'calculator_addition';
	var multiply = document.createElement('p');
	multiply.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-xmark fa-lg"></i> ';
	var note = ' UNIT COUNT';
	switch (section) {
		case '12':
			multiply.innerHTML = 'OR $0.50&nbsp;&nbsp;<i class="fa-solid fa-xmark fa-lg"></i> ';
			note = ' SQ. FT. COUNT';
			break;
		case '13':
			multiply.innerHTML = '<i class="fa-solid fa-plus fa-lg"></i>&nbsp;&nbsp;$10&nbsp;&nbsp;<i class="fa-solid fa-xmark fa-lg"></i>&nbsp;&nbsp;';
			note = ' LOT COUNT';
			break;
	}

	var new_input = document.createElement('input');
	var addition_label = document.createTextNode(note);
	new_input.type = 'number';
	new_input.min = 1;
	new_input.id = 'additional_multiplier';
	new_input.setAttribute('onChange', 'do_math(this.value);');
	CURRENT_SECTION = section;
	new_input.style.width = '100px';
	new_input.style.height = '22px';
	new_input.style.borderRadius = '5px';
	multiply.append(new_input);
	multiply.append(addition_label);
	new_div.appendChild(multiply);

	var ajoin = document.createElement('p');
	ajoin.innerHTML = '<i class="fa-solid fa-equals fa-lg text-dark"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-dollar-sign fa-lg"></i>&nbsp;';
	var additional_answer_input = document.createElement('input');
	additional_answer_input.type = 'number';
	additional_answer_input.id = 'fee_answer2';
	additional_answer_input.style.width = '100px';
	additional_answer_input.style.height = '22px';
	additional_answer_input.style.borderRadius = '5px';
	additional_answer_input.readOnly = true;
	ajoin.append(additional_answer_input);
	new_div.appendChild(ajoin);

	let div = document.getElementById('calculator');
	div.append(new_div);
}

/** Get answer for fees or additional inputs needed */
$('#fee_subsection').on('change', function() {
	if ($('#calculator_addition').length > 0) {
		$('#calculator_addition').remove();
	}
	var location = document.getElementById('fee_subsection').value;
	var loc_arr = location.split("_");
	var section = loc_arr[0];
	var subsection = loc_arr[1];
	var addition = loc_arr[2];

	var option_arr;
	switch (section) {
		case '1':
			option_arr = one;
			break;
		case '2':
			option_arr = two;
			break;
		case '3':
			option_arr = three;
			break;
		case '4':
			option_arr = four;
			break;
		case '5':
			option_arr = five;
			break;
		case '6':
			option_arr = six;
			break;
		case '7':
			option_arr = seven;
			break;
		case '8':
			option_arr = eight;
			break;
		case '9':
			option_arr = nine;
			break;
		case '10':
			option_arr = ten;
			break;
		case '11':
			option_arr = eleven;
			break;
		case '12':
			option_arr = twelve;
			break;
		case '13':
			option_arr = thirteen;
			break;
		case '14':
			option_arr = fourteen;
			break;
		case '15':
			option_arr = fifteen;
			break;
		case '16':
			option_arr = sixteen;
			break;
	}

	if (addition == 'false') {
		$('#fee_answer').val(option_arr[subsection][1]);
	} else {
		$('#fee_answer').val(option_arr[subsection][1]);
		curr_plat = option_arr[subsection][1];
		add_addition(section);
	}
});

/** Get selections for second select for fees */
$('#fee_section').on('change', function() {
	if ($('#calculator_addition').length > 0) {
		$('#calculator_addition').remove();
	}

	var fee_section = document.getElementById('fee_section').value;
	var curr_count = document.getElementById('fee_subsection_count').value;
	for (var i = 0; i < curr_count; i++) {
		document.getElementById('fee_subsection_option' + i).remove();
	}

	var option_arr;
	switch (fee_section) {
		case '1':
			option_arr = one;
			break;
		case '2':
			option_arr = two;
			break;
		case '3':
			option_arr = three;
			break;
		case '4':
			option_arr = four;
			break;
		case '5':
			option_arr = five;
			break;
		case '6':
			option_arr = six;
			break;
		case '7':
			option_arr = seven;
			break;
		case '8':
			option_arr = eight;
			break;
		case '9':
			option_arr = nine;
			break;
		case '10':
			option_arr = ten;
			break;
		case '11':
			option_arr = eleven;
			break;
		case '12':
			option_arr = twelve;
			break;
		case '13':
			option_arr = thirteen;
			break;
		case '14':
			option_arr = fourteen;
			break;
		case '15':
			option_arr = fifteen;
			break;
		case '16':
			option_arr = sixteen;
			break;
	}

	var select = document.getElementById('fee_subsection');
	for (var i = 0; i < option_arr.length; i++) {
		var option = document.createElement('option');
		option.text = option_arr[i][0];
		option.value = fee_section + "_" + i + "_" + option_arr[i][2];
		option.id = 'fee_subsection_option' + i;
		select.appendChild(option);
	}
	var option = document.createElement('option');
	option.text = 'SELECT';
	option.value = '';
	option.id = 'fee_subsection_option' + option_arr.length;
	option.selected = true;
	option.readOnly = false;
	option.hidden = true;
	select.appendChild(option);
	$('#fee_subsection_count').val(option_arr.length + 1);
	$('#fee_answer').val('');
});
