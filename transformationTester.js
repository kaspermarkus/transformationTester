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

    $("#transformButton").click(function (e) {
        var prefs = $("#preferences").val();
        prefs = $.parseJSON(prefs);
        var trans = $("#transformationMap").val();
        trans = $.parseJSON(trans);
        var output = fluid.model.transformWithRules(prefs, trans);
        $("#resultArea").text(JSON.stringify(output));
    });
}());
