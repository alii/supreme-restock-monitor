// ==UserScript==
// @name         Supreme Restock Monitor
// @namespace    https://majorcraft.xyz
// @version      1
// @description  Monitor Restocks on Supreme Newyork
// @author       aabbccsmith
// @match        https://www.supremenewyork.com/shop/*/*/*
// @grant        none
// @include      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==
(function() {
    'use strict';
    var discordWebhookUrl = "YOUR DISCORD WEBHOOK URL"; //Important! Make sure you set this when you install this script
    var isSoldOut = function(el) {
        return (document.querySelector(".sold-out")) ? true : false;
    }
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
