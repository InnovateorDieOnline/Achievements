/*
 * Copyright 2013 BlackBerry.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// filepicker (async)
function pickFile() {
	Invoke.utils.filePicker(function(path) {
			Toast.regular('Picked: ' + path, 3000);
		},

		function(reason) {
			Toast.regular('Card canceled: ' + reason);
		},

		function(error) {
			console.log(error);
		});
}

// camera (async)
function takePhoto() {
	Invoke.utils.camera(function(path) {
			Toast.regular('Photo: ' + path, 3000);
		},

		function(reason) {
			Toast.regular('Card canceled: ' + reason);
		},

		function(error) {
			console.log(error);
		});
}

// sample toast button callback
function toastCallback() {
	alert('In the callback!');
}

// spinner usage
function spinner(size) {
	// hide the current spinner, if it's visible
	Spinner.off();
	Spinner.on(size);
}

// show a welcome message
function welcome() {
Toast.regular('Welcome to your Achievements Tab!', 2000);

}

//Go to the Assignment Site
function invokeIODPage() {
    blackberry.invoke.invoke({
        target: "sys.browser",
        uri: "http://www.innovateordieonline.com"
    });
}
