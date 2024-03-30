<div id="pick_two">
	<div id='PICK_ONE_NON' class="row row-bordered mt-2 SECTION SECTION3_SECTIONHEADERS">
    	<div class="col-md-6">
    		<label class='title_label'>STRUCTURE TYPE <i id='select_one_non' class='title_label_note'>(SELECT ONE)</i></label>
    	</div>
    </div>
    <div class="row row-bordered mt-2 SECTION">
        <div class="col-md-8 offset-md-1">    	
        	<div class="form-check-inline">
        		<label class="form-check-label"> 
        			<input type="checkbox" class="form-check-input inputfield checkbox_field"
        				name="input_non_agricultural" id="input_non_agricultural" value="1"
        				onclick="swp_type_nonres(this.id)"/>Agricultural
        		</label>
        	</div>
        </div>
    </div>
    <div class="row row-bordered mt-2 SECTION">
        <div class="col-md-8 offset-md-1">
        	<div class="form-check-inline">
        		<label class="form-check-label"> 
        			<input type="checkbox" class="form-check-input inputfield checkbox_field"
        				name="input_non_industrial" id="input_non_industrial" value="1"
        				onclick="swp_type_nonres(this.id)"/>Industrial
        		</label>
        	</div>
        </div>
    </div>
    <div class="row row-bordered mt-2 SECTION">
        <div class="col-md-8 offset-md-1">
        	<div class="form-check-inline">
        		<label class="form-check-label"> 
        			<input type="checkbox" class="form-check-input inputfield checkbox_field"
        				name="input_non_business" id="input_non_business" value="1"
        				onclick="swp_type_nonres(this.id)"/>Business
        		</label>
        	</div>
        </div>
    </div>
    <div class="row row-bordered mt-2 SECTION">
        <div class="col-md-8 offset-md-1">
        	<div class="form-check-inline">
        		<label class="form-check-label"> 
        			<input type="checkbox" class="form-check-input inputfield checkbox_field"
        				name="input_non_campground" id="input_non_campground" value="1"
        				onclick="swp_type_nonres(this.id)"/>Campground
        		</label>
        	</div>
        </div>
    </div>
    <div class="row row-bordered mt-2 SECTION">
        <div class="col-md-2 offset-md-1">
        	<div class="form-check-inline">
        		<label class="form-check-label"> 
        			<input type="checkbox" class="form-check-input inputfield checkbox_field"
        				name="input_non_other" id="input_non_other" value="1"
        				onclick="swp_type_nonres(this.id)"/>Other
        		</label>
        	</div>
        </div>
    	<div class="col-md-5 offset-md-1" id='HIDEAWAY5A' hidden>
    		<div class="input-group input-group-sm">
        		<input type="text" class="form-control text-validate" 
        			name="input_non_other_ans" id="input_non_other_ans" value="" maxlength="255"
        			onclick="swp_type_nonres(this.id)"/>
        	</div>
        </div>
    </div>
</div>
<div class="row row-bordered mt-2 SECTION SECTION3_SECTIONHEADERS">
   <div class="col-md-6">
    	<label class='title_label'>STRUCTURE DETAILS <i id='select_children_nonres' class='title_label_note'>(SELECT IF APPLICABLE TO STRUCTURE)</i></label>
   </div>
</div>
<div class="row mb-2 row-bordered SECTION">
	<div class="col-md-3 offset-md-1">
		<div class="form-check-inline">
			<label class="form-check-label"> 
				<input type="checkbox" class="form-check-input inputfield checkbox_field"
				name="input_non_floodplain" id="input_non_floodplain" value="1"
				onclick='clear_children(this.id)'/>Floodplain
			</label>
		</div>
	</div>
	<div class="col-md-2">
		<div class="form-check-inline">
			<label class="form-check-label">
				<input type="checkbox" class="form-check-input inputfield checkbox_field"
				name="input_non_ff" id="input_non_ff" value="1" onclick="swp_non_fp(this.id)"/>Flood Fringe (FF)
			</label>
		</div>
	</div>
	<div class="col-md-2">
		<div class="form-check-inline">
			<label class="form-check-label">
				<input type="checkbox" class="form-check-input inputfield checkbox_field"
				name="input_non_fw" id="input_non_fw" value="1" onclick="swp_non_fp(this.id)"/>Flood Way (FW)
			</label>
		</div>
	</div>
</div>	
<div class="row mb-2 row-bordered SECTION">
	<div class="col-md-3 offset-md-1">
		<div class="form-check-inline">
			<label class="form-check-label"> 
				<input type="checkbox" class="form-check-input inputfield checkbox_field" 
					name="input_non_shorewet" id="input_non_shorewet" value="1"/>Shoreland/Wetland
			</label>
		</div>
	</div>
</div>
<div id="RES_NONRES_FOOT2" hidden>
	<div class="row row-bordered mt-2 SECTION SECTION3_SECTIONHEADERS">
    	<div class="col-md-6">
    		<label class='title_label'>STRUCTURE DESCRIPTION</label>
    	</div>
    </div>
    <div class="row row-bordered mt-2 SECTION">
    	<div class="col-md-3 offset-md-1">
    		<label class="label-control"><span class='red'>*</span>Area of Proposed Structure:</label>
    	</div>
    	<div class="col-md-2">
    		<div class="input-group input-group-sm">
        		<input type="number" min=0 class="form-control" 
        			name="input_non_sqftres" id="input_non_sqftres" value="" maxlength="255"/>
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
        			name="input_non_height" id="input_non_height" value="" maxlength="255"/>
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
        			name="input_non_specify_use" id="input_non_specify_use" value="" maxlength="255"/>
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
        			name="input_non_value_const" id="input_non_value_const" value="" maxlength="255"/>
        	</div>
        </div>
    </div>
</div>
