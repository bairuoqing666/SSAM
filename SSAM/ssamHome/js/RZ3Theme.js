/*! RZ3Theme 2016-03-02 17:06:52 */
function debounce(a, b, c) {
	var d;
	return function() {
		var e = this,
			f = arguments,
			g = function() {
				d = null, c || a.apply(e, f)
			},
			h = c && !d;
		clearTimeout(d), d = setTimeout(g, b), h && a.apply(e, f)
	}
}

function getRandomNumber(a, b, c) {
	var d = Math.random() * (b - a) + a;
	return "undefined" != typeof c ? d.toFixed(c) : d
}

function getRandomInt(a, b) {
	return Math.floor(Math.random() * (b - a + 1)) + a
}

function getStyleVal(a, b) {
	var c = a.css(b);
	return Math.round(Number(c.substr(0, c.length - 2)))
}

function logCredits(a, b, c, d, e) {
	var f = "#fff";
	if("undefined" != typeof e && (f = e), console.log("%c   ", "font-size:3px;"), console.log("%c" + a, "background:" + b + "; color: " + f + "; font-size:14px; padding:5px 10px;"), console.log("%c   ", "font-size:3px;"), null !== c) {
		var g = c.length;
		if(g)
			for(var h = 0; g > h; h++) console.log(c[h].name + " - " + c[h].website)
	}
	if(null !== d) {
		var i = d.length;
		if(i) {
			console.log("-"), console.log("Made with");
			for(var j = 0; i > j; j++) console.log(d[j].name + " (" + d[j].website + ")")
		}
	}
	console.log("-"), console.log(" ")
}

function externalLinkTarget(a, b) {
	var c = a.length,
		d = b.split("://");
	d = d[1];
	for(var e = 0; c > e; e++) {
		var f = a[e]; - 1 == f.href.indexOf(d) && -1 == f.href.indexOf("javascript") && -1 == f.href.indexOf("mailto:") && "/" != f.href.charAt(0) && "#" != f.href.charAt(0) && (a[e].target = "_blank")
	}
}

function preventDefault(a) {
	a = a || window.event, a.preventDefault && a.preventDefault(), a.returnValue = !1
}

function keydown(a) {
	for(var b = keys.length; b--;)
		if(a.keyCode === keys[b]) return void preventDefault(a)
}

function wheel(a) {
	preventDefault(a)
}

function disableScroll() {
	window.addEventListener && window.addEventListener("DOMMouseScroll", wheel, !1), window.onmousewheel = document.onmousewheel = wheel, document.onkeydown = keydown
}

function enableScroll() {
	window.removeEventListener && window.removeEventListener("DOMMouseScroll", wheel, !1), window.onmousewheel = document.onmousewheel = document.onkeydown = null
}

function prefixProperty(a) {
	for(var b = ["", "ms", "Webkit", "Moz", "O"], c = b.length, d = document.createElement("div"), e = 0; c > e; e++) {
		var f = b[e];
		a = "" === f ? a : a.charAt(0).toUpperCase() + a.substring(1).toLowerCase();
		var g = f + a;
		if("undefined" != typeof d.style[g]) return g
	}
}

function getNormRatio(a, b, c) {
	return b > a ? 0 : a > c ? 1 : a === c ? 1 : (a - b) / (c - b)
}! function(a) {
	if(a.cookieChoices) return a.cookieChoices;
	var b = a.document,
		c = "textContent" in b.body,
		d = function() {
			function a(a, c, d, e) {
				var i = "position:fixed;width:100%;background-color:#eee;margin:0; left:0; top:0;padding:4px;z-index:1000;text-align:center;",
					j = b.createElement("div");
				return j.id = q, j.style.cssText = i, j.appendChild(f(a)), d && e && j.appendChild(h(d, e)), j.appendChild(g(c)), j
			}

			function d(a, c, d, e) {
				var i = "position:fixed;width:100%;height:100%;z-index:999;top:0;left:0;opacity:0.5;filter:alpha(opacity=50);background-color:#ccc;",
					j = "z-index:1000;position:fixed;left:50%;top:50%",
					k = "position:relative;left:-50%;margin-top:-25%;background-color:#fff;padding:20px;box-shadow:4px 4px 25px #888;",
					l = b.createElement("div");
				l.id = q;
				var m = b.createElement("div");
				m.style.cssText = i;
				var n = b.createElement("div");
				n.style.cssText = k;
				var o = b.createElement("div");
				o.style.cssText = j;
				var p = g(c);
				return p.style.display = "block", p.style.textAlign = "right", p.style.marginTop = "8px", n.appendChild(f(a)), d && e && n.appendChild(h(d, e)), n.appendChild(p), o.appendChild(n), l.appendChild(m), l.appendChild(o), l
			}

			function e(a, b) {
				c ? a.textContent = b : a.innerText = b
			}

			function f(a) {
				var c = b.createElement("span");
				return e(c, a), c
			}

			function g(a) {
				var c = b.createElement("a");
				return e(c, a), c.id = r, c.href = "#", c.style.marginLeft = "24px", c
			}

			function h(a, c) {
				var d = b.createElement("a");
				return e(d, a), d.href = c, d.target = "_blank", d.style.marginLeft = "8px", d
			}

			function i() {
				return n(), m(), !1
			}

			function j(c, e, f, g, h) {
				if(o()) {
					m();
					var j = h ? d(c, e, f, g) : a(c, e, f, g),
						k = b.createDocumentFragment();
					k.appendChild(j), b.body.appendChild(k.cloneNode(!0)), b.getElementById(r).onclick = i
				}
			}

			function k(a, b, c, d) {
				j(a, b, c, d, !1)
			}

			function l(a, b, c, d) {
				j(a, b, c, d, !0)
			}

			function m() {
				var a = b.getElementById(q);
				null != a && a.parentNode.removeChild(a)
			}

			function n() {
				var a = new Date;
				a.setFullYear(a.getFullYear() + 1), b.cookie = p + "=y; expires=" + a.toGMTString()
			}

			function o() {
				return !b.cookie.match(new RegExp(p + "=([^;]+)"))
			}
			var p = "displayCookieConsent",
				q = "cookieChoiceInfo",
				r = "cookieChoiceDismiss",
				s = {};
			return s.showCookieConsentBar = k, s.showCookieConsentDialog = l, s
		}();
	return a.cookieChoices = d, d
}(this);
var isset = function(a) {
		return "undefined" != typeof a ? !0 : !1
	},
	getViewportSize = function() {
		var a = window,
			b = "inner";
		return "innerWidth" in window || (b = "client", a = document.documentElement || document.body), {
			width: a[b + "Width"],
			height: a[b + "Height"]
		}
	},
	isMediaMinSM = function() {
		var a = getViewportSize();
		return a.width >= 768 ? !0 : !1
	},
	isMediaMinMD = function() {
		var a = getViewportSize();
		return a.width >= 992 ? !0 : !1
	},
	isMediaMinLG = function() {
		var a = getViewportSize();
		return a.width >= 1200 ? !0 : !1
	};
window.requestAnimFrame = function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
		window.setTimeout(a, 1e3 / 60)
	}
}(), window.cancelAnimFrame = function() {
	return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(a) {
		window.clearTimeout(a)
	}
}();
var addClass = function(a, b) {
		a && (a.classList ? a.classList.add(b) : a.className += " " + b)
	},
	removeClass = function(a, b) {
		if(a)
			if(a.classList) a.classList.remove(b);
			else {
				a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), "");
				var c = a.className.length - 1;
				" " == a.className[c] && (a.className = a.className.substring(0, c))
			}
	},
	replacePlaceholder = function() {
		Modernizr.input.placeholder || ($("[placeholder]").focus(function() {
			var a = $(this);
			a.val() == a.attr("placeholder") && (a.val(""), a.removeClass("placeholder"))
		}).blur(function() {
			var a = $(this);
			("" === a.val() || a.val() == a.attr("placeholder")) && (a.addClass("placeholder"), a.val(a.attr("placeholder")))
		}).blur(), $("[placeholder]").parents("form").submit(function() {
			$(this).find("[placeholder]").each(function() {
				var a = $(this);
				a.val() == a.attr("placeholder") && a.val("")
			})
		}))
	},
	stripTrailingSlash = function(a) {
		return "/" == a.substr(-1) ? a.substr(0, a.length - 1) : a
	},
	keys = [37, 38, 39, 40, 33, 34, 35];
