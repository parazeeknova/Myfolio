(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
        s(n);
    new MutationObserver(n=>{
        for (const r of n)
            if (r.type === "childList")
                for (const l of r.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && s(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function i(n) {
        const r = {};
        return n.integrity && (r.integrity = n.integrity),
        n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
        n.crossOrigin === "use-credentials" ? r.credentials = "include" : n.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function s(n) {
        if (n.ep)
            return;
        n.ep = !0;
        const r = i(n);
        fetch(n.href, r)
    }
}
)();
function ae(t) {
    return t !== null && typeof t == "object" && "constructor"in t && t.constructor === Object
}
function se(t, e) {
    t === void 0 && (t = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach(i=>{
        typeof t[i] > "u" ? t[i] = e[i] : ae(e[i]) && ae(t[i]) && Object.keys(e[i]).length > 0 && se(t[i], e[i])
    }
    )
}
const pe = {
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
function N() {
    const t = typeof document < "u" ? document : {};
    return se(t, pe),
    t
}
const Te = {
    document: pe,
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
    requestAnimationFrame(t) {
        return typeof setTimeout > "u" ? (t(),
        null) : setTimeout(t, 0)
    },
    cancelAnimationFrame(t) {
        typeof setTimeout > "u" || clearTimeout(t)
    }
};
function k() {
    const t = typeof window < "u" ? window : {};
    return se(t, Te),
    t
}
function xe(t) {
    return t === void 0 && (t = ""),
    t.trim().split(" ").filter(e=>!!e.trim())
}
function ye(t) {
    const e = t;
    Object.keys(e).forEach(i=>{
        try {
            e[i] = null
        } catch {}
        try {
            delete e[i]
        } catch {}
    }
    )
}
function ee(t, e) {
    return e === void 0 && (e = 0),
    setTimeout(t, e)
}
function j() {
    return Date.now()
}
function be(t) {
    const e = k();
    let i;
    return e.getComputedStyle && (i = e.getComputedStyle(t, null)),
    !i && t.currentStyle && (i = t.currentStyle),
    i || (i = t.style),
    i
}
function Ee(t, e) {
    e === void 0 && (e = "x");
    const i = k();
    let s, n, r;
    const l = be(t);
    return i.WebKitCSSMatrix ? (n = l.transform || l.webkitTransform,
    n.split(",").length > 6 && (n = n.split(", ").map(o=>o.replace(",", ".")).join(", ")),
    r = new i.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    s = r.toString().split(",")),
    e === "x" && (i.WebKitCSSMatrix ? n = r.m41 : s.length === 16 ? n = parseFloat(s[12]) : n = parseFloat(s[4])),
    e === "y" && (i.WebKitCSSMatrix ? n = r.m42 : s.length === 16 ? n = parseFloat(s[13]) : n = parseFloat(s[5])),
    n || 0
}
function $(t) {
    return typeof t == "object" && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object"
}
function Me(t) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? t instanceof HTMLElement : t && (t.nodeType === 1 || t.nodeType === 11)
}
function G() {
    const t = Object(arguments.length <= 0 ? void 0 : arguments[0])
      , e = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
        const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (s != null && !Me(s)) {
            const n = Object.keys(Object(s)).filter(r=>e.indexOf(r) < 0);
            for (let r = 0, l = n.length; r < l; r += 1) {
                const o = n[r]
                  , a = Object.getOwnPropertyDescriptor(s, o);
                a !== void 0 && a.enumerable && ($(t[o]) && $(s[o]) ? s[o].__swiper__ ? t[o] = s[o] : G(t[o], s[o]) : !$(t[o]) && $(s[o]) ? (t[o] = {},
                s[o].__swiper__ ? t[o] = s[o] : G(t[o], s[o])) : t[o] = s[o])
            }
        }
    }
    return t
}
function H(t, e, i) {
    t.style.setProperty(e, i)
}
function me(t) {
    let {swiper: e, targetPosition: i, side: s} = t;
    const n = k()
      , r = -e.translate;
    let l = null, o;
    const a = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none",
    n.cancelAnimationFrame(e.cssModeFrameID);
    const d = i > r ? "next" : "prev"
      , c = (p,u)=>d === "next" && p >= u || d === "prev" && p <= u
      , f = ()=>{
        o = new Date().getTime(),
        l === null && (l = o);
        const p = Math.max(Math.min((o - l) / a, 1), 0)
          , u = .5 - Math.cos(p * Math.PI) / 2;
        let m = r + u * (i - r);
        if (c(m, i) && (m = i),
        e.wrapperEl.scrollTo({
            [s]: m
        }),
        c(m, i)) {
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
        e.cssModeFrameID = n.requestAnimationFrame(f)
    }
    ;
    f()
}
function V(t, e) {
    return e === void 0 && (e = ""),
    [...t.children].filter(i=>i.matches(e))
}
function q(t) {
    try {
        console.warn(t);
        return
    } catch {}
}
function te(t, e) {
    e === void 0 && (e = []);
    const i = document.createElement(t);
    return i.classList.add(...Array.isArray(e) ? e : xe(e)),
    i
}
function Pe(t, e) {
    const i = [];
    for (; t.previousElementSibling; ) {
        const s = t.previousElementSibling;
        e ? s.matches(e) && i.push(s) : i.push(s),
        t = s
    }
    return i
}
function Ie(t, e) {
    const i = [];
    for (; t.nextElementSibling; ) {
        const s = t.nextElementSibling;
        e ? s.matches(e) && i.push(s) : i.push(s),
        t = s
    }
    return i
}
function _(t, e) {
    return k().getComputedStyle(t, null).getPropertyValue(e)
}
function le(t) {
    let e = t, i;
    if (e) {
        for (i = 0; (e = e.previousSibling) !== null; )
            e.nodeType === 1 && (i += 1);
        return i
    }
}
function Ce(t, e) {
    const i = [];
    let s = t.parentElement;
    for (; s; )
        e ? s.matches(e) && i.push(s) : i.push(s),
        s = s.parentElement;
    return i
}
function oe(t, e, i) {
    const s = k();
    return i ? t[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : t.offsetWidth
}
let X;
function Le() {
    const t = k()
      , e = N();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior"in e.documentElement.style,
        touch: !!("ontouchstart"in t || t.DocumentTouch && e instanceof t.DocumentTouch)
    }
}
function he() {
    return X || (X = Le()),
    X
}
let K;
function Oe(t) {
    let {userAgent: e} = t === void 0 ? {} : t;
    const i = he()
      , s = k()
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
    const f = r.match(/(iPod)(.*OS\s([\d_]+))?/)
      , p = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , u = n === "Win32";
    let m = n === "MacIntel";
    const v = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !c && m && i.touch && v.indexOf(`${o}x${a}`) >= 0 && (c = r.match(/(Version)\/([\d.]+)/),
    c || (c = [0, 1, "13_0_0"]),
    m = !1),
    d && !u && (l.os = "android",
    l.android = !0),
    (c || p || f) && (l.os = "ios",
    l.ios = !0),
    l
}
function ze(t) {
    return t === void 0 && (t = {}),
    K || (K = Oe(t)),
    K
}
let U;
function Ae() {
    const t = k();
    let e = !1;
    function i() {
        const s = t.navigator.userAgent.toLowerCase();
        return s.indexOf("safari") >= 0 && s.indexOf("chrome") < 0 && s.indexOf("android") < 0
    }
    if (i()) {
        const s = String(t.navigator.userAgent);
        if (s.includes("Version/")) {
            const [n,r] = s.split("Version/")[1].split(" ")[0].split(".").map(l=>Number(l));
            e = n < 16 || n === 16 && r < 2
        }
    }
    return {
        isSafari: e || i(),
        needPerspectiveFix: e,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
    }
}
function Ge() {
    return U || (U = Ae()),
    U
}
function ke(t) {
    let {swiper: e, on: i, emit: s} = t;
    const n = k();
    let r = null
      , l = null;
    const o = ()=>{
        !e || e.destroyed || !e.initialized || (s("beforeResize"),
        s("resize"))
    }
      , a = ()=>{
        !e || e.destroyed || !e.initialized || (r = new ResizeObserver(f=>{
            l = n.requestAnimationFrame(()=>{
                const {width: p, height: u} = e;
                let m = p
                  , v = u;
                f.forEach(y=>{
                    let {contentBoxSize: g, contentRect: E, target: S} = y;
                    S && S !== e.el || (m = E ? E.width : (g[0] || g).inlineSize,
                    v = E ? E.height : (g[0] || g).blockSize)
                }
                ),
                (m !== p || v !== u) && o()
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
    i("init", ()=>{
        if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
            a();
            return
        }
        n.addEventListener("resize", o),
        n.addEventListener("orientationchange", c)
    }
    ),
    i("destroy", ()=>{
        d(),
        n.removeEventListener("resize", o),
        n.removeEventListener("orientationchange", c)
    }
    )
}
function De(t) {
    let {swiper: e, extendParams: i, on: s, emit: n} = t;
    const r = []
      , l = k()
      , o = function(c, f) {
        f === void 0 && (f = {});
        const p = l.MutationObserver || l.WebkitMutationObserver
          , u = new p(m=>{
            if (e.__preventObserver__)
                return;
            if (m.length === 1) {
                n("observerUpdate", m[0]);
                return
            }
            const v = function() {
                n("observerUpdate", m[0])
            };
            l.requestAnimationFrame ? l.requestAnimationFrame(v) : l.setTimeout(v, 0)
        }
        );
        u.observe(c, {
            attributes: typeof f.attributes > "u" ? !0 : f.attributes,
            childList: typeof f.childList > "u" ? !0 : f.childList,
            characterData: typeof f.characterData > "u" ? !0 : f.characterData
        }),
        r.push(u)
    }
      , a = ()=>{
        if (e.params.observer) {
            if (e.params.observeParents) {
                const c = Ce(e.hostEl);
                for (let f = 0; f < c.length; f += 1)
                    o(c[f])
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
    i({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    s("init", a),
    s("destroy", d)
}
var Ve = {
    on(t, e, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function")
            return s;
        const n = i ? "unshift" : "push";
        return t.split(" ").forEach(r=>{
            s.eventsListeners[r] || (s.eventsListeners[r] = []),
            s.eventsListeners[r][n](e)
        }
        ),
        s
    },
    once(t, e, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function")
            return s;
        function n() {
            s.off(t, n),
            n.__emitterProxy && delete n.__emitterProxy;
            for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
                l[o] = arguments[o];
            e.apply(s, l)
        }
        return n.__emitterProxy = e,
        s.on(t, n, i)
    },
    onAny(t, e) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof t != "function")
            return i;
        const s = e ? "unshift" : "push";
        return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t),
        i
    },
    offAny(t) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
            return e;
        const i = e.eventsAnyListeners.indexOf(t);
        return i >= 0 && e.eventsAnyListeners.splice(i, 1),
        e
    },
    off(t, e) {
        const i = this;
        return !i.eventsListeners || i.destroyed || !i.eventsListeners || t.split(" ").forEach(s=>{
            typeof e > "u" ? i.eventsListeners[s] = [] : i.eventsListeners[s] && i.eventsListeners[s].forEach((n,r)=>{
                (n === e || n.__emitterProxy && n.__emitterProxy === e) && i.eventsListeners[s].splice(r, 1)
            }
            )
        }
        ),
        i
    },
    emit() {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsListeners)
            return t;
        let e, i, s;
        for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
            r[l] = arguments[l];
        return typeof r[0] == "string" || Array.isArray(r[0]) ? (e = r[0],
        i = r.slice(1, r.length),
        s = t) : (e = r[0].events,
        i = r[0].data,
        s = r[0].context || t),
        i.unshift(s),
        (Array.isArray(e) ? e : e.split(" ")).forEach(a=>{
            t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(d=>{
                d.apply(s, [a, ...i])
            }
            ),
            t.eventsListeners && t.eventsListeners[a] && t.eventsListeners[a].forEach(d=>{
                d.apply(s, i)
            }
            )
        }
        ),
        t
    }
};
function _e() {
    const t = this;
    let e, i;
    const s = t.el;
    typeof t.params.width < "u" && t.params.width !== null ? e = t.params.width : e = s.clientWidth,
    typeof t.params.height < "u" && t.params.height !== null ? i = t.params.height : i = s.clientHeight,
    !(e === 0 && t.isHorizontal() || i === 0 && t.isVertical()) && (e = e - parseInt(_(s, "padding-left") || 0, 10) - parseInt(_(s, "padding-right") || 0, 10),
    i = i - parseInt(_(s, "padding-top") || 0, 10) - parseInt(_(s, "padding-bottom") || 0, 10),
    Number.isNaN(e) && (e = 0),
    Number.isNaN(i) && (i = 0),
    Object.assign(t, {
        width: e,
        height: i,
        size: t.isHorizontal() ? e : i
    }))
}
function Fe() {
    const t = this;
    function e(w, T) {
        return parseFloat(w.getPropertyValue(t.getDirectionLabel(T)) || 0)
    }
    const i = t.params
      , {wrapperEl: s, slidesEl: n, size: r, rtlTranslate: l, wrongRTL: o} = t
      , a = t.virtual && i.virtual.enabled
      , d = a ? t.virtual.slides.length : t.slides.length
      , c = V(n, `.${t.params.slideClass}, swiper-slide`)
      , f = a ? t.virtual.slides.length : c.length;
    let p = [];
    const u = []
      , m = [];
    let v = i.slidesOffsetBefore;
    typeof v == "function" && (v = i.slidesOffsetBefore.call(t));
    let y = i.slidesOffsetAfter;
    typeof y == "function" && (y = i.slidesOffsetAfter.call(t));
    const g = t.snapGrid.length
      , E = t.slidesGrid.length;
    let S = i.spaceBetween
      , h = -v
      , x = 0
      , I = 0;
    if (typeof r > "u")
        return;
    typeof S == "string" && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * r : typeof S == "string" && (S = parseFloat(S)),
    t.virtualSize = -S,
    c.forEach(w=>{
        l ? w.style.marginLeft = "" : w.style.marginRight = "",
        w.style.marginBottom = "",
        w.style.marginTop = ""
    }
    ),
    i.centeredSlides && i.cssMode && (H(s, "--swiper-centered-offset-before", ""),
    H(s, "--swiper-centered-offset-after", ""));
    const M = i.grid && i.grid.rows > 1 && t.grid;
    M ? t.grid.initSlides(c) : t.grid && t.grid.unsetSlides();
    let C;
    const A = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter(w=>typeof i.breakpoints[w].slidesPerView < "u").length > 0;
    for (let w = 0; w < f; w += 1) {
        C = 0;
        let T;
        if (c[w] && (T = c[w]),
        M && t.grid.updateSlide(w, T, c),
        !(c[w] && _(T, "display") === "none")) {
            if (i.slidesPerView === "auto") {
                A && (c[w].style[t.getDirectionLabel("width")] = "");
                const P = getComputedStyle(T)
                  , b = T.style.transform
                  , z = T.style.webkitTransform;
                if (b && (T.style.transform = "none"),
                z && (T.style.webkitTransform = "none"),
                i.roundLengths)
                    C = t.isHorizontal() ? oe(T, "width", !0) : oe(T, "height", !0);
                else {
                    const L = e(P, "width")
                      , O = e(P, "padding-left")
                      , F = e(P, "padding-right")
                      , B = e(P, "margin-left")
                      , re = e(P, "margin-right")
                      , ne = P.getPropertyValue("box-sizing");
                    if (ne && ne === "border-box")
                        C = L + B + re;
                    else {
                        const {clientWidth: we, offsetWidth: Se} = T;
                        C = L + O + F + B + re + (Se - we)
                    }
                }
                b && (T.style.transform = b),
                z && (T.style.webkitTransform = z),
                i.roundLengths && (C = Math.floor(C))
            } else
                C = (r - (i.slidesPerView - 1) * S) / i.slidesPerView,
                i.roundLengths && (C = Math.floor(C)),
                c[w] && (c[w].style[t.getDirectionLabel("width")] = `${C}px`);
            c[w] && (c[w].swiperSlideSize = C),
            m.push(C),
            i.centeredSlides ? (h = h + C / 2 + x / 2 + S,
            x === 0 && w !== 0 && (h = h - r / 2 - S),
            w === 0 && (h = h - r / 2 - S),
            Math.abs(h) < 1 / 1e3 && (h = 0),
            i.roundLengths && (h = Math.floor(h)),
            I % i.slidesPerGroup === 0 && p.push(h),
            u.push(h)) : (i.roundLengths && (h = Math.floor(h)),
            (I - Math.min(t.params.slidesPerGroupSkip, I)) % t.params.slidesPerGroup === 0 && p.push(h),
            u.push(h),
            h = h + C + S),
            t.virtualSize += C + S,
            x = C,
            I += 1
        }
    }
    if (t.virtualSize = Math.max(t.virtualSize, r) + y,
    l && o && (i.effect === "slide" || i.effect === "coverflow") && (s.style.width = `${t.virtualSize + S}px`),
    i.setWrapperSize && (s.style[t.getDirectionLabel("width")] = `${t.virtualSize + S}px`),
    M && t.grid.updateWrapperSize(C, p),
    !i.centeredSlides) {
        const w = [];
        for (let T = 0; T < p.length; T += 1) {
            let P = p[T];
            i.roundLengths && (P = Math.floor(P)),
            p[T] <= t.virtualSize - r && w.push(P)
        }
        p = w,
        Math.floor(t.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 && p.push(t.virtualSize - r)
    }
    if (a && i.loop) {
        const w = m[0] + S;
        if (i.slidesPerGroup > 1) {
            const T = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup)
              , P = w * i.slidesPerGroup;
            for (let b = 0; b < T; b += 1)
                p.push(p[p.length - 1] + P)
        }
        for (let T = 0; T < t.virtual.slidesBefore + t.virtual.slidesAfter; T += 1)
            i.slidesPerGroup === 1 && p.push(p[p.length - 1] + w),
            u.push(u[u.length - 1] + w),
            t.virtualSize += w
    }
    if (p.length === 0 && (p = [0]),
    S !== 0) {
        const w = t.isHorizontal() && l ? "marginLeft" : t.getDirectionLabel("marginRight");
        c.filter((T,P)=>!i.cssMode || i.loop ? !0 : P !== c.length - 1).forEach(T=>{
            T.style[w] = `${S}px`
        }
        )
    }
    if (i.centeredSlides && i.centeredSlidesBounds) {
        let w = 0;
        m.forEach(P=>{
            w += P + (S || 0)
        }
        ),
        w -= S;
        const T = w - r;
        p = p.map(P=>P <= 0 ? -v : P > T ? T + y : P)
    }
    if (i.centerInsufficientSlides) {
        let w = 0;
        if (m.forEach(T=>{
            w += T + (S || 0)
        }
        ),
        w -= S,
        w < r) {
            const T = (r - w) / 2;
            p.forEach((P,b)=>{
                p[b] = P - T
            }
            ),
            u.forEach((P,b)=>{
                u[b] = P + T
            }
            )
        }
    }
    if (Object.assign(t, {
        slides: c,
        snapGrid: p,
        slidesGrid: u,
        slidesSizesGrid: m
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
        H(s, "--swiper-centered-offset-before", `${-p[0]}px`),
        H(s, "--swiper-centered-offset-after", `${t.size / 2 - m[m.length - 1] / 2}px`);
        const w = -t.snapGrid[0]
          , T = -t.slidesGrid[0];
        t.snapGrid = t.snapGrid.map(P=>P + w),
        t.slidesGrid = t.slidesGrid.map(P=>P + T)
    }
    if (f !== d && t.emit("slidesLengthChange"),
    p.length !== g && (t.params.watchOverflow && t.checkOverflow(),
    t.emit("snapGridLengthChange")),
    u.length !== E && t.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && t.updateSlidesOffset(),
    t.emit("slidesUpdated"),
    !a && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
        const w = `${i.containerModifierClass}backface-hidden`
          , T = t.el.classList.contains(w);
        f <= i.maxBackfaceHiddenSlides ? T || t.el.classList.add(w) : T && t.el.classList.remove(w)
    }
}
function Ne(t) {
    const e = this
      , i = []
      , s = e.virtual && e.params.virtual.enabled;
    let n = 0, r;
    typeof t == "number" ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed);
    const l = o=>s ? e.slides[e.getSlideIndexByData(o)] : e.slides[o];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)
            (e.visibleSlides || []).forEach(o=>{
                i.push(o)
            }
            );
        else
            for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
                const o = e.activeIndex + r;
                if (o > e.slides.length && !s)
                    break;
                i.push(l(o))
            }
    else
        i.push(l(e.activeIndex));
    for (r = 0; r < i.length; r += 1)
        if (typeof i[r] < "u") {
            const o = i[r].offsetHeight;
            n = o > n ? o : n
        }
    (n || n === 0) && (e.wrapperEl.style.height = `${n}px`)
}
function Be() {
    const t = this
      , e = t.slides
      , i = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
    for (let s = 0; s < e.length; s += 1)
        e[s].swiperSlideOffset = (t.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - i - t.cssOverflowAdjustment()
}
function Re(t) {
    t === void 0 && (t = this && this.translate || 0);
    const e = this
      , i = e.params
      , {slides: s, rtlTranslate: n, snapGrid: r} = e;
    if (s.length === 0)
        return;
    typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let l = -t;
    n && (l = t),
    s.forEach(a=>{
        a.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass)
    }
    ),
    e.visibleSlidesIndexes = [],
    e.visibleSlides = [];
    let o = i.spaceBetween;
    typeof o == "string" && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * e.size : typeof o == "string" && (o = parseFloat(o));
    for (let a = 0; a < s.length; a += 1) {
        const d = s[a];
        let c = d.swiperSlideOffset;
        i.cssMode && i.centeredSlides && (c -= s[0].swiperSlideOffset);
        const f = (l + (i.centeredSlides ? e.minTranslate() : 0) - c) / (d.swiperSlideSize + o)
          , p = (l - r[0] + (i.centeredSlides ? e.minTranslate() : 0) - c) / (d.swiperSlideSize + o)
          , u = -(l - c)
          , m = u + e.slidesSizesGrid[a]
          , v = u >= 0 && u <= e.size - e.slidesSizesGrid[a];
        (u >= 0 && u < e.size - 1 || m > 1 && m <= e.size || u <= 0 && m >= e.size) && (e.visibleSlides.push(d),
        e.visibleSlidesIndexes.push(a),
        s[a].classList.add(i.slideVisibleClass)),
        v && s[a].classList.add(i.slideFullyVisibleClass),
        d.progress = n ? -f : f,
        d.originalProgress = n ? -p : p
    }
}
function $e(t) {
    const e = this;
    if (typeof t > "u") {
        const c = e.rtlTranslate ? -1 : 1;
        t = e && e.translate && e.translate * c || 0
    }
    const i = e.params
      , s = e.maxTranslate() - e.minTranslate();
    let {progress: n, isBeginning: r, isEnd: l, progressLoop: o} = e;
    const a = r
      , d = l;
    if (s === 0)
        n = 0,
        r = !0,
        l = !0;
    else {
        n = (t - e.minTranslate()) / s;
        const c = Math.abs(t - e.minTranslate()) < 1
          , f = Math.abs(t - e.maxTranslate()) < 1;
        r = c || n <= 0,
        l = f || n >= 1,
        c && (n = 0),
        f && (n = 1)
    }
    if (i.loop) {
        const c = e.getSlideIndexByData(0)
          , f = e.getSlideIndexByData(e.slides.length - 1)
          , p = e.slidesGrid[c]
          , u = e.slidesGrid[f]
          , m = e.slidesGrid[e.slidesGrid.length - 1]
          , v = Math.abs(t);
        v >= p ? o = (v - p) / m : o = (v + m - u) / m,
        o > 1 && (o -= 1)
    }
    Object.assign(e, {
        progress: n,
        progressLoop: o,
        isBeginning: r,
        isEnd: l
    }),
    (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && e.updateSlidesProgress(t),
    r && !a && e.emit("reachBeginning toEdge"),
    l && !d && e.emit("reachEnd toEdge"),
    (a && !r || d && !l) && e.emit("fromEdge"),
    e.emit("progress", n)
}
function He() {
    const t = this
      , {slides: e, params: i, slidesEl: s, activeIndex: n} = t
      , r = t.virtual && i.virtual.enabled
      , l = t.grid && i.grid && i.grid.rows > 1
      , o = f=>V(s, `.${i.slideClass}${f}, swiper-slide${f}`)[0];
    e.forEach(f=>{
        f.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass)
    }
    );
    let a, d, c;
    if (r)
        if (i.loop) {
            let f = n - t.virtual.slidesBefore;
            f < 0 && (f = t.virtual.slides.length + f),
            f >= t.virtual.slides.length && (f -= t.virtual.slides.length),
            a = o(`[data-swiper-slide-index="${f}"]`)
        } else
            a = o(`[data-swiper-slide-index="${n}"]`);
    else
        l ? (a = e.filter(f=>f.column === n)[0],
        c = e.filter(f=>f.column === n + 1)[0],
        d = e.filter(f=>f.column === n - 1)[0]) : a = e[n];
    a && (a.classList.add(i.slideActiveClass),
    l ? (c && c.classList.add(i.slideNextClass),
    d && d.classList.add(i.slidePrevClass)) : (c = Ie(a, `.${i.slideClass}, swiper-slide`)[0],
    i.loop && !c && (c = e[0]),
    c && c.classList.add(i.slideNextClass),
    d = Pe(a, `.${i.slideClass}, swiper-slide`)[0],
    i.loop && !d === 0 && (d = e[e.length - 1]),
    d && d.classList.add(i.slidePrevClass))),
    t.emitSlidesClasses()
}
const W = (t,e)=>{
    if (!t || t.destroyed || !t.params)
        return;
    const i = ()=>t.isElement ? "swiper-slide" : `.${t.params.slideClass}`
      , s = e.closest(i());
    if (s) {
        let n = s.querySelector(`.${t.params.lazyPreloaderClass}`);
        !n && t.isElement && (s.shadowRoot ? n = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`) : requestAnimationFrame(()=>{
            s.shadowRoot && (n = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),
            n && n.remove())
        }
        )),
        n && n.remove()
    }
}
  , J = (t,e)=>{
    if (!t.slides[e])
        return;
    const i = t.slides[e].querySelector('[loading="lazy"]');
    i && i.removeAttribute("loading")
}
  , ie = t=>{
    if (!t || t.destroyed || !t.params)
        return;
    let e = t.params.lazyPreloadPrevNext;
    const i = t.slides.length;
    if (!i || !e || e < 0)
        return;
    e = Math.min(e, i);
    const s = t.params.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView)
      , n = t.activeIndex;
    if (t.params.grid && t.params.grid.rows > 1) {
        const l = n
          , o = [l - e];
        o.push(...Array.from({
            length: e
        }).map((a,d)=>l + s + d)),
        t.slides.forEach((a,d)=>{
            o.includes(a.column) && J(t, d)
        }
        );
        return
    }
    const r = n + s - 1;
    if (t.params.rewind || t.params.loop)
        for (let l = n - e; l <= r + e; l += 1) {
            const o = (l % i + i) % i;
            (o < n || o > r) && J(t, o)
        }
    else
        for (let l = Math.max(n - e, 0); l <= Math.min(r + e, i - 1); l += 1)
            l !== n && (l > r || l < n) && J(t, l)
}
;
function We(t) {
    const {slidesGrid: e, params: i} = t
      , s = t.rtlTranslate ? t.translate : -t.translate;
    let n;
    for (let r = 0; r < e.length; r += 1)
        typeof e[r + 1] < "u" ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2 ? n = r : s >= e[r] && s < e[r + 1] && (n = r + 1) : s >= e[r] && (n = r);
    return i.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0),
    n
}
function je(t) {
    const e = this
      , i = e.rtlTranslate ? e.translate : -e.translate
      , {snapGrid: s, params: n, activeIndex: r, realIndex: l, snapIndex: o} = e;
    let a = t, d;
    const c = u=>{
        let m = u - e.virtual.slidesBefore;
        return m < 0 && (m = e.virtual.slides.length + m),
        m >= e.virtual.slides.length && (m -= e.virtual.slides.length),
        m
    }
    ;
    if (typeof a > "u" && (a = We(e)),
    s.indexOf(i) >= 0)
        d = s.indexOf(i);
    else {
        const u = Math.min(n.slidesPerGroupSkip, a);
        d = u + Math.floor((a - u) / n.slidesPerGroup)
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
    const f = e.grid && n.grid && n.grid.rows > 1;
    let p;
    if (e.virtual && n.virtual.enabled && n.loop)
        p = c(a);
    else if (f) {
        const u = e.slides.filter(v=>v.column === a)[0];
        let m = parseInt(u.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(m) && (m = Math.max(e.slides.indexOf(u), 0)),
        p = Math.floor(m / n.grid.rows)
    } else if (e.slides[a]) {
        const u = e.slides[a].getAttribute("data-swiper-slide-index");
        u ? p = parseInt(u, 10) : p = a
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
    e.initialized && ie(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && (l !== p && e.emit("realIndexChange"),
    e.emit("slideChange"))
}
function qe(t, e) {
    const i = this
      , s = i.params;
    let n = t.closest(`.${s.slideClass}, swiper-slide`);
    !n && i.isElement && e && e.length > 1 && e.includes(t) && [...e.slice(e.indexOf(t) + 1, e.length)].forEach(o=>{
        !n && o.matches && o.matches(`.${s.slideClass}, swiper-slide`) && (n = o)
    }
    );
    let r = !1, l;
    if (n) {
        for (let o = 0; o < i.slides.length; o += 1)
            if (i.slides[o] === n) {
                r = !0,
                l = o;
                break
            }
    }
    if (n && r)
        i.clickedSlide = n,
        i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : i.clickedIndex = l;
    else {
        i.clickedSlide = void 0,
        i.clickedIndex = void 0;
        return
    }
    s.slideToClickedSlide && i.clickedIndex !== void 0 && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
}
var Ye = {
    updateSize: _e,
    updateSlides: Fe,
    updateAutoHeight: Ne,
    updateSlidesOffset: Be,
    updateSlidesProgress: Re,
    updateProgress: $e,
    updateSlidesClasses: He,
    updateActiveIndex: je,
    updateClickedSlide: qe
};
function Xe(t) {
    t === void 0 && (t = this.isHorizontal() ? "x" : "y");
    const e = this
      , {params: i, rtlTranslate: s, translate: n, wrapperEl: r} = e;
    if (i.virtualTranslate)
        return s ? -n : n;
    if (i.cssMode)
        return n;
    let l = Ee(r, t);
    return l += e.cssOverflowAdjustment(),
    s && (l = -l),
    l || 0
}
function Ke(t, e) {
    const i = this
      , {rtlTranslate: s, params: n, wrapperEl: r, progress: l} = i;
    let o = 0
      , a = 0;
    const d = 0;
    i.isHorizontal() ? o = s ? -t : t : a = t,
    n.roundLengths && (o = Math.floor(o),
    a = Math.floor(a)),
    i.previousTranslate = i.translate,
    i.translate = i.isHorizontal() ? o : a,
    n.cssMode ? r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -o : -a : n.virtualTranslate || (i.isHorizontal() ? o -= i.cssOverflowAdjustment() : a -= i.cssOverflowAdjustment(),
    r.style.transform = `translate3d(${o}px, ${a}px, ${d}px)`);
    let c;
    const f = i.maxTranslate() - i.minTranslate();
    f === 0 ? c = 0 : c = (t - i.minTranslate()) / f,
    c !== l && i.updateProgress(t),
    i.emit("setTranslate", i.translate, e)
}
function Ue() {
    return -this.snapGrid[0]
}
function Je() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function Qe(t, e, i, s, n) {
    t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    s === void 0 && (s = !0);
    const r = this
      , {params: l, wrapperEl: o} = r;
    if (r.animating && l.preventInteractionOnTransition)
        return !1;
    const a = r.minTranslate()
      , d = r.maxTranslate();
    let c;
    if (s && t > a ? c = a : s && t < d ? c = d : c = t,
    r.updateProgress(c),
    l.cssMode) {
        const f = r.isHorizontal();
        if (e === 0)
            o[f ? "scrollLeft" : "scrollTop"] = -c;
        else {
            if (!r.support.smoothScroll)
                return me({
                    swiper: r,
                    targetPosition: -c,
                    side: f ? "left" : "top"
                }),
                !0;
            o.scrollTo({
                [f ? "left" : "top"]: -c,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (r.setTransition(0),
    r.setTranslate(c),
    i && (r.emit("beforeTransitionStart", e, n),
    r.emit("transitionEnd"))) : (r.setTransition(e),
    r.setTranslate(c),
    i && (r.emit("beforeTransitionStart", e, n),
    r.emit("transitionStart")),
    r.animating || (r.animating = !0,
    r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(p) {
        !r || r.destroyed || p.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
        r.onTranslateToWrapperTransitionEnd = null,
        delete r.onTranslateToWrapperTransitionEnd,
        i && r.emit("transitionEnd"))
    }
    ),
    r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))),
    !0
}
var Ze = {
    getTranslate: Xe,
    setTranslate: Ke,
    minTranslate: Ue,
    maxTranslate: Je,
    translateTo: Qe
};
function et(t, e) {
    const i = this;
    i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${t}ms`,
    i.wrapperEl.style.transitionDelay = t === 0 ? "0ms" : ""),
    i.emit("setTransition", t, e)
}
function ge(t) {
    let {swiper: e, runCallbacks: i, direction: s, step: n} = t;
    const {activeIndex: r, previousIndex: l} = e;
    let o = s;
    if (o || (r > l ? o = "next" : r < l ? o = "prev" : o = "reset"),
    e.emit(`transition${n}`),
    i && r !== l) {
        if (o === "reset") {
            e.emit(`slideResetTransition${n}`);
            return
        }
        e.emit(`slideChangeTransition${n}`),
        o === "next" ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`)
    }
}
function tt(t, e) {
    t === void 0 && (t = !0);
    const i = this
      , {params: s} = i;
    s.cssMode || (s.autoHeight && i.updateAutoHeight(),
    ge({
        swiper: i,
        runCallbacks: t,
        direction: e,
        step: "Start"
    }))
}
function it(t, e) {
    t === void 0 && (t = !0);
    const i = this
      , {params: s} = i;
    i.animating = !1,
    !s.cssMode && (i.setTransition(0),
    ge({
        swiper: i,
        runCallbacks: t,
        direction: e,
        step: "End"
    }))
}
var st = {
    setTransition: et,
    transitionStart: tt,
    transitionEnd: it
};
function rt(t, e, i, s, n) {
    t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    typeof t == "string" && (t = parseInt(t, 10));
    const r = this;
    let l = t;
    l < 0 && (l = 0);
    const {params: o, snapGrid: a, slidesGrid: d, previousIndex: c, activeIndex: f, rtlTranslate: p, wrapperEl: u, enabled: m} = r;
    if (r.animating && o.preventInteractionOnTransition || !m && !s && !n)
        return !1;
    const v = Math.min(r.params.slidesPerGroupSkip, l);
    let y = v + Math.floor((l - v) / r.params.slidesPerGroup);
    y >= a.length && (y = a.length - 1);
    const g = -a[y];
    if (o.normalizeSlideIndex)
        for (let S = 0; S < d.length; S += 1) {
            const h = -Math.floor(g * 100)
              , x = Math.floor(d[S] * 100)
              , I = Math.floor(d[S + 1] * 100);
            typeof d[S + 1] < "u" ? h >= x && h < I - (I - x) / 2 ? l = S : h >= x && h < I && (l = S + 1) : h >= x && (l = S)
        }
    if (r.initialized && l !== f && (!r.allowSlideNext && (p ? g > r.translate && g > r.minTranslate() : g < r.translate && g < r.minTranslate()) || !r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (f || 0) !== l))
        return !1;
    l !== (c || 0) && i && r.emit("beforeSlideChangeStart"),
    r.updateProgress(g);
    let E;
    if (l > f ? E = "next" : l < f ? E = "prev" : E = "reset",
    p && -g === r.translate || !p && g === r.translate)
        return r.updateActiveIndex(l),
        o.autoHeight && r.updateAutoHeight(),
        r.updateSlidesClasses(),
        o.effect !== "slide" && r.setTranslate(g),
        E !== "reset" && (r.transitionStart(i, E),
        r.transitionEnd(i, E)),
        !1;
    if (o.cssMode) {
        const S = r.isHorizontal()
          , h = p ? g : -g;
        if (e === 0) {
            const x = r.virtual && r.params.virtual.enabled;
            x && (r.wrapperEl.style.scrollSnapType = "none",
            r._immediateVirtual = !0),
            x && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0,
            requestAnimationFrame(()=>{
                u[S ? "scrollLeft" : "scrollTop"] = h
            }
            )) : u[S ? "scrollLeft" : "scrollTop"] = h,
            x && requestAnimationFrame(()=>{
                r.wrapperEl.style.scrollSnapType = "",
                r._immediateVirtual = !1
            }
            )
        } else {
            if (!r.support.smoothScroll)
                return me({
                    swiper: r,
                    targetPosition: h,
                    side: S ? "left" : "top"
                }),
                !0;
            u.scrollTo({
                [S ? "left" : "top"]: h,
                behavior: "smooth"
            })
        }
        return !0
    }
    return r.setTransition(e),
    r.setTranslate(g),
    r.updateActiveIndex(l),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", e, s),
    r.transitionStart(i, E),
    e === 0 ? r.transitionEnd(i, E) : r.animating || (r.animating = !0,
    r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(h) {
        !r || r.destroyed || h.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
        r.onSlideToWrapperTransitionEnd = null,
        delete r.onSlideToWrapperTransitionEnd,
        r.transitionEnd(i, E))
    }
    ),
    r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)),
    !0
}
function nt(t, e, i, s) {
    t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    typeof t == "string" && (t = parseInt(t, 10));
    const n = this
      , r = n.grid && n.params.grid && n.params.grid.rows > 1;
    let l = t;
    if (n.params.loop)
        if (n.virtual && n.params.virtual.enabled)
            l = l + n.virtual.slidesBefore;
        else {
            let o;
            if (r) {
                const p = l * n.params.grid.rows;
                o = n.slides.filter(u=>u.getAttribute("data-swiper-slide-index") * 1 === p)[0].column
            } else
                o = n.getSlideIndexByData(l);
            const a = r ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length
              , {centeredSlides: d} = n.params;
            let c = n.params.slidesPerView;
            c === "auto" ? c = n.slidesPerViewDynamic() : (c = Math.ceil(parseFloat(n.params.slidesPerView, 10)),
            d && c % 2 === 0 && (c = c + 1));
            let f = a - o < c;
            if (d && (f = f || o < Math.ceil(c / 2)),
            f) {
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
                l = n.slides.filter(u=>u.getAttribute("data-swiper-slide-index") * 1 === p)[0].column
            } else
                l = n.getSlideIndexByData(l)
        }
    return requestAnimationFrame(()=>{
        n.slideTo(l, e, i, s)
    }
    ),
    n
}
function at(t, e, i) {
    t === void 0 && (t = this.params.speed),
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
                s.slideTo(s.activeIndex + a, t, e, i)
            }
            ),
            !0
    }
    return r.rewind && s.isEnd ? s.slideTo(0, t, e, i) : s.slideTo(s.activeIndex + a, t, e, i)
}
function lt(t, e, i) {
    t === void 0 && (t = this.params.speed),
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
    const f = o ? s.translate : -s.translate;
    function p(g) {
        return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g)
    }
    const u = p(f)
      , m = r.map(g=>p(g));
    let v = r[m.indexOf(u) - 1];
    if (typeof v > "u" && n.cssMode) {
        let g;
        r.forEach((E,S)=>{
            u >= E && (g = S)
        }
        ),
        typeof g < "u" && (v = r[g > 0 ? g - 1 : g])
    }
    let y = 0;
    if (typeof v < "u" && (y = l.indexOf(v),
    y < 0 && (y = s.activeIndex - 1),
    n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (y = y - s.slidesPerViewDynamic("previous", !0) + 1,
    y = Math.max(y, 0))),
    n.rewind && s.isBeginning) {
        const g = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
        return s.slideTo(g, t, e, i)
    } else if (n.loop && s.activeIndex === 0 && n.cssMode)
        return requestAnimationFrame(()=>{
            s.slideTo(y, t, e, i)
        }
        ),
        !0;
    return s.slideTo(y, t, e, i)
}
function ot(t, e, i) {
    t === void 0 && (t = this.params.speed),
    e === void 0 && (e = !0);
    const s = this;
    return s.slideTo(s.activeIndex, t, e, i)
}
function dt(t, e, i, s) {
    t === void 0 && (t = this.params.speed),
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
    n.slideTo(r, t, e, i)
}
function ct() {
    const t = this
      , {params: e, slidesEl: i} = t
      , s = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
    let n = t.clickedIndex, r;
    const l = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (t.animating)
            return;
        r = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
        e.centeredSlides ? n < t.loopedSlides - s / 2 || n > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(),
        n = t.getSlideIndex(V(i, `${l}[data-swiper-slide-index="${r}"]`)[0]),
        ee(()=>{
            t.slideTo(n)
        }
        )) : t.slideTo(n) : n > t.slides.length - s ? (t.loopFix(),
        n = t.getSlideIndex(V(i, `${l}[data-swiper-slide-index="${r}"]`)[0]),
        ee(()=>{
            t.slideTo(n)
        }
        )) : t.slideTo(n)
    } else
        t.slideTo(n)
}
var ft = {
    slideTo: rt,
    slideToLoop: nt,
    slideNext: at,
    slidePrev: lt,
    slideReset: ot,
    slideToClosest: dt,
    slideToClickedSlide: ct
};
function ut(t) {
    const e = this
      , {params: i, slidesEl: s} = e;
    if (!i.loop || e.virtual && e.params.virtual.enabled)
        return;
    const n = ()=>{
        V(s, `.${i.slideClass}, swiper-slide`).forEach((f,p)=>{
            f.setAttribute("data-swiper-slide-index", p)
        }
        )
    }
      , r = e.grid && i.grid && i.grid.rows > 1
      , l = i.slidesPerGroup * (r ? i.grid.rows : 1)
      , o = e.slides.length % l !== 0
      , a = r && e.slides.length % i.grid.rows !== 0
      , d = c=>{
        for (let f = 0; f < c; f += 1) {
            const p = e.isElement ? te("swiper-slide", [i.slideBlankClass]) : te("div", [i.slideClass, i.slideBlankClass]);
            e.slidesEl.append(p)
        }
    }
    ;
    if (o) {
        if (i.loopAddBlankSlides) {
            const c = l - e.slides.length % l;
            d(c),
            e.recalcSlides(),
            e.updateSlides()
        } else
            q("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        n()
    } else if (a) {
        if (i.loopAddBlankSlides) {
            const c = i.grid.rows - e.slides.length % i.grid.rows;
            d(c),
            e.recalcSlides(),
            e.updateSlides()
        } else
            q("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        n()
    } else
        n();
    e.loopFix({
        slideRealIndex: t,
        direction: i.centeredSlides ? void 0 : "next"
    })
}
function pt(t) {
    let {slideRealIndex: e, slideTo: i=!0, direction: s, setTranslate: n, activeSlideIndex: r, byController: l, byMousewheel: o} = t === void 0 ? {} : t;
    const a = this;
    if (!a.params.loop)
        return;
    a.emit("beforeLoopFix");
    const {slides: d, allowSlidePrev: c, allowSlideNext: f, slidesEl: p, params: u} = a
      , {centeredSlides: m} = u;
    if (a.allowSlidePrev = !0,
    a.allowSlideNext = !0,
    a.virtual && u.virtual.enabled) {
        i && (!u.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : u.centeredSlides && a.snapIndex < u.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
        a.allowSlidePrev = c,
        a.allowSlideNext = f,
        a.emit("loopFix");
        return
    }
    let v = u.slidesPerView;
    v === "auto" ? v = a.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(u.slidesPerView, 10)),
    m && v % 2 === 0 && (v = v + 1));
    const y = u.slidesPerGroupAuto ? v : u.slidesPerGroup;
    let g = y;
    g % y !== 0 && (g += y - g % y),
    g += u.loopAdditionalSlides,
    a.loopedSlides = g;
    const E = a.grid && u.grid && u.grid.rows > 1;
    d.length < v + g ? q("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : E && u.grid.fill === "row" && q("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const S = []
      , h = [];
    let x = a.activeIndex;
    typeof r > "u" ? r = a.getSlideIndex(d.filter(b=>b.classList.contains(u.slideActiveClass))[0]) : x = r;
    const I = s === "next" || !s
      , M = s === "prev" || !s;
    let C = 0
      , A = 0;
    const w = E ? Math.ceil(d.length / u.grid.rows) : d.length
      , P = (E ? d[r].column : r) + (m && typeof n > "u" ? -v / 2 + .5 : 0);
    if (P < g) {
        C = Math.max(g - P, y);
        for (let b = 0; b < g - P; b += 1) {
            const z = b - Math.floor(b / w) * w;
            if (E) {
                const L = w - z - 1;
                for (let O = d.length - 1; O >= 0; O -= 1)
                    d[O].column === L && S.push(O)
            } else
                S.push(w - z - 1)
        }
    } else if (P + v > w - g) {
        A = Math.max(P - (w - g * 2), y);
        for (let b = 0; b < A; b += 1) {
            const z = b - Math.floor(b / w) * w;
            E ? d.forEach((L,O)=>{
                L.column === z && h.push(O)
            }
            ) : h.push(z)
        }
    }
    if (a.__preventObserver__ = !0,
    requestAnimationFrame(()=>{
        a.__preventObserver__ = !1
    }
    ),
    M && S.forEach(b=>{
        d[b].swiperLoopMoveDOM = !0,
        p.prepend(d[b]),
        d[b].swiperLoopMoveDOM = !1
    }
    ),
    I && h.forEach(b=>{
        d[b].swiperLoopMoveDOM = !0,
        p.append(d[b]),
        d[b].swiperLoopMoveDOM = !1
    }
    ),
    a.recalcSlides(),
    u.slidesPerView === "auto" ? a.updateSlides() : E && (S.length > 0 && M || h.length > 0 && I) && a.slides.forEach((b,z)=>{
        a.grid.updateSlide(z, b, a.slides)
    }
    ),
    u.watchSlidesProgress && a.updateSlidesOffset(),
    i) {
        if (S.length > 0 && M) {
            if (typeof e > "u") {
                const b = a.slidesGrid[x]
                  , L = a.slidesGrid[x + C] - b;
                o ? a.setTranslate(a.translate - L) : (a.slideTo(x + C, 0, !1, !0),
                n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - L,
                a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - L))
            } else if (n) {
                const b = E ? S.length / u.grid.rows : S.length;
                a.slideTo(a.activeIndex + b, 0, !1, !0),
                a.touchEventsData.currentTranslate = a.translate
            }
        } else if (h.length > 0 && I)
            if (typeof e > "u") {
                const b = a.slidesGrid[x]
                  , L = a.slidesGrid[x - A] - b;
                o ? a.setTranslate(a.translate - L) : (a.slideTo(x - A, 0, !1, !0),
                n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - L,
                a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - L))
            } else {
                const b = E ? h.length / u.grid.rows : h.length;
                a.slideTo(a.activeIndex - b, 0, !1, !0)
            }
    }
    if (a.allowSlidePrev = c,
    a.allowSlideNext = f,
    a.controller && a.controller.control && !l) {
        const b = {
            slideRealIndex: e,
            direction: s,
            setTranslate: n,
            activeSlideIndex: r,
            byController: !0
        };
        Array.isArray(a.controller.control) ? a.controller.control.forEach(z=>{
            !z.destroyed && z.params.loop && z.loopFix({
                ...b,
                slideTo: z.params.slidesPerView === u.slidesPerView ? i : !1
            })
        }
        ) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({
            ...b,
            slideTo: a.controller.control.params.slidesPerView === u.slidesPerView ? i : !1
        })
    }
    a.emit("loopFix")
}
function mt() {
    const t = this
      , {params: e, slidesEl: i} = t;
    if (!e.loop || t.virtual && t.params.virtual.enabled)
        return;
    t.recalcSlides();
    const s = [];
    t.slides.forEach(n=>{
        const r = typeof n.swiperSlideIndex > "u" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
        s[r] = n
    }
    ),
    t.slides.forEach(n=>{
        n.removeAttribute("data-swiper-slide-index")
    }
    ),
    s.forEach(n=>{
        i.append(n)
    }
    ),
    t.recalcSlides(),
    t.slideTo(t.realIndex, 0)
}
var ht = {
    loopCreate: ut,
    loopFix: pt,
    loopDestroy: mt
};
function gt(t) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
        return;
    const i = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
    i.style.cursor = "move",
    i.style.cursor = t ? "grabbing" : "grab",
    e.isElement && requestAnimationFrame(()=>{
        e.__preventObserver__ = !1
    }
    )
}
function vt() {
    const t = this;
    t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0),
    t[t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
    t.isElement && requestAnimationFrame(()=>{
        t.__preventObserver__ = !1
    }
    ))
}
var wt = {
    setGrabCursor: gt,
    unsetGrabCursor: vt
};
function St(t, e) {
    e === void 0 && (e = this);
    function i(s) {
        if (!s || s === N() || s === k())
            return null;
        s.assignedSlot && (s = s.assignedSlot);
        const n = s.closest(t);
        return !n && !s.getRootNode ? null : n || i(s.getRootNode().host)
    }
    return i(e)
}
function de(t, e, i) {
    const s = k()
      , {params: n} = t
      , r = n.edgeSwipeDetection
      , l = n.edgeSwipeThreshold;
    return r && (i <= l || i >= s.innerWidth - l) ? r === "prevent" ? (e.preventDefault(),
    !0) : !1 : !0
}
function Tt(t) {
    const e = this
      , i = N();
    let s = t;
    s.originalEvent && (s = s.originalEvent);
    const n = e.touchEventsData;
    if (s.type === "pointerdown") {
        if (n.pointerId !== null && n.pointerId !== s.pointerId)
            return;
        n.pointerId = s.pointerId
    } else
        s.type === "touchstart" && s.targetTouches.length === 1 && (n.touchId = s.targetTouches[0].identifier);
    if (s.type === "touchstart") {
        de(e, s, s.targetTouches[0].pageX);
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
    const f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`
      , p = !!(s.target && s.target.shadowRoot);
    if (r.noSwiping && (p ? St(f, a) : a.closest(f))) {
        e.allowClick = !0;
        return
    }
    if (r.swipeHandler && !a.closest(r.swipeHandler))
        return;
    l.currentX = s.pageX,
    l.currentY = s.pageY;
    const u = l.currentX
      , m = l.currentY;
    if (!de(e, s, u))
        return;
    Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    l.startX = u,
    l.startY = m,
    n.touchStartTime = j(),
    e.allowClick = !0,
    e.updateSize(),
    e.swipeDirection = void 0,
    r.threshold > 0 && (n.allowThresholdMove = !1);
    let v = !0;
    a.matches(n.focusableElements) && (v = !1,
    a.nodeName === "SELECT" && (n.isTouched = !1)),
    i.activeElement && i.activeElement.matches(n.focusableElements) && i.activeElement !== a && i.activeElement.blur();
    const y = v && e.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || y) && !a.isContentEditable && s.preventDefault(),
    r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(),
    e.emit("touchStart", s)
}
function xt(t) {
    const e = N()
      , i = this
      , s = i.touchEventsData
      , {params: n, touches: r, rtlTranslate: l, enabled: o} = i;
    if (!o || !n.simulateTouch && t.pointerType === "mouse")
        return;
    let a = t;
    if (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" && (s.touchId !== null || a.pointerId !== s.pointerId))
        return;
    let d;
    if (a.type === "touchmove") {
        if (d = [...a.changedTouches].filter(I=>I.identifier === s.touchId)[0],
        !d || d.identifier !== s.touchId)
            return
    } else
        d = a;
    if (!s.isTouched) {
        s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", a);
        return
    }
    const c = d.pageX
      , f = d.pageY;
    if (a.preventedByNestedSwiper) {
        r.startX = c,
        r.startY = f;
        return
    }
    if (!i.allowTouchMove) {
        a.target.matches(s.focusableElements) || (i.allowClick = !1),
        s.isTouched && (Object.assign(r, {
            startX: c,
            startY: f,
            currentX: c,
            currentY: f
        }),
        s.touchStartTime = j());
        return
    }
    if (n.touchReleaseOnEdges && !n.loop) {
        if (i.isVertical()) {
            if (f < r.startY && i.translate <= i.maxTranslate() || f > r.startY && i.translate >= i.minTranslate()) {
                s.isTouched = !1,
                s.isMoved = !1;
                return
            }
        } else if (c < r.startX && i.translate <= i.maxTranslate() || c > r.startX && i.translate >= i.minTranslate())
            return
    }
    if (e.activeElement && a.target === e.activeElement && a.target.matches(s.focusableElements)) {
        s.isMoved = !0,
        i.allowClick = !1;
        return
    }
    s.allowTouchCallbacks && i.emit("touchMove", a),
    r.previousX = r.currentX,
    r.previousY = r.currentY,
    r.currentX = c,
    r.currentY = f;
    const p = r.currentX - r.startX
      , u = r.currentY - r.startY;
    if (i.params.threshold && Math.sqrt(p ** 2 + u ** 2) < i.params.threshold)
        return;
    if (typeof s.isScrolling > "u") {
        let I;
        i.isHorizontal() && r.currentY === r.startY || i.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : p * p + u * u >= 25 && (I = Math.atan2(Math.abs(u), Math.abs(p)) * 180 / Math.PI,
        s.isScrolling = i.isHorizontal() ? I > n.touchAngle : 90 - I > n.touchAngle)
    }
    if (s.isScrolling && i.emit("touchMoveOpposite", a),
    typeof s.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0),
    s.isScrolling) {
        s.isTouched = !1;
        return
    }
    if (!s.startMoving)
        return;
    i.allowClick = !1,
    !n.cssMode && a.cancelable && a.preventDefault(),
    n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
    let m = i.isHorizontal() ? p : u
      , v = i.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
    n.oneWayMovement && (m = Math.abs(m) * (l ? 1 : -1),
    v = Math.abs(v) * (l ? 1 : -1)),
    r.diff = m,
    m *= n.touchRatio,
    l && (m = -m,
    v = -v);
    const y = i.touchesDirection;
    i.swipeDirection = m > 0 ? "prev" : "next",
    i.touchesDirection = v > 0 ? "prev" : "next";
    const g = i.params.loop && !n.cssMode
      , E = i.touchesDirection === "next" && i.allowSlideNext || i.touchesDirection === "prev" && i.allowSlidePrev;
    if (!s.isMoved) {
        if (g && E && i.loopFix({
            direction: i.swipeDirection
        }),
        s.startTranslate = i.getTranslate(),
        i.setTransition(0),
        i.animating) {
            const I = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0
            });
            i.wrapperEl.dispatchEvent(I)
        }
        s.allowMomentumBounce = !1,
        n.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0),
        i.emit("sliderFirstMove", a)
    }
    let S;
    if (new Date().getTime(),
    s.isMoved && s.allowThresholdMove && y !== i.touchesDirection && g && E && Math.abs(m) >= 1) {
        Object.assign(r, {
            startX: c,
            startY: f,
            currentX: c,
            currentY: f,
            startTranslate: s.currentTranslate
        }),
        s.loopSwapReset = !0,
        s.startTranslate = s.currentTranslate;
        return
    }
    i.emit("sliderMove", a),
    s.isMoved = !0,
    s.currentTranslate = m + s.startTranslate;
    let h = !0
      , x = n.resistanceRatio;
    if (n.touchReleaseOnEdges && (x = 0),
    m > 0 ? (g && E && !S && s.allowThresholdMove && s.currentTranslate > (n.centeredSlides ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1] : i.minTranslate()) && i.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    s.currentTranslate > i.minTranslate() && (h = !1,
    n.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + m) ** x))) : m < 0 && (g && E && !S && s.allowThresholdMove && s.currentTranslate < (n.centeredSlides ? i.maxTranslate() + i.slidesSizesGrid[i.slidesSizesGrid.length - 1] : i.maxTranslate()) && i.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: i.slides.length - (n.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
    }),
    s.currentTranslate < i.maxTranslate() && (h = !1,
    n.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - m) ** x))),
    h && (a.preventedByNestedSwiper = !0),
    !i.allowSlideNext && i.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
    !i.allowSlidePrev && i.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
    !i.allowSlidePrev && !i.allowSlideNext && (s.currentTranslate = s.startTranslate),
    n.threshold > 0)
        if (Math.abs(m) > n.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
                s.allowThresholdMove = !0,
                r.startX = r.currentX,
                r.startY = r.currentY,
                s.currentTranslate = s.startTranslate,
                r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                return
            }
        } else {
            s.currentTranslate = s.startTranslate;
            return
        }
    !n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && i.freeMode || n.watchSlidesProgress) && (i.updateActiveIndex(),
    i.updateSlidesClasses()),
    n.freeMode && n.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
    i.updateProgress(s.currentTranslate),
    i.setTranslate(s.currentTranslate))
}
function yt(t) {
    const e = this
      , i = e.touchEventsData;
    let s = t;
    s.originalEvent && (s = s.originalEvent);
    let n;
    if (s.type === "touchend" || s.type === "touchcancel") {
        if (n = [...s.changedTouches].filter(x=>x.identifier === i.touchId)[0],
        !n || n.identifier !== i.touchId)
            return
    } else {
        if (i.touchId !== null || s.pointerId !== i.pointerId)
            return;
        n = s
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView)))
        return;
    i.pointerId = null,
    i.touchId = null;
    const {params: l, touches: o, rtlTranslate: a, slidesGrid: d, enabled: c} = e;
    if (!c || !l.simulateTouch && s.pointerType === "mouse")
        return;
    if (i.allowTouchCallbacks && e.emit("touchEnd", s),
    i.allowTouchCallbacks = !1,
    !i.isTouched) {
        i.isMoved && l.grabCursor && e.setGrabCursor(!1),
        i.isMoved = !1,
        i.startMoving = !1;
        return
    }
    l.grabCursor && i.isMoved && i.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const f = j()
      , p = f - i.touchStartTime;
    if (e.allowClick) {
        const x = s.path || s.composedPath && s.composedPath();
        e.updateClickedSlide(x && x[0] || s.target, x),
        e.emit("tap click", s),
        p < 300 && f - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", s)
    }
    if (i.lastClickTime = j(),
    ee(()=>{
        e.destroyed || (e.allowClick = !0)
    }
    ),
    !i.isTouched || !i.isMoved || !e.swipeDirection || o.diff === 0 && !i.loopSwapReset || i.currentTranslate === i.startTranslate && !i.loopSwapReset) {
        i.isTouched = !1,
        i.isMoved = !1,
        i.startMoving = !1;
        return
    }
    i.isTouched = !1,
    i.isMoved = !1,
    i.startMoving = !1;
    let u;
    if (l.followFinger ? u = a ? e.translate : -e.translate : u = -i.currentTranslate,
    l.cssMode)
        return;
    if (l.freeMode && l.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: u
        });
        return
    }
    const m = u >= -e.maxTranslate() && !e.params.loop;
    let v = 0
      , y = e.slidesSizesGrid[0];
    for (let x = 0; x < d.length; x += x < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
        const I = x < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
        typeof d[x + I] < "u" ? (m || u >= d[x] && u < d[x + I]) && (v = x,
        y = d[x + I] - d[x]) : (m || u >= d[x]) && (v = x,
        y = d[d.length - 1] - d[d.length - 2])
    }
    let g = null
      , E = null;
    l.rewind && (e.isBeginning ? E = l.virtual && l.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (g = 0));
    const S = (u - d[v]) / y
      , h = v < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
    if (p > l.longSwipesMs) {
        if (!l.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (S >= l.longSwipesRatio ? e.slideTo(l.rewind && e.isEnd ? g : v + h) : e.slideTo(v)),
        e.swipeDirection === "prev" && (S > 1 - l.longSwipesRatio ? e.slideTo(v + h) : E !== null && S < 0 && Math.abs(S) > l.longSwipesRatio ? e.slideTo(E) : e.slideTo(v))
    } else {
        if (!l.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(v + h) : e.slideTo(v) : (e.swipeDirection === "next" && e.slideTo(g !== null ? g : v + h),
        e.swipeDirection === "prev" && e.slideTo(E !== null ? E : v))
    }
}
function ce() {
    const t = this
      , {params: e, el: i} = t;
    if (i && i.offsetWidth === 0)
        return;
    e.breakpoints && t.setBreakpoint();
    const {allowSlideNext: s, allowSlidePrev: n, snapGrid: r} = t
      , l = t.virtual && t.params.virtual.enabled;
    t.allowSlideNext = !0,
    t.allowSlidePrev = !0,
    t.updateSize(),
    t.updateSlides(),
    t.updateSlidesClasses();
    const o = l && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides && !o ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.params.loop && !l ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0),
    t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(t.autoplay.resizeTimeout),
    t.autoplay.resizeTimeout = setTimeout(()=>{
        t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume()
    }
    , 500)),
    t.allowSlidePrev = n,
    t.allowSlideNext = s,
    t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow()
}
function bt(t) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(),
    e.params.preventClicksPropagation && e.animating && (t.stopPropagation(),
    t.stopImmediatePropagation())))
}
function Et() {
    const t = this
      , {wrapperEl: e, rtlTranslate: i, enabled: s} = t;
    if (!s)
        return;
    t.previousTranslate = t.translate,
    t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop,
    t.translate === 0 && (t.translate = 0),
    t.updateActiveIndex(),
    t.updateSlidesClasses();
    let n;
    const r = t.maxTranslate() - t.minTranslate();
    r === 0 ? n = 0 : n = (t.translate - t.minTranslate()) / r,
    n !== t.progress && t.updateProgress(i ? -t.translate : t.translate),
    t.emit("setTranslate", t.translate, !1)
}
function Mt(t) {
    const e = this;
    W(e, t.target),
    !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}
