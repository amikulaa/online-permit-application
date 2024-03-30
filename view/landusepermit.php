<div class="container-fluid">
<div class='BACK_NEXT'><?php require APP . 'view/zoning/directions.php'; ?></div>
<form id='permit_container' method="POST" action="<?php echo URL;?>zoning/successful_submission" enctype='multipart/form-data'>
	<fieldset class="scheduler-border border p-2">
		<div class="row">
    		<div class="col-md-6">
    			<div class="form-check-inline">
					<h6><b>ZONING AND LAND USE PERMIT APPLICATION</b></h6>
    			</div>
    		</div>
    	</div>
    	<div class="row">
    		<div class="col-md-6">
    			<div class="form-check-inline">
					<h5>&emsp;<b><i class="fa-solid fa-building-columns"></i> 311 S. Center Ave., ROOM C1040, JEFFERSON, WI 53549 - 1701</b></h5>
				</div>
    		</div>
    	</div>
    	<div class="row">
    		<div class="col-md-6">
    			<div class="form-check-inline">
					<h5>&emsp;<b><i class="fa-solid fa-phone"></i> PHONE NUMBER: (920) - 674 - 7130</b></h5>
    			</div>
    		</div>
    	</div>
    	<div class="row">
    		<div class="col-md-6">
    			<div class="form-check-inline">
					<h5>&emsp;<b><i class="fa-solid fa-fax"></i> FAX: (920) - 674 - 7525</b></h5>
    			</div>
    		</div>
    	</div>
    	<div class="row">
    		<div class="col-md-6">
    			<div class="form-check-inline">
					<h5>&emsp;<b><i class="fa-solid fa-envelope"></i> EMAIL: zoning@jeffersoncountywi.gov</b></h5>
    			</div>
    		</div>
    	</div>
	</fieldset>
	<fieldset class="scheduler-border border p-2">
	<legend class="scheduler-border w-auto">Parcel</legend>
		<div class="form-group row row-bordered">
			<label id='parcel_label' class="col-md-3 col-form-label"><b>
				<i class="fa-solid fa-flag-checkered" title='VALID PARCEL NUMBER REQUIRED TO CONTINUE'></i>&nbsp;PARCEL NUMBER:</b>
			</label>
			<div class="col-md-3">
				<input id="parcel" name="parcel" type="text" class="form-control" value="" required>
					<a href="https://apps.jeffersoncountywi.gov/jc/JCLRS" target="_blank" title='FIND MY PARCEL'>
						<i class="fa-solid fa-circle-info"></i>
					</a>
				<span><small id="munHelpInline" class="text-muted">000-0000-0000-000</small></span>
			</div>
			<div class="col-md-6">
				<input id='error_msg' class="text-danger" disabled>
			</div>
		</div>
    	<input id="parcel" type="hidden" name="sform" value="parcel">
    	<div class="legal"></div>
    	<fieldset class="scheduler-border border" id="navigation_fieldset" hidden>
        	<div class="form-group row row-bordered" id="navigation_container">
        		<div class="col-sm-2 offset-sm-1 CENTER_TXT">
                    <a id='section_one_show' title='SECTION I. PERSONS'>SECTION I</a>
    			</div>
        		<div class="col-sm-2 CENTER_TXT">
                    <a id='section_two_show' title='SECTION II. PROPERTY DESCRIPTION'>SECTION II</a>
    			</div>
        		<div class="col-sm-2 CENTER_TXT">
                    <a id='section_three_show' title='SECTION III. PROPERTY SCOPE'>SECTION III</a>
    			</div>
        		<div class="col-sm-2 CENTER_TXT">
                    <a id='section_four_show' title='SECTION IV. PLOT PLAN'>SECTION IV</a>
    			</div>
        		<div class="col-sm-2 CENTER_TXT">
                    <a id='section_five_show' title='SECTION V. SUBMISSION'>SECTION V</a>
    			</div>
    		</div>
		</fieldset>
	</fieldset>
    <fieldset id='SECTION_ONE' class="scheduler-border border mt-1" hidden>
    <legend class="scheduler-border w-auto">I. Persons
    </legend>
    <br/>
	<div class="row">
    	<div class="col-md-12">
        <fieldset class="scheduler-border border mt-1">
            <legend class="scheduler-border w-auto">Land Owners</legend>
            <div class="row">
                <div class="col-md-3 border">
                    <span class="font-weight-bold">Full Name<span class='red'>*</span></span>
                </div>
                <div class="col-md-3 border">
                    <span class="font-weight-bold">Mailing Street Address<span class='red'>*</span></span>
                </div>
                <div class="col-md-2 border">
                    <span class="font-weight-bold">City<span class='red'>*</span></span>
                </div>
                <div class="col-md-1 border">
                    <span class="font-weight-bold">State<span class='red'>*</span></span>
                </div>
                <div class="col-md-1 border">
                    <span class="font-weight-bold">Zip<span class='red'>*</span></span>
                </div>
                <div class="col-md-2 border">
                    <span class="font-weight-bold">Phone No.<span class='red'>*</span></span>
                </div>
            </div>
            	<div class="row" id='owner1'>
                    <div class="col-md-3 border">
                        <input id="fullname" name="fullname" type="text" class="form-control input-sm text-validate" maxlength="60" value="" placeholder="AS IT APPEARS ON YOUR DEED">
                    </div>
                    <div class="col-md-3 border">
                        <input id="streetaddress" name="streetaddress" type="text" class="form-control input-sm text-validate" maxlength="60" value="">
                    </div>
                    <div class="col-md-2 border">
                        <input id="city" name="city" type="text" class="form-control text-validate" value="">
                    </div>
                    <div class="col-md-1 border">
                        <select id="state" name="state" class="form-control input-sm">
                       		<option value=""></option>
                       		<option value="AL">AL</option>
                        	<option value="AK">AK</option>
                        	<option value="AR">AR</option>
                        	<option value="AZ">AZ</option>
                        	<option value="CA">CA</option>
                        	<option value="CO">CO</option>
                        	<option value="CT">CT</option>
                        	<option value="DC">DC</option>
                        	<option value="DE">DE</option>
                        	<option value="FL">FL</option>
                        	<option value="GA">GA</option>
                        	<option value="HI">HI</option>
                        	<option value="IA">IA</option>
                        	<option value="ID">ID</option>
                        	<option value="IL">IL</option>
                        	<option value="IN">IN</option>
                        	<option value="KS">KS</option>
                        	<option value="KY">KY</option>
                        	<option value="LA">LA</option>
                        	<option value="MA">MA</option>
                        	<option value="MD">MD</option>
                        	<option value="ME">ME</option>
                        	<option value="MI">MI</option>
                        	<option value="MN">MN</option>
                        	<option value="MO">MO</option>
                        	<option value="MS">MS</option>
                        	<option value="MT">MT</option>
                        	<option value="NC">NC</option>
                        	<option value="NE">NE</option>
                        	<option value="NH">NH</option>
                        	<option value="NJ">NJ</option>
                        	<option value="NM">NM</option>
                        	<option value="NV">NV</option>
                        	<option value="NY">NY</option>
                        	<option value="ND">ND</option>
                        	<option value="OH">OH</option>
                        	<option value="OK">OK</option>
                        	<option value="OR">OR</option>
                        	<option value="PA">PA</option>
                        	<option value="RI">RI</option>
                        	<option value="SC">SC</option>
                        	<option value="SD">SD</option>
                        	<option value="TN">TN</option>
                        	<option value="TX">TX</option>
                        	<option value="UT">UT</option>
                        	<option value="VT">VT</option>
                        	<option value="VA">VA</option>
                        	<option value="WA">WA</option>
                        	<option value="WI">WI</option>
                        	<option value="WV">WV</option>
                        	<option value="WY">WY</option>
                        </select>
                    </div>
                    <div class="col-md-1 border">
                        <input id="zip" name="zip" type="text" class="form-control input-sm" value="">
                    </div>
                    <div class="col-md-2 border">
                        <input id="phoneno" name="phoneno" type="text" class="form-control input-sm" value=''>
                    </div>
            	</div>	
            	<div class="row" id='owner2'>
                    <div class="col-md-3 border">
                        <input id="fullname1" name="fullname1" type="text" class="form-control input-sm text-validate" maxlength="60" value="" placeholder="AS IT APPEARS ON YOUR DEED">
                    </div>
                    <div class="col-md-3 border">
                        <input id="streetaddress1" name="streetaddress1" type="text" class="form-control input-sm text-validate" maxlength="60" value="">
                    </div>
                    <div class="col-md-2 border">
                        <input id="city1" name="city1" type="text" class="form-control text-validate" value="">
                    </div>
                    <div class="col-md-1 border">
                        <select id="state1" name="state1" class="form-control input-sm">
                       		<option value=""></option>
                       		<option value="AL">AL</option>
                        	<option value="AK">AK</option>
                        	<option value="AR">AR</option>
                        	<option value="AZ">AZ</option>
                        	<option value="CA">CA</option>
                        	<option value="CO">CO</option>
                        	<option value="CT">CT</option>
                        	<option value="DC">DC</option>
                        	<option value="DE">DE</option>
                        	<option value="FL">FL</option>
                        	<option value="GA">GA</option>
                        	<option value="HI">HI</option>
                        	<option value="IA">IA</option>
                        	<option value="ID">ID</option>
                        	<option value="IL">IL</option>
                        	<option value="IN">IN</option>
                        	<option value="KS">KS</option>
                        	<option value="KY">KY</option>
                        	<option value="LA">LA</option>
                        	<option value="MA">MA</option>
                        	<option value="MD">MD</option>
                        	<option value="ME">ME</option>
                        	<option value="MI">MI</option>
                        	<option value="MN">MN</option>
                        	<option value="MO">MO</option>
                        	<option value="MS">MS</option>
                        	<option value="MT">MT</option>
                        	<option value="NC">NC</option>
                        	<option value="NE">NE</option>
                        	<option value="NH">NH</option>
                        	<option value="NJ">NJ</option>
                        	<option value="NM">NM</option>
                        	<option value="NV">NV</option>
                        	<option value="NY">NY</option>
                        	<option value="ND">ND</option>
                        	<option value="OH">OH</option>
                        	<option value="OK">OK</option>
                        	<option value="OR">OR</option>
                        	<option value="PA">PA</option>
                        	<option value="RI">RI</option>
                        	<option value="SC">SC</option>
                        	<option value="SD">SD</option>
                        	<option value="TN">TN</option>
                        	<option value="TX">TX</option>
                        	<option value="UT">UT</option>
                        	<option value="VT">VT</option>
                        	<option value="VA">VA</option>
                        	<option value="WA">WA</option>
                        	<option value="WI">WI</option>
                        	<option value="WV">WV</option>
                        	<option value="WY">WY</option>
                        </select>
                    </div>
                    <div class="col-md-1 border">
                        <input id="zip1" name="zip1" type="text" class="form-control input-sm" value="">
                    </div>
                    <div class="col-md-2 border">
                        <input id="phoneno1" name="phoneno1" type="text" class="form-control input-sm">
                    </div>
            	</div>
            	<div class="row">
            		<div class="col-md-1 offset-md-11 right_align">
                        &emsp;et al.
                    </div>
            	</div>
            <br/>
    	</div>
	</div>
	<div class="row">
            <div class="col-md-12">
                <fieldset class="scheduler-border border mt-1">
                    <legend class="scheduler-border w-auto">CONTRACTOR</legend>
                    <div class="row">
                        <div class="col-md-3 border">
                            <span class="font-weight-bold">Full Name</span>
                        </div>
                        <div class="col-md-3 border">
                            <span class="font-weight-bold">Mailing Street Address</span>
                        </div>
                        <div class="col-md-2 border">
                            <span class="font-weight-bold">City</span>
                        </div>
                        <div class="col-md-1 border">
                            <span class="font-weight-bold">State</span>
                        </div>
                        <div class="col-md-1 border">
                            <span class="font-weight-bold">Zip</span>
                        </div>
                        <div class="col-md-2 border">
                            <span class="font-weight-bold">Phone No.</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 border">
                            <input id="contractfullname" name="contractfullname" type="text" class="form-control text-validate" value="" maxlength="60">
                        </div>
                        <div class="col-md-3 border">
                            <input id="contractstreetaddress" name="contractstreetaddress" type="text" class="form-control text-validate" value="" maxlength="60">
                        </div>
                        <div class="col-md-2 border">
                            <input id="contractcity" name="contractcity" type="text" value="" class="form-control text-validate">
                        </div>
                        <div class="col-md-1 border">                   
                            <select id="contractstate" name="contractstate" class="form-control input-sm">
                           		<option value=""></option>
                           		<option value="AL">AL</option>
                            	<option value="AK">AK</option>
                            	<option value="AR">AR</option>
                            	<option value="AZ">AZ</option>
                            	<option value="CA">CA</option>
                            	<option value="CO">CO</option>
                            	<option value="CT">CT</option>
                            	<option value="DC">DC</option>
                            	<option value="DE">DE</option>
                            	<option value="FL">FL</option>
                            	<option value="GA">GA</option>
                            	<option value="HI">HI</option>
                            	<option value="IA">IA</option>
                            	<option value="ID">ID</option>
                            	<option value="IL">IL</option>
                            	<option value="IN">IN</option>
                            	<option value="KS">KS</option>
                            	<option value="KY">KY</option>
                            	<option value="LA">LA</option>
                            	<option value="MA">MA</option>
                            	<option value="MD">MD</option>
                            	<option value="ME">ME</option>
                            	<option value="MI">MI</option>
                            	<option value="MN">MN</option>
                            	<option value="MO">MO</option>
                            	<option value="MS">MS</option>
                            	<option value="MT">MT</option>
                            	<option value="NC">NC</option>
                            	<option value="NE">NE</option>
                            	<option value="NH">NH</option>
                            	<option value="NJ">NJ</option>
                            	<option value="NM">NM</option>
                            	<option value="NV">NV</option>
                            	<option value="NY">NY</option>
                            	<option value="ND">ND</option>
                            	<option value="OH">OH</option>
                            	<option value="OK">OK</option>
                            	<option value="OR">OR</option>
                            	<option value="PA">PA</option>
                            	<option value="RI">RI</option>
                            	<option value="SC">SC</option>
                            	<option value="SD">SD</option>
                            	<option value="TN">TN</option>
                            	<option value="TX">TX</option>
                            	<option value="UT">UT</option>
                            	<option value="VT">VT</option>
                            	<option value="VA">VA</option>
                            	<option value="WA">WA</option>
                            	<option value="WI">WI</option>
                            	<option value="WV">WV</option>
                            	<option value="WY">WY</option>
                        	</select>
                        </div>
                        <div class="col-md-1 border">
                            <input id="contractzip" name="contractzip" type="text" class="form-control">
                        </div>
                        <div class="col-md-2 border">
                            <input id="contractphoneno" name="contractphoneno" id="contractphoneno" type="text" class="form-control">
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
        <div class='BACK_NEXT'><?php require APP . 'view/zoning/next.php'; ?></div>
	</fieldset>
		<div class="row">
            <div class="col-md-12">
                <fieldset id='SECTION_TWO' class="scheduler-border border mt-1" hidden>
                    <legend class="scheduler-border w-auto">II. Property Description
                    </legend>
					<div class="row">
						<div class="col-md-11">
							<p class='red'><i class="fa-solid fa-triangle-exclamation red"></i><b>&nbsp;If the zoning permit is for a structure and the parcel does not have a fire number assigned to it, a fire number will be required prior to issuance the zoning permit.</b></p>
    						<p class='red'><b>Please contact the Land Information Office to obtain a fire number at (920) - 674 - 7254</b></p>
						</div>
					</div>
                    <div class="row">
                        <div class="col-md-4 border">
                            <span id='town_span' class="font-weight-bold">TOWN<span class='red'>*</span></span>
                            <input name="desc_town_name" id="desc_town_name" type="text" class="form-control text-validate" maxlength="100">
                        </div>
                        <div class="col-md-2 border">
                            <span class="font-weight-bold">ACRES<span class='red'>*</span></span>
                            <input name="desc_acres" id="desc_acres" type="number" min="0" class="form-control" value=''>
                        </div>
                        <div class="col-md-6 border">
                            <span class="font-weight-bold">PROJECT SITE-FIRE NO. AND ROAD NAME<span class='red'>*</span></span>
                            <input name="desc_fire_num_road" id="desc_fire_num_road" type="text" class="form-control text-validate">
                        </div>
                    </div>
                    <div class="row">
    					<div class="col-md-12 border">
    						<span class="font-weight-bold">DESCRIPTION<span class='red'>*</span></span>
                           		<textarea id='desc' name='desc' rows=1 readonly></textarea>
                        </div>
                    </div>
                    <br/>
       				<div class='BACK_NEXT'><?php require APP . 'view/zoning/back_next.php'; ?></div>
                </fieldset>
            </div>
        </fieldset>
        </div>
		<div class="row">
			<div class="col-md-12">
				<fieldset id='SECTION_THREE' class="scheduler-border border mt-1" hidden>
					<legend class="scheduler-border w-auto">III. TYPE, SIZE, VALUE, AND
						USE OF PROPOSED STRUCTURE OR IMPROVEMENT
                    </legend>
                    <div id='pick_type_struc'>
                        <div class="row row-bordered mt-2 SECTION SECTION3_SECTIONHEADERS">
                           <div class="col-md-6">
                            	<label class='title_label'>TYPE&nbsp;<i class='title_label_note'>(SELECT)</i></label>
                           </div>
                        </div>
    					<div id='new_or_addition' class="row row-bordered mt-2 SECTION">
                        	<div class="col-md-2 offset-md-1">
                        		<div class="form-check-inline">
                        			<label class="form-check-label"> 
                            			<input type="checkbox"
                            				class="form-check-input inputfield residental_str_add"
                            				name="input_new" id="input_new" value="1" onclick="swp_new(this.id)">New Structure
                        			</label>
                        		</div>
                        	</div>
                        	<div class="col-md-2">
                        		<div class="form-check-inline">
                        			<label class="form-check-label"> 
                            			<input type="checkbox"
                            				class="form-check-input inputfield residental_str_add"
                            				name="input_add" id="input_add" value="1" onclick="swp_new(this.id)">Addition
                        			</label>
                        		</div>						
                        	</div>
                        	<div class="col-md-2">
                        		<div class="form-check-inline">
                        			<label class="form-check-label"> 
                            			<input type="checkbox"
                            				class="form-check-input inputfield"
                            				name="input_nonstruc_other" id="input_nonstruc_other" value="1" onclick="swp_new(this.id)">Other
                        			</label>
                        		</div>						
                        	</div>
                        </div>
                        <!-- Residental vs Non Residental Checkbox Prop -->
    					<div id='res_nonres' class='row row-bordered mt-2 SECTION' hidden>
                        	<div class="col-md-2 offset-md-1">
    							<div class="form-check-inline">
    								<label class="form-check-label"> 
    									<input type="checkbox"
        									class="form-check-input inputfield residental_type"
        									name="input_res" id="input_res" onclick="swp_res(this.id)" value="1">Residential
    								</label>
    							</div>
    						</div>
                        	<div class="col-md-2">
    							<div class="form-check-inline">
    								<label class="form-check-label"> 
    									<input type="checkbox"
        									class="form-check-input inputfield residental_type"
        									name="input_non_res" id="input_non_res" onclick="swp_res(this.id)" value="1">Non-Residential
    								</label>
    							</div>
    						</div>
                        	<div class="col-md-2">
                        		<div class="form-check-inline">
                        			<label class="form-check-label"> 
                            			<input type="checkbox"
                            				class="form-check-input inputfield"
                            				name="input_nonstruct" id="input_nonstruct" value="1" onclick="swp_res(this.id)">Non-Structural
                        			</label>
                        		</div>						
                        	</div>
    					</div>
					</div>
					<!-- RESIDENTIAL NEW OR ADD -->
					<div id="RESIDENTIAL" hidden><?php require APP . 'view/zoning/residential.php'; ?></div>
					<!-- NON RESIDENTIAL NEW OR ADD -->
					<div id="NON_RESIDENTIAL" hidden><?php require APP . 'view/zoning/nonresidential.php'; ?></div>
					<!-- NON STRUCTURAL -->
					<div id="NON_STRUCTURAL" hidden><?php require APP . 'view/zoning/nonstructural.php'; ?></div>
        		<div class='BACK_NEXT'><?php require APP . 'view/zoning/back_next.php'; ?></div>
				</fieldset>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<fieldset id='SECTION_FOUR' class="scheduler-border border mt-1" hidden>
					<legend class="scheduler-border w-auto">IV. PLOT PLAN (SKETCH) REQUIRED TO BE ATTACHED</legend>
					<div class="row">
						<div class="col-md-9">
							&emsp;<b class='red'><i class="fa-solid fa-triangle-exclamation red">&nbsp;</i>SKETCH MUST INCLUDE THE FOLLOWING:</b>
							<ol>
								<li>ALL EXISTING STRUCTURES</li>
								<li>THE LOCATION OF THE NEW STRUCTURE OR ADDITION</li>
								<li>ALL DIMENSIONS OF THE NEW STRUCTURE OR ADDITION</li>
								<li>DISTANCE OF THE NEW STRUCTURE OR ADDITION FROM THE:</li>
								<ol>
    								<li>CENTERLINE</li>
    								<li>RIGHT-OF-WAY OF THE ROAD</li>
    								<li>SIDE AND REAR LOT LINES</li>
    								<li>NAVIGABLE WATERS</li>
    								<li>SEPTIC TANK AND FIELD</li>
    								<li>WELL</li>
    								<li>DRIVEWAY ACCESS</li>
								</ol>
							</ol>
							&emsp;<b>NOTES:</b>
							<ul>
								<li>BE SURE TO INCLUDE DECKS PROPOSED FOR NEW HOMES</li>
								<li>BE SURE TO INCLUDE ATTACHED GARAGES PROPOSED FOR NEW HOMES</li>
								<li>SETBACKS ARE MEASURED TO THE CLOSEST POINT OF THE STRUCTURE INCLUDING ANY OVERHANGS</li>
							</ul>
						</div>
						<div class="col-md-3">
                        	<div class='center_txt'>
                        		<a href="<?php echo URL; ?>zoning/draw" target="_blank" id="show_drawpad" name="show_drawpad" title="CLICK TO OPEN IN NEW TAB">
                        			<i class="fa-solid fa-pencil"></i>&nbsp;USE OUR DRAWING APPLICATION
                        		</a>
                            </div>
                       </div>
					</div>
					<div class="row">
    					<div class="row">
    						<div class="col-md-11">
        						<p class="red">&emsp;<i class="fa-solid fa-triangle-exclamation red"></i> 
        							<b>FAILURE TO INCLUDE A PLOT PLAN AND ALL OF THE MENTIONED
        							ITEMS WILL DELAY ISSUANCE OF THIS PERMIT! PDF ONLY.</b></p>
    						</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-11">
							<p>&emsp;<b>(FILE SIZE MUST BE LESS THAN OR EQUAL TO 10MB, OR 10000KB)</b></p>
							<p>&emsp;<b>IF LARGER THAN 10MB, UPLOAD A PDF OF YOUR EMAIL ADDRESS INSTEAD OF PLOT PLAN, AND EMAIL YOUR PDF TO ZONING@JEFFERSONCOUNTYWI.GOV</b></p>
						</div>
					</div>
					<div class="row">
    					<div class="col-md-12">
            				<fieldset class="scheduler-border border p-2" id='plot_fieldset'>
                                <div class='center_txt'>
                                	<input id='plot_plan' name='plot_plan[]' type="file" name="upload" accept="application/pdf" multiple="multiple"/>
                                </div>
                       		</fieldset>
                       </div>
					</div>
        	<div class='BACK_NEXT'><?php require APP . 'view/zoning/back_next.php'; ?></div>
			</fieldset>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<!-- CAN ONLY REQUIRE ON SUBMISSION PAGE, JS CONTROLS REST OF REQUIRED. -->
				<fieldset id='SECTION_SIX' class="scheduler-border border mt-1" hidden>
				<legend class="scheduler-border w-auto">V. SUBMIT APPLICATION</legend>
    				<ol>
    					<li>
        					<div class="row">
            					<div class="col-md-7">
            						<b>ONCE THE PERMIT HAS BEEN REVIEWED AND APPROVED, HOW SHOULD THE PERMIT BE RETURNED TO APPLICANT:</b>
            					</div>
        					</div>
        					<div class="row">
            					<div class="col-md-8">
            						<label>
            							<input type="checkbox" id='mail_permit' name="mail_permit" value="1" onclick="validate_permit_delivery(this.id);" required>
                						MAIL PERMIT</label>&nbsp;<b>OR</b>&nbsp;
                    				<label><input type="checkbox" id='pickup_permit' name="pickup_permit" value="1" onclick="validate_permit_delivery(this.id);" required>
                    					PICKUP PERMIT</label>
                    				<input id='pickup_name' name='pickup_name' class='added_input text-validate' type="text" placeholder='PICKUP NAME' hidden>
                    				<input id='pickup_number' name='pickup_number' class='added_input' type="input" placeholder='PHONE #' hidden>
            					</div>
        					</div>
    					</li>
    					<li>
        					<div class="row">
            					<div class="col-md-6">
            						<b>FAILURE TO INCLUDE A PLOT PLAN(SKETCH) WILL DELAY ISSUANCE OF THIS PERMIT!</b>
            					</div>
        					</div>
        					<div class="row">
        						<div class="col-md-10">
            						<p class="red"><small><i class="fa-solid fa-triangle-exclamation red"></i> 
            							<b>&nbsp;CHECK WITH TOWN FOR ADMINISTRATIVE AND / OR BUILDING PERMIT REQUIREMENTS.</b></small>
            						</p>
        						</div>
        					</div>
    					</li>
    					<li>
        					<div class="row">
            					<div class="col-md-12">
            						<div>
    									<p><b>&nbsp;<i onclick="window.open(src='<?php echo URL; ?>img/FEES_2024.pdf', '_blank');" title='FEE PDF' class="fa-solid fa-file-pdf" style='cursor: pointer;'></i>PERMIT FEE MUST ACCOMPANY APPLICATION! </b><small onclick='show_fees();' id='what_my_fee' title='CLICK'>WHAT'S MY FEE?</small></p>
    									<p><small><i class="fa-solid fa-triangle-exclamation red"></i><b class="red">&nbsp;A DOUBLE PERMIT FEE WILL BE CHARGED FOR ALL AFTER-THE FACT PERMITS (MINIMUM FEE OF $100).</b></small></p>
    									<div id='permit_fees' hidden>
    										<div id='calculator' class='calculator'>
    											<label class="text-dark" title='CALCULATOR'>&nbsp;<i class="fa-solid fa-calculator fa-lg"></i>&nbsp;</label>
        										<select id='fee_section' name='fee_section' title='USE TYPE'>
                    								<option value='0' selected disabled hidden>SELECT</option>
                    								<option value='1'>STRUCTURAL ALTERATION/REPAIR OR CHANGE OF USE</option>
                    								<option value='2'>RESIDENTIAL STRUCTURES</option>
                    								<option value='3'>FLOODPLAIN</option>
                    								<option value='4'>SHORELAND</option>
                    								<option value='5'>AGRICULTURAL STRUCTURES</option>
                    								<option value='6'>BUSINESS/INDUSTRIAL</option>
                    								<option value='7'>REMOVAL OF STRUCTURE/RAZE PERMIT</option>
                    								<option value='8'>SALVAGE YARD LICENSE</option>
                    								<option value='9'>REVISION FEE/EXTENSION</option>
                    								<option value='10'>ZONING VERIFICATION LETTER</option>
                    								<option value='11'>AGRI-BUSINESS</option>
                    								<option value='12'>SIGN PERMITS</option>
                    								<option value='13'>SUBDIVISION</option>
                    								<option value='14'>CSM (CERTIFIED SURVEY MAP)</option>
                    								<option value='15'>CAMPGROUNDS</option>
                    								<option value='16'>MOBILE TOWER</option>
        										</select>
                								<select id='fee_subsection' name='fee_subsection' title='USE SUBTYPE'></select>
                								<input id='fee_subsection_count' name='fee_subsection_count' value=0 hidden>&nbsp;
                								<br/>
                								<i class="fa-solid fa-equals fa-lg text-dark"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-dollar-sign fa-lg"></i>
                								<input id='fee_answer' name='fee_answer' readonly>
    										</div>
    									</div>
    									<p><b>Please mail a check to Jefferson County Zoning:&nbsp;<small id='address_zoning'>ADDRESS</small>&nbsp;, OR use the following link to pay with card:&nbsp;
    										<small><a href="https://payments.lexisnexis.com/wi/co/jefferson/zoning" target='_blank'>PAY ONLINE</a></small>
    									</b></p>
    									<img id='address_image' src='<?php echo URL; ?>img/ADDRESS.png' alt='ADDRESS PHOTO' title='ADDRESS PHOTO' hidden/>
    									<p><b><small>NOTE: WHEN PAYING ONLINE, PLEASE INCLUDE THE FIRE NUMBER OR PROPERTY OWNER LAST NAME FOR REFERENCE NUMBER.</small></b></p>
    								</div>
            					</div>
        					</div>
    					</li>
    				</ol>
    				<br/>
					<div class="row">
            			<div class="col-md-12">
            				<fieldset id='SECTION_FIVE' class="scheduler-border border mt-1">
            					<legend class="scheduler-border w-auto">ACKNOWLEDGEMENTS</legend>
            					<div class="row">
            						<div class="col-mb-11">
            							<ol>
            								<li>YOU ARE RESPONSIBLE FOR COMPLYING WITH STATE AND FEDERAL LAWS CONCERNING 
            								CONSTRUCTION NEAR OR ON WETLANDS, LAKES, AND STREAMS. WETLANDS THAT ARE NOT 
            								ASSOCIATED WITH OPEN WATER CAN BE DIFFICULT TO IDENTIFY. FAILURE TO COMPLY 
            								MAY RESULT IN THE REMOVAL OR MODIFICATION OF CONSTRUCTION THAT VIOLATES THE 
            								LAW OR OTHER PENALTIES OR COSTS. FOR MORE INFORMATION, VISIT THE DEPARTMENT 
            								OF NATURAL RESOURCES WETLANDS IDENTIFICATION WEB PAGE OR CONTACT A DEPARTMENT 
            								OF NATURAL RESOURCES SERVICE CENTER. (Wis Stats 59.691)  
            								<a href="https://dnr.wisconsin.gov/topic/Wetlands/mapping.html" target="_blank" 
            								title='OPEN IN NEW TAB'>https://dnr.wisconsin.gov/topic/Wetlands/mapping.html</a>
            								</li>
            								<li>OWNER - CHECK FOR APPLICABLE DEED, PLAT AND TOWN
            									RESTRICTIONS AND PERMIT REQUIREMENTS.</li>
            								<li>THIS PERMIT MAY BE APPEALED FOR 30 DAYS AFTER PUBLICATION OF
            									ISSUANCE.</li>
            								<li>THE OWNER OF THIS PARCEL AND THE UNDERSIGNED AGREE TO CONFORM
            									TO THE CONDITIONS OF THIS PERMIT AND TO ALL APPLICABLE LAWS OF
            									JEFFERSON COUNTY AND ACKNOWLEDGE THAT YOU HAVE RECEIVED AND
            									READ THE ABOVE NOTICE REGARDING WETLANDS, AS WELL AS ALL
            									NOTICES AND TERMS ABOVE.</li>
            							</ol>
            						</div>
            					</div>
            					<div class="row">
            						<div class="col-md-6">
            							<div class="form-check-inline">
            								<label class="form-check-label red"> <input type="checkbox" class="form-check-input" 
            									value="1" id="accept_acknowledge" name='accept_acknowledge' required>
            									<b>By checking this box you are accepting acknowledgemnts of above.</b>&emsp;
            									<input id='accepted_date' name='accepted_date' type="date" placeholder="DATE" value="" required>
            								</label>
            							</div>
            						</div>
            					</div>
            					<br/>
                                <div class="row">
                                    <div class="col-md-4 border">
                                        <span id='town_span' class="font-weight-bold">CONTACT NAME<span class='red'>*</span></span>
                                        <input name="contact_fullname" id="contact_fullname" type="text" title='CONTACT NAME' class="form-control text-validate" required>
                                    </div>
                                    <div class="col-md-4 border">
                                        <span class="font-weight-bold">CONTACT PHONE<span class='red'>*</span></span>
                                        <input name="contact_phone" id="contact_phone" type="input" title='CONTACT PHONE' class="form-control" required>
                                    </div>
                                    <div class="col-md-4 border">
                                        <span class="font-weight-bold">CONTACT EMAIL<span class='red'>*</span></span>
                                        <input name="contact_email" id="contact_email" type="text" title='CONTACT EMAIL' class="form-control" required>
                                    </div>
                                </div>
            				</fieldset>
            			</div>
            		</div>
					<button id='submit_button' type="submit" class="btn btn-success" title='SUBMIT APPLICATION'>SUBMIT</button>
        			<br/>
        			<br/>
        			<div class='BACK_NEXT'><?php require APP . 'view/zoning/back.php'; ?></div>
				</fieldset>
			</div>
		</div>
</form>
