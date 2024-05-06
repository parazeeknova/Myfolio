var be = Object.defineProperty
  , ye = Object.defineProperties;
var Ee = Object.getOwnPropertyDescriptors;
var ne = Object.getOwnPropertySymbols;
var Pe = Object.prototype.hasOwnProperty
  , Me = Object.prototype.propertyIsEnumerable;
var ae = (i,e,t)=>e in i ? be(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , W = (i,e)=>{
    for (var t in e || (e = {}))
        Pe.call(e, t) && ae(i, t, e[t]);
    if (ne)
        for (var t of ne(e))
            Me.call(e, t) && ae(i, t, e[t]);
    return i
}
  , j = (i,e)=>ye(i, Ee(e));
function le(i) {
    return i !== null && typeof i == "object" && "constructor"in i && i.constructor === Object
}
function Y(i, e) {
    i === void 0 && (i = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach(t=>{
        typeof i[t] == "undefined" ? i[t] = e[t] : le(e[t]) && le(i[t]) && Object.keys(e[t]).length > 0 && Y(i[t], e[t])
    }
    )
}
const oe = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function B() {
    const i = typeof document != "undefined" ? document : {};
    return Y(i, oe),
    i
}
const Ie = {
    document: oe,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(i) {
        return typeof setTimeout == "undefined" ? (i(),
        null) : setTimeout(i, 0)
    },
    cancelAnimationFrame(i) {
        typeof setTimeout != "undefined" && clearTimeout(i)
    }
};
function z() {
    const i = typeof window != "undefined" ? window : {};
    return Y(i, Ie),
    i
}
function Ce(i) {
    return i === void 0 && (i = ""),
    i.trim().split(" ").filter(e=>!!e.trim())
}
function Le(i) {
    const e = i;
    Object.keys(e).forEach(t=>{
        try {
            e[t] = null
        } catch {}
        try {
            delete e[t]
        } catch {}
    }
    )
}
function q(i, e) {
    return e === void 0 && (e = 0),
    setTimeout(i, e)
}
function N() {
    return Date.now()
}
function ze(i) {
    const e = z();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(i, null)),
    !t && i.currentStyle && (t = i.currentStyle),
    t || (t = i.style),
    t
}
function Ae(i, e) {
    e === void 0 && (e = "x");
    const t = z();
    let s, n, r;
    const l = ze(i);
    return t.WebKitCSSMatrix ? (n = l.transform || l.webkitTransform,
    n.split(",").length > 6 && (n = n.split(", ").map(o=>o.replace(",", ".")).join(", ")),
    r = new t.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    s = r.toString().split(",")),
    e === "x" && (t.WebKitCSSMatrix ? n = r.m41 : s.length === 16 ? n = parseFloat(s[12]) : n = parseFloat(s[4])),
    e === "y" && (t.WebKitCSSMatrix ? n = r.m42 : s.length === 16 ? n = parseFloat(s[13]) : n = parseFloat(s[5])),
    n || 0
}
function $(i) {
    return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object"
}
function Oe(i) {
    return typeof window != "undefined" && typeof window.HTMLElement != "undefined" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11)
}
function A() {
    const i = Object(arguments.length <= 0 ? void 0 : arguments[0])
      , e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
        const s = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (s != null && !Oe(s)) {
            const n = Object.keys(Object(s)).filter(r=>e.indexOf(r) < 0);
            for (let r = 0, l = n.length; r < l; r += 1) {
                const o = n[r]
                  , a = Object.getOwnPropertyDescriptor(s, o);
                a !== void 0 && a.enumerable && ($(i[o]) && $(s[o]) ? s[o].__swiper__ ? i[o] = s[o] : A(i[o], s[o]) : !$(i[o]) && $(s[o]) ? (i[o] = {},
                s[o].__swiper__ ? i[o] = s[o] : A(i[o], s[o])) : i[o] = s[o])
            }
        }
    }
    return i
}
function _(i, e, t) {
    i.style.setProperty(e, t)
}
function de(i) {
    let {swiper: e, targetPosition: t, side: s} = i;
    const n = z()
      , r = -e.translate;
    let l = null, o;
    const a = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none",
    n.cancelAnimationFrame(e.cssModeFrameID);
    const d = t > r ? "next" : "prev"
      , c = (p,f)=>d === "next" && p >= f || d === "prev" && p <= f
      , u = ()=>{
        o = new Date().getTime(),
        l === null && (l = o);
        const p = Math.max(Math.min((o - l) / a, 1), 0)
          , f = .5 - Math.cos(p * Math.PI) / 2;
        let m = r + f * (t - r);
        if (c(m, t) && (m = t),
        e.wrapperEl.scrollTo({
            [s]: m
        }),
        c(m, t)) {
            e.wrapperEl.style.overflow = "hidden",
            e.wrapperEl.style.scrollSnapType = "",
            setTimeout(()=>{
                e.wrapperEl.style.overflow = "",
                e.wrapperEl.scrollTo({
                    [s]: m
                })
            }
            ),
            n.cancelAnimationFrame(e.cssModeFrameID);
            return
        }
        e.cssModeFrameID = n.requestAnimationFrame(u)
    }
    ;
    u()
}
function O(i, e) {
    return e === void 0 && (e = ""),
    [...i.children].filter(t=>t.matches(e))
}
function R(i) {
    try {
        console.warn(i);
        return
    } catch {}
}
function X(i, e) {
    e === void 0 && (e = []);
    const t = document.createElement(i);
    return t.classList.add(...Array.isArray(e) ? e : Ce(e)),
    t
}
function Ge(i, e) {
    const t = [];
    for (; i.previousElementSibling; ) {
        const s = i.previousElementSibling;
        e ? s.matches(e) && t.push(s) : t.push(s),
        i = s
    }
    return t
}
function ke(i, e) {
    const t = [];
    for (; i.nextElementSibling; ) {
        const s = i.nextElementSibling;
        e ? s.matches(e) && t.push(s) : t.push(s),
        i = s
    }
    return t
}
function D(i, e) {
    return z().getComputedStyle(i, null).getPropertyValue(e)
}
function ce(i) {
    let e = i, t;
    if (e) {
        for (t = 0; (e = e.previousSibling) !== null; )
            e.nodeType === 1 && (t += 1);
        return t
    }
}
function De(i, e) {
    const t = [];
    let s = i.parentElement;
    for (; s; )
        e ? s.matches(e) && t.push(s) : t.push(s),
        s = s.parentElement;
    return t
}
function fe(i, e, t) {
    const s = z();
    return t ? i[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : i.offsetWidth
}
let K;
function Ve() {
    const i = z()
      , e = B();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior"in e.documentElement.style,
        touch: !!("ontouchstart"in i || i.DocumentTouch && e instanceof i.DocumentTouch)
    }
}
function ue() {
    return K || (K = Ve()),
    K
}
let U;
function Fe(i) {
    let {userAgent: e} = i === void 0 ? {} : i;
    const t = ue()
      , s = z()
      , n = s.navigator.platform
      , r = e || s.navigator.userAgent
      , l = {
        ios: !1,
        android: !1
    }
      , o = s.screen.width
      , a = s.screen.height
      , d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = r.match(/(iPad).*OS\s([\d_]+)/);
    const u = r.match(/(iPod)(.*OS\s([\d_]+))?/)
      , p = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , f = n === "Win32";
    let m = n === "MacIntel";
    const w = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !c && m && t.touch && w.indexOf(`${o}x${a}`) >= 0 && (c = r.match(/(Version)\/([\d.]+)/),
    c || (c = [0, 1, "13_0_0"]),
    m = !1),
    d && !f && (l.os = "android",
    l.android = !0),
    (c || p || u) && (l.os = "ios",
    l.ios = !0),
    l
}
function Be(i) {
    return i === void 0 && (i = {}),
    U || (U = Fe(i)),
    U
}
let J;
function Ne() {
    const i = z();
    let e = !1;
    function t() {
        const s = i.navigator.userAgent.toLowerCase();
        return s.indexOf("safari") >= 0 && s.indexOf("chrome") < 0 && s.indexOf("android") < 0
    }
    if (t()) {
        const s = String(i.navigator.userAgent);
        if (s.includes("Version/")) {
            const [n,r] = s.split("Version/")[1].split(" ")[0].split(".").map(l=>Number(l));
            e = n < 16 || n === 16 && r < 2
        }
    }
    return {
        isSafari: e || t(),
        needPerspectiveFix: e,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)
    }
}
function $e() {
    return J || (J = Ne()),
    J
}
function _e(i) {
    let {swiper: e, on: t, emit: s} = i;
    const n = z();
    let r = null
      , l = null;
    const o = ()=>{
        !e || e.destroyed || !e.initialized || (s("beforeResize"),
        s("resize"))
    }
      , a = ()=>{
        !e || e.destroyed || !e.initialized || (r = new ResizeObserver(u=>{
            l = n.requestAnimationFrame(()=>{
                const {width: p, height: f} = e;
                let m = p
                  , w = f;
                u.forEach(T=>{
                    let {contentBoxSize: h, contentRect: x, target: g} = T;
                    g && g !== e.el || (m = x ? x.width : (h[0] || h).inlineSize,
                    w = x ? x.height : (h[0] || h).blockSize)
                }
                ),
                (m !== p || w !== f) && o()
            }
            )
        }
        ),
        r.observe(e.el))
    }
      , d = ()=>{
        l && n.cancelAnimationFrame(l),
        r && r.unobserve && e.el && (r.unobserve(e.el),
        r = null)
    }
      , c = ()=>{
        !e || e.destroyed || !e.initialized || s("orientationchange")
    }
    ;
    t("init", ()=>{
        if (e.params.resizeObserver && typeof n.ResizeObserver != "undefined") {
            a();
            return
        }
        n.addEventListener("resize", o),
        n.addEventListener("orientationchange", c)
    }
    ),
    t("destroy", ()=>{
        d(),
        n.removeEventListener("resize", o),
        n.removeEventListener("orientationchange", c)
    }
    )
}
function Re(i) {
    let {swiper: e, extendParams: t, on: s, emit: n} = i;
    const r = []
      , l = z()
      , o = function(c, u) {
        u === void 0 && (u = {});
        const p = l.MutationObserver || l.WebkitMutationObserver
          , f = new p(m=>{
            if (e.__preventObserver__)
                return;
            if (m.length === 1) {
                n("observerUpdate", m[0]);
                return
            }
            const w = function() {
                n("observerUpdate", m[0])
            };
            l.requestAnimationFrame ? l.requestAnimationFrame(w) : l.setTimeout(w, 0)
        }
        );
        f.observe(c, {
            attributes: typeof u.attributes == "undefined" ? !0 : u.attributes,
            childList: typeof u.childList == "undefined" ? !0 : u.childList,
            characterData: typeof u.characterData == "undefined" ? !0 : u.characterData
        }),
        r.push(f)
    }
      , a = ()=>{
        if (!!e.params.observer) {
            if (e.params.observeParents) {
                const c = De(e.hostEl);
                for (let u = 0; u < c.length; u += 1)
                    o(c[u])
            }
            o(e.hostEl, {
                childList: e.params.observeSlideChildren
            }),
            o(e.wrapperEl, {
                attributes: !1
            })
        }
    }
      , d = ()=>{
        r.forEach(c=>{
            c.disconnect()
        }
        ),
        r.splice(0, r.length)
    }
    ;
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    s("init", a),
    s("destroy", d)
}
var He = {
    on(i, e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function")
            return s;
        const n = t ? "unshift" : "push";
        return i.split(" ").forEach(r=>{
            s.eventsListeners[r] || (s.eventsListeners[r] = []),
            s.eventsListeners[r][n](e)
        }
        ),
        s
    },
    once(i, e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function")
            return s;
        function n() {
            s.off(i, n),
            n.__emitterProxy && delete n.__emitterProxy;
            for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
                l[o] = arguments[o];
            e.apply(s, l)
        }
        return n.__emitterProxy = e,
        s.on(i, n, t)
    },
    onAny(i, e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || typeof i != "function")
            return t;
        const s = e ? "unshift" : "push";
        return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[s](i),
        t
    },
    offAny(i) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
            return e;
        const t = e.eventsAnyListeners.indexOf(i);
        return t >= 0 && e.eventsAnyListeners.splice(t, 1),
        e
    },
    off(i, e) {
        const t = this;
        return !t.eventsListeners || t.destroyed || !t.eventsListeners || i.split(" ").forEach(s=>{
            typeof e == "undefined" ? t.eventsListeners[s] = [] : t.eventsListeners[s] && t.eventsListeners[s].forEach((n,r)=>{
                (n === e || n.__emitterProxy && n.__emitterProxy === e) && t.eventsListeners[s].splice(r, 1)
            }
            )
        }
        ),
        t
    },
    emit() {
        const i = this;
        if (!i.eventsListeners || i.destroyed || !i.eventsListeners)
            return i;
        let e, t, s;
        for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
            r[l] = arguments[l];
        return typeof r[0] == "string" || Array.isArray(r[0]) ? (e = r[0],
        t = r.slice(1, r.length),
        s = i) : (e = r[0].events,
        t = r[0].data,
        s = r[0].context || i),
        t.unshift(s),
        (Array.isArray(e) ? e : e.split(" ")).forEach(a=>{
            i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(d=>{
                d.apply(s, [a, ...t])
            }
            ),
            i.eventsListeners && i.eventsListeners[a] && i.eventsListeners[a].forEach(d=>{
                d.apply(s, t)
            }
            )
        }
        ),
        i
    }
};
function We() {
    const i = this;
    let e, t;
    const s = i.el;
    typeof i.params.width != "undefined" && i.params.width !== null ? e = i.params.width : e = s.clientWidth,
    typeof i.params.height != "undefined" && i.params.height !== null ? t = i.params.height : t = s.clientHeight,
    !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt(D(s, "padding-left") || 0, 10) - parseInt(D(s, "padding-right") || 0, 10),
    t = t - parseInt(D(s, "padding-top") || 0, 10) - parseInt(D(s, "padding-bottom") || 0, 10),
    Number.isNaN(e) && (e = 0),
    Number.isNaN(t) && (t = 0),
    Object.assign(i, {
        width: e,
        height: t,
        size: i.isHorizontal() ? e : t
    }))
}
function je() {
    const i = this;
    function e(S, y) {
        return parseFloat(S.getPropertyValue(i.getDirectionLabel(y)) || 0)
    }
    const t = i.params
      , {wrapperEl: s, slidesEl: n, size: r, rtlTranslate: l, wrongRTL: o} = i
      , a = i.virtual && t.virtual.enabled
      , d = a ? i.virtual.slides.length : i.slides.length
      , c = O(n, `.${i.params.slideClass}, swiper-slide`)
      , u = a ? i.virtual.slides.length : c.length;
    let p = [];
    const f = []
      , m = [];
    let w = t.slidesOffsetBefore;
    typeof w == "function" && (w = t.slidesOffsetBefore.call(i));
    let T = t.slidesOffsetAfter;
    typeof T == "function" && (T = t.slidesOffsetAfter.call(i));
    const h = i.snapGrid.length
      , x = i.slidesGrid.length;
    let g = t.spaceBetween
      , v = -w
      , P = 0
      , M = 0;
    if (typeof r == "undefined")
        return;
    typeof g == "string" && g.indexOf("%") >= 0 ? g = parseFloat(g.replace("%", "")) / 100 * r : typeof g == "string" && (g = parseFloat(g)),
    i.virtualSize = -g,
    c.forEach(S=>{
        l ? S.style.marginLeft = "" : S.style.marginRight = "",
        S.style.marginBottom = "",
        S.style.marginTop = ""
    }
    ),
    t.centeredSlides && t.cssMode && (_(s, "--swiper-centered-offset-before", ""),
    _(s, "--swiper-centered-offset-after", ""));
    const V = t.grid && t.grid.rows > 1 && i.grid;
    V ? i.grid.initSlides(c) : i.grid && i.grid.unsetSlides();
    let I;
    const F = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter(S=>typeof t.breakpoints[S].slidesPerView != "undefined").length > 0;
    for (let S = 0; S < u; S += 1) {
        I = 0;
        let y;
        if (c[S] && (y = c[S]),
        V && i.grid.updateSlide(S, y, c),
        !(c[S] && D(y, "display") === "none")) {
            if (t.slidesPerView === "auto") {
                F && (c[S].style[i.getDirectionLabel("width")] = "");
                const E = getComputedStyle(y)
                  , b = y.style.transform
                  , C = y.style.webkitTransform;
                if (b && (y.style.transform = "none"),
                C && (y.style.webkitTransform = "none"),
                t.roundLengths)
                    I = i.isHorizontal() ? fe(y, "width", !0) : fe(y, "height", !0);
                else {
                    const L = e(E, "width")
                      , k = e(E, "padding-left")
                      , Se = e(E, "padding-right")
                      , ie = e(E, "margin-left")
                      , se = e(E, "margin-right")
                      , re = E.getPropertyValue("box-sizing");
                    if (re && re === "border-box")
                        I = L + ie + se;
                    else {
                        const {clientWidth: Te, offsetWidth: xe} = y;
                        I = L + k + Se + ie + se + (xe - Te)
                    }
                }
                b && (y.style.transform = b),
                C && (y.style.webkitTransform = C),
                t.roundLengths && (I = Math.floor(I))
            } else
                I = (r - (t.slidesPerView - 1) * g) / t.slidesPerView,
                t.roundLengths && (I = Math.floor(I)),
                c[S] && (c[S].style[i.getDirectionLabel("width")] = `${I}px`);
            c[S] && (c[S].swiperSlideSize = I),
            m.push(I),
            t.centeredSlides ? (v = v + I / 2 + P / 2 + g,
            P === 0 && S !== 0 && (v = v - r / 2 - g),
            S === 0 && (v = v - r / 2 - g),
            Math.abs(v) < 1 / 1e3 && (v = 0),
            t.roundLengths && (v = Math.floor(v)),
            M % t.slidesPerGroup == 0 && p.push(v),
            f.push(v)) : (t.roundLengths && (v = Math.floor(v)),
            (M - Math.min(i.params.slidesPerGroupSkip, M)) % i.params.slidesPerGroup == 0 && p.push(v),
            f.push(v),
            v = v + I + g),
            i.virtualSize += I + g,
            P = I,
            M += 1
        }
    }
    if (i.virtualSize = Math.max(i.virtualSize, r) + T,
    l && o && (t.effect === "slide" || t.effect === "coverflow") && (s.style.width = `${i.virtualSize + g}px`),
    t.setWrapperSize && (s.style[i.getDirectionLabel("width")] = `${i.virtualSize + g}px`),
    V && i.grid.updateWrapperSize(I, p),
    !t.centeredSlides) {
        const S = [];
        for (let y = 0; y < p.length; y += 1) {
            let E = p[y];
            t.roundLengths && (E = Math.floor(E)),
            p[y] <= i.virtualSize - r && S.push(E)
        }
        p = S,
        Math.floor(i.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 && p.push(i.virtualSize - r)
    }
    if (a && t.loop) {
        const S = m[0] + g;
        if (t.slidesPerGroup > 1) {
            const y = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup)
              , E = S * t.slidesPerGroup;
            for (let b = 0; b < y; b += 1)
                p.push(p[p.length - 1] + E)
        }
        for (let y = 0; y < i.virtual.slidesBefore + i.virtual.slidesAfter; y += 1)
            t.slidesPerGroup === 1 && p.push(p[p.length - 1] + S),
            f.push(f[f.length - 1] + S),
            i.virtualSize += S
    }
    if (p.length === 0 && (p = [0]),
    g !== 0) {
        const S = i.isHorizontal() && l ? "marginLeft" : i.getDirectionLabel("marginRight");
        c.filter((y,E)=>!t.cssMode || t.loop ? !0 : E !== c.length - 1).forEach(y=>{
            y.style[S] = `${g}px`
        }
        )
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
        let S = 0;
        m.forEach(E=>{
            S += E + (g || 0)
        }
        ),
        S -= g;
        const y = S - r;
        p = p.map(E=>E <= 0 ? -w : E > y ? y + T : E)
    }
    if (t.centerInsufficientSlides) {
        let S = 0;
        if (m.forEach(y=>{
            S += y + (g || 0)
        }
        ),
        S -= g,
        S < r) {
            const y = (r - S) / 2;
            p.forEach((E,b)=>{
                p[b] = E - y
            }
            ),
            f.forEach((E,b)=>{
                f[b] = E + y
            }
            )
        }
    }
    if (Object.assign(i, {
        slides: c,
        snapGrid: p,
        slidesGrid: f,
        slidesSizesGrid: m
    }),
    t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
        _(s, "--swiper-centered-offset-before", `${-p[0]}px`),
        _(s, "--swiper-centered-offset-after", `${i.size / 2 - m[m.length - 1] / 2}px`);
        const S = -i.snapGrid[0]
          , y = -i.slidesGrid[0];
        i.snapGrid = i.snapGrid.map(E=>E + S),
        i.slidesGrid = i.slidesGrid.map(E=>E + y)
    }
    if (u !== d && i.emit("slidesLengthChange"),
    p.length !== h && (i.params.watchOverflow && i.checkOverflow(),
    i.emit("snapGridLengthChange")),
    f.length !== x && i.emit("slidesGridLengthChange"),
    t.watchSlidesProgress && i.updateSlidesOffset(),
    !a && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
        const S = `${t.containerModifierClass}backface-hidden`
          , y = i.el.classList.contains(S);
        u <= t.maxBackfaceHiddenSlides ? y || i.el.classList.add(S) : y && i.el.classList.remove(S)
    }
}
function Ye(i) {
    const e = this
      , t = []
      , s = e.virtual && e.params.virtual.enabled;
    let n = 0, r;
    typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
    const l = o=>s ? e.slides[e.getSlideIndexByData(o)] : e.slides[o];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)
            (e.visibleSlides || []).forEach(o=>{
                t.push(o)
            }
            );
        else
            for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
                const o = e.activeIndex + r;
                if (o > e.slides.length && !s)
                    break;
                t.push(l(o))
            }
    else
        t.push(l(e.activeIndex));
    for (r = 0; r < t.length; r += 1)
        if (typeof t[r] != "undefined") {
            const o = t[r].offsetHeight;
            n = o > n ? o : n
        }
    (n || n === 0) && (e.wrapperEl.style.height = `${n}px`)
}
function qe() {
    const i = this
      , e = i.slides
      , t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
    for (let s = 0; s < e.length; s += 1)
        e[s].swiperSlideOffset = (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - t - i.cssOverflowAdjustment()
}
function Xe(i) {
    i === void 0 && (i = this && this.translate || 0);
    const e = this
      , t = e.params
      , {slides: s, rtlTranslate: n, snapGrid: r} = e;
    if (s.length === 0)
        return;
    typeof s[0].swiperSlideOffset == "undefined" && e.updateSlidesOffset();
    let l = -i;
    n && (l = i),
    s.forEach(a=>{
        a.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass)
    }
    ),
    e.visibleSlidesIndexes = [],
    e.visibleSlides = [];
    let o = t.spaceBetween;
    typeof o == "string" && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * e.size : typeof o == "string" && (o = parseFloat(o));
    for (let a = 0; a < s.length; a += 1) {
        const d = s[a];
        let c = d.swiperSlideOffset;
        t.cssMode && t.centeredSlides && (c -= s[0].swiperSlideOffset);
        const u = (l + (t.centeredSlides ? e.minTranslate() : 0) - c) / (d.swiperSlideSize + o)
          , p = (l - r[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) / (d.swiperSlideSize + o)
          , f = -(l - c)
          , m = f + e.slidesSizesGrid[a]
          , w = f >= 0 && f <= e.size - e.slidesSizesGrid[a];
        (f >= 0 && f < e.size - 1 || m > 1 && m <= e.size || f <= 0 && m >= e.size) && (e.visibleSlides.push(d),
        e.visibleSlidesIndexes.push(a),
        s[a].classList.add(t.slideVisibleClass)),
        w && s[a].classList.add(t.slideFullyVisibleClass),
        d.progress = n ? -u : u,
        d.originalProgress = n ? -p : p
    }
}
function Ke(i) {
    const e = this;
    if (typeof i == "undefined") {
        const c = e.rtlTranslate ? -1 : 1;
        i = e && e.translate && e.translate * c || 0
    }
    const t = e.params
      , s = e.maxTranslate() - e.minTranslate();
    let {progress: n, isBeginning: r, isEnd: l, progressLoop: o} = e;
    const a = r
      , d = l;
    if (s === 0)
        n = 0,
        r = !0,
        l = !0;
    else {
        n = (i - e.minTranslate()) / s;
        const c = Math.abs(i - e.minTranslate()) < 1
          , u = Math.abs(i - e.maxTranslate()) < 1;
        r = c || n <= 0,
        l = u || n >= 1,
        c && (n = 0),
        u && (n = 1)
    }
    if (t.loop) {
        const c = e.getSlideIndexByData(0)
          , u = e.getSlideIndexByData(e.slides.length - 1)
          , p = e.slidesGrid[c]
          , f = e.slidesGrid[u]
          , m = e.slidesGrid[e.slidesGrid.length - 1]
          , w = Math.abs(i);
        w >= p ? o = (w - p) / m : o = (w + m - f) / m,
        o > 1 && (o -= 1)
    }
    Object.assign(e, {
        progress: n,
        progressLoop: o,
        isBeginning: r,
        isEnd: l
    }),
    (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i),
    r && !a && e.emit("reachBeginning toEdge"),
    l && !d && e.emit("reachEnd toEdge"),
    (a && !r || d && !l) && e.emit("fromEdge"),
    e.emit("progress", n)
}
function Ue() {
    const i = this
      , {slides: e, params: t, slidesEl: s, activeIndex: n} = i
      , r = i.virtual && t.virtual.enabled
      , l = i.grid && t.grid && t.grid.rows > 1
      , o = u=>O(s, `.${t.slideClass}${u}, swiper-slide${u}`)[0];
    e.forEach(u=>{
        u.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass)
    }
    );
    let a, d, c;
    if (r)
        if (t.loop) {
            let u = n - i.virtual.slidesBefore;
            u < 0 && (u = i.virtual.slides.length + u),
            u >= i.virtual.slides.length && (u -= i.virtual.slides.length),
            a = o(`[data-swiper-slide-index="${u}"]`)
        } else
            a = o(`[data-swiper-slide-index="${n}"]`);
    else
        l ? (a = e.filter(u=>u.column === n)[0],
        c = e.filter(u=>u.column === n + 1)[0],
        d = e.filter(u=>u.column === n - 1)[0]) : a = e[n];
    a && (a.classList.add(t.slideActiveClass),
    l ? (c && c.classList.add(t.slideNextClass),
    d && d.classList.add(t.slidePrevClass)) : (c = ke(a, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !c && (c = e[0]),
    c && c.classList.add(t.slideNextClass),
    d = Ge(a, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !d === 0 && (d = e[e.length - 1]),
    d && d.classList.add(t.slidePrevClass))),
    i.emitSlidesClasses()
}
const H = (i,e)=>{
    if (!i || i.destroyed || !i.params)
        return;
    const t = ()=>i.isElement ? "swiper-slide" : `.${i.params.slideClass}`
      , s = e.closest(t());
    if (s) {
        let n = s.querySelector(`.${i.params.lazyPreloaderClass}`);
        !n && i.isElement && (s.shadowRoot ? n = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`) : requestAnimationFrame(()=>{
            s.shadowRoot && (n = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),
            n && n.remove())
        }
        )),
        n && n.remove()
    }
}
  , Q = (i,e)=>{
    if (!i.slides[e])
        return;
    const t = i.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading")
}
  , Z = i=>{
    if (!i || i.destroyed || !i.params)
        return;
    let e = i.params.lazyPreloadPrevNext;
    const t = i.slides.length;
    if (!t || !e || e < 0)
        return;
    e = Math.min(e, t);
    const s = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView)
      , n = i.activeIndex;
    if (i.params.grid && i.params.grid.rows > 1) {
        const l = n
          , o = [l - e];
        o.push(...Array.from({
            length: e
        }).map((a,d)=>l + s + d)),
        i.slides.forEach((a,d)=>{
            o.includes(a.column) && Q(i, d)
        }
        );
        return
    }
    const r = n + s - 1;
    if (i.params.rewind || i.params.loop)
        for (let l = n - e; l <= r + e; l += 1) {
            const o = (l % t + t) % t;
            (o < n || o > r) && Q(i, o)
        }
    else
        for (let l = Math.max(n - e, 0); l <= Math.min(r + e, t - 1); l += 1)
            l !== n && (l > r || l < n) && Q(i, l)
}
;
function Je(i) {
    const {slidesGrid: e, params: t} = i
      , s = i.rtlTranslate ? i.translate : -i.translate;
    let n;
    for (let r = 0; r < e.length; r += 1)
        typeof e[r + 1] != "undefined" ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2 ? n = r : s >= e[r] && s < e[r + 1] && (n = r + 1) : s >= e[r] && (n = r);
    return t.normalizeSlideIndex && (n < 0 || typeof n == "undefined") && (n = 0),
    n
}
function Qe(i) {
    const e = this
      , t = e.rtlTranslate ? e.translate : -e.translate
      , {snapGrid: s, params: n, activeIndex: r, realIndex: l, snapIndex: o} = e;
    let a = i, d;
    const c = f=>{
        let m = f - e.virtual.slidesBefore;
        return m < 0 && (m = e.virtual.slides.length + m),
        m >= e.virtual.slides.length && (m -= e.virtual.slides.length),
        m
    }
    ;
    if (typeof a == "undefined" && (a = Je(e)),
    s.indexOf(t) >= 0)
        d = s.indexOf(t);
    else {
        const f = Math.min(n.slidesPerGroupSkip, a);
        d = f + Math.floor((a - f) / n.slidesPerGroup)
    }
    if (d >= s.length && (d = s.length - 1),
    a === r && !e.params.loop) {
        d !== o && (e.snapIndex = d,
        e.emit("snapIndexChange"));
        return
    }
    if (a === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = c(a);
        return
    }
    const u = e.grid && n.grid && n.grid.rows > 1;
    let p;
    if (e.virtual && n.virtual.enabled && n.loop)
        p = c(a);
    else if (u) {
        const f = e.slides.filter(w=>w.column === a)[0];
        let m = parseInt(f.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(m) && (m = Math.max(e.slides.indexOf(f), 0)),
        p = Math.floor(m / n.grid.rows)
    } else if (e.slides[a]) {
        const f = e.slides[a].getAttribute("data-swiper-slide-index");
        f ? p = parseInt(f, 10) : p = a
    } else
        p = a;
    Object.assign(e, {
        previousSnapIndex: o,
        snapIndex: d,
        previousRealIndex: l,
        realIndex: p,
        previousIndex: r,
        activeIndex: a
    }),
    e.initialized && Z(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && (l !== p && e.emit("realIndexChange"),
    e.emit("slideChange"))
}
function Ze(i, e) {
    const t = this
      , s = t.params;
    let n = i.closest(`.${s.slideClass}, swiper-slide`);
    !n && t.isElement && e && e.length > 1 && e.includes(i) && [...e.slice(e.indexOf(i) + 1, e.length)].forEach(o=>{
        !n && o.matches && o.matches(`.${s.slideClass}, swiper-slide`) && (n = o)
    }
    );
    let r = !1, l;
    if (n) {
        for (let o = 0; o < t.slides.length; o += 1)
            if (t.slides[o] === n) {
                r = !0,
                l = o;
                break
            }
    }
    if (n && r)
        t.clickedSlide = n,
        t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = l;
    else {
        t.clickedSlide = void 0,
        t.clickedIndex = void 0;
        return
    }
    s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
var et = {
    updateSize: We,
    updateSlides: je,
    updateAutoHeight: Ye,
    updateSlidesOffset: qe,
    updateSlidesProgress: Xe,
    updateProgress: Ke,
    updateSlidesClasses: Ue,
    updateActiveIndex: Qe,
    updateClickedSlide: Ze
};
function tt(i) {
    i === void 0 && (i = this.isHorizontal() ? "x" : "y");
    const e = this
      , {params: t, rtlTranslate: s, translate: n, wrapperEl: r} = e;
    if (t.virtualTranslate)
        return s ? -n : n;
    if (t.cssMode)
        return n;
    let l = Ae(r, i);
    return l += e.cssOverflowAdjustment(),
    s && (l = -l),
    l || 0
}
function it(i, e) {
    const t = this
      , {rtlTranslate: s, params: n, wrapperEl: r, progress: l} = t;
    let o = 0
      , a = 0;
    const d = 0;
    t.isHorizontal() ? o = s ? -i : i : a = i,
    n.roundLengths && (o = Math.floor(o),
    a = Math.floor(a)),
    t.previousTranslate = t.translate,
    t.translate = t.isHorizontal() ? o : a,
    n.cssMode ? r[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -o : -a : n.virtualTranslate || (t.isHorizontal() ? o -= t.cssOverflowAdjustment() : a -= t.cssOverflowAdjustment(),
    r.style.transform = `translate3d(${o}px, ${a}px, ${d}px)`);
    let c;
    const u = t.maxTranslate() - t.minTranslate();
    u === 0 ? c = 0 : c = (i - t.minTranslate()) / u,
    c !== l && t.updateProgress(i),
    t.emit("setTranslate", t.translate, e)
}
function st() {
    return -this.snapGrid[0]
}
function rt() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function nt(i, e, t, s, n) {
    i === void 0 && (i = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    s === void 0 && (s = !0);
    const r = this
      , {params: l, wrapperEl: o} = r;
    if (r.animating && l.preventInteractionOnTransition)
        return !1;
    const a = r.minTranslate()
      , d = r.maxTranslate();
    let c;
    if (s && i > a ? c = a : s && i < d ? c = d : c = i,
    r.updateProgress(c),
    l.cssMode) {
        const u = r.isHorizontal();
        if (e === 0)
            o[u ? "scrollLeft" : "scrollTop"] = -c;
        else {
            if (!r.support.smoothScroll)
                return de({
                    swiper: r,
                    targetPosition: -c,
                    side: u ? "left" : "top"
                }),
                !0;
            o.scrollTo({
                [u ? "left" : "top"]: -c,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (r.setTransition(0),
    r.setTranslate(c),
    t && (r.emit("beforeTransitionStart", e, n),
    r.emit("transitionEnd"))) : (r.setTransition(e),
    r.setTranslate(c),
    t && (r.emit("beforeTransitionStart", e, n),
    r.emit("transitionStart")),
    r.animating || (r.animating = !0,
    r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(p) {
        !r || r.destroyed || p.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
        r.onTranslateToWrapperTransitionEnd = null,
        delete r.onTranslateToWrapperTransitionEnd,
        t && r.emit("transitionEnd"))
    }
    ),
    r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))),
    !0
}
var at = {
    getTranslate: tt,
    setTranslate: it,
    minTranslate: st,
    maxTranslate: rt,
    translateTo: nt
};
function lt(i, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${i}ms`,
    t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""),
    t.emit("setTransition", i, e)
}
function pe(i) {
    let {swiper: e, runCallbacks: t, direction: s, step: n} = i;
    const {activeIndex: r, previousIndex: l} = e;
    let o = s;
    if (o || (r > l ? o = "next" : r < l ? o = "prev" : o = "reset"),
    e.emit(`transition${n}`),
    t && r !== l) {
        if (o === "reset") {
            e.emit(`slideResetTransition${n}`);
            return
        }
        e.emit(`slideChangeTransition${n}`),
        o === "next" ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`)
    }
}
function ot(i, e) {
    i === void 0 && (i = !0);
    const t = this
      , {params: s} = t;
    s.cssMode || (s.autoHeight && t.updateAutoHeight(),
    pe({
        swiper: t,
        runCallbacks: i,
        direction: e,
        step: "Start"
    }))
}
function dt(i, e) {
    i === void 0 && (i = !0);
    const t = this
      , {params: s} = t;
    t.animating = !1,
    !s.cssMode && (t.setTransition(0),
    pe({
        swiper: t,
        runCallbacks: i,
        direction: e,
        step: "End"
    }))
}
var ct = {
    setTransition: lt,
    transitionStart: ot,
    transitionEnd: dt
};
function ft(i, e, t, s, n) {
    i === void 0 && (i = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    typeof i == "string" && (i = parseInt(i, 10));
    const r = this;
    let l = i;
    l < 0 && (l = 0);
    const {params: o, snapGrid: a, slidesGrid: d, previousIndex: c, activeIndex: u, rtlTranslate: p, wrapperEl: f, enabled: m} = r;
    if (r.animating && o.preventInteractionOnTransition || !m && !s && !n)
        return !1;
    const w = Math.min(r.params.slidesPerGroupSkip, l);
    let T = w + Math.floor((l - w) / r.params.slidesPerGroup);
    T >= a.length && (T = a.length - 1);
    const h = -a[T];
    if (o.normalizeSlideIndex)
        for (let g = 0; g < d.length; g += 1) {
            const v = -Math.floor(h * 100)
              , P = Math.floor(d[g] * 100)
              , M = Math.floor(d[g + 1] * 100);
            typeof d[g + 1] != "undefined" ? v >= P && v < M - (M - P) / 2 ? l = g : v >= P && v < M && (l = g + 1) : v >= P && (l = g)
        }
    if (r.initialized && l !== u && (!r.allowSlideNext && (p ? h > r.translate && h > r.minTranslate() : h < r.translate && h < r.minTranslate()) || !r.allowSlidePrev && h > r.translate && h > r.maxTranslate() && (u || 0) !== l))
        return !1;
    l !== (c || 0) && t && r.emit("beforeSlideChangeStart"),
    r.updateProgress(h);
    let x;
    if (l > u ? x = "next" : l < u ? x = "prev" : x = "reset",
    p && -h === r.translate || !p && h === r.translate)
        return r.updateActiveIndex(l),
        o.autoHeight && r.updateAutoHeight(),
        r.updateSlidesClasses(),
        o.effect !== "slide" && r.setTranslate(h),
        x !== "reset" && (r.transitionStart(t, x),
        r.transitionEnd(t, x)),
        !1;
    if (o.cssMode) {
        const g = r.isHorizontal()
          , v = p ? h : -h;
        if (e === 0) {
            const P = r.virtual && r.params.virtual.enabled;
            P && (r.wrapperEl.style.scrollSnapType = "none",
            r._immediateVirtual = !0),
            P && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0,
            requestAnimationFrame(()=>{
                f[g ? "scrollLeft" : "scrollTop"] = v
            }
            )) : f[g ? "scrollLeft" : "scrollTop"] = v,
            P && requestAnimationFrame(()=>{
                r.wrapperEl.style.scrollSnapType = "",
                r._immediateVirtual = !1
            }
            )
        } else {
            if (!r.support.smoothScroll)
                return de({
                    swiper: r,
                    targetPosition: v,
                    side: g ? "left" : "top"
                }),
                !0;
            f.scrollTo({
                [g ? "left" : "top"]: v,
                behavior: "smooth"
            })
        }
        return !0
    }
    return r.setTransition(e),
    r.setTranslate(h),
    r.updateActiveIndex(l),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", e, s),
    r.transitionStart(t, x),
    e === 0 ? r.transitionEnd(t, x) : r.animating || (r.animating = !0,
    r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(v) {
        !r || r.destroyed || v.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
        r.onSlideToWrapperTransitionEnd = null,
        delete r.onSlideToWrapperTransitionEnd,
        r.transitionEnd(t, x))
    }
    ),
    r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)),
    !0
}
function ut(i, e, t, s) {
    i === void 0 && (i = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    typeof i == "string" && (i = parseInt(i, 10));
    const n = this
      , r = n.grid && n.params.grid && n.params.grid.rows > 1;
    let l = i;
    if (n.params.loop)
        if (n.virtual && n.params.virtual.enabled)
            l = l + n.virtual.slidesBefore;
        else {
            let o;
            if (r) {
                const p = l * n.params.grid.rows;
                o = n.slides.filter(f=>f.getAttribute("data-swiper-slide-index") * 1 === p)[0].column
            } else
                o = n.getSlideIndexByData(l);
            const a = r ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length
              , {centeredSlides: d} = n.params;
            let c = n.params.slidesPerView;
            c === "auto" ? c = n.slidesPerViewDynamic() : (c = Math.ceil(parseFloat(n.params.slidesPerView, 10)),
            d && c % 2 == 0 && (c = c + 1));
            let u = a - o < c;
            if (d && (u = u || o < Math.ceil(c / 2)),
            u) {
                const p = d ? o < n.activeIndex ? "prev" : "next" : o - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
                n.loopFix({
                    direction: p,
                    slideTo: !0,
                    activeSlideIndex: p === "next" ? o + 1 : o - a + 1,
                    slideRealIndex: p === "next" ? n.realIndex : void 0
                })
            }
            if (r) {
                const p = l * n.params.grid.rows;
                l = n.slides.filter(f=>f.getAttribute("data-swiper-slide-index") * 1 === p)[0].column
            } else
                l = n.getSlideIndexByData(l)
        }
    return requestAnimationFrame(()=>{
        n.slideTo(l, e, t, s)
    }
    ),
    n
}
function pt(i, e, t) {
    i === void 0 && (i = this.params.speed),
    e === void 0 && (e = !0);
    const s = this
      , {enabled: n, params: r, animating: l} = s;
    if (!n)
        return s;
    let o = r.slidesPerGroup;
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : o
      , d = s.virtual && r.virtual.enabled;
    if (r.loop) {
        if (l && !d && r.loopPreventsSliding)
            return !1;
        if (s.loopFix({
            direction: "next"
        }),
        s._clientLeft = s.wrapperEl.clientLeft,
        s.activeIndex === s.slides.length - 1 && r.cssMode)
            return requestAnimationFrame(()=>{
                s.slideTo(s.activeIndex + a, i, e, t)
            }
            ),
            !0
    }
    return r.rewind && s.isEnd ? s.slideTo(0, i, e, t) : s.slideTo(s.activeIndex + a, i, e, t)
}
function mt(i, e, t) {
    i === void 0 && (i = this.params.speed),
    e === void 0 && (e = !0);
    const s = this
      , {params: n, snapGrid: r, slidesGrid: l, rtlTranslate: o, enabled: a, animating: d} = s;
    if (!a)
        return s;
    const c = s.virtual && n.virtual.enabled;
    if (n.loop) {
        if (d && !c && n.loopPreventsSliding)
            return !1;
        s.loopFix({
            direction: "prev"
        }),
        s._clientLeft = s.wrapperEl.clientLeft
    }
    const u = o ? s.translate : -s.translate;
    function p(h) {
        return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h)
    }
    const f = p(u)
      , m = r.map(h=>p(h));
    let w = r[m.indexOf(f) - 1];
    if (typeof w == "undefined" && n.cssMode) {
        let h;
        r.forEach((x,g)=>{
            f >= x && (h = g)
        }
        ),
        typeof h != "undefined" && (w = r[h > 0 ? h - 1 : h])
    }
    let T = 0;
    if (typeof w != "undefined" && (T = l.indexOf(w),
    T < 0 && (T = s.activeIndex - 1),
    n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (T = T - s.slidesPerViewDynamic("previous", !0) + 1,
    T = Math.max(T, 0))),
    n.rewind && s.isBeginning) {
        const h = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
        return s.slideTo(h, i, e, t)
    } else if (n.loop && s.activeIndex === 0 && n.cssMode)
        return requestAnimationFrame(()=>{
            s.slideTo(T, i, e, t)
        }
        ),
        !0;
    return s.slideTo(T, i, e, t)
}
function ht(i, e, t) {
    i === void 0 && (i = this.params.speed),
    e === void 0 && (e = !0);
    const s = this;
    return s.slideTo(s.activeIndex, i, e, t)
}
function gt(i, e, t, s) {
    i === void 0 && (i = this.params.speed),
    e === void 0 && (e = !0),
    s === void 0 && (s = .5);
    const n = this;
    let r = n.activeIndex;
    const l = Math.min(n.params.slidesPerGroupSkip, r)
      , o = l + Math.floor((r - l) / n.params.slidesPerGroup)
      , a = n.rtlTranslate ? n.translate : -n.translate;
    if (a >= n.snapGrid[o]) {
        const d = n.snapGrid[o]
          , c = n.snapGrid[o + 1];
        a - d > (c - d) * s && (r += n.params.slidesPerGroup)
    } else {
        const d = n.snapGrid[o - 1]
          , c = n.snapGrid[o];
        a - d <= (c - d) * s && (r -= n.params.slidesPerGroup)
    }
    return r = Math.max(r, 0),
    r = Math.min(r, n.slidesGrid.length - 1),
    n.slideTo(r, i, e, t)
}
function vt() {
    const i = this
      , {params: e, slidesEl: t} = i
      , s = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
    let n = i.clickedIndex, r;
    const l = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (i.animating)
            return;
        r = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
        e.centeredSlides ? n < i.loopedSlides - s / 2 || n > i.slides.length - i.loopedSlides + s / 2 ? (i.loopFix(),
        n = i.getSlideIndex(O(t, `${l}[data-swiper-slide-index="${r}"]`)[0]),
        q(()=>{
            i.slideTo(n)
        }
        )) : i.slideTo(n) : n > i.slides.length - s ? (i.loopFix(),
        n = i.getSlideIndex(O(t, `${l}[data-swiper-slide-index="${r}"]`)[0]),
        q(()=>{
            i.slideTo(n)
        }
        )) : i.slideTo(n)
    } else
        i.slideTo(n)
}
var wt = {
    slideTo: ft,
    slideToLoop: ut,
    slideNext: pt,
    slidePrev: mt,
    slideReset: ht,
    slideToClosest: gt,
    slideToClickedSlide: vt
};
function St(i) {
    const e = this
      , {params: t, slidesEl: s} = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
        return;
    const n = ()=>{
        O(s, `.${t.slideClass}, swiper-slide`).forEach((u,p)=>{
            u.setAttribute("data-swiper-slide-index", p)
        }
        )
    }
      , r = e.grid && t.grid && t.grid.rows > 1
      , l = t.slidesPerGroup * (r ? t.grid.rows : 1)
      , o = e.slides.length % l != 0
      , a = r && e.slides.length % t.grid.rows != 0
      , d = c=>{
        for (let u = 0; u < c; u += 1) {
            const p = e.isElement ? X("swiper-slide", [t.slideBlankClass]) : X("div", [t.slideClass, t.slideBlankClass]);
            e.slidesEl.append(p)
        }
    }
    ;
    if (o) {
        if (t.loopAddBlankSlides) {
            const c = l - e.slides.length % l;
            d(c),
            e.recalcSlides(),
            e.updateSlides()
        } else
            R("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        n()
    } else if (a) {
        if (t.loopAddBlankSlides) {
            const c = t.grid.rows - e.slides.length % t.grid.rows;
            d(c),
            e.recalcSlides(),
            e.updateSlides()
        } else
            R("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        n()
    } else
        n();
    e.loopFix({
        slideRealIndex: i,
        direction: t.centeredSlides ? void 0 : "next"
    })
}
function Tt(i) {
    let {slideRealIndex: e, slideTo: t=!0, direction: s, setTranslate: n, activeSlideIndex: r, byController: l, byMousewheel: o} = i === void 0 ? {} : i;
    const a = this;
    if (!a.params.loop)
        return;
    a.emit("beforeLoopFix");
    const {slides: d, allowSlidePrev: c, allowSlideNext: u, slidesEl: p, params: f} = a
      , {centeredSlides: m} = f;
    if (a.allowSlidePrev = !0,
    a.allowSlideNext = !0,
    a.virtual && f.virtual.enabled) {
        t && (!f.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : f.centeredSlides && a.snapIndex < f.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
        a.allowSlidePrev = c,
        a.allowSlideNext = u,
        a.emit("loopFix");
        return
    }
    let w = f.slidesPerView;
    w === "auto" ? w = a.slidesPerViewDynamic() : (w = Math.ceil(parseFloat(f.slidesPerView, 10)),
    m && w % 2 == 0 && (w = w + 1));
    const T = f.slidesPerGroupAuto ? w : f.slidesPerGroup;
    let h = T;
    h % T != 0 && (h += T - h % T),
    h += f.loopAdditionalSlides,
    a.loopedSlides = h;
    const x = a.grid && f.grid && f.grid.rows > 1;
    d.length < w + h ? R("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : x && f.grid.fill === "row" && R("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const g = []
      , v = [];
    let P = a.activeIndex;
    typeof r == "undefined" ? r = a.getSlideIndex(d.filter(b=>b.classList.contains(f.slideActiveClass))[0]) : P = r;
    const M = s === "next" || !s
      , V = s === "prev" || !s;
    let I = 0
      , F = 0;
    const S = x ? Math.ceil(d.length / f.grid.rows) : d.length
      , E = (x ? d[r].column : r) + (m && typeof n == "undefined" ? -w / 2 + .5 : 0);
    if (E < h) {
        I = Math.max(h - E, T);
        for (let b = 0; b < h - E; b += 1) {
            const C = b - Math.floor(b / S) * S;
            if (x) {
                const L = S - C - 1;
                for (let k = d.length - 1; k >= 0; k -= 1)
                    d[k].column === L && g.push(k)
            } else
                g.push(S - C - 1)
        }
    } else if (E + w > S - h) {
        F = Math.max(E - (S - h * 2), T);
        for (let b = 0; b < F; b += 1) {
            const C = b - Math.floor(b / S) * S;
            x ? d.forEach((L,k)=>{
                L.column === C && v.push(k)
            }
            ) : v.push(C)
        }
    }
    if (V && g.forEach(b=>{
        d[b].swiperLoopMoveDOM = !0,
        p.prepend(d[b]),
        d[b].swiperLoopMoveDOM = !1
    }
    ),
    M && v.forEach(b=>{
        d[b].swiperLoopMoveDOM = !0,
        p.append(d[b]),
        d[b].swiperLoopMoveDOM = !1
    }
    ),
    a.recalcSlides(),
    f.slidesPerView === "auto" ? a.updateSlides() : x && (g.length > 0 && V || v.length > 0 && M) && a.slides.forEach((b,C)=>{
        a.grid.updateSlide(C, b, a.slides)
    }
    ),
    f.watchSlidesProgress && a.updateSlidesOffset(),
    t) {
        if (g.length > 0 && V) {
            if (typeof e == "undefined") {
                const b = a.slidesGrid[P]
                  , L = a.slidesGrid[P + I] - b;
                o ? a.setTranslate(a.translate - L) : (a.slideTo(P + I, 0, !1, !0),
                n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - L,
                a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - L))
            } else if (n) {
                const b = x ? g.length / f.grid.rows : g.length;
                a.slideTo(a.activeIndex + b, 0, !1, !0),
                a.touchEventsData.currentTranslate = a.translate
            }
        } else if (v.length > 0 && M)
            if (typeof e == "undefined") {
                const b = a.slidesGrid[P]
                  , L = a.slidesGrid[P - F] - b;
                o ? a.setTranslate(a.translate - L) : (a.slideTo(P - F, 0, !1, !0),
                n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - L,
                a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - L))
            } else {
                const b = x ? v.length / f.grid.rows : v.length;
                a.slideTo(a.activeIndex - b, 0, !1, !0)
            }
    }
    if (a.allowSlidePrev = c,
    a.allowSlideNext = u,
    a.controller && a.controller.control && !l) {
        const b = {
            slideRealIndex: e,
            direction: s,
            setTranslate: n,
            activeSlideIndex: r,
            byController: !0
        };
        Array.isArray(a.controller.control) ? a.controller.control.forEach(C=>{
            !C.destroyed && C.params.loop && C.loopFix(j(W({}, b), {
                slideTo: C.params.slidesPerView === f.slidesPerView ? t : !1
            }))
        }
        ) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix(j(W({}, b), {
            slideTo: a.controller.control.params.slidesPerView === f.slidesPerView ? t : !1
        }))
    }
    a.emit("loopFix")
}
function xt() {
    const i = this
      , {params: e, slidesEl: t} = i;
    if (!e.loop || i.virtual && i.params.virtual.enabled)
        return;
    i.recalcSlides();
    const s = [];
    i.slides.forEach(n=>{
        const r = typeof n.swiperSlideIndex == "undefined" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
        s[r] = n
    }
    ),
    i.slides.forEach(n=>{
        n.removeAttribute("data-swiper-slide-index")
    }
    ),
    s.forEach(n=>{
        t.append(n)
    }
    ),
    i.recalcSlides(),
    i.slideTo(i.realIndex, 0)
}
var bt = {
    loopCreate: St,
    loopFix: Tt,
    loopDestroy: xt
};
function yt(i) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
        return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
    t.style.cursor = "move",
    t.style.cursor = i ? "grabbing" : "grab",
    e.isElement && requestAnimationFrame(()=>{
        e.__preventObserver__ = !1
    }
    )
}
function Et() {
    const i = this;
    i.params.watchOverflow && i.isLocked || i.params.cssMode || (i.isElement && (i.__preventObserver__ = !0),
    i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
    i.isElement && requestAnimationFrame(()=>{
        i.__preventObserver__ = !1
    }
    ))
}
var Pt = {
    setGrabCursor: yt,
    unsetGrabCursor: Et
};
function Mt(i, e) {
    e === void 0 && (e = this);
    function t(s) {
        if (!s || s === B() || s === z())
            return null;
        s.assignedSlot && (s = s.assignedSlot);
        const n = s.closest(i);
        return !n && !s.getRootNode ? null : n || t(s.getRootNode().host)
    }
    return t(e)
}
function me(i, e, t) {
    const s = z()
      , {params: n} = i
      , r = n.edgeSwipeDetection
      , l = n.edgeSwipeThreshold;
    return r && (t <= l || t >= s.innerWidth - l) ? r === "prevent" ? (e.preventDefault(),
    !0) : !1 : !0
}
function It(i) {
    const e = this
      , t = B();
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    const n = e.touchEventsData;
    if (s.type === "pointerdown") {
        if (n.pointerId !== null && n.pointerId !== s.pointerId)
            return;
        n.pointerId = s.pointerId
    } else
        s.type === "touchstart" && s.targetTouches.length === 1 && (n.touchId = s.targetTouches[0].identifier);
    if (s.type === "touchstart") {
        me(e, s, s.targetTouches[0].pageX);
        return
    }
    const {params: r, touches: l, enabled: o} = e;
    if (!o || !r.simulateTouch && s.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition)
        return;
    !e.animating && r.cssMode && r.loop && e.loopFix();
    let a = s.target;
    if (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(a) || "which"in s && s.which === 3 || "button"in s && s.button > 0 || n.isTouched && n.isMoved)
        return;
    const d = !!r.noSwipingClass && r.noSwipingClass !== ""
      , c = s.composedPath ? s.composedPath() : s.path;
    d && s.target && s.target.shadowRoot && c && (a = c[0]);
    const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`
      , p = !!(s.target && s.target.shadowRoot);
    if (r.noSwiping && (p ? Mt(u, a) : a.closest(u))) {
        e.allowClick = !0;
        return
    }
    if (r.swipeHandler && !a.closest(r.swipeHandler))
        return;
    l.currentX = s.pageX,
    l.currentY = s.pageY;
    const f = l.currentX
      , m = l.currentY;
    if (!me(e, s, f))
        return;
    Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    l.startX = f,
    l.startY = m,
    n.touchStartTime = N(),
    e.allowClick = !0,
    e.updateSize(),
    e.swipeDirection = void 0,
    r.threshold > 0 && (n.allowThresholdMove = !1);
    let w = !0;
    a.matches(n.focusableElements) && (w = !1,
    a.nodeName === "SELECT" && (n.isTouched = !1)),
    t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== a && t.activeElement.blur();
    const T = w && e.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || T) && !a.isContentEditable && s.preventDefault(),
    r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(),
    e.emit("touchStart", s)
}
function Ct(i) {
    const e = B()
      , t = this
      , s = t.touchEventsData
      , {params: n, touches: r, rtlTranslate: l, enabled: o} = t;
    if (!o || !n.simulateTouch && i.pointerType === "mouse")
        return;
    let a = i;
    if (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" && (s.touchId !== null || a.pointerId !== s.pointerId))
        return;
    let d;
    if (a.type === "touchmove") {
        if (d = [...a.changedTouches].filter(M=>M.identifier === s.touchId)[0],
        !d || d.identifier !== s.touchId)
            return
    } else
        d = a;
    if (!s.isTouched) {
        s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", a);
        return
    }
    const c = d.pageX
      , u = d.pageY;
    if (a.preventedByNestedSwiper) {
        r.startX = c,
        r.startY = u;
        return
    }
    if (!t.allowTouchMove) {
        a.target.matches(s.focusableElements) || (t.allowClick = !1),
        s.isTouched && (Object.assign(r, {
            startX: c,
            startY: u,
            currentX: c,
            currentY: u
        }),
        s.touchStartTime = N());
        return
    }
    if (n.touchReleaseOnEdges && !n.loop) {
        if (t.isVertical()) {
            if (u < r.startY && t.translate <= t.maxTranslate() || u > r.startY && t.translate >= t.minTranslate()) {
                s.isTouched = !1,
                s.isMoved = !1;
                return
            }
        } else if (c < r.startX && t.translate <= t.maxTranslate() || c > r.startX && t.translate >= t.minTranslate())
            return
    }
    if (e.activeElement && a.target === e.activeElement && a.target.matches(s.focusableElements)) {
        s.isMoved = !0,
        t.allowClick = !1;
        return
    }
    s.allowTouchCallbacks && t.emit("touchMove", a),
    r.previousX = r.currentX,
    r.previousY = r.currentY,
    r.currentX = c,
    r.currentY = u;
    const p = r.currentX - r.startX
      , f = r.currentY - r.startY;
    if (t.params.threshold && Math.sqrt(p ** 2 + f ** 2) < t.params.threshold)
        return;
    if (typeof s.isScrolling == "undefined") {
        let M;
        t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : p * p + f * f >= 25 && (M = Math.atan2(Math.abs(f), Math.abs(p)) * 180 / Math.PI,
        s.isScrolling = t.isHorizontal() ? M > n.touchAngle : 90 - M > n.touchAngle)
    }
    if (s.isScrolling && t.emit("touchMoveOpposite", a),
    typeof s.startMoving == "undefined" && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0),
    s.isScrolling || t.zoom && t.params.zoom && t.params.zoom.enabled) {
        s.isTouched = !1;
        return
    }
    if (!s.startMoving)
        return;
    t.allowClick = !1,
    !n.cssMode && a.cancelable && a.preventDefault(),
    n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
    let m = t.isHorizontal() ? p : f
      , w = t.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
    n.oneWayMovement && (m = Math.abs(m) * (l ? 1 : -1),
    w = Math.abs(w) * (l ? 1 : -1)),
    r.diff = m,
    m *= n.touchRatio,
    l && (m = -m,
    w = -w);
    const T = t.touchesDirection;
    t.swipeDirection = m > 0 ? "prev" : "next",
    t.touchesDirection = w > 0 ? "prev" : "next";
    const h = t.params.loop && !n.cssMode
      , x = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!s.isMoved) {
        if (h && x && t.loopFix({
            direction: t.swipeDirection
        }),
        s.startTranslate = t.getTranslate(),
        t.setTransition(0),
        t.animating) {
            const M = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0
            });
            t.wrapperEl.dispatchEvent(M)
        }
        s.allowMomentumBounce = !1,
        n.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0),
        t.emit("sliderFirstMove", a)
    }
    let g;
    if (new Date().getTime(),
    s.isMoved && s.allowThresholdMove && T !== t.touchesDirection && h && x && Math.abs(m) >= 1) {
        Object.assign(r, {
            startX: c,
            startY: u,
            currentX: c,
            currentY: u,
            startTranslate: s.currentTranslate
        }),
        s.loopSwapReset = !0,
        s.startTranslate = s.currentTranslate;
        return
    }
    t.emit("sliderMove", a),
    s.isMoved = !0,
    s.currentTranslate = m + s.startTranslate;
    let v = !0
      , P = n.resistanceRatio;
    if (n.touchReleaseOnEdges && (P = 0),
    m > 0 ? (h && x && !g && s.allowThresholdMove && s.currentTranslate > (n.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    s.currentTranslate > t.minTranslate() && (v = !1,
    n.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + m) ** P))) : m < 0 && (h && x && !g && s.allowThresholdMove && s.currentTranslate < (n.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: t.slides.length - (n.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
    }),
    s.currentTranslate < t.maxTranslate() && (v = !1,
    n.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - m) ** P))),
    v && (a.preventedByNestedSwiper = !0),
    !t.allowSlideNext && t.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
    !t.allowSlidePrev && t.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
    !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = s.startTranslate),
    n.threshold > 0)
        if (Math.abs(m) > n.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
                s.allowThresholdMove = !0,
                r.startX = r.currentX,
                r.startY = r.currentY,
                s.currentTranslate = s.startTranslate,
                r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                return
            }
        } else {
            s.currentTranslate = s.startTranslate;
            return
        }
    !n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && t.freeMode || n.watchSlidesProgress) && (t.updateActiveIndex(),
    t.updateSlidesClasses()),
    n.freeMode && n.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
    t.updateProgress(s.currentTranslate),
    t.setTranslate(s.currentTranslate))
}
function Lt(i) {
    const e = this
      , t = e.touchEventsData;
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    let n;
    if (s.type === "touchend" || s.type === "touchcancel") {
        if (n = [...s.changedTouches].filter(v=>v.identifier === t.touchId)[0],
        !n || n.identifier !== t.touchId)
            return
    } else {
        if (t.touchId !== null || s.pointerId !== t.pointerId)
            return;
        n = s
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView)))
        return;
    t.pointerId = null,
    t.touchId = null;
    const {params: l, touches: o, rtlTranslate: a, slidesGrid: d, enabled: c} = e;
    if (!c || !l.simulateTouch && s.pointerType === "mouse")
        return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", s),
    t.allowTouchCallbacks = !1,
    !t.isTouched) {
        t.isMoved && l.grabCursor && e.setGrabCursor(!1),
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    l.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const u = N()
      , p = u - t.touchStartTime;
    if (e.allowClick) {
        const v = s.path || s.composedPath && s.composedPath();
        e.updateClickedSlide(v && v[0] || s.target, v),
        e.emit("tap click", s),
        p < 300 && u - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", s)
    }
    if (t.lastClickTime = N(),
    q(()=>{
        e.destroyed || (e.allowClick = !0)
    }
    ),
    !t.isTouched || !t.isMoved || !e.swipeDirection || o.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
        t.isTouched = !1,
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    t.isTouched = !1,
    t.isMoved = !1,
    t.startMoving = !1;
    let f;
    if (l.followFinger ? f = a ? e.translate : -e.translate : f = -t.currentTranslate,
    l.cssMode)
        return;
    if (l.freeMode && l.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: f
        });
        return
    }
    let m = 0
      , w = e.slidesSizesGrid[0];
    for (let v = 0; v < d.length; v += v < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
        const P = v < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
        typeof d[v + P] != "undefined" ? f >= d[v] && f < d[v + P] && (m = v,
        w = d[v + P] - d[v]) : f >= d[v] && (m = v,
        w = d[d.length - 1] - d[d.length - 2])
    }
    let T = null
      , h = null;
    l.rewind && (e.isBeginning ? h = l.virtual && l.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (T = 0));
    const x = (f - d[m]) / w
      , g = m < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
    if (p > l.longSwipesMs) {
        if (!l.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (x >= l.longSwipesRatio ? e.slideTo(l.rewind && e.isEnd ? T : m + g) : e.slideTo(m)),
        e.swipeDirection === "prev" && (x > 1 - l.longSwipesRatio ? e.slideTo(m + g) : h !== null && x < 0 && Math.abs(x) > l.longSwipesRatio ? e.slideTo(h) : e.slideTo(m))
    } else {
        if (!l.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(m + g) : e.slideTo(m) : (e.swipeDirection === "next" && e.slideTo(T !== null ? T : m + g),
        e.swipeDirection === "prev" && e.slideTo(h !== null ? h : m))
    }
}
function he() {
    const i = this
      , {params: e, el: t} = i;
    if (t && t.offsetWidth === 0)
        return;
    e.breakpoints && i.setBreakpoint();
    const {allowSlideNext: s, allowSlidePrev: n, snapGrid: r} = i
      , l = i.virtual && i.params.virtual.enabled;
    i.allowSlideNext = !0,
    i.allowSlidePrev = !0,
    i.updateSize(),
    i.updateSlides(),
    i.updateSlidesClasses();
    const o = l && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !o ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.params.loop && !l ? i.slideToLoop(i.realIndex, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0),
    i.autoplay && i.autoplay.running && i.autoplay.paused && (clearTimeout(i.autoplay.resizeTimeout),
    i.autoplay.resizeTimeout = setTimeout(()=>{
        i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume()
    }
    , 500)),
    i.allowSlidePrev = n,
    i.allowSlideNext = s,
    i.params.watchOverflow && r !== i.snapGrid && i.checkOverflow()
}
function zt(i) {
    const e = this;
    !e.enabled || e.allowClick || (e.params.preventClicks && i.preventDefault(),
    e.params.preventClicksPropagation && e.animating && (i.stopPropagation(),
    i.stopImmediatePropagation()))
}
function At() {
    const i = this
      , {wrapperEl: e, rtlTranslate: t, enabled: s} = i;
    if (!s)
        return;
    i.previousTranslate = i.translate,
    i.isHorizontal() ? i.translate = -e.scrollLeft : i.translate = -e.scrollTop,
    i.translate === 0 && (i.translate = 0),
    i.updateActiveIndex(),
    i.updateSlidesClasses();
    let n;
    const r = i.maxTranslate() - i.minTranslate();
    r === 0 ? n = 0 : n = (i.translate - i.minTranslate()) / r,
    n !== i.progress && i.updateProgress(t ? -i.translate : i.translate),
    i.emit("setTranslate", i.translate, !1)
}
function Ot(i) {
    const e = this;
    H(e, i.target),
    !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}
function Gt() {
    const i = this;
    i.documentTouchHandlerProceeded || (i.documentTouchHandlerProceeded = !0,
    i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"))
}
const ge = (i,e)=>{
    const t = B()
      , {params: s, el: n, wrapperEl: r, device: l} = i
      , o = !!s.nested
      , a = e === "on" ? "addEventListener" : "removeEventListener"
      , d = e;
    t[a]("touchstart", i.onDocumentTouchStart, {
        passive: !1,
        capture: o
    }),
    n[a]("touchstart", i.onTouchStart, {
        passive: !1
    }),
    n[a]("pointerdown", i.onTouchStart, {
        passive: !1
    }),
    t[a]("touchmove", i.onTouchMove, {
        passive: !1,
        capture: o
    }),
    t[a]("pointermove", i.onTouchMove, {
        passive: !1,
        capture: o
    }),
    t[a]("touchend", i.onTouchEnd, {
        passive: !0
    }),
    t[a]("pointerup", i.onTouchEnd, {
        passive: !0
    }),
    t[a]("pointercancel", i.onTouchEnd, {
        passive: !0
    }),
    t[a]("touchcancel", i.onTouchEnd, {
        passive: !0
    }),
    t[a]("pointerout", i.onTouchEnd, {
        passive: !0
    }),
    t[a]("pointerleave", i.onTouchEnd, {
        passive: !0
    }),
    t[a]("contextmenu", i.onTouchEnd, {
        passive: !0
    }),
    (s.preventClicks || s.preventClicksPropagation) && n[a]("click", i.onClick, !0),
    s.cssMode && r[a]("scroll", i.onScroll),
    s.updateOnWindowResize ? i[d](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", he, !0) : i[d]("observerUpdate", he, !0),
    n[a]("load", i.onLoad, {
        capture: !0
    })
}
;
function kt() {
    const i = this
      , {params: e} = i;
    i.onTouchStart = It.bind(i),
    i.onTouchMove = Ct.bind(i),
    i.onTouchEnd = Lt.bind(i),
    i.onDocumentTouchStart = Gt.bind(i),
    e.cssMode && (i.onScroll = At.bind(i)),
    i.onClick = zt.bind(i),
    i.onLoad = Ot.bind(i),
    ge(i, "on")
}
function Dt() {
    ge(this, "off")
}
var Vt = {
    attachEvents: kt,
    detachEvents: Dt
};
const ve = (i,e)=>i.grid && e.grid && e.grid.rows > 1;
function Ft() {
    const i = this
      , {realIndex: e, initialized: t, params: s, el: n} = i
      , r = s.breakpoints;
    if (!r || r && Object.keys(r).length === 0)
        return;
    const l = i.getBreakpoint(r, i.params.breakpointsBase, i.el);
    if (!l || i.currentBreakpoint === l)
        return;
    const a = (l in r ? r[l] : void 0) || i.originalParams
      , d = ve(i, s)
      , c = ve(i, a)
      , u = s.enabled;
    d && !c ? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`),
    i.emitContainerClasses()) : !d && c && (n.classList.add(`${s.containerModifierClass}grid`),
    (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && s.grid.fill === "column") && n.classList.add(`${s.containerModifierClass}grid-column`),
    i.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach(h=>{
        if (typeof a[h] == "undefined")
            return;
        const x = s[h] && s[h].enabled
          , g = a[h] && a[h].enabled;
        x && !g && i[h].disable(),
        !x && g && i[h].enable()
    }
    );
    const p = a.direction && a.direction !== s.direction
      , f = s.loop && (a.slidesPerView !== s.slidesPerView || p)
      , m = s.loop;
    p && t && i.changeDirection(),
    A(i.params, a);
    const w = i.params.enabled
      , T = i.params.loop;
    Object.assign(i, {
        allowTouchMove: i.params.allowTouchMove,
        allowSlideNext: i.params.allowSlideNext,
        allowSlidePrev: i.params.allowSlidePrev
    }),
    u && !w ? i.disable() : !u && w && i.enable(),
    i.currentBreakpoint = l,
    i.emit("_beforeBreakpoint", a),
    t && (f ? (i.loopDestroy(),
    i.loopCreate(e),
    i.updateSlides()) : !m && T ? (i.loopCreate(e),
    i.updateSlides()) : m && !T && i.loopDestroy()),
    i.emit("breakpoint", a)
}
function Bt(i, e, t) {
    if (e === void 0 && (e = "window"),
    !i || e === "container" && !t)
        return;
    let s = !1;
    const n = z()
      , r = e === "window" ? n.innerHeight : t.clientHeight
      , l = Object.keys(i).map(o=>{
        if (typeof o == "string" && o.indexOf("@") === 0) {
            const a = parseFloat(o.substr(1));
            return {
                value: r * a,
                point: o
            }
        }
        return {
            value: o,
            point: o
        }
    }
    );
    l.sort((o,a)=>parseInt(o.value, 10) - parseInt(a.value, 10));
    for (let o = 0; o < l.length; o += 1) {
        const {point: a, value: d} = l[o];
        e === "window" ? n.matchMedia(`(min-width: ${d}px)`).matches && (s = a) : d <= t.clientWidth && (s = a)
    }
    return s || "max"
}
var Nt = {
    setBreakpoint: Ft,
    getBreakpoint: Bt
};
function $t(i, e) {
    const t = [];
    return i.forEach(s=>{
        typeof s == "object" ? Object.keys(s).forEach(n=>{
            s[n] && t.push(e + n)
        }
        ) : typeof s == "string" && t.push(e + s)
    }
    ),
    t
}
function _t() {
    const i = this
      , {classNames: e, params: t, rtl: s, el: n, device: r} = i
      , l = $t(["initialized", t.direction, {
        "free-mode": i.params.freeMode && t.freeMode.enabled
    }, {
        autoheight: t.autoHeight
    }, {
        rtl: s
    }, {
        grid: t.grid && t.grid.rows > 1
    }, {
        "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
    }, {
        android: r.android
    }, {
        ios: r.ios
    }, {
        "css-mode": t.cssMode
    }, {
        centered: t.cssMode && t.centeredSlides
    }, {
        "watch-progress": t.watchSlidesProgress
    }], t.containerModifierClass);
    e.push(...l),
    n.classList.add(...e),
    i.emitContainerClasses()
}
function Rt() {
    const i = this
      , {el: e, classNames: t} = i;
    e.classList.remove(...t),
    i.emitContainerClasses()
}
var Ht = {
    addClasses: _t,
    removeClasses: Rt
};
function Wt() {
    const i = this
      , {isLocked: e, params: t} = i
      , {slidesOffsetBefore: s} = t;
    if (s) {
        const n = i.slides.length - 1
          , r = i.slidesGrid[n] + i.slidesSizesGrid[n] + s * 2;
        i.isLocked = i.size > r
    } else
        i.isLocked = i.snapGrid.length === 1;
    t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked),
    t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked),
    e && e !== i.isLocked && (i.isEnd = !1),
    e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock")
}
var jt = {
    checkOverflow: Wt
}
  , we = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function Yt(i, e) {
    return function(s) {
        s === void 0 && (s = {});
        const n = Object.keys(s)[0]
          , r = s[n];
        if (typeof r != "object" || r === null) {
            A(e, s);
            return
        }
        if (i[n] === !0 && (i[n] = {
            enabled: !0
        }),
        n === "navigation" && i[n] && i[n].enabled && !i[n].prevEl && !i[n].nextEl && (i[n].auto = !0),
        ["pagination", "scrollbar"].indexOf(n) >= 0 && i[n] && i[n].enabled && !i[n].el && (i[n].auto = !0),
        !(n in i && "enabled"in r)) {
            A(e, s);
            return
        }
        typeof i[n] == "object" && !("enabled"in i[n]) && (i[n].enabled = !0),
        i[n] || (i[n] = {
            enabled: !1
        }),
        A(e, s)
    }
}
const ee = {
    eventsEmitter: He,
    update: et,
    translate: at,
    transition: ct,
    slide: wt,
    loop: bt,
    grabCursor: Pt,
    events: Vt,
    breakpoints: Nt,
    checkOverflow: jt,
    classes: Ht
}
  , te = {};
class G {
    constructor() {
        let e, t;
        for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++)
            n[r] = arguments[r];
        n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === "Object" ? t = n[0] : [e,t] = n,
        t || (t = {}),
        t = A({}, t),
        e && !t.el && (t.el = e);
        const l = B();
        if (t.el && typeof t.el == "string" && l.querySelectorAll(t.el).length > 1) {
            const c = [];
            return l.querySelectorAll(t.el).forEach(u=>{
                const p = A({}, t, {
                    el: u
                });
                c.push(new G(p))
            }
            ),
            c
        }
        const o = this;
        o.__swiper__ = !0,
        o.support = ue(),
        o.device = Be({
            userAgent: t.userAgent
        }),
        o.browser = $e(),
        o.eventsListeners = {},
        o.eventsAnyListeners = [],
        o.modules = [...o.__modules__],
        t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
        const a = {};
        o.modules.forEach(c=>{
            c({
                params: t,
                swiper: o,
                extendParams: Yt(t, a),
                on: o.on.bind(o),
                once: o.once.bind(o),
                off: o.off.bind(o),
                emit: o.emit.bind(o)
            })
        }
        );
        const d = A({}, we, a);
        return o.params = A({}, d, te, t),
        o.originalParams = A({}, o.params),
        o.passedParams = A({}, t),
        o.params && o.params.on && Object.keys(o.params.on).forEach(c=>{
            o.on(c, o.params.on[c])
        }
        ),
        o.params && o.params.onAny && o.onAny(o.params.onAny),
        Object.assign(o, {
            enabled: o.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return o.params.direction === "horizontal"
            },
            isVertical() {
                return o.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: o.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: o.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }),
        o.emit("_swiper"),
        o.params.init && o.init(),
        o
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[e]
    }
    getSlideIndex(e) {
        const {slidesEl: t, params: s} = this
          , n = O(t, `.${s.slideClass}, swiper-slide`)
          , r = ce(n[0]);
        return ce(e) - r
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides() {
        const e = this
          , {slidesEl: t, params: s} = e;
        e.slides = O(t, `.${s.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0,
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"))
    }
    disable() {
        const e = this;
        !e.enabled || (e.enabled = !1,
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"))
    }
    setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = s.minTranslate()
          , l = (s.maxTranslate() - n) * e + n;
        s.translateTo(l, typeof t == "undefined" ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = e.el.className.split(" ").filter(s=>s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", t.join(" "))
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(s=>s.indexOf("swiper-slide") === 0 || s.indexOf(t.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = [];
        e.slides.forEach(s=>{
            const n = e.getSlideClasses(s);
            t.push({
                slideEl: s,
                classNames: n
            }),
            e.emit("_slideClass", s, n)
        }
        ),
        e.emit("_slideClasses", t)
    }
    slidesPerViewDynamic(e, t) {
        e === void 0 && (e = "current"),
        t === void 0 && (t = !1);
        const s = this
          , {params: n, slides: r, slidesGrid: l, slidesSizesGrid: o, size: a, activeIndex: d} = s;
        let c = 1;
        if (typeof n.slidesPerView == "number")
            return n.slidesPerView;
        if (n.centeredSlides) {
            let u = r[d] ? r[d].swiperSlideSize : 0, p;
            for (let f = d + 1; f < r.length; f += 1)
                r[f] && !p && (u += r[f].swiperSlideSize,
                c += 1,
                u > a && (p = !0));
            for (let f = d - 1; f >= 0; f -= 1)
                r[f] && !p && (u += r[f].swiperSlideSize,
                c += 1,
                u > a && (p = !0))
        } else if (e === "current")
            for (let u = d + 1; u < r.length; u += 1)
                (t ? l[u] + o[u] - l[d] < a : l[u] - l[d] < a) && (c += 1);
        else
            for (let u = d - 1; u >= 0; u -= 1)
                l[d] - l[u] < a && (c += 1);
        return c
    }
    update() {
        const e = this;
        if (!e || e.destroyed)
            return;
        const {snapGrid: t, params: s} = e;
        s.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach(l=>{
            l.complete && H(e, l)
        }
        ),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
        function n() {
            const l = e.rtlTranslate ? e.translate * -1 : e.translate
              , o = Math.min(Math.max(l, e.maxTranslate()), e.minTranslate());
            e.setTranslate(o),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        let r;
        if (s.freeMode && s.freeMode.enabled && !s.cssMode)
            n(),
            s.autoHeight && e.updateAutoHeight();
        else {
            if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                const l = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                r = e.slideTo(l.length - 1, 0, !1, !0)
            } else
                r = e.slideTo(e.activeIndex, 0, !1, !0);
            r || n()
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update")
    }
    changeDirection(e, t) {
        t === void 0 && (t = !0);
        const s = this
          , n = s.params.direction;
        return e || (e = n === "horizontal" ? "vertical" : "horizontal"),
        e === n || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${n}`),
        s.el.classList.add(`${s.params.containerModifierClass}${e}`),
        s.emitContainerClasses(),
        s.params.direction = e,
        s.slides.forEach(r=>{
            e === "vertical" ? r.style.width = "" : r.style.height = ""
        }
        ),
        s.emit("changeDirection"),
        t && s.update()),
        s
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl",
        t.rtlTranslate = t.params.direction === "horizontal" && t.rtl,
        t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "ltr"),
        t.update())
    }
    mount(e) {
        const t = this;
        if (t.mounted)
            return !0;
        let s = e || t.params.el;
        if (typeof s == "string" && (s = document.querySelector(s)),
        !s)
            return !1;
        s.swiper = t,
        s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === "SWIPER-CONTAINER" && (t.isElement = !0);
        const n = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let l = (()=>s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : O(s, n())[0])();
        return !l && t.params.createElements && (l = X("div", t.params.wrapperClass),
        s.append(l),
        O(s, `.${t.params.slideClass}`).forEach(o=>{
            l.append(o)
        }
        )),
        Object.assign(t, {
            el: s,
            wrapperEl: l,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : l,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: s.dir.toLowerCase() === "rtl" || D(s, "direction") === "rtl",
            rtlTranslate: t.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || D(s, "direction") === "rtl"),
            wrongRTL: D(l, "display") === "-webkit-box"
        }),
        !0
    }
    init(e) {
        const t = this;
        if (t.initialized || t.mount(e) === !1)
            return t;
        t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
        t.params.loop && t.loopCreate(),
        t.attachEvents();
        const n = [...t.el.querySelectorAll('[loading="lazy"]')];
        return t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        n.forEach(r=>{
            r.complete ? H(t, r) : r.addEventListener("load", l=>{
                H(t, l.target)
            }
            )
        }
        ),
        Z(t),
        t.initialized = !0,
        Z(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
    }
    destroy(e, t) {
        e === void 0 && (e = !0),
        t === void 0 && (t = !0);
        const s = this
          , {params: n, el: r, wrapperEl: l, slides: o} = s;
        return typeof s.params == "undefined" || s.destroyed || (s.emit("beforeDestroy"),
        s.initialized = !1,
        s.detachEvents(),
        n.loop && s.loopDestroy(),
        t && (s.removeClasses(),
        r.removeAttribute("style"),
        l.removeAttribute("style"),
        o && o.length && o.forEach(a=>{
            a.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass),
            a.removeAttribute("style"),
            a.removeAttribute("data-swiper-slide-index")
        }
        )),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach(a=>{
            s.off(a)
        }
        ),
        e !== !1 && (s.el.swiper = null,
        Le(s)),
        s.destroyed = !0),
        null
    }
    static extendDefaults(e) {
        A(te, e)
    }
    static get extendedDefaults() {
        return te
    }
    static get defaults() {
        return we
    }
    static installModule(e) {
        G.prototype.__modules__ || (G.prototype.__modules__ = []);
        const t = G.prototype.__modules__;
        typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(t=>G.installModule(t)),
        G) : (G.installModule(e),
        G)
    }
}
Object.keys(ee).forEach(i=>{
    Object.keys(ee[i]).forEach(e=>{
        G.prototype[e] = ee[i][e]
    }
    )
}
);
G.use([_e, Re]);
function Xt(i) {
    let {swiper: e, extendParams: t, on: s} = i;
    t({
        parallax: {
            enabled: !1
        }
    });
    const n = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
      , r = (a,d)=>{
        const {rtl: c} = e
          , u = c ? -1 : 1
          , p = a.getAttribute("data-swiper-parallax") || "0";
        let f = a.getAttribute("data-swiper-parallax-x")
          , m = a.getAttribute("data-swiper-parallax-y");
        const w = a.getAttribute("data-swiper-parallax-scale")
          , T = a.getAttribute("data-swiper-parallax-opacity")
          , h = a.getAttribute("data-swiper-parallax-rotate");
        if (f || m ? (f = f || "0",
        m = m || "0") : e.isHorizontal() ? (f = p,
        m = "0") : (m = p,
        f = "0"),
        f.indexOf("%") >= 0 ? f = `${parseInt(f, 10) * d * u}%` : f = `${f * d * u}px`,
        m.indexOf("%") >= 0 ? m = `${parseInt(m, 10) * d}%` : m = `${m * d}px`,
        typeof T != "undefined" && T !== null) {
            const g = T - (T - 1) * (1 - Math.abs(d));
            a.style.opacity = g
        }
        let x = `translate3d(${f}, ${m}, 0px)`;
        typeof w != "undefined" && w !== null && (x += ` scale(${w - (w - 1) * (1 - Math.abs(d))})`),
        h && typeof h != "undefined" && h !== null && (x += ` rotate(${h * d * -1}deg)`),
        a.style.transform = x
    }
      , l = ()=>{
        const {el: a, slides: d, progress: c, snapGrid: u, isElement: p} = e
          , f = O(a, n);
        e.isElement && f.push(...O(e.hostEl, n)),
        f.forEach(m=>{
            r(m, c)
        }
        ),
        d.forEach((m,w)=>{
            let T = m.progress;
            e.params.slidesPerGroup > 1 && e.params.slidesPerView !== "auto" && (T += Math.ceil(w / 2) - c * (u.length - 1)),
            T = Math.min(Math.max(T, -1), 1),
            m.querySelectorAll(`${n}, [data-swiper-parallax-rotate]`).forEach(h=>{
                r(h, T)
            }
            )
        }
        )
    }
      , o = function(a) {
        a === void 0 && (a = e.params.speed);
        const {el: d, hostEl: c} = e
          , u = [...d.querySelectorAll(n)];
        e.isElement && u.push(...c.querySelectorAll(n)),
        u.forEach(p=>{
            let f = parseInt(p.getAttribute("data-swiper-parallax-duration"), 10) || a;
            a === 0 && (f = 0),
            p.style.transitionDuration = `${f}ms`
        }
        )
    };
    s("beforeInit", ()=>{
        !e.params.parallax.enabled || (e.params.watchSlidesProgress = !0,
        e.originalParams.watchSlidesProgress = !0)
    }
    ),
    s("init", ()=>{
        !e.params.parallax.enabled || l()
    }
    ),
    s("setTranslate", ()=>{
        !e.params.parallax.enabled || l()
    }
    ),
    s("setTransition", (a,d)=>{
        !e.params.parallax.enabled || o(d)
    }
    )
}
export {Xt as P, G as S};
