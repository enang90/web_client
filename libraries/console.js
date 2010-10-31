﻿/**
	This file is part of Web Client
	@author Copyright (c) 2010 Sebastiaan Deckers
	@license GNU General Public License version 3 or later
*/
(function (_undefined) {
	if (window.console === _undefined) {
		window.console = {};
		(	"assert count debug dir dirxml error group groupCollapsed groupEnd " +
			"info log markTimeline profile profileEnd time timeEnd trace warn"
		).split(" ").forEach(function (api) {
			window.console[api] = function () {};
		});
	}
})();