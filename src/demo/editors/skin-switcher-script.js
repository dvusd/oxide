// Load a different skin by adding the skin name as a url parameter
// by appending the url like this: ?skin=oxide-dark
// Available skins are located in ./build/skins/
let url = new URL (window.location.href);
let skin = url.searchParams.get('skin');
if (!skin) skin = 'oxide-default';