$("li[role='tab']").click(function(){
$("li[role='tab']").attr("aria-selected", "false");
$(this).attr("aria-selected", "true");
var tabname = $(this).attr("aria-controls");
var tab = $("#"+tabname);
$("div[role='tabpanel']").attr("aria-hidden", "true");
tab.attr("aria-hidden", "false");
} );

$("li[role='tab']").keydown(function(event){
if (event.which == 13) {
$(this).click(); } } );