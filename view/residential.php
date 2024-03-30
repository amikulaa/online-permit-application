<div id="pick_one">
	<div id='PICK_ONE_RES' class="row row-bordered mt-2 SECTION SECTION3_SECTIONHEADERS">
    	<div class="col-md-12">
    		<label class='title_label'>STRUCTURE TYPE <i id='select_one_res' class='title_label_note'>(SELECT ONE)</i>&nbsp;<i id='select_additional_information' class='title_label_note'>(PROVIDE THE ADDITIONAL INFORMATION REQUIRED FOR THE SELECTED OPTION)</i></label>
    	</div>
    </div>
    <div class="row row-bordered mt-2 SECTION">
    	<div class="col-md-3 offset-md-1">
    		<div class="form-check-inline">
    			<label class="form-check-label"> 
    				<input type="checkbox" class="form-check-input inputfield checkbox_field signlefamres"
    					name="input_signlefamres" id="input_signlefamres" value="1" 
    					onclick="swp_type(this.id)"/>Single Family Residence
    			</label>
    		</div>
    	</div>  	
    	<div class="col-md-1" id="HIDEAWAY1A" hidden>
    		<div class="form-check-inline">
        		<label class="label-control">Bedrooms:</label>
    		</div>
    	</div>
        <div class="col-md-2" id="HIDEAWAY1B" hidden>
    		<div class="input-group input-group-sm">
        		<div class="input-group-prepend">
        			<span class="input-group-text">#</span>
        		</div>
        		<input onclick="swp_input_type(this.id)" type="number" class="form-control" min=0 
        			name="inputnobedrooms" id="inputnobedrooms" value=""/>
        	</div>	
        </div>
    </div>
    <div class="row mb-2 row-bordered SECTION">
    	<div class="col-md-3 offset-md-1">
    		<div class="form-check-inline">
    			<label class="form-check-label"> 
    				<input type="checkbox" class="form-check-input inputfield checkbox_field" 
    					name="inputmh_singlefamily" id="inputmh_singlefamily" value="1"
    					onclick="swp_type(this.id)"/>Mobile Home Park Single Family
    			</label>
    		</div>
    	</div>
    	<div class="col-md-2" id="HIDEAWAY2A" hidden>
    		<div class="form-check-inline">
    			<label class="form-check-label"> 
    				<input type="checkbox" class="form-check-input inputfield checkbox_field"
    					name="inputmh_addition" id="inputmh_addition" value="1" onclick="swp_mob(this.id)"/>Additon
    			</label>
    		</div>
    	</div>
    	<div class="col-md-2" id="HIDEAWAY2B" hidden>
    		<div class="form-check-inline">
    			<label class="form-check-label"> 
    				<input type="checkbox" class="form-check-input inputfield checkbox_field"
    					name="inputmh_accessory" id="inputmh_accessory" value="1" onclick="swp_mob(this.id)"/>Accessory
    			</label>
    		</div>
    	</div>
    </div>
    <div class="row mb-2 row-bordered SECTION">
    	<div class="col-md-3 offset-md-1">
    		<div class="form-check-inline">
    			<label class="form-check-label"> 
    				<input type="checkbox" class="form-check-input inputfield checkbox_field"
    					name="input_multifamily" id="input_multifamily" value="1"
    					onclick="swp_type(this.id)"/>Multi-Family Residence
    			</label>
    		</div>
    	</div>
    	<div class="col-md-1" id="HIDEAWAY3A" hidden>
    		<label class="label-control right-align">Units:</label>
    	</div>
    	<div class="col-md-2" id="HIDEAWAY3B" hidden>
    		<div class="input-group input-group-sm">
        		<div class="input-group-prepend">
        			<span class="input-group-text">#</span>
        		</div>
        		<input onclick="swp_input_type(this.id)" type="number" min=0 class="form-control" 
        			name="inputmultiunits" id="inputmultiunits" value=""/>
        	</div>
        </div>
        <div class="col-md-1" id="HIDEAWAY3C" hidden>
    		<label class="label-control right-align">Bedrooms:</label>
    	</div>
    	<div class="col-md-2" id="HIDEAWAY3D" hidden>
    		<div class="input-group input-group-sm">
        		<div class="input-group-prepend">
        			<span class="input-group-text">#</span>
        		</div>
        		<input onclick="swp_input_type(this.id)" type="number" min=0 class="form-control" 
        			name="inputmultibedrooms" id="inputmultibedrooms" value=""/>
        	</div>
        </div>
    </div>    
    <div class="row mb-2 row-bordered SECTION">
    	<div class="col-md-2 offset-md-1">
    		<div class="form-check-inline">
        		<label class="form-check-label"> 
        			<input type="checkbox" class="form-check-input inputfield checkbox_field"
        				name="input_gardet" id="input_gardet" value="1"
        				onclick="swp_type(this.id)"/>Garage Detached
        		</label>
        	</div>
    	</div>
    </div>
    <div class="row mb-2 row-bordered SECTION">
    	<div class="col-md-2 offset-md-1">
    		<div class="form-check-inline">
        		<label class="form-check-label"> 
        			<input type="checkbox" class="form-check-input inputfield checkbox_field"
        				name="input_other" id="input_other" value="1"
        				onclick="swp_type(this.id)"/>Other
        		</label>
        	</div>
    	</div>
    	<div class="col-md-5 offset-md-1" id='HIDEAWAY4A' hidden>
    		<div class="input-group input-group-sm">
        		<input onclick="swp_input_type(this.id)" type="text" class="form-control text-validate" 
        			name="input_other_ans" id="input_other_ans" value="" maxlength="255"/>
        	</div>
        </div>
    </div>