! function() {
	for(var a, b = function() {}, c = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], d = c.length, e = window.console = window.console || {}; d--;) a = c[d], e[a] || (e[a] = b)
}();
var gaTrackErrors = function() {
	"undefined" != typeof ga && (window.addEventListener("error", function(a) {
		var b = a.colno ? " line:" + a.lineno + ", column:" + a.colno : " line:" + a.lineno;
		ga("send", "event", "JavaScript Error", a.message, a.filename + b + " -> " + navigator.userAgent, 0, !0)
	}), jQuery.error = function(a) {
		ga("send", "event", "jQuery Error", a, navigator.userAgent, 0, !0)
	}, $(document).ajaxError(function(a, b, c) {
		ga("send", "event", "jQuery Ajax Error", c.url, JSON.stringify({
			result: a.result,
			status: b.status,
			statusText: b.statusText,
			crossDomain: c.crossDomain,
			dataType: c.dataType
		}), 0, !0)
	}))
};
! function(a) {
	a.fn.dcSpamless = function(b) {
		var c = {
				reverse: !0,
				splitDomain: "[dot]",
				splitName: "[at]",
				mailto: !0
			},
			b = a.extend(c, b);
		return this.each(function(b) {
			var d = c.splitDomain,
				e = c.splitName,
				f = a(this).is("a") ? a(this).attr("href").replace("mailto:", "").replace(d, ".").replace(e, "@") : a(this).text().replace(d, ".").replace(e, "@");
			f = 1 == c.reverse ? f.split("").reverse().join("") : f, a(this).is("a") ? a(this).attr("href", "mailto:" + f) : (c.mailto === !0 && (f = '<a href="mailto:' + f + '">' + f + "</a>"), a(this).html(f))
		})
	}
}(jQuery),
function(a) {
	function b() {
		var a = h();
		a !== i && (i = a, l.trigger("orientationchange"))
	}

	function c(b, c, d, e) {
		var f = d.type;
		d.type = c, a.event.dispatch.call(b, d, e), d.type = f
	}
	a.attrFn = a.attrFn || {};
	var d = navigator.userAgent.toLowerCase(),
		e = d.indexOf("chrome") > -1 && (d.indexOf("windows") > -1 || d.indexOf("macintosh") > -1 || d.indexOf("linux") > -1) && d.indexOf("mobile") < 0 && d.indexOf("android") < 0,
		f = {
			tap_pixel_range: 5,
			swipe_h_threshold: 50,
			swipe_v_threshold: 50,
			taphold_threshold: 750,
			doubletap_int: 500,
			touch_capable: "ontouchstart" in window && !e,
			orientation_support: "orientation" in window && "onorientationchange" in window,
			startevent: "ontouchstart" in window && !e ? "touchstart" : "mousedown",
			endevent: "ontouchstart" in window && !e ? "touchend" : "mouseup",
			moveevent: "ontouchstart" in window && !e ? "touchmove" : "mousemove",
			tapevent: "ontouchstart" in window && !e ? "tap" : "click",
			scrollevent: "ontouchstart" in window && !e ? "touchmove" : "scroll",
			hold_timer: null,
			tap_timer: null
		};
	a.isTouchCapable = function() {
		return f.touch_capable
	}, a.getStartEvent = function() {
		return f.startevent
	}, a.getEndEvent = function() {
		return f.endevent
	}, a.getMoveEvent = function() {
		return f.moveevent
	}, a.getTapEvent = function() {
		return f.tapevent
	}, a.getScrollEvent = function() {
		return f.scrollevent
	}, a.each(["tapstart", "tapend", "tapmove", "tap", "tap2", "tap3", "tap4", "singletap", "doubletap", "taphold", "swipe", "swipeup", "swiperight", "swipedown", "swipeleft", "swipeend", "scrollstart", "scrollend", "orientationchange"], function(b, c) {
		a.fn[c] = function(a) {
			return a ? this.on(c, a) : this.trigger(c)
		}, a.attrFn[c] = !0
	}), a.event.special.tapstart = {
		setup: function() {
			var b = this,
				d = a(b);
			d.on(f.startevent, function(a) {
				if(d.data("callee", arguments.callee), a.which && 1 !== a.which) return !1;
				var e = a.originalEvent,
					g = {
						position: {
							x: f.touch_capable ? e.touches[0].screenX : a.screenX,
							y: f.touch_capable ? e.touches[0].screenY : a.screenY
						},
						offset: {
							x: f.touch_capable ? e.touches[0].pageX - e.touches[0].target.offsetLeft : a.offsetX,
							y: f.touch_capable ? e.touches[0].pageY - e.touches[0].target.offsetTop : a.offsetY
						},
						time: Date.now(),
						target: a.target
					};
				return c(b, "tapstart", a, g), !0
			})
		},
		remove: function() {
			a(this).off(f.startevent, a(this).data.callee)
		}
	}, a.event.special.tapmove = {
		setup: function() {
			var b = this,
				d = a(b);
			d.on(f.moveevent, function(a) {
				d.data("callee", arguments.callee);
				var e = a.originalEvent,
					g = {
						position: {
							x: f.touch_capable ? e.touches[0].screenX : a.screenX,
							y: f.touch_capable ? e.touches[0].screenY : a.screenY
						},
						offset: {
							x: f.touch_capable ? e.touches[0].pageX - e.touches[0].target.offsetLeft : a.offsetX,
							y: f.touch_capable ? e.touches[0].pageY - e.touches[0].target.offsetTop : a.offsetY
						},
						time: Date.now(),
						target: a.target
					};
				return c(b, "tapmove", a, g), !0
			})
		},
		remove: function() {
			a(this).off(f.moveevent, a(this).data.callee)
		}
	}, a.event.special.tapend = {
		setup: function() {
			var b = this,
				d = a(b);
			d.on(f.endevent, function(a) {
				d.data("callee", arguments.callee);
				var e = a.originalEvent,
					g = {
						position: {
							x: f.touch_capable ? e.changedTouches[0].screenX : a.screenX,
							y: f.touch_capable ? e.changedTouches[0].screenY : a.screenY
						},
						offset: {
							x: f.touch_capable ? e.changedTouches[0].pageX - e.changedTouches[0].target.offsetLeft : a.offsetX,
							y: f.touch_capable ? e.changedTouches[0].pageY - e.changedTouches[0].target.offsetTop : a.offsetY
						},
						time: Date.now(),
						target: a.target
					};
				return c(b, "tapend", a, g), !0
			})
		},
		remove: function() {
			a(this).off(f.endevent, a(this).data.callee)
		}
	}, a.event.special.taphold = {
		setup: function() {
			var b, d = this,
				e = a(d),
				g = {
					x: 0,
					y: 0
				},
				h = 0,
				i = 0;
			e.on(f.startevent, function(a) {
				if(a.which && 1 !== a.which) return !1;
				e.data("tapheld", !1), b = a.target;
				var j = a.originalEvent,
					k = Date.now(),
					l = {
						x: f.touch_capable ? j.touches[0].screenX : a.screenX,
						y: f.touch_capable ? j.touches[0].screenY : a.screenY
					},
					m = {
						x: f.touch_capable ? j.touches[0].pageX - j.touches[0].target.offsetLeft : a.offsetX,
						y: f.touch_capable ? j.touches[0].pageY - j.touches[0].target.offsetTop : a.offsetY
					};
				return g.x = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageX : a.pageX, g.y = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageY : a.pageY, h = g.x, i = g.y, f.hold_timer = window.setTimeout(function() {
					var n = g.x - h,
						o = g.y - i;
					if(a.target == b && (g.x == h && g.y == i || n >= -f.tap_pixel_range && n <= f.tap_pixel_range && o >= -f.tap_pixel_range && o <= f.tap_pixel_range)) {
						e.data("tapheld", !0);
						var p = Date.now(),
							q = {
								x: f.touch_capable ? j.touches[0].screenX : a.screenX,
								y: f.touch_capable ? j.touches[0].screenY : a.screenY
							},
							r = {
								x: f.touch_capable ? j.touches[0].pageX - j.touches[0].target.offsetLeft : a.offsetX,
								y: f.touch_capable ? j.touches[0].pageY - j.touches[0].target.offsetTop : a.offsetY
							};
						duration = p - k;
						var s = {
							startTime: k,
							endTime: p,
							startPosition: l,
							startOffset: m,
							endPosition: q,
							endOffset: r,
							duration: duration,
							target: a.target
						};
						e.data("callee1", arguments.callee), c(d, "taphold", a, s)
					}
				}, f.taphold_threshold), !0
			}).on(f.endevent, function() {
				e.data("callee2", arguments.callee), e.data("tapheld", !1), window.clearTimeout(f.hold_timer)
			}).on(f.moveevent, function(a) {
				e.data("callee3", arguments.callee), h = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageX : a.pageX, i = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageY : a.pageY
			})
		},
		remove: function() {
			a(this).off(f.startevent, a(this).data.callee1).off(f.endevent, a(this).data.callee2).off(f.moveevent, a(this).data.callee3)
		}
	}, a.event.special.doubletap = {
		setup: function() {
			var b, d, e, g, h, i = this,
				j = a(i),
				k = !1;
			j.on(f.startevent, function(a) {
				return a.which && 1 !== a.which ? !1 : (j.data("doubletapped", !1), b = a.target, j.data("callee1", arguments.callee), g = a.originalEvent, e = {
					position: {
						x: f.touch_capable ? g.touches[0].screenX : a.screenX,
						y: f.touch_capable ? g.touches[0].screenY : a.screenY
					},
					offset: {
						x: f.touch_capable ? g.touches[0].pageX - g.touches[0].target.offsetLeft : a.offsetX,
						y: f.touch_capable ? g.touches[0].pageY - g.touches[0].target.offsetTop : a.offsetY
					},
					time: Date.now(),
					target: a.target
				}, !0)
			}).on(f.endevent, function(a) {
				var g = Date.now(),
					l = j.data("lastTouch") || g + 1,
					m = g - l;
				if(window.clearTimeout(d), j.data("callee2", arguments.callee), m < f.doubletap_int && a.target == b && m > 100) {
					j.data("doubletapped", !0), window.clearTimeout(f.tap_timer);
					var n = {
							position: {
								x: f.touch_capable ? a.originalEvent.changedTouches[0].screenX : a.screenX,
								y: f.touch_capable ? a.originalEvent.changedTouches[0].screenY : a.screenY
							},
							offset: {
								x: f.touch_capable ? a.originalEvent.changedTouches[0].pageX - a.originalEvent.changedTouches[0].target.offsetLeft : a.offsetX,
								y: f.touch_capable ? a.originalEvent.changedTouches[0].pageY - a.originalEvent.changedTouches[0].target.offsetTop : a.offsetY
							},
							time: Date.now(),
							target: a.target
						},
						o = {
							firstTap: e,
							secondTap: n,
							interval: n.time - e.time
						};
					k || c(i, "doubletap", a, o), k = !0, h = window.setTimeout(function(a) {
						k = !1
					}, f.doubletap_int)
				} else j.data("lastTouch", g), d = window.setTimeout(function(a) {
					window.clearTimeout(d)
				}, f.doubletap_int, [a]);
				j.data("lastTouch", g)
			})
		},
		remove: function() {
			a(this).off(f.startevent, a(this).data.callee1).off(f.endevent, a(this).data.callee2)
		}
	}, a.event.special.singletap = {
		setup: function() {
			var b = this,
				d = a(b),
				e = null,
				g = null,
				h = {
					x: 0,
					y: 0
				};
			d.on(f.startevent, function(a) {
				return a.which && 1 !== a.which ? !1 : (g = Date.now(), e = a.target, d.data("callee1", arguments.callee), h.x = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageX : a.pageX, h.y = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageY : a.pageY, !0)
			}).on(f.endevent, function(a) {
				d.data("callee2", arguments.callee), a.target == e && (end_pos_x = a.originalEvent.changedTouches ? a.originalEvent.changedTouches[0].pageX : a.pageX, end_pos_y = a.originalEvent.changedTouches ? a.originalEvent.changedTouches[0].pageY : a.pageY, f.tap_timer = window.setTimeout(function() {
					if(!d.data("doubletapped") && !d.data("tapheld") && h.x == end_pos_x && h.y == end_pos_y) {
						var e = a.originalEvent,
							i = {
								position: {
									x: f.touch_capable ? e.changedTouches[0].screenX : a.screenX,
									y: f.touch_capable ? e.changedTouches[0].screenY : a.screenY
								},
								offset: {
									x: f.touch_capable ? e.changedTouches[0].pageX - e.changedTouches[0].target.offsetLeft : a.offsetX,
									y: f.touch_capable ? e.changedTouches[0].pageY - e.changedTouches[0].target.offsetTop : a.offsetY
								},
								time: Date.now(),
								target: a.target
							};
						i.time - g < f.taphold_threshold && c(b, "singletap", a, i)
					}
				}, f.doubletap_int))
			})
		},
		remove: function() {
			a(this).off(f.startevent, a(this).data.callee1).off(f.endevent, a(this).data.callee2)
		}
	}, a.event.special.tap = {
		setup: function() {
			var b, d, e = this,
				g = a(e),
				h = !1,
				i = null,
				j = {
					x: 0,
					y: 0
				};
			g.on(f.startevent, function(a) {
				return g.data("callee1", arguments.callee), a.which && 1 !== a.which ? !1 : (h = !0, j.x = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageX : a.pageX, j.y = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageY : a.pageY, b = Date.now(), i = a.target, d = a.originalEvent.targetTouches ? a.originalEvent.targetTouches : [a], !0)
			}).on(f.endevent, function(a) {
				g.data("callee2", arguments.callee);
				var k, l = a.originalEvent.targetTouches ? a.originalEvent.changedTouches[0].pageX : a.pageX,
					m = a.originalEvent.targetTouches ? a.originalEvent.changedTouches[0].pageY : a.pageY,
					n = j.x - l,
					o = j.y - m;
				if(i == a.target && h && Date.now() - b < f.taphold_threshold && (j.x == l && j.y == m || n >= -f.tap_pixel_range && n <= f.tap_pixel_range && o >= -f.tap_pixel_range && o <= f.tap_pixel_range)) {
					for(var p = a.originalEvent, q = [], r = 0; r < d.length; r++) {
						var s = {
							position: {
								x: f.touch_capable ? p.changedTouches[r].screenX : a.screenX,
								y: f.touch_capable ? p.changedTouches[r].screenY : a.screenY
							},
							offset: {
								x: f.touch_capable ? p.changedTouches[r].pageX - p.changedTouches[r].target.offsetLeft : a.offsetX,
								y: f.touch_capable ? p.changedTouches[r].pageY - p.changedTouches[r].target.offsetTop : a.offsetY
							},
							time: Date.now(),
							target: a.target
						};
						q.push(s)
					}
					switch(d.length) {
						case 1:
							k = "tap";
							break;
						case 2:
							k = "tap2";
							break;
						case 3:
							k = "tap3";
							break;
						case 4:
							k = "tap4"
					}
					c(e, k, a, q)
				}
			})
		},
		remove: function() {
			a(this).off(f.startevent, a(this).data.callee1).off(f.endevent, a(this).data.callee2)
		}
	}, a.event.special.swipe = {
		setup: function() {
			function b(b) {
				h = a(b.target), h.data("callee1", arguments.callee), k.x = b.originalEvent.targetTouches ? b.originalEvent.targetTouches[0].pageX : b.pageX, k.y = b.originalEvent.targetTouches ? b.originalEvent.targetTouches[0].pageY : b.pageY, l.x = k.x, l.y = k.y, i = !0;
				var c = b.originalEvent;
				e = {
					position: {
						x: f.touch_capable ? c.touches[0].screenX : b.screenX,
						y: f.touch_capable ? c.touches[0].screenY : b.screenY
					},
					offset: {
						x: f.touch_capable ? c.touches[0].pageX - c.touches[0].target.offsetLeft : b.offsetX,
						y: f.touch_capable ? c.touches[0].pageY - c.touches[0].target.offsetTop : b.offsetY
					},
					time: Date.now(),
					target: b.target
				}
			}

			function c(b) {
				h = a(b.target), h.data("callee2", arguments.callee), l.x = b.originalEvent.targetTouches ? b.originalEvent.targetTouches[0].pageX : b.pageX, l.y = b.originalEvent.targetTouches ? b.originalEvent.targetTouches[0].pageY : b.pageY;
				var c, d = h.data("xthreshold"),
					g = h.data("ythreshold"),
					m = "undefined" != typeof d && d !== !1 && parseInt(d) ? parseInt(d) : f.swipe_h_threshold,
					n = "undefined" != typeof g && g !== !1 && parseInt(g) ? parseInt(g) : f.swipe_v_threshold;
				if(k.y > l.y && k.y - l.y > n && (c = "swipeup"), k.x < l.x && l.x - k.x > m && (c = "swiperight"), k.y < l.y && l.y - k.y > n && (c = "swipedown"), k.x > l.x && k.x - l.x > m && (c = "swipeleft"), void 0 != c && i) {
					k.x = 0, k.y = 0, l.x = 0, l.y = 0, i = !1;
					var o = b.originalEvent;
					endEvnt = {
						position: {
							x: f.touch_capable ? o.touches[0].screenX : b.screenX,
							y: f.touch_capable ? o.touches[0].screenY : b.screenY
						},
						offset: {
							x: f.touch_capable ? o.touches[0].pageX - o.touches[0].target.offsetLeft : b.offsetX,
							y: f.touch_capable ? o.touches[0].pageY - o.touches[0].target.offsetTop : b.offsetY
						},
						time: Date.now(),
						target: b.target
					};
					var p = Math.abs(e.position.x - endEvnt.position.x),
						q = Math.abs(e.position.y - endEvnt.position.y),
						r = {
							startEvnt: e,
							endEvnt: endEvnt,
							direction: c.replace("swipe", ""),
							xAmount: p,
							yAmount: q,
							duration: endEvnt.time - e.time
						};
					j = !0, h.trigger("swipe", r).trigger(c, r)
				}
			}

			function d(b) {
				h = a(b.target);
				var c = "";
				if(h.data("callee3", arguments.callee), j) {
					var d = h.data("xthreshold"),
						g = h.data("ythreshold"),
						k = "undefined" != typeof d && d !== !1 && parseInt(d) ? parseInt(d) : f.swipe_h_threshold,
						l = "undefined" != typeof g && g !== !1 && parseInt(g) ? parseInt(g) : f.swipe_v_threshold,
						m = b.originalEvent;
					endEvnt = {
						position: {
							x: f.touch_capable ? m.changedTouches[0].screenX : b.screenX,
							y: f.touch_capable ? m.changedTouches[0].screenY : b.screenY
						},
						offset: {
							x: f.touch_capable ? m.changedTouches[0].pageX - m.changedTouches[0].target.offsetLeft : b.offsetX,
							y: f.touch_capable ? m.changedTouches[0].pageY - m.changedTouches[0].target.offsetTop : b.offsetY
						},
						time: Date.now(),
						target: b.target
					}, e.position.y > endEvnt.position.y && e.position.y - endEvnt.position.y > l && (c = "swipeup"), e.position.x < endEvnt.position.x && endEvnt.position.x - e.position.x > k && (c = "swiperight"), e.position.y < endEvnt.position.y && endEvnt.position.y - e.position.y > l && (c = "swipedown"), e.position.x > endEvnt.position.x && e.position.x - endEvnt.position.x > k && (c = "swipeleft");
					var n = Math.abs(e.position.x - endEvnt.position.x),
						o = Math.abs(e.position.y - endEvnt.position.y),
						p = {
							startEvnt: e,
							endEvnt: endEvnt,
							direction: c.replace("swipe", ""),
							xAmount: n,
							yAmount: o,
							duration: endEvnt.time - e.time
						};
					h.trigger("swipeend", p)
				}
				i = !1, j = !1
			}
			var e, g = this,
				h = a(g),
				i = !1,
				j = !1,
				k = {
					x: 0,
					y: 0
				},
				l = {
					x: 0,
					y: 0
				};
			h.on(f.startevent, b), h.on(f.moveevent, c), h.on(f.endevent, d)
		},
		remove: function() {
			a(this).off(f.startevent, a(this).data.callee1).off(f.moveevent, a(this).data.callee2).off(f.endevent, a(this).data.callee3)
		}
	}, a.event.special.scrollstart = {
		setup: function() {
			function b(a, b) {
				d = b, c(g, d ? "scrollstart" : "scrollend", a)
			}
			var d, e, g = this,
				h = a(g);
			h.on(f.scrollevent, function(a) {
				h.data("callee", arguments.callee), d || b(a, !0), clearTimeout(e), e = setTimeout(function() {
					b(a, !1)
				}, 50)
			})
		},
		remove: function() {
			a(this).off(f.scrollevent, a(this).data.callee)
		}
	};
	var g, h, i, j, k, l = a(window),
		m = {
			0: !0,
			180: !0
		};
	if(f.orientation_support) {
		var n = window.innerWidth || l.width(),
			o = window.innerHeight || l.height(),
			p = 50;
		j = n > o && n - o > p, k = m[window.orientation], (j && k || !j && !k) && (m = {
			"-90": !0,
			90: !0
		})
	}
	a.event.special.orientationchange = g = {
		setup: function() {
			return f.orientation_support ? !1 : (i = h(), l.on("throttledresize", b), !0)
		},
		teardown: function() {
			return f.orientation_support ? !1 : (l.off("throttledresize", b), !0)
		},
		add: function(a) {
			var b = a.handler;
			a.handler = function(a) {
				return a.orientation = h(), b.apply(this, arguments)
			}
		}
	}, a.event.special.orientationchange.orientation = h = function() {
		var a = !0,
			b = document.documentElement;
		return a = f.orientation_support ? m[window.orientation] : b && b.clientWidth / b.clientHeight < 1.1, a ? "portrait" : "landscape"
	}, a.event.special.throttledresize = {
		setup: function() {
			a(this).on("resize", u)
		},
		teardown: function() {
			a(this).off("resize", u)
		}
	};
	var q, r, s, t = 250,
		u = function() {
			r = Date.now(), s = r - v, s >= t ? (v = r, a(this).trigger("throttledresize")) : (q && window.clearTimeout(q), q = window.setTimeout(b, t - s))
		},
		v = 0;
	a.each({
		scrollend: "scrollstart",
		swipeup: "swipe",
		swiperight: "swipe",
		swipedown: "swipe",
		swipeleft: "swipe",
		swipeend: "swipe",
		tap2: "tap"
	}, function(b, c, d) {
		a.event.special[b] = {
			setup: function() {
				a(this).on(c, a.noop)
			}
		}
	})
}(jQuery);
var CircleAndLine = function(a, b) {
	var c = this;
	c.index = b, c.object = new paper.Path.Circle(a, 3), c.object.strokeWidth = 1, c.object.strokeColor = new paper.Color(1, 1, 1, .2), c.circleWidthOriginal = 6, c.circleWidthCurrent = 6, c.circleWidthTarget = 6, c.circleAlphaOriginal = .2, c.circleAlphaCurrent = .2, c.circleAlphaTarget = .2, c.circleAnimating = !1;
	var d = a.x,
		e = a.y,
		f = 0 === getRandomInt(0, 1) ? -97 : 97,
		g = 0 === getRandomInt(0, 1) ? -97 : 97;
	d += f > 0 ? 2 : -2, e += g > 0 ? 2 : -2;
	var h = new paper.Point(d, e);
	c.line = new paper.Path.Line(h, h.add(f, g)), c.line.strokeColor = new paper.Color(1, 1, 1, 1), c.line.pivot = a, c.line.scaling = .01, c.line.opacity = 0, c.lineScalingOriginal = .01, c.lineScalingCurrent = .01, c.lineScalingTarget = .01, c.lineOpacityOriginal = 0, c.lineOpacityCurrent = 0, c.lineOpacityTarget = 0, c.lineAnimating = !1
};
CircleAndLine.prototype.init = function() {}, CircleAndLine.prototype.destroy = function() {}, CircleAndLine.prototype.changeWidth = function(a) {
	var b = this,
		c = (b.object.bounds.width, a / b.object.bounds.width);
	b.object.scale(c)
}, CircleAndLine.prototype.scaleCircle = function(a) {
	var b = this;
	b.circleWidthTarget = a, b.circleAlphaTarget = .5
}, CircleAndLine.prototype.scaleLine = function() {
	var a = this;
	a.lineScalingTarget = 1, a.lineOpacityTarget = .5
}, CircleAndLine.prototype.update = function() {
	var a = this;
	Math.abs(a.circleWidthTarget - a.circleWidthCurrent) > .5 ? (a.circleWidthCurrent = Math.round(100 * (a.circleWidthCurrent + .08 * (a.circleWidthTarget - a.circleWidthCurrent))) / 100, a.changeWidth(a.circleWidthCurrent), a.circleAlphaCurrent = Math.round(100 * (a.circleAlphaCurrent + .08 * (a.circleAlphaTarget - a.circleAlphaCurrent))) / 100, a.object.strokeColor.alpha = a.circleAlphaCurrent, a.circleAnimating || (a.circleAnimating = !0)) : a.circleAnimating && (setTimeout(function() {
		a.circleWidthTarget = a.circleWidthOriginal, a.circleAlphaTarget = a.circleAlphaOriginal
	}, 300), a.circleAnimating = !1), Math.abs(a.lineScalingTarget - a.lineScalingCurrent) > .005 ? (a.lineScalingCurrent = Math.round(1e3 * (a.lineScalingCurrent + .1 * (a.lineScalingTarget - a.lineScalingCurrent))) / 1e3, a.line.scaling = a.lineScalingCurrent, a.lineOpacityCurrent = Math.round(1e3 * (a.lineOpacityCurrent + .1 * (a.lineOpacityTarget - a.lineOpacityCurrent))) / 1e3, a.line.opacity = a.lineOpacityCurrent, a.lineAnimating || (a.lineAnimating = !0)) : a.lineAnimating && (setTimeout(function() {
		a.lineScalingTarget = a.lineScalingOriginal, a.lineOpacityTarget = a.lineOpacityOriginal
	}, 1e3), a.lineAnimating = !1)
}, CircleAndLine.prototype.resize = function() {};
var AbstractPage = function(a, b, c, d) {
	c = c || "page";
	var e = this;
	e.init(a, b, c, d), e.initEvents()
};
AbstractPage.prototype.init = function(a, b, c, d) {
	var e = this;
	e.id = a, e.context = b, e.type = c, e.isHome = d, e.imagesToLoadLength = 0, e.header = null, e.carousel = null, e.group = !1, e.onResizeDebounce = debounce($.proxy(e.onResize, e), 100, !1), e.loadDurationMin = "static" == b ? 6e3 : 800, e.fullLoading = !1, this.pageHeight = 0, this.scrollTopEnd = 0, this.scrollTopLimitFooter = 0, this.isFirstResize = !0, this.RAF = null, this.onScrollElements = [], ("error-404" == e.id || "maintenance" == e.id) && (RZ3.ajaxEnabled = !1), e.$cont = $("#page-content-" + e.id), e.$breadcrumb = $("#breadcrumb-" + e.id), e.$breadcrumbLink = e.$breadcrumb.find("a"), this.footerHeight = 470, this.footerVisible = !1, this.navHeaderPosition = "top", e.$header = e.$cont.find(".page-header"), e.$header.length && (e.header = new PageHeader(e.$header[0].id), RZ3.isMobile || this.onScrollElements.push(this.header)), RZ3.$window.scrollTop() > 0 ? (TweenLite.to(RZ3.$window, .2, {
		scrollTo: {
			y: 0,
			autoKill: !1
		}
	}), setTimeout(function() {
		e.scrollReady = !0, RZ3.$window.trigger("resize")
	}, 300)) : e.scrollReady = !0, e.scrollEnabled = !1, e.scrollTop = 0, e.scrollTopPrev = 0, e.color = e.$cont[0].getAttribute("data-color"), e.$cont.length ? e.$link = e.$cont.find("a").not('[target="_blank"]') : e.$link = null, null !== e.$link && e.$link.length && (externalLinkTarget(e.$link, RZ3.baseUrl), e.$link = e.$cont.find("a").not('[target="_blank"]')), e.blocks = [], e.$blocks = e.$cont.find(".page-blocks"), e.$block = e.$cont.find(".page-block"), e.blockLength = e.$block.length, e.blockLength && e.initBlocks(), this.$blocksTrame = this.$blocks.find(".page-blocks-trame")[0], "static" == e.context ? ("error-404" !== e.id && "maintenance" !== e.id && disableScroll(), e.showStaticLoader(), setTimeout(function() {
		removeClass(RZ3.$loading[0], "static-loading")
	}, 200), "" !== e.color && setTimeout(function() {
		addClass(RZ3.nav.$header[0], "custom-color")
	}, 0), "roadiz" === e.id && addClass(RZ3.nav.$header[0], "navbar-header-roadiz"), setTimeout(function() {
		e.header.moveNavHeader()
	}, 0), RZ3.ajaxEnabled && RZ3.history.pushFirstState(e.id, e.type, e.isHome)) : "ajax" == e.context && e.initAjax()
}, AbstractPage.prototype.destroy = function() {
	var a = this;
	if(RZ3.history.transition = !1, a.$cont.remove(), a.$breadcrumb.remove(), a.destroyEvents(), null !== a.blocks)
		for(var b = 0; b < a.blockLength; b++) a.blocks[b].destroy();
	null !== a.header && a.header.destroy(), null !== a.carousel && a.carousel.destroy()
}, AbstractPage.prototype.initEvents = function() {
	var a = this;
	a.$cont.waitForImages({
		finished: $.proxy(a.onLoad, a),
		waitForAll: !0
	}), null !== a.$link && RZ3.ajaxEnabled && a.$link.on("click", $.proxy(RZ3.history.linkClick, RZ3.history)), a.$breadcrumbLink.on("click", $.proxy(a.breadcrumbLinkClick, a)), RZ3.$window.on("resize", a.onResizeDebounce), isMediaMinSM() && (RZ3.isMobile || setTimeout(function() {
		a.scrollEnabled = !0, a.onScrollHandler()
	}, 0)), this.onNavOpenCb = this.onNavOpen.bind(this), RZ3.nav.on("open", this.onNavOpenCb), this.onNavCloseCb = this.onNavClose.bind(this), RZ3.nav.on("close", this.onNavCloseCb)
}, AbstractPage.prototype.destroyEvents = function() {
	var a = this;
	null !== a.$link && RZ3.ajaxEnabled && a.$link.off("click", $.proxy(RZ3.history.linkClick, RZ3.history)), a.$breadcrumbLink.off("click", $.proxy(a.breadcrumbLinkClick, a)), RZ3.$window.off("resize", a.onResizeDebounce), null !== a.RAF && cancelAnimFrame(a.RAF), RZ3.nav.off("open", this.onNavOpenCb)
}, AbstractPage.prototype.imagesLoadProgress = function(a) {
	var b = this;
	if(b.imagesToLoadLength > 0) {
		var c = Math.round(a / b.imagesToLoadLength * 100);
		100 == c && b.imagesLoadFinish()
	} else b.imagesLoadFinish()
}, AbstractPage.prototype.onLoad = function(a) {
	var b = this;
	b.loadDate = new Date, b.loadDuration = b.loadDate - RZ3.history.loadBeginDate;
	var c = b.loadDuration > b.loadDurationMin ? 0 : b.loadDurationMin - b.loadDuration;
	setTimeout(function() {
		if("static" == b.context) b.hideStaticLoader();
		else {
			RZ3.nav.animateaHeaderOut(), removeClass(RZ3.nav.$header[0], "navbar-header-loading"), setTimeout(function() {
				b.header.moveNavHeader()
			}, 800), "" !== b.color && "" === RZ3.formerPage.color ? addClass(RZ3.nav.$header[0], "custom-color") : "" === b.color && "" !== RZ3.formerPage.color && removeClass(RZ3.nav.$header[0], "custom-color"), "roadiz" === b.id ? addClass(RZ3.nav.$header[0], "navbar-header-roadiz") : "roadiz" === RZ3.formerPage.id && removeClass(RZ3.nav.$header[0], "navbar-header-roadiz"), RZ3.$body[0].id = b.id;
			var a = 0;
			RZ3.$window.scrollTop() > 0 && (a = 800, TweenLite.to(RZ3.$window, .8, {
				scrollTo: {
					y: 0,
					autoKill: !1
				}
			})), setTimeout(function() {
				RZ3.formerPage.hide($.proxy(RZ3.formerPage.destroy, RZ3.formerPage)), b.show($.proxy(b.showEnded, b))
			}, a)
		}
	}, c)
}, AbstractPage.prototype.showStaticLoader = function() {
	var a = this;
	if(null === document.cookie.match(new RegExp("shouldDisplayLoading=([^;]+)")) || this.isHome) {
		if(a.fullLoading = !0, null === document.cookie.match(new RegExp("shouldDisplayLoading=([^;]+)"))) {
			var b = new Date;
			b.setFullYear(b.getFullYear() + 1), document.cookie = "shouldDisplayLoading=y; expires=" + b.toGMTString()
		}
	} else a.loadDurationMin = 3e3;
	TweenLite.to(RZ3.$loadingImage, 1.4, {
		opacity: 1,
		delay: .2
	}), TweenLite.to(RZ3.$bgCanvas, 1, {
		opacity: 1,
		delay: .8
	}), setTimeout(function() {
		a.fullLoading ? addClass(RZ3.$loading[0], "active") : addClass(RZ3.$loading[0], "active-quick")
	}, 400), setTimeout(function() {
		RZ3.$window.trigger("resize")
	}, 700)
}, AbstractPage.prototype.hideStaticLoader = function() {
	TweenLite.to(RZ3.$loading, 1, {
		opacity: 0,
		onComplete: this.onHideStaticLoaderComplete
	}), isMediaMinSM() && "maintenance" !== this.id && TweenMax.from(RZ3.nav.$header, 1, {
		xPercent: -100,
		ease: Expo.easeOut,
		delay: .2
	}), setTimeout(function() {
		removeClass(RZ3.$body[0], "static")
	}, 500)
}, AbstractPage.prototype.onHideStaticLoaderComplete = function() {
	RZ3.$loading[0].style.display = "none", "error-404" !== this.id && "maintenance" !== this.id && setTimeout(function() {
		RZ3.$loading[0].style.opacity = "1", RZ3.bgCanvas.pause(), enableScroll(), RZ3.$window.trigger("resize")
	}, 100)
}, AbstractPage.prototype.show = function(a) {
	var b = this;
	TweenLite.to(b.$cont, .6, {
		opacity: 1,
		onComplete: function() {
			"undefined" != typeof a && a()
		}
	}), this.showBreadcrumb()
}, AbstractPage.prototype.showBreadcrumb = function(a) {
	var b = this,
		c = RZ3.formerPage.$breadcrumb.find(".breadcrumb-item"),
		d = b.$breadcrumb.find(".breadcrumb-item"),
		e = c[1].getAttribute("data-node-id"),
		f = d[1].getAttribute("data-node-id"),
		g = e === f;
	!RZ3.formerPage || RZ3.formerPage.$breadcrumb.hasClass("breadcrumb-baseline") && this.$breadcrumb.hasClass("breadcrumb-baseline") || c.length === d.length && g ? TweenMax.set(this.$breadcrumb, {
		visibility: "visible"
	}) : setTimeout(function() {
		var a = new TimelineMax;
		a.set(b.$breadcrumb, {
			visibility: "visible"
		}).set(RZ3.formerPage.$breadcrumb, {
			visibility: "hidden"
		}), b.$breadcrumb.hasClass("breadcrumb-baseline") && a.from(b.$breadcrumb.find(".breadcrumb-long-arrow"), .3, {
			opacity: 0,
			x: "-=20",
			ease: Expo.easeOut
		}).from(d[1], .5, {
			opacity: 0,
			x: "-=20",
			ease: Expo.easeOut
		}, "-=.2"), RZ3.formerPage.$breadcrumb.hasClass("breadcrumb-baseline") && a.from(b.$breadcrumb.find(".breadcrumb-small-arrow"), .3, {
			opacity: 0,
			x: "-=20",
			ease: Expo.easeOut
		}), b.$breadcrumb.hasClass("breadcrumb-baseline") || g || a.from(d[1], .5, {
			opacity: 0,
			x: "-=20",
			ease: Expo.easeOut
		}, "-=.2"), 3 === d.length && (2 === c.length && a.from(b.$breadcrumb.find(".breadcrumb-chevron"), .3, {
			opacity: 0,
			x: "-=20",
			ease: Expo.easeOut
		}), a.from(b.$breadcrumb.find(".breadcrumb-item.active"), .5, {
			opacity: 0,
			x: "-=20",
			ease: Expo.easeOut
		}, "-=.2"))
	}, 600)
}, AbstractPage.prototype.showEnded = function() {
	var a = this;
	"ajax" == a.context && (a.onResize(), removeClass(a.$cont[0], "page-content-ajax"), RZ3.nav.opened || TweenLite.to(RZ3.$footer, .6, {
		opacity: 1
	}))
}, AbstractPage.prototype.hide = function(a) {
	var b = this;
	TweenLite.to(b.$cont, .6, {
		opacity: 0,
		onComplete: function() {
			"undefined" != typeof a && a()
		}
	}), this.hideBreadcrumb(), b.hideBlocks()
}, AbstractPage.prototype.hideBlocks = function() {
	var a = this;
	if(null !== a.blocks)
		for(var b = 0; b < a.blockLength; b++) a.blocks[b].hide()
}, AbstractPage.prototype.hideBreadcrumb = function() {
	var a = this.$breadcrumb.find(".breadcrumb-item"),
		b = RZ3.page.$breadcrumb.find(".breadcrumb-item"),
		c = a[1].getAttribute("data-node-id"),
		d = b[1].getAttribute("data-node-id"),
		e = c === d;
	if(RZ3.formerPage.$breadcrumb.hasClass("breadcrumb-baseline") && RZ3.page.$breadcrumb.hasClass("breadcrumb-baseline") || a.length === b.length && e) TweenMax.set(this.$breadcrumb, {
		visibility: "hidden"
	});
	else {
		var f = new TimelineMax;
		this.$breadcrumb.hasClass("breadcrumb-baseline") && f.to(this.$breadcrumb.find(".breadcrumb-long-arrow"), .2, {
			opacity: 0,
			x: "-=20"
		}).to(a[1], .2, {
			opacity: 0,
			x: "-=20"
		}, "-=.1"), 3 === a.length && (f.to(a[2], .2, {
			opacity: 0,
			x: "-=20"
		}), 2 === b.length && f.to(this.$breadcrumb.find(".breadcrumb-chevron"), .2, {
			opacity: 0,
			x: "-=20"
		}, "-=.1")), e || f.to(a[1], .2, {
			opacity: 0,
			x: "-=20",
			ease: Expo.easeOut
		}), RZ3.page.$breadcrumb.hasClass("breadcrumb-baseline") && f.to(this.$breadcrumb.find(".breadcrumb-small-arrow"), .2, {
			opacity: 0,
			x: "-=20"
		})
	}
}, AbstractPage.prototype.initAjax = function() {
	var a = this;
	if(setTimeout(function() {
			a.onResize()
		}, 100), a.$cont.length && "" !== a.$cont[0].getAttribute("data-meta-title")) {
		var b = a.$cont[0].getAttribute("data-meta-title");
		null !== b && "" !== b && (document.title = b)
	}
}, AbstractPage.prototype.initBlocks = function() {
	for(var a = this, b = 0; b < a.blockLength; b++) {
		var c = a.$block[b].getAttribute("data-node-type"),
			d = a.$block[b].id;
		"undefined" != typeof RZ3.nodeTypesClasses[c] ? (a.blocks[b] = new window[RZ3.nodeTypesClasses[c]](d, c), "function" == typeof a.blocks[b].onScroll && this.onScrollElements.push(a.blocks[b])) : a.blocks[b] = new AbstractBlock(d, c)
	}
}, AbstractPage.prototype.getTranslate3d = function(a) {
	return RZ3.isIE ? "translate(0," + a + "px)" : "translate3d(0," + a + "px,0)"
}, AbstractPage.prototype.onResize = function() {
	this.isFirstResize = !1, this.footerHeight = RZ3.$footer.actual("outerHeight"), this.pageHeight = this.$cont.height(), this.scrollTopEnd = this.pageHeight - (RZ3.windowSize.height - this.footerHeight), this.scrollTopLimitFooter = this.scrollTopEnd - this.footerHeight, null !== this.header && this.header.resize();
	for(var a = 0, b = this.blocks.length; b > a; a++) this.blocks[a].resize()
}, AbstractPage.prototype.onScrollHandler = function() {
	var a = this,
		b = document.documentElement.scrollTop || document.body.scrollTop;
	if(a.scrollTop = b, a.scrollTop === a.scrollTopPrev || a.scrollEnabled || (a.scrollEnabled = !0), a.scrollEnabled) {
		for(var c = 0, d = this.onScrollElements.length; d > c; c++) this.onScrollElements[c].onScroll(b);
		this.$blocksTrame && "error-404" !== a.id && (this.$blocksTrame.style.transform = this.getTranslate3d(.3 * b)), a.scrollReady && (b > this.scrollTopLimitFooter ? this.footerVisible || "centered" != RZ3.nav.headerPosition || (this.footerVisible = !0, RZ3.nav.animateHeader("footer"), "" !== this.color && addClass(RZ3.nav.$header[0], "custom-color-standby")) : this.footerVisible && "footer" == RZ3.nav.headerPosition && (RZ3.nav.animateHeader("centered"), this.footerVisible = !1, "" !== this.color && removeClass(RZ3.nav.$header[0], "custom-color-standby")))
	}
	a.scrollTopPrev = b, RZ3.isMobile || (a.RAF = requestAnimFrame($.proxy(a.onScrollHandler, a)))
}, AbstractPage.prototype.resetScroll = function() {
	var a = this;
	null !== a.header && a.header.resetScroll()
}, AbstractPage.prototype.enableScroll = function() {
	RZ3.$body[0].removeAttribute("style")
}, AbstractPage.prototype.disableScroll = function() {
	RZ3.$body[0].style.overflow = "hidden", isMediaMinSM() || (RZ3.$body[0].style.position = "fixed", RZ3.$body[0].style.width = RZ3.windowSize.width + "px", RZ3.$body[0].style.height = RZ3.windowSize.height + "px")
}, AbstractPage.prototype.breadcrumbLinkClick = function(a) {
	a.preventDefault();
	var b = 0;
	RZ3.nav.opened && (RZ3.nav.close("linkClick"), b = 1e3), setTimeout(function() {
		RZ3.history.linkClick(a)
	}, b)
}, AbstractPage.prototype.onScroll = function(a) {
	var b = this;
	this.isFirstResize || b.onScrollHandler()
}, AbstractPage.prototype.onNavOpen = function() {
	this.disableScroll(), this.header && this.header.onNavOpen()
}, AbstractPage.prototype.onNavClose = function() {
	this.enableScroll(), this.header && this.header.onNavClose()
};
var Home = function(a, b, c) {
	AbstractPage.call(this, a, b, "page", c)
};
$.extend(Home.prototype, AbstractPage.prototype), Home.prototype.init = function(a, b, c, d) {
	var e = this;
	AbstractPage.prototype.init.call(this, a, b, c, d), e.$blocksInner = e.$blocks.find(".page-blocks-inner")
}, Home.prototype.destroy = function() {
	var a = this;
	AbstractPage.prototype.destroy.call(a)
}, Home.prototype.show = function(a) {
	var b = this;
	"ajax" == b.context ? b.showHome(a) : (b.$header[0].style.opacity = 1, AbstractPage.prototype.show.call(this, a))
}, Home.prototype.hide = function(a) {
	var b = this;
	null !== history.state ? (RZ3.$loading[0].style.display = "none", TweenLite.to(RZ3.$footer, .6, {
		opacity: 0
	}), "page_to_project" == history.state.transition ? b.hideHomeToProject(a) : b.hideHome(a), b.hideBlocks()) : AbstractPage.prototype.hide.call(this, a)
}, Home.prototype.showHome = function(a) {
	var b = this,
		c = 3e3;
	this.showBreadcrumb(), RZ3.$loading[0].style.display = "block", addClass(RZ3.$loading[0], "ajax-home"), addClass(b.$header[0], "no-transition"), addClass(b.$header[0], "page-header-bar-hidden"), TweenLite.to(b.$cont, 1.2, {
		opacity: 1,
		onComplete: function() {
			null !== RZ3.page.carousel && RZ3.page.carousel.openCurrentItem()
		}
	}), setTimeout(function() {
		removeClass(b.$header[0], "no-transition"), removeClass(b.$header[0], "page-header-bar-hidden")
	}, 800), setTimeout(function() {
		removeClass(RZ3.$loading[0], "ajax-home"), "undefined" != typeof a && a()
	}, c)
}, Home.prototype.hideHomeToProject = function(a) {
	var b = this,
		c = 3100;
	this.hideBreadcrumb();
	var d = b.carousel.items[b.carousel.currentItemIndex],
		e = parseInt(d.$text.css("bottom")),
		f = e - 240 - 50;
	TweenLite.to(d.$link, .4, {
		opacity: 0
	}), TweenLite.to(d.$subtitleLine, .4, {
		scaleX: 0
	}), TweenLite.to(d.$title, .9, {
		y: f,
		ease: Quart.easeOut,
		delay: .4
	}), TweenLite.to(d.$subtitle, .8, {
		y: f,
		ease: Quart.easeOut,
		delay: .5
	}), TweenLite.to(d.$icon, .9, {
		y: f,
		ease: Expo.easeOut,
		delay: .4
	}), setTimeout(function() {
		addClass(b.$header[0], "page-header-bar-hidden")
	}, 500), setTimeout(function() {
		"undefined" != typeof a && a()
	}, c)
}, Home.prototype.hideHome = function(a) {
	var b = this,
		c = 2800;
	this.hideBreadcrumb(), addClass(b.$header[0], "page-header-bar-hidden"), TweenLite.to(b.$header, 1.2, {
		opacity: 0,
		delay: .6
	}), setTimeout(function() {
		"undefined" != typeof a && a()
	}, c)
}, Home.prototype.hideStaticLoader = function() {
	this.onHideStaticLoaderComplete(), removeClass(RZ3.$body[0], "static"), isMediaMinSM() && (TweenMax.from(RZ3.nav.$header, 1, {
		xPercent: -100,
		ease: Expo.easeOut,
		delay: .7
	}), RZ3.nav.$header[0].style.zIndex = 70), RZ3.page.carousel && (RZ3.page.carousel.eventsReady = !0, RZ3.page.carousel.initEvents())
}, Home.prototype.onHideStaticLoaderComplete = function() {
	null !== RZ3.page.carousel && RZ3.page.carousel.openCurrentItem();
	var a = RZ3.isMobile ? 0 : 1e3;
	setTimeout(function() {
		null !== RZ3.bgCanvas && RZ3.bgCanvas.pause(), enableScroll(), RZ3.$window.trigger("resize")
	}, a)
};
var RZPage = function(a, b, c) {
	AbstractPage.call(this, a, b, "page", c)
};
$.extend(RZPage.prototype, AbstractPage.prototype), RZPage.prototype.init = function(a, b, c, d) {
	var e = this;
	AbstractPage.prototype.init.call(this, a, b, c, d), e.$blocksInner = e.$blocks.find(".page-blocks-inner"), e.$contentTextCont = e.$cont.find(".page-content-text > .container"), e.group = 1 == Number(e.$cont[0].getAttribute("data-page-group")) ? !0 : !1, e.group && (e.parentNodeName = e.$cont[0].getAttribute("data-parent-nodename")), e.group && (e.$headerNav = e.$cont.find(".page-header-nav"), e.$headerNavLink = e.$cont.find(".page-header-nav-link"), e.$headerNavLinkActive = e.$cont.find(".active"), e.$headerNavLinkActive.length ? e.groupIndex = Number(e.$headerNavLinkActive[0].getAttribute("data-index")) : e.groupIndex = null)
}, RZPage.prototype.show = function(a) {
	var b = this;
	"ajax" == b.context ? "page_to_page" == history.state.transition && "header-nav" == history.state.context && b.group ? b.showPageGroupToPageGroup(a) : b.showPageToPage(a) : (b.$header[0].style.opacity = 1, AbstractPage.prototype.show.call(this, a))
}, RZPage.prototype.hide = function(a) {
	var b = this;
	null !== history.state ? (TweenLite.to(RZ3.$footer, .6, {
		opacity: 0
	}), "page_to_page" == history.state.transition && "header-nav" == history.state.context && b.group ? b.hidePageGroupToPageGroup(a) : b.hidePageToPage(a), b.hideBlocks()) : AbstractPage.prototype.hide.call(this, a)
}, RZPage.prototype.showPageGroupToPageGroup = function(a) {
	var b = this,
		c = 800;
	this.showBreadcrumb(), TweenLite.to(b.$header, .6, {
		opacity: 1
	}), b.$cont[0].style.opacity = 1;
	var d = $(b.$blocks[0]).actual("outerWidth");
	RZ3.formerRZPage && b.groupIndex < RZ3.formerRZPage.groupIndex && (d *= -1), TweenLite.fromTo(b.$blocksInner, .8, {
		x: d,
		opacity: 0
	}, {
		x: 0,
		opacity: 1
	}), setTimeout(function() {
		"undefined" != typeof a && a()
	}, c)
}, RZPage.prototype.hidePageGroupToPageGroup = function(a) {
	var b = this,
		c = 800;
	this.hideBreadcrumb();
	var d = .66 * $(b.$blocks[0]).actual("outerWidth");
	b.groupIndex < history.state.index && (d *= -1), TweenLite.to(b.$blocksInner, .8, {
		x: d,
		opacity: 0
	}), setTimeout(function() {
		"undefined" != typeof a && a()
	}, c)
}, RZPage.prototype.showPageToPage = function(a) {
	var b = this,
		c = 3e3;
	this.showBreadcrumb(), b.$cont[0].style.opacity = 1, TweenLite.fromTo(b.$header, 1, {
		opacity: 0
	}, {
		opacity: 1,
		delay: .2
	}), addClass(b.header.$title[0], "no-transition"), addClass(b.header.$title[0], "page-title-hide"), setTimeout(function() {
		removeClass(b.header.$title[0], "no-transition"), removeClass(b.header.$title[0], "page-title-hide")
	}, 1200), TweenLite.fromTo(b.header.$titleText, .8, {
		opacity: 0,
		x: -30
	}, {
		opacity: 1,
		x: 0,
		delay: 1
	}), b.group && TweenLite.fromTo(b.$headerNav, .8, {
		opacity: 0,
		x: -15
	}, {
		opacity: 1,
		x: 0,
		delay: 1.2
	}), TweenLite.fromTo(b.$blocks, 1, {
		opacity: 0
	}, {
		opacity: 1,
		delay: .2
	}), TweenLite.fromTo(b.$blocksInner, 1, {
		y: 50,
		opacity: 0
	}, {
		y: 0,
		opacity: 1,
		delay: 1.6
	}), b.$contentTextCont.length && TweenLite.fromTo(this.$contentTextCont, 1, {
		y: 50,
		opacity: 0
	}, {
		y: 0,
		opacity: 1,
		delay: 1.6
	}), setTimeout(function() {
		"undefined" != typeof a && a()
	}, c)
}, RZPage.prototype.hidePageToPage = function(a) {
	var b = this,
		c = 3e3;
	this.hideBreadcrumb(), addClass(b.header.$title[0], "page-title-hide"), TweenLite.to(b.header.$titleText, .6, {
		opacity: 0
	}), b.group && TweenLite.to(b.$headerNav, .6, {
		opacity: 0
	}), TweenLite.to(b.$blocksInner, .6, {
		opacity: 0
	}), history.state.isHome && (TweenLite.to(b.$cont, .6, {
		opacity: 0
	}), c = 1e3), setTimeout(function() {
		"undefined" != typeof a && a()
	}, c)
};
var RZProjects = function(a, b, c) {
	AbstractPage.call(this, a, b, "projectfeed", c)
};
$.extend(RZProjects.prototype, AbstractPage.prototype), RZProjects.prototype.init = function(a, b, c, d) {
	var e = this;
	AbstractPage.prototype.init.call(this, a, b, c, d), e.filterType = e.$cont[0].getAttribute("data-filter-type"), e.group = !0, e.$headerNav = e.$cont.find(".page-header-nav"), e.$headerNavLink = e.$headerNav.find(".page-header-nav-link"), e.$headerNavLinkActive = e.$headerNav.find(".active"), e.$headerNavLinkActive.length ? e.groupIndex = Number(e.$headerNavLinkActive[0].getAttribute("data-index")) : e.groupIndex = null, e.$tagNav = e.$cont.find(".projects-tag-nav"), e.$tagNav.length ? (e.$tagNavLinkActive = e.$tagNav.find(".active"), e.tagIndex = Number(e.$tagNavLinkActive[0].getAttribute("data-index"))) : e.tagIndex = null, e.$blocksInner = e.$blocks.find(".page-blocks-inner"), e.$blocksInnerRow = e.$blocksInner.find(".row"), e.$excerptLink = e.$cont.find(".project-excerpt-link"), e.$excerpt = e.$cont.find(".project-excerpt"), e.$linkArchivesLoadMore = e.$cont.find(".projects-link-archives-load-more"), e.$archivesTemp = e.$cont.find(".archives-temp")
}, RZProjects.prototype.initEvents = function() {
	var a = this;
	AbstractPage.prototype.initEvents.call(a), RZ3.isMobile ? a.$excerpt.addClass("in-view") : a.$excerpt.waypoint(a.onExcerptInView, {
		offset: "100%"
	}), a.$linkArchivesLoadMore.length && a.$linkArchivesLoadMore.on("click", $.proxy(a.linkArchivesLoadMoreClick, a))
}, RZProjects.prototype.destroyEvents = function() {
	var a = this;
	AbstractPage.prototype.destroyEvents.call(a), a.$linkArchivesLoadMore.length && a.$linkArchivesLoadMore.off("click", $.proxy(a.linkArchivesLoadMoreClick, a))
}, RZProjects.prototype.linkArchivesLoadMoreClick = function(a) {
	var b = this;
	a.preventDefault(), $.ajax({
		url: a.currentTarget.href,
		type: "get",
		success: function(a) {
			b.appendNewArchivesItems(a)
		}
	})
}, RZProjects.prototype.appendNewArchivesItems = function(a) {
	var b = this;
	b.$archivesTemp.append(a);
	var c = b.$archivesTemp.find(".page-blocks-inner .row"),
		d = b.$archivesTemp.find(".project-excerpt"),
		e = b.$archivesTemp.find(".projects-link-archives-load-more");
	b.$blocksInnerRow.append(c[0].innerHTML), e.length ? b.$linkArchivesLoadMore[0].href = e[0].href : TweenLite.to(b.$linkArchivesLoadMore, .6, {
		opacity: 0,
		onComplete: function() {
			b.$linkArchivesLoadMore[0].style.display = "none"
		}
	}), d && (b.$excerpt = b.$cont.find(".project-excerpt"), RZ3.isMobile ? b.$excerpt.addClass("in-view") : b.$excerpt.waypoint(b.onExcerptInView, {
		offset: "50%"
	})), b.$archivesTemp[0].innerHTML = ""
}, RZProjects.prototype.show = function(a) {
	var b = this;
	"ajax" == b.context ? "projectfeed_to_projectfeed" == history.state.transition ? b.showProjectstoProjects(a) : b.showPagetoProjects(a) : (b.$header[0].style.opacity = 1, AbstractPage.prototype.show.call(this, a))
}, RZProjects.prototype.hide = function(a) {
	var b = this;
	null !== history.state ? (TweenLite.to(RZ3.$footer, .6, {
		opacity: 0
	}), "projectfeed_to_projectfeed" == history.state.transition ? (b.hideProjectstoProjects(a), b.hideBlocks()) : "projectfeed_to_page" != history.state.transition || history.state.isHome ? AbstractPage.prototype.hide.call(this, a) : (b.hideProjectsToPage(a), b.hideBlocks())) : AbstractPage.prototype.hide.call(this, a)
}, RZProjects.prototype.showProjectstoProjects = function(a) {
	var b = this,
		c = 800;
	this.showBreadcrumb(), b.$cont[0].style.opacity = 1, TweenLite.to(b.$header, .6, {
		opacity: 1
	});
	var d = $(b.$blocks[0]).actual("outerWidth");
	null !== RZ3.formerPage.tagIndex && null !== b.tagIndex ? b.tagIndex < RZ3.formerPage.tagIndex && (d *= -1) : b.groupIndex < RZ3.formerPage.groupIndex && (d *= -1), TweenLite.fromTo(b.$blocksInner, .8, {
		x: d,
		opacity: 0
	}, {
		x: 0,
		opacity: 1
	}), setTimeout(function() {
		"undefined" != typeof a && a()
	}, c)
}, RZProjects.prototype.hideProjectstoProjects = function(a) {
	var b = this,
		c = 800;
	this.hideBreadcrumb();
	var d = $(b.$blocks[0]).actual("outerWidth");
	null !== RZ3.formerPage.tagIndex && null !== b.tagIndex ? b.tagIndex < history.state.index && (d *= -1) : b.groupIndex < history.state.index && (d *= -1), TweenLite.to(b.$blocksInner, .8, {
		x: d,
		opacity: 0
	}), setTimeout(function() {
		"undefined" != typeof a && a()
	}, c)
}, RZProjects.prototype.showPagetoProjects = function(a) {
	var b = this,
		c = 3e3;
	this.showBreadcrumb(), b.$cont[0].style.opacity = 1, TweenLite.fromTo(b.$header, 1, {
		opacity: 0
	}, {
		opacity: 1,
		delay: .2
	}), addClass(b.header.$title[0], "no-transition"), addClass(b.header.$title[0], "page-title-hide"), setTimeout(function() {
		removeClass(b.header.$title[0], "no-transition"), removeClass(b.header.$title[0], "page-title-hide")
	}, 1200), TweenLite.fromTo(b.header.$titleText, .8, {
		opacity: 0,
		x: -30
	}, {
		opacity: 1,
		x: 0,
		delay: 1
	}), b.group && TweenLite.fromTo(b.$headerNav, .8, {
		opacity: 0,
		x: -15
	}, {
		opacity: 1,
		x: 0,
		delay: 1.2
	}), b.$tagNav.length && TweenLite.fromTo(b.$tagNav, .8, {
		y: 15,
		opacity: 0
	}, {
		y: 0,
		opacity: 1,
		delay: 1.4
	}), TweenLite.fromTo(b.$blocks, 1, {
		opacity: 0
	}, {
		opacity: 1,
		delay: .2
	}), TweenLite.fromTo(b.$blocksInner, 1, {
		y: 50,
		opacity: 0
	}, {
		y: 0,
		opacity: 1,
		delay: 1.6
	}), setTimeout(function() {
		"undefined" != typeof a && a()
	}, c)
}, RZProjects.prototype.hideProjectsToPage = function(a) {
	var b = this,
		c = 3e3;
	this.hideBreadcrumb(), addClass(b.header.$title[0], "page-title-hide"), TweenLite.to(b.header.$titleText, .6, {
		opacity: 0
	}), b.group && TweenLite.to(b.$headerNav, .6, {
		opacity: 0
	}), TweenLite.to(b.$blocksInner, .6, {
		opacity: 0
	}), setTimeout(function() {
		"undefined" != typeof a && a()
	}, c)
}, RZProjects.prototype.onExcerptInView = function() {
	var a = $(this.element);
	a.addClass("in-view")
};
var RZProject = function(a, b, c) {
	AbstractPage.call(this, a, b, "project", c)
};
$.extend(RZProject.prototype, AbstractPage.prototype), RZProject.prototype.init = function(a, b, c, d) {
	var e = this;
	AbstractPage.prototype.init.call(this, a, b, c, d), e.$infos = e.$cont.find(".project-infos"), addClass(RZ3.nav.$header[0], "navbar-header-project")
}, RZProject.prototype.destroy = function() {
	var a = this;
	AbstractPage.prototype.destroy.call(a), this.iconTimeline && this.iconTimeline.kill()
}, RZProject.prototype.show = function(a) {
	var b = this;
	null !== history.state && "project_to_project" == history.state.transition && addClass(RZ3.nav.$header[0], "navbar-header-project"), "ajax" == b.context && null !== history.state ? RZ3.formerPage.isHome ? b.showHometoProject(a) : b.showPagetoProject(a) : AbstractPage.prototype.show.call(this, a)
}, RZProject.prototype.hide = function(a) {
	var b = this;
	null !== history.state ? (TweenLite.to(RZ3.$footer, .6, {
		opacity: 0
	}), "project_to_project" !== history.state.transition && removeClass(RZ3.nav.$header[0], "navbar-header-project"), b.hideProjectToPage(a), b.hideBlocks()) : AbstractPage.prototype.hide.call(this, a)
}, RZProject.prototype.showHometoProject = function(a) {
	var b = this,
		c = 3400;
	this.showBreadcrumb(), addClass(b.$header[0], "no-transition"), addClass(b.$header[0], "page-header-bar-hidden"), TweenLite.to(b.$cont, 1.2, {
		opacity: 1,
		delay: 1.2
	}), TweenLite.fromTo(b.$infos, 1.2, {
		opacity: 0
	}, {
		opacity: 1,
		delay: 1.2
	}), setTimeout(function() {
		removeClass(b.$header[0], "no-transition"), removeClass(b.$header[0], "page-header-bar-hidden")
	}, 1700), b.header.$arrow.length && TweenMax.from(b.header.$arrow, .8, {
		xPercent: -100,
		opacity: 1,
		delay: 1.2
	}), setTimeout(function() {
		"undefined" != typeof a && a()
	}, c)
}, RZProject.prototype.showPagetoProject = function(a) {
	var b = this,
		c = 3400;
	this.showBreadcrumb(), addClass(b.$header[0], "no-transition"), addClass(b.$header[0], "page-header-bar-hidden"), TweenLite.to(b.$cont, 1.2, {
		opacity: 1
	}), setTimeout(function() {
		removeClass(b.$header[0], "no-transition"), removeClass(b.$header[0], "page-header-bar-hidden")
	}, 800), b.header.$arrow.length && TweenMax.from(b.header.$arrow, .8, {
		xPercent: -100,
		opacity: 1,
		delay: 1.2
	}), TweenLite.fromTo(b.$infos, 1.2, {
		opacity: 0
	}, {
		opacity: 1,
		delay: 0
	}), setTimeout(function() {
		"undefined" != typeof a && a()
	}, c)
}, RZProject.prototype.hideProjectToPage = function(a) {
	var b = this,
		c = 3e3;
	this.hideBreadcrumb(), addClass(b.$header[0], "page-header-bar-hidden"), TweenLite.to(b.$header, 1.2, {
		opacity: 0,
		delay: 0
	}), history.state.isHome && TweenLite.to(b.$cont, .6, {
		opacity: 0
	}), setTimeout(function() {
		"undefined" != typeof a && a()
	}, c)
};
var AbstractBlock = function(a, b, c) {
	var d = this;
	d.init(a, b, c), d.initEvents()
};
AbstractBlock.prototype.init = function(a, b, c) {
	c = c || {};
	var d = this;
	d.id = a, d.type = b, this.isInView = !1;
	var e = {
		hasInViewAnim: !0,
		inViewOffset: "80%"
	};
	for(var f in e) this[f] = "undefined" != typeof c[f] ? c[f] : e[f];
	d.$cont = $("#" + a)
}, AbstractBlock.prototype.initEvents = function() {
	var a = this;
	a.$cont.waitForImages({
		finished: $.proxy(a.onLoad, a),
		waitForAll: !0
	}), this.hasInViewAnim && isMediaMinSM() && (RZ3.isMobile ? this.$cont.addClass("in-view") : this.waypoint = this.$cont.waypoint(this.onInView.bind(this), {
		offset: a.inViewOffset
	})[0])
}, AbstractBlock.prototype.hide = function() {}, AbstractBlock.prototype.destroy = function() {
	var a = this;
	a.destroyEvents()
}, AbstractBlock.prototype.destroyEvents = function() {
	this.hasInViewAnim && this.waypoint && this.waypoint.destroy()
}, AbstractBlock.prototype.onLoad = function(a) {
	var b = this;
	setTimeout(function() {
		b.resize()
	}, 0)
}, AbstractBlock.prototype.resize = function() {}, AbstractBlock.prototype.initMaps = function() {}, AbstractBlock.prototype.onInView = function() {
	if(!this.isInView && (this.isInView = !0, this.$cont.addClass("in-view"), "textblock" == this.type && this.$cont[0].className.indexOf("is-video") >= 0)) {
		var a = this.$cont.find(".textblock-video");
		a.length && (a[0].src += "&autoplay=1")
	}
};
var SocialFeedBlock = function(a, b) {
	AbstractBlock.call(this, a, b)
};
$.extend(SocialFeedBlock.prototype, AbstractBlock.prototype), SocialFeedBlock.prototype.init = function(a, b) {
	var c = this;
	AbstractBlock.prototype.init.call(this, a, b), c.$items = c.$cont.find(".socialfeedblock-items"), c.$item = c.$cont.find(".socialfeedblock-item"), c.ajaxUrl = c.$cont[0].getAttribute("data-ajax-url"), null !== c.ajaxUrl ? $.ajax({
		url: c.ajaxUrl,
		type: "get",
		success: function(a) {
//			c.$items[0].innerHTML = a,
			c.$item = c.$cont.find(".socialfeedblock-item"), c.itemLength = c.$item.length, c.initEvents(), c.resize()
		}
	}) : (c.$item = c.$cont.find(".socialfeedblock-item"), c.itemLength = c.$item.length, c.initEvents(), c.resize())
}, SocialFeedBlock.prototype.resize = function(a) {
	var b = this;
	AbstractBlock.prototype.resize.call(this, a), isMediaMinSM() && b.$item.length && setTimeout(function() {
		for(var a = Math.round(b.$item.eq(0).actual("outerWidth")), c = 0; c < b.itemLength; c++) b.$item[c].style.height = a + "px"
	}, 600)
};
var ColumnsBlock = function(a, b) {
	AbstractBlock.call(this, a, b)
};
$.extend(ColumnsBlock.prototype, AbstractBlock.prototype), ColumnsBlock.prototype.init = function(a, b) {
	AbstractBlock.prototype.init.call(this, a, b);
	var c = this;
	c.$blocks = c.$cont.find(".columned-blocks"), c.$fakeBlock = c.$blocks.find(".fake-block"), c.$block = c.$blocks.find(".page-block"), c.fakeFirst = 1 == Number(c.$cont[0].getAttribute("data-fake-first")) ? !0 : !1, c.masonryActive = !1
}, ColumnsBlock.prototype.onLoad = function(a) {
	var b = this;
	if(AbstractBlock.prototype.onLoad.call(this, a), isMediaMinMD()) {
		b.fakeFirst && (b.$fakeBlock[0].style.height = $(b.$block[1]).actual("outerHeight") + "px");
		var c = Math.floor(b.$blocks.actual("outerWidth") / 2);
		b.$blocks.masonry({
			itemSelector: ".columned-block",
			columnWidth: c
		}), b.masonryActive = !0
	}
}, ColumnsBlock.prototype.resize = function(a) {
	var b = this;
	if(AbstractBlock.prototype.resize.call(this, a), isMediaMinMD()) {
		if(b.fakeFirst && (b.$fakeBlock[0].style.height = $(b.$block[1]).actual("outerHeight")), b.masonryActive) {
			var c = Math.floor(b.$blocks.actual("outerWidth") / 2);
			b.$blocks.masonry("option", {
				columnWidth: c
			})
		}
	} else b.masonryActive && (b.$blocks.masonry("destroy"), b.masonryActive = !1)
};
var IconsContainerBlock = function(a, b) {
	AbstractBlock.call(this, a, b)
};
$.extend(IconsContainerBlock.prototype, AbstractBlock.prototype), IconsContainerBlock.prototype.init = function(a, b) {
	var c = this;
	AbstractBlock.prototype.init.call(this, a, b), c.$blocks = c.$cont.find(".columned-blocks"), c.$block = c.$blocks.find(".page-block"), c.masonryActive = !1
}, IconsContainerBlock.prototype.onLoad = function(a) {
	var b = this;
	AbstractBlock.prototype.onLoad.call(this, a), isMediaMinMD() && setTimeout(function() {
		var a = Math.round(b.$blocks.actual("outerWidth") / 2);
		b.$blocks.masonry({
			itemSelector: ".columned-block",
			columnWidth: a
		}), b.masonryActive = !0
	}, 600)
}, IconsContainerBlock.prototype.resize = function(a) {
	var b = this;
	if(AbstractBlock.prototype.resize.call(this, a), isMediaMinMD()) {
		if(b.masonryActive) {
			var c = Math.round(b.$blocks.actual("outerWidth") / 2);
			b.$blocks.masonry("option", {
				columnWidth: c
			})
		}
	} else b.masonryActive && (b.$blocks.masonry("destroy"), b.masonryActive = !1)
};
var FullscreenBlock = function(a, b) {
	AbstractBlock.call(this, a, b)
};
$.extend(FullscreenBlock.prototype, AbstractBlock.prototype), FullscreenBlock.prototype.init = function(a, b) {
	var c = this;
	AbstractBlock.prototype.init.call(this, a, b), c.layout = c.$cont[0].getAttribute("data-layout"), c.contProps = {}, c.$image = c.$cont.find(".fullscreenblock-image"), c.$img = c.$image.find("img"), c.imgProps = {}, c.inViewOffset = "100%", c.$playBtn = c.$cont.find(".fullscreenblock-play-btn"), c.$videoIframe = c.$cont.find(".fullscreenblock-video-iframe"), c.player = null, c.$videoIframe.length && (c.player = $f(c.$videoIframe[0]), c.player.addEvent("ready", function() {})), c.firstResize = !0
}, FullscreenBlock.prototype.hide = function() {
	var a = this;
	AbstractBlock.prototype.hide.call(this), null !== a.player && a.player.api("pause")
}, FullscreenBlock.prototype.initEvents = function(a) {
	var b = this;
	AbstractBlock.prototype.initEvents.call(this, a), b.$playBtn.length && b.$playBtn.on("click", $.proxy(b.playBtnClick, b))
}, FullscreenBlock.prototype.destroyEvents = function(a) {
	var b = this;
	AbstractBlock.prototype.destroyEvents.call(this, a), b.$playBtn.length && b.$playBtn.off("click", $.proxy(b.playBtnClick, b))
}, FullscreenBlock.prototype.playBtnClick = function(a) {
	var b = this;
	TweenLite.to(b.$img, .8, {
		opacity: 0
	}), TweenLite.to(b.$playBtn, .8, {
		opacity: 0
	}), b.$videoIframe[0].style.opacity = 1, null !== b.player && b.player.api("play"), setTimeout(function() {
		b.$img[0].style.zIndex = 8, b.$playBtn[0].style.display = "none"
	}, 800)
}, FullscreenBlock.prototype.resize = function(a) {
	AbstractBlock.prototype.resize.call(this, a)
};
var ContactBlock = function(a, b) {
	AbstractBlock.call(this, a, b)
};
$.extend(ContactBlock.prototype, AbstractBlock.prototype), ContactBlock.prototype.init = function(a, b) {
	var c = this;
	AbstractBlock.prototype.init.call(this, a, b), c.$form = c.$cont.find("form"), c.$formBtn = c.$form.find("button"), c.$submitBtn = c.$cont.find(".contactblock-submit-btn"), c.$formMessage = c.$cont.find(".form-message"), c.formSent = !1
}, ContactBlock.prototype.initEvents = function(a) {
	var b = this;
	AbstractBlock.prototype.initEvents.call(this, a), b.$form.length && b.$form.on("submit", $.proxy(b.formSubmit, b)), b.$submitBtn.length && b.$submitBtn.on("click", $.proxy(b.submitBtnClick, b))
}, ContactBlock.prototype.destroyEvents = function(a) {
	var b = this;
	AbstractBlock.prototype.destroyEvents.call(this, a), b.$form.length && b.$form.off("submit", $.proxy(b.formSubmit, b)), b.$submitBtn.length && b.$submitBtn.off("click", $.proxy(b.submitBtnClick, b))
}, ContactBlock.prototype.submitBtnClick = function(a) {
	var b = this;
	b.$formBtn.length && b.$formBtn.trigger("click")
}, ContactBlock.prototype.formSubmit = function(a) {
	var b = this;
	return b.formSent || (b.formSent = !0, $.ajax({
		url: window.location.href,
		data: b.$form.serialize(),
		type: "post",
		dataType: "json",
		success: function(a) {
			"success" !== a.status ? (b.$formMessage[0].className = "form-message form-message-" + a.status + " form-message-hidden", b.$formMessage[0].innerHTML = a.message, setTimeout(function() {
				addClass(b.$formMessage[0], "form-message-hide"), addClass(b.$formMessage[0], "form-message-hidden")
			}, 4100), setTimeout(function() {
				b.$formMessage[0].style.display = "none", TweenLite.to(b.$submitBtn, .4, {
					opacity: 1
				})
			}, 4800)) : (b.$formMessage[0].className = "form-message form-message-" + a.status + " form-message-hidden", b.$formMessage[0].innerHTML = a.message), TweenLite.to(b.$submitBtn, .4, {
				opacity: 0
			}), setTimeout(function() {
				b.$formMessage[0].style.display = "inline-block", setTimeout(function() {
					removeClass(b.$formMessage[0], "form-message-hidden")
				}, 200)
			}, 400)
		},
		error: function(a) {
			a = a.responseJSON, b.$formMessage[0].className = "form-message form-message-error form-message-" + a.status + " form-message-hidden", b.$formMessage[0].innerHTML = a.errors, setTimeout(function() {
				removeClass(b.$formMessage[0], "form-message-hidden")
			}, 200), setTimeout(function() {
				addClass(b.$formMessage[0], "form-message-hide"), addClass(b.$formMessage[0], "form-message-hidden")
			}, 2e3), setTimeout(function() {
				b.$formMessage[0].style.display = "none"
			}, 2600)
		}
	}), setTimeout(function() {
		b.formSent = !1
	}, 2e3)), !1
};
var MapBlock = function(a, b) {
	AbstractBlock.call(this, a, b)
};
$.extend(MapBlock.prototype, AbstractBlock.prototype), MapBlock.prototype.init = function(a, b) {
	var c = this;
	if(AbstractBlock.prototype.init.call(this, a, b), c.options = null, c.objects = [], c.data = [], c.options = [], c.zoom = [], c.marker = [], c.$mapCanvas = c.$cont.find(".block-map-canvas"), c.$mapCanvas.length && "undefined" == typeof google && !RZ3.gmapLoaded) {
		RZ3.gmapLoaded = !0;
		var d = document.createElement("script");
		d.type = "text/javascript", d.src = "//maps.googleapis.com/maps/api/js?key=" + RZ3.googleClientId + "&callback=RZ3.initMaps", document.body.appendChild(d)
	}
}, MapBlock.prototype.initMaps = function() {
	for(var a = this, b = 0; b < a.$mapCanvas.length; b++) {
		var c = a.$mapCanvas[b];
		a.data[b] = JSON.parse(c.getAttribute("data-geoloc")), a.zoom[b] = a.data[b].zoom, a.options[b] = {
			center: new google.maps.LatLng(a.data[b].lat, a.data[b].lng),
			zoom: a.data[b].zoom,
			styles: RZ3.mapsStyle,
			mapTypeControl: !1,
			scrollwheel: !1,
			panControl: !1,
			draggable: RZ3.isMobile ? !1 : !0,
			streetViewControl: !1,
			disableDoubleClickZoom: !1,
			zoomControl: !1,
			scaleControl: !1
		}, a.objects[b] = new google.maps.Map(document.getElementById(c.id), a.options[b]), a.initMapEvents(b), a.marker[b] = new google.maps.Marker({
			map: a.objects[b],
			position: new google.maps.LatLng(a.data[b].lat, a.data[b].lng),
			icon: RZ3.baseUrl + RZ3.resourcesUrl + "img/marker.png"
		})
	}
}, MapBlock.prototype.initEvents = function() {
	AbstractBlock.prototype.initEvents.call(this)
}, MapBlock.prototype.destroyEvents = function() {
	AbstractBlock.prototype.destroyEvents.call(this)
}, MapBlock.prototype.initMapEvents = function(a) {
	var b = this;
	google.maps.event.addListener(b.objects[a], "zoom_changed", function() {
		b.zoom[a] = b.objects[a].getZoom()
	})
};
var TextBlock = function(a, b) {
	AbstractBlock.call(this, a, b)
};
$.extend(TextBlock.prototype, AbstractBlock.prototype), TextBlock.prototype.init = function(a, b) {
	AbstractBlock.prototype.init.call(this, a, b), this.$image = this.$cont.find(".textblock-image"), this.$img = this.$cont.find(".textblock-img"), this.$texture = this.$cont.find(".textblock-texture"), this.$textureImg = this.$cont.find(".textblock-texture img"), this.$video = this.$cont.find(".textblock-video"), RZ3.isMobile && this.$video.length && this.changeVideoParameters(), this.transformProp = prefixProperty("transform"), this.offsetTop = 0, this.height = 0, this.textureOffset = .65, this.textureOffsetCurrent = .65, this.textureOffsetTarget = .65, this.imgHeight = 0
}, TextBlock.prototype.changeVideoParameters = function() {
	var a = this.$video[0].src;
	a = a.replace("background=1", "background=0"), a = a.replace("controls=0", "controls=1"), this.$video[0].src = a
}, TextBlock.prototype.resize = function() {
	if(AbstractBlock.prototype.resize.call(this), this.$image.length && (this.$img[0].removeAttribute("style"), this.imgHeight = this.$image.height(), isMediaMinMD())) {
		var a = this.$image.width() / this.$img[0].naturalWidth,
			b = this.$image.height() / this.$img[0].naturalHeight,
			c = Math.max(a, b),
			d = parseInt(this.$img[0].naturalWidth * c),
			e = parseInt(this.$img[0].naturalHeight * c);
		this.$img.css({
			width: d,
			height: e,
			marginLeft: parseInt(.5 * (this.$image.width() - d)),
			marginTop: parseInt(.5 * (this.$image.height() - e))
		})
	}
	if(this.$textureImg.length) {
		if(this.offsetTop = this.$cont.offset().top, isMediaMinMD() && !this.isInView && this.hasInViewAnim) {
			var f = this.$cont.css(this.transformProp),
				g = f.split("("),
				h = g[1].split(")"),
				i = h[0].split(","),
				j = parseInt(i[5]);
			j > 0 ? this.offsetTop -= j : this.offsetTop += j
		}
		this.height = this.$cont.height();
		var k = this.$texture.width() / this.$textureImg[0].naturalWidth,
			l = this.$texture.height() * (1 + this.textureOffset) / this.$textureImg[0].naturalHeight,
			m = Math.max(k, l),
			n = parseInt(this.$textureImg[0].naturalWidth * m),
			o = parseInt(this.$textureImg[0].naturalHeight * m);
		this.$textureImg.css({
			width: n,
			height: o,
			marginLeft: parseInt(.5 * (this.$texture.width() - n))
		})
	}
}, TextBlock.prototype.onScroll = function(a) {
	if(!(!this.isInView || !this.$textureImg.length || a + RZ3.windowSize.height < this.offsetTop || this.offsetTop + this.height < a)) {
		var b = this.offsetTop + this.imgHeight,
			c = this.offsetTop + this.height + RZ3.windowSize.height,
			d = (a + RZ3.windowSize.height - b) / (c - b);
		this.textureOffsetTarget = parseInt(d * this.textureOffset * (this.height - this.imgHeight)), this.textureOffsetCurrent = Math.round(this.textureOffsetCurrent + .06 * (this.textureOffsetTarget - this.textureOffsetCurrent)), this.$textureImg.css(this.transformProp, "translate3d(0," + -this.textureOffsetCurrent + "px,0)")
	}
};
var RoadizMadeBlock = function(a, b) {
	AbstractBlock.call(this, a, b)
};
$.extend(RoadizMadeBlock.prototype, AbstractBlock.prototype), RoadizMadeBlock.prototype.init = function(a, b) {
	AbstractBlock.prototype.init.call(this, a, b), this.offsetTop = 0, this.height = 0, this.isVisible = !1
}, RoadizMadeBlock.prototype.initEvents = function() {
	AbstractBlock.prototype.initEvents.call(this)
}, RoadizMadeBlock.prototype.resize = function() {
	AbstractBlock.prototype.resize.call(this), this.offsetTop = this.$cont.offset().top, this.height = this.$cont.height()
}, RoadizMadeBlock.prototype.onScroll = function(a) {
	var b = this.offsetTop - RZ3.windowSize.height;
	b += RZ3.windowSize.height - (RZ3.nav.headerOffsetTop + RZ3.nav.headerHeight);
	var c = this.offsetTop + this.height - RZ3.nav.headerOffsetTop;
	a > b && c > a ? this.isVisible || (addClass(RZ3.nav.$header[0], "navbar-header-roadiz"), addClass(RZ3.$backTopBtn[0], "back-top-btn-roadiz"), this.isVisible = !0) : this.isVisible && (removeClass(RZ3.nav.$header[0], "navbar-header-roadiz"), removeClass(RZ3.$backTopBtn[0], "back-top-btn-roadiz"), this.isVisible = !1)
};
var BackgroundCanvas = function(a) {
	var b = this;
	RZ3.isMobile || "undefined" != typeof paper && paper.install(window), b.id = a, b.$cont = RZ3.$loading, b.canvas = document.getElementById(b.id), b.gridSize = 100, b.rows = 0, b.cols = 0, b.updateReady = !1, b.updateActive = !0, b.updateIndex = 0, b.updateLimitMin = 20, b.updateLimitMax = 50, b.updateLimit = 50, RZ3.isMobile || (paper.setup(b.id), view.onFrame = $.proxy(b.update, b), b.init()), b.initEvents()
};
BackgroundCanvas.prototype.init = function() {
	var a = this;
	a.initCirclesAndLines(), a.updateReady = !0
}, BackgroundCanvas.prototype.destroy = function() {}, BackgroundCanvas.prototype.initEvents = function(a) {
	var b = this;
	RZ3.$window.on("resize", debounce($.proxy(b.onResize, b), 100, !1))
}, BackgroundCanvas.prototype.destroyEvents = function(a) {
	var b = this;
	RZ3.$window.off("resize", debounce($.proxy(b.onResize, b), 100, !1))
}, BackgroundCanvas.prototype.initCirclesAndLines = function() {
	var a = this,
		b = Math.floor(RZ3.windowSize.height / 100),
		c = Math.floor(RZ3.windowSize.innerWidth / 100);
	c % 2 === 1 && (c -= 1);
	var d = Math.round(100 * (RZ3.windowSize.height / 100 - b)),
		e = Math.floor(100 * (RZ3.windowSize.innerWidth / 100 - c) / 2) - 1,
		f = !1,
		g = !1;
	d > 56 && (d -= 100, b += 1, f = !0), e > 56 && (e -= 101, c += 2, g = !0), (RZ3.windowSize.height < 750 || RZ3.windowSize.height > 900) && (d -= 53), a.circles = [];
	for(var h = 0, i = 0; b > i; i++)
		for(var j = 0; c > j; j++) {
			var k = e + (j * a.gridSize + 50),
				l = d + (i * a.gridSize + 50),
				m = new paper.Point(k, l);
			g || (k += j), f || (l += i), a.circles[h] = new CircleAndLine(m, h), h++
		}
}, BackgroundCanvas.prototype.update = function() {
	var a = this;
	if(a.updateReady && a.updateActive) {
		for(var b = 0; b < a.circles.length; b++) a.circles[b].update();
		if(a.updateIndex == a.updateLimit) {
			var c = getRandomInt(0, a.circles.length - 1),
				d = getRandomNumber(25, 400, 2),
				e = getRandomInt(0, a.circles.length - 1);
			a.circles[c].scaleCircle(d), a.circles[e].scaleLine(), a.updateIndex = 0, a.updateLimit = getRandomInt(a.updateLimitMin, a.updateLimitMax)
		}
		a.updateIndex++
	}
}, BackgroundCanvas.prototype.pause = function() {
	var a = this;
	RZ3.isMobile || (a.updateActive = !1, view.pause())
}, BackgroundCanvas.prototype.start = function() {
	var a = this;
	RZ3.isMobile || (a.updateActive = !0, view.play())
}, BackgroundCanvas.prototype.onResize = function() {
	var a = this;
	a.$cont[0].style.height = RZ3.windowSize.height + "px", a.updateReady && (paper.project.activeLayer.removeChildren(), a.initCirclesAndLines())
};
var PageHeader = function(a) {
	AbstractBlock.call(this, a, "page-header", {
		hasInViewAnim: !1
	})
};
$.extend(PageHeader.prototype, AbstractBlock.prototype), PageHeader.prototype.init = function(a, b, c) {
	var d = this;
	AbstractBlock.prototype.init.call(this, a, b, c), this.parallaxFactor = .3, d.type = d.$cont[0].className.indexOf("fullscreen") >= 0 ? "fullscreen" : "classic", d.$carousel = d.$cont.find(".carousel"), d.hasCarousel = !1, d.$inner = d.$cont.find(".page-header-inner"), d.innerYTarget = 0, d.innerYCurrent = 0, d.innerYPrev = 1, d.scrollEnabled = !0, d.$content = d.$cont.find(".page-header-content"), d.$overlay = d.$cont.find(".page-header-overlay"), d.$bar = d.$cont.find(".page-header-bar"), d.$fullscreenText = d.$cont.find(".page-header-fullscreen-text"), d.$fullscreenIcon = d.$cont.find(".page-header-fullscreen-icon svg"), d.fullscreenIconYCurrent = 0, d.fullscreenIconYTarget = 0, d.fullscreenIconYPrev = 1, d.$fullscreenImages = d.$cont.find(".page-header-fullscreen-image-cont"), d.fullscreenImagesYTarget = 0, d.fullscreenImagesYCurrent = 0, d.fullscreenImagesYPrev = 1, d.$trame = d.$cont.find(".page-header-fullscreen-trame"), d.trameYTarget = 0, d.trameYCurrent = 0, d.trameYPrev = 1, d.$arrow = d.$cont.find(".page-header-fullscreen-arrow"), d.textOffsetTop = 0, "fullscreen" === this.type && this.initIcon(), d.$fullscreenText.length && (d.textOffsetTop = d.$fullscreenText.offset().top - RZ3.$window.scrollTop()), d.$container = d.$cont.find(".container"), d.containerYTarget = 0, d.containerYCurrent = 0, d.$title = d.$cont.find(".page-title"), d.$titleText = d.$cont.find(".page-title-text"), d.transformProp = prefixProperty("transform"), d.contHeight = d.$cont.actual("outerHeight"), this.minHeight = 55, this.isCollapsed = !1, this.barIsVisible = !0, setTimeout(function() {
		if(d.$carousel.length) d.hasCarousel = !0, RZ3.page.carousel = new Carousel(d.$carousel[0].id);
		else {
			d.$img = d.$cont.find(".page-header-fullscreen-image img");
			var a = d.$cont.find(".page-header-fullscreen-title-words"),
				b = a.text().split(" "),
				c = "";
			b.forEach(function(a) {
				c += '<span class="page-header-fullscreen-title-word"><span class="page-header-fullscreen-title-word-inner">' + a + "</span></span> "
			}), a.html(c)
		}
	}, 0), d.firstResize = !0
}, PageHeader.prototype.initIcon = function() {
	var a = this.$cont.find(".page-header-fullscreen-icon");
	if(a.length) {
		var b, c, d, e, f, g, h = this.$cont.attr("id"),
			i = 0;
		a.each(function(a, j) {
			b = $(j), c = b.find("path:not(defs path), line:not(defs line), polyline:not(defs polyline), polygon:not(defs polygon), rect:not(defs rect), ellipse:not(defs ellipse)"), c.each(function(a, c) {
				e = c.getAttribute("clip-path"), e && (e = e.split('"').join(""), f = e.split("url(#")[1].split(")")[0], g = h + "-icon-mask-" + i, d = b.find("#" + f), d.attr("id", g), c.setAttribute("clip-path", "url(#" + g + ")"), i++)
			})
		})
	}
}, PageHeader.prototype.destroy = function() {}, PageHeader.prototype.moveNavHeader = function() {
	var a = this;
	"classic" == a.type ? RZ3.page.navHeaderPosition = "top" : a.hasCarousel ? RZ3.page.navHeaderPosition = "carousel" : RZ3.page.navHeaderPosition = "bottom", RZ3.nav.animateHeader(RZ3.page.navHeaderPosition)
}, PageHeader.prototype.getTranslate3d = function(a) {
	return RZ3.isIE ? "translate(0," + a + "px)" : "translate3d(0," + a + "px,0)"
}, PageHeader.prototype.onScroll = function(a) {
	"fullscreen" === this.type ? this.onScrollFullscreen(a) : this.onScrollClassic(a)
}, PageHeader.prototype.onScrollFullscreen = function(a) {
	var b = this;
	if(b.scrollEnabled) {
		a > 250 ? "centered" === RZ3.nav.headerPosition || RZ3.page.footerVisible || RZ3.nav.animateHeader("centered") : RZ3.nav.headerPosition === RZ3.page.navHeaderPosition || RZ3.history.transition || RZ3.nav.animateHeader(RZ3.page.navHeaderPosition);
		var c = this.contHeight - a;
		if(c > this.minHeight) {
			var d = this.minHeight / c;
			this.isCollapsed && (this.isCollapsed = !1, this.hasCarousel && null !== RZ3.page.carousel && (RZ3.page.carousel.items[RZ3.page.carousel.currentItemIndex].playVideo(), RZ3.page.carousel.items[RZ3.page.carousel.currentItemIndex].timer.play(0)), this.$cont.removeClass("page-header-collapsed"), this.$cont.removeClass("collapsing"), RZ3.page.$breadcrumb.removeClass("breadcrumb-collapsed"), RZ3.$backTopBtn.addClass("back-top-btn-hidden"));
			var e = getNormRatio(d, .1, .3);
			d > .1 ? (this.$overlay.css({
				opacity: e.toFixed(2),
				visibility: "visible"
			}), d > .15 ? this.barIsVisible && (this.barIsVisible = !1, this.$cont.addClass("page-header-bar-hidden")) : this.barIsVisible || (this.barIsVisible = !0, this.$cont.removeClass("page-header-bar-hidden"))) : (this.$overlay.removeAttr("style"), this.barIsVisible && 0 !== a || (this.barIsVisible = !0, this.$cont.removeClass("page-header-bar-hidden"))), b.innerYTarget = -a, b.innerYCurrent = Math.round(100 * (this.innerYCurrent + .16 * (this.innerYTarget - this.innerYCurrent))) / 100, b.innerYCurrent !== b.innerYPrev && this.$inner.css(this.transformProp, this.getTranslate3d(b.innerYTarget)), b.fullscreenImagesYTarget = a, b.fullscreenImagesYCurrent = Math.round(100 * (this.fullscreenImagesYCurrent + .16 * (this.fullscreenImagesYTarget - this.fullscreenImagesYCurrent))) / 100, b.fullscreenImagesYCurrent !== b.fullscreenImagesYPrev && this.$fullscreenImages.css(this.transformProp, this.getTranslate3d(b.fullscreenImagesYTarget)), this.trameYTarget = .8 * a, this.trameYCurrent = Math.round(100 * (this.trameYCurrent + .16 * (this.trameYTarget - this.trameYCurrent))) / 100, b.trameYCurrent !== b.trameYPrev && this.$trame.css(this.transformProp, this.getTranslate3d(a)), b.trameYCurrent !== b.trameYPrev && this.$fullscreenText.css(this.transformProp, this.getTranslate3d(this.trameYTarget)), this.$fullscreenIcon.length && (this.fullscreenIconYTarget = parseInt(.65 * a), this.fullscreenIconYCurrent = Math.round(100 * (this.fullscreenIconYCurrent + .16 * (this.fullscreenIconYTarget - this.fullscreenIconYCurrent))) / 100, b.fullscreenIconYCurrent !== b.fullscreenIconYPrev && this.$fullscreenIcon.css(this.transformProp, this.getTranslate3d(this.fullscreenIconYCurrent))), b.innerYPrev = b.innerYCurrent, b.fullscreenImagesYPrev = b.fullscreenImagesYCurrent, b.trameYPrev = b.trameYTarget, b.fullscreenIconYPrev = b.fullscreenIconYCurrent
		} else {
			if(this.isCollapsed) return;
			this.isCollapsed = !0, this.resizeFullscreenCollapsedHeader(), this.hasCarousel && null !== RZ3.page.carousel && (RZ3.page.carousel.items[RZ3.page.carousel.currentItemIndex].pauseVideo(), RZ3.page.carousel.items[RZ3.page.carousel.currentItemIndex].timer.pause()), this.$cont.addClass("page-header-collapsed page-header-bar-hidden"), RZ3.page.$breadcrumb.addClass("breadcrumb-collapsed"), RZ3.$backTopBtn.removeClass("back-top-btn-hidden")
		}
	}
}, PageHeader.prototype.onScrollClassic = function(a) {
	a > 250 ? "centered" === RZ3.nav.headerPosition || RZ3.page.footerVisible || RZ3.nav.animateHeader("centered") : "top" === RZ3.nav.headerPosition || RZ3.history.transition || RZ3.nav.animateHeader("top");
	var b = this.contHeight - a;
	if(b > this.minHeight) {
		this.minHeight / b;
		this.isCollapsed && (this.isCollapsed = !1, this.$cont.removeClass("page-header-collapsed"), RZ3.page.$breadcrumb.removeClass("breadcrumb-collapsed"), RZ3.$backTopBtn.addClass("back-top-btn-hidden"));
		var c = Number(a / -(this.contHeight - 120) + 1).toFixed(2);
		this.containerYTarget = Math.round(.51 * a), this.containerYCurrent = this.containerYTarget, this.$container.css(this.transformProp, this.getTranslate3d(this.containerYCurrent)), this.$title.css("opacity", c), this.innerYTarget = -a, this.innerYCurrent = this.innerYTarget, this.$inner.css(this.transformProp, this.getTranslate3d(this.innerYCurrent))
	} else {
		if(this.isCollapsed) return;
		this.isCollapsed = !0, this.$inner.css(this.transformProp, this.getTranslate3d(-(this.contHeight - this.minHeight))), this.$title.css("opacity", 0), this.$container.css(this.transformProp, this.getTranslate3d(Math.round(.51 * (this.contHeight - this.minHeight)))), this.$cont.addClass("page-header-collapsed"), RZ3.page.$breadcrumb.addClass("breadcrumb-collapsed"), RZ3.$backTopBtn.removeClass("back-top-btn-hidden")
	}
}, PageHeader.prototype.resetScroll = function() {
	var a = this;
	"fullscreen" == a.type && (a.onScroll(0), a.scrollEnabled = !1, this.$inner.css(this.transformProp, this.getTranslate3d(0)), this.$fullscreenImages.css(this.transformProp, this.getTranslate3d(0)), this.$trame.css(this.transformProp, this.getTranslate3d(0)), this.$fullscreenText.css(this.transformProp, this.getTranslate3d(0)), this.$fullscreenIcon.css(this.transformProp, this.getTranslate3d(0)))
}, PageHeader.prototype.onNavOpen = function() {
	var a = "fullscreen" == this.type ? -RZ3.windowSize.height : -this.contHeight;
	this.isCollapsed ? TweenMax.to(this.$inner, .2, {
		y: a,
		onComplete: function() {
			this.$inner.css("visibility", "hidden"), this.$overlay.css("visibility", "hidden")
		}.bind(this)
	}) : (this.$cont.removeClass("page-header-bar-hidden"), this.$overlay.removeAttr("style"))
}, PageHeader.prototype.onNavClose = function() {
	if("linkClick" == RZ3.nav.closeContext) return this.$inner.css("visibility", ""), void this.$overlay.css("visibility", "");
	var a = "fullscreen" == this.type ? -(RZ3.windowSize.height - this.minHeight) : -(this.contHeight - this.minHeight);
	this.isCollapsed && TweenMax.to(this.$inner, .8, {
		y: a,
		delay: .4,
		onStart: function() {
			this.$inner.css("visibility", ""), this.$overlay.css("visibility", "")
		}.bind(this)
	})
}, PageHeader.prototype.resize = function(a) {
	AbstractBlock.prototype.resize.call(this, a), "fullscreen" == this.type && this.resizeFullscreenHeader()
}, PageHeader.prototype.resizeFullscreenHeader = function() {
	var a = this;
	if(a.textOffsetTop = a.$fullscreenText.offset().top - RZ3.$window.scrollTop(), a.contHeight = RZ3.windowSize.height > 600 ? RZ3.windowSize.height : 600, isMediaMinSM() ? a.hasCarousel || (a.contHeight -= 150) : a.contHeight = RZ3.windowSize.height - RZ3.nav.headerHeight, a.$cont[0].style.height = a.contHeight + "px", a.hasCarousel) null !== RZ3.page.carousel && setTimeout(function() {
		RZ3.page.carousel.resize()
	}, 0);
	else {
		isMediaMinSM() ? a.$inner[0].style.height = a.contHeight + "px" : a.$inner[0].style.height = "";
		var b = RZ3.windowSize.width / this.$img[0].naturalWidth,
			c = RZ3.windowSize.height / this.$img[0].naturalHeight,
			d = Math.max(b, c),
			e = parseInt(this.$img[0].naturalWidth * d),
			f = parseInt(this.$img[0].naturalHeight * d);
		this.$img.css({
			width: e,
			height: f,
			marginLeft: parseInt(.5 * (RZ3.windowSize.width - e)),
			marginTop: parseInt(.5 * (RZ3.windowSize.height - f))
		})
	}
	this.isCollapsed && this.resizeFullscreenCollapsedHeader()
}, PageHeader.prototype.resizeFullscreenCollapsedHeader = function() {
	var a = this;
	this.$cont.addClass("collapsing"), this.$inner.css(this.transformProp, this.getTranslate3d(-(this.contHeight - this.minHeight))), this.$fullscreenImages.css(this.transformProp, this.getTranslate3d(parseInt(this.contHeight - this.minHeight))), this.$fullscreenText.css(this.transformProp, this.getTranslate3d(parseInt(this.contHeight - this.minHeight))), setTimeout(function() {
		a.$cont.removeClass("collapsing")
	}, 800)
};
var Carousel = function(a) {
	AbstractBlock.call(this, a, "carousel", {
		hasInViewAnim: !1
	})
};
$.extend(Carousel.prototype, AbstractBlock.prototype), Carousel.prototype.init = function(a, b, c) {
	AbstractBlock.prototype.init.call(this, a, b, c), this.$inner = this.$cont.find(".carousel-inner"), this.$scrollBtn = this.$cont.find(".carousel-scroll-btn"), this.$indicatorCurrentList = this.$cont.find(".carousel-indicator-current ul"), this.indicatorCurrentItemWidth = this.$cont.find(".carousel-indicator-current").width(), this.initItems(), this.eventsReady = "static" == RZ3.page.context ? !1 : !0, this.resize()
}, Carousel.prototype.initEvents = function() {
	var a = this;
	if(a.eventsReady) {
		AbstractBlock.prototype.initEvents.call(this);
		for(var b = 0; b < a.items.length; b++) a.items[b].initDraggable();
		a.$cont.find(".carousel-control.left").on("click", $.proxy(a.onLeftControlClick, a)), a.$cont.find(".carousel-control.right").on("click", $.proxy(a.onRightControlClick, a)), a.$scrollBtn.on("click", $.proxy(a.onScrollBtnClick, a)), RZ3.$window.on("keyup", $.proxy(a.onKeyUp, a))
	}
}, Carousel.prototype.initItems = function() {
	var a, b = this;
	this.items = [], this.currentItemIndex = 0, this.$cont.find(".carousel-item").each(function(c, d) {
		a = new CarouselItem(d, c), a.isActive && (this.currentItemIndex = c), b.items.push(a), a.on("complete", b.onItemComplete, b)
	})
}, Carousel.prototype.updateIndicator = function() {
	TweenMax.to(this.$indicatorCurrentList, .6, {
		x: -this.currentItemIndex * this.indicatorCurrentItemWidth
	})
}, Carousel.prototype.gotoNextSlide = function() {
	var a = this.items[this.currentItemIndex];
	a.close(-1), this.currentItemIndex++, this.currentItemIndex > this.items.length - 1 && (this.currentItemIndex = 0);
	var b = this.items[this.currentItemIndex];
	b.open(1), this.onSlideChange()
}, Carousel.prototype.gotoPrevSlide = function() {
	var a = this.items[this.currentItemIndex];
	a.close(1), this.currentItemIndex--, this.currentItemIndex < 0 && (this.currentItemIndex = this.items.length - 1);
	var b = this.items[this.currentItemIndex];
	b.open(-1), this.onSlideChange()
}, Carousel.prototype.gotoContent = function() {
	TweenLite.to(RZ3.$window, 1, {
		scrollTo: {
			y: RZ3.windowSize.height,
			autoKill: !1
		}
	})
}, Carousel.prototype.destroy = function() {
	AbstractBlock.prototype.destroy.call(this), this.items.forEach(function(a) {
		a.off("complete"), a.destroy()
	})
}, Carousel.prototype.destroyEvents = function() {
	var a = this;
	AbstractBlock.prototype.destroyEvents.call(this), a.$cont.find(".carousel-control.left").off("click", $.proxy(a.onLeftControlClick, a)), a.$cont.find(".carousel-control.right").off("click", $.proxy(a.onRightControlClick, a)), a.$scrollBtn.off("click", $.proxy(a.onScrollBtnClick, a)), RZ3.$window.off("keyup", $.proxy(a.onKeyUp, a))
}, Carousel.prototype.resize = function(a) {
	AbstractBlock.prototype.resize.call(this, a), this.resizeItems()
}, Carousel.prototype.resizeItems = function() {
	this.items.forEach(function(a) {
		a.resize()
	})
}, Carousel.prototype.onLeftControlClick = function(a) {
	a.preventDefault(), this.gotoPrevSlide()
}, Carousel.prototype.onRightControlClick = function(a) {
	a.preventDefault(), this.gotoNextSlide()
}, Carousel.prototype.onScrollBtnClick = function(a) {
	a.preventDefault(), this.gotoContent()
}, Carousel.prototype.onSlideChange = function() {
	this.updateIndicator(), null !== RZ3.bgCanvas && (RZ3.bgCanvas.start(), setTimeout(function() {
		RZ3.bgCanvas.pause()
	}, 600))
}, Carousel.prototype.onItemComplete = function(a) {
	a ? a.direction < 0 ? this.gotoNextSlide() : this.gotoPrevSlide() : this.gotoNextSlide()
}, Carousel.prototype.openCurrentItem = function() {
	this.items[this.currentItemIndex].open()
}, Carousel.prototype.onKeyUp = function(a) {
	if(!RZ3.page.header.isCollapsed) switch(a.keyCode) {
		case 37:
			this.gotoPrevSlide();
			break;
		case 39:
			this.gotoNextSlide();
			break;
		case 40:
			this.gotoContent()
	}
};
var CarouselItem = function(a, b) {
	this.$cont = $(a), this.index = b, this.init()
};
$.extend(CarouselItem.prototype, TinyEmitter.prototype), CarouselItem.prototype.init = function() {
	var a = this;
	this.$inner = this.$cont.find(".carousel-item-inner"), this.$imgWrapper = this.$cont.find(".carousel-item-image-wrapper"), this.$imgContainer = this.$cont.find(".carousel-item-image"), this.$img = this.$imgContainer.find("img"), this.$trame = this.$cont.find(".carousel-item-trame"), this.isVideo = this.$imgContainer[0].className.indexOf("item-video") >= 0, this.$iframe = null, this.player = null, this.playerReady = !1, this.playerShown = !1, this.isVideo && (this.$iframe = this.$cont.find(".carousel-video"), this.player = $f(this.$iframe[0]), a.player.addEvent("ready", function() {
		a.playerReady = !0
	})), this.$text = this.$cont.find(".carousel-item-text"), this.$icon = this.$cont.find(".carousel-item-icon"), this.$subtitle = this.$cont.find(".carousel-item-subtitle"), this.$subtitleText = this.$cont.find(".carousel-item-subtitle-text"), this.$subtitleLine = this.$cont.find(".carousel-item-subtitle-line"), this.$timerLine = this.$cont.find(".carousel-item-subtitle-line-timer"), this.$link = this.$cont.find(".carousel-item-link"), this.onCloseTimeout = -1, this.direction = 1, this.initTitle(), this.initIcon(), this.initTimer(), this.$title = this.$cont.find(".page-header-fullscreen-title"), this.$titleWords = this.$cont.find(".page-header-fullscreen-title-word-inner")
}, CarouselItem.prototype.initTitle = function() {
	var a = this.$cont.find(".page-header-fullscreen-title-inner"),
		b = a.text().split(" "),
		c = "";
	b.forEach(function(a) {
		c += '<span class="page-header-fullscreen-title-word"><span class="page-header-fullscreen-title-word-inner">' + a + "</span></span> "
	}), a.html(c)
}, CarouselItem.prototype.initIcon = function() {
	var a = this.$cont.find(".carousel-item-icon svg");
	if(0 === a.length) return void(this.iconTimeline = null);
	var b, c, d, e = a.find("path:not(defs path), line:not(defs line), polyline:not(defs polyline), polygon:not(defs polygon), rect:not(defs rect), ellipse:not(defs ellipse)"),
		f = {
			drawSVG: "0"
		};
	this.iconTimeline = new TimelineMax({
		paused: !0,
		delay: 1.2
	});
	for(var g = 0, h = e.length; h > g; g++) b = e[g], g === h - 1 ? f.ease = Expo.easeOut : f.ease = Linear.easeNone, b.hasAttribute("data-ease") && (f.ease = b.getAttribute("data-ease")), c = b.hasAttribute("data-duration") ? parseFloat(b.getAttribute("data-duration")) : .9, d = b.hasAttribute("data-position") ? b.getAttribute("data-position") : "-=.5", this.iconTimeline.from(e[g], c, f, d)
}, CarouselItem.prototype.initTimer = function() {
	this.timer = new TimelineMax({
		paused: !0,
		onComplete: this.onTimerComplete.bind(this)
	}), this.timer.fromTo(this.$timerLine, 6, {
		scaleX: 0
	}, {
		scaleX: 1,
		ease: Linear.easeNone
	})
}, CarouselItem.prototype.initDraggable = function() {
	var a = this.$cont.hasClass("active");
	this.draggable = Draggable.create(this.$cont, {
		type: "x",
		zIndexBoost: !1,
		onDrag: this.onContainerDrag.bind(this),
		onDragEnd: this.onContainerDragEnd.bind(this),
		onDragStart: this.onContainerDragStart.bind(this)
	})[0], TweenMax.set(this.$imgWrapper, {
		xPercent: 100
	}), a ? (TweenMax.set(this.$imgContainer, {
		xPercent: 100
	}), TweenMax.set(this.$text, {
		opacity: 0
	})) : (TweenMax.set(this.$cont, {
		xPercent: 100
	}), TweenMax.set(this.$inner, {
		xPercent: -100
	}))
}, CarouselItem.prototype.open = function(a) {
	if(!this.opened) {
		a = a || 1;
		var b = this.$cont.hasClass("active");
		this.opened = !0, this.direction = a, RZ3.page.scrollEnabled = !1, this.$cont.addClass("active"), clearTimeout(this.onCloseTimeout), this.timer.progress(0), TweenMax.set([this.$cont, this.$inner], {
			x: 0
		}), b ? TweenMax.to(this.$text, 1, {
			opacity: 1,
			delay: .3
		}) : (TweenMax.fromTo(this.$cont, .8, {
			xPercent: 100 * a
		}, {
			xPercent: 0,
			ease: Expo.easeOut
		}), TweenMax.fromTo(this.$inner, .8, {
			xPercent: 100 * -a
		}, {
			xPercent: 0,
			ease: Expo.easeOut
		}), disableScroll(), setTimeout(function() {
			enableScroll()
		}, 1200)), TweenMax.fromTo(this.$trame, .8, {
			opacity: 0
		}, {
			opacity: 1,
			delay: .4
		});
		var c = 0;
		null !== RZ3.page.header && (c = RZ3.page.header.fullscreenImagesYTarget), TweenMax.fromTo(this.$imgWrapper, .8, {
			xPercent: 100 * a,
			y: c
		}, {
			xPercent: 0,
			y: c,
			ease: Expo.easeOut,
			delay: .4
		}), TweenMax.fromTo(this.$imgContainer, .8, {
			xPercent: 100 * -a
		}, {
			xPercent: 0,
			ease: Expo.easeOut,
			delay: .4
		}), TweenMax.fromTo(this.$img, .8, {
			xPercent: 20 * a
		}, {
			xPercent: 0,
			ease: Expo.easeOut,
			delay: .4
		}), TweenMax.fromTo(this.$subtitleText, .6, {
			yPercent: 100
		}, {
			yPercent: 0,
			delay: .7,
			ease: Expo.easeOut
		}), TweenMax.set(this.$subtitleLine, {
			css: {
				transformOrigin: a > 0 ? "right" : "left"
			}
		}), TweenMax.fromTo(this.$subtitleLine, .6, {
			scaleX: 0
		}, {
			scaleX: 1,
			delay: .3,
			ease: Expo.easeOut
		}), TweenMax.staggerFromTo(this.$titleWords, .6, {
			yPercent: 108
		}, {
			yPercent: 0,
			delay: .9,
			ease: Expo.easeOut
		}, .08), TweenMax.fromTo(this.$link, .6, {
			yPercent: 105
		}, {
			yPercent: 0,
			delay: 1.2,
			ease: Expo.easeOut,
			onComplete: this.onOpen.bind(this)
		}), this.playVideo(600), this.iconTimeline && this.iconTimeline.restart(!0)
	}
}, CarouselItem.prototype.close = function(a) {
	this.opened && (this.opened = !1, this.$cont.removeClass("active"), this.pauseVideo(1200), TweenMax.killTweensOf([this.$cont, this.$inner, this.$imgWrapper, this.$imgContainer, this.$img, this.$subtitleText, this.$subtitleLine, this.$titleWords, this.$link]), TweenMax.to(this.$cont, .8, {
		xPercent: a > 0 ? 100 : -100,
		ease: Expo.easeOut
	}), TweenMax.to(this.$inner, .8, {
		xPercent: a > 0 ? -100 : 100,
		ease: Expo.easeOut
	}), this.timer.pause(), this.onCloseTimeout = setTimeout(this.onClose.bind(this), 1e3))
}, CarouselItem.prototype.playVideo = function(a) {
	var b = this;
	!RZ3.isMobile && this.isVideo && null !== this.player && this.playerReady && setTimeout(function() {
		RZ3.page.header.isCollapsed || (b.playerShown || (TweenLite.to(b.$img, 1, {
			opacity: 0
		}), b.playerShown = !0), b.player.api("play"))
	}, a)
}, CarouselItem.prototype.pauseVideo = function(a) {
	var b = this,
		c = a || 0;
	!RZ3.isMobile && this.isVideo && null !== this.player && this.playerReady && setTimeout(function() {
		b.player.api("pause")
	}, c)
}, CarouselItem.prototype.resize = function() {
	var a = RZ3.windowSize.width / this.$img[0].naturalWidth,
		b = RZ3.windowSize.height / this.$img[0].naturalHeight,
		c = Math.max(a, b),
		d = parseInt(this.$img[0].naturalWidth * c),
		e = parseInt(this.$img[0].naturalHeight * c);
	this.$img.css({
		width: d,
		height: e,
		marginLeft: parseInt(.5 * (RZ3.windowSize.width - d)),
		marginTop: parseInt(.5 * (RZ3.windowSize.height - e))
	}), this.isVideo && this.$iframe.css({
		width: d,
		height: e,
		marginLeft: parseInt(.5 * (RZ3.windowSize.width - d)),
		marginTop: parseInt(.5 * (RZ3.windowSize.height - e))
	})
}, CarouselItem.prototype.destroy = function() {
	this.draggable.kill(), enableScroll(), this.iconTimeline && this.iconTimeline.kill()
}, CarouselItem.prototype.onOpen = function() {
	RZ3.nav.opened || this.timer.play(0), RZ3.page.scrollEnabled = !0
}, CarouselItem.prototype.onClose = function() {
	TweenMax.set(this.$cont, {
		xPercent: 100,
		x: 0
	}), TweenMax.set(this.$inner, {
		xPercent: -100,
		x: 0
	})
}, CarouselItem.prototype.onTimerComplete = function() {
	this.emit("complete")
}, CarouselItem.prototype.onContainerDragStart = function(a) {
	this.timer.pause(), null !== RZ3.bgCanvas && RZ3.bgCanvas.start(), RZ3.page.scrollEnabled = !1
}, CarouselItem.prototype.onContainerDrag = function(a) {
	TweenMax.set(this.$inner, {
		x: -this.draggable.x
	})
}, CarouselItem.prototype.onContainerDragEnd = function(a) {
	var b = Math.abs(this.draggable.x / this.$cont.width());
	b > .2 ? this.emit("complete", {
		direction: this.draggable.x < 0 ? -1 : 1
	}) : (null !== RZ3.bgCanvas && RZ3.bgCanvas.pause(), RZ3.page.scrollEnabled = !0, TweenMax.to([this.$cont, this.$inner], .7, {
		x: 0,
		ease: Expo.easeOut
	}), RZ3.nav.opened || this.timer.play())
};
var RZ3History = function(a) {
	var b = this;
	b.state = null, b.stateBlock = !0, b.transition = !1, b.options = a, b.currentAjaxRequest = null, b.init()
};
RZ3History.prototype.init = function() {
	var a = this;
	RZ3.ajaxEnabled && Modernizr.history && (window.onpopstate = $.proxy(a.onPopState, a))
}, RZ3History.prototype.pushFirstState = function(a, b, c) {
	history.pushState({
		firstPage: !0,
		href: window.location.href,
		nodeName: a,
		nodeType: b,
		isHome: c
	}, null, window.location.href)
}, RZ3History.prototype.onPopState = function(a) {
	var b = this;
	"undefined" != typeof a.state && null !== a.state && (b.transition = !0, b.loadPage(a, a.state))
}, RZ3History.prototype.boot = function(a, b, c, d) {
	var e = this;
	"static" == c && (e.loadBeginDate = new Date), d && e.options.homeHasClass ? RZ3.page = new Home(b, c, d) : a && "undefined" != typeof RZ3.nodeTypesClasses[a] ? RZ3.page = new window[RZ3.nodeTypesClasses[a]](b, c, d) : RZ3.page = new AbstractPage(b, c, d)
}, RZ3History.prototype.linkClick = function(a) {
	var b = this,
		c = a.currentTarget.className,
		d = a.currentTarget.href;
	if(-1 == d.indexOf("mailto:") && RZ3.ajaxEnabled && (a.preventDefault(), -1 == c.indexOf("active") && -1 == c.indexOf("no-ajax-link") && !b.transition)) {
		b.transition = !0;
		var e = a.currentTarget.className.indexOf("nav-link") >= 0 ? "nav" : "link",
			f = a.currentTarget.getAttribute("data-is-home"),
			g = "1" == f ? !0 : !1,
			h = a.currentTarget.getAttribute("data-title");
		a.currentTarget.className.indexOf("page-header-nav-link") >= 0 && (e = "header-nav"), "" === h && (h = a.currentTarget.innerHTML);
		var i = a.currentTarget.getAttribute("data-node-type");
		"pagegroup" == i && (i = "page");
		var j = {
			href: a.currentTarget.href,
			nodeType: i,
			nodeName: a.currentTarget.getAttribute("data-node-name"),
			index: Number(a.currentTarget.getAttribute("data-index")),
			transition: RZ3.page.type + "_to_" + i,
			context: e,
			isHome: g
		};
		history.pushState(j, h, a.currentTarget.href), b.loadPage(a, j)
	}
}, RZ3History.prototype.loadPage = function(a, b) {
	var c = this;
	c.currentAjaxRequest && 4 != c.currentAjaxRequest.readystate && c.currentAjaxRequest.abort(), c.loadBeginDate = new Date, removeClass(RZ3.nav.$header[0], "custom-color-standby"), addClass(RZ3.nav.$header[0], "navbar-header-loading"), RZ3.nav.animateHeaderOver();
	var d = 0;
	RZ3.$window.scrollTop() > 0 && (RZ3.page.resetScroll(), d = 1200, TweenLite.to(RZ3.$window, 1.2, {
		scrollTo: {
			y: 0,
			autokill: !1
		}
	})), TweenLite.to(RZ3.$footer, .6, {
		opacity: 0
	}), setTimeout(function() {
		c.currentAjaxRequest = $.ajax({
			url: b.href,
			type: "get",
			success: function(a) {
				RZ3.$ajaxContainer.append(a), RZ3.formerPage = RZ3.page, RZ3.page = null, c.boot(b.nodeType, b.nodeName, "ajax", b.isHome), RZ3.nav.update(b), "undefined" != typeof ga && ga("send", "pageview", {
					page: b.href,
					title: document.title
				})
			}
		})
	}, d)
};
var RZ3Nav = function() {
	var a = this;
	a.$cont = RZ3.$nav, a.$list = $("#nav-list"), a.$item = a.$list.find(".nav-item"), a.$link = a.$list.find(".nav-link"), a.$header = $("#navbar-header"), a.$headerProjectsBack = $("#navbar-header-projects-back"), a.$btn = $("#navbar-btn"), a.$btnBar = a.$btn.find("#navbar-btn-bars div"), a.$toggleBtn = $("#navbar-header-toggle"), a.$btnLabel = $("#navbar-btn-label"), a.$activeItemLine = $("#nav-active-item-line"), a.$navClose = $("#nav-close"), a.$navCloseLine = $("#nav-close-line"), a.$navCloseLogoInner = $("#nav-close-logo-inner"), a.$navCloseBtn = $("#nav-close-btn"), a.$navCloseBtnIcon = $("#nav-close-btn-icon"), a.$overlay = $("#nav-overlay"), a.headerOffset = -parseInt(a.$header.css("left")), a.headerOffsetTop = 0, a.headerHeight = a.$header.actual("outerHeight"), a.opened = !1, a.closeContext = null, a.init()
};
$.extend(RZ3Nav.prototype, TinyEmitter.prototype), RZ3Nav.prototype.init = function() {
	var a = this;
	a.initActiveItem(), a.initEvents()
}, RZ3Nav.prototype.initEvents = function() {
	var a = this;
	a.$link.length && RZ3.ajaxEnabled && a.$link.on("click", $.proxy(this.onLinkClick, this)), a.$headerProjectsBack.length && RZ3.ajaxEnabled && a.$headerProjectsBack.on("click", $.proxy(this.onLinkClick, this)), a.$toggleBtn.on("click", $.proxy(a.onToggleBtnClick, a)), isMediaMinSM() && (RZ3.isMobile || this.$header.on("mouseenter", $.proxy(a.onToggleHeaderOver, a)).on("mouseleave", $.proxy(a.onToggleHeaderOut, a)), this.$navCloseBtn.on("click", $.proxy(a.onNavCloseBtnClick, this))), isMediaMinSM() || a.$cont.on("swipeleft", $.proxy(a.contSwipeLeft, a)), a.$overlay.on("click", $.proxy(a.close, a)), RZ3.$window.on("keyup", $.proxy(a.onKeyUp, a))
}, RZ3Nav.prototype.destroyEvents = function() {
	var a = this;
	a.$link.length && RZ3.ajaxEnabled && a.$link.off("click", $.proxy(this.onLinkClick, this)), a.$toggleBtn.off("click", $.proxy(a.onToggleBtnClick, a)), isMediaMinSM() && (RZ3.isMobile || this.$header.off("mouseenter", $.proxy(a.onToggleHeaderOver, a)).off("mouseleave", $.proxy(a.onToggleHeaderOut, a)), this.$navCloseBtn.off("click", $.proxy(a.onNavCloseBtnClick, this))), isMediaMinSM() || a.$cont.off("swipeleft", $.proxy(a.contSwipeLeft, a)), a.$overlay.off("click", $.proxy(a.close, a)), RZ3.$window.off("keyup", $.proxy(a.onKeyUp, a))
}, RZ3Nav.prototype.destroy = function() {
	var a = this;
	a.destroyEvents()
}, RZ3Nav.prototype.initActiveItem = function() {
	var a = this.$item.find(".active"),
		b = this.$item.find(".current-simulated");
	itemY = 0, b.length && removeClass(b[0], "current-simulated"), 0 === a.length && (a = this.$item.eq(0), addClass(this.$link[0], "current-simulated")), a.length && (itemY = a[0].offsetTop + 58), TweenMax.set([this.$activeItemLine, this.$navClose], {
		y: itemY
	})
}, RZ3Nav.prototype.animateHeader = function(a) {
	var b = this;
	if(b.headerPosition = a, isMediaMinSM()) {
		var c = 0,
			d = 250;
		switch(topPos = 250, a) {
			case "top":
				c = 60 - d;
				break;
			case "carousel":
				c = RZ3.page.header.textOffsetTop - 1 - d;
				break;
			case "centered":
				c = (RZ3.windowSize.height - b.headerHeight) / 2 - d;
				break;
			case "bottom":
				c = RZ3.windowSize.height - b.headerHeight - d, c -= isMediaMinLG() ? 50 : 30;
				break;
			case "footer":
				c = RZ3.windowSize.height - RZ3.page.footerHeight + 50 - d
		}
		TweenLite.to(b.$header, 1, {
			y: c,
			onComplete: function() {
				b.updateOffsetTop()
			}
		})
	}
}, RZ3Nav.prototype.onToggleBtnClick = function(a) {
	var b = this;
	b.opened ? b.close("toggleBtn") : b.open()
}, RZ3Nav.prototype.onToggleHeaderOver = function(a) {
	this.opened || this.$header.hasClass("navbar-header-loading") || "maintenance" == RZ3.page.id || (this.animateHeaderOver(), TweenMax.to(this.$cont, .6, {
		xPercent: Math.floor(27 / this.$cont.width() * 100),
		ease: Expo.easeOut,
		delay: .3
	}))
}, RZ3Nav.prototype.animateHeaderOver = function() {
	TweenMax.to(this.$header, .8, {
		x: this.headerOffset,
		ease: Expo.easeOut
	}), TweenMax.to(this.$btnBar[0], .3, {
		xPercent: 102
	}), TweenMax.to(this.$btnBar[1], .6, {
		scaleX: 2.24,
		delay: .1,
		ease: Expo.easeOut
	}), TweenMax.to(this.$btnBar[2], .3, {
		xPercent: 102,
		delay: .1
	}), TweenMax.fromTo(this.$btnLabel, .5, {
		x: 30
	}, {
		x: 0,
		alpha: 1,
		delay: .1,
		ease: Expo.easeOut
	})
}, RZ3Nav.prototype.onToggleHeaderOut = function(a) {
	this.opened || this.$header.hasClass("navbar-header-loading") || "maintenance" == RZ3.page.id || (TweenMax.killTweensOf(this.$cont), this.animateaHeaderOut(), TweenMax.to(this.$cont, .4, {
		xPercent: 0
	}))
}, RZ3Nav.prototype.animateaHeaderOut = function() {
	TweenMax.killTweensOf([this.$header, this.$btnBar, this.$btnLabel]), TweenMax.to(this.$header, .5, {
		x: 0
	}), TweenMax.to(this.$btnBar[0], .3, {
		xPercent: 0
	}), TweenMax.to(this.$btnBar[1], .3, {
		scaleX: 1
	}), TweenMax.to(this.$btnBar[2], .3, {
		xPercent: 0
	}), TweenMax.to(this.$btnLabel, .3, {
		alpha: 0,
		x: 20
	})
}, RZ3Nav.prototype.onKeyUp = function(a) {
	var b = this;
	27 == a.keyCode && b.opened && b.close("key")
}, RZ3Nav.prototype.onNavCloseBtnClick = function() {
	this.close("closeBtn")
}, RZ3Nav.prototype.contSwipeLeft = function(a) {
	var b = this;
	b.opened && b.close("swipe")
}, RZ3Nav.prototype.open = function() {
	"maintenance" != RZ3.page.id && (this.opened = !0, TweenMax.killTweensOf([this.$cont, this.$header]), isMediaMinSM() ? this.openMediaMinSM() : this.openMediaXS(), null !== RZ3.page.carousel && RZ3.page.carousel.items[RZ3.page.carousel.currentItemIndex].timer.pause(), TweenLite.to(this.$overlay, .8, {
		autoAlpha: .4
	}), addClass(RZ3.$body[0], "nav-opened"), this.emit("open"))
}, RZ3Nav.prototype.openMediaXS = function() {
	var a = this;
	RZ3.page.isHome && (RZ3.$loading[0].style.display = "none"), TweenLite.to(a.$btnBar[0], .4, {
		top: 7,
		delay: .5
	}), TweenLite.to(a.$btnBar[1], .4, {
		opacity: 0,
		delay: .5
	}), TweenLite.to(a.$btnBar[2], .4, {
		top: 7,
		delay: .5
	}), TweenLite.to(a.$btnBar[0], .4, {
		rotation: 45,
		delay: .8
	}), TweenLite.to(a.$btnBar[2], .4, {
		rotation: -45,
		delay: .8
	}), a.$cont[0].style.width = Math.round(.75 * RZ3.windowSize.width) + "px", TweenLite.fromTo(a.$cont, .5, {
		x: -RZ3.windowSize.width
	}, {
		x: 0
	});
	var b = Math.round(.75 * RZ3.windowSize.width);
	TweenLite.to(a.$header, .9, {
		x: b
	}), TweenLite.to(RZ3.$footer, .9, {
		x: b
	}), TweenLite.to(RZ3.page.$cont, .9, {
		x: b
	})
}, RZ3Nav.prototype.openMediaMinSM = function() {
	var a = this;
	disableScroll();
	var b = 0;
	if(a.$item.addClass("nav-item-hidden"), RZ3.page.isHome && (RZ3.$loading[0].style.display = "none"), RZ3.page.header.isCollapsed) RZ3.$window.scrollTop() > RZ3.page.scrollTopLimitFooter ? (TweenLite.to(RZ3.$window, .6, {
		scrollTo: {
			y: RZ3.page.scrollTopEnd,
			autoKill: !1
		}
	}), b += .3) : RZ3.$footer[0].style.opacity = 0;
	else {
		var c = 0;
		RZ3.$window.scrollTop() > 0 && (TweenMax.to(RZ3.$window, .6, {
			scrollTo: {
				y: 0,
				autoKill: !1
			}
		}), c += 600), null !== RZ3.page.carousel && setTimeout(function() {
			RZ3.page.carousel.$inner[0].style.position = "absolute"
		}, c), TweenLite.killTweensOf(RZ3.$footer), RZ3.$footer[0].style.opacity = 0, b += .3
	}
	b += .1, TweenMax.to(this.$cont, .9, {
		xPercent: 100,
		ease: Expo.easeOut,
		delay: b
	}), TweenMax.to(this.$header, .4, {
		x: -this.$header.width(),
		ease: Expo.easeOut
	}), b += .1, TweenMax.to([RZ3.$footer, $(".page-content")], .9, {
		x: Math.floor(.3 * RZ3.windowSize.width),
		delay: b
	}), this.$activeItemLine.length && TweenMax.from(this.$activeItemLine, .6, {
		scaleX: 0,
		delay: b,
		ease: Expo.easeOut
	}), b += .4, TweenMax.staggerFrom(this.$item.find("a"), .5, {
		yPercent: 105,
		delay: b,
		ease: Expo.easeOut
	}, .08), TweenMax.from(this.$navCloseLine, .4, {
		scaleX: 0,
		delay: b,
		ease: Expo.easeOut
	}), b += .2, TweenMax.from(this.$navCloseLogoInner, .5, {
		yPercent: 100,
		delay: b,
		ease: Expo.easeOut
	}), b += .2, TweenMax.from(this.$navCloseBtnIcon, .5, {
		yPercent: -150,
		delay: b,
		ease: Expo.easeOut
	}), TweenMax.set(this.$btnBar[0], {
		xPercent: 0
	}), TweenMax.set(this.$btnBar[1], {
		scaleX: 1
	}), TweenMax.set(this.$btnBar[2], {
		xPercent: 0
	}), TweenMax.set(this.$btnLabel, {
		alpha: 0,
		x: 20
	}), setTimeout(function() {
		a.$item.removeClass("nav-item-hidden")
	}, 2e3)
}, RZ3Nav.prototype.close = function(a) {
	var b = this;
	isMediaMinSM() ? this.closeMediaMinSM(a) : this.closeMediaXS(), b.closeContext = a, TweenLite.to(b.$overlay, .8, {
		autoAlpha: 0
	}), removeClass(RZ3.$body[0], "nav-opened"), this.emit("close")
}, RZ3Nav.prototype.closeMediaXS = function() {
	var a = this;
	TweenLite.to(a.$btnBar[0], .4, {
		rotation: 0
	}), TweenLite.to(a.$btnBar[2], .4, {
		rotation: 0
	}), TweenLite.to(a.$btnBar[0], .4, {
		top: 0,
		delay: .3
	}), TweenLite.to(a.$btnBar[1], .4, {
		opacity: 1,
		delay: .3
	}), TweenLite.to(a.$btnBar[2], .4, {
		top: 14,
		delay: .3
	}), TweenLite.to(a.$cont, .5, {
		x: -RZ3.windowSize.width,
		onComplete: this.onClose.bind(this)
	}), TweenLite.to(a.$header, .5, {
		x: 0
	}), TweenLite.to(RZ3.$footer, .5, {
		x: 0
	}), TweenLite.to(RZ3.page.$cont, .5, {
		x: 0,
		onComplete: function() {
			RZ3.page.$cont[0].removeAttribute("style"), RZ3.page.isHome && !this.opened && (RZ3.$loading[0].style.display = "block")
		}
	})
}, RZ3Nav.prototype.closeMediaMinSM = function(a) {
	null !== RZ3.page.carousel && setTimeout(function() {
		RZ3.page.carousel.$inner[0].style.position = ""
	}, 900), TweenMax.to(this.$cont, .9, {
		xPercent: 0,
		ease: Expo.easeOut,
		onComplete: this.onClose.bind(this)
	}), TweenMax.to(this.$header, .4, {
		x: 0,
		ease: Expo.easeOut
	}), TweenMax.to([RZ3.$footer, $(".page-content")], .4, {
		x: 0,
		onComplete: function() {
			TweenMax.set([RZ3.$footer, $(".page-content")], {
				clearProps: "transform"
			})
		}.bind(this)
	}), setTimeout(function() {
		enableScroll(), RZ3.page.isHome && "linkClick" !== a && !this.opened && (RZ3.$loading[0].style.display = "block")
	}, 900)
}, RZ3Nav.prototype.onClose = function() {
	var a = this;
	this.opened = !1, isMediaMinSM() && RZ3.$window.scrollTop() <= RZ3.page.scrollTopLimitFooter && !RZ3.history.transition && RZ3.$footer[0].removeAttribute("style"), null !== RZ3.page.carousel && null !== RZ3.page.header && (RZ3.page.header.isCollapsed || RZ3.page.carousel.items[RZ3.page.carousel.currentItemIndex].timer.play()), this.emit("closed"), setTimeout(function() {
		a.closeContext = null
	}, 1e3)
}, RZ3Nav.prototype.update = function(a) {
	var b = this;
	b.$link.removeClass("active");
	var c = a.nodeName;
	c.indexOf("projects") >= 0 || "project" == a.nodeType ? c = "projects" : c.indexOf("projets") >= 0 || "project" == a.nodeType ? c = "projets" : RZ3.page.group && (c = RZ3.page.parentNodeName);
	var d = $("#nav-link-" + c);
	d.length && addClass(d[0], "active"), this.initActiveItem()
}, RZ3Nav.prototype.updateOffsetTop = function() {
	isMediaMinSM() && this.$header.length && (this.headerOffsetTop = this.$header.offset().top - RZ3.$window.scrollTop())
}, RZ3Nav.prototype.resize = function(a) {
	this.headerHeight = this.$header.actual("outerHeight"), this.updateOffsetTop(), this.animateHeader(this.headerPosition)
}, RZ3Nav.prototype.onLinkClick = function(a) {
	a.preventDefault(), this.opened && this.close("linkClick"), setTimeout(function() {
		RZ3.history.linkClick(a)
	}, 1e3)
};
var RZ3Footer = function() {
	var a = this;
	a.$cont = RZ3.$footer, a.$link = a.$cont.find(".credits-footer-link"), a.init()
};
$.extend(RZ3Footer.prototype, TinyEmitter.prototype), RZ3Footer.prototype.init = function() {
	var a = this;
	a.initEvents()
}, RZ3Footer.prototype.initEvents = function() {
	var a = this;
	a.$link.length && RZ3.ajaxEnabled && a.$link.on("click", $.proxy(RZ3.history.linkClick, RZ3.history))
}, RZ3Footer.prototype.destroyEvents = function() {
	var a = this;
	a.$link.length && RZ3.ajaxEnabled && a.$link.on("click", $.proxy(RZ3.history.linkClick, RZ3.history))
}, RZ3Footer.prototype.destroy = function() {
	var a = this;
	a.destroyEvents()
};
var RZ3 = {};
RZ3.$window = null, RZ3.$body = null, RZ3.windowSize = {
	width: 1920,
	height: 1280,
	innerWidth: 1920,
	jqueryWidth: 1920,
	jqueryHeight: 1280
}, RZ3.gridSize = 100, RZ3.firstResize = !0, RZ3.$bgCanvas = null, RZ3.bgCanvas = null, RZ3.$nav = null, RZ3.nav = null, RZ3.$loading = null, RZ3.$loadingImage = null, RZ3.$backTopBtn = null, RZ3.$footer = null, RZ3.footer = null, RZ3.isMobile = !1, RZ3.isIE = !1, RZ3.page = null, RZ3.formerPage = null, RZ3.nodeTypesClasses = {
	page: "RZPage",
	neutral: "RZPage",
	projectfeed: "RZProjects",
	project: "RZProject",
	socialfeedblock: "SocialFeedBlock",
	fullscreenblock: "FullscreenBlock",
	columnsblock: "ColumnsBlock",
	iconscontainerblock: "IconsContainerBlock",
	contactblock: "ContactBlock",
	mapblock: "MapBlock",
	textblock: "TextBlock",
	roadizmadeblock: "RoadizMadeBlock"
}, RZ3.$ajaxContainer = null, RZ3.ajaxEnabled = !0, RZ3.gmapLoaded = !1, RZ3.creditsList = [{
	name: "roadiz",
	website: "www.roadiz.io"
}, {
	name: "GSAP",
	website: "www.greensock.com"
}, {
	name: "PaperJS",
	website: "www.paperjs.org"
}], RZ3.onDocumentReady = function(a) {
	for(var b in temp) RZ3[b] = temp[b];
	RZ3.init()
}, RZ3.init = function() {
	var a = this;
	logCredits("REZO ZERO", "#00BF81", null, a.creditsList, "#ffffff"), TweenLite.defaultEase = Quart.easeOut, a.$window = $(window), a.$body = $("body"), a.$ajaxContainer = $("#ajax-container");
	var b = getViewportSize();
	a.windowSize = {
		width: b.width,
		height: b.height,
		innerWidth: a.$window.innerWidth(),
		jqueryWidth: a.$window.width(),
		jqueryHeight: a.$window.height()
	}, a.isMobile = isMobile.any === !1 ? !1 : !0, a.isMobile ? addClass(a.$body[0], "is-mobile") : addClass(a.$body[0], "is-desktop"), (navigator.userAgent.indexOf("MSIE") >= 0 || navigator.userAgent.indexOf("Trident") >= 0) && (a.isIE = !0, addClass(a.$body[0], "ie")), Modernizr.history || (RZ3.ajaxEnabled = !1), a.history = new RZ3History({
		homeHasClass: !0
	});
	var c = a.$body[0].getAttribute("data-is-home"),
		d = "1" == c ? !0 : !1;
	a.$loading = $("#loading"), a.$loadingImage = $("#loading-image"), a.$bgCanvas = $("#background-canvas"), a.bgCanvas = null, a.$bgCanvas.length && Modernizr.canvas && (a.bgCanvas = new BackgroundCanvas(a.$bgCanvas[0].id)), a.$backTopBtn = $("#back-top-btn"), a.$backTopBtn.length && (a.$backTopBtn.on("click", $.proxy(a.backTopBtnClick, a)), a.isMobile && removeClass(a.$backTopBtn[0], "back-top-btn-hidden")), a.$nav = $("#nav"), a.$nav.length && (a.nav = new RZ3Nav), a.$footer = $("#footer"), a.$footer.length && (a.footer = new RZ3Footer), a.$window.on("resize", debounce($.proxy(a.resize, a), 50, !1)), a.$window.on("orientationchange", debounce($.proxy(a.resize, a), 50, !1)), gaTrackErrors(), a.history.boot(a.$body[0].getAttribute("data-node-type"), a.$body[0].id, "static", d), a.$window.trigger("resize")
}, RZ3.backTopBtnClick = function(a) {
	var b = this;
	b.history.transition || TweenLite.to(window, 1, {
		scrollTo: {
			y: 0,
			autoKill: !1
		}
	})
}, RZ3.resize = function() {
	var a = this,
		b = getViewportSize();
	if(!a.firstResize)
		if(a.isMobile) {
			if(a.$window.width() == a.windowSize.jqueryWidth || a.$window.height() == a.windowSize.jqueryHeight) return
		} else if(b.width == a.windowSize.width && b.height == a.windowSize.height) return;
	a.windowSize = getViewportSize(), a.windowSize.innerWidth = a.$window.innerWidth(), a.windowSize.jqueryWidth = a.$window.width(), a.windowSize.jqueryHeight = a.$window.height();
	var c = Math.floor(a.windowSize.innerWidth / a.gridSize);
	c % 2 === 1 && (c -= 1);
	var d = c * a.gridSize,
		e = a.windowSize.innerWidth % a.gridSize,
		f = $(".page-header-bar-inner");
	if(0 !== e && isMediaMinSM()) {
		var g = Math.round((a.windowSize.innerWidth - c * a.gridSize) / 2),
			h = g,
			i = $(".inner"),
			j = i.actual("outerWidth");
		if(this.nav.resize(g), (h > 60 || j >= d) && (h = -(a.gridSize - h)), f.length) {
			var k = a.gridSize + h,
				l = RZ3.nav.$header.actual("outerWidth") - RZ3.nav.headerOffset;
			k > l && (k = l), f[0].style.right = k + "px", f[0].style.left = k + "px"
		}
	} else TweenMax.killTweensOf(a.nav.$header), TweenMax.set(a.nav.$header, {
		clearProps: "all"
	}), a.nav.$header.length && (a.nav.$header[0].style = ""), f.length && (f[0].style.right = "", f[0].style.left = "");
	a.firstResize && (a.firstResize = !1)
}, RZ3.initMaps = function() {
	var a = this;
	a.gmapLoaded = !0;
	for(var b = 0; b < a.page.blockLength; b++) {
		var c = a.page.blocks[b];
		c.initMaps()
	}
}, "undefined" != typeof paper && paper.install(window), window.onload = function() {
	RZ3.onDocumentReady()
};