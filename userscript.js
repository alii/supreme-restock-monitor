// ==UserScript==
// @name         Supreme Restock Monitor
// @namespace    https://majorcraft.xyz
// @version      1.1
// @description  try to take over the world!
// @author       aabbccsmith
// @match        https://www.supremenewyork.com/shop/*/*/*
// @grant        none
// @include      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==
(function() {
    'use strict';
    var discordWebhookUrl = "YOUR WEBHOOK HERE";
    var isSoldOut = function(el) {
        return (document.querySelector(".sold-out")) ? true : false;
    }

    if (window.sessionStorage.reload != "loaded") {

        window.sessionStorage.reload = "loaded";
        alert("This script will constantly run, and not allow any bots or other extensions to function!");
    }
    //This script sends a discord notification whenever an item on supremenewyork.com restocks. The tab must be open for this script to work
    if(!isSoldOut(document.getElementById("add-remove-buttons"))) {
        $.ajax({
            data: JSON.stringify({"content":window.location + " has just restocked!"}),
            type: "post",
            xhrFields: { withCredentials: true },
            dataType: "json",
            url: discordWebhookUrl,
            success: function(result) {
                alert("Restocked! Notification sent!");
            }
        });
    } else {
        window.location.reload();
    }


})();
