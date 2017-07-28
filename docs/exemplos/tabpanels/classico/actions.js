$(document).ready(function(){

$("li[role='tab']").click(function(){
$("li[role='tab']").attr("aria-selected", "false");
$(this).attr("aria-selected", "true");
var tabName=$(this).attr("aria-controls");
var tab=$("#"+tabName);
$("div[role='tabpanel']").attr("aria-hidden", "true");
tab.attr("aria-hidden", "false"); } );

$("li[role='tab']").keydown(function(event){
if (event.which == 13) {
$(this).click();
$("div#maintabs").focus();  }
if ((event.which == 39)||(event.which == 37)) {
var selected=$(this).attr("aria-selected");
if (selected == "true") {
var newTab=$(this).next();
if (event.which == 37) {
 var newTab=$(this).prev(); }
if (newTab.index() >= 0) {
$(newTab).attr("aria-selected", "true").focus();
$(this).attr("aria-selected", "false");
$("div[role='tabpanel']").attr("aria-hidden", "true");
var tabName=$(newTab).attr("aria-controls");
var tab=$("#"+tabName);
tab.attr("aria-hidden", "false"); } } } } );

 } );