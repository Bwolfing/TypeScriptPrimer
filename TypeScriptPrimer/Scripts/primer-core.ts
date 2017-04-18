function logToScreen(message: string): void {
    const $consoleWindow = $(".console .console-window");
    const $br = $("<br />");
    const $entry: JQuery = $("<div class='console-entry'></div>")
        .html(message.replace(/\n/g, "<br />"))
        .append($br)
        .append($br);
    $consoleWindow.append($entry);
}