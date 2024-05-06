import {S as F, P} from "./vendor.js";
const T = function() {
    const m = document.createElement("link").relList;
    if (m && m.supports && m.supports("modulepreload"))
        return;
    for (const t of document.querySelectorAll('link[rel="modulepreload"]'))
        u(t);
    new MutationObserver(t=>{
        for (const o of t)
            if (o.type === "childList")
                for (const r of o.addedNodes)
                    r.tagName === "LINK" && r.rel === "modulepreload" && u(r)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function a(t) {
        const o = {};
        return t.integrity && (o.integrity = t.integrity),
        t.referrerpolicy && (o.referrerPolicy = t.referrerpolicy),
        t.crossorigin === "use-credentials" ? o.credentials = "include" : t.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function u(t) {
        if (t.ep)
            return;
        t.ep = !0;
        const o = a(t);
        fetch(t.href, o)
    }
};
T();
function A(g) {
    const m = g.querySelector(".swiper");
    let a = !1, u = !1, t;
    const o = e=>{
        e.classList.add("fashion-slider-no-transition"),
        u = !0,
        cancelAnimationFrame(t),
        t = requestAnimationFrame(()=>{
            e.classList.remove("fashion-slider-no-transition"),
            u = !1,
            a = !1
        }
        )
    }
    ;
    let r;
    const h = ()=>{
        a || r.slideNext()
    }
      , p = ()=>{
        a || r.slidePrev()
    }
      , x = e=>{
        e.el.querySelector(".fashion-slider-button-next").addEventListener("click", h),
        e.el.querySelector(".fashion-slider-button-prev").addEventListener("click", p)
    }
      , E = e=>{
        e.el.querySelector(".fashion-slider-button-next").removeEventListener("click", h),
        e.el.querySelector(".fashion-slider-button-prev").removeEventListener("click", p)
    }
    ;
    let y;
    return r = new F(m,{
        modules: [P],
        speed: 1300,
        allowTouchMove: !1,
        parallax: !0,
        on: {
            loopFix() {
                y = !1
            },
            transitionStart(e) {
                if (e.params.loop) {
                    if (y)
                        return;
                    y || (y = !0)
                }
                const {slides: n, previousIndex: s, activeIndex: l, el: d} = e;
                u || (a = !0);
                const v = n[l]
                  , f = n[s]
                  , b = f.querySelector(".fashion-slider-scale")
                  , i = f.querySelector("img")
                  , S = v.querySelector("img")
                  , I = l - s
                  , k = v.getAttribute("data-slide-bg-color");
                d.style["background-color"] = k,
                b.style.transform = "scale(0.6)",
                i.style.transitionDuration = "1000ms",
                i.style.transform = "scale(1.2)";
                const L = f.querySelector(".fashion-slider-title-text");
                L.style.transition = "1000ms",
                L.style.color = "rgba(255,255,255,0)";
                const q = N=>{
                    N.target === i && (i.removeEventListener("transitionend", q),
                    S.style.transitionDuration = "1300ms",
                    S.style.transform = "translate3d(0, 0, 0) scale(1.2)",
                    i.style.transitionDuration = "1300ms",
                    i.style.transform = `translate3d(${60 * I}%, 0, 0)  scale(1.2)`)
                }
                ;
                i.addEventListener("transitionend", q)
            },
            transitionEnd(e) {
                const {slides: c, activeIndex: n, el: s} = e
                  , l = c[n]
                  , d = l.querySelector("img")
                  , v = e.params.loop;
                l.querySelector(".fashion-slider-scale").style.transform = "scale(1)",
                d.style.transitionDuration = "1000ms",
                d.style.transform = "scale(1)";
                const f = l.querySelector(".fashion-slider-title-text");
                f.style.transition = "1000ms",
                f.style.color = "rgba(255,255,255,1)";
                const b = i=>{
                    i.target === d && (d.removeEventListener("transitionend", b),
                    a = !1)
                }
                ;
                d.addEventListener("transitionend", b),
                v || (n === 0 ? s.querySelector(".fashion-slider-button-prev").classList.add("fashion-slider-button-disabled") : s.querySelector(".fashion-slider-button-prev").classList.remove("fashion-slider-button-disabled"),
                n === c.length - 1 ? s.querySelector(".fashion-slider-button-next").classList.add("fashion-slider-button-disabled") : s.querySelector(".fashion-slider-button-next").classList.remove("fashion-slider-button-disabled"))
            },
            beforeInit(e) {
                const {el: c} = e;
                o(c)
            },
            init(e) {
                const {slides: c, activeIndex: n, el: s} = e
                  , l = c[n].getAttribute("data-slide-bg-color");
                s.style["background-color"] = l,
                e.emit("transitionEnd"),
                x(e)
            },
            resize(e) {
                o(e.el)
            },
            destroy(e) {
                E(e)
            }
        }
    }),
    r
}
const D = document.querySelector(".fashion-slider");
A(D);
