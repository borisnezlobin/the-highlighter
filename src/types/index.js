// filepath: /comment-highlighter/comment-highlighter/src/types/index.js
/**
 * This file defines types and interfaces used throughout the extension.
 */

// Define a type for the decoration style
export interface DecorationStyle {
    color: string;
    backgroundColor?: string;
    fontStyle?: string;
    fontWeight?: string;
}

// Define a type for the regex configuration
export interface RegexConfig {
    prefix: string; // The user-defined prefix
    style: DecorationStyle; // The style associated with the prefix
    regex: RegExp; // The regular expression for matching comments
}

// Define a type for the settings configuration
export interface SettingsConfig {
    decorations: DecorationStyle[]; // Array of decoration styles
    prefixes: string[]; // Array of user-defined prefixes
}