$(document).ready(function() {
  $('[data-toggle="school"]').popover({
        placement : 'right',
		    trigger : 'hover',
        html : true,
        content : '<div class="media"><img src="img/TUP-Logo.png" width="60px" height="60px" class="mr-3" alt="Sample Image"><div class="media-body pop-container"><h5 class="media-heading">Technological University of the Philippines</h5><p>TUP - A premier state university with recognized excellence in engineering and technology education at par with leading universities in the ASEAN region.</p></div></div>'
    });
});
