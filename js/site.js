/* InRush Co. | Copyright (c) 2026 InRush Co. All Rights Reserved. */
'use strict';
// Keep navigation and copyright text functional without third-party dependencies.
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