</div>
<div class="row row-bordered mt-2 SECTION SECTION3_SECTIONHEADERS">
   <div class="col-md-6">
    	<label class='title_label'>STRUCTURE DETAILS <i id='select_children_res' class='title_label_note'>(SELECT IF APPLICABLE TO STRUCTURE)</i></label>
   </div>
</div>
<div class="row mb-2 row-bordered SECTION">
	<div class="col-md-3 offset-md-1">
		<div class="form-check-inline">
			<label class="form-check-label"> 
				<input type="checkbox" class="form-check-input inputfield checkbox_field"
				name="input_garageattached" id="input_garageattached" value="1" 
				onclick="get_quantity(this.id);"/>Garage Attached
			</label>
		</div>
	</div>
</div>	
<div class="row mb-2 row-bordered SECTION">
	<div class="col-md-3 offset-md-1">
		<div class="form-check-inline">
			<label class="form-check-label"> 
				<input type="checkbox" class="form-check-input inputfield checkbox_field"
				name="input_deckporch" id="input_deckporch" value="1"
				onclick='clear_children(this.id)'/>Deck or Porch
			</label>
		</div>
	</div>
	<div class="col-md-2">
		<div class="form-check-inline">
			<label class="form-check-label">
				<input type="checkbox" class="form-check-input inputfield checkbox_field"
				name="input_deck_enclosed" id="input_deck_enclosed" value="1" onclick="swp_deck(this.id)"/>Enclosed
			</label>
		</div>
	</div>
	<div class="col-md-2">
		<div class="form-check-inline">
			<label class="form-check-label">
				<input type="checkbox" class="form-check-input inputfield checkbox_field"
				name="input_deck_nonenclosed" id="input_deck_nonenclosed" value="1" onclick="swp_deck(this.id)"/>Unenclosed
			</label>
		</div>
	</div>
</div>	
<div class="row mb-2 row-bordered SECTION">
	<div class="col-md-3 offset-md-1">
		<div class="form-check-inline">
			<label class="form-check-label"> 
				<input type="checkbox" class="form-check-input inputfield checkbox_field"
				name="input_floodplain" id="input_floodplain" value="1"
				onclick='clear_children(this.id)'/>Floodplain
			</label>
		</div>
	</div>
	<div class="col-md-2">
		<div class="form-check-inline">
			<label class="form-check-label">
				<input type="checkbox" class="form-check-input inputfield checkbox_field"
				name="input_ff" id="input_ff" value="1" onclick="swp_fp(this.id)"/>Flood Fringe (FF)
			</label>
		</div>
	</div>
	<div class="col-md-2">
		<div class="form-check-inline">
			<label class="form-check-label">
				<input type="checkbox" class="form-check-input inputfield checkbox_field"
				name="input_fw" id="input_fw" value="1" onclick="swp_fp(this.id)"/>Flood Way (FW)
			</label>
		</div>
	</div>
</div>	
<div class="row mb-2 row-bordered SECTION">
	<div class="col-md-3 offset-md-1">
		<div class="form-check-inline">
			<label class="form-check-label"> 
				<input type="checkbox" class="form-check-input inputfield checkbox_field" 
					name="input_wetland" id="input_wetland" value="1"/>Shoreland/Wetland
			</label>
		</div>
	</div>
</div>
<div class="row mt-2 SECTION SECTION3_SECTIONHEADERS">
   <div class="col-md-6">
    	<label class='title_label'>STRUCTURE DESCRIPTION</label>
   </div>
