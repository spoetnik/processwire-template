/**
 * mystyles.js - for ProcessWire CKEditor "Custom Editor Styles Set" option
 * 
 * Example file for "Custom Editor Styles Set" as seen in your CKEditor field config.
 * This file is not in use unless you specify it for that configuration item.
 * 
 * PLEASE NOTE: 
 * 
 * It's possible this file may be out of date since it is in /site/ rather than /wire/,
 * and the version of this file will reflect whatever version you had when you first
 * installed this copy of ProcessWire. 
 * 
 * If you intend to use this, you may first want to get the newest copy out of: 
 * /wire/modules/Inputfield/InputfieldCKEditor/mystyles.js
 *
 * For a more comprehensive example, see: 
 * /wire/modules/Inputfield/InputfieldCKEditor/ckeditor-[version]/styles.js
 * 
 */  

CKEDITOR.stylesSet.add( '_ckeditor_styles', [
 { name: 'Left Aligned Text', element: 'span', attributes: { 'class': 'has-text-left' } },
 { name: 'Right Aligned Text', element: 'span', attributes: { 'class': 'has-text-right' } },
 { name: 'Centered Text', element: 'span', attributes: { 'class': 'has-text-centered' } },
 { name: 'Inline Code', element: 'code' },
 { name: 'Small', element: 'small' },
 { name: 'Superscript', element: 'sup' },
 { name: 'Subscript', element: 'sub' },
]);