function Pt() {
    const t = this;
    t.documentTouchHandlerProceeded || (t.documentTouchHandlerProceeded = !0,
    t.params.touchReleaseOnEdges && (t.el.style.touchAction = "auto"))
}
const ve = (t,e)=>{
    const i = N()
      , {params: s, el: n, wrapperEl: r, device: l} = t
      , o = !!s.nested
      , a = e === "on" ? "addEventListener" : "removeEventListener"
      , d = e;
    i[a]("touchstart", t.onDocumentTouchStart, {
        passive: !1,
        capture: o
    }),
    n[a]("touchstart", t.onTouchStart, {
        passive: !1
    }),
    n[a]("pointerdown", t.onTouchStart, {
        passive: !1
    }),
    i[a]("touchmove", t.onTouchMove, {
        passive: !1,
        capture: o
    }),
    i[a]("pointermove", t.onTouchMove, {
        passive: !1,
        capture: o
    }),
    i[a]("touchend", t.onTouchEnd, {
        passive: !0
    }),
    i[a]("pointerup", t.onTouchEnd, {
        passive: !0
    }),
    i[a]("pointercancel", t.onTouchEnd, {
        passive: !0
    }),
    i[a]("touchcancel", t.onTouchEnd, {
        passive: !0
    }),
    i[a]("pointerout", t.onTouchEnd, {
        passive: !0
    }),
    i[a]("pointerleave", t.onTouchEnd, {
        passive: !0
    }),
    i[a]("contextmenu", t.onTouchEnd, {
        passive: !0
    }),
    (s.preventClicks || s.preventClicksPropagation) && n[a]("click", t.onClick, !0),
    s.cssMode && r[a]("scroll", t.onScroll),
    s.updateOnWindowResize ? t[d](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ce, !0) : t[d]("observerUpdate", ce, !0),
    n[a]("load", t.onLoad, {
        capture: !0
    })
}
;
function It() {
    const t = this
      , {params: e} = t;
    t.onTouchStart = Tt.bind(t),
    t.onTouchMove = xt.bind(t),
    t.onTouchEnd = yt.bind(t),
    t.onDocumentTouchStart = Pt.bind(t),
    e.cssMode && (t.onScroll = Et.bind(t)),
    t.onClick = bt.bind(t),
    t.onLoad = Mt.bind(t),
    ve(t, "on")
}
function Ct() {
    ve(this, "off")
}
var Lt = {
    attachEvents: It,
    detachEvents: Ct
};
const fe = (t,e)=>t.grid && e.grid && e.grid.rows > 1;
function Ot() {
    const t = this
      , {realIndex: e, initialized: i, params: s, el: n} = t
      , r = s.breakpoints;
    if (!r || r && Object.keys(r).length === 0)
        return;
    const l = t.getBreakpoint(r, t.params.breakpointsBase, t.el);
    if (!l || t.currentBreakpoint === l)
        return;
    const a = (l in r ? r[l] : void 0) || t.originalParams
      , d = fe(t, s)
      , c = fe(t, a)
      , f = s.enabled;
    d && !c ? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`),
    t.emitContainerClasses()) : !d && c && (n.classList.add(`${s.containerModifierClass}grid`),
    (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && s.grid.fill === "column") && n.classList.add(`${s.containerModifierClass}grid-column`),
    t.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach(g=>{
        if (typeof a[g] > "u")
            return;
        const E = s[g] && s[g].enabled
          , S = a[g] && a[g].enabled;
        E && !S && t[g].disable(),
        !E && S && t[g].enable()
    }
    );
    const p = a.direction && a.direction !== s.direction
      , u = s.loop && (a.slidesPerView !== s.slidesPerView || p)
      , m = s.loop;
    p && i && t.changeDirection(),
    G(t.params, a);
    const v = t.params.enabled
      , y = t.params.loop;
    Object.assign(t, {
        allowTouchMove: t.params.allowTouchMove,
        allowSlideNext: t.params.allowSlideNext,
        allowSlidePrev: t.params.allowSlidePrev
    }),
    f && !v ? t.disable() : !f && v && t.enable(),
    t.currentBreakpoint = l,
    t.emit("_beforeBreakpoint", a),
    i && (u ? (t.loopDestroy(),
    t.loopCreate(e),
    t.updateSlides()) : !m && y ? (t.loopCreate(e),
    t.updateSlides()) : m && !y && t.loopDestroy()),
    t.emit("breakpoint", a)
}
function zt(t, e, i) {
    if (e === void 0 && (e = "window"),
    !t || e === "container" && !i)
        return;
    let s = !1;
    const n = k()
      , r = e === "window" ? n.innerHeight : i.clientHeight
      , l = Object.keys(t).map(o=>{
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
        e === "window" ? n.matchMedia(`(min-width: ${d}px)`).matches && (s = a) : d <= i.clientWidth && (s = a)
    }
    return s || "max"
}
var At = {
    setBreakpoint: Ot,
    getBreakpoint: zt
};
function Gt(t, e) {
    const i = [];
    return t.forEach(s=>{
        typeof s == "object" ? Object.keys(s).forEach(n=>{
            s[n] && i.push(e + n)
        }
        ) : typeof s == "string" && i.push(e + s)
    }
    ),
    i
}
function kt() {
    const t = this
      , {classNames: e, params: i, rtl: s, el: n, device: r} = t
      , l = Gt(["initialized", i.direction, {
        "free-mode": t.params.freeMode && i.freeMode.enabled
    }, {
        autoheight: i.autoHeight
    }, {
        rtl: s
    }, {
        grid: i.grid && i.grid.rows > 1
    }, {
        "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column"
    }, {
        android: r.android
    }, {
        ios: r.ios
    }, {
        "css-mode": i.cssMode
    }, {
        centered: i.cssMode && i.centeredSlides
    }, {
        "watch-progress": i.watchSlidesProgress
    }], i.containerModifierClass);
    e.push(...l),
    n.classList.add(...e),
    t.emitContainerClasses()
}
function Dt() {
    const t = this
      , {el: e, classNames: i} = t;
    e.classList.remove(...i),
    t.emitContainerClasses()
}
var Vt = {
    addClasses: kt,
    removeClasses: Dt
};
function _t() {
    const t = this
      , {isLocked: e, params: i} = t
      , {slidesOffsetBefore: s} = i;
    if (s) {
        const n = t.slides.length - 1
          , r = t.slidesGrid[n] + t.slidesSizesGrid[n] + s * 2;
        t.isLocked = t.size > r
    } else
        t.isLocked = t.snapGrid.length === 1;
    i.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
    i.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
    e && e !== t.isLocked && (t.isEnd = !1),
    e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
}
var Ft = {
    checkOverflow: _t
}
  , ue = {
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
function Nt(t, e) {
    return function(s) {
        s === void 0 && (s = {});
        const n = Object.keys(s)[0]
          , r = s[n];
        if (typeof r != "object" || r === null) {
            G(e, s);
            return
        }
        if (t[n] === !0 && (t[n] = {
            enabled: !0
        }),
        n === "navigation" && t[n] && t[n].enabled && !t[n].prevEl && !t[n].nextEl && (t[n].auto = !0),
        ["pagination", "scrollbar"].indexOf(n) >= 0 && t[n] && t[n].enabled && !t[n].el && (t[n].auto = !0),
        !(n in t && "enabled"in r)) {
            G(e, s);
            return
        }
        typeof t[n] == "object" && !("enabled"in t[n]) && (t[n].enabled = !0),
        t[n] || (t[n] = {
            enabled: !1
        }),
        G(e, s)
    }
}
const Q = {
    eventsEmitter: Ve,
    update: Ye,
    translate: Ze,
    transition: st,
    slide: ft,
    loop: ht,
    grabCursor: wt,
    events: Lt,
    breakpoints: At,
    checkOverflow: Ft,
    classes: Vt
}
  , Z = {};
class D {
    constructor() {
        let e, i;
        for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++)
            n[r] = arguments[r];
        n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === "Object" ? i = n[0] : [e,i] = n,
        i || (i = {}),
        i = G({}, i),
        e && !i.el && (i.el = e);
        const l = N();
        if (i.el && typeof i.el == "string" && l.querySelectorAll(i.el).length > 1) {
            const c = [];
            return l.querySelectorAll(i.el).forEach(f=>{
                const p = G({}, i, {
                    el: f
                });
                c.push(new D(p))
            }
            ),
            c
        }
        const o = this;
        o.__swiper__ = !0,
        o.support = he(),
        o.device = ze({
            userAgent: i.userAgent
        }),
        o.browser = Ge(),
        o.eventsListeners = {},
        o.eventsAnyListeners = [],
        o.modules = [...o.__modules__],
        i.modules && Array.isArray(i.modules) && o.modules.push(...i.modules);
        const a = {};
        o.modules.forEach(c=>{
            c({
                params: i,
                swiper: o,
                extendParams: Nt(i, a),
                on: o.on.bind(o),
                once: o.once.bind(o),
                off: o.off.bind(o),
                emit: o.emit.bind(o)
            })
        }
        );
        const d = G({}, ue, a);
        return o.params = G({}, d, Z, i),
        o.originalParams = G({}, o.params),
        o.passedParams = G({}, i),
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
        const {slidesEl: i, params: s} = this
          , n = V(i, `.${s.slideClass}, swiper-slide`)
          , r = le(n[0]);
        return le(e) - r
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter(i=>i.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides() {
        const e = this
          , {slidesEl: i, params: s} = e;
        e.slides = V(i, `.${s.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0,
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1,
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"))
    }
    setProgress(e, i) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = s.minTranslate()
          , l = (s.maxTranslate() - n) * e + n;
        s.translateTo(l, typeof i > "u" ? 0 : i),
        s.updateActiveIndex(),
        s.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const i = e.el.className.split(" ").filter(s=>s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", i.join(" "))
    }
    getSlideClasses(e) {
        const i = this;
        return i.destroyed ? "" : e.className.split(" ").filter(s=>s.indexOf("swiper-slide") === 0 || s.indexOf(i.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const i = [];
        e.slides.forEach(s=>{
            const n = e.getSlideClasses(s);
            i.push({
                slideEl: s,
                classNames: n
            }),
            e.emit("_slideClass", s, n)
        }
        ),
        e.emit("_slideClasses", i)
    }
    slidesPerViewDynamic(e, i) {
        e === void 0 && (e = "current"),
        i === void 0 && (i = !1);
        const s = this
          , {params: n, slides: r, slidesGrid: l, slidesSizesGrid: o, size: a, activeIndex: d} = s;
        let c = 1;
        if (typeof n.slidesPerView == "number")
            return n.slidesPerView;
        if (n.centeredSlides) {
            let f = r[d] ? r[d].swiperSlideSize : 0, p;
            for (let u = d + 1; u < r.length; u += 1)
                r[u] && !p && (f += r[u].swiperSlideSize,
                c += 1,
                f > a && (p = !0));
            for (let u = d - 1; u >= 0; u -= 1)
                r[u] && !p && (f += r[u].swiperSlideSize,
                c += 1,
                f > a && (p = !0))
        } else if (e === "current")
            for (let f = d + 1; f < r.length; f += 1)
                (i ? l[f] + o[f] - l[d] < a : l[f] - l[d] < a) && (c += 1);
        else
            for (let f = d - 1; f >= 0; f -= 1)
                l[d] - l[f] < a && (c += 1);
        return c
    }
    update() {
        const e = this;
        if (!e || e.destroyed)
            return;
        const {snapGrid: i, params: s} = e;
        s.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach(l=>{
            l.complete && W(e, l)
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
        s.watchOverflow && i !== e.snapGrid && e.checkOverflow(),
        e.emit("update")
    }
    changeDirection(e, i) {
        i === void 0 && (i = !0);
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
        i && s.update()),
        s
    }
    changeLanguageDirection(e) {
        const i = this;
        i.rtl && e === "rtl" || !i.rtl && e === "ltr" || (i.rtl = e === "rtl",
        i.rtlTranslate = i.params.direction === "horizontal" && i.rtl,
        i.rtl ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`),
        i.el.dir = "rtl") : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`),
        i.el.dir = "ltr"),
        i.update())
    }
    mount(e) {
        const i = this;
        if (i.mounted)
            return !0;
        let s = e || i.params.el;
        if (typeof s == "string" && (s = document.querySelector(s)),
        !s)
            return !1;
        s.swiper = i,
        s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === "SWIPER-CONTAINER" && (i.isElement = !0);
        const n = ()=>`.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let l = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : V(s, n())[0];
        return !l && i.params.createElements && (l = te("div", i.params.wrapperClass),
        s.append(l),
        V(s, `.${i.params.slideClass}`).forEach(o=>{
            l.append(o)
        }
        )),
        Object.assign(i, {
            el: s,
            wrapperEl: l,
            slidesEl: i.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : l,
            hostEl: i.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: s.dir.toLowerCase() === "rtl" || _(s, "direction") === "rtl",
            rtlTranslate: i.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || _(s, "direction") === "rtl"),
            wrongRTL: _(l, "display") === "-webkit-box"
        }),
        !0
    }
    init(e) {
        const i = this;
        if (i.initialized || i.mount(e) === !1)
            return i;
        i.emit("beforeInit"),
        i.params.breakpoints && i.setBreakpoint(),
        i.addClasses(),
        i.updateSize(),
        i.updateSlides(),
        i.params.watchOverflow && i.checkOverflow(),
        i.params.grabCursor && i.enabled && i.setGrabCursor(),
        i.params.loop && i.virtual && i.params.virtual.enabled ? i.slideTo(i.params.initialSlide + i.virtual.slidesBefore, 0, i.params.runCallbacksOnInit, !1, !0) : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0),
        i.params.loop && i.loopCreate(),
        i.attachEvents();
        const n = [...i.el.querySelectorAll('[loading="lazy"]')];
        return i.isElement && n.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),
        n.forEach(r=>{
            r.complete ? W(i, r) : r.addEventListener("load", l=>{
                W(i, l.target)
            }
            )
        }
        ),
        ie(i),
        i.initialized = !0,
        ie(i),
        i.emit("init"),
        i.emit("afterInit"),
        i
    }
    destroy(e, i) {
        e === void 0 && (e = !0),
        i === void 0 && (i = !0);
        const s = this
          , {params: n, el: r, wrapperEl: l, slides: o} = s;
        return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"),
        s.initialized = !1,
        s.detachEvents(),
        n.loop && s.loopDestroy(),
        i && (s.removeClasses(),
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
        ye(s)),
        s.destroyed = !0),
        null
    }
    static extendDefaults(e) {
        G(Z, e)
    }
    static get extendedDefaults() {
        return Z
    }
    static get defaults() {
        return ue
    }
    static installModule(e) {
        D.prototype.__modules__ || (D.prototype.__modules__ = []);
        const i = D.prototype.__modules__;
        typeof e == "function" && i.indexOf(e) < 0 && i.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(i=>D.installModule(i)),
        D) : (D.installModule(e),
        D)
    }
}
Object.keys(Q).forEach(t=>{
    Object.keys(Q[t]).forEach(e=>{
        D.prototype[e] = Q[t][e]
    }
    )
}
);
D.use([ke, De]);
typeof window < "u" && window.SwiperElementRegisterParams && window.SwiperElementRegisterParams(["materialEffect"]);
function Bt(t, e) {
    function i(s) {
        s.target === t && (e.call(t, s),
        t.removeEventListener("transitionend", i))
    }
    e && t.addEventListener("transitionend", i)
}
function Rt({swiper: t, duration: e, transformElements: i, allSlides: s}) {
    const {activeIndex: n} = t
      , r = l=>l.parentElement ? l.parentElement : t.slides.filter(a=>a.shadowRoot && a.shadowRoot === l.parentNode)[0];
    if (t.params.virtualTranslate && e !== 0) {
        let l = !1, o;
        s ? o = i : o = i.filter(a=>{
            const d = a.classList.contains("swiper-slide-transform") ? r(a) : a;
            return t.getSlideIndex(d) === n
        }
        ),
        o.forEach(a=>{
            Bt(a, ()=>{
                if (l || !t || t.destroyed)
                    return;
                l = !0,
                t.animating = !1;
                const d = new window.CustomEvent("transitionend",{
                    bubbles: !0,
                    cancelable: !0
                });
                t.wrapperEl.dispatchEvent(d)
            }
            )
        }
        )
    }
}
function $t({swiper: t, on: e, extendParams: i}) {
    i({
        materialEffect: {
            slideSplitRatio: .65
        }
    });
    const s = ()=>{
        const {slides: r, slidesSizesGrid: l, params: o, size: a} = t
          , {slidesPerView: d, spaceBetween: c, cssMode: f, centeredSlides: p} = o
          , u = p ? .5 : Math.min(Math.max(o.materialEffect.slideSplitRatio, 0), 1)
          , m = p ? .5 : 1 - Math.min(Math.max(o.materialEffect.slideSplitRatio, 0), 1);
        for (let v = 0; v < r.length; v += 1) {
            const y = r[v]
              , g = y.querySelector(".swiper-material-wrapper")
              , E = y.querySelectorAll(".swiper-material-animate-opacity")
              , S = y.querySelectorAll("[data-swiper-material-scale]")
              , h = -y.progress
              , x = y.swiperSlideOffset
              , I = t.translate;
            let M, C = 0, A = 0;
            const w = l[v]
              , T = m === 0 && !p ? 0 : c / 2 / w
              , P = f ? I : 0
              , b = p && d % 2 === 1
              , z = p && d % 2 === 0;
            if (h <= 0)
                if (p && d > 1) {
                    if (h <= 0 && h >= -(d - 2) && (C = I,
                    M = 1,
                    A = 1),
                    b && h < -(d - Math.ceil(d / 2))) {
                        const L = Math.ceil(d / 2) - Math.abs(h);
                        M = L,
                        A = M ** 4,
                        C = I + w * (1 - L) * (1 + T * 2)
                    }
                    if (z && h < -(d / 2 - 1) && h >= -(d / 2)) {
                        const L = d / 2 - Math.abs(h);
                        M = u - T + (m + T * 2) * (d / 2 - Math.abs(h)),
                        A = ((M - u) / (1 - u)) ** 4,
                        C = I + w * (m + T) * (1 - L)
                    }
                    if (z && h < -d / 2) {
                        let L = d / 2 + 1 - Math.abs(h);
                        M = 0,
                        L >= 0 && (L = -T * 2 + L * (1 + T * 2),
                        L = Math.max(Math.min(L, 1), 0),
                        M = (m - T) * L),
                        C = I + w * (m + T) * (2 - L) + w * (m - T) * (1 - L)
                    }
                } else
                    M = 1 + h,
                    C = -x,
                    A = M ** 4;
            if (d === 1)
                h > 0 && (M = 1 - h,
                C = -x + a * Math.min(h, 1),
                A = M ** 4);
            else {
                if (h > 0 && h <= d - 2 && (C = I,
                M = 1,
                A = 1),
                z ? h > d / 2 - 1 && h <= d / 2 : h > d - 2 && h <= d - 1) {
                    const O = z ? Math.floor(d / 2) : 1;
                    M = u - T + (m + T * 2) * (d - O - Math.abs(h)),
                    C = I,
                    u === 1 ? A = M ** 4 : A = ((M - u) / (1 - u)) ** 4
                }
                if (b && h > d - Math.ceil(d / 2)) {
                    const O = Math.ceil(d / 2) - (d - Math.abs(h));
                    C = I - w * (T * 2) * O,
                    M = 1 - O,
                    A = M ** 4
                }
                if (h > d - 1 && h <= d && !p) {
                    const O = d - Math.abs(h)
                      , F = u - T
                      , B = m - T;
                    M = B + (F - B) * O,
                    C = I - w * (m + T) * (1 - O),
                    m === 0 && (A = M ** 4)
                }
                if (h > (p ? d / 2 : d) && !b) {
                    let O = (p ? d / 2 + 1 : d + 1) - Math.abs(h)
                      , F = 0;
                    M = 0,
                    O >= 0 && (O = -T * 2 + O * (1 + T * 2),
                    O = Math.max(Math.min(O, 1), 0),
                    M = (m - T) * O,
                    F = -O * (m + T) * w + O * c),
                    C = -x + a * Math.min(h, 1) + F,
                    A = 0
                }
            }
            M < 0 && (M = 0),
            M > 1 && (M = 1),
            M === 0 && (M = 1e-4),
            y.style.setProperty("--swiper-material-scale", M),
            E.forEach(L=>{
                L.style.opacity = A
            }
            ),
            S.forEach(L=>{
                let O = parseFloat(L.getAttribute("data-swiper-material-scale"));
                (Number.isNaN(O) || !O && O !== 0) && (O = 1),
                L.style.transform = `scale(${1 + (O - 1) * (1 - M)})`
            }
            ),
            t.isHorizontal() ? (g.style.width = `${100 * M}%`,
            g.style.transform = `translate3d(${C - P}px, 0, 0)`) : (g.style.height = `${100 * M}%`,
            g.style.transform = `translate3d(0, ${C - P}px, 0)`)
        }
    }
      , n = r=>{
        const {slides: l} = t
          , o = [];
        for (let a = 0; a < l.length; a += 1) {
            const d = l[a]
              , c = d.querySelector(".swiper-material-wrapper")
              , f = d.querySelectorAll(".swiper-material-animate-opacity")
              , p = d.querySelectorAll("[data-swiper-material-scale]");
            [c, ...p, ...f].forEach(u=>{
                u.style.transitionDuration = `${r}ms`
            }
            ),
            o.push(c)
        }
        Rt({
            swiper: t,
            duration: r,
            transformElements: o,
            allSlides: !0
        })
    }
    ;
    e("beforeInit", ()=>{
        if (t.params.effect !== "material")
            return;
        t.classNames.push(`${t.params.containerModifierClass}material`),
        t.isElement && t.hostEl && t.hostEl.classList.add(`swiper-${t.params.direction}`);
        const r = {
            loopAdditionalSlides: 1,
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode
        };
        Object.assign(t.params, r),
        Object.assign(t.originalParams, r)
    }
    ),
    e("setTranslate", ()=>{
        t.params.effect === "material" && s()
    }
    ),
    e("setTransition", (r,l)=>{
        t.params.effect === "material" && n(l)
    }
    ),
    e("slidesUpdated", ()=>{
        if (!t.params.centeredSlides && t.params.slidesPerView > 1 && !t.params.loop && t.params.materialEffect.slideSplitRatio < 1) {
            const r = t.snapGrid[t.snapGrid.length - 1];
            t.snapGrid.push(r + t.slidesSizesGrid[0] + t.params.spaceBetween)
        }
        t.__preventObserver__ = !0,
        t.el.style.setProperty("--swiper-material-slide-size", `${t.slidesSizesGrid[0]}px`),
        requestAnimationFrame(()=>{
            t.__preventObserver__ = !1
        }
        )
    }
    )
}
const Y = new D(".swiper",{
    modules: [$t],
    effect: "material",
    materialEffect: {
        slideSplitRatio: .65
    },
    grabCursor: !0,
    slidesPerView: 2,
    spaceBetween: 16,
    speed: 600
})
  , R = document.querySelector(".dropdown")
  , Ht = document.querySelector("input");
R.parentElement.addEventListener("click", t=>{
    R.contains(t.target) || R.classList.toggle("visible")
}
);
R.addEventListener("click", t=>{
    const e = parseInt(t.target.getAttribute("data-value"), 10);
    Y.params.slidesPerView = e,
    Y.update(),
    R.classList.remove("visible"),
    document.querySelector(".spv").textContent = e
}
);
Ht.addEventListener("change", t=>{
    const e = t.target.checked;
    Y.params.centeredSlides = e,
    Y.update()
}
);
