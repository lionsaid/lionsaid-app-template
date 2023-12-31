var CanvasKitInit = (() => {
    var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
    if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
    return (
        function (CanvasKitInit) {
            CanvasKitInit = CanvasKitInit || {};


            null;
            var t;
            t || (t = typeof CanvasKitInit !== 'undefined' ? CanvasKitInit : {});
            var da = Object.assign, fa, ha;
            t.ready = new Promise(function (a, b) {
                fa = a;
                ha = b
            });
            (function (a) {
                a.Vd = a.Vd || [];
                a.Vd.push(function () {
                    a.MakeSWCanvasSurface = function (b) {
                        var c = b;
                        if ("CANVAS" !== c.tagName && (c = document.getElementById(b), !c)) throw"Canvas with id " + b + " was not found";
                        if (b = a.MakeSurface(c.width, c.height)) b.Nd = c;
                        return b
                    };
                    a.MakeCanvasSurface || (a.MakeCanvasSurface = a.MakeSWCanvasSurface);
                    a.MakeSurface = function (b, c) {
                        var f = {
                            width: b,
                            height: c,
                            colorType: a.ColorType.RGBA_8888,
                            alphaType: a.AlphaType.Unpremul,
                            colorSpace: a.ColorSpace.SRGB
                        }, h = b * c * 4, l = a._malloc(h);
                        if (f = a.Surface._makeRasterDirect(f,
                            l, 4 * b)) f.Nd = null, f.Cf = b, f.zf = c, f.Bf = h, f.bf = l, f.getCanvas().clear(a.TRANSPARENT);
                        return f
                    };
                    a.MakeRasterDirectSurface = function (b, c, f) {
                        return a.Surface._makeRasterDirect(b, c.byteOffset, f)
                    };
                    a.Surface.prototype.flush = function (b) {
                        a.Od(this.Md);
                        this._flush();
                        if (this.Nd) {
                            var c = new Uint8ClampedArray(a.HEAPU8.buffer, this.bf, this.Bf);
                            c = new ImageData(c, this.Cf, this.zf);
                            b ? this.Nd.getContext("2d").putImageData(c, 0, 0, b[0], b[1], b[2] - b[0], b[3] - b[1]) : this.Nd.getContext("2d").putImageData(c, 0, 0)
                        }
                    };
                    a.Surface.prototype.dispose =
                        function () {
                            this.bf && a._free(this.bf);
                            this.delete()
                        };
                    a.Od = a.Od || function () {
                    }
                })
            })(t);
            (function (a) {
                a.Vd = a.Vd || [];
                a.Vd.push(function () {
                    function b(l, n, q) {
                        return l && l.hasOwnProperty(n) ? l[n] : q
                    }

                    function c(l) {
                        var n = ka(la);
                        la[n] = l;
                        return n
                    }

                    function f(l) {
                        return l.naturalHeight || l.videoHeight || l.displayHeight || l.height
                    }

                    function h(l) {
                        return l.naturalWidth || l.videoWidth || l.displayWidth || l.width
                    }

                    a.GetWebGLContext = function (l, n) {
                        if (!l) throw"null canvas passed into makeWebGLContext";
                        var q = {
                            alpha: b(n, "alpha", 1),
                            depth: b(n, "depth", 1),
                            stencil: b(n, "stencil", 8),
                            antialias: b(n, "antialias", 0),
                            premultipliedAlpha: b(n,
                                "premultipliedAlpha", 1),
                            preserveDrawingBuffer: b(n, "preserveDrawingBuffer", 0),
                            preferLowPowerToHighPerformance: b(n, "preferLowPowerToHighPerformance", 0),
                            failIfMajorPerformanceCaveat: b(n, "failIfMajorPerformanceCaveat", 0),
                            enableExtensionsByDefault: b(n, "enableExtensionsByDefault", 1),
                            explicitSwapControl: b(n, "explicitSwapControl", 0),
                            renderViaOffscreenBackBuffer: b(n, "renderViaOffscreenBackBuffer", 0)
                        };
                        q.majorVersion = n && n.majorVersion ? n.majorVersion : "undefined" !== typeof WebGL2RenderingContext ? 2 : 1;
                        if (q.explicitSwapControl) throw"explicitSwapControl is not supported";
                        l = ma(l, q);
                        if (!l) return 0;
                        na(l);
                        return l
                    };
                    a.deleteContext = function (l) {
                        v === qa[l] && (v = null);
                        "object" === typeof JSEvents && JSEvents.Hg(qa[l].je.canvas);
                        qa[l] && qa[l].je.canvas && (qa[l].je.canvas.yf = void 0);
                        qa[l] = null
                    };
                    a._setTextureCleanup({
                        deleteTexture: function (l, n) {
                            var q = la[n];
                            q && qa[l].je.deleteTexture(q);
                            la[n] = null
                        }
                    });
                    a.MakeGrContext = function (l) {
                        if (!this.Od(l)) return null;
                        var n = this._MakeGrContext();
                        if (!n) return null;
                        n.Md = l;
                        return n
                    };
                    a.MakeOnScreenGLSurface = function (l, n, q, w) {
                        if (!this.Od(l.Md)) return null;
                        n = this._MakeOnScreenGLSurface(l, n, q, w);
                        if (!n) return null;
                        n.Md = l.Md;
                        return n
                    };
                    a.MakeRenderTarget = function () {
                        var l = arguments[0];
                        if (!this.Od(l.Md)) return null;
                        if (3 === arguments.length) {
                            var n = this._MakeRenderTargetWH(l, arguments[1], arguments[2]);
                            if (!n) return null
                        } else if (2 === arguments.length) {
                            if (n = this._MakeRenderTargetII(l, arguments[1]), !n) return null
                        } else return null;
                        n.Md = l.Md;
                        return n
                    };
                    a.MakeWebGLCanvasSurface = function (l, n, q) {
                        n = n || null;
                        var w = l, x = "undefined" !== typeof OffscreenCanvas && w instanceof OffscreenCanvas;
                        if (!("undefined" !== typeof HTMLCanvasElement && w instanceof HTMLCanvasElement || x || (w = document.getElementById(l), w))) throw"Canvas with id " + l + " was not found";
                        l = this.GetWebGLContext(w, q);
                        if (!l || 0 > l) throw"failed to create webgl context: err " + l;
                        l = this.MakeGrContext(l);
                        n = this.MakeOnScreenGLSurface(l, w.width, w.height, n);
                        return n ? n : (n = w.cloneNode(!0), w.parentNode.replaceChild(n, w), n.classList.add("ck-replaced"), a.MakeSWCanvasSurface(n))
                    };
                    a.MakeCanvasSurface = a.MakeWebGLCanvasSurface;
                    a.Surface.prototype.makeImageFromTexture =
                        function (l, n) {
                            a.Od(this.Md);
                            l = c(l);
                            if (n = this._makeImageFromTexture(this.Md, l, n)) n.Ke = l;
                            return n
                        };
                    a.Surface.prototype.makeImageFromTextureSource = function (l, n) {
                        n || (n = {
                            height: f(l),
                            width: h(l),
                            colorType: a.ColorType.RGBA_8888,
                            alphaType: a.AlphaType.Unpremul
                        });
                        n.colorSpace || (n.colorSpace = a.ColorSpace.SRGB);
                        a.Od(this.Md);
                        var q = v.je, w = q.createTexture();
                        q.bindTexture(q.TEXTURE_2D, w);
                        2 === v.version ? q.texImage2D(q.TEXTURE_2D, 0, q.RGBA, n.width, n.height, 0, q.RGBA, q.UNSIGNED_BYTE, l) : q.texImage2D(q.TEXTURE_2D, 0, q.RGBA,
                            q.RGBA, q.UNSIGNED_BYTE, l);
                        q.bindTexture(q.TEXTURE_2D, null);
                        return this.makeImageFromTexture(w, n)
                    };
                    a.Surface.prototype.updateTextureFromSource = function (l, n) {
                        if (l.Ke) {
                            a.Od(this.Md);
                            var q = v.je, w = la[l.Ke];
                            q.bindTexture(q.TEXTURE_2D, w);
                            2 === v.version ? q.texImage2D(q.TEXTURE_2D, 0, q.RGBA, h(n), f(n), 0, q.RGBA, q.UNSIGNED_BYTE, n) : q.texImage2D(q.TEXTURE_2D, 0, q.RGBA, q.RGBA, q.UNSIGNED_BYTE, n);
                            q.bindTexture(q.TEXTURE_2D, null);
                            this._resetContext();
                            la[l.Ke] = null;
                            l.Ke = c(w);
                            n = l.getImageInfo();
                            n.colorSpace = l.getColorSpace();
                            q = this._makeImageFromTexture(this.Md, l.Ke, n);
                            w = l.Ld.Qd;
                            var x = l.Ld.$d;
                            l.Ld.Qd = q.Ld.Qd;
                            l.Ld.$d = q.Ld.$d;
                            q.Ld.Qd = w;
                            q.Ld.$d = x;
                            q.delete();
                            n.colorSpace.delete()
                        }
                    };
                    a.MakeLazyImageFromTextureSource = function (l, n) {
                        n || (n = {
                            height: f(l),
                            width: h(l),
                            colorType: a.ColorType.RGBA_8888,
                            alphaType: a.AlphaType.Unpremul
                        });
                        n.colorSpace || (n.colorSpace = a.ColorSpace.SRGB);
                        var q = {
                            makeTexture: function () {
                                var w = v, x = w.je, J = x.createTexture();
                                x.bindTexture(x.TEXTURE_2D, J);
                                2 === w.version ? x.texImage2D(x.TEXTURE_2D, 0, x.RGBA, n.width, n.height,
                                    0, x.RGBA, x.UNSIGNED_BYTE, l) : x.texImage2D(x.TEXTURE_2D, 0, x.RGBA, x.RGBA, x.UNSIGNED_BYTE, l);
                                x.bindTexture(x.TEXTURE_2D, null);
                                return c(J)
                            }, freeSrc: function () {
                            }
                        };
                        "VideoFrame" === l.constructor.name && (q.freeSrc = function () {
                            l.close()
                        });
                        return a.Image._makeFromGenerator(n, q)
                    };
                    a.Od = function (l) {
                        return l ? na(l) : !1
                    }
                })
            })(t);
            (function (a) {
                function b(e, d, g, m, r) {
                    for (var y = 0; y < e.length; y++) d[y * g + (y * r + m + g) % g] = e[y];
                    return d
                }

                function c(e) {
                    for (var d = e * e, g = Array(d); d--;) g[d] = 0 === d % (e + 1) ? 1 : 0;
                    return g
                }

                function f(e) {
                    return e ? e.constructor === Float32Array && 4 === e.length : !1
                }

                function h(e) {
                    return (q(255 * e[3]) << 24 | q(255 * e[0]) << 16 | q(255 * e[1]) << 8 | q(255 * e[2]) << 0) >>> 0
                }

                function l(e) {
                    if (e && e._ck) return e;
                    if (e instanceof Float32Array) {
                        for (var d = Math.floor(e.length / 4), g = new Uint32Array(d), m = 0; m < d; m++) g[m] = h(e.slice(4 * m, 4 * (m + 1)));
                        return g
                    }
                    if (e instanceof
                        Uint32Array) return e;
                    if (e instanceof Array && e[0] instanceof Float32Array) return e.map(h)
                }

                function n(e) {
                    if (void 0 === e) return 1;
                    var d = parseFloat(e);
                    return e && -1 !== e.indexOf("%") ? d / 100 : d
                }

                function q(e) {
                    return Math.round(Math.max(0, Math.min(e || 0, 255)))
                }

                function w(e, d) {
                    d && d._ck || a._free(e)
                }

                function x(e, d, g) {
                    if (!e || !e.length) return V;
                    if (e && e._ck) return e.byteOffset;
                    var m = a[d].BYTES_PER_ELEMENT;
                    g || (g = a._malloc(e.length * m));
                    a[d].set(e, g / m);
                    return g
                }

                function J(e) {
                    var d = {de: V, count: e.length, Le: a.ColorType.RGBA_F32};
                    if (e instanceof Float32Array) d.de = x(e, "HEAPF32"), d.count = e.length / 4; else if (e instanceof Uint32Array) d.de = x(e, "HEAPU32"), d.Le = a.ColorType.RGBA_8888; else if (e instanceof Array) {
                        if (e && e.length) {
                            for (var g = a._malloc(16 * e.length), m = 0, r = g / 4, y = 0; y < e.length; y++) for (var D = 0; 4 > D; D++) a.HEAPF32[r + m] = e[y][D], m++;
                            e = g
                        } else e = V;
                        d.de = e
                    } else throw"Invalid argument to copyFlexibleColorArray, Not a color array " + typeof e;
                    return d
                }

                function K(e) {
                    if (!e) return V;
                    if (e.length) {
                        if (6 === e.length || 9 === e.length) return x(e, "HEAPF32",
                            Oa), 6 === e.length && a.HEAPF32.set(Fd, 6 + Oa / 4), Oa;
                        if (16 === e.length) {
                            var d = yb.toTypedArray();
                            d[0] = e[0];
                            d[1] = e[1];
                            d[2] = e[3];
                            d[3] = e[4];
                            d[4] = e[5];
                            d[5] = e[7];
                            d[6] = e[12];
                            d[7] = e[13];
                            d[8] = e[15];
                            return Oa
                        }
                        throw"invalid matrix size";
                    }
                    d = yb.toTypedArray();
                    d[0] = e.m11;
                    d[1] = e.m21;
                    d[2] = e.m41;
                    d[3] = e.m12;
                    d[4] = e.m22;
                    d[5] = e.m42;
                    d[6] = e.m14;
                    d[7] = e.m24;
                    d[8] = e.m44;
                    return Oa
                }

                function Q(e) {
                    if (!e) return V;
                    var d = Yb.toTypedArray();
                    if (e.length) {
                        if (16 !== e.length && 6 !== e.length && 9 !== e.length) throw"invalid matrix size";
                        if (16 === e.length) return x(e,
                            "HEAPF32", Za);
                        d.fill(0);
                        d[0] = e[0];
                        d[1] = e[1];
                        d[3] = e[2];
                        d[4] = e[3];
                        d[5] = e[4];
                        d[7] = e[5];
                        d[12] = e[6];
                        d[13] = e[7];
                        d[15] = e[8];
                        6 === e.length && (d[12] = 0, d[13] = 0, d[15] = 1);
                        return Za
                    }
                    d[0] = e.m11;
                    d[1] = e.m21;
                    d[2] = e.m31;
                    d[3] = e.m41;
                    d[4] = e.m12;
                    d[5] = e.m22;
                    d[6] = e.m32;
                    d[7] = e.m42;
                    d[8] = e.m13;
                    d[9] = e.m23;
                    d[10] = e.m33;
                    d[11] = e.m43;
                    d[12] = e.m14;
                    d[13] = e.m24;
                    d[14] = e.m34;
                    d[15] = e.m44;
                    return Za
                }

                function A(e, d) {
                    return x(e, "HEAPF32", d || fb)
                }

                function L(e, d, g, m) {
                    var r = Zb.toTypedArray();
                    r[0] = e;
                    r[1] = d;
                    r[2] = g;
                    r[3] = m;
                    return fb
                }

                function S(e) {
                    for (var d =
                        new Float32Array(4), g = 0; 4 > g; g++) d[g] = a.HEAPF32[e / 4 + g];
                    return d
                }

                function T(e, d) {
                    return x(e, "HEAPF32", d || ia)
                }

                function oa(e, d) {
                    return x(e, "HEAPF32", d || $b)
                }

                function ta() {
                    for (var e = 0, d = 0; d < arguments.length - 1; d += 2) e += arguments[d] * arguments[d + 1];
                    return e
                }

                function gb(e, d, g) {
                    for (var m = Array(e.length), r = 0; r < g; r++) for (var y = 0; y < g; y++) {
                        for (var D = 0, I = 0; I < g; I++) D += e[g * r + I] * d[g * I + y];
                        m[r * g + y] = D
                    }
                    return m
                }

                function hb(e, d) {
                    for (var g = gb(d[0], d[1], e), m = 2; m < d.length;) g = gb(g, d[m], e), m++;
                    return g
                }

                a.Color = function (e, d, g,
                                    m) {
                    void 0 === m && (m = 1);
                    return a.Color4f(q(e) / 255, q(d) / 255, q(g) / 255, m)
                };
                a.ColorAsInt = function (e, d, g, m) {
                    void 0 === m && (m = 255);
                    return (q(m) << 24 | q(e) << 16 | q(d) << 8 | q(g) << 0 & 268435455) >>> 0
                };
                a.Color4f = function (e, d, g, m) {
                    void 0 === m && (m = 1);
                    return Float32Array.of(e, d, g, m)
                };
                Object.defineProperty(a, "TRANSPARENT", {
                    get: function () {
                        return a.Color4f(0, 0, 0, 0)
                    }
                });
                Object.defineProperty(a, "BLACK", {
                    get: function () {
                        return a.Color4f(0, 0, 0, 1)
                    }
                });
                Object.defineProperty(a, "WHITE", {
                    get: function () {
                        return a.Color4f(1, 1, 1, 1)
                    }
                });
                Object.defineProperty(a,
                    "RED", {
                        get: function () {
                            return a.Color4f(1, 0, 0, 1)
                        }
                    });
                Object.defineProperty(a, "GREEN", {
                    get: function () {
                        return a.Color4f(0, 1, 0, 1)
                    }
                });
                Object.defineProperty(a, "BLUE", {
                    get: function () {
                        return a.Color4f(0, 0, 1, 1)
                    }
                });
                Object.defineProperty(a, "YELLOW", {
                    get: function () {
                        return a.Color4f(1, 1, 0, 1)
                    }
                });
                Object.defineProperty(a, "CYAN", {
                    get: function () {
                        return a.Color4f(0, 1, 1, 1)
                    }
                });
                Object.defineProperty(a, "MAGENTA", {
                    get: function () {
                        return a.Color4f(1, 0, 1, 1)
                    }
                });
                a.getColorComponents = function (e) {
                    return [Math.floor(255 * e[0]), Math.floor(255 *
                        e[1]), Math.floor(255 * e[2]), e[3]]
                };
                a.parseColorString = function (e, d) {
                    e = e.toLowerCase();
                    if (e.startsWith("#")) {
                        d = 255;
                        switch (e.length) {
                            case 9:
                                d = parseInt(e.slice(7, 9), 16);
                            case 7:
                                var g = parseInt(e.slice(1, 3), 16);
                                var m = parseInt(e.slice(3, 5), 16);
                                var r = parseInt(e.slice(5, 7), 16);
                                break;
                            case 5:
                                d = 17 * parseInt(e.slice(4, 5), 16);
                            case 4:
                                g = 17 * parseInt(e.slice(1, 2), 16), m = 17 * parseInt(e.slice(2, 3), 16), r = 17 * parseInt(e.slice(3, 4), 16)
                        }
                        return a.Color(g, m, r, d / 255)
                    }
                    return e.startsWith("rgba") ? (e = e.slice(5, -1), e = e.split(","), a.Color(+e[0],
                        +e[1], +e[2], n(e[3]))) : e.startsWith("rgb") ? (e = e.slice(4, -1), e = e.split(","), a.Color(+e[0], +e[1], +e[2], n(e[3]))) : e.startsWith("gray(") || e.startsWith("hsl") || !d || (e = d[e], void 0 === e) ? a.BLACK : e
                };
                a.multiplyByAlpha = function (e, d) {
                    e = e.slice();
                    e[3] = Math.max(0, Math.min(e[3] * d, 1));
                    return e
                };
                a.Malloc = function (e, d) {
                    var g = a._malloc(d * e.BYTES_PER_ELEMENT);
                    return {
                        _ck: !0, length: d, byteOffset: g, pe: null, subarray: function (m, r) {
                            m = this.toTypedArray().subarray(m, r);
                            m._ck = !0;
                            return m
                        }, toTypedArray: function () {
                            if (this.pe && this.pe.length) return this.pe;
                            this.pe = new e(a.HEAPU8.buffer, g, d);
                            this.pe._ck = !0;
                            return this.pe
                        }
                    }
                };
                a.Free = function (e) {
                    a._free(e.byteOffset);
                    e.byteOffset = V;
                    e.toTypedArray = null;
                    e.pe = null
                };
                var Oa = V, yb, Za = V, Yb, fb = V, Zb, Ha, ia = V, Ic, Ta = V, Jc, ac = V, Kc, bc = V, Lc, cc = V, Mc,
                    $b = V, Nc, Oc = V, Fd = Float32Array.of(0, 0, 1), V = 0;
                a.onRuntimeInitialized = function () {
                    function e(d, g, m, r, y, D) {
                        D || (D = 4 * r.width, r.colorType === a.ColorType.RGBA_F16 ? D *= 2 : r.colorType === a.ColorType.RGBA_F32 && (D *= 4));
                        var I = D * r.height;
                        var N = y ? y.byteOffset : a._malloc(I);
                        if (!d._readPixels(r, N, D,
                            g, m)) return y || a._free(N), null;
                        if (y) return y.toTypedArray();
                        switch (r.colorType) {
                            case a.ColorType.RGBA_8888:
                            case a.ColorType.RGBA_F16:
                                d = (new Uint8Array(a.HEAPU8.buffer, N, I)).slice();
                                break;
                            case a.ColorType.RGBA_F32:
                                d = (new Float32Array(a.HEAPU8.buffer, N, I)).slice();
                                break;
                            default:
                                return null
                        }
                        a._free(N);
                        return d
                    }

                    Zb = a.Malloc(Float32Array, 4);
                    fb = Zb.byteOffset;
                    Yb = a.Malloc(Float32Array, 16);
                    Za = Yb.byteOffset;
                    yb = a.Malloc(Float32Array, 9);
                    Oa = yb.byteOffset;
                    Mc = a.Malloc(Float32Array, 12);
                    $b = Mc.byteOffset;
                    Nc = a.Malloc(Float32Array,
                        12);
                    Oc = Nc.byteOffset;
                    Ha = a.Malloc(Float32Array, 4);
                    ia = Ha.byteOffset;
                    Ic = a.Malloc(Float32Array, 4);
                    Ta = Ic.byteOffset;
                    Jc = a.Malloc(Float32Array, 3);
                    ac = Jc.byteOffset;
                    Kc = a.Malloc(Float32Array, 3);
                    bc = Kc.byteOffset;
                    Lc = a.Malloc(Int32Array, 4);
                    cc = Lc.byteOffset;
                    a.ColorSpace.SRGB = a.ColorSpace._MakeSRGB();
                    a.ColorSpace.DISPLAY_P3 = a.ColorSpace._MakeDisplayP3();
                    a.ColorSpace.ADOBE_RGB = a.ColorSpace._MakeAdobeRGB();
                    a.GlyphRunFlags = {IsWhiteSpace: a._GlyphRunFlags_isWhiteSpace};
                    a.Path.MakeFromCmds = function (d) {
                        var g = x(d, "HEAPF32"),
                            m = a.Path._MakeFromCmds(g, d.length);
                        w(g, d);
                        return m
                    };
                    a.Path.MakeFromVerbsPointsWeights = function (d, g, m) {
                        var r = x(d, "HEAPU8"), y = x(g, "HEAPF32"), D = x(m, "HEAPF32"),
                            I = a.Path._MakeFromVerbsPointsWeights(r, d.length, y, g.length, D, m && m.length || 0);
                        w(r, d);
                        w(y, g);
                        w(D, m);
                        return I
                    };
                    a.Path.prototype.addArc = function (d, g, m) {
                        d = T(d);
                        this._addArc(d, g, m);
                        return this
                    };
                    a.Path.prototype.addOval = function (d, g, m) {
                        void 0 === m && (m = 1);
                        d = T(d);
                        this._addOval(d, !!g, m);
                        return this
                    };
                    a.Path.prototype.addPath = function () {
                        var d = Array.prototype.slice.call(arguments),
                            g = d[0], m = !1;
                        "boolean" === typeof d[d.length - 1] && (m = d.pop());
                        if (1 === d.length) this._addPath(g, 1, 0, 0, 0, 1, 0, 0, 0, 1, m); else if (2 === d.length) d = d[1], this._addPath(g, d[0], d[1], d[2], d[3], d[4], d[5], d[6] || 0, d[7] || 0, d[8] || 1, m); else if (7 === d.length || 10 === d.length) this._addPath(g, d[1], d[2], d[3], d[4], d[5], d[6], d[7] || 0, d[8] || 0, d[9] || 1, m); else return null;
                        return this
                    };
                    a.Path.prototype.addPoly = function (d, g) {
                        var m = x(d, "HEAPF32");
                        this._addPoly(m, d.length / 2, g);
                        w(m, d);
                        return this
                    };
                    a.Path.prototype.addRect = function (d, g) {
                        d =
                            T(d);
                        this._addRect(d, !!g);
                        return this
                    };
                    a.Path.prototype.addRRect = function (d, g) {
                        d = oa(d);
                        this._addRRect(d, !!g);
                        return this
                    };
                    a.Path.prototype.addVerbsPointsWeights = function (d, g, m) {
                        var r = x(d, "HEAPU8"), y = x(g, "HEAPF32"), D = x(m, "HEAPF32");
                        this._addVerbsPointsWeights(r, d.length, y, g.length, D, m && m.length || 0);
                        w(r, d);
                        w(y, g);
                        w(D, m)
                    };
                    a.Path.prototype.arc = function (d, g, m, r, y, D) {
                        d = a.LTRBRect(d - m, g - m, d + m, g + m);
                        y = (y - r) / Math.PI * 180 - 360 * !!D;
                        D = new a.Path;
                        D.addArc(d, r / Math.PI * 180, y);
                        this.addPath(D, !0);
                        D.delete();
                        return this
                    };
                    a.Path.prototype.arcToOval = function (d, g, m, r) {
                        d = T(d);
                        this._arcToOval(d, g, m, r);
                        return this
                    };
                    a.Path.prototype.arcToRotated = function (d, g, m, r, y, D, I) {
                        this._arcToRotated(d, g, m, !!r, !!y, D, I);
                        return this
                    };
                    a.Path.prototype.arcToTangent = function (d, g, m, r, y) {
                        this._arcToTangent(d, g, m, r, y);
                        return this
                    };
                    a.Path.prototype.close = function () {
                        this._close();
                        return this
                    };
                    a.Path.prototype.conicTo = function (d, g, m, r, y) {
                        this._conicTo(d, g, m, r, y);
                        return this
                    };
                    a.Path.prototype.computeTightBounds = function (d) {
                        this._computeTightBounds(ia);
                        var g = Ha.toTypedArray();
                        return d ? (d.set(g), d) : g.slice()
                    };
                    a.Path.prototype.cubicTo = function (d, g, m, r, y, D) {
                        this._cubicTo(d, g, m, r, y, D);
                        return this
                    };
                    a.Path.prototype.dash = function (d, g, m) {
                        return this._dash(d, g, m) ? this : null
                    };
                    a.Path.prototype.getBounds = function (d) {
                        this._getBounds(ia);
                        var g = Ha.toTypedArray();
                        return d ? (d.set(g), d) : g.slice()
                    };
                    a.Path.prototype.lineTo = function (d, g) {
                        this._lineTo(d, g);
                        return this
                    };
                    a.Path.prototype.moveTo = function (d, g) {
                        this._moveTo(d, g);
                        return this
                    };
                    a.Path.prototype.offset = function (d,
                                                        g) {
                        this._transform(1, 0, d, 0, 1, g, 0, 0, 1);
                        return this
                    };
                    a.Path.prototype.quadTo = function (d, g, m, r) {
                        this._quadTo(d, g, m, r);
                        return this
                    };
                    a.Path.prototype.rArcTo = function (d, g, m, r, y, D, I) {
                        this._rArcTo(d, g, m, r, y, D, I);
                        return this
                    };
                    a.Path.prototype.rConicTo = function (d, g, m, r, y) {
                        this._rConicTo(d, g, m, r, y);
                        return this
                    };
                    a.Path.prototype.rCubicTo = function (d, g, m, r, y, D) {
                        this._rCubicTo(d, g, m, r, y, D);
                        return this
                    };
                    a.Path.prototype.rLineTo = function (d, g) {
                        this._rLineTo(d, g);
                        return this
                    };
                    a.Path.prototype.rMoveTo = function (d, g) {
                        this._rMoveTo(d,
                            g);
                        return this
                    };
                    a.Path.prototype.rQuadTo = function (d, g, m, r) {
                        this._rQuadTo(d, g, m, r);
                        return this
                    };
                    a.Path.prototype.stroke = function (d) {
                        d = d || {};
                        d.width = d.width || 1;
                        d.miter_limit = d.miter_limit || 4;
                        d.cap = d.cap || a.StrokeCap.Butt;
                        d.join = d.join || a.StrokeJoin.Miter;
                        d.precision = d.precision || 1;
                        return this._stroke(d) ? this : null
                    };
                    a.Path.prototype.transform = function () {
                        if (1 === arguments.length) {
                            var d = arguments[0];
                            this._transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6] || 0, d[7] || 0, d[8] || 1)
                        } else if (6 === arguments.length || 9 ===
                            arguments.length) d = arguments, this._transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6] || 0, d[7] || 0, d[8] || 1); else throw"transform expected to take 1 or 9 arguments. Got " + arguments.length;
                        return this
                    };
                    a.Path.prototype.trim = function (d, g, m) {
                        return this._trim(d, g, !!m) ? this : null
                    };
                    a.Image.prototype.makeShaderCubic = function (d, g, m, r, y) {
                        y = K(y);
                        return this._makeShaderCubic(d, g, m, r, y)
                    };
                    a.Image.prototype.makeShaderOptions = function (d, g, m, r, y) {
                        y = K(y);
                        return this._makeShaderOptions(d, g, m, r, y)
                    };
                    a.Image.prototype.readPixels =
                        function (d, g, m, r, y) {
                            return e(this, d, g, m, r, y)
                        };
                    a.Canvas.prototype.clear = function (d) {
                        a.Od(this.Md);
                        d = A(d);
                        this._clear(d)
                    };
                    a.Canvas.prototype.clipRRect = function (d, g, m) {
                        a.Od(this.Md);
                        d = oa(d);
                        this._clipRRect(d, g, m)
                    };
                    a.Canvas.prototype.clipRect = function (d, g, m) {
                        a.Od(this.Md);
                        d = T(d);
                        this._clipRect(d, g, m)
                    };
                    a.Canvas.prototype.concat = function (d) {
                        a.Od(this.Md);
                        d = Q(d);
                        this._concat(d)
                    };
                    a.Canvas.prototype.drawArc = function (d, g, m, r, y) {
                        a.Od(this.Md);
                        d = T(d);
                        this._drawArc(d, g, m, r, y)
                    };
                    a.Canvas.prototype.drawAtlas = function (d,
                                                             g, m, r, y, D, I) {
                        if (d && r && g && m && g.length === m.length) {
                            a.Od(this.Md);
                            y || (y = a.BlendMode.SrcOver);
                            var N = x(g, "HEAPF32"), P = x(m, "HEAPF32"), W = m.length / 4, u = x(l(D), "HEAPU32");
                            if (I && "B" in I && "C" in I) this._drawAtlasCubic(d, P, N, u, W, y, I.B, I.C, r); else {
                                let H = a.FilterMode.Linear, R = a.MipmapMode.None;
                                I && (H = I.filter, "mipmap" in I && (R = I.mipmap));
                                this._drawAtlasOptions(d, P, N, u, W, y, H, R, r)
                            }
                            w(N, g);
                            w(P, m);
                            w(u, D)
                        }
                    };
                    a.Canvas.prototype.drawCircle = function (d, g, m, r) {
                        a.Od(this.Md);
                        this._drawCircle(d, g, m, r)
                    };
                    a.Canvas.prototype.drawColor =
                        function (d, g) {
                            a.Od(this.Md);
                            d = A(d);
                            void 0 !== g ? this._drawColor(d, g) : this._drawColor(d)
                        };
                    a.Canvas.prototype.drawColorInt = function (d, g) {
                        a.Od(this.Md);
                        this._drawColorInt(d, g || a.BlendMode.SrcOver)
                    };
                    a.Canvas.prototype.drawColorComponents = function (d, g, m, r, y) {
                        a.Od(this.Md);
                        d = L(d, g, m, r);
                        void 0 !== y ? this._drawColor(d, y) : this._drawColor(d)
                    };
                    a.Canvas.prototype.drawDRRect = function (d, g, m) {
                        a.Od(this.Md);
                        d = oa(d, $b);
                        g = oa(g, Oc);
                        this._drawDRRect(d, g, m)
                    };
                    a.Canvas.prototype.drawGlyphs = function (d, g, m, r, y, D) {
                        if (!(2 * d.length <=
                            g.length)) throw"Not enough positions for the array of gyphs";
                        a.Od(this.Md);
                        const I = x(d, "HEAPU16"), N = x(g, "HEAPF32");
                        this._drawGlyphs(d.length, I, N, m, r, y, D);
                        w(N, g);
                        w(I, d)
                    };
                    a.Canvas.prototype.drawImage = function (d, g, m, r) {
                        a.Od(this.Md);
                        this._drawImage(d, g, m, r || null)
                    };
                    a.Canvas.prototype.drawImageCubic = function (d, g, m, r, y, D) {
                        a.Od(this.Md);
                        this._drawImageCubic(d, g, m, r, y, D || null)
                    };
                    a.Canvas.prototype.drawImageOptions = function (d, g, m, r, y, D) {
                        a.Od(this.Md);
                        this._drawImageOptions(d, g, m, r, y, D || null)
                    };
                    a.Canvas.prototype.drawImageNine =
                        function (d, g, m, r, y) {
                            a.Od(this.Md);
                            g = x(g, "HEAP32", cc);
                            m = T(m);
                            this._drawImageNine(d, g, m, r, y || null)
                        };
                    a.Canvas.prototype.drawImageRect = function (d, g, m, r, y) {
                        a.Od(this.Md);
                        T(g, ia);
                        T(m, Ta);
                        this._drawImageRect(d, ia, Ta, r, !!y)
                    };
                    a.Canvas.prototype.drawImageRectCubic = function (d, g, m, r, y, D) {
                        a.Od(this.Md);
                        T(g, ia);
                        T(m, Ta);
                        this._drawImageRectCubic(d, ia, Ta, r, y, D || null)
                    };
                    a.Canvas.prototype.drawImageRectOptions = function (d, g, m, r, y, D) {
                        a.Od(this.Md);
                        T(g, ia);
                        T(m, Ta);
                        this._drawImageRectOptions(d, ia, Ta, r, y, D || null)
                    };
                    a.Canvas.prototype.drawLine =
                        function (d, g, m, r, y) {
                            a.Od(this.Md);
                            this._drawLine(d, g, m, r, y)
                        };
                    a.Canvas.prototype.drawOval = function (d, g) {
                        a.Od(this.Md);
                        d = T(d);
                        this._drawOval(d, g)
                    };
                    a.Canvas.prototype.drawPaint = function (d) {
                        a.Od(this.Md);
                        this._drawPaint(d)
                    };
                    a.Canvas.prototype.drawParagraph = function (d, g, m) {
                        a.Od(this.Md);
                        this._drawParagraph(d, g, m)
                    };
                    a.Canvas.prototype.drawPatch = function (d, g, m, r, y) {
                        if (24 > d.length) throw"Need 12 cubic points";
                        if (g && 4 > g.length) throw"Need 4 colors";
                        if (m && 8 > m.length) throw"Need 4 shader coordinates";
                        a.Od(this.Md);
                        const D = x(d, "HEAPF32"), I = g ? x(l(g), "HEAPU32") : V, N = m ? x(m, "HEAPF32") : V;
                        r || (r = a.BlendMode.Modulate);
                        this._drawPatch(D, I, N, r, y);
                        w(N, m);
                        w(I, g);
                        w(D, d)
                    };
                    a.Canvas.prototype.drawPath = function (d, g) {
                        a.Od(this.Md);
                        this._drawPath(d, g)
                    };
                    a.Canvas.prototype.drawPicture = function (d) {
                        a.Od(this.Md);
                        this._drawPicture(d)
                    };
                    a.Canvas.prototype.drawPoints = function (d, g, m) {
                        a.Od(this.Md);
                        var r = x(g, "HEAPF32");
                        this._drawPoints(d, r, g.length / 2, m);
                        w(r, g)
                    };
                    a.Canvas.prototype.drawRRect = function (d, g) {
                        a.Od(this.Md);
                        d = oa(d);
                        this._drawRRect(d,
                            g)
                    };
                    a.Canvas.prototype.drawRect = function (d, g) {
                        a.Od(this.Md);
                        d = T(d);
                        this._drawRect(d, g)
                    };
                    a.Canvas.prototype.drawRect4f = function (d, g, m, r, y) {
                        a.Od(this.Md);
                        this._drawRect4f(d, g, m, r, y)
                    };
                    a.Canvas.prototype.drawShadow = function (d, g, m, r, y, D, I) {
                        a.Od(this.Md);
                        var N = x(y, "HEAPF32"), P = x(D, "HEAPF32");
                        g = x(g, "HEAPF32", ac);
                        m = x(m, "HEAPF32", bc);
                        this._drawShadow(d, g, m, r, N, P, I);
                        w(N, y);
                        w(P, D)
                    };
                    a.getShadowLocalBounds = function (d, g, m, r, y, D, I) {
                        d = K(d);
                        m = x(m, "HEAPF32", ac);
                        r = x(r, "HEAPF32", bc);
                        if (!this._getShadowLocalBounds(d,
                            g, m, r, y, D, ia)) return null;
                        g = Ha.toTypedArray();
                        return I ? (I.set(g), I) : g.slice()
                    };
                    a.Canvas.prototype.drawTextBlob = function (d, g, m, r) {
                        a.Od(this.Md);
                        this._drawTextBlob(d, g, m, r)
                    };
                    a.Canvas.prototype.drawVertices = function (d, g, m) {
                        a.Od(this.Md);
                        this._drawVertices(d, g, m)
                    };
                    a.Canvas.prototype.getLocalToDevice = function () {
                        this._getLocalToDevice(Za);
                        for (var d = Za, g = Array(16), m = 0; 16 > m; m++) g[m] = a.HEAPF32[d / 4 + m];
                        return g
                    };
                    a.Canvas.prototype.getTotalMatrix = function () {
                        this._getTotalMatrix(Oa);
                        for (var d = Array(9), g = 0; 9 > g; g++) d[g] =
                            a.HEAPF32[Oa / 4 + g];
                        return d
                    };
                    a.Canvas.prototype.makeSurface = function (d) {
                        d = this._makeSurface(d);
                        d.Md = this.Md;
                        return d
                    };
                    a.Canvas.prototype.readPixels = function (d, g, m, r, y) {
                        a.Od(this.Md);
                        return e(this, d, g, m, r, y)
                    };
                    a.Canvas.prototype.saveLayer = function (d, g, m, r) {
                        g = T(g);
                        return this._saveLayer(d || null, g, m || null, r || 0)
                    };
                    a.Canvas.prototype.writePixels = function (d, g, m, r, y, D, I, N) {
                        if (d.byteLength % (g * m)) throw"pixels length must be a multiple of the srcWidth * srcHeight";
                        a.Od(this.Md);
                        var P = d.byteLength / (g * m);
                        D = D || a.AlphaType.Unpremul;
                        I = I || a.ColorType.RGBA_8888;
                        N = N || a.ColorSpace.SRGB;
                        var W = P * g;
                        P = x(d, "HEAPU8");
                        g = this._writePixels({
                            width: g,
                            height: m,
                            colorType: I,
                            alphaType: D,
                            colorSpace: N
                        }, P, W, r, y);
                        w(P, d);
                        return g
                    };
                    a.ColorFilter.MakeBlend = function (d, g) {
                        d = A(d);
                        return a.ColorFilter._MakeBlend(d, g)
                    };
                    a.ColorFilter.MakeMatrix = function (d) {
                        if (!d || 20 !== d.length) throw"invalid color matrix";
                        var g = x(d, "HEAPF32"), m = a.ColorFilter._makeMatrix(g);
                        w(g, d);
                        return m
                    };
                    a.ContourMeasure.prototype.getPosTan = function (d, g) {
                        this._getPosTan(d, ia);
                        d = Ha.toTypedArray();
                        return g ? (g.set(d), g) : d.slice()
                    };
                    a.ImageFilter.MakeMatrixTransform = function (d, g, m) {
                        d = K(d);
                        if ("B" in g && "C" in g) return a.ImageFilter._MakeMatrixTransformCubic(d, g.Ag, g.Bg, m);
                        const r = g.filter;
                        let y = a.MipmapMode.None;
                        "mipmap" in g && (y = g.mipmap);
                        return a.ImageFilter._MakeMatrixTransformOptions(d, r, y, m)
                    };
                    a.Paint.prototype.getColor = function () {
                        this._getColor(fb);
                        return S(fb)
                    };
                    a.Paint.prototype.setColor = function (d, g) {
                        g = g || null;
                        d = A(d);
                        this._setColor(d, g)
                    };
                    a.Paint.prototype.setColorComponents = function (d, g, m,
                                                                     r, y) {
                        y = y || null;
                        d = L(d, g, m, r);
                        this._setColor(d, y)
                    };
                    a.Path.prototype.getPoint = function (d, g) {
                        this._getPoint(d, ia);
                        d = Ha.toTypedArray();
                        return g ? (g[0] = d[0], g[1] = d[1], g) : d.slice(0, 2)
                    };
                    a.PictureRecorder.prototype.beginRecording = function (d) {
                        d = T(d);
                        return this._beginRecording(d)
                    };
                    a.Surface.prototype.getCanvas = function () {
                        var d = this._getCanvas();
                        d.Md = this.Md;
                        return d
                    };
                    a.Surface.prototype.makeImageSnapshot = function (d) {
                        a.Od(this.Md);
                        d = x(d, "HEAP32", cc);
                        return this._makeImageSnapshot(d)
                    };
                    a.Surface.prototype.makeSurface =
                        function (d) {
                            a.Od(this.Md);
                            d = this._makeSurface(d);
                            d.Md = this.Md;
                            return d
                        };
                    a.Surface.prototype.requestAnimationFrame = function (d, g) {
                        this.Ge || (this.Ge = this.getCanvas());
                        requestAnimationFrame(function () {
                            a.Od(this.Md);
                            d(this.Ge);
                            this.flush(g)
                        }.bind(this))
                    };
                    a.Surface.prototype.drawOnce = function (d, g) {
                        this.Ge || (this.Ge = this.getCanvas());
                        requestAnimationFrame(function () {
                            a.Od(this.Md);
                            d(this.Ge);
                            this.flush(g);
                            this.dispose()
                        }.bind(this))
                    };
                    a.PathEffect.MakeDash = function (d, g) {
                        g || (g = 0);
                        if (!d.length || 1 === d.length %
                            2) throw"Intervals array must have even length";
                        var m = x(d, "HEAPF32");
                        g = a.PathEffect._MakeDash(m, d.length, g);
                        w(m, d);
                        return g
                    };
                    a.PathEffect.MakeLine2D = function (d, g) {
                        g = K(g);
                        return a.PathEffect._MakeLine2D(d, g)
                    };
                    a.PathEffect.MakePath2D = function (d, g) {
                        d = K(d);
                        return a.PathEffect._MakePath2D(d, g)
                    };
                    a.Shader.MakeColor = function (d, g) {
                        g = g || null;
                        d = A(d);
                        return a.Shader._MakeColor(d, g)
                    };
                    a.Shader.Blend = a.Shader.MakeBlend;
                    a.Shader.Color = a.Shader.MakeColor;
                    a.Shader.MakeLinearGradient = function (d, g, m, r, y, D, I, N) {
                        N = N || null;
                        var P = J(m), W = x(r, "HEAPF32");
                        I = I || 0;
                        D = K(D);
                        var u = Ha.toTypedArray();
                        u.set(d);
                        u.set(g, 2);
                        d = a.Shader._MakeLinearGradient(ia, P.de, P.Le, W, P.count, y, I, D, N);
                        w(P.de, m);
                        r && w(W, r);
                        return d
                    };
                    a.Shader.MakeRadialGradient = function (d, g, m, r, y, D, I, N) {
                        N = N || null;
                        var P = J(m), W = x(r, "HEAPF32");
                        I = I || 0;
                        D = K(D);
                        d = a.Shader._MakeRadialGradient(d[0], d[1], g, P.de, P.Le, W, P.count, y, I, D, N);
                        w(P.de, m);
                        r && w(W, r);
                        return d
                    };
                    a.Shader.MakeSweepGradient = function (d, g, m, r, y, D, I, N, P, W) {
                        W = W || null;
                        var u = J(m), H = x(r, "HEAPF32");
                        I = I || 0;
                        N = N || 0;
                        P = P ||
                            360;
                        D = K(D);
                        d = a.Shader._MakeSweepGradient(d, g, u.de, u.Le, H, u.count, y, N, P, I, D, W);
                        w(u.de, m);
                        r && w(H, r);
                        return d
                    };
                    a.Shader.MakeTwoPointConicalGradient = function (d, g, m, r, y, D, I, N, P, W) {
                        W = W || null;
                        var u = J(y), H = x(D, "HEAPF32");
                        P = P || 0;
                        N = K(N);
                        var R = Ha.toTypedArray();
                        R.set(d);
                        R.set(m, 2);
                        d = a.Shader._MakeTwoPointConicalGradient(ia, g, r, u.de, u.Le, H, u.count, I, P, N, W);
                        w(u.de, y);
                        D && w(H, D);
                        return d
                    };
                    a.Vertices.prototype.bounds = function (d) {
                        this._bounds(ia);
                        var g = Ha.toTypedArray();
                        return d ? (d.set(g), d) : g.slice()
                    };
                    a.Vd && a.Vd.forEach(function (d) {
                        d()
                    })
                };
                a.computeTonalColors = function (e) {
                    var d = x(e.ambient, "HEAPF32"), g = x(e.spot, "HEAPF32");
                    this._computeTonalColors(d, g);
                    var m = {ambient: S(d), spot: S(g)};
                    w(d, e.ambient);
                    w(g, e.spot);
                    return m
                };
                a.LTRBRect = function (e, d, g, m) {
                    return Float32Array.of(e, d, g, m)
                };
                a.XYWHRect = function (e, d, g, m) {
                    return Float32Array.of(e, d, e + g, d + m)
                };
                a.LTRBiRect = function (e, d, g, m) {
                    return Int32Array.of(e, d, g, m)
                };
                a.XYWHiRect = function (e, d, g, m) {
                    return Int32Array.of(e, d, e + g, d + m)
                };
                a.RRectXY = function (e, d, g) {
                    return Float32Array.of(e[0], e[1], e[2], e[3],
                        d, g, d, g, d, g, d, g)
                };
                a.MakeAnimatedImageFromEncoded = function (e) {
                    e = new Uint8Array(e);
                    var d = a._malloc(e.byteLength);
                    a.HEAPU8.set(e, d);
                    return (e = a._decodeAnimatedImage(d, e.byteLength)) ? e : null
                };
                a.MakeImageFromEncoded = function (e) {
                    e = new Uint8Array(e);
                    var d = a._malloc(e.byteLength);
                    a.HEAPU8.set(e, d);
                    return (e = a._decodeImage(d, e.byteLength)) ? e : null
                };
                var ib = null;
                a.MakeImageFromCanvasImageSource = function (e) {
                    var d = e.width, g = e.height;
                    ib || (ib = document.createElement("canvas"));
                    ib.width = d;
                    ib.height = g;
                    var m = ib.getContext("2d",
                        {Jg: !0});
                    m.drawImage(e, 0, 0);
                    e = m.getImageData(0, 0, d, g);
                    return a.MakeImage({
                        width: d,
                        height: g,
                        alphaType: a.AlphaType.Unpremul,
                        colorType: a.ColorType.RGBA_8888,
                        colorSpace: a.ColorSpace.SRGB
                    }, e.data, 4 * d)
                };
                a.MakeImage = function (e, d, g) {
                    var m = a._malloc(d.length);
                    a.HEAPU8.set(d, m);
                    return a._MakeImage(e, m, d.length, g)
                };
                a.MakeVertices = function (e, d, g, m, r, y) {
                    var D = r && r.length || 0, I = 0;
                    g && g.length && (I |= 1);
                    m && m.length && (I |= 2);
                    void 0 === y || y || (I |= 4);
                    e = new a._VerticesBuilder(e, d.length / 2, D, I);
                    x(d, "HEAPF32", e.positions());
                    e.texCoords() && x(g, "HEAPF32", e.texCoords());
                    e.colors() && x(l(m), "HEAPU32", e.colors());
                    e.indices() && x(r, "HEAPU16", e.indices());
                    return e.detach()
                };
                a.Matrix = {};
                a.Matrix.identity = function () {
                    return c(3)
                };
                a.Matrix.invert = function (e) {
                    var d = e[0] * e[4] * e[8] + e[1] * e[5] * e[6] + e[2] * e[3] * e[7] - e[2] * e[4] * e[6] - e[1] * e[3] * e[8] - e[0] * e[5] * e[7];
                    return d ? [(e[4] * e[8] - e[5] * e[7]) / d, (e[2] * e[7] - e[1] * e[8]) / d, (e[1] * e[5] - e[2] * e[4]) / d, (e[5] * e[6] - e[3] * e[8]) / d, (e[0] * e[8] - e[2] * e[6]) / d, (e[2] * e[3] - e[0] * e[5]) / d, (e[3] * e[7] - e[4] * e[6]) / d, (e[1] *
                        e[6] - e[0] * e[7]) / d, (e[0] * e[4] - e[1] * e[3]) / d] : null
                };
                a.Matrix.mapPoints = function (e, d) {
                    for (var g = 0; g < d.length; g += 2) {
                        var m = d[g], r = d[g + 1], y = e[6] * m + e[7] * r + e[8], D = e[3] * m + e[4] * r + e[5];
                        d[g] = (e[0] * m + e[1] * r + e[2]) / y;
                        d[g + 1] = D / y
                    }
                    return d
                };
                a.Matrix.multiply = function () {
                    return hb(3, arguments)
                };
                a.Matrix.rotated = function (e, d, g) {
                    d = d || 0;
                    g = g || 0;
                    var m = Math.sin(e);
                    e = Math.cos(e);
                    return [e, -m, ta(m, g, 1 - e, d), m, e, ta(-m, d, 1 - e, g), 0, 0, 1]
                };
                a.Matrix.scaled = function (e, d, g, m) {
                    g = g || 0;
                    m = m || 0;
                    var r = b([e, d], c(3), 3, 0, 1);
                    return b([g - e * g, m - d *
                    m], r, 3, 2, 0)
                };
                a.Matrix.skewed = function (e, d, g, m) {
                    g = g || 0;
                    m = m || 0;
                    var r = b([e, d], c(3), 3, 1, -1);
                    return b([-e * g, -d * m], r, 3, 2, 0)
                };
                a.Matrix.translated = function (e, d) {
                    return b(arguments, c(3), 3, 2, 0)
                };
                a.Vector = {};
                a.Vector.dot = function (e, d) {
                    return e.map(function (g, m) {
                        return g * d[m]
                    }).reduce(function (g, m) {
                        return g + m
                    })
                };
                a.Vector.lengthSquared = function (e) {
                    return a.Vector.dot(e, e)
                };
                a.Vector.length = function (e) {
                    return Math.sqrt(a.Vector.lengthSquared(e))
                };
                a.Vector.mulScalar = function (e, d) {
                    return e.map(function (g) {
                        return g *
                            d
                    })
                };
                a.Vector.add = function (e, d) {
                    return e.map(function (g, m) {
                        return g + d[m]
                    })
                };
                a.Vector.sub = function (e, d) {
                    return e.map(function (g, m) {
                        return g - d[m]
                    })
                };
                a.Vector.dist = function (e, d) {
                    return a.Vector.length(a.Vector.sub(e, d))
                };
                a.Vector.normalize = function (e) {
                    return a.Vector.mulScalar(e, 1 / a.Vector.length(e))
                };
                a.Vector.cross = function (e, d) {
                    return [e[1] * d[2] - e[2] * d[1], e[2] * d[0] - e[0] * d[2], e[0] * d[1] - e[1] * d[0]]
                };
                a.M44 = {};
                a.M44.identity = function () {
                    return c(4)
                };
                a.M44.translated = function (e) {
                    return b(e, c(4), 4, 3, 0)
                };
                a.M44.scaled =
                    function (e) {
                        return b(e, c(4), 4, 0, 1)
                    };
                a.M44.rotated = function (e, d) {
                    return a.M44.rotatedUnitSinCos(a.Vector.normalize(e), Math.sin(d), Math.cos(d))
                };
                a.M44.rotatedUnitSinCos = function (e, d, g) {
                    var m = e[0], r = e[1];
                    e = e[2];
                    var y = 1 - g;
                    return [y * m * m + g, y * m * r - d * e, y * m * e + d * r, 0, y * m * r + d * e, y * r * r + g, y * r * e - d * m, 0, y * m * e - d * r, y * r * e + d * m, y * e * e + g, 0, 0, 0, 0, 1]
                };
                a.M44.lookat = function (e, d, g) {
                    d = a.Vector.normalize(a.Vector.sub(d, e));
                    g = a.Vector.normalize(g);
                    g = a.Vector.normalize(a.Vector.cross(d, g));
                    var m = a.M44.identity();
                    b(g, m, 4, 0, 0);
                    b(a.Vector.cross(g,
                        d), m, 4, 1, 0);
                    b(a.Vector.mulScalar(d, -1), m, 4, 2, 0);
                    b(e, m, 4, 3, 0);
                    e = a.M44.invert(m);
                    return null === e ? a.M44.identity() : e
                };
                a.M44.perspective = function (e, d, g) {
                    var m = 1 / (d - e);
                    g /= 2;
                    g = Math.cos(g) / Math.sin(g);
                    return [g, 0, 0, 0, 0, g, 0, 0, 0, 0, (d + e) * m, 2 * d * e * m, 0, 0, -1, 1]
                };
                a.M44.rc = function (e, d, g) {
                    return e[4 * d + g]
                };
                a.M44.multiply = function () {
                    return hb(4, arguments)
                };
                a.M44.invert = function (e) {
                    var d = e[0], g = e[4], m = e[8], r = e[12], y = e[1], D = e[5], I = e[9], N = e[13], P = e[2],
                        W = e[6], u = e[10], H = e[14], R = e[3], aa = e[7], ja = e[11];
                    e = e[15];
                    var pa = d * D - g *
                            y, ua = d * I - m * y, Aa = d * N - r * y, ea = g * I - m * D, F = g * N - r * D,
                        k = m * N - r * I, p = P * aa - W * R, z = P * ja - u * R, B = P * e - H * R,
                        C = W * ja - u * aa, E = W * e - H * aa, M = u * e - H * ja,
                        ba = pa * M - ua * E + Aa * C + ea * B - F * z + k * p, ca = 1 / ba;
                    if (0 === ba || Infinity === ca) return null;
                    pa *= ca;
                    ua *= ca;
                    Aa *= ca;
                    ea *= ca;
                    F *= ca;
                    k *= ca;
                    p *= ca;
                    z *= ca;
                    B *= ca;
                    C *= ca;
                    E *= ca;
                    M *= ca;
                    d = [D * M - I * E + N * C, I * B - y * M - N * z, y * E - D * B + N * p, D * z - y * C - I * p, m * E - g * M - r * C, d * M - m * B + r * z, g * B - d * E - r * p, d * C - g * z + m * p, aa * k - ja * F + e * ea, ja * Aa - R * k - e * ua, R * F - aa * Aa + e * pa, aa * ua - R * ea - ja * pa, u * F - W * k - H * ea, P * k - u * Aa + H * ua, W * Aa - P * F - H * pa, P * ea - W * ua + u * pa];
                    return d.every(function (Ia) {
                        return !isNaN(Ia) &&
                            Infinity !== Ia && -Infinity !== Ia
                    }) ? d : null
                };
                a.M44.transpose = function (e) {
                    return [e[0], e[4], e[8], e[12], e[1], e[5], e[9], e[13], e[2], e[6], e[10], e[14], e[3], e[7], e[11], e[15]]
                };
                a.M44.mustInvert = function (e) {
                    e = a.M44.invert(e);
                    if (null === e) throw"Matrix not invertible";
                    return e
                };
                a.M44.setupCamera = function (e, d, g) {
                    var m = a.M44.lookat(g.eye, g.coa, g.up);
                    g = a.M44.perspective(g.near, g.far, g.angle);
                    d = [(e[2] - e[0]) / 2, (e[3] - e[1]) / 2, d];
                    e = a.M44.multiply(a.M44.translated([(e[0] + e[2]) / 2, (e[1] + e[3]) / 2, 0]), a.M44.scaled(d));
                    return a.M44.multiply(e,
                        g, m, a.M44.mustInvert(e))
                };
                a.ColorMatrix = {};
                a.ColorMatrix.identity = function () {
                    var e = new Float32Array(20);
                    e[0] = 1;
                    e[6] = 1;
                    e[12] = 1;
                    e[18] = 1;
                    return e
                };
                a.ColorMatrix.scaled = function (e, d, g, m) {
                    var r = new Float32Array(20);
                    r[0] = e;
                    r[6] = d;
                    r[12] = g;
                    r[18] = m;
                    return r
                };
                var Gd = [[6, 7, 11, 12], [0, 10, 2, 12], [0, 1, 5, 6]];
                a.ColorMatrix.rotated = function (e, d, g) {
                    var m = a.ColorMatrix.identity();
                    e = Gd[e];
                    m[e[0]] = g;
                    m[e[1]] = d;
                    m[e[2]] = -d;
                    m[e[3]] = g;
                    return m
                };
                a.ColorMatrix.postTranslate = function (e, d, g, m, r) {
                    e[4] += d;
                    e[9] += g;
                    e[14] += m;
                    e[19] +=
                        r;
                    return e
                };
                a.ColorMatrix.concat = function (e, d) {
                    for (var g = new Float32Array(20), m = 0, r = 0; 20 > r; r += 5) {
                        for (var y = 0; 4 > y; y++) g[m++] = e[r] * d[y] + e[r + 1] * d[y + 5] + e[r + 2] * d[y + 10] + e[r + 3] * d[y + 15];
                        g[m++] = e[r] * d[4] + e[r + 1] * d[9] + e[r + 2] * d[14] + e[r + 3] * d[19] + e[r + 4]
                    }
                    return g
                };
                (function (e) {
                    e.Vd = e.Vd || [];
                    e.Vd.push(function () {
                        function d(u) {
                            if (!u || !u.length) return [];
                            for (var H = [], R = 0; R < u.length; R += 5) {
                                var aa = e.LTRBRect(u[R], u[R + 1], u[R + 2], u[R + 3]);
                                aa.direction = 0 === u[R + 4] ? e.TextDirection.RTL : e.TextDirection.LTR;
                                H.push(aa)
                            }
                            e._free(u.byteOffset);
                            return H
                        }

                        function g(u) {
                            u = u || {};
                            void 0 === u.weight && (u.weight = e.FontWeight.Normal);
                            u.width = u.width || e.FontWidth.Normal;
                            u.slant = u.slant || e.FontSlant.Upright;
                            return u
                        }

                        function m(u) {
                            if (!u || !u.length) return V;
                            for (var H = [], R = 0; R < u.length; R++) {
                                var aa = r(u[R]);
                                H.push(aa)
                            }
                            return x(H, "HEAPU32")
                        }

                        function r(u) {
                            if (I[u]) return I[u];
                            var H = ra(u) + 1, R = e._malloc(H);
                            sa(u, G, R, H);
                            return I[u] = R
                        }

                        function y(u) {
                            u._colorPtr = A(u.color);
                            u._foregroundColorPtr = V;
                            u._backgroundColorPtr = V;
                            u._decorationColorPtr = V;
                            u.foregroundColor &&
                            (u._foregroundColorPtr = A(u.foregroundColor, N));
                            u.backgroundColor && (u._backgroundColorPtr = A(u.backgroundColor, P));
                            u.decorationColor && (u._decorationColorPtr = A(u.decorationColor, W));
                            Array.isArray(u.fontFamilies) && u.fontFamilies.length ? (u._fontFamiliesPtr = m(u.fontFamilies), u._fontFamiliesLen = u.fontFamilies.length) : (u._fontFamiliesPtr = V, u._fontFamiliesLen = 0);
                            if (u.locale) {
                                var H = u.locale;
                                u._localePtr = r(H);
                                u._localeLen = ra(H) + 1
                            } else u._localePtr = V, u._localeLen = 0;
                            if (Array.isArray(u.shadows) && u.shadows.length) {
                                H =
                                    u.shadows;
                                var R = H.map(function (ea) {
                                    return ea.color || e.BLACK
                                }), aa = H.map(function (ea) {
                                    return ea.blurRadius || 0
                                });
                                u._shadowLen = H.length;
                                for (var ja = e._malloc(8 * H.length), pa = ja / 4, ua = 0; ua < H.length; ua++) {
                                    var Aa = H[ua].offset || [0, 0];
                                    e.HEAPF32[pa] = Aa[0];
                                    e.HEAPF32[pa + 1] = Aa[1];
                                    pa += 2
                                }
                                u._shadowColorsPtr = J(R).de;
                                u._shadowOffsetsPtr = ja;
                                u._shadowBlurRadiiPtr = x(aa, "HEAPF32")
                            } else u._shadowLen = 0, u._shadowColorsPtr = V, u._shadowOffsetsPtr = V, u._shadowBlurRadiiPtr = V;
                            Array.isArray(u.fontFeatures) && u.fontFeatures.length ? (H =
                                u.fontFeatures, R = H.map(function (ea) {
                                return ea.name
                            }), aa = H.map(function (ea) {
                                return ea.value
                            }), u._fontFeatureLen = H.length, u._fontFeatureNamesPtr = m(R), u._fontFeatureValuesPtr = x(aa, "HEAPU32")) : (u._fontFeatureLen = 0, u._fontFeatureNamesPtr = V, u._fontFeatureValuesPtr = V)
                        }

                        function D(u) {
                            e._free(u._fontFamiliesPtr);
                            e._free(u._shadowColorsPtr);
                            e._free(u._shadowOffsetsPtr);
                            e._free(u._shadowBlurRadiiPtr);
                            e._free(u._fontFeatureNamesPtr);
                            e._free(u._fontFeatureValuesPtr)
                        }

                        e.Paragraph.prototype.getRectsForRange = function (u,
                                                                           H, R, aa) {
                            u = this._getRectsForRange(u, H, R, aa);
                            return d(u)
                        };
                        e.Paragraph.prototype.getRectsForPlaceholders = function () {
                            var u = this._getRectsForPlaceholders();
                            return d(u)
                        };
                        e.TypefaceFontProvider.prototype.registerFont = function (u, H) {
                            u = e.Typeface.MakeFreeTypeFaceFromData(u);
                            if (!u) return null;
                            H = r(H);
                            this._registerFont(u, H)
                        };
                        e.ParagraphStyle = function (u) {
                            u.disableHinting = u.disableHinting || !1;
                            if (u.ellipsis) {
                                var H = u.ellipsis;
                                u._ellipsisPtr = r(H);
                                u._ellipsisLen = ra(H) + 1
                            } else u._ellipsisPtr = V, u._ellipsisLen = 0;
                            u.heightMultiplier =
                                u.heightMultiplier || 0;
                            u.maxLines = u.maxLines || 0;
                            H = (H = u.strutStyle) || {};
                            H.strutEnabled = H.strutEnabled || !1;
                            H.strutEnabled && Array.isArray(H.fontFamilies) && H.fontFamilies.length ? (H._fontFamiliesPtr = m(H.fontFamilies), H._fontFamiliesLen = H.fontFamilies.length) : (H._fontFamiliesPtr = V, H._fontFamiliesLen = 0);
                            H.fontStyle = g(H.fontStyle);
                            H.fontSize = H.fontSize || 0;
                            H.heightMultiplier = H.heightMultiplier || 0;
                            H.halfLeading = H.halfLeading || !1;
                            H.leading = H.leading || 0;
                            H.forceStrutHeight = H.forceStrutHeight || !1;
                            u.strutStyle = H;
                            u.textAlign = u.textAlign || e.TextAlign.Start;
                            u.textDirection = u.textDirection || e.TextDirection.LTR;
                            u.textHeightBehavior = u.textHeightBehavior || e.TextHeightBehavior.All;
                            u.textStyle = e.TextStyle(u.textStyle);
                            return u
                        };
                        e.TextStyle = function (u) {
                            u.color || (u.color = e.BLACK);
                            u.decoration = u.decoration || 0;
                            u.decorationThickness = u.decorationThickness || 0;
                            u.decorationStyle = u.decorationStyle || e.DecorationStyle.Solid;
                            u.textBaseline = u.textBaseline || e.TextBaseline.Alphabetic;
                            u.fontSize = u.fontSize || 0;
                            u.letterSpacing = u.letterSpacing ||
                                0;
                            u.wordSpacing = u.wordSpacing || 0;
                            u.heightMultiplier = u.heightMultiplier || 0;
                            u.halfLeading = u.halfLeading || !1;
                            u.fontStyle = g(u.fontStyle);
                            return u
                        };
                        var I = {}, N = e._malloc(16), P = e._malloc(16), W = e._malloc(16);
                        e.ParagraphBuilder.Make = function (u, H) {
                            y(u.textStyle);
                            H = e.ParagraphBuilder._Make(u, H);
                            D(u.textStyle);
                            return H
                        };
                        e.ParagraphBuilder.MakeFromFontProvider = function (u, H) {
                            y(u.textStyle);
                            H = e.ParagraphBuilder._MakeFromFontProvider(u, H);
                            D(u.textStyle);
                            return H
                        };
                        e.ParagraphBuilder.ShapeText = function (u, H, R) {
                            let aa =
                                0;
                            for (const ja of H) aa += ja.length;
                            if (aa !== u.length) throw"Accumulated block lengths must equal text.length";
                            return e.ParagraphBuilder._ShapeText(u, H, R)
                        };
                        e.ParagraphBuilder.prototype.pushStyle = function (u) {
                            y(u);
                            this._pushStyle(u);
                            D(u)
                        };
                        e.ParagraphBuilder.prototype.pushPaintStyle = function (u, H, R) {
                            y(u);
                            this._pushPaintStyle(u, H, R);
                            D(u)
                        };
                        e.ParagraphBuilder.prototype.addPlaceholder = function (u, H, R, aa, ja) {
                            R = R || e.PlaceholderAlignment.Baseline;
                            aa = aa || e.TextBaseline.Alphabetic;
                            this._addPlaceholder(u || 0, H || 0, R,
                                aa, ja || 0)
                        }
                    })
                })(t);
                a.Vd = a.Vd || [];
                a.Vd.push(function () {
                    a.Path.prototype.op = function (e, d) {
                        return this._op(e, d) ? this : null
                    };
                    a.Path.prototype.simplify = function () {
                        return this._simplify() ? this : null
                    }
                });
                a.Vd = a.Vd || [];
                a.Vd.push(function () {
                    a.Canvas.prototype.drawText = function (e, d, g, m, r) {
                        var y = ra(e), D = a._malloc(y + 1);
                        sa(e, G, D, y + 1);
                        this._drawSimpleText(D, y, d, g, r, m);
                        a._free(D)
                    };
                    a.Font.prototype.getGlyphBounds = function (e, d, g) {
                        var m = x(e, "HEAPU16"), r = a._malloc(16 * e.length);
                        this._getGlyphWidthBounds(m, e.length, V, r, d ||
                            null);
                        d = new Float32Array(a.HEAPU8.buffer, r, 4 * e.length);
                        w(m, e);
                        if (g) return g.set(d), a._free(r), g;
                        e = Float32Array.from(d);
                        a._free(r);
                        return e
                    };
                    a.Font.prototype.getGlyphIDs = function (e, d, g) {
                        d || (d = e.length);
                        var m = ra(e) + 1, r = a._malloc(m);
                        sa(e, G, r, m);
                        e = a._malloc(2 * d);
                        d = this._getGlyphIDs(r, m - 1, d, e);
                        a._free(r);
                        if (0 > d) return a._free(e), null;
                        r = new Uint16Array(a.HEAPU8.buffer, e, d);
                        if (g) return g.set(r), a._free(e), g;
                        g = Uint16Array.from(r);
                        a._free(e);
                        return g
                    };
                    a.Font.prototype.getGlyphIntercepts = function (e, d, g, m) {
                        var r =
                            x(e, "HEAPU16"), y = x(d, "HEAPF32");
                        return this._getGlyphIntercepts(r, e.length, !(e && e._ck), y, d.length, !(d && d._ck), g, m)
                    };
                    a.Font.prototype.getGlyphWidths = function (e, d, g) {
                        var m = x(e, "HEAPU16"), r = a._malloc(4 * e.length);
                        this._getGlyphWidthBounds(m, e.length, r, V, d || null);
                        d = new Float32Array(a.HEAPU8.buffer, r, e.length);
                        w(m, e);
                        if (g) return g.set(d), a._free(r), g;
                        e = Float32Array.from(d);
                        a._free(r);
                        return e
                    };
                    a.FontMgr.FromData = function () {
                        if (!arguments.length) return null;
                        var e = arguments;
                        1 === e.length && Array.isArray(e[0]) &&
                        (e = arguments[0]);
                        if (!e.length) return null;
                        for (var d = [], g = [], m = 0; m < e.length; m++) {
                            var r = new Uint8Array(e[m]), y = x(r, "HEAPU8");
                            d.push(y);
                            g.push(r.byteLength)
                        }
                        d = x(d, "HEAPU32");
                        g = x(g, "HEAPU32");
                        e = a.FontMgr._fromData(d, g, e.length);
                        a._free(d);
                        a._free(g);
                        return e
                    };
                    a.Typeface.MakeFreeTypeFaceFromData = function (e) {
                        e = new Uint8Array(e);
                        var d = x(e, "HEAPU8");
                        return (e = a.Typeface._MakeFreeTypeFaceFromData(d, e.byteLength)) ? e : null
                    };
                    a.Typeface.prototype.getGlyphIDs = function (e, d, g) {
                        d || (d = e.length);
                        var m = ra(e) + 1, r = a._malloc(m);
                        sa(e, G, r, m);
                        e = a._malloc(2 * d);
                        d = this._getGlyphIDs(r, m - 1, d, e);
                        a._free(r);
                        if (0 > d) return a._free(e), null;
                        r = new Uint16Array(a.HEAPU8.buffer, e, d);
                        if (g) return g.set(r), a._free(e), g;
                        g = Uint16Array.from(r);
                        a._free(e);
                        return g
                    };
                    a.TextBlob.MakeOnPath = function (e, d, g, m) {
                        if (e && e.length && d && d.countPoints()) {
                            if (1 === d.countPoints()) return this.MakeFromText(e, g);
                            m || (m = 0);
                            var r = g.getGlyphIDs(e);
                            r = g.getGlyphWidths(r);
                            var y = [];
                            d = new a.ContourMeasureIter(d, !1, 1);
                            for (var D = d.next(), I = new Float32Array(4), N = 0; N < e.length &&
                            D; N++) {
                                var P = r[N];
                                m += P / 2;
                                if (m > D.length()) {
                                    D.delete();
                                    D = d.next();
                                    if (!D) {
                                        e = e.substring(0, N);
                                        break
                                    }
                                    m = P / 2
                                }
                                D.getPosTan(m, I);
                                var W = I[2], u = I[3];
                                y.push(W, u, I[0] - P / 2 * W, I[1] - P / 2 * u);
                                m += P / 2
                            }
                            e = this.MakeFromRSXform(e, y, g);
                            D && D.delete();
                            d.delete();
                            return e
                        }
                    };
                    a.TextBlob.MakeFromRSXform = function (e, d, g) {
                        var m = ra(e) + 1, r = a._malloc(m);
                        sa(e, G, r, m);
                        e = x(d, "HEAPF32");
                        g = a.TextBlob._MakeFromRSXform(r, m - 1, e, g);
                        a._free(r);
                        return g ? g : null
                    };
                    a.TextBlob.MakeFromRSXformGlyphs = function (e, d, g) {
                        var m = x(e, "HEAPU16");
                        d = x(d, "HEAPF32");
                        g = a.TextBlob._MakeFromRSXformGlyphs(m, 2 * e.length, d, g);
                        w(m, e);
                        return g ? g : null
                    };
                    a.TextBlob.MakeFromGlyphs = function (e, d) {
                        var g = x(e, "HEAPU16");
                        d = a.TextBlob._MakeFromGlyphs(g, 2 * e.length, d);
                        w(g, e);
                        return d ? d : null
                    };
                    a.TextBlob.MakeFromText = function (e, d) {
                        var g = ra(e) + 1, m = a._malloc(g);
                        sa(e, G, m, g);
                        e = a.TextBlob._MakeFromText(m, g - 1, d);
                        a._free(m);
                        return e ? e : null
                    };
                    a.MallocGlyphIDs = function (e) {
                        return a.Malloc(Uint16Array, e)
                    }
                });
                a.Vd = a.Vd || [];
                a.Vd.push(function () {
                    a.MakePicture = function (e) {
                        e = new Uint8Array(e);
                        var d =
                            a._malloc(e.byteLength);
                        a.HEAPU8.set(e, d);
                        return (e = a._MakePicture(d, e.byteLength)) ? e : null
                    }
                });
                (function () {
                    function e(F) {
                        for (var k = 0; k < F.length; k++) if (void 0 !== F[k] && !Number.isFinite(F[k])) return !1;
                        return !0
                    }

                    function d(F) {
                        var k = a.getColorComponents(F);
                        F = k[0];
                        var p = k[1], z = k[2];
                        k = k[3];
                        if (1 === k) return F = F.toString(16).toLowerCase(), p = p.toString(16).toLowerCase(), z = z.toString(16).toLowerCase(), F = 1 === F.length ? "0" + F : F, p = 1 === p.length ? "0" + p : p, z = 1 === z.length ? "0" + z : z, "#" + F + p + z;
                        k = 0 === k || 1 === k ? k : k.toFixed(8);
                        return "rgba(" +
                            F + ", " + p + ", " + z + ", " + k + ")"
                    }

                    function g(F) {
                        return a.parseColorString(F, ua)
                    }

                    function m(F) {
                        F = Aa.exec(F);
                        if (!F) return null;
                        var k = parseFloat(F[4]), p = 16;
                        switch (F[5]) {
                            case "em":
                            case "rem":
                                p = 16 * k;
                                break;
                            case "pt":
                                p = 4 * k / 3;
                                break;
                            case "px":
                                p = k;
                                break;
                            case "pc":
                                p = 16 * k;
                                break;
                            case "in":
                                p = 96 * k;
                                break;
                            case "cm":
                                p = 96 * k / 2.54;
                                break;
                            case "mm":
                                p = 96 / 25.4 * k;
                                break;
                            case "q":
                                p = 96 / 25.4 / 4 * k;
                                break;
                            case "%":
                                p = 16 / 75 * k
                        }
                        return {style: F[1], variant: F[2], weight: F[3], sizePx: p, family: F[6].trim()}
                    }

                    function r(F) {
                        this.Nd = F;
                        this.Rd = new a.Paint;
                        this.Rd.setAntiAlias(!0);
                        this.Rd.setStrokeMiter(10);
                        this.Rd.setStrokeCap(a.StrokeCap.Butt);
                        this.Rd.setStrokeJoin(a.StrokeJoin.Miter);
                        this.Re = "10px monospace";
                        this.ne = new a.Font(null, 10);
                        this.ne.setSubpixel(!0);
                        this.ce = this.he = a.BLACK;
                        this.ue = 0;
                        this.Ie = a.TRANSPARENT;
                        this.we = this.ve = 0;
                        this.Je = this.ke = 1;
                        this.He = 0;
                        this.te = [];
                        this.Pd = a.BlendMode.SrcOver;
                        this.Rd.setStrokeWidth(this.Je);
                        this.Rd.setBlendMode(this.Pd);
                        this.Td = new a.Path;
                        this.Ud = a.Matrix.identity();
                        this.lf = [];
                        this.Ae = [];
                        this.me = function () {
                            this.Td.delete();
                            this.Rd.delete();
                            this.ne.delete();
                            this.Ae.forEach(function (k) {
                                k.me()
                            })
                        };
                        Object.defineProperty(this, "currentTransform", {
                            enumerable: !0, get: function () {
                                return {
                                    a: this.Ud[0],
                                    c: this.Ud[1],
                                    e: this.Ud[2],
                                    b: this.Ud[3],
                                    d: this.Ud[4],
                                    f: this.Ud[5]
                                }
                            }, set: function (k) {
                                k.a && this.setTransform(k.a, k.b, k.c, k.d, k.e, k.f)
                            }
                        });
                        Object.defineProperty(this, "fillStyle", {
                            enumerable: !0, get: function () {
                                return f(this.ce) ? d(this.ce) : this.ce
                            }, set: function (k) {
                                "string" === typeof k ? this.ce = g(k) : k.se && (this.ce = k)
                            }
                        });
                        Object.defineProperty(this,
                            "font", {
                                enumerable: !0, get: function () {
                                    return this.Re
                                }, set: function (k) {
                                    var p = m(k), z = p.family;
                                    p.typeface = ea[z] ? ea[z][(p.style || "normal") + "|" + (p.variant || "normal") + "|" + (p.weight || "normal")] || ea[z]["*"] : null;
                                    p && (this.ne.setSize(p.sizePx), this.ne.setTypeface(p.typeface), this.Re = k)
                                }
                            });
                        Object.defineProperty(this, "globalAlpha", {
                            enumerable: !0, get: function () {
                                return this.ke
                            }, set: function (k) {
                                !isFinite(k) || 0 > k || 1 < k || (this.ke = k)
                            }
                        });
                        Object.defineProperty(this, "globalCompositeOperation", {
                            enumerable: !0, get: function () {
                                switch (this.Pd) {
                                    case a.BlendMode.SrcOver:
                                        return "source-over";
                                    case a.BlendMode.DstOver:
                                        return "destination-over";
                                    case a.BlendMode.Src:
                                        return "copy";
                                    case a.BlendMode.Dst:
                                        return "destination";
                                    case a.BlendMode.Clear:
                                        return "clear";
                                    case a.BlendMode.SrcIn:
                                        return "source-in";
                                    case a.BlendMode.DstIn:
                                        return "destination-in";
                                    case a.BlendMode.SrcOut:
                                        return "source-out";
                                    case a.BlendMode.DstOut:
                                        return "destination-out";
                                    case a.BlendMode.SrcATop:
                                        return "source-atop";
                                    case a.BlendMode.DstATop:
                                        return "destination-atop";
                                    case a.BlendMode.Xor:
                                        return "xor";
                                    case a.BlendMode.Plus:
                                        return "lighter";
                                    case a.BlendMode.Multiply:
                                        return "multiply";
                                    case a.BlendMode.Screen:
                                        return "screen";
                                    case a.BlendMode.Overlay:
                                        return "overlay";
                                    case a.BlendMode.Darken:
                                        return "darken";
                                    case a.BlendMode.Lighten:
                                        return "lighten";
                                    case a.BlendMode.ColorDodge:
                                        return "color-dodge";
                                    case a.BlendMode.ColorBurn:
                                        return "color-burn";
                                    case a.BlendMode.HardLight:
                                        return "hard-light";
                                    case a.BlendMode.SoftLight:
                                        return "soft-light";
                                    case a.BlendMode.Difference:
                                        return "difference";
                                    case a.BlendMode.Exclusion:
                                        return "exclusion";
                                    case a.BlendMode.Hue:
                                        return "hue";
                                    case a.BlendMode.Saturation:
                                        return "saturation";
                                    case a.BlendMode.Color:
                                        return "color";
                                    case a.BlendMode.Luminosity:
                                        return "luminosity"
                                }
                            }, set: function (k) {
                                switch (k) {
                                    case "source-over":
                                        this.Pd = a.BlendMode.SrcOver;
                                        break;
                                    case "destination-over":
                                        this.Pd = a.BlendMode.DstOver;
                                        break;
                                    case "copy":
                                        this.Pd = a.BlendMode.Src;
                                        break;
                                    case "destination":
                                        this.Pd = a.BlendMode.Dst;
                                        break;
                                    case "clear":
                                        this.Pd = a.BlendMode.Clear;
                                        break;
                                    case "source-in":
                                        this.Pd = a.BlendMode.SrcIn;
                                        break;
                                    case "destination-in":
                                        this.Pd = a.BlendMode.DstIn;
                                        break;
                                    case "source-out":
                                        this.Pd = a.BlendMode.SrcOut;
                                        break;
                                    case "destination-out":
                                        this.Pd = a.BlendMode.DstOut;
                                        break;
                                    case "source-atop":
                                        this.Pd = a.BlendMode.SrcATop;
                                        break;
                                    case "destination-atop":
                                        this.Pd = a.BlendMode.DstATop;
                                        break;
                                    case "xor":
                                        this.Pd = a.BlendMode.Xor;
                                        break;
                                    case "lighter":
                                        this.Pd = a.BlendMode.Plus;
                                        break;
                                    case "plus-lighter":
                                        this.Pd = a.BlendMode.Plus;
                                        break;
                                    case "plus-darker":
                                        throw"plus-darker is not supported";
                                    case "multiply":
                                        this.Pd = a.BlendMode.Multiply;
                                        break;
                                    case "screen":
                                        this.Pd = a.BlendMode.Screen;
                                        break;
                                    case "overlay":
                                        this.Pd = a.BlendMode.Overlay;
                                        break;
                                    case "darken":
                                        this.Pd = a.BlendMode.Darken;
                                        break;
                                    case "lighten":
                                        this.Pd = a.BlendMode.Lighten;
                                        break;
                                    case "color-dodge":
                                        this.Pd = a.BlendMode.ColorDodge;
                                        break;
                                    case "color-burn":
                                        this.Pd = a.BlendMode.ColorBurn;
                                        break;
                                    case "hard-light":
                                        this.Pd = a.BlendMode.HardLight;
                                        break;
                                    case "soft-light":
                                        this.Pd = a.BlendMode.SoftLight;
                                        break;
                                    case "difference":
                                        this.Pd = a.BlendMode.Difference;
                                        break;
                                    case "exclusion":
                                        this.Pd = a.BlendMode.Exclusion;
                                        break;
                                    case "hue":
                                        this.Pd = a.BlendMode.Hue;
                                        break;
                                    case "saturation":
                                        this.Pd = a.BlendMode.Saturation;
                                        break;
                                    case "color":
                                        this.Pd = a.BlendMode.Color;
                                        break;
                                    case "luminosity":
                                        this.Pd = a.BlendMode.Luminosity;
                                        break;
                                    default:
                                        return
                                }
                                this.Rd.setBlendMode(this.Pd)
                            }
                        });
                        Object.defineProperty(this, "imageSmoothingEnabled", {
                            enumerable: !0, get: function () {
                                return !0
                            }, set: function () {
                            }
                        });
                        Object.defineProperty(this, "imageSmoothingQuality", {
                            enumerable: !0, get: function () {
                                return "high"
                            }, set: function () {
                            }
                        });
                        Object.defineProperty(this, "lineCap", {
                            enumerable: !0, get: function () {
                                switch (this.Rd.getStrokeCap()) {
                                    case a.StrokeCap.Butt:
                                        return "butt";
                                    case a.StrokeCap.Round:
                                        return "round";
                                    case a.StrokeCap.Square:
                                        return "square"
                                }
                            }, set: function (k) {
                                switch (k) {
                                    case "butt":
                                        this.Rd.setStrokeCap(a.StrokeCap.Butt);
                                        break;
                                    case "round":
                                        this.Rd.setStrokeCap(a.StrokeCap.Round);
                                        break;
                                    case "square":
                                        this.Rd.setStrokeCap(a.StrokeCap.Square)
                                }
                            }
                        });
                        Object.defineProperty(this, "lineDashOffset", {
                            enumerable: !0, get: function () {
                                return this.He
                            }, set: function (k) {
                                isFinite(k) && (this.He = k)
                            }
                        });
                        Object.defineProperty(this, "lineJoin", {
                            enumerable: !0, get: function () {
                                switch (this.Rd.getStrokeJoin()) {
                                    case a.StrokeJoin.Miter:
                                        return "miter";
                                    case a.StrokeJoin.Round:
                                        return "round";
                                    case a.StrokeJoin.Bevel:
                                        return "bevel"
                                }
                            }, set: function (k) {
                                switch (k) {
                                    case "miter":
                                        this.Rd.setStrokeJoin(a.StrokeJoin.Miter);
                                        break;
                                    case "round":
                                        this.Rd.setStrokeJoin(a.StrokeJoin.Round);
                                        break;
                                    case "bevel":
                                        this.Rd.setStrokeJoin(a.StrokeJoin.Bevel)
                                }
                            }
                        });
                        Object.defineProperty(this, "lineWidth", {
                            enumerable: !0, get: function () {
                                return this.Rd.getStrokeWidth()
                            }, set: function (k) {
                                0 >= k || !k || (this.Je = k, this.Rd.setStrokeWidth(k))
                            }
                        });
                        Object.defineProperty(this, "miterLimit", {
                            enumerable: !0,
                            get: function () {
                                return this.Rd.getStrokeMiter()
                            }, set: function (k) {
                                0 >= k || !k || this.Rd.setStrokeMiter(k)
                            }
                        });
                        Object.defineProperty(this, "shadowBlur", {
                            enumerable: !0, get: function () {
                                return this.ue
                            }, set: function (k) {
                                0 > k || !isFinite(k) || (this.ue = k)
                            }
                        });
                        Object.defineProperty(this, "shadowColor", {
                            enumerable: !0, get: function () {
                                return d(this.Ie)
                            }, set: function (k) {
                                this.Ie = g(k)
                            }
                        });
                        Object.defineProperty(this, "shadowOffsetX", {
                            enumerable: !0, get: function () {
                                return this.ve
                            }, set: function (k) {
                                isFinite(k) && (this.ve = k)
                            }
                        });
                        Object.defineProperty(this,
                            "shadowOffsetY", {
                                enumerable: !0, get: function () {
                                    return this.we
                                }, set: function (k) {
                                    isFinite(k) && (this.we = k)
                                }
                            });
                        Object.defineProperty(this, "strokeStyle", {
                            enumerable: !0, get: function () {
                                return d(this.he)
                            }, set: function (k) {
                                "string" === typeof k ? this.he = g(k) : k.se && (this.he = k)
                            }
                        });
                        this.arc = function (k, p, z, B, C, E) {
                            H(this.Td, k, p, z, z, 0, B, C, E)
                        };
                        this.arcTo = function (k, p, z, B, C) {
                            P(this.Td, k, p, z, B, C)
                        };
                        this.beginPath = function () {
                            this.Td.delete();
                            this.Td = new a.Path
                        };
                        this.bezierCurveTo = function (k, p, z, B, C, E) {
                            var M = this.Td;
                            e([k,
                                p, z, B, C, E]) && (M.isEmpty() && M.moveTo(k, p), M.cubicTo(k, p, z, B, C, E))
                        };
                        this.clearRect = function (k, p, z, B) {
                            this.Rd.setStyle(a.PaintStyle.Fill);
                            this.Rd.setBlendMode(a.BlendMode.Clear);
                            this.Nd.drawRect(a.XYWHRect(k, p, z, B), this.Rd);
                            this.Rd.setBlendMode(this.Pd)
                        };
                        this.clip = function (k, p) {
                            "string" === typeof k ? (p = k, k = this.Td) : k && k.af && (k = k.Wd);
                            k || (k = this.Td);
                            k = k.copy();
                            p && "evenodd" === p.toLowerCase() ? k.setFillType(a.FillType.EvenOdd) : k.setFillType(a.FillType.Winding);
                            this.Nd.clipPath(k, a.ClipOp.Intersect, !0);
                            k.delete()
                        };
                        this.closePath = function () {
                            W(this.Td)
                        };
                        this.createImageData = function () {
                            if (1 === arguments.length) {
                                var k = arguments[0];
                                return new I(new Uint8ClampedArray(4 * k.width * k.height), k.width, k.height)
                            }
                            if (2 === arguments.length) {
                                k = arguments[0];
                                var p = arguments[1];
                                return new I(new Uint8ClampedArray(4 * k * p), k, p)
                            }
                            throw"createImageData expects 1 or 2 arguments, got " + arguments.length;
                        };
                        this.createLinearGradient = function (k, p, z, B) {
                            if (e(arguments)) {
                                var C = new N(k, p, z, B);
                                this.Ae.push(C);
                                return C
                            }
                        };
                        this.createPattern = function (k,
                                                       p) {
                            k = new ja(k, p);
                            this.Ae.push(k);
                            return k
                        };
                        this.createRadialGradient = function (k, p, z, B, C, E) {
                            if (e(arguments)) {
                                var M = new pa(k, p, z, B, C, E);
                                this.Ae.push(M);
                                return M
                            }
                        };
                        this.drawImage = function (k) {
                            k instanceof D && (k = k.tf());
                            var p = this.Qe();
                            if (3 === arguments.length || 5 === arguments.length) var z = a.XYWHRect(arguments[1], arguments[2], arguments[3] || k.width(), arguments[4] || k.height()),
                                B = a.XYWHRect(0, 0, k.width(), k.height()); else if (9 === arguments.length) z = a.XYWHRect(arguments[5], arguments[6], arguments[7], arguments[8]),
                                B = a.XYWHRect(arguments[1], arguments[2], arguments[3], arguments[4]); else throw"invalid number of args for drawImage, need 3, 5, or 9; got " + arguments.length;
                            this.Nd.drawImageRect(k, B, z, p, !1);
                            p.dispose()
                        };
                        this.ellipse = function (k, p, z, B, C, E, M, ba) {
                            H(this.Td, k, p, z, B, C, E, M, ba)
                        };
                        this.Qe = function () {
                            var k = this.Rd.copy();
                            k.setStyle(a.PaintStyle.Fill);
                            if (f(this.ce)) {
                                var p = a.multiplyByAlpha(this.ce, this.ke);
                                k.setColor(p)
                            } else p = this.ce.se(this.Ud), k.setColor(a.Color(0, 0, 0, this.ke)), k.setShader(p);
                            k.dispose = function () {
                                this.delete()
                            };
                            return k
                        };
                        this.fill = function (k, p) {
                            "string" === typeof k ? (p = k, k = this.Td) : k && k.af && (k = k.Wd);
                            if ("evenodd" === p) this.Td.setFillType(a.FillType.EvenOdd); else {
                                if ("nonzero" !== p && p) throw"invalid fill rule";
                                this.Td.setFillType(a.FillType.Winding)
                            }
                            k || (k = this.Td);
                            p = this.Qe();
                            var z = this.xe(p);
                            z && (this.Nd.save(), this.qe(), this.Nd.drawPath(k, z), this.Nd.restore(), z.dispose());
                            this.Nd.drawPath(k, p);
                            p.dispose()
                        };
                        this.fillRect = function (k, p, z, B) {
                            var C = this.Qe(), E = this.xe(C);
                            E && (this.Nd.save(), this.qe(), this.Nd.drawRect(a.XYWHRect(k,
                                p, z, B), E), this.Nd.restore(), E.dispose());
                            this.Nd.drawRect(a.XYWHRect(k, p, z, B), C);
                            C.dispose()
                        };
                        this.fillText = function (k, p, z) {
                            var B = this.Qe();
                            k = a.TextBlob.MakeFromText(k, this.ne);
                            var C = this.xe(B);
                            C && (this.Nd.save(), this.qe(), this.Nd.drawTextBlob(k, p, z, C), this.Nd.restore(), C.dispose());
                            this.Nd.drawTextBlob(k, p, z, B);
                            k.delete();
                            B.dispose()
                        };
                        this.getImageData = function (k, p, z, B) {
                            return (k = this.Nd.readPixels(k, p, {
                                width: z,
                                height: B,
                                colorType: a.ColorType.RGBA_8888,
                                alphaType: a.AlphaType.Unpremul,
                                colorSpace: a.ColorSpace.SRGB
                            })) ?
                                new I(new Uint8ClampedArray(k.buffer), z, B) : null
                        };
                        this.getLineDash = function () {
                            return this.te.slice()
                        };
                        this.mf = function (k) {
                            var p = a.Matrix.invert(this.Ud);
                            a.Matrix.mapPoints(p, k);
                            return k
                        };
                        this.isPointInPath = function (k, p, z) {
                            var B = arguments;
                            if (3 === B.length) var C = this.Td; else if (4 === B.length) C = B[0], k = B[1], p = B[2], z = B[3]; else throw"invalid arg count, need 3 or 4, got " + B.length;
                            if (!isFinite(k) || !isFinite(p)) return !1;
                            z = z || "nonzero";
                            if ("nonzero" !== z && "evenodd" !== z) return !1;
                            B = this.mf([k, p]);
                            k = B[0];
                            p = B[1];
                            C.setFillType("nonzero" ===
                            z ? a.FillType.Winding : a.FillType.EvenOdd);
                            return C.contains(k, p)
                        };
                        this.isPointInStroke = function (k, p) {
                            var z = arguments;
                            if (2 === z.length) var B = this.Td; else if (3 === z.length) B = z[0], k = z[1], p = z[2]; else throw"invalid arg count, need 2 or 3, got " + z.length;
                            if (!isFinite(k) || !isFinite(p)) return !1;
                            z = this.mf([k, p]);
                            k = z[0];
                            p = z[1];
                            B = B.copy();
                            B.setFillType(a.FillType.Winding);
                            B.stroke({
                                width: this.lineWidth,
                                miter_limit: this.miterLimit,
                                cap: this.Rd.getStrokeCap(),
                                join: this.Rd.getStrokeJoin(),
                                precision: .3
                            });
                            z = B.contains(k,
                                p);
                            B.delete();
                            return z
                        };
                        this.lineTo = function (k, p) {
                            R(this.Td, k, p)
                        };
                        this.measureText = function (k) {
                            k = this.ne.getGlyphIDs(k);
                            k = this.ne.getGlyphWidths(k);
                            let p = 0;
                            for (const z of k) p += z;
                            return {width: p}
                        };
                        this.moveTo = function (k, p) {
                            var z = this.Td;
                            e([k, p]) && z.moveTo(k, p)
                        };
                        this.putImageData = function (k, p, z, B, C, E, M) {
                            if (e([p, z, B, C, E, M])) if (void 0 === B) this.Nd.writePixels(k.data, k.width, k.height, p, z); else if (B = B || 0, C = C || 0, E = E || k.width, M = M || k.height, 0 > E && (B += E, E = Math.abs(E)), 0 > M && (C += M, M = Math.abs(M)), 0 > B && (E += B, B = 0),
                            0 > C && (M += C, C = 0), !(0 >= E || 0 >= M)) {
                                k = a.MakeImage({
                                    width: k.width,
                                    height: k.height,
                                    alphaType: a.AlphaType.Unpremul,
                                    colorType: a.ColorType.RGBA_8888,
                                    colorSpace: a.ColorSpace.SRGB
                                }, k.data, 4 * k.width);
                                var ba = a.XYWHRect(B, C, E, M);
                                p = a.XYWHRect(p + B, z + C, E, M);
                                z = a.Matrix.invert(this.Ud);
                                this.Nd.save();
                                this.Nd.concat(z);
                                this.Nd.drawImageRect(k, ba, p, null, !1);
                                this.Nd.restore();
                                k.delete()
                            }
                        };
                        this.quadraticCurveTo = function (k, p, z, B) {
                            var C = this.Td;
                            e([k, p, z, B]) && (C.isEmpty() && C.moveTo(k, p), C.quadTo(k, p, z, B))
                        };
                        this.rect = function (k,
                                              p, z, B) {
                            var C = this.Td;
                            k = a.XYWHRect(k, p, z, B);
                            e(k) && C.addRect(k)
                        };
                        this.resetTransform = function () {
                            this.Td.transform(this.Ud);
                            var k = a.Matrix.invert(this.Ud);
                            this.Nd.concat(k);
                            this.Ud = this.Nd.getTotalMatrix()
                        };
                        this.restore = function () {
                            var k = this.lf.pop();
                            if (k) {
                                var p = a.Matrix.multiply(this.Ud, a.Matrix.invert(k.Ff));
                                this.Td.transform(p);
                                this.Rd.delete();
                                this.Rd = k.dg;
                                this.te = k.$f;
                                this.Je = k.vg;
                                this.he = k.ug;
                                this.ce = k.fs;
                                this.ve = k.sg;
                                this.we = k.tg;
                                this.ue = k.hg;
                                this.Ie = k.rg;
                                this.ke = k.Nf;
                                this.Pd = k.Of;
                                this.He = k.ag;
                                this.Re = k.Mf;
                                this.Nd.restore();
                                this.Ud = this.Nd.getTotalMatrix()
                            }
                        };
                        this.rotate = function (k) {
                            if (isFinite(k)) {
                                var p = a.Matrix.rotated(-k);
                                this.Td.transform(p);
                                this.Nd.rotate(k / Math.PI * 180, 0, 0);
                                this.Ud = this.Nd.getTotalMatrix()
                            }
                        };
                        this.save = function () {
                            if (this.ce.re) {
                                var k = this.ce.re();
                                this.Ae.push(k)
                            } else k = this.ce;
                            if (this.he.re) {
                                var p = this.he.re();
                                this.Ae.push(p)
                            } else p = this.he;
                            this.lf.push({
                                Ff: this.Ud.slice(),
                                $f: this.te.slice(),
                                vg: this.Je,
                                ug: p,
                                fs: k,
                                sg: this.ve,
                                tg: this.we,
                                hg: this.ue,
                                rg: this.Ie,
                                Nf: this.ke,
                                ag: this.He,
                                Of: this.Pd,
                                dg: this.Rd.copy(),
                                Mf: this.Re
                            });
                            this.Nd.save()
                        };
                        this.scale = function (k, p) {
                            if (e(arguments)) {
                                var z = a.Matrix.scaled(1 / k, 1 / p);
                                this.Td.transform(z);
                                this.Nd.scale(k, p);
                                this.Ud = this.Nd.getTotalMatrix()
                            }
                        };
                        this.setLineDash = function (k) {
                            for (var p = 0; p < k.length; p++) if (!isFinite(k[p]) || 0 > k[p]) return;
                            1 === k.length % 2 && Array.prototype.push.apply(k, k);
                            this.te = k
                        };
                        this.setTransform = function (k, p, z, B, C, E) {
                            e(arguments) && (this.resetTransform(), this.transform(k, p, z, B, C, E))
                        };
                        this.qe = function () {
                            var k = a.Matrix.invert(this.Ud);
                            this.Nd.concat(k);
                            this.Nd.concat(a.Matrix.translated(this.ve, this.we));
                            this.Nd.concat(this.Ud)
                        };
                        this.xe = function (k) {
                            var p = a.multiplyByAlpha(this.Ie, this.ke);
                            if (!a.getColorComponents(p)[3] || !(this.ue || this.we || this.ve)) return null;
                            k = k.copy();
                            k.setColor(p);
                            var z = a.MaskFilter.MakeBlur(a.BlurStyle.Normal, this.ue / 2, !1);
                            k.setMaskFilter(z);
                            k.dispose = function () {
                                z.delete();
                                this.delete()
                            };
                            return k
                        };
                        this.cf = function () {
                            var k = this.Rd.copy();
                            k.setStyle(a.PaintStyle.Stroke);
                            if (f(this.he)) {
                                var p = a.multiplyByAlpha(this.he,
                                    this.ke);
                                k.setColor(p)
                            } else p = this.he.se(this.Ud), k.setColor(a.Color(0, 0, 0, this.ke)), k.setShader(p);
                            k.setStrokeWidth(this.Je);
                            if (this.te.length) {
                                var z = a.PathEffect.MakeDash(this.te, this.He);
                                k.setPathEffect(z)
                            }
                            k.dispose = function () {
                                z && z.delete();
                                this.delete()
                            };
                            return k
                        };
                        this.stroke = function (k) {
                            k = k ? k.Wd : this.Td;
                            var p = this.cf(), z = this.xe(p);
                            z && (this.Nd.save(), this.qe(), this.Nd.drawPath(k, z), this.Nd.restore(), z.dispose());
                            this.Nd.drawPath(k, p);
                            p.dispose()
                        };
                        this.strokeRect = function (k, p, z, B) {
                            var C = this.cf(),
                                E = this.xe(C);
                            E && (this.Nd.save(), this.qe(), this.Nd.drawRect(a.XYWHRect(k, p, z, B), E), this.Nd.restore(), E.dispose());
                            this.Nd.drawRect(a.XYWHRect(k, p, z, B), C);
                            C.dispose()
                        };
                        this.strokeText = function (k, p, z) {
                            var B = this.cf();
                            k = a.TextBlob.MakeFromText(k, this.ne);
                            var C = this.xe(B);
                            C && (this.Nd.save(), this.qe(), this.Nd.drawTextBlob(k, p, z, C), this.Nd.restore(), C.dispose());
                            this.Nd.drawTextBlob(k, p, z, B);
                            k.delete();
                            B.dispose()
                        };
                        this.translate = function (k, p) {
                            if (e(arguments)) {
                                var z = a.Matrix.translated(-k, -p);
                                this.Td.transform(z);
                                this.Nd.translate(k, p);
                                this.Ud = this.Nd.getTotalMatrix()
                            }
                        };
                        this.transform = function (k, p, z, B, C, E) {
                            k = [k, z, C, p, B, E, 0, 0, 1];
                            p = a.Matrix.invert(k);
                            this.Td.transform(p);
                            this.Nd.concat(k);
                            this.Ud = this.Nd.getTotalMatrix()
                        };
                        this.addHitRegion = function () {
                        };
                        this.clearHitRegions = function () {
                        };
                        this.drawFocusIfNeeded = function () {
                        };
                        this.removeHitRegion = function () {
                        };
                        this.scrollPathIntoView = function () {
                        };
                        Object.defineProperty(this, "canvas", {value: null, writable: !1})
                    }

                    function y(F) {
                        this.df = F;
                        this.Md = new r(F.getCanvas());
                        this.Se =
                            [];
                        this.decodeImage = function (k) {
                            k = a.MakeImageFromEncoded(k);
                            if (!k) throw"Invalid input";
                            this.Se.push(k);
                            return new D(k)
                        };
                        this.loadFont = function (k, p) {
                            k = a.Typeface.MakeFreeTypeFaceFromData(k);
                            if (!k) return null;
                            this.Se.push(k);
                            var z = (p.style || "normal") + "|" + (p.variant || "normal") + "|" + (p.weight || "normal");
                            p = p.family;
                            ea[p] || (ea[p] = {"*": k});
                            ea[p][z] = k
                        };
                        this.makePath2D = function (k) {
                            k = new aa(k);
                            this.Se.push(k.Wd);
                            return k
                        };
                        this.getContext = function (k) {
                            return "2d" === k ? this.Md : null
                        };
                        this.toDataURL = function (k, p) {
                            this.df.flush();
                            var z = this.df.makeImageSnapshot();
                            if (z) {
                                k = k || "image/png";
                                var B = a.ImageFormat.PNG;
                                "image/jpeg" === k && (B = a.ImageFormat.JPEG);
                                if (p = z.encodeToBytes(B, p || .92)) {
                                    z.delete();
                                    k = "data:" + k + ";base64,";
                                    if ("undefined" !== typeof Buffer) p = Buffer.from(p).toString("base64"); else {
                                        z = 0;
                                        B = p.length;
                                        for (var C = "", E; z < B;) E = p.slice(z, Math.min(z + 32768, B)), C += String.fromCharCode.apply(null, E), z += 32768;
                                        p = btoa(C)
                                    }
                                    return k + p
                                }
                            }
                        };
                        this.dispose = function () {
                            this.Md.me();
                            this.Se.forEach(function (k) {
                                k.delete()
                            });
                            this.df.dispose()
                        }
                    }

                    function D(F) {
                        this.width =
                            F.width();
                        this.height = F.height();
                        this.naturalWidth = this.width;
                        this.naturalHeight = this.height;
                        this.tf = function () {
                            return F
                        }
                    }

                    function I(F, k, p) {
                        if (!k || 0 === p) throw"invalid dimensions, width and height must be non-zero";
                        if (F.length % 4) throw"arr must be a multiple of 4";
                        p = p || F.length / (4 * k);
                        Object.defineProperty(this, "data", {value: F, writable: !1});
                        Object.defineProperty(this, "height", {value: p, writable: !1});
                        Object.defineProperty(this, "width", {value: k, writable: !1})
                    }

                    function N(F, k, p, z) {
                        this.Yd = null;
                        this.ee = [];
                        this.ae = [];
                        this.addColorStop = function (B, C) {
                            if (0 > B || 1 < B || !isFinite(B)) throw"offset must be between 0 and 1 inclusively";
                            C = g(C);
                            var E = this.ae.indexOf(B);
                            if (-1 !== E) this.ee[E] = C; else {
                                for (E = 0; E < this.ae.length && !(this.ae[E] > B); E++) ;
                                this.ae.splice(E, 0, B);
                                this.ee.splice(E, 0, C)
                            }
                        };
                        this.re = function () {
                            var B = new N(F, k, p, z);
                            B.ee = this.ee.slice();
                            B.ae = this.ae.slice();
                            return B
                        };
                        this.me = function () {
                            this.Yd && (this.Yd.delete(), this.Yd = null)
                        };
                        this.se = function (B) {
                            var C = [F, k, p, z];
                            a.Matrix.mapPoints(B, C);
                            B = C[0];
                            var E = C[1],
                                M = C[2];
                            C = C[3];
                            this.me();
                            return this.Yd = a.Shader.MakeLinearGradient([B, E], [M, C], this.ee, this.ae, a.TileMode.Clamp)
                        }
                    }

                    function P(F, k, p, z, B, C) {
                        if (e([k, p, z, B, C])) {
                            if (0 > C) throw"radii cannot be negative";
                            F.isEmpty() && F.moveTo(k, p);
                            F.arcToTangent(k, p, z, B, C)
                        }
                    }

                    function W(F) {
                        if (!F.isEmpty()) {
                            var k = F.getBounds();
                            (k[3] - k[1] || k[2] - k[0]) && F.close()
                        }
                    }

                    function u(F, k, p, z, B, C, E) {
                        E = (E - C) / Math.PI * 180;
                        C = C / Math.PI * 180;
                        k = a.LTRBRect(k - z, p - B, k + z, p + B);
                        1E-5 > Math.abs(Math.abs(E) - 360) ? (p = E / 2, F.arcToOval(k, C, p, !1), F.arcToOval(k,
                            C + p, p, !1)) : F.arcToOval(k, C, E, !1)
                    }

                    function H(F, k, p, z, B, C, E, M, ba) {
                        if (e([k, p, z, B, C, E, M])) {
                            if (0 > z || 0 > B) throw"radii cannot be negative";
                            var ca = 2 * Math.PI, Ia = E % ca;
                            0 > Ia && (Ia += ca);
                            var $a = Ia - E;
                            E = Ia;
                            M += $a;
                            !ba && M - E >= ca ? M = E + ca : ba && E - M >= ca ? M = E - ca : !ba && E > M ? M = E + (ca - (E - M) % ca) : ba && E < M && (M = E - (ca - (M - E) % ca));
                            C ? (ba = a.Matrix.rotated(C, k, p), C = a.Matrix.rotated(-C, k, p), F.transform(C), u(F, k, p, z, B, E, M), F.transform(ba)) : u(F, k, p, z, B, E, M)
                        }
                    }

                    function R(F, k, p) {
                        e([k, p]) && (F.isEmpty() && F.moveTo(k, p), F.lineTo(k, p))
                    }

                    function aa(F) {
                        this.Wd =
                            null;
                        this.Wd = "string" === typeof F ? a.Path.MakeFromSVGString(F) : F && F.af ? F.Wd.copy() : new a.Path;
                        this.af = function () {
                            return this.Wd
                        };
                        this.addPath = function (k, p) {
                            p || (p = {a: 1, c: 0, e: 0, b: 0, d: 1, f: 0});
                            this.Wd.addPath(k.Wd, [p.a, p.c, p.e, p.b, p.d, p.f])
                        };
                        this.arc = function (k, p, z, B, C, E) {
                            H(this.Wd, k, p, z, z, 0, B, C, E)
                        };
                        this.arcTo = function (k, p, z, B, C) {
                            P(this.Wd, k, p, z, B, C)
                        };
                        this.bezierCurveTo = function (k, p, z, B, C, E) {
                            var M = this.Wd;
                            e([k, p, z, B, C, E]) && (M.isEmpty() && M.moveTo(k, p), M.cubicTo(k, p, z, B, C, E))
                        };
                        this.closePath = function () {
                            W(this.Wd)
                        };
                        this.ellipse = function (k, p, z, B, C, E, M, ba) {
                            H(this.Wd, k, p, z, B, C, E, M, ba)
                        };
                        this.lineTo = function (k, p) {
                            R(this.Wd, k, p)
                        };
                        this.moveTo = function (k, p) {
                            var z = this.Wd;
                            e([k, p]) && z.moveTo(k, p)
                        };
                        this.quadraticCurveTo = function (k, p, z, B) {
                            var C = this.Wd;
                            e([k, p, z, B]) && (C.isEmpty() && C.moveTo(k, p), C.quadTo(k, p, z, B))
                        };
                        this.rect = function (k, p, z, B) {
                            var C = this.Wd;
                            k = a.XYWHRect(k, p, z, B);
                            e(k) && C.addRect(k)
                        }
                    }

                    function ja(F, k) {
                        this.Yd = null;
                        F instanceof D && (F = F.tf());
                        this.Af = F;
                        this._transform = a.Matrix.identity();
                        "" === k && (k = "repeat");
                        switch (k) {
                            case "repeat-x":
                                this.ye =
                                    a.TileMode.Repeat;
                                this.ze = a.TileMode.Decal;
                                break;
                            case "repeat-y":
                                this.ye = a.TileMode.Decal;
                                this.ze = a.TileMode.Repeat;
                                break;
                            case "repeat":
                                this.ze = this.ye = a.TileMode.Repeat;
                                break;
                            case "no-repeat":
                                this.ze = this.ye = a.TileMode.Decal;
                                break;
                            default:
                                throw"invalid repetition mode " + k;
                        }
                        this.setTransform = function (p) {
                            p = [p.a, p.c, p.e, p.b, p.d, p.f, 0, 0, 1];
                            e(p) && (this._transform = p)
                        };
                        this.re = function () {
                            var p = new ja;
                            p.ye = this.ye;
                            p.ze = this.ze;
                            return p
                        };
                        this.me = function () {
                            this.Yd && (this.Yd.delete(), this.Yd = null)
                        };
                        this.se =
                            function () {
                                this.me();
                                return this.Yd = this.Af.makeShaderCubic(this.ye, this.ze, 1 / 3, 1 / 3, this._transform)
                            }
                    }

                    function pa(F, k, p, z, B, C) {
                        this.Yd = null;
                        this.ee = [];
                        this.ae = [];
                        this.addColorStop = function (E, M) {
                            if (0 > E || 1 < E || !isFinite(E)) throw"offset must be between 0 and 1 inclusively";
                            M = g(M);
                            var ba = this.ae.indexOf(E);
                            if (-1 !== ba) this.ee[ba] = M; else {
                                for (ba = 0; ba < this.ae.length && !(this.ae[ba] > E); ba++) ;
                                this.ae.splice(ba, 0, E);
                                this.ee.splice(ba, 0, M)
                            }
                        };
                        this.re = function () {
                            var E = new pa(F, k, p, z, B, C);
                            E.ee = this.ee.slice();
                            E.ae =
                                this.ae.slice();
                            return E
                        };
                        this.me = function () {
                            this.Yd && (this.Yd.delete(), this.Yd = null)
                        };
                        this.se = function (E) {
                            var M = [F, k, z, B];
                            a.Matrix.mapPoints(E, M);
                            var ba = M[0], ca = M[1], Ia = M[2];
                            M = M[3];
                            var $a = (Math.abs(E[0]) + Math.abs(E[4])) / 2;
                            E = p * $a;
                            $a *= C;
                            this.me();
                            return this.Yd = a.Shader.MakeTwoPointConicalGradient([ba, ca], E, [Ia, M], $a, this.ee, this.ae, a.TileMode.Clamp)
                        }
                    }

                    a._testing = {};
                    var ua = {
                        aliceblue: Float32Array.of(.941, .973, 1, 1),
                        antiquewhite: Float32Array.of(.98, .922, .843, 1),
                        aqua: Float32Array.of(0, 1, 1, 1),
                        aquamarine: Float32Array.of(.498,
                            1, .831, 1),
                        azure: Float32Array.of(.941, 1, 1, 1),
                        beige: Float32Array.of(.961, .961, .863, 1),
                        bisque: Float32Array.of(1, .894, .769, 1),
                        black: Float32Array.of(0, 0, 0, 1),
                        blanchedalmond: Float32Array.of(1, .922, .804, 1),
                        blue: Float32Array.of(0, 0, 1, 1),
                        blueviolet: Float32Array.of(.541, .169, .886, 1),
                        brown: Float32Array.of(.647, .165, .165, 1),
                        burlywood: Float32Array.of(.871, .722, .529, 1),
                        cadetblue: Float32Array.of(.373, .62, .627, 1),
                        chartreuse: Float32Array.of(.498, 1, 0, 1),
                        chocolate: Float32Array.of(.824, .412, .118, 1),
                        coral: Float32Array.of(1,
                            .498, .314, 1),
                        cornflowerblue: Float32Array.of(.392, .584, .929, 1),
                        cornsilk: Float32Array.of(1, .973, .863, 1),
                        crimson: Float32Array.of(.863, .078, .235, 1),
                        cyan: Float32Array.of(0, 1, 1, 1),
                        darkblue: Float32Array.of(0, 0, .545, 1),
                        darkcyan: Float32Array.of(0, .545, .545, 1),
                        darkgoldenrod: Float32Array.of(.722, .525, .043, 1),
                        darkgray: Float32Array.of(.663, .663, .663, 1),
                        darkgreen: Float32Array.of(0, .392, 0, 1),
                        darkgrey: Float32Array.of(.663, .663, .663, 1),
                        darkkhaki: Float32Array.of(.741, .718, .42, 1),
                        darkmagenta: Float32Array.of(.545, 0,
                            .545, 1),
                        darkolivegreen: Float32Array.of(.333, .42, .184, 1),
                        darkorange: Float32Array.of(1, .549, 0, 1),
                        darkorchid: Float32Array.of(.6, .196, .8, 1),
                        darkred: Float32Array.of(.545, 0, 0, 1),
                        darksalmon: Float32Array.of(.914, .588, .478, 1),
                        darkseagreen: Float32Array.of(.561, .737, .561, 1),
                        darkslateblue: Float32Array.of(.282, .239, .545, 1),
                        darkslategray: Float32Array.of(.184, .31, .31, 1),
                        darkslategrey: Float32Array.of(.184, .31, .31, 1),
                        darkturquoise: Float32Array.of(0, .808, .82, 1),
                        darkviolet: Float32Array.of(.58, 0, .827, 1),
                        deeppink: Float32Array.of(1,
                            .078, .576, 1),
                        deepskyblue: Float32Array.of(0, .749, 1, 1),
                        dimgray: Float32Array.of(.412, .412, .412, 1),
                        dimgrey: Float32Array.of(.412, .412, .412, 1),
                        dodgerblue: Float32Array.of(.118, .565, 1, 1),
                        firebrick: Float32Array.of(.698, .133, .133, 1),
                        floralwhite: Float32Array.of(1, .98, .941, 1),
                        forestgreen: Float32Array.of(.133, .545, .133, 1),
                        fuchsia: Float32Array.of(1, 0, 1, 1),
                        gainsboro: Float32Array.of(.863, .863, .863, 1),
                        ghostwhite: Float32Array.of(.973, .973, 1, 1),
                        gold: Float32Array.of(1, .843, 0, 1),
                        goldenrod: Float32Array.of(.855, .647, .125,
                            1),
                        gray: Float32Array.of(.502, .502, .502, 1),
                        green: Float32Array.of(0, .502, 0, 1),
                        greenyellow: Float32Array.of(.678, 1, .184, 1),
                        grey: Float32Array.of(.502, .502, .502, 1),
                        honeydew: Float32Array.of(.941, 1, .941, 1),
                        hotpink: Float32Array.of(1, .412, .706, 1),
                        indianred: Float32Array.of(.804, .361, .361, 1),
                        indigo: Float32Array.of(.294, 0, .51, 1),
                        ivory: Float32Array.of(1, 1, .941, 1),
                        khaki: Float32Array.of(.941, .902, .549, 1),
                        lavender: Float32Array.of(.902, .902, .98, 1),
                        lavenderblush: Float32Array.of(1, .941, .961, 1),
                        lawngreen: Float32Array.of(.486,
                            .988, 0, 1),
                        lemonchiffon: Float32Array.of(1, .98, .804, 1),
                        lightblue: Float32Array.of(.678, .847, .902, 1),
                        lightcoral: Float32Array.of(.941, .502, .502, 1),
                        lightcyan: Float32Array.of(.878, 1, 1, 1),
                        lightgoldenrodyellow: Float32Array.of(.98, .98, .824, 1),
                        lightgray: Float32Array.of(.827, .827, .827, 1),
                        lightgreen: Float32Array.of(.565, .933, .565, 1),
                        lightgrey: Float32Array.of(.827, .827, .827, 1),
                        lightpink: Float32Array.of(1, .714, .757, 1),
                        lightsalmon: Float32Array.of(1, .627, .478, 1),
                        lightseagreen: Float32Array.of(.125, .698, .667, 1),
                        lightskyblue: Float32Array.of(.529,
                            .808, .98, 1),
                        lightslategray: Float32Array.of(.467, .533, .6, 1),
                        lightslategrey: Float32Array.of(.467, .533, .6, 1),
                        lightsteelblue: Float32Array.of(.69, .769, .871, 1),
                        lightyellow: Float32Array.of(1, 1, .878, 1),
                        lime: Float32Array.of(0, 1, 0, 1),
                        limegreen: Float32Array.of(.196, .804, .196, 1),
                        linen: Float32Array.of(.98, .941, .902, 1),
                        magenta: Float32Array.of(1, 0, 1, 1),
                        maroon: Float32Array.of(.502, 0, 0, 1),
                        mediumaquamarine: Float32Array.of(.4, .804, .667, 1),
                        mediumblue: Float32Array.of(0, 0, .804, 1),
                        mediumorchid: Float32Array.of(.729, .333,
                            .827, 1),
                        mediumpurple: Float32Array.of(.576, .439, .859, 1),
                        mediumseagreen: Float32Array.of(.235, .702, .443, 1),
                        mediumslateblue: Float32Array.of(.482, .408, .933, 1),
                        mediumspringgreen: Float32Array.of(0, .98, .604, 1),
                        mediumturquoise: Float32Array.of(.282, .82, .8, 1),
                        mediumvioletred: Float32Array.of(.78, .082, .522, 1),
                        midnightblue: Float32Array.of(.098, .098, .439, 1),
                        mintcream: Float32Array.of(.961, 1, .98, 1),
                        mistyrose: Float32Array.of(1, .894, .882, 1),
                        moccasin: Float32Array.of(1, .894, .71, 1),
                        navajowhite: Float32Array.of(1, .871, .678,
                            1),
                        navy: Float32Array.of(0, 0, .502, 1),
                        oldlace: Float32Array.of(.992, .961, .902, 1),
                        olive: Float32Array.of(.502, .502, 0, 1),
                        olivedrab: Float32Array.of(.42, .557, .137, 1),
                        orange: Float32Array.of(1, .647, 0, 1),
                        orangered: Float32Array.of(1, .271, 0, 1),
                        orchid: Float32Array.of(.855, .439, .839, 1),
                        palegoldenrod: Float32Array.of(.933, .91, .667, 1),
                        palegreen: Float32Array.of(.596, .984, .596, 1),
                        paleturquoise: Float32Array.of(.686, .933, .933, 1),
                        palevioletred: Float32Array.of(.859, .439, .576, 1),
                        papayawhip: Float32Array.of(1, .937, .835, 1),
                        peachpuff: Float32Array.of(1, .855, .725, 1),
                        peru: Float32Array.of(.804, .522, .247, 1),
                        pink: Float32Array.of(1, .753, .796, 1),
                        plum: Float32Array.of(.867, .627, .867, 1),
                        powderblue: Float32Array.of(.69, .878, .902, 1),
                        purple: Float32Array.of(.502, 0, .502, 1),
                        rebeccapurple: Float32Array.of(.4, .2, .6, 1),
                        red: Float32Array.of(1, 0, 0, 1),
                        rosybrown: Float32Array.of(.737, .561, .561, 1),
                        royalblue: Float32Array.of(.255, .412, .882, 1),
                        saddlebrown: Float32Array.of(.545, .271, .075, 1),
                        salmon: Float32Array.of(.98, .502, .447, 1),
                        sandybrown: Float32Array.of(.957,
                            .643, .376, 1),
                        seagreen: Float32Array.of(.18, .545, .341, 1),
                        seashell: Float32Array.of(1, .961, .933, 1),
                        sienna: Float32Array.of(.627, .322, .176, 1),
                        silver: Float32Array.of(.753, .753, .753, 1),
                        skyblue: Float32Array.of(.529, .808, .922, 1),
                        slateblue: Float32Array.of(.416, .353, .804, 1),
                        slategray: Float32Array.of(.439, .502, .565, 1),
                        slategrey: Float32Array.of(.439, .502, .565, 1),
                        snow: Float32Array.of(1, .98, .98, 1),
                        springgreen: Float32Array.of(0, 1, .498, 1),
                        steelblue: Float32Array.of(.275, .51, .706, 1),
                        tan: Float32Array.of(.824, .706, .549,
                            1),
                        teal: Float32Array.of(0, .502, .502, 1),
                        thistle: Float32Array.of(.847, .749, .847, 1),
                        tomato: Float32Array.of(1, .388, .278, 1),
                        transparent: Float32Array.of(0, 0, 0, 0),
                        turquoise: Float32Array.of(.251, .878, .816, 1),
                        violet: Float32Array.of(.933, .51, .933, 1),
                        wheat: Float32Array.of(.961, .871, .702, 1),
                        white: Float32Array.of(1, 1, 1, 1),
                        whitesmoke: Float32Array.of(.961, .961, .961, 1),
                        yellow: Float32Array.of(1, 1, 0, 1),
                        yellowgreen: Float32Array.of(.604, .804, .196, 1)
                    };
                    a._testing.parseColor = g;
                    a._testing.colorToString = d;
                    var Aa = RegExp("(italic|oblique|normal|)\\s*(small-caps|normal|)\\s*(bold|bolder|lighter|[1-9]00|normal|)\\s*([\\d\\.]+)(px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q)(.+)"),
                        ea = {"Noto Mono": {"*": null}, monospace: {"*": null}};
                    a._testing.parseFontString = m;
                    a.MakeCanvas = function (F, k) {
                        return (F = a.MakeSurface(F, k)) ? new y(F) : null
                    };
                    a.ImageData = function () {
                        if (2 === arguments.length) {
                            var F = arguments[0], k = arguments[1];
                            return new I(new Uint8ClampedArray(4 * F * k), F, k)
                        }
                        if (3 === arguments.length) {
                            var p = arguments[0];
                            if (p.prototype.constructor !== Uint8ClampedArray) throw"bytes must be given as a Uint8ClampedArray";
                            F = arguments[1];
                            k = arguments[2];
                            if (p % 4) throw"bytes must be given in a multiple of 4";
                            if (p % F) throw"bytes must divide evenly by width";
                            if (k && k !== p / (4 * F)) throw"invalid height given";
                            return new I(p, F, p / (4 * F))
                        }
                        throw"invalid number of arguments - takes 2 or 3, saw " + arguments.length;
                    }
                })()
            })(t);
            var va = da({}, t), wa = "./this.program", xa = (a, b) => {
                    throw b;
                }, ya = "object" === typeof window, za = "function" === typeof importScripts,
                Ba = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node,
                Ca = "", Da, Ea, Fa, fs, Ga, Ja;
            if (Ba) Ca = za ? require("path").dirname(Ca) + "/" : __dirname + "/", Ja = () => {
                Ga || (fs = require("fs"), Ga = require("path"))
            }, Da = function (a, b) {
                Ja();
                a = Ga.normalize(a);
                return fs.readFileSync(a, b ? null : "utf8")
            }, Fa = a => {
                a = Da(a, !0);
                a.buffer || (a = new Uint8Array(a));
                return a
            }, Ea = (a, b, c) => {
                Ja();
                a = Ga.normalize(a);
                fs.readFile(a, function (f, h) {
                    f ? c(f) : b(h.buffer)
                })
            }, 1 < process.argv.length && (wa = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), process.on("uncaughtException", function (a) {
                if (!(a instanceof Ka)) throw a;
            }), process.on("unhandledRejection",
                function (a) {
                    throw a;
                }), xa = (a, b) => {
                if (noExitRuntime || 0 < La) throw process.exitCode = a, b;
                b instanceof Ka || Ma("exiting due to exception: " + b);
                process.exit(a)
            }, t.inspect = function () {
                return "[Emscripten Module object]"
            }; else if (ya || za) za ? Ca = self.location.href : "undefined" !== typeof document && document.currentScript && (Ca = document.currentScript.src), _scriptDir && (Ca = _scriptDir), 0 !== Ca.indexOf("blob:") ? Ca = Ca.substr(0, Ca.replace(/[?#].*/, "").lastIndexOf("/") + 1) : Ca = "", Da = a => {
                var b = new XMLHttpRequest;
                b.open("GET", a,
                    !1);
                b.send(null);
                return b.responseText
            }, za && (Fa = a => {
                var b = new XMLHttpRequest;
                b.open("GET", a, !1);
                b.responseType = "arraybuffer";
                b.send(null);
                return new Uint8Array(b.response)
            }), Ea = (a, b, c) => {
                var f = new XMLHttpRequest;
                f.open("GET", a, !0);
                f.responseType = "arraybuffer";
                f.onload = () => {
                    200 == f.status || 0 == f.status && f.response ? b(f.response) : c()
                };
                f.onerror = c;
                f.send(null)
            };
            var Na = t.print || console.log.bind(console), Ma = t.printErr || console.warn.bind(console);
            da(t, va);
            va = null;
            t.thisProgram && (wa = t.thisProgram);
            t.quit && (xa = t.quit);
            var Pa = 0, Qa;
            t.wasmBinary && (Qa = t.wasmBinary);
            var noExitRuntime = t.noExitRuntime || !0;
            "object" !== typeof WebAssembly && Ra("no native wasm support detected");
            var Sa, Ua = !1, Va = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;

            function Wa(a, b, c) {
                var f = b + c;
                for (c = b; a[c] && !(c >= f);) ++c;
                if (16 < c - b && a.subarray && Va) return Va.decode(a.subarray(b, c));
                for (f = ""; b < c;) {
                    var h = a[b++];
                    if (h & 128) {
                        var l = a[b++] & 63;
                        if (192 == (h & 224)) f += String.fromCharCode((h & 31) << 6 | l); else {
                            var n = a[b++] & 63;
                            h = 224 == (h & 240) ? (h & 15) << 12 | l << 6 | n : (h & 7) << 18 | l << 12 | n << 6 | a[b++] & 63;
                            65536 > h ? f += String.fromCharCode(h) : (h -= 65536, f += String.fromCharCode(55296 | h >> 10, 56320 | h & 1023))
                        }
                    } else f += String.fromCharCode(h)
                }
                return f
            }

            function Xa(a, b) {
                return a ? Wa(G, a, b) : ""
            }

            function sa(a, b, c, f) {
                if (!(0 < f)) return 0;
                var h = c;
                f = c + f - 1;
                for (var l = 0; l < a.length; ++l) {
                    var n = a.charCodeAt(l);
                    if (55296 <= n && 57343 >= n) {
                        var q = a.charCodeAt(++l);
                        n = 65536 + ((n & 1023) << 10) | q & 1023
                    }
                    if (127 >= n) {
                        if (c >= f) break;
                        b[c++] = n
                    } else {
                        if (2047 >= n) {
                            if (c + 1 >= f) break;
                            b[c++] = 192 | n >> 6
                        } else {
                            if (65535 >= n) {
                                if (c + 2 >= f) break;
                                b[c++] = 224 | n >> 12
                            } else {
                                if (c + 3 >= f) break;
                                b[c++] = 240 | n >> 18;
                                b[c++] = 128 | n >> 12 & 63
                            }
                            b[c++] = 128 | n >> 6 & 63
                        }
                        b[c++] = 128 | n & 63
                    }
                }
                b[c] = 0;
                return c - h
            }

            function ra(a) {
                for (var b = 0, c = 0; c < a.length; ++c) {
                    var f = a.charCodeAt(c);
                    55296 <= f && 57343 >= f && (f = 65536 + ((f & 1023) << 10) | a.charCodeAt(++c) & 1023);
                    127 >= f ? ++b : b = 2047 >= f ? b + 2 : 65535 >= f ? b + 3 : b + 4
                }
                return b
            }

            var Ya = "undefined" !== typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;

            function ab(a, b) {
                var c = a >> 1;
                for (var f = c + b / 2; !(c >= f) && bb[c];) ++c;
                c <<= 1;
                if (32 < c - a && Ya) return Ya.decode(G.subarray(a, c));
                c = "";
                for (f = 0; !(f >= b / 2); ++f) {
                    var h = cb[a + 2 * f >> 1];
                    if (0 == h) break;
                    c += String.fromCharCode(h)
                }
                return c
            }

            function db(a, b, c) {
                void 0 === c && (c = 2147483647);
                if (2 > c) return 0;
                c -= 2;
                var f = b;
                c = c < 2 * a.length ? c / 2 : a.length;
                for (var h = 0; h < c; ++h) cb[b >> 1] = a.charCodeAt(h), b += 2;
                cb[b >> 1] = 0;
                return b - f
            }

            function eb(a) {
                return 2 * a.length
            }

            function jb(a, b) {
                for (var c = 0, f = ""; !(c >= b / 4);) {
                    var h = O[a + 4 * c >> 2];
                    if (0 == h) break;
                    ++c;
                    65536 <= h ? (h -= 65536, f += String.fromCharCode(55296 | h >> 10, 56320 | h & 1023)) : f += String.fromCharCode(h)
                }
                return f
            }

            function kb(a, b, c) {
                void 0 === c && (c = 2147483647);
                if (4 > c) return 0;
                var f = b;
                c = f + c - 4;
                for (var h = 0; h < a.length; ++h) {
                    var l = a.charCodeAt(h);
                    if (55296 <= l && 57343 >= l) {
                        var n = a.charCodeAt(++h);
                        l = 65536 + ((l & 1023) << 10) | n & 1023
                    }
                    O[b >> 2] = l;
                    b += 4;
                    if (b + 4 > c) break
                }
                O[b >> 2] = 0;
                return b - f
            }

            function lb(a) {
                for (var b = 0, c = 0; c < a.length; ++c) {
                    var f = a.charCodeAt(c);
                    55296 <= f && 57343 >= f && ++c;
                    b += 4
                }
                return b
            }

            var mb, nb, G, cb, bb, O, ob, U, pb;

            function qb() {
                var a = Sa.buffer;
                mb = a;
                t.HEAP8 = nb = new Int8Array(a);
                t.HEAP16 = cb = new Int16Array(a);
                t.HEAP32 = O = new Int32Array(a);
                t.HEAPU8 = G = new Uint8Array(a);
                t.HEAPU16 = bb = new Uint16Array(a);
                t.HEAPU32 = ob = new Uint32Array(a);
                t.HEAPF32 = U = new Float32Array(a);
                t.HEAPF64 = pb = new Float64Array(a)
            }

            var rb, sb = [], tb = [], ub = [], La = 0;

            function vb() {
                var a = t.preRun.shift();
                sb.unshift(a)
            }

            var wb = 0, xb = null, zb = null;
            t.preloadedImages = {};
            t.preloadedAudios = {};

            function Ra(a) {
                if (t.onAbort) t.onAbort(a);
                a = "Aborted(" + a + ")";
                Ma(a);
                Ua = !0;
                a = new WebAssembly.RuntimeError(a + ". Build with -s ASSERTIONS=1 for more info.");
                ha(a);
                throw a;
            }

            function Ab() {
                return Bb.startsWith("data:application/octet-stream;base64,")
            }

            var Bb;
            Bb = "canvaskit.wasm";
            if (!Ab()) {
                var Cb = Bb;
                Bb = t.locateFile ? t.locateFile(Cb, Ca) : Ca + Cb
            }

            function Db() {
                var a = Bb;
                try {
                    if (a == Bb && Qa) return new Uint8Array(Qa);
                    if (Fa) return Fa(a);
                    throw"both async and sync fetching of the wasm failed";
                } catch (b) {
                    Ra(b)
                }
            }

            function Eb() {
                if (!Qa && (ya || za)) {
                    if ("function" === typeof fetch && !Bb.startsWith("file://")) return fetch(Bb, {credentials: "same-origin"}).then(function (a) {
                        if (!a.ok) throw"failed to load wasm binary file at '" + Bb + "'";
                        return a.arrayBuffer()
                    }).catch(function () {
                        return Db()
                    });
                    if (Ea) return new Promise(function (a, b) {
                        Ea(Bb, function (c) {
                            a(new Uint8Array(c))
                        }, b)
                    })
                }
                return Promise.resolve().then(function () {
                    return Db()
                })
            }

            function Fb(a) {
                for (; 0 < a.length;) {
                    var b = a.shift();
                    if ("function" == typeof b) b(t); else {
                        var c = b.Dg;
                        "number" === typeof c ? void 0 === b.ef ? Gb(c)() : Gb(c)(b.ef) : c(void 0 === b.ef ? null : b.ef)
                    }
                }
            }

            function Gb(a) {
                return rb.get(a)
            }

            function Hb(a) {
                this.Qd = a - 16;
                this.mg = function (b) {
                    O[this.Qd + 4 >> 2] = b
                };
                this.jg = function (b) {
                    O[this.Qd + 8 >> 2] = b
                };
                this.kg = function () {
                    O[this.Qd >> 2] = 0
                };
                this.ig = function () {
                    nb[this.Qd + 12 >> 0] = 0
                };
                this.lg = function () {
                    nb[this.Qd + 13 >> 0] = 0
                };
                this.Xf = function (b, c) {
                    this.mg(b);
                    this.jg(c);
                    this.kg();
                    this.ig();
                    this.lg()
                }
            }

            var Ib = 0, Jb = {}, Kb = [null, [], []], Lb = {}, Mb = {};

            function Nb(a) {
                for (; a.length;) {
                    var b = a.pop();
                    a.pop()(b)
                }
            }

            function Ob(a) {
                return this.fromWireType(ob[a >> 2])
            }

            var Pb = {}, Qb = {}, Rb = {};

            function Sb(a) {
                if (void 0 === a) return "_unknown";
                a = a.replace(/[^a-zA-Z0-9_]/g, "$");
                var b = a.charCodeAt(0);
                return 48 <= b && 57 >= b ? "_" + a : a
            }

            function Tb(a, b) {
                a = Sb(a);
                return function () {
                    null;
                    return b.apply(this, arguments)
                }
            }

            function Ub(a) {
                var b = Error, c = Tb(a, function (f) {
                    this.name = a;
                    this.message = f;
                    f = Error(f).stack;
                    void 0 !== f && (this.stack = this.toString() + "\n" + f.replace(/^Error(:[^\n]*)?\n/, ""))
                });
                c.prototype = Object.create(b.prototype);
                c.prototype.constructor = c;
                c.prototype.toString = function () {
                    return void 0 === this.message ? this.name : this.name + ": " + this.message
                };
                return c
            }

            var Vb = void 0;

            function Wb(a) {
                throw new Vb(a);
            }

            function Xb(a, b, c) {
                function f(q) {
                    q = c(q);
                    q.length !== a.length && Wb("Mismatched type converter count");
                    for (var w = 0; w < a.length; ++w) dc(a[w], q[w])
                }

                a.forEach(function (q) {
                    Rb[q] = b
                });
                var h = Array(b.length), l = [], n = 0;
                b.forEach(function (q, w) {
                    Qb.hasOwnProperty(q) ? h[w] = Qb[q] : (l.push(q), Pb.hasOwnProperty(q) || (Pb[q] = []), Pb[q].push(function () {
                        h[w] = Qb[q];
                        ++n;
                        n === l.length && f(h)
                    }))
                });
                0 === l.length && f(h)
            }

            function ec(a) {
                switch (a) {
                    case 1:
                        return 0;
                    case 2:
                        return 1;
                    case 4:
                        return 2;
                    case 8:
                        return 3;
                    default:
                        throw new TypeError("Unknown type size: " + a);
                }
            }

            var fc = void 0;

            function gc(a) {
                for (var b = ""; G[a];) b += fc[G[a++]];
                return b
            }

            var hc = void 0;

            function X(a) {
                throw new hc(a);
            }

            function dc(a, b, c = {}) {
                if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                var f = b.name;
                a || X('type "' + f + '" must have a positive integer typeid pointer');
                if (Qb.hasOwnProperty(a)) {
                    if (c.Wf) return;
                    X("Cannot register type '" + f + "' twice")
                }
                Qb[a] = b;
                delete Rb[a];
                Pb.hasOwnProperty(a) && (b = Pb[a], delete Pb[a], b.forEach(function (h) {
                    h()
                }))
            }

            function ic(a) {
                X(a.Ld.Xd.Sd.name + " instance already deleted")
            }

            var jc = !1;

            function kc() {
            }

            function lc(a) {
                --a.count.value;
                0 === a.count.value && (a.$d ? a.ge.le(a.$d) : a.Xd.Sd.le(a.Qd))
            }

            function mc(a) {
                if ("undefined" === typeof FinalizationGroup) return mc = b => b, a;
                jc = new FinalizationGroup(function (b) {
                    for (var c = b.next(); !c.done; c = b.next()) c = c.value, c.Qd ? lc(c) : console.warn("object already deleted: " + c.Qd)
                });
                mc = b => {
                    jc.register(b, b.Ld, b.Ld);
                    return b
                };
                kc = b => {
                    jc.unregister(b.Ld)
                };
                return mc(a)
            }

            var nc = void 0, oc = [];

            function pc() {
                for (; oc.length;) {
                    var a = oc.pop();
                    a.Ld.De = !1;
                    a["delete"]()
                }
            }

            function qc() {
            }

            var rc = {};

            function sc(a, b, c) {
                if (void 0 === a[b].Zd) {
                    var f = a[b];
                    a[b] = function () {
                        a[b].Zd.hasOwnProperty(arguments.length) || X("Function '" + c + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + a[b].Zd + ")!");
                        return a[b].Zd[arguments.length].apply(this, arguments)
                    };
                    a[b].Zd = [];
                    a[b].Zd[f.Be] = f
                }
            }

            function tc(a, b, c) {
                t.hasOwnProperty(a) ? ((void 0 === c || void 0 !== t[a].Zd && void 0 !== t[a].Zd[c]) && X("Cannot register public name '" + a + "' twice"), sc(t, a, a), t.hasOwnProperty(c) && X("Cannot register multiple overloads of a function with the same number of arguments (" + c + ")!"), t[a].Zd[c] = b) : (t[a] = b, void 0 !== c && (t[a].Fg = c))
            }

            function uc(a, b, c, f, h, l, n, q) {
                this.name = a;
                this.constructor = b;
                this.Ee = c;
                this.le = f;
                this.ie = h;
                this.Pf = l;
                this.Pe = n;
                this.Jf = q;
                this.fg = []
            }

            function vc(a, b, c) {
                for (; b !== c;) b.Pe || X("Expected null or instance of " + c.name + ", got an instance of " + b.name), a = b.Pe(a), b = b.ie;
                return a
            }

            function wc(a, b) {
                if (null === b) return this.gf && X("null is not a valid " + this.name), 0;
                b.Ld || X('Cannot pass "' + xc(b) + '" as a ' + this.name);
                b.Ld.Qd || X("Cannot pass deleted object as a pointer of type " + this.name);
                return vc(b.Ld.Qd, b.Ld.Xd.Sd, this.Sd)
            }

            function yc(a, b) {
                if (null === b) {
                    this.gf && X("null is not a valid " + this.name);
                    if (this.Ue) {
                        var c = this.hf();
                        null !== a && a.push(this.le, c);
                        return c
                    }
                    return 0
                }
                b.Ld || X('Cannot pass "' + xc(b) + '" as a ' + this.name);
                b.Ld.Qd || X("Cannot pass deleted object as a pointer of type " + this.name);
                !this.Te && b.Ld.Xd.Te && X("Cannot convert argument of type " + (b.Ld.ge ? b.Ld.ge.name : b.Ld.Xd.name) + " to parameter type " + this.name);
                c = vc(b.Ld.Qd, b.Ld.Xd.Sd, this.Sd);
                if (this.Ue) switch (void 0 === b.Ld.$d && X("Passing raw pointer to smart pointer is illegal"),
                    this.qg) {
                    case 0:
                        b.Ld.ge === this ? c = b.Ld.$d : X("Cannot convert argument of type " + (b.Ld.ge ? b.Ld.ge.name : b.Ld.Xd.name) + " to parameter type " + this.name);
                        break;
                    case 1:
                        c = b.Ld.$d;
                        break;
                    case 2:
                        if (b.Ld.ge === this) c = b.Ld.$d; else {
                            var f = b.clone();
                            c = this.gg(c, zc(function () {
                                f["delete"]()
                            }));
                            null !== a && a.push(this.le, c)
                        }
                        break;
                    default:
                        X("Unsupporting sharing policy")
                }
                return c
            }

            function Ac(a, b) {
                if (null === b) return this.gf && X("null is not a valid " + this.name), 0;
                b.Ld || X('Cannot pass "' + xc(b) + '" as a ' + this.name);
                b.Ld.Qd || X("Cannot pass deleted object as a pointer of type " + this.name);
                b.Ld.Xd.Te && X("Cannot convert argument of type " + b.Ld.Xd.name + " to parameter type " + this.name);
                return vc(b.Ld.Qd, b.Ld.Xd.Sd, this.Sd)
            }

            function Bc(a, b, c) {
                if (b === c) return a;
                if (void 0 === c.ie) return null;
                a = Bc(a, b, c.ie);
                return null === a ? null : c.Jf(a)
            }

            var Cc = {};

            function Dc(a, b) {
                for (void 0 === b && X("ptr should not be undefined"); a.ie;) b = a.Pe(b), a = a.ie;
                return Cc[b]
            }

            function Ec(a, b) {
                b.Xd && b.Qd || Wb("makeClassHandle requires ptr and ptrType");
                !!b.ge !== !!b.$d && Wb("Both smartPtrType and smartPtr must be specified");
                b.count = {value: 1};
                return mc(Object.create(a, {Ld: {value: b}}))
            }

            function Fc(a, b, c, f, h, l, n, q, w, x, J) {
                this.name = a;
                this.Sd = b;
                this.gf = c;
                this.Te = f;
                this.Ue = h;
                this.eg = l;
                this.qg = n;
                this.vf = q;
                this.hf = w;
                this.gg = x;
                this.le = J;
                h || void 0 !== b.ie ? this.toWireType = yc : (this.toWireType = f ? wc : Ac, this.fe = null)
            }

            function Gc(a, b, c) {
                t.hasOwnProperty(a) || Wb("Replacing nonexistant public symbol");
                void 0 !== t[a].Zd && void 0 !== c ? t[a].Zd[c] = b : (t[a] = b, t[a].Be = c)
            }

            function Hc(a, b) {
                var c = [];
                return function () {
                    c.length = arguments.length;
                    for (var f = 0; f < arguments.length; f++) c[f] = arguments[f];
                    a.includes("j") ? (f = t["dynCall_" + a], f = c && c.length ? f.apply(null, [b].concat(c)) : f.call(null, b)) : f = Gb(b).apply(null, c);
                    return f
                }
            }

            function Pc(a, b) {
                a = gc(a);
                var c = a.includes("j") ? Hc(a, b) : Gb(b);
                "function" !== typeof c && X("unknown function pointer with signature " + a + ": " + b);
                return c
            }

            var Qc = void 0;

            function Rc(a) {
                a = Sc(a);
                var b = gc(a);
                Tc(a);
                return b
            }

            function Uc(a, b) {
                function c(l) {
                    h[l] || Qb[l] || (Rb[l] ? Rb[l].forEach(c) : (f.push(l), h[l] = !0))
                }

                var f = [], h = {};
                b.forEach(c);
                throw new Qc(a + ": " + f.map(Rc).join([", "]));
            }

            function Vc(a, b, c, f, h) {
                var l = b.length;
                2 > l && X("argTypes array size mismatch! Must at least get return value and 'this' types!");
                var n = null !== b[1] && null !== c, q = !1;
                for (c = 1; c < b.length; ++c) if (null !== b[c] && void 0 === b[c].fe) {
                    q = !0;
                    break
                }
                var w = "void" !== b[0].name, x = l - 2, J = Array(x), K = [], Q = [];
                return function () {
                    arguments.length !== x && X("function " + a + " called with " + arguments.length + " arguments, expected " + x + " args!");
                    Q.length = 0;
                    K.length = n ? 2 : 1;
                    K[0] = h;
                    if (n) {
                        var A = b[1].toWireType(Q, this);
                        K[1] = A
                    }
                    for (var L = 0; L < x; ++L) J[L] =
                        b[L + 2].toWireType(Q, arguments[L]), K.push(J[L]);
                    L = f.apply(null, K);
                    if (q) Nb(Q); else for (var S = n ? 1 : 2; S < b.length; S++) {
                        var T = 1 === S ? A : J[S - 2];
                        null !== b[S].fe && b[S].fe(T)
                    }
                    A = w ? b[0].fromWireType(L) : void 0;
                    return A
                }
            }

            function Wc(a, b) {
                for (var c = [], f = 0; f < a; f++) c.push(O[(b >> 2) + f]);
                return c
            }

            var Xc = [], Yc = [{}, {value: void 0}, {value: null}, {value: !0}, {value: !1}];

            function Zc(a) {
                4 < a && 0 === --Yc[a].jf && (Yc[a] = void 0, Xc.push(a))
            }

            function $c(a) {
                a || X("Cannot use deleted val. handle = " + a);
                return Yc[a].value
            }

            function zc(a) {
                switch (a) {
                    case void 0:
                        return 1;
                    case null:
                        return 2;
                    case !0:
                        return 3;
                    case !1:
                        return 4;
                    default:
                        var b = Xc.length ? Xc.pop() : Yc.length;
                        Yc[b] = {jf: 1, value: a};
                        return b
                }
            }

            function ad(a, b, c) {
                switch (b) {
                    case 0:
                        return function (f) {
                            return this.fromWireType((c ? nb : G)[f])
                        };
                    case 1:
                        return function (f) {
                            return this.fromWireType((c ? cb : bb)[f >> 1])
                        };
                    case 2:
                        return function (f) {
                            return this.fromWireType((c ? O : ob)[f >> 2])
                        };
                    default:
                        throw new TypeError("Unknown integer type: " + a);
                }
            }

            function bd(a, b) {
                var c = Qb[a];
                void 0 === c && X(b + " has unknown type " + Rc(a));
                return c
            }

            function xc(a) {
                if (null === a) return "null";
                var b = typeof a;
                return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a
            }

            function cd(a, b) {
                switch (b) {
                    case 2:
                        return function (c) {
                            return this.fromWireType(U[c >> 2])
                        };
                    case 3:
                        return function (c) {
                            return this.fromWireType(pb[c >> 3])
                        };
                    default:
                        throw new TypeError("Unknown float type: " + a);
                }
            }

            function dd(a, b, c) {
                switch (b) {
                    case 0:
                        return c ? function (f) {
                            return nb[f]
                        } : function (f) {
                            return G[f]
                        };
                    case 1:
                        return c ? function (f) {
                            return cb[f >> 1]
                        } : function (f) {
                            return bb[f >> 1]
                        };
                    case 2:
                        return c ? function (f) {
                            return O[f >> 2]
                        } : function (f) {
                            return ob[f >> 2]
                        };
                    default:
                        throw new TypeError("Unknown integer type: " + a);
                }
            }

            var ed = {};

            function fd(a) {
                var b = ed[a];
                return void 0 === b ? gc(a) : b
            }

            var gd = [];

            function hd() {
                function a(b) {
                    b.$$$embind_global$$$ = b;
                    var c = "object" === typeof $$$embind_global$$$ && b.$$$embind_global$$$ === b;
                    c || delete b.$$$embind_global$$$;
                    return c
                }

                if ("object" === typeof globalThis) return globalThis;
                if ("object" === typeof $$$embind_global$$$) return $$$embind_global$$$;
                "object" === typeof global && a(global) ? $$$embind_global$$$ = global : "object" === typeof self && a(self) && ($$$embind_global$$$ = self);
                if ("object" === typeof $$$embind_global$$$) return $$$embind_global$$$;
                throw Error("unable to get global object.");
            }

            function jd(a) {
                var b = gd.length;
                gd.push(a);
                return b
            }

            function kd(a, b) {
                for (var c = Array(a), f = 0; f < a; ++f) c[f] = bd(O[(b >> 2) + f], "parameter " + f);
                return c
            }

            var ld = [];

            function md(a) {
                var b = Array(a + 1);
                return function (c, f, h) {
                    b[0] = c;
                    for (var l = 0; l < a; ++l) {
                        var n = bd(O[(f >> 2) + l], "parameter " + l);
                        b[l + 1] = n.readValueFromPointer(h);
                        h += n.argPackAdvance
                    }
                    c = new (c.bind.apply(c, b));
                    return zc(c)
                }
            }

            var nd = {}, od;
            od = Ba ? () => {
                var a = process.hrtime();
                return 1E3 * a[0] + a[1] / 1E6
            } : () => performance.now();

            function pd(a) {
                var b = a.getExtension("ANGLE_instanced_arrays");
                b && (a.vertexAttribDivisor = function (c, f) {
                    b.vertexAttribDivisorANGLE(c, f)
                }, a.drawArraysInstanced = function (c, f, h, l) {
                    b.drawArraysInstancedANGLE(c, f, h, l)
                }, a.drawElementsInstanced = function (c, f, h, l, n) {
                    b.drawElementsInstancedANGLE(c, f, h, l, n)
                })
            }

            function qd(a) {
                var b = a.getExtension("OES_vertex_array_object");
                b && (a.createVertexArray = function () {
                    return b.createVertexArrayOES()
                }, a.deleteVertexArray = function (c) {
                    b.deleteVertexArrayOES(c)
                }, a.bindVertexArray = function (c) {
                    b.bindVertexArrayOES(c)
                }, a.isVertexArray = function (c) {
                    return b.isVertexArrayOES(c)
                })
            }

            function rd(a) {
                var b = a.getExtension("WEBGL_draw_buffers");
                b && (a.drawBuffers = function (c, f) {
                    b.drawBuffersWEBGL(c, f)
                })
            }

            var sd = 1, td = [], ud = [], vd = [], wd = [], la = [], xd = [], yd = [], qa = [], zd = [], Ad = [],
                Bd = {}, Cd = {}, Dd = 4;

            function Ed(a) {
                Hd || (Hd = a)
            }

            function ka(a) {
                for (var b = sd++, c = a.length; c < b; c++) a[c] = null;
                return b
            }

            function ma(a, b) {
                a.sf || (a.sf = a.getContext, a.getContext = function (f, h) {
                    h = a.sf(f, h);
                    return "webgl" == f == h instanceof WebGLRenderingContext ? h : null
                });
                var c = 1 < b.majorVersion ? a.getContext("webgl2", b) : a.getContext("webgl", b);
                return c ? Id(c, b) : 0
            }

            function Id(a, b) {
                var c = ka(qa), f = {Vf: c, attributes: b, version: b.majorVersion, je: a};
                a.canvas && (a.canvas.yf = f);
                qa[c] = f;
                ("undefined" === typeof b.Kf || b.Kf) && Jd(f);
                return c
            }

            function na(a) {
                v = qa[a];
                t.Cg = Y = v && v.je;
                return !(a && !Y)
            }

            function Jd(a) {
                a || (a = v);
                if (!a.Yf) {
                    a.Yf = !0;
                    var b = a.je;
                    pd(b);
                    qd(b);
                    rd(b);
                    b.pf = b.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");
                    b.uf = b.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
                    2 <= a.version && (b.qf = b.getExtension("EXT_disjoint_timer_query_webgl2"));
                    if (2 > a.version || !b.qf) b.qf = b.getExtension("EXT_disjoint_timer_query");
                    b.Eg = b.getExtension("WEBGL_multi_draw");
                    (b.getSupportedExtensions() || []).forEach(function (c) {
                        c.includes("lose_context") || c.includes("debug") || b.getExtension(c)
                    })
                }
            }

            var v, Hd, Kd = [];

            function Ld(a, b, c, f) {
                for (var h = 0; h < a; h++) {
                    var l = Y[c](), n = l && ka(f);
                    l ? (l.name = n, f[n] = l) : Ed(1282);
                    O[b + 4 * h >> 2] = n
                }
            }

            function Md(a, b) {
                if (b) {
                    var c = void 0;
                    switch (a) {
                        case 36346:
                            c = 1;
                            break;
                        case 36344:
                            return;
                        case 34814:
                        case 36345:
                            c = 0;
                            break;
                        case 34466:
                            var f = Y.getParameter(34467);
                            c = f ? f.length : 0;
                            break;
                        case 33309:
                            if (2 > v.version) {
                                Ed(1282);
                                return
                            }
                            c = 2 * (Y.getSupportedExtensions() || []).length;
                            break;
                        case 33307:
                        case 33308:
                            if (2 > v.version) {
                                Ed(1280);
                                return
                            }
                            c = 33307 == a ? 3 : 0
                    }
                    if (void 0 === c) switch (f = Y.getParameter(a), typeof f) {
                        case "number":
                            c = f;
                            break;
                        case "boolean":
                            c = f ? 1 : 0;
                            break;
                        case "string":
                            Ed(1280);
                            return;
                        case "object":
                            if (null === f) switch (a) {
                                case 34964:
                                case 35725:
                                case 34965:
                                case 36006:
                                case 36007:
                                case 32873:
                                case 34229:
                                case 36662:
                                case 36663:
                                case 35053:
                                case 35055:
                                case 36010:
                                case 35097:
                                case 35869:
                                case 32874:
                                case 36389:
                                case 35983:
                                case 35368:
                                case 34068:
                                    c =
                                        0;
                                    break;
                                default:
                                    Ed(1280);
                                    return
                            } else {
                                if (f instanceof Float32Array || f instanceof Uint32Array || f instanceof Int32Array || f instanceof Array) {
                                    for (a = 0; a < f.length; ++a) O[b + 4 * a >> 2] = f[a];
                                    return
                                }
                                try {
                                    c = f.name | 0
                                } catch (h) {
                                    Ed(1280);
                                    Ma("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter(" + a + ")! (error: " + h + ")");
                                    return
                                }
                            }
                            break;
                        default:
                            Ed(1280);
                            Ma("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v(" + a + ") and it returns " + f + " of type " + typeof f + "!");
                            return
                    }
                    O[b >> 2] = c
                } else Ed(1281)
            }

            function Nd(a) {
                var b = ra(a) + 1, c = Od(b);
                sa(a, G, c, b);
                return c
            }

            function Pd(a) {
                return "]" == a.slice(-1) && a.lastIndexOf("[")
            }

            function Qd(a) {
                a -= 5120;
                return 0 == a ? nb : 1 == a ? G : 2 == a ? cb : 4 == a ? O : 6 == a ? U : 5 == a || 28922 == a || 28520 == a || 30779 == a || 30782 == a ? ob : bb
            }

            function Rd(a, b, c, f, h) {
                a = Qd(a);
                var l = 31 - Math.clz32(a.BYTES_PER_ELEMENT), n = Dd;
                return a.subarray(h >> l, h + f * (c * ({
                    5: 3,
                    6: 4,
                    8: 2,
                    29502: 3,
                    29504: 4,
                    26917: 2,
                    26918: 2,
                    29846: 3,
                    29847: 4
                }[b - 6402] || 1) * (1 << l) + n - 1 & -n) >> l)
            }

            function Z(a) {
                var b = Y.Gf;
                if (b) {
                    var c = b.Oe[a];
                    "number" === typeof c && (b.Oe[a] = c = Y.getUniformLocation(b, b.wf[a] + (0 < c ? "[" + c + "]" : "")));
                    return c
                }
                Ed(1282)
            }

            var Sd = [], Td = [], Ud = {};

            function Vd() {
                if (!Wd) {
                    var a = {
                        USER: "web_user",
                        LOGNAME: "web_user",
                        PATH: "/",
                        PWD: "/",
                        HOME: "/home/web_user",
                        LANG: ("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                        _: wa || "./this.program"
                    }, b;
                    for (b in Ud) void 0 === Ud[b] ? delete a[b] : a[b] = Ud[b];
                    var c = [];
                    for (b in a) c.push(b + "=" + a[b]);
                    Wd = c
                }
                return Wd
            }

            var Wd;

            function Xd(a) {
                return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400)
            }

            function Yd(a, b) {
                for (var c = 0, f = 0; f <= b; c += a[f++]) ;
                return c
            }

            var Zd = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                $d = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            function ae(a, b) {
                for (a = new Date(a.getTime()); 0 < b;) {
                    var c = a.getMonth(), f = (Xd(a.getFullYear()) ? Zd : $d)[c];
                    if (b > f - a.getDate()) b -= f - a.getDate() + 1, a.setDate(1), 11 > c ? a.setMonth(c + 1) : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1)); else {
                        a.setDate(a.getDate() + b);
                        break
                    }
                }
                return a
            }

            function be(a, b, c, f) {
                function h(A, L, S) {
                    for (A = "number" === typeof A ? A.toString() : A || ""; A.length < L;) A = S[0] + A;
                    return A
                }

                function l(A, L) {
                    return h(A, L, "0")
                }

                function n(A, L) {
                    function S(oa) {
                        return 0 > oa ? -1 : 0 < oa ? 1 : 0
                    }

                    var T;
                    0 === (T = S(A.getFullYear() - L.getFullYear())) && 0 === (T = S(A.getMonth() - L.getMonth())) && (T = S(A.getDate() - L.getDate()));
                    return T
                }

                function q(A) {
                    switch (A.getDay()) {
                        case 0:
                            return new Date(A.getFullYear() - 1, 11, 29);
                        case 1:
                            return A;
                        case 2:
                            return new Date(A.getFullYear(), 0, 3);
                        case 3:
                            return new Date(A.getFullYear(),
                                0, 2);
                        case 4:
                            return new Date(A.getFullYear(), 0, 1);
                        case 5:
                            return new Date(A.getFullYear() - 1, 11, 31);
                        case 6:
                            return new Date(A.getFullYear() - 1, 11, 30)
                    }
                }

                function w(A) {
                    A = ae(new Date(A.be + 1900, 0, 1), A.$e);
                    var L = new Date(A.getFullYear() + 1, 0, 4), S = q(new Date(A.getFullYear(), 0, 4));
                    L = q(L);
                    return 0 >= n(S, A) ? 0 >= n(L, A) ? A.getFullYear() + 1 : A.getFullYear() : A.getFullYear() - 1
                }

                var x = O[f + 40 >> 2];
                f = {
                    yg: O[f >> 2],
                    xg: O[f + 4 >> 2],
                    Ye: O[f + 8 >> 2],
                    Ne: O[f + 12 >> 2],
                    Fe: O[f + 16 >> 2],
                    be: O[f + 20 >> 2],
                    Ze: O[f + 24 >> 2],
                    $e: O[f + 28 >> 2],
                    Ig: O[f + 32 >> 2],
                    wg: O[f +
                    36 >> 2],
                    zg: x ? Xa(x) : ""
                };
                c = Xa(c);
                x = {
                    "%c": "%a %b %d %H:%M:%S %Y",
                    "%D": "%m/%d/%y",
                    "%F": "%Y-%m-%d",
                    "%h": "%b",
                    "%r": "%I:%M:%S %p",
                    "%R": "%H:%M",
                    "%T": "%H:%M:%S",
                    "%x": "%m/%d/%y",
                    "%X": "%H:%M:%S",
                    "%Ec": "%c",
                    "%EC": "%C",
                    "%Ex": "%m/%d/%y",
                    "%EX": "%H:%M:%S",
                    "%Ey": "%y",
                    "%EY": "%Y",
                    "%Od": "%d",
                    "%Oe": "%e",
                    "%OH": "%H",
                    "%OI": "%I",
                    "%Om": "%m",
                    "%OM": "%M",
                    "%OS": "%S",
                    "%Ou": "%u",
                    "%OU": "%U",
                    "%OV": "%V",
                    "%Ow": "%w",
                    "%OW": "%W",
                    "%Oy": "%y"
                };
                for (var J in x) c = c.replace(new RegExp(J, "g"), x[J]);
                var K = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    Q = "January February March April May June July August September October November December".split(" ");
                x = {
                    "%a": function (A) {
                        return K[A.Ze].substring(0, 3)
                    }, "%A": function (A) {
                        return K[A.Ze]
                    }, "%b": function (A) {
                        return Q[A.Fe].substring(0, 3)
                    }, "%B": function (A) {
                        return Q[A.Fe]
                    }, "%C": function (A) {
                        return l((A.be + 1900) / 100 | 0, 2)
                    }, "%d": function (A) {
                        return l(A.Ne, 2)
                    }, "%e": function (A) {
                        return h(A.Ne, 2, " ")
                    }, "%g": function (A) {
                        return w(A).toString().substring(2)
                    }, "%G": function (A) {
                        return w(A)
                    }, "%H": function (A) {
                        return l(A.Ye,
                            2)
                    }, "%I": function (A) {
                        A = A.Ye;
                        0 == A ? A = 12 : 12 < A && (A -= 12);
                        return l(A, 2)
                    }, "%j": function (A) {
                        return l(A.Ne + Yd(Xd(A.be + 1900) ? Zd : $d, A.Fe - 1), 3)
                    }, "%m": function (A) {
                        return l(A.Fe + 1, 2)
                    }, "%M": function (A) {
                        return l(A.xg, 2)
                    }, "%n": function () {
                        return "\n"
                    }, "%p": function (A) {
                        return 0 <= A.Ye && 12 > A.Ye ? "AM" : "PM"
                    }, "%S": function (A) {
                        return l(A.yg, 2)
                    }, "%t": function () {
                        return "\t"
                    }, "%u": function (A) {
                        return A.Ze || 7
                    }, "%U": function (A) {
                        var L = new Date(A.be + 1900, 0, 1), S = 0 === L.getDay() ? L : ae(L, 7 - L.getDay());
                        A = new Date(A.be + 1900, A.Fe, A.Ne);
                        return 0 >
                        n(S, A) ? l(Math.ceil((31 - S.getDate() + (Yd(Xd(A.getFullYear()) ? Zd : $d, A.getMonth() - 1) - 31) + A.getDate()) / 7), 2) : 0 === n(S, L) ? "01" : "00"
                    }, "%V": function (A) {
                        var L = new Date(A.be + 1901, 0, 4), S = q(new Date(A.be + 1900, 0, 4));
                        L = q(L);
                        var T = ae(new Date(A.be + 1900, 0, 1), A.$e);
                        return 0 > n(T, S) ? "53" : 0 >= n(L, T) ? "01" : l(Math.ceil((S.getFullYear() < A.be + 1900 ? A.$e + 32 - S.getDate() : A.$e + 1 - S.getDate()) / 7), 2)
                    }, "%w": function (A) {
                        return A.Ze
                    }, "%W": function (A) {
                        var L = new Date(A.be, 0, 1),
                            S = 1 === L.getDay() ? L : ae(L, 0 === L.getDay() ? 1 : 7 - L.getDay() + 1);
                        A =
                            new Date(A.be + 1900, A.Fe, A.Ne);
                        return 0 > n(S, A) ? l(Math.ceil((31 - S.getDate() + (Yd(Xd(A.getFullYear()) ? Zd : $d, A.getMonth() - 1) - 31) + A.getDate()) / 7), 2) : 0 === n(S, L) ? "01" : "00"
                    }, "%y": function (A) {
                        return (A.be + 1900).toString().substring(2)
                    }, "%Y": function (A) {
                        return A.be + 1900
                    }, "%z": function (A) {
                        A = A.wg;
                        var L = 0 <= A;
                        A = Math.abs(A) / 60;
                        return (L ? "+" : "-") + String("0000" + (A / 60 * 100 + A % 60)).slice(-4)
                    }, "%Z": function (A) {
                        return A.zg
                    }, "%%": function () {
                        return "%"
                    }
                };
                for (J in x) c.includes(J) && (c = c.replace(new RegExp(J, "g"), x[J](f)));
                J = ce(c);
                if (J.length > b) return 0;
                nb.set(J, a);
                return J.length - 1
            }

            Vb = t.InternalError = Ub("InternalError");
            for (var de = Array(256), ee = 0; 256 > ee; ++ee) de[ee] = String.fromCharCode(ee);
            fc = de;
            hc = t.BindingError = Ub("BindingError");
            qc.prototype.isAliasOf = function (a) {
                if (!(this instanceof qc && a instanceof qc)) return !1;
                var b = this.Ld.Xd.Sd, c = this.Ld.Qd, f = a.Ld.Xd.Sd;
                for (a = a.Ld.Qd; b.ie;) c = b.Pe(c), b = b.ie;
                for (; f.ie;) a = f.Pe(a), f = f.ie;
                return b === f && c === a
            };
            qc.prototype.clone = function () {
                this.Ld.Qd || ic(this);
                if (this.Ld.Me) return this.Ld.count.value += 1, this;
                var a = mc, b = Object, c = b.create, f = Object.getPrototypeOf(this), h = this.Ld;
                a = a(c.call(b, f, {
                    Ld: {
                        value: {
                            count: h.count,
                            De: h.De,
                            Me: h.Me,
                            Qd: h.Qd,
                            Xd: h.Xd,
                            $d: h.$d,
                            ge: h.ge
                        }
                    }
                }));
                a.Ld.count.value += 1;
                a.Ld.De = !1;
                return a
            };
            qc.prototype["delete"] = function () {
                this.Ld.Qd || ic(this);
                this.Ld.De && !this.Ld.Me && X("Object already scheduled for deletion");
                kc(this);
                lc(this.Ld);
                this.Ld.Me || (this.Ld.$d = void 0, this.Ld.Qd = void 0)
            };
            qc.prototype.isDeleted = function () {
                return !this.Ld.Qd
            };
            qc.prototype.deleteLater = function () {
                this.Ld.Qd || ic(this);
                this.Ld.De && !this.Ld.Me && X("Object already scheduled for deletion");
                oc.push(this);
                1 === oc.length && nc && nc(pc);
                this.Ld.De = !0;
                return this
            };
            Fc.prototype.Qf = function (a) {
                this.vf && (a = this.vf(a));
                return a
            };
            Fc.prototype.nf = function (a) {
                this.le && this.le(a)
            };
            Fc.prototype.argPackAdvance = 8;
            Fc.prototype.readValueFromPointer = Ob;
            Fc.prototype.deleteObject = function (a) {
                if (null !== a) a["delete"]()
            };
            Fc.prototype.fromWireType = function (a) {
                function b() {
                    return this.Ue ? Ec(this.Sd.Ee, {Xd: this.eg, Qd: c, ge: this, $d: a}) : Ec(this.Sd.Ee, {
                        Xd: this,
                        Qd: a
                    })
                }

                var c = this.Qf(a);
                if (!c) return this.nf(a), null;
                var f = Dc(this.Sd, c);
                if (void 0 !== f) {
                    if (0 === f.Ld.count.value) return f.Ld.Qd = c, f.Ld.$d = a, f.clone();
                    f = f.clone();
                    this.nf(a);
                    return f
                }
                f = this.Sd.Pf(c);
                f = rc[f];
                if (!f) return b.call(this);
                f = this.Te ? f.Ef : f.pointerType;
                var h = Bc(c, this.Sd, f.Sd);
                return null === h ? b.call(this) : this.Ue ? Ec(f.Sd.Ee, {Xd: f, Qd: h, ge: this, $d: a}) : Ec(f.Sd.Ee,
                    {Xd: f, Qd: h})
            };
            t.getInheritedInstanceCount = function () {
                return Object.keys(Cc).length
            };
            t.getLiveInheritedInstances = function () {
                var a = [], b;
                for (b in Cc) Cc.hasOwnProperty(b) && a.push(Cc[b]);
                return a
            };
            t.flushPendingDeletes = pc;
            t.setDelayFunction = function (a) {
                nc = a;
                oc.length && nc && nc(pc)
            };
            Qc = t.UnboundTypeError = Ub("UnboundTypeError");
            t.count_emval_handles = function () {
                for (var a = 0, b = 5; b < Yc.length; ++b) void 0 !== Yc[b] && ++a;
                return a
            };
            t.get_first_emval = function () {
                for (var a = 5; a < Yc.length; ++a) if (void 0 !== Yc[a]) return Yc[a];
                return null
            };
            for (var Y, fe = 0; 32 > fe; ++fe) Kd.push(Array(fe));
            var ge = new Float32Array(288);
            for (fe = 0; 288 > fe; ++fe) Sd[fe] = ge.subarray(0, fe + 1);
            var he = new Int32Array(288);
            for (fe = 0; 288 > fe; ++fe) Td[fe] = he.subarray(0, fe + 1);

            function ce(a) {
                var b = Array(ra(a) + 1);
                sa(a, b, 0, b.length);
                return b
            }

            var ze = {
                Lb: function (a) {
                    return Od(a + 16) + 16
                },
                Eb: function (a, b, c) {
                    (new Hb(a)).Xf(b, c);
                    Ib++;
                    throw a;
                },
                P: function () {
                    return 0
                },
                zb: function () {
                },
                xb: function () {
                },
                Cb: function () {
                    return 0
                },
                wb: function () {
                },
                tb: function (a, b, c, f, h, l) {
                    l <<= 12;
                    if (0 !== (f & 16) && 0 !== a % 65536) b = -28; else if (0 !== (f & 32)) {
                        a = 65536 * Math.ceil(b / 65536);
                        var n = ie(65536, a);
                        n ? (G.fill(0, n, n + a), a = n) : a = 0;
                        a ? (Jb[a] = {cg: a, bg: b, Df: !0, fd: h, Gg: c, flags: f, offset: l}, b = a) : b = -48
                    } else b = -52;
                    return b
                },
                sb: function (a, b) {
                    var c = Jb[a];
                    0 !== b && c ? (b === c.bg && (Jb[a] = null, c.Df &&
                    Tc(c.cg)), a = 0) : a = -28;
                    return a
                },
                Q: function () {
                },
                yb: function () {
                },
                x: function (a) {
                    var b = Mb[a];
                    delete Mb[a];
                    var c = b.hf, f = b.le, h = b.rf, l = h.map(function (n) {
                        return n.Uf
                    }).concat(h.map(function (n) {
                        return n.og
                    }));
                    Xb([a], l, function (n) {
                        var q = {};
                        h.forEach(function (w, x) {
                            var J = n[x], K = w.Sf, Q = w.Tf, A = n[x + h.length], L = w.ng, S = w.pg;
                            q[w.Lf] = {
                                read: function (T) {
                                    return J.fromWireType(K(Q, T))
                                }, write: function (T, oa) {
                                    var ta = [];
                                    L(S, T, A.toWireType(ta, oa));
                                    Nb(ta)
                                }
                            }
                        });
                        return [{
                            name: b.name, fromWireType: function (w) {
                                var x = {}, J;
                                for (J in q) x[J] =
                                    q[J].read(w);
                                f(w);
                                return x
                            }, toWireType: function (w, x) {
                                for (var J in q) if (!(J in x)) throw new TypeError('Missing field:  "' + J + '"');
                                var K = c();
                                for (J in q) q[J].write(K, x[J]);
                                null !== w && w.push(f, K);
                                return K
                            }, argPackAdvance: 8, readValueFromPointer: Ob, fe: f
                        }]
                    })
                },
                mb: function () {
                },
                Fb: function (a, b, c, f, h) {
                    var l = ec(c);
                    b = gc(b);
                    dc(a, {
                        name: b, fromWireType: function (n) {
                            return !!n
                        }, toWireType: function (n, q) {
                            return q ? f : h
                        }, argPackAdvance: 8, readValueFromPointer: function (n) {
                            if (1 === c) var q = nb; else if (2 === c) q = cb; else if (4 === c) q =
                                O; else throw new TypeError("Unknown boolean type size: " + b);
                            return this.fromWireType(q[n >> l])
                        }, fe: null
                    })
                },
                l: function (a, b, c, f, h, l, n, q, w, x, J, K, Q) {
                    J = gc(J);
                    l = Pc(h, l);
                    q && (q = Pc(n, q));
                    x && (x = Pc(w, x));
                    Q = Pc(K, Q);
                    var A = Sb(J);
                    tc(A, function () {
                        Uc("Cannot construct " + J + " due to unbound types", [f])
                    });
                    Xb([a, b, c], f ? [f] : [], function (L) {
                        L = L[0];
                        if (f) {
                            var S = L.Sd;
                            var T = S.Ee
                        } else T = qc.prototype;
                        L = Tb(A, function () {
                            if (Object.getPrototypeOf(this) !== oa) throw new hc("Use 'new' to construct " + J);
                            if (void 0 === ta.oe) throw new hc(J +
                                " has no accessible constructor");
                            var hb = ta.oe[arguments.length];
                            if (void 0 === hb) throw new hc("Tried to invoke ctor of " + J + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(ta.oe).toString() + ") parameters instead!");
                            return hb.apply(this, arguments)
                        });
                        var oa = Object.create(T, {constructor: {value: L}});
                        L.prototype = oa;
                        var ta = new uc(J, L, oa, Q, S, l, q, x);
                        S = new Fc(J, ta, !0, !1, !1);
                        T = new Fc(J + "*", ta, !1, !1, !1);
                        var gb = new Fc(J + " const*", ta, !1, !0, !1);
                        rc[a] = {pointerType: T, Ef: gb};
                        Gc(A,
                            L);
                        return [S, T, gb]
                    })
                },
                e: function (a, b, c, f, h, l, n) {
                    var q = Wc(c, f);
                    b = gc(b);
                    l = Pc(h, l);
                    Xb([], [a], function (w) {
                        function x() {
                            Uc("Cannot call " + J + " due to unbound types", q)
                        }

                        w = w[0];
                        var J = w.name + "." + b;
                        b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                        var K = w.Sd.constructor;
                        void 0 === K[b] ? (x.Be = c - 1, K[b] = x) : (sc(K, b, J), K[b].Zd[c - 1] = x);
                        Xb([], q, function (Q) {
                            Q = [Q[0], null].concat(Q.slice(1));
                            Q = Vc(J, Q, null, l, n);
                            void 0 === K[b].Zd ? (Q.Be = c - 1, K[b] = Q) : K[b].Zd[c - 1] = Q;
                            return []
                        });
                        return []
                    })
                },
                u: function (a, b, c, f, h, l) {
                    0 < b || Ra(void 0);
                    var n = Wc(b, c);
                    h = Pc(f, h);
                    Xb([], [a], function (q) {
                        q = q[0];
                        var w = "constructor " + q.name;
                        void 0 === q.Sd.oe && (q.Sd.oe = []);
                        if (void 0 !== q.Sd.oe[b - 1]) throw new hc("Cannot register multiple constructors with identical number of parameters (" + (b - 1) + ") for class '" + q.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                        q.Sd.oe[b - 1] = () => {
                            Uc("Cannot construct " + q.name + " due to unbound types", n)
                        };
                        Xb([], n, function (x) {
                            x.splice(1, 0, null);
                            q.Sd.oe[b - 1] = Vc(w, x, null, h,
                                l);
                            return []
                        });
                        return []
                    })
                },
                d: function (a, b, c, f, h, l, n, q) {
                    var w = Wc(c, f);
                    b = gc(b);
                    l = Pc(h, l);
                    Xb([], [a], function (x) {
                        function J() {
                            Uc("Cannot call " + K + " due to unbound types", w)
                        }

                        x = x[0];
                        var K = x.name + "." + b;
                        b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                        q && x.Sd.fg.push(b);
                        var Q = x.Sd.Ee, A = Q[b];
                        void 0 === A || void 0 === A.Zd && A.className !== x.name && A.Be === c - 2 ? (J.Be = c - 2, J.className = x.name, Q[b] = J) : (sc(Q, b, K), Q[b].Zd[c - 2] = J);
                        Xb([], w, function (L) {
                            L = Vc(K, L, x, l, n);
                            void 0 === Q[b].Zd ? (L.Be = c - 2, Q[b] = L) : Q[b].Zd[c - 2] = L;
                            return []
                        });
                        return []
                    })
                },
                V: function (a, b, c) {
                    a = gc(a);
                    Xb([], [b], function (f) {
                        f = f[0];
                        t[a] = f.fromWireType(c);
                        return []
                    })
                },
                Db: function (a, b) {
                    b = gc(b);
                    dc(a, {
                        name: b, fromWireType: function (c) {
                            var f = $c(c);
                            Zc(c);
                            return f
                        }, toWireType: function (c, f) {
                            return zc(f)
                        }, argPackAdvance: 8, readValueFromPointer: Ob, fe: null
                    })
                },
                k: function (a, b, c, f) {
                    function h() {
                    }

                    c = ec(c);
                    b = gc(b);
                    h.values = {};
                    dc(a, {
                        name: b, constructor: h, fromWireType: function (l) {
                            return this.constructor.values[l]
                        }, toWireType: function (l, n) {
                            return n.value
                        }, argPackAdvance: 8, readValueFromPointer: ad(b,
                            c, f), fe: null
                    });
                    tc(b, h)
                },
                j: function (a, b, c) {
                    var f = bd(a, "enum");
                    b = gc(b);
                    a = f.constructor;
                    f = Object.create(f.constructor.prototype, {
                        value: {value: c},
                        constructor: {
                            value: Tb(f.name + "_" + b, function () {
                            })
                        }
                    });
                    a.values[c] = f;
                    a[b] = f
                },
                S: function (a, b, c) {
                    c = ec(c);
                    b = gc(b);
                    dc(a, {
                        name: b, fromWireType: function (f) {
                            return f
                        }, toWireType: function (f, h) {
                            return h
                        }, argPackAdvance: 8, readValueFromPointer: cd(b, c), fe: null
                    })
                },
                t: function (a, b, c, f, h, l) {
                    var n = Wc(b, c);
                    a = gc(a);
                    h = Pc(f, h);
                    tc(a, function () {
                        Uc("Cannot call " + a + " due to unbound types",
                            n)
                    }, b - 1);
                    Xb([], n, function (q) {
                        q = [q[0], null].concat(q.slice(1));
                        Gc(a, Vc(a, q, null, h, l), b - 1);
                        return []
                    })
                },
                w: function (a, b, c, f, h) {
                    b = gc(b);
                    -1 === h && (h = 4294967295);
                    h = ec(c);
                    var l = q => q;
                    if (0 === f) {
                        var n = 32 - 8 * c;
                        l = q => q << n >>> n
                    }
                    c = b.includes("unsigned") ? function (q, w) {
                        return w >>> 0
                    } : function (q, w) {
                        return w
                    };
                    dc(a, {
                        name: b,
                        fromWireType: l,
                        toWireType: c,
                        argPackAdvance: 8,
                        readValueFromPointer: dd(b, h, 0 !== f),
                        fe: null
                    })
                },
                p: function (a, b, c) {
                    function f(l) {
                        l >>= 2;
                        var n = ob;
                        return new h(mb, n[l + 1], n[l])
                    }

                    var h = [Int8Array, Uint8Array, Int16Array,
                        Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][b];
                    c = gc(c);
                    dc(a, {name: c, fromWireType: f, argPackAdvance: 8, readValueFromPointer: f}, {Wf: !0})
                },
                o: function (a, b, c, f, h, l, n, q, w, x, J, K) {
                    c = gc(c);
                    l = Pc(h, l);
                    q = Pc(n, q);
                    x = Pc(w, x);
                    K = Pc(J, K);
                    Xb([a], [b], function (Q) {
                        Q = Q[0];
                        return [new Fc(c, Q.Sd, !1, !1, !0, Q, f, l, q, x, K)]
                    })
                },
                R: function (a, b) {
                    b = gc(b);
                    var c = "std::string" === b;
                    dc(a, {
                        name: b, fromWireType: function (f) {
                            var h = ob[f >> 2];
                            if (c) for (var l = f + 4, n = 0; n <= h; ++n) {
                                var q = f + 4 + n;
                                if (n == h || 0 == G[q]) {
                                    l = Xa(l, q - l);
                                    if (void 0 ===
                                        w) var w = l; else w += String.fromCharCode(0), w += l;
                                    l = q + 1
                                }
                            } else {
                                w = Array(h);
                                for (n = 0; n < h; ++n) w[n] = String.fromCharCode(G[f + 4 + n]);
                                w = w.join("")
                            }
                            Tc(f);
                            return w
                        }, toWireType: function (f, h) {
                            h instanceof ArrayBuffer && (h = new Uint8Array(h));
                            var l = "string" === typeof h;
                            l || h instanceof Uint8Array || h instanceof Uint8ClampedArray || h instanceof Int8Array || X("Cannot pass non-string to std::string");
                            var n = (c && l ? () => ra(h) : () => h.length)(), q = Od(4 + n + 1);
                            ob[q >> 2] = n;
                            if (c && l) sa(h, G, q + 4, n + 1); else if (l) for (l = 0; l < n; ++l) {
                                var w = h.charCodeAt(l);
                                255 < w && (Tc(q), X("String has UTF-16 code units that do not fit in 8 bits"));
                                G[q + 4 + l] = w
                            } else for (l = 0; l < n; ++l) G[q + 4 + l] = h[l];
                            null !== f && f.push(Tc, q);
                            return q
                        }, argPackAdvance: 8, readValueFromPointer: Ob, fe: function (f) {
                            Tc(f)
                        }
                    })
                },
                H: function (a, b, c) {
                    c = gc(c);
                    if (2 === b) {
                        var f = ab;
                        var h = db;
                        var l = eb;
                        var n = () => bb;
                        var q = 1
                    } else 4 === b && (f = jb, h = kb, l = lb, n = () => ob, q = 2);
                    dc(a, {
                        name: c, fromWireType: function (w) {
                            for (var x = ob[w >> 2], J = n(), K, Q = w + 4, A = 0; A <= x; ++A) {
                                var L = w + 4 + A * b;
                                if (A == x || 0 == J[L >> q]) Q = f(Q, L - Q), void 0 === K ? K = Q : (K += String.fromCharCode(0),
                                    K += Q), Q = L + b
                            }
                            Tc(w);
                            return K
                        }, toWireType: function (w, x) {
                            "string" !== typeof x && X("Cannot pass non-string to C++ string type " + c);
                            var J = l(x), K = Od(4 + J + b);
                            ob[K >> 2] = J >> q;
                            h(x, K + 4, J + b);
                            null !== w && w.push(Tc, K);
                            return K
                        }, argPackAdvance: 8, readValueFromPointer: Ob, fe: function (w) {
                            Tc(w)
                        }
                    })
                },
                y: function (a, b, c, f, h, l) {
                    Mb[a] = {name: gc(b), hf: Pc(c, f), le: Pc(h, l), rf: []}
                },
                g: function (a, b, c, f, h, l, n, q, w, x) {
                    Mb[a].rf.push({Lf: gc(b), Uf: c, Sf: Pc(f, h), Tf: l, og: n, ng: Pc(q, w), pg: x})
                },
                Gb: function (a, b) {
                    b = gc(b);
                    dc(a, {
                        Zf: !0, name: b, argPackAdvance: 0,
                        fromWireType: function () {
                        }, toWireType: function () {
                        }
                    })
                },
                pb: function () {
                    throw"longjmp";
                },
                A: function (a, b, c) {
                    a = $c(a);
                    b = bd(b, "emval::as");
                    var f = [], h = zc(f);
                    O[c >> 2] = h;
                    return b.toWireType(f, a)
                },
                M: function (a, b, c, f, h) {
                    a = gd[a];
                    b = $c(b);
                    c = fd(c);
                    var l = [];
                    O[f >> 2] = zc(l);
                    return a(b, c, l, h)
                },
                B: function (a, b, c, f) {
                    a = gd[a];
                    b = $c(b);
                    c = fd(c);
                    a(b, c, null, f)
                },
                D: Zc,
                Bb: function (a) {
                    if (0 === a) return zc(hd());
                    a = fd(a);
                    return zc(hd()[a])
                },
                z: function (a, b) {
                    var c = kd(a, b), f = c[0];
                    b = f.name + "_$" + c.slice(1).map(function (n) {
                            return n.name
                        }).join("_") +
                        "$";
                    var h = ld[b];
                    if (void 0 !== h) return h;
                    var l = Array(a - 1);
                    h = jd((n, q, w, x) => {
                        for (var J = 0, K = 0; K < a - 1; ++K) l[K] = c[K + 1].readValueFromPointer(x + J), J += c[K + 1].argPackAdvance;
                        n = n[q].apply(n, l);
                        for (K = 0; K < a - 1; ++K) c[K + 1].Hf && c[K + 1].Hf(l[K]);
                        if (!f.Zf) return f.toWireType(w, n)
                    });
                    return ld[b] = h
                },
                K: function (a, b) {
                    a = $c(a);
                    b = $c(b);
                    return zc(a[b])
                },
                F: function (a) {
                    4 < a && (Yc[a].jf += 1)
                },
                rb: function (a, b, c, f) {
                    a = $c(a);
                    var h = nd[b];
                    h || (h = md(b), nd[b] = h);
                    return h(a, c, f)
                },
                gb: function () {
                    return zc([])
                },
                Ka: function (a) {
                    return zc(fd(a))
                },
                hb: function () {
                    return zc({})
                },
                fb: function (a) {
                    a = $c(a);
                    return !a
                },
                jb: function (a) {
                    var b = $c(a);
                    Nb(b);
                    Zc(a)
                },
                v: function (a, b, c) {
                    a = $c(a);
                    b = $c(b);
                    c = $c(c);
                    a[b] = c
                },
                r: function (a, b) {
                    a = bd(a, "_emval_take_value");
                    a = a.readValueFromPointer(b);
                    return zc(a)
                },
                a: function () {
                    Ra("")
                },
                ob: function (a, b) {
                    if (0 === a) a = Date.now(); else if (1 === a || 4 === a) a = od(); else return O[je() >> 2] = 28, -1;
                    O[b >> 2] = a / 1E3 | 0;
                    O[b + 4 >> 2] = a % 1E3 * 1E6 | 0;
                    return 0
                },
                _c: function (a) {
                    Y.activeTexture(a)
                },
                $c: function (a, b) {
                    Y.attachShader(ud[a], xd[b])
                },
                ad: function (a, b, c) {
                    Y.bindAttribLocation(ud[a],
                        b, Xa(c))
                },
                Y: function (a, b) {
                    35051 == a ? Y.ff = b : 35052 == a && (Y.Ce = b);
                    Y.bindBuffer(a, td[b])
                },
                X: function (a, b) {
                    Y.bindFramebuffer(a, vd[b])
                },
                cc: function (a, b) {
                    Y.bindRenderbuffer(a, wd[b])
                },
                Qb: function (a, b) {
                    Y.bindSampler(a, zd[b])
                },
                Z: function (a, b) {
                    Y.bindTexture(a, la[b])
                },
                wc: function (a) {
                    Y.bindVertexArray(yd[a])
                },
                zc: function (a) {
                    Y.bindVertexArray(yd[a])
                },
                _: function (a, b, c, f) {
                    Y.blendColor(a, b, c, f)
                },
                $: function (a) {
                    Y.blendEquation(a)
                },
                aa: function (a, b) {
                    Y.blendFunc(a, b)
                },
                Xb: function (a, b, c, f, h, l, n, q, w, x) {
                    Y.blitFramebuffer(a,
                        b, c, f, h, l, n, q, w, x)
                },
                ba: function (a, b, c, f) {
                    2 <= v.version ? c ? Y.bufferData(a, G, f, c, b) : Y.bufferData(a, b, f) : Y.bufferData(a, c ? G.subarray(c, c + b) : b, f)
                },
                ca: function (a, b, c, f) {
                    2 <= v.version ? Y.bufferSubData(a, b, G, f, c) : Y.bufferSubData(a, b, G.subarray(f, f + c))
                },
                dc: function (a) {
                    return Y.checkFramebufferStatus(a)
                },
                L: function (a) {
                    Y.clear(a)
                },
                W: function (a, b, c, f) {
                    Y.clearColor(a, b, c, f)
                },
                O: function (a) {
                    Y.clearStencil(a)
                },
                db: function (a, b, c, f) {
                    return Y.clientWaitSync(Ad[a], b, (c >>> 0) + 4294967296 * f)
                },
                da: function (a, b, c, f) {
                    Y.colorMask(!!a,
                        !!b, !!c, !!f)
                },
                ea: function (a) {
                    Y.compileShader(xd[a])
                },
                fa: function (a, b, c, f, h, l, n, q) {
                    2 <= v.version ? Y.Ce ? Y.compressedTexImage2D(a, b, c, f, h, l, n, q) : Y.compressedTexImage2D(a, b, c, f, h, l, G, q, n) : Y.compressedTexImage2D(a, b, c, f, h, l, q ? G.subarray(q, q + n) : null)
                },
                ga: function (a, b, c, f, h, l, n, q, w) {
                    2 <= v.version ? Y.Ce ? Y.compressedTexSubImage2D(a, b, c, f, h, l, n, q, w) : Y.compressedTexSubImage2D(a, b, c, f, h, l, n, G, w, q) : Y.compressedTexSubImage2D(a, b, c, f, h, l, n, w ? G.subarray(w, w + q) : null)
                },
                ha: function (a, b, c, f, h, l, n, q) {
                    Y.copyTexSubImage2D(a,
                        b, c, f, h, l, n, q)
                },
                ia: function () {
                    var a = ka(ud), b = Y.createProgram();
                    b.name = a;
                    b.Xe = b.Ve = b.We = 0;
                    b.kf = 1;
                    ud[a] = b;
                    return a
                },
                ja: function (a) {
                    var b = ka(xd);
                    xd[b] = Y.createShader(a);
                    return b
                },
                ka: function (a) {
                    Y.cullFace(a)
                },
                la: function (a, b) {
                    for (var c = 0; c < a; c++) {
                        var f = O[b + 4 * c >> 2], h = td[f];
                        h && (Y.deleteBuffer(h), h.name = 0, td[f] = null, f == Y.ff && (Y.ff = 0), f == Y.Ce && (Y.Ce = 0))
                    }
                },
                ec: function (a, b) {
                    for (var c = 0; c < a; ++c) {
                        var f = O[b + 4 * c >> 2], h = vd[f];
                        h && (Y.deleteFramebuffer(h), h.name = 0, vd[f] = null)
                    }
                },
                ma: function (a) {
                    if (a) {
                        var b = ud[a];
                        b ? (Y.deleteProgram(b),
                            b.name = 0, ud[a] = null) : Ed(1281)
                    }
                },
                fc: function (a, b) {
                    for (var c = 0; c < a; c++) {
                        var f = O[b + 4 * c >> 2], h = wd[f];
                        h && (Y.deleteRenderbuffer(h), h.name = 0, wd[f] = null)
                    }
                },
                Rb: function (a, b) {
                    for (var c = 0; c < a; c++) {
                        var f = O[b + 4 * c >> 2], h = zd[f];
                        h && (Y.deleteSampler(h), h.name = 0, zd[f] = null)
                    }
                },
                na: function (a) {
                    if (a) {
                        var b = xd[a];
                        b ? (Y.deleteShader(b), xd[a] = null) : Ed(1281)
                    }
                },
                Zb: function (a) {
                    if (a) {
                        var b = Ad[a];
                        b ? (Y.deleteSync(b), b.name = 0, Ad[a] = null) : Ed(1281)
                    }
                },
                oa: function (a, b) {
                    for (var c = 0; c < a; c++) {
                        var f = O[b + 4 * c >> 2], h = la[f];
                        h && (Y.deleteTexture(h),
                            h.name = 0, la[f] = null)
                    }
                },
                xc: function (a, b) {
                    for (var c = 0; c < a; c++) {
                        var f = O[b + 4 * c >> 2];
                        Y.deleteVertexArray(yd[f]);
                        yd[f] = null
                    }
                },
                Ac: function (a, b) {
                    for (var c = 0; c < a; c++) {
                        var f = O[b + 4 * c >> 2];
                        Y.deleteVertexArray(yd[f]);
                        yd[f] = null
                    }
                },
                pa: function (a) {
                    Y.depthMask(!!a)
                },
                qa: function (a) {
                    Y.disable(a)
                },
                ra: function (a) {
                    Y.disableVertexAttribArray(a)
                },
                sa: function (a, b, c) {
                    Y.drawArrays(a, b, c)
                },
                uc: function (a, b, c, f) {
                    Y.drawArraysInstanced(a, b, c, f)
                },
                sc: function (a, b, c, f, h) {
                    Y.pf.drawArraysInstancedBaseInstanceWEBGL(a, b, c, f, h)
                },
                qc: function (a,
                              b) {
                    for (var c = Kd[a], f = 0; f < a; f++) c[f] = O[b + 4 * f >> 2];
                    Y.drawBuffers(c)
                },
                ta: function (a, b, c, f) {
                    Y.drawElements(a, b, c, f)
                },
                vc: function (a, b, c, f, h) {
                    Y.drawElementsInstanced(a, b, c, f, h)
                },
                tc: function (a, b, c, f, h, l, n) {
                    Y.pf.drawElementsInstancedBaseVertexBaseInstanceWEBGL(a, b, c, f, h, l, n)
                },
                kc: function (a, b, c, f, h, l) {
                    Y.drawElements(a, f, h, l)
                },
                ua: function (a) {
                    Y.enable(a)
                },
                va: function (a) {
                    Y.enableVertexAttribArray(a)
                },
                Vb: function (a, b) {
                    return (a = Y.fenceSync(a, b)) ? (b = ka(Ad), a.name = b, Ad[b] = a, b) : 0
                },
                wa: function () {
                    Y.finish()
                },
                xa: function () {
                    Y.flush()
                },
                gc: function (a, b, c, f) {
                    Y.framebufferRenderbuffer(a, b, c, wd[f])
                },
                hc: function (a, b, c, f, h) {
                    Y.framebufferTexture2D(a, b, c, la[f], h)
                },
                ya: function (a) {
                    Y.frontFace(a)
                },
                za: function (a, b) {
                    Ld(a, b, "createBuffer", td)
                },
                ic: function (a, b) {
                    Ld(a, b, "createFramebuffer", vd)
                },
                jc: function (a, b) {
                    Ld(a, b, "createRenderbuffer", wd)
                },
                Sb: function (a, b) {
                    Ld(a, b, "createSampler", zd)
                },
                Aa: function (a, b) {
                    Ld(a, b, "createTexture", la)
                },
                yc: function (a, b) {
                    Ld(a, b, "createVertexArray", yd)
                },
                Bc: function (a, b) {
                    Ld(a, b, "createVertexArray", yd)
                },
                _b: function (a) {
                    Y.generateMipmap(a)
                },
                Ba: function (a, b, c) {
                    c ? O[c >> 2] = Y.getBufferParameter(a, b) : Ed(1281)
                },
                Ca: function () {
                    var a = Y.getError() || Hd;
                    Hd = 0;
                    return a
                },
                $b: function (a, b, c, f) {
                    a = Y.getFramebufferAttachmentParameter(a, b, c);
                    if (a instanceof WebGLRenderbuffer || a instanceof WebGLTexture) a = a.name | 0;
                    O[f >> 2] = a
                },
                E: function (a, b) {
                    Md(a, b)
                },
                Da: function (a, b, c, f) {
                    a = Y.getProgramInfoLog(ud[a]);
                    null === a && (a = "(unknown error)");
                    b = 0 < b && f ? sa(a, G, f, b) : 0;
                    c && (O[c >> 2] = b)
                },
                Ea: function (a, b, c) {
                    if (c) if (a >= sd) Ed(1281); else if (a = ud[a], 35716 == b) a = Y.getProgramInfoLog(a),
                    null === a && (a = "(unknown error)"), O[c >> 2] = a.length + 1; else if (35719 == b) {
                        if (!a.Xe) for (b = 0; b < Y.getProgramParameter(a, 35718); ++b) a.Xe = Math.max(a.Xe, Y.getActiveUniform(a, b).name.length + 1);
                        O[c >> 2] = a.Xe
                    } else if (35722 == b) {
                        if (!a.Ve) for (b = 0; b < Y.getProgramParameter(a, 35721); ++b) a.Ve = Math.max(a.Ve, Y.getActiveAttrib(a, b).name.length + 1);
                        O[c >> 2] = a.Ve
                    } else if (35381 == b) {
                        if (!a.We) for (b = 0; b < Y.getProgramParameter(a, 35382); ++b) a.We = Math.max(a.We, Y.getActiveUniformBlockName(a, b).length + 1);
                        O[c >> 2] = a.We
                    } else O[c >> 2] = Y.getProgramParameter(a,
                        b); else Ed(1281)
                },
                ac: function (a, b, c) {
                    c ? O[c >> 2] = Y.getRenderbufferParameter(a, b) : Ed(1281)
                },
                Fa: function (a, b, c, f) {
                    a = Y.getShaderInfoLog(xd[a]);
                    null === a && (a = "(unknown error)");
                    b = 0 < b && f ? sa(a, G, f, b) : 0;
                    c && (O[c >> 2] = b)
                },
                Nb: function (a, b, c, f) {
                    a = Y.getShaderPrecisionFormat(a, b);
                    O[c >> 2] = a.rangeMin;
                    O[c + 4 >> 2] = a.rangeMax;
                    O[f >> 2] = a.precision
                },
                Ga: function (a, b, c) {
                    c ? 35716 == b ? (a = Y.getShaderInfoLog(xd[a]), null === a && (a = "(unknown error)"), O[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = Y.getShaderSource(xd[a]), O[c >> 2] = a ? a.length + 1 : 0) :
                        O[c >> 2] = Y.getShaderParameter(xd[a], b) : Ed(1281)
                },
                J: function (a) {
                    var b = Bd[a];
                    if (!b) {
                        switch (a) {
                            case 7939:
                                b = Y.getSupportedExtensions() || [];
                                b = b.concat(b.map(function (f) {
                                    return "GL_" + f
                                }));
                                b = Nd(b.join(" "));
                                break;
                            case 7936:
                            case 7937:
                            case 37445:
                            case 37446:
                                (b = Y.getParameter(a)) || Ed(1280);
                                b = b && Nd(b);
                                break;
                            case 7938:
                                b = Y.getParameter(7938);
                                b = 2 <= v.version ? "OpenGL ES 3.0 (" + b + ")" : "OpenGL ES 2.0 (" + b + ")";
                                b = Nd(b);
                                break;
                            case 35724:
                                b = Y.getParameter(35724);
                                var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                                null !== c && (3 == c[1].length && (c[1] += "0"), b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
                                b = Nd(b);
                                break;
                            default:
                                Ed(1280)
                        }
                        Bd[a] = b
                    }
                    return b
                },
                cb: function (a, b) {
                    if (2 > v.version) return Ed(1282), 0;
                    var c = Cd[a];
                    if (c) return 0 > b || b >= c.length ? (Ed(1281), 0) : c[b];
                    switch (a) {
                        case 7939:
                            return c = Y.getSupportedExtensions() || [], c = c.concat(c.map(function (f) {
                                return "GL_" + f
                            })), c = c.map(function (f) {
                                return Nd(f)
                            }), c = Cd[a] = c, 0 > b || b >= c.length ? (Ed(1281), 0) : c[b];
                        default:
                            return Ed(1280), 0
                    }
                },
                Ha: function (a, b) {
                    b = Xa(b);
                    if (a = ud[a]) {
                        var c = a, f = c.Oe,
                            h = c.xf, l;
                        if (!f) for (c.Oe = f = {}, c.wf = {}, l = 0; l < Y.getProgramParameter(c, 35718); ++l) {
                            var n = Y.getActiveUniform(c, l);
                            var q = n.name;
                            n = n.size;
                            var w = Pd(q);
                            w = 0 < w ? q.slice(0, w) : q;
                            var x = c.kf;
                            c.kf += n;
                            h[w] = [n, x];
                            for (q = 0; q < n; ++q) f[x] = q, c.wf[x++] = w
                        }
                        c = a.Oe;
                        f = 0;
                        h = b;
                        l = Pd(b);
                        0 < l && (f = parseInt(b.slice(l + 1)) >>> 0, h = b.slice(0, l));
                        if ((h = a.xf[h]) && f < h[0] && (f += h[1], c[f] = c[f] || Y.getUniformLocation(a, b))) return f
                    } else Ed(1281);
                    return -1
                },
                Ob: function (a, b, c) {
                    for (var f = Kd[b], h = 0; h < b; h++) f[h] = O[c + 4 * h >> 2];
                    Y.invalidateFramebuffer(a, f)
                },
                Pb: function (a, b, c, f, h, l, n) {
                    for (var q = Kd[b], w = 0; w < b; w++) q[w] = O[c + 4 * w >> 2];
                    Y.invalidateSubFramebuffer(a, q, f, h, l, n)
                },
                Wb: function (a) {
                    return Y.isSync(Ad[a])
                },
                Ia: function (a) {
                    return (a = la[a]) ? Y.isTexture(a) : 0
                },
                Ja: function (a) {
                    Y.lineWidth(a)
                },
                La: function (a) {
                    a = ud[a];
                    Y.linkProgram(a);
                    a.Oe = 0;
                    a.xf = {}
                },
                oc: function (a, b, c, f, h, l) {
                    Y.uf.multiDrawArraysInstancedBaseInstanceWEBGL(a, O, b >> 2, O, c >> 2, O, f >> 2, ob, h >> 2, l)
                },
                pc: function (a, b, c, f, h, l, n, q) {
                    Y.uf.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(a, O, b >> 2, c, O, f >> 2,
                        O, h >> 2, O, l >> 2, ob, n >> 2, q)
                },
                Ma: function (a, b) {
                    3317 == a && (Dd = b);
                    Y.pixelStorei(a, b)
                },
                rc: function (a) {
                    Y.readBuffer(a)
                },
                Na: function (a, b, c, f, h, l, n) {
                    if (2 <= v.version) if (Y.ff) Y.readPixels(a, b, c, f, h, l, n); else {
                        var q = Qd(l);
                        Y.readPixels(a, b, c, f, h, l, q, n >> 31 - Math.clz32(q.BYTES_PER_ELEMENT))
                    } else (n = Rd(l, h, c, f, n)) ? Y.readPixels(a, b, c, f, h, l, n) : Ed(1280)
                },
                bc: function (a, b, c, f) {
                    Y.renderbufferStorage(a, b, c, f)
                },
                Yb: function (a, b, c, f, h) {
                    Y.renderbufferStorageMultisample(a, b, c, f, h)
                },
                Tb: function (a, b, c) {
                    Y.samplerParameteri(zd[a], b,
                        c)
                },
                Ub: function (a, b, c) {
                    Y.samplerParameteri(zd[a], b, O[c >> 2])
                },
                Oa: function (a, b, c, f) {
                    Y.scissor(a, b, c, f)
                },
                Pa: function (a, b, c, f) {
                    for (var h = "", l = 0; l < b; ++l) {
                        var n = f ? O[f + 4 * l >> 2] : -1;
                        h += Xa(O[c + 4 * l >> 2], 0 > n ? void 0 : n)
                    }
                    Y.shaderSource(xd[a], h)
                },
                Qa: function (a, b, c) {
                    Y.stencilFunc(a, b, c)
                },
                Ra: function (a, b, c, f) {
                    Y.stencilFuncSeparate(a, b, c, f)
                },
                Sa: function (a) {
                    Y.stencilMask(a)
                },
                Ta: function (a, b) {
                    Y.stencilMaskSeparate(a, b)
                },
                Ua: function (a, b, c) {
                    Y.stencilOp(a, b, c)
                },
                Va: function (a, b, c, f) {
                    Y.stencilOpSeparate(a, b, c, f)
                },
                Wa: function (a,
                              b, c, f, h, l, n, q, w) {
                    if (2 <= v.version) if (Y.Ce) Y.texImage2D(a, b, c, f, h, l, n, q, w); else if (w) {
                        var x = Qd(q);
                        Y.texImage2D(a, b, c, f, h, l, n, q, x, w >> 31 - Math.clz32(x.BYTES_PER_ELEMENT))
                    } else Y.texImage2D(a, b, c, f, h, l, n, q, null); else Y.texImage2D(a, b, c, f, h, l, n, q, w ? Rd(q, n, f, h, w) : null)
                },
                Xa: function (a, b, c) {
                    Y.texParameterf(a, b, c)
                },
                Ya: function (a, b, c) {
                    Y.texParameterf(a, b, U[c >> 2])
                },
                Za: function (a, b, c) {
                    Y.texParameteri(a, b, c)
                },
                _a: function (a, b, c) {
                    Y.texParameteri(a, b, O[c >> 2])
                },
                lc: function (a, b, c, f, h) {
                    Y.texStorage2D(a, b, c, f, h)
                },
                $a: function (a,
                              b, c, f, h, l, n, q, w) {
                    if (2 <= v.version) if (Y.Ce) Y.texSubImage2D(a, b, c, f, h, l, n, q, w); else if (w) {
                        var x = Qd(q);
                        Y.texSubImage2D(a, b, c, f, h, l, n, q, x, w >> 31 - Math.clz32(x.BYTES_PER_ELEMENT))
                    } else Y.texSubImage2D(a, b, c, f, h, l, n, q, null); else x = null, w && (x = Rd(q, n, h, l, w)), Y.texSubImage2D(a, b, c, f, h, l, n, q, x)
                },
                ab: function (a, b) {
                    Y.uniform1f(Z(a), b)
                },
                bb: function (a, b, c) {
                    if (2 <= v.version) Y.uniform1fv(Z(a), U, c >> 2, b); else {
                        if (288 >= b) for (var f = Sd[b - 1], h = 0; h < b; ++h) f[h] = U[c + 4 * h >> 2]; else f = U.subarray(c >> 2, c + 4 * b >> 2);
                        Y.uniform1fv(Z(a), f)
                    }
                },
                Wc: function (a, b) {
                    Y.uniform1i(Z(a), b)
                },
                Xc: function (a, b, c) {
                    if (2 <= v.version) Y.uniform1iv(Z(a), O, c >> 2, b); else {
                        if (288 >= b) for (var f = Td[b - 1], h = 0; h < b; ++h) f[h] = O[c + 4 * h >> 2]; else f = O.subarray(c >> 2, c + 4 * b >> 2);
                        Y.uniform1iv(Z(a), f)
                    }
                },
                Yc: function (a, b, c) {
                    Y.uniform2f(Z(a), b, c)
                },
                Zc: function (a, b, c) {
                    if (2 <= v.version) Y.uniform2fv(Z(a), U, c >> 2, 2 * b); else {
                        if (144 >= b) for (var f = Sd[2 * b - 1], h = 0; h < 2 * b; h += 2) f[h] = U[c + 4 * h >> 2], f[h + 1] = U[c + (4 * h + 4) >> 2]; else f = U.subarray(c >> 2, c + 8 * b >> 2);
                        Y.uniform2fv(Z(a), f)
                    }
                },
                Vc: function (a, b, c) {
                    Y.uniform2i(Z(a),
                        b, c)
                },
                Uc: function (a, b, c) {
                    if (2 <= v.version) Y.uniform2iv(Z(a), O, c >> 2, 2 * b); else {
                        if (144 >= b) for (var f = Td[2 * b - 1], h = 0; h < 2 * b; h += 2) f[h] = O[c + 4 * h >> 2], f[h + 1] = O[c + (4 * h + 4) >> 2]; else f = O.subarray(c >> 2, c + 8 * b >> 2);
                        Y.uniform2iv(Z(a), f)
                    }
                },
                Tc: function (a, b, c, f) {
                    Y.uniform3f(Z(a), b, c, f)
                },
                Sc: function (a, b, c) {
                    if (2 <= v.version) Y.uniform3fv(Z(a), U, c >> 2, 3 * b); else {
                        if (96 >= b) for (var f = Sd[3 * b - 1], h = 0; h < 3 * b; h += 3) f[h] = U[c + 4 * h >> 2], f[h + 1] = U[c + (4 * h + 4) >> 2], f[h + 2] = U[c + (4 * h + 8) >> 2]; else f = U.subarray(c >> 2, c + 12 * b >> 2);
                        Y.uniform3fv(Z(a), f)
                    }
                },
                Rc: function (a,
                              b, c, f) {
                    Y.uniform3i(Z(a), b, c, f)
                },
                Qc: function (a, b, c) {
                    if (2 <= v.version) Y.uniform3iv(Z(a), O, c >> 2, 3 * b); else {
                        if (96 >= b) for (var f = Td[3 * b - 1], h = 0; h < 3 * b; h += 3) f[h] = O[c + 4 * h >> 2], f[h + 1] = O[c + (4 * h + 4) >> 2], f[h + 2] = O[c + (4 * h + 8) >> 2]; else f = O.subarray(c >> 2, c + 12 * b >> 2);
                        Y.uniform3iv(Z(a), f)
                    }
                },
                Pc: function (a, b, c, f, h) {
                    Y.uniform4f(Z(a), b, c, f, h)
                },
                Oc: function (a, b, c) {
                    if (2 <= v.version) Y.uniform4fv(Z(a), U, c >> 2, 4 * b); else {
                        if (72 >= b) {
                            var f = Sd[4 * b - 1], h = U;
                            c >>= 2;
                            for (var l = 0; l < 4 * b; l += 4) {
                                var n = c + l;
                                f[l] = h[n];
                                f[l + 1] = h[n + 1];
                                f[l + 2] = h[n + 2];
                                f[l + 3] =
                                    h[n + 3]
                            }
                        } else f = U.subarray(c >> 2, c + 16 * b >> 2);
                        Y.uniform4fv(Z(a), f)
                    }
                },
                Cc: function (a, b, c, f, h) {
                    Y.uniform4i(Z(a), b, c, f, h)
                },
                Dc: function (a, b, c) {
                    if (2 <= v.version) Y.uniform4iv(Z(a), O, c >> 2, 4 * b); else {
                        if (72 >= b) for (var f = Td[4 * b - 1], h = 0; h < 4 * b; h += 4) f[h] = O[c + 4 * h >> 2], f[h + 1] = O[c + (4 * h + 4) >> 2], f[h + 2] = O[c + (4 * h + 8) >> 2], f[h + 3] = O[c + (4 * h + 12) >> 2]; else f = O.subarray(c >> 2, c + 16 * b >> 2);
                        Y.uniform4iv(Z(a), f)
                    }
                },
                Ec: function (a, b, c, f) {
                    if (2 <= v.version) Y.uniformMatrix2fv(Z(a), !!c, U, f >> 2, 4 * b); else {
                        if (72 >= b) for (var h = Sd[4 * b - 1], l = 0; l < 4 * b; l += 4) h[l] =
                            U[f + 4 * l >> 2], h[l + 1] = U[f + (4 * l + 4) >> 2], h[l + 2] = U[f + (4 * l + 8) >> 2], h[l + 3] = U[f + (4 * l + 12) >> 2]; else h = U.subarray(f >> 2, f + 16 * b >> 2);
                        Y.uniformMatrix2fv(Z(a), !!c, h)
                    }
                },
                Fc: function (a, b, c, f) {
                    if (2 <= v.version) Y.uniformMatrix3fv(Z(a), !!c, U, f >> 2, 9 * b); else {
                        if (32 >= b) for (var h = Sd[9 * b - 1], l = 0; l < 9 * b; l += 9) h[l] = U[f + 4 * l >> 2], h[l + 1] = U[f + (4 * l + 4) >> 2], h[l + 2] = U[f + (4 * l + 8) >> 2], h[l + 3] = U[f + (4 * l + 12) >> 2], h[l + 4] = U[f + (4 * l + 16) >> 2], h[l + 5] = U[f + (4 * l + 20) >> 2], h[l + 6] = U[f + (4 * l + 24) >> 2], h[l + 7] = U[f + (4 * l + 28) >> 2], h[l + 8] = U[f + (4 * l + 32) >> 2]; else h = U.subarray(f >>
                            2, f + 36 * b >> 2);
                        Y.uniformMatrix3fv(Z(a), !!c, h)
                    }
                },
                Gc: function (a, b, c, f) {
                    if (2 <= v.version) Y.uniformMatrix4fv(Z(a), !!c, U, f >> 2, 16 * b); else {
                        if (18 >= b) {
                            var h = Sd[16 * b - 1], l = U;
                            f >>= 2;
                            for (var n = 0; n < 16 * b; n += 16) {
                                var q = f + n;
                                h[n] = l[q];
                                h[n + 1] = l[q + 1];
                                h[n + 2] = l[q + 2];
                                h[n + 3] = l[q + 3];
                                h[n + 4] = l[q + 4];
                                h[n + 5] = l[q + 5];
                                h[n + 6] = l[q + 6];
                                h[n + 7] = l[q + 7];
                                h[n + 8] = l[q + 8];
                                h[n + 9] = l[q + 9];
                                h[n + 10] = l[q + 10];
                                h[n + 11] = l[q + 11];
                                h[n + 12] = l[q + 12];
                                h[n + 13] = l[q + 13];
                                h[n + 14] = l[q + 14];
                                h[n + 15] = l[q + 15]
                            }
                        } else h = U.subarray(f >> 2, f + 64 * b >> 2);
                        Y.uniformMatrix4fv(Z(a), !!c, h)
                    }
                },
                Hc: function (a) {
                    a = ud[a];
                    Y.useProgram(a);
                    Y.Gf = a
                },
                Ic: function (a, b) {
                    Y.vertexAttrib1f(a, b)
                },
                Jc: function (a, b) {
                    Y.vertexAttrib2f(a, U[b >> 2], U[b + 4 >> 2])
                },
                Kc: function (a, b) {
                    Y.vertexAttrib3f(a, U[b >> 2], U[b + 4 >> 2], U[b + 8 >> 2])
                },
                Lc: function (a, b) {
                    Y.vertexAttrib4f(a, U[b >> 2], U[b + 4 >> 2], U[b + 8 >> 2], U[b + 12 >> 2])
                },
                mc: function (a, b) {
                    Y.vertexAttribDivisor(a, b)
                },
                nc: function (a, b, c, f, h) {
                    Y.vertexAttribIPointer(a, b, c, f, h)
                },
                Mc: function (a, b, c, f, h, l) {
                    Y.vertexAttribPointer(a, b, c, !!f, h, l)
                },
                Nc: function (a, b, c, f) {
                    Y.viewport(a, b, c, f)
                },
                eb: function (a,
                              b, c, f) {
                    Y.waitSync(Ad[a], b, (c >>> 0) + 4294967296 * f)
                },
                qb: function (a) {
                    var b = G.length;
                    a >>>= 0;
                    if (2147483648 < a) return !1;
                    for (var c = 1; 4 >= c; c *= 2) {
                        var f = b * (1 + .2 / c);
                        f = Math.min(f, a + 100663296);
                        f = Math.max(a, f);
                        0 < f % 65536 && (f += 65536 - f % 65536);
                        a:{
                            try {
                                Sa.grow(Math.min(2147483648, f) - mb.byteLength + 65535 >>> 16);
                                qb();
                                var h = 1;
                                break a
                            } catch (l) {
                            }
                            h = void 0
                        }
                        if (h) return !0
                    }
                    return !1
                },
                ib: function () {
                    return v ? v.Vf : 0
                },
                ub: function (a, b) {
                    var c = 0;
                    Vd().forEach(function (f, h) {
                        var l = b + c;
                        h = O[a + 4 * h >> 2] = l;
                        for (l = 0; l < f.length; ++l) nb[h++ >> 0] = f.charCodeAt(l);
                        nb[h >> 0] = 0;
                        c += f.length + 1
                    });
                    return 0
                },
                vb: function (a, b) {
                    var c = Vd();
                    O[a >> 2] = c.length;
                    var f = 0;
                    c.forEach(function (h) {
                        f += h.length + 1
                    });
                    O[b >> 2] = f;
                    return 0
                },
                Hb: function (a) {
                    if (!(noExitRuntime || 0 < La)) {
                        if (t.onExit) t.onExit(a);
                        Ua = !0
                    }
                    xa(a, new Ka(a))
                },
                G: function () {
                    return 0
                },
                kb: function (a, b, c, f, h, l) {
                    a = Lb.Rf(a);
                    b = Lb.If(a, b, c, f);
                    O[l >> 2] = b;
                    return 0
                },
                Ab: function (a, b, c, f) {
                    a = Lb.Rf(a);
                    b = Lb.If(a, b, c);
                    O[f >> 2] = b;
                    return 0
                },
                lb: function () {
                },
                N: function (a, b, c, f) {
                    for (var h = 0, l = 0; l < c; l++) {
                        var n = O[b >> 2], q = O[b + 4 >> 2];
                        b += 8;
                        for (var w =
                            0; w < q; w++) {
                            var x = G[n + w], J = Kb[a];
                            0 === x || 10 === x ? ((1 === a ? Na : Ma)(Wa(J, 0)), J.length = 0) : J.push(x)
                        }
                        h += q
                    }
                    O[f >> 2] = h;
                    return 0
                },
                b: function () {
                    return Pa
                },
                i: ke,
                n: le,
                f: me,
                C: ne,
                Mb: oe,
                U: pe,
                T: qe,
                I: re,
                m: se,
                s: te,
                h: ue,
                q: ve,
                Kb: we,
                Ib: xe,
                Jb: ye,
                c: function (a) {
                    Pa = a
                },
                nb: function (a, b, c, f) {
                    return be(a, b, c, f)
                }
            };
            (function () {
                function a(h) {
                    t.asm = h.exports;
                    Sa = t.asm.bd;
                    qb();
                    rb = t.asm.dd;
                    tb.unshift(t.asm.cd);
                    wb--;
                    t.monitorRunDependencies && t.monitorRunDependencies(wb);
                    0 == wb && (null !== xb && (clearInterval(xb), xb = null), zb && (h = zb, zb = null, h()))
                }

                function b(h) {
                    a(h.instance)
                }

                function c(h) {
                    return Eb().then(function (l) {
                        return WebAssembly.instantiate(l, f)
                    }).then(function (l) {
                        return l
                    }).then(h, function (l) {
                        Ma("failed to asynchronously prepare wasm: " + l);
                        Ra(l)
                    })
                }

                var f = {a: ze};
                wb++;
                t.monitorRunDependencies && t.monitorRunDependencies(wb);
                if (t.instantiateWasm) try {
                    return t.instantiateWasm(f, a)
                } catch (h) {
                    return Ma("Module.instantiateWasm callback failed with error: " + h), !1
                }
                (function () {
                    return Qa || "function" !== typeof WebAssembly.instantiateStreaming || Ab() || Bb.startsWith("file://") || "function" !== typeof fetch ? c(b) : fetch(Bb, {credentials: "same-origin"}).then(function (h) {
                        return WebAssembly.instantiateStreaming(h, f).then(b, function (l) {
                            Ma("wasm streaming compile failed: " + l);
                            Ma("falling back to ArrayBuffer instantiation");
                            return c(b)
                        })
                    })
                })().catch(ha);
                return {}
            })();
            t.___wasm_call_ctors = function () {
                return (t.___wasm_call_ctors = t.asm.cd).apply(null, arguments)
            };
            var Od = t._malloc = function () {
                return (Od = t._malloc = t.asm.ed).apply(null, arguments)
            }, Tc = t._free = function () {
                return (Tc = t._free = t.asm.fd).apply(null, arguments)
            }, je = t.___errno_location = function () {
                return (je = t.___errno_location = t.asm.gd).apply(null, arguments)
            }, Sc = t.___getTypeName = function () {
                return (Sc = t.___getTypeName = t.asm.hd).apply(null, arguments)
            };
            t.___embind_register_native_and_builtin_types = function () {
                return (t.___embind_register_native_and_builtin_types = t.asm.id).apply(null, arguments)
            };
            var ie = t._memalign = function () {
                return (ie = t._memalign = t.asm.jd).apply(null, arguments)
            }, Ae = t._setThrew = function () {
                return (Ae = t._setThrew = t.asm.kd).apply(null, arguments)
            }, Be = t.stackSave = function () {
                return (Be = t.stackSave = t.asm.ld).apply(null, arguments)
            }, Ce = t.stackRestore = function () {
                return (Ce = t.stackRestore = t.asm.md).apply(null, arguments)
            };
            t.dynCall_iiiji = function () {
                return (t.dynCall_iiiji = t.asm.nd).apply(null, arguments)
            };
            t.dynCall_ji = function () {
                return (t.dynCall_ji = t.asm.od).apply(null, arguments)
            };
            t.dynCall_iiji = function () {
                return (t.dynCall_iiji = t.asm.pd).apply(null, arguments)
            };
            t.dynCall_iijjiii = function () {
                return (t.dynCall_iijjiii = t.asm.qd).apply(null, arguments)
            };
            t.dynCall_iij = function () {
                return (t.dynCall_iij = t.asm.rd).apply(null, arguments)
            };
            t.dynCall_vijjjii = function () {
                return (t.dynCall_vijjjii = t.asm.sd).apply(null, arguments)
            };
            t.dynCall_viji = function () {
                return (t.dynCall_viji = t.asm.td).apply(null, arguments)
            };
            t.dynCall_vijiii = function () {
                return (t.dynCall_vijiii = t.asm.ud).apply(null, arguments)
            };
            t.dynCall_viiiiij = function () {
                return (t.dynCall_viiiiij = t.asm.vd).apply(null, arguments)
            };
            t.dynCall_jii = function () {
                return (t.dynCall_jii = t.asm.wd).apply(null, arguments)
            };
            t.dynCall_iiij = function () {
                return (t.dynCall_iiij = t.asm.xd).apply(null, arguments)
            };
            t.dynCall_iiiij = function () {
                return (t.dynCall_iiiij = t.asm.yd).apply(null, arguments)
            };
            t.dynCall_viij = function () {
                return (t.dynCall_viij = t.asm.zd).apply(null, arguments)
            };
            t.dynCall_viiij = function () {
                return (t.dynCall_viiij = t.asm.Ad).apply(null, arguments)
            };
            t.dynCall_vij = function () {
                return (t.dynCall_vij = t.asm.Bd).apply(null, arguments)
            };
            t.dynCall_jiiii = function () {
                return (t.dynCall_jiiii = t.asm.Cd).apply(null, arguments)
            };
            t.dynCall_jiiiiii = function () {
                return (t.dynCall_jiiiiii = t.asm.Dd).apply(null, arguments)
            };
            t.dynCall_jiiiiji = function () {
                return (t.dynCall_jiiiiji = t.asm.Ed).apply(null, arguments)
            };
            t.dynCall_iijj = function () {
                return (t.dynCall_iijj = t.asm.Fd).apply(null, arguments)
            };
            t.dynCall_jiji = function () {
                return (t.dynCall_jiji = t.asm.Gd).apply(null, arguments)
            };
            t.dynCall_viijii = function () {
                return (t.dynCall_viijii = t.asm.Hd).apply(null, arguments)
            };
            t.dynCall_iiiiij = function () {
                return (t.dynCall_iiiiij = t.asm.Id).apply(null, arguments)
            };
            t.dynCall_iiiiijj = function () {
                return (t.dynCall_iiiiijj = t.asm.Jd).apply(null, arguments)
            };
            t.dynCall_iiiiiijj = function () {
                return (t.dynCall_iiiiiijj = t.asm.Kd).apply(null, arguments)
            };

            function ke(a, b) {
                var c = Be();
                try {
                    return Gb(a)(b)
                } catch (f) {
                    Ce(c);
                    if (f !== f + 0 && "longjmp" !== f) throw f;
                    Ae(1, 0)
                }
            }

            function le(a, b, c) {
                var f = Be();
                try {
                    return Gb(a)(b, c)
                } catch (h) {
                    Ce(f);
                    if (h !== h + 0 && "longjmp" !== h) throw h;
                    Ae(1, 0)
                }
            }

            function ue(a, b, c, f) {
                var h = Be();
                try {
                    Gb(a)(b, c, f)
                } catch (l) {
                    Ce(h);
                    if (l !== l + 0 && "longjmp" !== l) throw l;
                    Ae(1, 0)
                }
            }

            function me(a, b, c, f) {
                var h = Be();
                try {
                    return Gb(a)(b, c, f)
                } catch (l) {
                    Ce(h);
                    if (l !== l + 0 && "longjmp" !== l) throw l;
                    Ae(1, 0)
                }
            }

            function se(a, b) {
                var c = Be();
                try {
                    Gb(a)(b)
                } catch (f) {
                    Ce(c);
                    if (f !== f + 0 && "longjmp" !== f) throw f;
                    Ae(1, 0)
                }
            }

            function te(a, b, c) {
                var f = Be();
                try {
                    Gb(a)(b, c)
                } catch (h) {
                    Ce(f);
                    if (h !== h + 0 && "longjmp" !== h) throw h;
                    Ae(1, 0)
                }
            }

            function oe(a, b, c, f, h, l) {
                var n = Be();
                try {
                    return Gb(a)(b, c, f, h, l)
                } catch (q) {
                    Ce(n);
                    if (q !== q + 0 && "longjmp" !== q) throw q;
                    Ae(1, 0)
                }
            }

            function ve(a, b, c, f, h) {
                var l = Be();
                try {
                    Gb(a)(b, c, f, h)
                } catch (n) {
                    Ce(l);
                    if (n !== n + 0 && "longjmp" !== n) throw n;
                    Ae(1, 0)
                }
            }

            function pe(a, b, c, f, h, l, n) {
                var q = Be();
                try {
                    return Gb(a)(b, c, f, h, l, n)
                } catch (w) {
                    Ce(q);
                    if (w !== w + 0 && "longjmp" !== w) throw w;
                    Ae(1, 0)
                }
            }

            function ne(a, b, c, f, h) {
                var l = Be();
                try {
                    return Gb(a)(b, c, f, h)
                } catch (n) {
                    Ce(l);
                    if (n !== n + 0 && "longjmp" !== n) throw n;
                    Ae(1, 0)
                }
            }

            function we(a, b, c, f, h, l) {
                var n = Be();
                try {
                    Gb(a)(b, c, f, h, l)
                } catch (q) {
                    Ce(n);
                    if (q !== q + 0 && "longjmp" !== q) throw q;
                    Ae(1, 0)
                }
            }

            function ye(a, b, c, f, h, l, n, q, w, x) {
                var J = Be();
                try {
                    Gb(a)(b, c, f, h, l, n, q, w, x)
                } catch (K) {
                    Ce(J);
                    if (K !== K + 0 && "longjmp" !== K) throw K;
                    Ae(1, 0)
                }
            }

            function re(a) {
                var b = Be();
                try {
                    Gb(a)()
                } catch (c) {
                    Ce(b);
                    if (c !== c + 0 && "longjmp" !== c) throw c;
                    Ae(1, 0)
                }
            }

            function xe(a, b, c, f, h, l, n) {
                var q = Be();
                try {
                    Gb(a)(b, c, f, h, l, n)
                } catch (w) {
                    Ce(q);
                    if (w !== w + 0 && "longjmp" !== w) throw w;
                    Ae(1, 0)
                }
            }

            function qe(a, b, c, f, h, l, n, q, w, x) {
                var J = Be();
                try {
                    return Gb(a)(b, c, f, h, l, n, q, w, x)
                } catch (K) {
                    Ce(J);
                    if (K !== K + 0 && "longjmp" !== K) throw K;
                    Ae(1, 0)
                }
            }

            var De;

            function Ka(a) {
                this.name = "ExitStatus";
                this.message = "Program terminated with exit(" + a + ")";
                this.status = a
            }

            zb = function Ee() {
                De || Fe();
                De || (zb = Ee)
            };

            function Fe() {
                function a() {
                    if (!De && (De = !0, t.calledRun = !0, !Ua)) {
                        Fb(tb);
                        fa(t);
                        if (t.onRuntimeInitialized) t.onRuntimeInitialized();
                        if (t.postRun) for ("function" == typeof t.postRun && (t.postRun = [t.postRun]); t.postRun.length;) {
                            var b = t.postRun.shift();
                            ub.unshift(b)
                        }
                        Fb(ub)
                    }
                }

                if (!(0 < wb)) {
                    if (t.preRun) for ("function" == typeof t.preRun && (t.preRun = [t.preRun]); t.preRun.length;) vb();
                    Fb(sb);
                    0 < wb || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function () {
                        setTimeout(function () {
                            t.setStatus("")
                        }, 1);
                        a()
                    }, 1)) : a())
                }
            }

            t.run = Fe;
            if (t.preInit) for ("function" == typeof t.preInit && (t.preInit = [t.preInit]); 0 < t.preInit.length;) t.preInit.pop()();
            Fe();


            return CanvasKitInit.ready
        }
    );
})();
if (typeof exports === 'object' && typeof module === 'object')
    module.exports = CanvasKitInit;
else if (typeof define === 'function' && define['amd'])
    define([], function () {
        return CanvasKitInit;
    });
else if (typeof exports === 'object')
    exports["CanvasKitInit"] = CanvasKitInit;