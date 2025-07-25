const vscode = require("vscode");

const getRegexes = require("./regularExpressions.js");

let regexes;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    const workspace = vscode.workspace;
    const window = vscode.window;

    setup();

    window.onDidChangeActiveTextEditor((event) => {
        decorate(event.document);
    });

    workspace.onDidChangeConfiguration(() => {
        setup();
    });

    workspace.onDidChangeTextDocument((event) => {
        decorate(event.document);
    });
}

function setup() {
    const settings = vscode.workspace.getConfiguration("theCommentHighlighter");

    const userDefinedPrefixes = settings.get("userDefinedPrefixes") || [];

    const decorationStyles = {};
    userDefinedPrefixes.forEach(({ prefix, color, backgroundColor, fontWeight, fontStyle, textDecoration, fontFamily }) => {
        decorationStyles[prefix] = vscode.window.createTextEditorDecorationType({
            color,
            backgroundColor,
            fontWeight,
            fontStyle,
            textDecoration,
            fontFamily
        });
    });

    regexes = getRegexes(decorationStyles, vscode.window);

    if (vscode.window.activeTextEditor) {
        decorate(vscode.window.activeTextEditor.document);
    }
}

function decorate(document) {
    if (!document || excludeFolders(document.fileName)) return;

    const text = document.getText();

    regexes.forEach(({ regex, style }) => {
        let match;
        let decorationsArray = [];

        while ((match = regex.exec(text)) !== null) {
            const startOffset = match.index;
            const endOffset = match.index + match[0].length;
            const start = document.positionAt(startOffset);
            const end = document.positionAt(endOffset);

            console.log("Match found:", match[0], "at", start, "to", end);

            const range = new vscode.Range(start, end);
            decorationsArray.push({ range });
        }

        if (vscode.window.activeTextEditor) {
            vscode.window.activeTextEditor.setDecorations(style, decorationsArray);
        }
    });
}

function excludeFolders(filepath) {
    if (
        filepath.includes("node_modules") ||
        filepath.includes("bower_components") ||
        filepath.includes("dist") ||
        filepath.includes("out") ||
        filepath.includes("build") ||
        filepath.includes(".git") ||
        filepath.includes(".min")
    ) {
        return true;
    }
}

function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
