<div class='col-md-12'>
    <div class="row">
        <div class='col-md-2'>
        	<label></label>
        </div>
        <div class='col-md-10'>
        	<div class="drawpad_container">	
                <fieldset class="scheduler-border border p-2" id="drawpad_fieldset">
                	<section class="tools-board">
                    	<div class="row">
                    		<label class="title"><b>TOOLBOX</b></label>
                    		<ul class="options">
                    			<li class="option tool" id="rectangle"><i class="fa-solid fa-square"></i><span>Rectangle</span></li>
                    			<li class="option tool" id="circle"><i class="fa-solid fa-circle"></i><span>Circle</span></li>
                    			<li class="option tool" id="triangle"><i class="fa-solid fa-play fa-lg fa-rotate-270"></i><span>Triangle</span></li>
                    			<li class="option tool" id="line"><i class="fa-solid fa-chart-simple"></i><span>Line</span></li>
                    			<li class="option tool" id="text_ans" title='TEXT'><i class="fa-solid fa-keyboard"></i>&nbsp;&nbsp;<input id="text_toolbox" type='text' oninput='set_text(this.value);'></input></li></li>
                    		</ul>
                    		<ul class="options">
                    		<hr/>
                    			<li class="option active tool" id="brush"><i class="fa-solid fa-paintbrush"></i><span>Brush</span></li>
                    			<li class="option tool" id="eraser"><i class="fa-solid fa-eraser"></i><span>Eraser</span></li>
                    			<li class="option"><input type="range" id="size-slider" min="1" max="30" value="5"></li>
                    			<li class="option"><label><input type="checkbox" id="fill-color">&nbsp;FILL SHAPE</label></li>
                    		</ul>
                    	</div>
                        	<div class="row colors">
                        		<ul class="options">
                        			<li class="option"></li>
                        			<li class="option selected"></li>
                        			<li class="option"></li>
                        			<li class="option"></li>
                        			<li class="option">
                        			<input type="color" id="color-picker" value="#4A98F7"></li>
                        		</ul>
                        	</div>
                    	<div class="row buttons">
                    		<button class="save-img">DOWNLOAD</button>
                            <!--Video Created By Me-->
                    		<a href='<?php echo URL; ?>zoning/video' target='_blank' title='VIDEO' id='info_video_link'>HOW TO USE</a>
                    		<a href='<?php echo URL; ?>img/EXAMPLE.pdf' target='_blank' title='EXAMPLE' id='plot_plan_link'>EXAMPLE</a>
                    	</div>
                    	<div class="row">
                    		<label></label>
                    	</div>
                    	<div class="row">
                    		<label></label>
                    	</div>
                    	<div class="row">
                    		<label></label>
                    	</div>
                    	<div class="row">
                    		<label></label>
                    	</div>
                    	<div class="row">
                    		<label></label>
                    	</div>
                    	<div class="row">
                    		<label></label>
                    	</div>
                    	<div class="row buttons">
                    		<button class="clear-canvas">CLEAR PAGE</button>
                    	</div>
                	</section>
                </fieldset>
                <section class="drawing-board">
                	<canvas></canvas>
                </section>
        	</div>
        </div>
    </div>
</div>
