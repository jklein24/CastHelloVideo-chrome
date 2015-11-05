/**
 * @fileoverview Description of this file.
 */

/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: "calcWinID",
    innerBounds: {
      width: 244,
      height: 380,
      minWidth: 244,
      minHeight: 380
    }
  });
});
