function logToScreen(message) {
    var $consoleWindow = $(".console .console-window");
    var $br = $("<br />");
    var $entry = $("<div class='console-entry'></div>")
        .html(message.replace(/\n/g, "<br />"))
        .append($br)
        .append($br);
    $consoleWindow.append($entry);
}
