#需要js的components

##tab
	<!-- Nav tabs -->
	<ul class="nav nav-tabs">
	  <li><a href="#home" data-toggle="tab">Home</a></li>
	  <li><a href="#profile" data-toggle="tab">Profile</a></li>
	</ul>
	
	<!-- Tab panes -->
	<div class="tab-content">
	  <div class="tab-pane active" id="home">...</div>
	  <div class="tab-pane" id="profile">...</div>
	</div

##modal
	<!-- Button trigger modal -->
	<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
	  Launch demo modal
	</button>
	
	<!-- Modal -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
	      </div>
	      <div class="modal-body">
	        ...
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	        <button type="button" class="btn btn-primary">Save changes</button>
	      </div>
	    </div><!-- /.modal-content -->
	  </div><!-- /.modal-dialog -->
	</div><!-- /.modal -->

##Carousel

##button
###checkbox
	<div class="btn-group" data-toggle="buttons">
	  <label class="btn btn-primary">
	    <input type="checkbox"> Option 1
	  </label>
	</div>

###radio
	<div class="btn-group" data-toggle="buttons">
	  <label class="btn btn-primary">
	    <input type="radio" name="options" id="option1"> Option 1
	  </label>
	</div>