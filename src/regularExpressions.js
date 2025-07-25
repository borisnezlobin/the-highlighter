function getRegexes(decorationStyles, window) {
    // decorationStyles: { [prefix]: { color: ... } }
    // userDefinedPrefixes is not needed here, only decorationStyles keys
    const prefixes = Object.keys(decorationStyles);
    console.log('Prefixes:', prefixes);

    return prefixes.map(prefix => {
        // Match single-line comments
        // const singleLine = new RegExp(`(?:\\/\\/|#)\\s*?${prefix}\\b.*`, 'gi');
        const regex = new RegExp(`(?:#|\\/\\/)\\s*(${prefix}.*)|\\/\\*\\s*(${prefix}[\\s\\S]*?)\\*\\/|<!--\\s*(${prefix}[\\s\\S]*?)-->`, "gi");
        // Match multiline comments
        // const multiLine = new RegExp(`/\\*[\\s\\S]*?\\b${prefix}\\b[\\s\\S]*?\\*/`, 'gi');
        return [
            // { regex: multiLine, style: decorationStyles[prefix] },
            { regex: regex, style: decorationStyles[prefix] },
        ];
    }).flat();
}

module.exports = getRegexes;