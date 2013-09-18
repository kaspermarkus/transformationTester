/*!
GPII Settings Transformer Tests

Copyright 2012 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

var fluid = fluid || require("infusion");

(function () {
    fluid.registerNamespace("gpii.tests.transformerTester");

    gpii.tests.transformerTester.validateJSON = function (inputField, errorField) {
        var val = $("#"+inputField).val();
        try {
	    val = $.parseJSON(val);
	    $("#"+errorField).hide();
	    $("#"+inputField).val(fluid.prettyPrintJSON(val)).addClass("valid");
	    return val;
        } catch (e) {
	    $("#"+errorField).text("INVALID JSON - "+e).show();
	    return false;
        }
    }

    $("#transformButton").click(function (e) {
        var prefs = gpii.tests.transformerTester.validateJSON("preferences", "preferences-error");
        var trans = gpii.tests.transformerTester.validateJSON("transformationMap", "transformationMap-error");
        if (!prefs || !trans) {
		$("#results").hide();
		return;
	}
	
	var output = fluid.model.transformWithRules(prefs, trans);
        $("#resultArea").text(fluid.prettyPrintJSON(output));
	$("#results").show();
    }).click();

    $("#transformationMap, #preferences").focus(function (evt) {
        $(evt.target).removeClass();
    });
}());
