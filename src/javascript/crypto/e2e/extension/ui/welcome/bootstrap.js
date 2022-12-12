/**
 * @license
 * Copyright 2015 Google Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Starts the welcome page.
 */

goog.require('e2e.ext.ui.Welcome');
goog.require('e2e.ext.utils');

goog.provide('e2e.ext.ui.welcome.bootstrap');


/**
 * Specifies whether the welcome page has been bootstrapped.
 * @type {boolean}
 */
e2e.ext.ui.welcome.bootstrap = false;

// Create the welcome page.
if (e2e.ext.utils.isChromeExtensionWindow() ||
    e2e.ext.utils.isChromeAppWindow()) {
  /** @type {e2e.ext.ui.Welcome} */
  var welcomePage = new e2e.ext.ui.Welcome();
  welcomePage.decorate(document.documentElement);
  e2e.ext.ui.welcome.bootstrap = true;
}
