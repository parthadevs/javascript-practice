function convertMarkdown() {
    const inputElement = document.getElementById("markdown-input");
    if (!inputElement) return "";
    let text = inputElement.value;

    text = text.replace(/^[ \t]*###[ \t]+(.+)$/gm, "<h3>$1</h3>");
    text = text.replace(/^[ \t]*##[ \t]+(.+)$/gm, "<h2>$1</h2>");
    text = text.replace(/^[ \t]*#[ \t]+(.+)$/gm, "<h1>$1</h1>");

    text = text.replace(/^[ \t]*>[ \t]+(.+)$/gm, "<blockquote>$1</blockquote>");

    text = text.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');

    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/__(.*?)__/g, "<strong>$1</strong>");

    text = text.replace(/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/g, "<em>$1</em>");
    text = text.replace(/(?<!_)_(?!_)(.*?)(?<!_)_(?!_)/g, "<em>$1</em>");

    return text;
}

document.addEventListener("DOMContentLoaded", () => {
    const markdownInput = document.getElementById("markdown-input");
    const htmlOutput = document.getElementById("html-output");
    const preview = document.getElementById("preview");

    if (markdownInput) {
        markdownInput.addEventListener("input", () => {
            const resultHtml = convertMarkdown();
            
            if (htmlOutput) {
                htmlOutput.textContent = resultHtml;
            }
            
            if (preview) {
                preview.innerHTML = resultHtml;
            }
        });
    }
});