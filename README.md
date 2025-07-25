# THE Higlighter for Visual Studio Code

#### Example
![Example](example.png)

## Overview
Style any comment starting with any prefix you choose. Color, underline, italicize, bold, add background colors, and more.

## Features
- Define any prefix to highlight comments for
- Apply decorations to comments based on the prefix
- Everything is up to you
- Open source

## Installation
Install from VS Code marketplace. There should be a blue button at the top of this page that says "Install". That's the right button to click.

## Usage
1. Open settings:
   1. Open the command palette (Ctrl+Shift+P or Cmd+Shift+P)Search for and select "Preferences: Open Settings (JSON)," or
   2. Open settings (UI) with "Cmd+," and search for "The Comment Highlighter". Select "Edit in settings.json" under "User Defined Prefixes."
3. Add your desired prefixes and decoration styles under the `todoHighlighter` configuration. Follow the format of the defaults. In case you deleted those:
   ```json
   "theCommentHighlighter.userDefinedPrefixes": [
      // list of prefix-and-style objects in the following format:
      {
         "prefix": "todo", // highlight all comments starting with this
         "color": "#ff5555", // comment text color
         "backgroundColor": "#ff55551a", // background color of the comment
         "fontStyle": "italic", // 'italic' or 'normal'; defaults to normal
         "textDecoration": "underline", // options: "underline", "none", "line-through", "underline line-through"; defaults to "none"
         "fontWeight": "bold", // 'bold' or 'normal'; default normal
         "fontFamily": "'Courier New'" // any valid CSS font family. Not sure if this works and I can't tell.
      },
   ]
   ```
4. Save the settings and start coding! Comments with the specified prefixes will be highlighted according to the defined styles.

## Contributing
I will check any activity on this repository within 24 hours (even if it looks unmaintained), so feel free to open a pull request or issue! Repo: https://github.com/borisnezlobin/the-highlighter.

I also take feature requests — just open an issue and I'll get back to you!

## License
This project is licensed under the MIT License because open source is so cool. See the LICENSE file for more details. Kidding. There isn't a LICENSE file.