</div>
<div id="RES_NONRES_FOOT" hidden>
    <div class="row row-bordered mt-2 SECTION">
    	<div class="col-md-3 offset-md-1">
    		<label class="label-control"><span class='red'>*</span>Area of Proposed Structure:</label>
    	</div>
    	<div class="col-md-2">
    		<div class="input-group input-group-sm">
        		<input type="number" min=0 class="form-control" 
        			name="input_sqftres" id="input_sqftres" value="" maxlength="255"/>
        		<div class="input-group-prepend">
        			<span class="input-group-text">SQ. FT.</span>
        		</div>
        	</div>
        </div>
    </div>    
    <div class="row row-bordered mt-2 SECTION">
    	<div class="col-md-3 offset-md-1">
    		<label class="label-control"><span class='red'>*</span>Height of Proposed Structure:</label>
    	</div>
    	<div class="col-md-2">
    		<div class="input-group input-group-sm">
        		<input type="number" min=0 class="form-control" 
        			name="input_height" id="input_height" value="" maxlength="255"/>
        		<div class="input-group-prepend">
        			<span class="input-group-text">FT.</span>
        		</div>
        	</div>
        </div>
    </div>
    <div class="row row-bordered mt-2 SECTION">
    	<div class="col-md-3 offset-md-1">
    		<label class="label-control"><span class='red'>*</span>Specify Use:</label>
    	</div>
    	<div class="col-md-5">
    		<div class="input-group input-group-sm">
        		<input type="text" class="form-control text-validate" 
        			name="input_specify_use" id="input_specify_use" value="" maxlength="255"/>
        	</div>
        </div>
    </div>
    <div class="row row-bordered mt-2 SECTION">
    	<div class="col-md-3 offset-md-1">
    		<label class="label-control"><span class='red'>*</span>Value of Construction:</label>
    	</div>
    	<div class="col-md-2">
    		<div class="input-group input-group-sm">
        		<div class="input-group-prepend">
        			<span class="input-group-text">$</span>
        		</div>
        		<input type="number" min=0 class="form-control" 
        			name="input_value_const" id="input_value_const" value="" maxlength="255"/>
        	</div>
        </div>
    </div>
    <div id='garage_quantity' hidden>
        <div class="row row-bordered mt-2 SECTION">
        	<div class="col-md-3 offset-md-1">
        		<label class="label-control"><span class='red'>*</span>Garage Quantity:</label>
        	</div>
        	<div class="col-md-2">
        		<div class="input-group input-group-sm">
            		<input type="number" min=1 max=10 class="form-control" 
            			name="input_garage_quantity" id="input_garage_quantity" value=""
            			onchange='add_inputs(this.id);'/>
            		<div class="input-group-prepend">
            			<span class="input-group-text">#</span>
            		</div>
            	</div>
            </div>
    		<div id='GARAGE_CONTAINER'></div>
        </div>
    </div>
    <div id='deck_quantity' hidden>
        <div class="row row-bordered mt-2 SECTION">
        	<div class="col-md-3 offset-md-1">
        		<label class="label-control"><span class='red'>*</span>Deck Quantity:</label>
        	</div>
        	<div class="col-md-2">
        		<div class="input-group input-group-sm">
            		<input type="number" min=1 max=10 class="form-control" 
            			name="input_deck_quantity" id="input_deck_quantity" value=""
            			onchange='add_inputs(this.id);'/>
            		<div class="input-group-prepend">
            			<span class="input-group-text">#</span>
            		</div>
            	</div>
            </div>
    		<div id='DECK_CONTAINER'></div>
        </div>
    </div>
    <div class="row row-bordered mt-2 SECTION" hidden>
    	<div class="col-md-3 offset-md-1">
    		<label class="label-control">Area of Garage:</label>
    	</div>
    	<div class="col-md-2">
    		<div class="input-group input-group-sm">
        		<input type="number" min=0 class="form-control" 
        			name="input_sqftgar" id="input_sqftgar" value="" maxlength="255"/>
        		<div class="input-group-prepend">
        			<span class="input-group-text">SQ. FT.</span>
        		</div>
        	</div>
        </div>
    </div>
    <div class="row row-bordered mt-2 SECTION" hidden>
    	<div class="col-md-3 offset-md-1">
    		<label class="label-control">Area of Deck or Porch:</label>
    	</div>
    	<div class="col-md-2">
    		<div class="input-group input-group-sm">
        		<input type="number" min=0 class="form-control" 
        			name="input_sqftdeck" id="input_sqftdeck" value="" maxlength="255"/>
        		<div class="input-group-prepend">
        			<span class="input-group-text">SQ. FT.</span>
        		</div>
        	</div>
        </div>
    </div>
</div>
