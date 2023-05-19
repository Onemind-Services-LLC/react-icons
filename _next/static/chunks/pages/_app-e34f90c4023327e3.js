(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888, 432],
  {
    2041: function (e, t, n) {
      e.exports = n(1432);
    },
    4943: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, n, r) {
          return !1;
        });
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4793: function (e, t, n) {
      "use strict";
      var r = n(4429);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = n(3903).Z,
        c = n(5154).Z,
        i = o(n(2784)),
        s = n(2172),
        a = n(7787),
        l = n(950),
        u = n(177),
        f = n(2104),
        p = n(4943),
        d = n(9094),
        h = {};
      function m(e, t, n, r) {
        if (e && s.isLocalURL(t)) {
          Promise.resolve(e.prefetch(t, n, r)).catch(function (e) {
            0;
          });
          var o =
            r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
          h[t + "%" + n + (o ? "%" + o : "")] = !0;
        }
      }
      var b = i.default.forwardRef(function (e, t) {
        var n,
          o = e.href,
          b = e.as,
          v = e.children,
          y = e.prefetch,
          g = e.passHref,
          j = e.replace,
          x = e.shallow,
          O = e.scroll,
          C = e.locale,
          w = e.onClick,
          I = e.onMouseEnter,
          M = e.onTouchStart,
          E = e.legacyBehavior,
          U = void 0 === E ? !0 !== Boolean(!1) : E,
          P = c(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (n = v),
          !U ||
            ("string" !== typeof n && "number" !== typeof n) ||
            (n = i.default.createElement("a", null, n));
        var _ = !1 !== y,
          S = i.default.useContext(l.RouterContext),
          L = i.default.useContext(u.AppRouterContext);
        L && (S = L);
        var k,
          T = i.default.useMemo(
            function () {
              var e = s.resolveHref(S, o, !0),
                t = r(e, 2),
                n = t[0],
                c = t[1];
              return { href: n, as: b ? s.resolveHref(S, b) : c || n };
            },
            [S, o, b]
          ),
          R = T.href,
          N = T.as,
          A = i.default.useRef(R),
          B = i.default.useRef(N);
        U && (k = i.default.Children.only(n));
        var F = U ? k && "object" === typeof k && k.ref : t,
          z = f.useIntersection({ rootMargin: "200px" }),
          D = r(z, 3),
          Z = D[0],
          H = D[1],
          Q = D[2],
          q = i.default.useCallback(
            function (e) {
              (B.current === N && A.current === R) ||
                (Q(), (B.current = N), (A.current = R)),
                Z(e),
                F &&
                  ("function" === typeof F
                    ? F(e)
                    : "object" === typeof F && (F.current = e));
            },
            [N, F, R, Q, Z]
          );
        i.default.useEffect(
          function () {
            var e = H && _ && s.isLocalURL(R),
              t = "undefined" !== typeof C ? C : S && S.locale,
              n = h[R + "%" + N + (t ? "%" + t : "")];
            e && !n && m(S, R, N, { locale: t });
          },
          [N, R, H, C, _, S]
        );
        var W = {
          ref: q,
          onClick: function (e) {
            U || "function" !== typeof w || w(e),
              U &&
                k.props &&
                "function" === typeof k.props.onClick &&
                k.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, o, c, a, l, u, f) {
                  if (
                    "A" !== e.currentTarget.nodeName.toUpperCase() ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      s.isLocalURL(n))
                  ) {
                    e.preventDefault();
                    var p = function () {
                      "beforePopState" in t
                        ? t[o ? "replace" : "push"](n, r, {
                            shallow: c,
                            locale: l,
                            scroll: a,
                          })
                        : t[o ? "replace" : "push"](n, {
                            forceOptimisticNavigation: !f,
                          });
                    };
                    u ? i.default.startTransition(p) : p();
                  }
                })(e, S, R, N, j, x, O, C, Boolean(L), _);
          },
          onMouseEnter: function (e) {
            U || "function" !== typeof I || I(e),
              U &&
                k.props &&
                "function" === typeof k.props.onMouseEnter &&
                k.props.onMouseEnter(e),
              (!_ && L) || (s.isLocalURL(R) && m(S, R, N, { priority: !0 }));
          },
          onTouchStart: function (e) {
            U || "function" !== typeof M || M(e),
              U &&
                k.props &&
                "function" === typeof k.props.onTouchStart &&
                k.props.onTouchStart(e),
              (!_ && L) || (s.isLocalURL(R) && m(S, R, N, { priority: !0 }));
          },
        };
        if (!U || g || ("a" === k.type && !("href" in k.props))) {
          var G = "undefined" !== typeof C ? C : S && S.locale,
            K =
              S &&
              S.isLocaleDomain &&
              p.getDomainLocale(N, G, S.locales, S.domainLocales);
          W.href = K || d.addBasePath(a.addLocale(N, G, S && S.defaultLocale));
        }
        return U
          ? i.default.cloneElement(k, W)
          : i.default.createElement("a", Object.assign({}, P, W), n);
      });
      (t.default = b),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          "undefined" === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    2104: function (e, t, n) {
      "use strict";
      var r = n(4429);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            n = e.rootMargin,
            l = e.disabled || !i,
            u = o.useState(!1),
            f = r(u, 2),
            p = f[0],
            d = f[1],
            h = o.useState(null),
            m = r(h, 2),
            b = m[0],
            v = m[1];
          o.useEffect(
            function () {
              if (i) {
                if (l || p) return;
                if (b && b.tagName) {
                  var e = (function (e, t, n) {
                    var r = (function (e) {
                        var t,
                          n = {
                            root: e.root || null,
                            margin: e.rootMargin || "",
                          },
                          r = a.find(function (e) {
                            return e.root === n.root && e.margin === n.margin;
                          });
                        if (r && (t = s.get(r))) return t;
                        var o = new Map(),
                          c = new IntersectionObserver(function (e) {
                            e.forEach(function (e) {
                              var t = o.get(e.target),
                                n = e.isIntersecting || e.intersectionRatio > 0;
                              t && n && t(n);
                            });
                          }, e);
                        return (
                          (t = { id: n, observer: c, elements: o }),
                          a.push(n),
                          s.set(n, t),
                          t
                        );
                      })(n),
                      o = r.id,
                      c = r.observer,
                      i = r.elements;
                    return (
                      i.set(e, t),
                      c.observe(e),
                      function () {
                        if ((i.delete(e), c.unobserve(e), 0 === i.size)) {
                          c.disconnect(), s.delete(o);
                          var t = a.findIndex(function (e) {
                            return e.root === o.root && e.margin === o.margin;
                          });
                          t > -1 && a.splice(t, 1);
                        }
                      }
                    );
                  })(
                    b,
                    function (e) {
                      return e && d(e);
                    },
                    { root: null == t ? void 0 : t.current, rootMargin: n }
                  );
                  return e;
                }
              } else if (!p) {
                var r = c.requestIdleCallback(function () {
                  return d(!0);
                });
                return function () {
                  return c.cancelIdleCallback(r);
                };
              }
            },
            [b, l, n, t, p]
          );
          var y = o.useCallback(function () {
            d(!1);
          }, []);
          return [v, p, y];
        });
      var o = n(2784),
        c = n(564),
        i = "function" === typeof IntersectionObserver,
        s = new Map(),
        a = [];
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1432: function (e, t, n) {
      "use strict";
      var r = n(2624),
        o = n(5458),
        c = n(65),
        i = n(5034),
        s = n(2073),
        a = n(8526);
      function l(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = s(e);
          if (t) {
            var o = s(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return i(this, n);
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AppInitialProps", {
          enumerable: !0,
          get: function () {
            return p.AppInitialProps;
          },
        }),
        Object.defineProperty(t, "NextWebVitalsMetric", {
          enumerable: !0,
          get: function () {
            return p.NextWebVitalsMetric;
          },
        }),
        Object.defineProperty(t, "AppType", {
          enumerable: !0,
          get: function () {
            return p.AppType;
          },
        }),
        (t.default = void 0);
      var u = n(8282).Z,
        f = (0, n(3903).Z)(n(2784)),
        p = n(297);
      function d(e) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = u(
          a.mark(function e(t) {
            var n, r, o;
            return a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.Component),
                      (r = t.ctx),
                      (e.next = 3),
                      p.loadGetInitialProps(n, r)
                    );
                  case 3:
                    return (o = e.sent), e.abrupt("return", { pageProps: o });
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var m = (function (e) {
        c(n, e);
        var t = l(n);
        function n() {
          return r(this, n), t.apply(this, arguments);
        }
        return (
          o(n, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.Component,
                  n = e.pageProps;
                return f.default.createElement(t, Object.assign({}, n));
              },
            },
          ]),
          n
        );
      })(f.default.Component);
      (m.origGetInitialProps = d), (m.getInitialProps = d), (t.default = m);
    },
    2518: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AmpStateContext = void 0);
      var r = (0, n(3903).Z)(n(2784)).default.createContext({});
      t.AmpStateContext = r;
    },
    5397: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isInAmpMode = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.ampFirst,
            n = void 0 !== t && t,
            r = e.hybrid,
            o = void 0 !== r && r,
            c = e.hasQuery,
            i = void 0 !== c && c;
          return n || (o && i);
        });
    },
    177: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TemplateContext =
          t.GlobalLayoutRouterContext =
          t.LayoutRouterContext =
          t.AppRouterContext =
            void 0);
      var r = (0, n(3903).Z)(n(2784)),
        o = r.default.createContext(null);
      t.AppRouterContext = o;
      var c = r.default.createContext(null);
      t.LayoutRouterContext = c;
      var i = r.default.createContext(null);
      t.GlobalLayoutRouterContext = i;
      var s = r.default.createContext(null);
      t.TemplateContext = s;
    },
    2001: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultHead = u),
        (t.default = void 0);
      var r = n(9419).Z,
        o = n(3903).Z,
        c = (0, n(199).Z)(n(2784)),
        i = o(n(1023)),
        s = n(2518),
        a = n(4523),
        l = n(5397);
      n(297);
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [c.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              c.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function f(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === c.default.Fragment
          ? e.concat(
              c.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var p = ["name", "httpEquiv", "charSet", "itemProp"];
      function d(e, t) {
        var n = t.inAmpMode;
        return e
          .reduce(f, [])
          .reverse()
          .concat(u(n).reverse())
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var c = !0,
                  i = !1;
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  i = !0;
                  var s = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(s) ? (c = !1) : e.add(s);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (c = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (var a = 0, l = p.length; a < l; a++) {
                      var u = p[a];
                      if (o.props.hasOwnProperty(u))
                        if ("charSet" === u) n.has(u) ? (c = !1) : n.add(u);
                        else {
                          var f = o.props[u],
                            d = r[u] || new Set();
                          ("name" === u && i) || !d.has(f)
                            ? (d.add(f), (r[u] = d))
                            : (c = !1);
                        }
                    }
                }
                return c;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var o = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some(function (t) {
                return e.props.href.startsWith(t);
              })
            ) {
              var i = r({}, e.props || {});
              return (
                (i["data-href"] = i.href),
                (i.href = void 0),
                (i["data-optimized-fonts"] = !0),
                c.default.cloneElement(e, i)
              );
            }
            return c.default.cloneElement(e, { key: o });
          });
      }
      var h = function (e) {
        var t = e.children,
          n = c.useContext(s.AmpStateContext),
          r = c.useContext(a.HeadManagerContext);
        return c.default.createElement(
          i.default,
          {
            reduceComponentsToState: d,
            headManager: r,
            inAmpMode: l.isInAmpMode(n),
          },
          t
        );
      };
      (t.default = h),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          "undefined" === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    1023: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t = e.headManager,
            n = e.reduceComponentsToState;
          function s() {
            if (t && t.mountedInstances) {
              var o = r.Children.toArray(
                Array.from(t.mountedInstances).filter(Boolean)
              );
              t.updateHead(n(o, e));
            }
          }
          if (o) {
            var a;
            null == t || null == (a = t.mountedInstances) || a.add(e.children),
              s();
          }
          return (
            c(function () {
              var n;
              return (
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.add(e.children),
                function () {
                  var n;
                  null == t ||
                    null == (n = t.mountedInstances) ||
                    n.delete(e.children);
                }
              );
            }),
            c(function () {
              return (
                t && (t._pendingUpdate = s),
                function () {
                  t && (t._pendingUpdate = s);
                }
              );
            }),
            i(function () {
              return (
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null)),
                function () {
                  t &&
                    t._pendingUpdate &&
                    (t._pendingUpdate(), (t._pendingUpdate = null));
                }
              );
            }),
            null
          );
        });
      var r = (0, n(199).Z)(n(2784));
      var o = !1,
        c = o ? function () {} : r.useLayoutEffect,
        i = o ? function () {} : r.useEffect;
    },
    8715: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return R;
          },
        });
      var r = n(5235);
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function i(e, t) {
        return (
          (i =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          i(e, t)
        );
      }
      var s = n(4280);
      function a(e, t) {
        if (t && ("object" === s(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function l(e) {
        return (
          (l = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          l(e)
        );
      }
      n(3491);
      var u = n(2784),
        f = n(2322);
      function p(e) {
        var t = e.children;
        return (0, f.jsx)("main", { className: "container", children: t });
      }
      var d = n(3947),
        h = n(2601),
        m = n(5632);
      function b(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++)
              (n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (r = 0; r < c.length; r++)
            (n = c[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var v = n(9097),
        y = n.n(v),
        g = ["children", "href", "activeClassName"];
      function j(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var O = function (e) {
          var t = e.children,
            n = e.href,
            r = e.activeClassName,
            o = void 0 === r ? "active" : r,
            c = b(e, g),
            i = (0, m.useRouter)(),
            s = u.Children.only(t),
            a = s.props.className || "";
          return (
            i.asPath === n && o && (a = "".concat(a, " ").concat(o).trim()),
            (0, f.jsx)(
              y(),
              x(
                x({ href: n }, c),
                {},
                { children: u.cloneElement(s, { className: a }) }
              )
            )
          );
        },
        C = n(9526);
      var w = function () {
        return (0, f.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "4rem",
          height: "4rem",
          fill: "none",
          viewBox: "0 0 602 602",
          children: [
            (0, f.jsxs)("g", {
              children: [
                (0, f.jsx)("path", {
                  stroke: "#E91E63",
                  strokeMiterlimit: "10",
                  strokeWidth: "24",
                  d: "M274.151 201.657c66.903-17.997 131.399-24.32 182.018-19.756l1.077-11.95-1.077 11.95c30.477 2.747 55.643 9.518 73.763 18.622 18.414 9.252 27.823 19.969 30.45 29.72h0c2.776 10.303-.231 25.206-12.364 43.484-11.936 17.98-31.68 37.56-58.646 56.139v.001c-40.663 28.018-98.24 52.637-161.885 69.759-65.406 17.596-128.7 26.024-178.487 21.651h0c-31.569-2.772-57.609-10.095-76.356-19.82-19.058-9.886-28.938-21.326-31.677-31.495h0c-2.636-9.786-.088-23.613 10.677-40.523 10.622-16.687 28.385-34.904 52.944-52.425l-6.724-9.425 6.724 9.425c41.556-29.647 101.985-57.176 169.563-75.357zm0 0l-3.116-11.583 3.116 11.583z",
                }),
                (0, f.jsx)("path", {
                  stroke: "#E91E63",
                  strokeMiterlimit: "10",
                  strokeWidth: "24",
                  d: "M373.214 228.061c49.036 48.941 86.758 101.635 108.114 147.755l10.889-5.042-10.889 5.042c12.859 27.768 19.578 52.949 20.754 73.194 1.194 20.573-3.382 34.081-10.514 41.232h0c-7.535 7.555-21.944 12.403-43.839 11.035-21.539-1.346-48.366-8.656-77.939-22.719l-.001-.001c-44.594-21.205-94.702-58.759-141.351-105.317l-8.138 8.153 8.138-8.153c-47.94-47.846-86.885-98.447-107.99-143.751h0c-13.383-28.726-20.062-54.939-21.013-76.038-.967-21.448 4-35.725 11.437-43.182h0c7.157-7.176 20.405-11.883 40.432-11.016 19.761.856 44.419 7.13 71.872 19.639l4.975-10.92-4.975 10.92c46.451 21.165 100.505 59.734 150.038 109.169zm0 0l8.477-8.494-8.477 8.494z",
                }),
                (0, f.jsx)("path", {
                  stroke: "#E91E63",
                  strokeMiterlimit: "10",
                  strokeWidth: "24",
                  d: "M325.98 494.55l9.811 6.909-9.811-6.909c-17.619 25.02-36.067 43.429-53.012 54.569-17.221 11.322-31.207 14.112-40.966 11.511h0c-10.311-2.747-21.714-12.801-31.476-32.447-9.604-19.326-16.687-46.213-19.294-78.855v-.001c-3.933-49.221 3.537-111.393 20.533-175.07l-11.594-3.095 11.594 3.095c17.467-65.44 41.817-124.466 70.5-165.396h0c18.186-25.953 37.549-44.843 55.345-56.216 18.091-11.562 32.94-14.398 43.117-11.686h0c9.793 2.61 20.494 11.73 29.756 29.506 9.139 17.541 16.035 42.032 18.928 72.06 4.896 50.811-1.48 116.906-19.526 184.519-17.867 66.937-44.642 125.951-73.905 167.506z",
                }),
                (0, f.jsx)("animateTransform", {
                  attributeName: "transform",
                  attributeType: "XML",
                  dur: "20s",
                  from: "0 301 301",
                  repeatCount: "indefinite",
                  to: "360 301 301",
                  type: "rotate",
                }),
              ],
            }),
            (0, f.jsx)("path", {
              fill: "#E91E63",
              d: "M301.007 269.002a62.496 62.496 0 00-4.799-4.301c-1.568-1.254-3.439-2.596-5.615-4.026a30.06 30.06 0 00-7.055-3.411c-2.527-.842-5.007-1.264-7.436-1.264-8.779 0-15.657 2.43-20.635 7.29-4.979 4.859-7.467 11.601-7.467 20.223 0 8.661 4.488 17.479 13.463 26.455 0 0 24.492 21.967 39.544 36.043 15.053-14.076 39.545-36.043 39.545-36.043 8.975-8.976 13.463-17.794 13.463-26.455 0-8.622-2.488-15.364-7.467-20.223-4.978-4.86-11.856-7.29-20.635-7.29-2.429 0-4.909.422-7.436 1.264a30.06 30.06 0 00-7.055 3.411c-2.176 1.43-4.047 2.772-5.615 4.026a62.699 62.699 0 00-4.8 4.301z",
            }),
          ],
        });
      };
      function I(e) {
        var t = e.isOpen,
          n = e.setIsOpen,
          r = (0, m.useRouter)();
        return (
          (0, u.useEffect)(
            function () {
              n(!1);
            },
            [r]
          ),
          (0, f.jsxs)("div", {
            className: "brand",
            children: [
              (0, f.jsx)(O, {
                href: "/",
                children: (0, f.jsxs)("a", {
                  children: [
                    (0, f.jsx)(w, {}),
                    (0, f.jsx)("span", { children: C.xu }),
                  ],
                }),
              }),
              (0, f.jsx)("div", {
                className: "brand--navmenu",
                children: (0, f.jsx)("button", {
                  className: "menu ".concat(t && "active"),
                  onClick: function () {
                    n(!t);
                  },
                  children: (0, f.jsx)("div", { children: "Menu" }),
                }),
              }),
            ],
          })
        );
      }
      var M = "/search";
      function E() {
        var e = d.Q.sort(function (e, t) {
            return e.name > t.name ? 1 : -1;
          }),
          t = (0, m.useRouter)(),
          n = (0, u.useState)(!1),
          r = n[0],
          o = n[1],
          c = (0, u.useState)(null),
          i = c[0],
          s = c[1],
          a = u.useContext(h._),
          l = a.query,
          p = a.setQuery,
          b = a.setResults,
          v = function (e) {
            p(e), s(e);
          };
        return (0, f.jsxs)("div", {
          className: "sidebar pt3",
          children: [
            (0, f.jsx)(I, { isOpen: r, setIsOpen: o }),
            (0, f.jsx)("div", {
              className: "search p2",
              children: (0, f.jsx)("input", {
                type: "text",
                "aria-label": "search",
                className: "px2 py1",
                placeholder: "\ud83d\udd0d Search Icons",
                onFocus: function (e) {
                  t.asPath.includes(M) || t.push(M);
                },
                onBlur: function (e) {
                  0 === e.target.value.length &&
                    window &&
                    window.history.back();
                },
                onChange: function (e) {
                  var n = e.target.value.toLowerCase();
                  t.push({ pathname: M, query: n ? { q: n } : null }),
                    v(n),
                    b(function (e) {
                      return {};
                    });
                },
                value: null !== i ? i : l,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "off",
                spellCheck: "false",
              }),
            }),
            (0, f.jsxs)("ul", {
              className: "sidebar--links ".concat(r && "active"),
              children: [
                (0, f.jsx)("li", {
                  children: (0, f.jsx)(O, {
                    href: "/",
                    children: (0, f.jsx)("a", {
                      className: "rounded px2 py1",
                      children: "Home",
                    }),
                  }),
                }),
                e.map(function (e) {
                  return (0, f.jsx)(
                    "li",
                    {
                      children: (0, f.jsx)(O, {
                        href: { pathname: "icons", query: { name: e.id } },
                        children: (0, f.jsx)("a", {
                          className: "rounded px2 py1",
                          onClick: function (e) {
                            return v("");
                          },
                          children: e.name,
                        }),
                      }),
                    },
                    e.id
                  );
                }),
              ],
            }),
          ],
        });
      }
      var U = n(2041),
        P = n(7729),
        _ = n.n(P);
      function S(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function k(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = l(e);
          if (t) {
            var o = l(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return a(this, n);
        };
      }
      var T = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && i(e, t);
          })(a, e);
          var t,
            n,
            r,
            s = k(a);
          function a() {
            return o(this, a), s.apply(this, arguments);
          }
          return (
            (t = a),
            (n = [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.pageProps,
                    n = e.Component;
                  return (0, f.jsx)(h.z, {
                    children: (0, f.jsxs)(f.Fragment, {
                      children: [
                        (0, f.jsx)(E, {}),
                        (0, f.jsx)(_(), {
                          children: (0, f.jsx)("title", { children: C.tH }),
                        }),
                        (0, f.jsx)(p, { children: (0, f.jsx)(n, L({}, t)) }),
                      ],
                    }),
                  });
                },
              },
            ]) && c(t.prototype, n),
            r && c(t, r),
            a
          );
        })(U.default),
        R = T;
    },
    9526: function (e, t, n) {
      "use strict";
      n.d(t, {
        IT: function () {
          return i;
        },
        Qy: function () {
          return c;
        },
        tH: function () {
          return r;
        },
        xu: function () {
          return o;
        },
      });
      var r = "React Icons",
        o = "react-icons-ng",
        c =
          "\nimport { FaBeer } from 'react-icons-ng/fa';\n\nclass Question extends React.Component {\n  render() {\n    return <h3> Lets go for a <FaBeer />? </h3>\n  }\n}",
        i =
          '\nimport { FaBeer } from "@react-icons-ng/all-files/fa/FaBeer";\n\nclass Question extends React.Component {\n  render() {\n    return <h3> Lets go for a <FaBeer />? </h3>\n  }\n}';
    },
    3947: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return r;
        },
        a: function () {
          return o;
        },
      });
      var r = n(795).jt,
        o = function (e) {
          return r.find(function (t) {
            return t.id === e;
          });
        };
    },
    2601: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                c = [],
                i = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(i = (r = n.next()).done) &&
                  (c.push(r.value), !t || c.length !== t);
                  i = !0
                );
              } catch (a) {
                (s = !0), (o = a);
              } finally {
                try {
                  i || null == n.return || n.return();
                } finally {
                  if (s) throw o;
                }
              }
              return c;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" === typeof e) return r(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? r(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      n.d(t, {
        _: function () {
          return s;
        },
        z: function () {
          return a;
        },
      });
      var c = n(2784),
        i = n(2322),
        s = c.createContext({
          query: "",
          setQuery: function () {},
          results: {},
          setResults: function () {},
        }),
        a = function (e) {
          var t = e.children,
            n = o(c.useState(""), 2),
            r = n[0],
            a = n[1],
            l = o(c.useState({}), 2),
            u = l[0],
            f = l[1];
          return (0, i.jsx)(s.Provider, {
            value: { query: r, setQuery: a, results: u, setResults: f },
            children: t,
          });
        };
    },
    6570: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(8715);
        },
      ]);
    },
    3491: function () {},
    7729: function (e, t, n) {
      e.exports = n(2001);
    },
    9097: function (e, t, n) {
      e.exports = n(4793);
    },
    5632: function (e, t, n) {
      e.exports = n(5564);
    },
    795: function (e, t, n) {
      "use strict";
      n.d(t, {
        w_: function () {
          return u;
        },
        jt: function () {
          return r;
        },
      });
      var r = [
          {
            id: "ai",
            name: "Ant Design Icons",
            projectUrl: "https://github.com/ant-design/ant-design-icons",
            license: "MIT",
            licenseUrl: "https://opensource.org/licenses/MIT",
          },
          {
            id: "bi",
            name: "BoxIcons",
            projectUrl: "https://github.com/atisawd/boxicons",
            license: "MIT",
            licenseUrl:
              "https://github.com/atisawd/boxicons/blob/master/LICENSE",
          },
          {
            id: "bs",
            name: "Bootstrap Icons",
            projectUrl: "https://github.com/twbs/icons",
            license: "MIT",
            licenseUrl: "https://opensource.org/licenses/MIT",
          },
          {
            id: "cg",
            name: "css.gg",
            projectUrl: "https://github.com/astrit/css.gg",
            license: "MIT",
            licenseUrl: "https://opensource.org/licenses/MIT",
          },
          {
            id: "ci",
            name: "Circum Icons",
            projectUrl: "https://circumicons.com/",
            license: "MPL-2.0 license",
            licenseUrl:
              "https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE",
          },
          {
            id: "co",
            name: "Coolicons",
            projectUrl: "https://github.com/krystonschwarze/coolicons",
            license: "CC BY 4.0 License",
            licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
          },
          {
            id: "fa",
            name: "Font Awesome 5",
            projectUrl: "https://fontawesome.com/",
            license: "CC BY 4.0 License",
            licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
          },
          {
            id: "fa6",
            name: "Font Awesome 6",
            projectUrl: "https://fontawesome.com/",
            license: "CC BY 4.0 License",
            licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
          },
          {
            id: "fc",
            name: "Flat Color Icons",
            projectUrl: "https://github.com/icons8/flat-color-icons",
            license: "MIT",
            licenseUrl: "https://opensource.org/licenses/MIT",
          },
          {
            id: "fi",
            name: "Feather",
            projectUrl: "https://feathericons.com/",
            license: "MIT",
            licenseUrl:
              "https://github.com/feathericons/feather/blob/master/LICENSE",
          },
          {
            id: "go",
            name: "Github Octicons icons",
            projectUrl: "https://octicons.github.com/",
            license: "MIT",
            licenseUrl:
              "https://github.com/primer/octicons/blob/master/LICENSE",
          },
          {
            id: "gi",
            name: "Game Icons",
            projectUrl: "https://game-icons.net/",
            license: "CC BY 3.0",
            licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
          },
          {
            id: "gr",
            name: "Grommet-Icons",
            projectUrl: "https://github.com/grommet/grommet-icons",
            license: "Apache License Version 2.0",
            licenseUrl: "http://www.apache.org/licenses/",
          },
          {
            id: "hi",
            name: "Heroicons",
            projectUrl: "https://github.com/tailwindlabs/heroicons",
            license: "MIT",
            licenseUrl: "https://opensource.org/licenses/MIT",
          },
          {
            id: "im",
            name: "IcoMoon Free",
            projectUrl: "https://github.com/Keyamoon/IcoMoon-Free",
            license: "CC BY 4.0 License",
            licenseUrl:
              "https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt",
          },
          {
            id: "io5",
            name: "Ionicons 5",
            projectUrl: "https://ionicons.com/",
            license: "MIT",
            licenseUrl:
              "https://github.com/ionic-team/ionicons/blob/master/LICENSE",
          },
          {
            id: "lia",
            name: "Icons8 Line Awesome",
            projectUrl: "https://icons8.com/line-awesome",
            license: "MIT",
            licenseUrl:
              "https://github.com/icons8/line-awesome/blob/master/LICENSE.md",
          },
          {
            id: "lu",
            name: "Lucide",
            projectUrl: "https://lucide.dev/",
            license: "ISC",
            licenseUrl:
              "https://github.com/lucide-icons/lucide/blob/main/LICENSE",
          },
          {
            id: "mc",
            name: "MingCute icons",
            projectUrl: "https://github.com/Richard9394/MingCute.git",
            license: "Apache License Version 2.0",
            licenseUrl:
              "https://github.com/Richard9394/MingCute/blob/main/LICENSE",
          },
          {
            id: "md",
            name: "Material Design icons",
            projectUrl: "http://google.github.io/material-design-icons/",
            license: "Apache License Version 2.0",
            licenseUrl:
              "https://github.com/google/material-design-icons/blob/master/LICENSE",
          },
          {
            id: "pi",
            name: "Phosphor Icons",
            projectUrl: "https://github.com/phosphor-icons/core",
            license: "MIT",
            licenseUrl:
              "https://github.com/phosphor-icons/core/blob/main/LICENSE",
          },
          {
            id: "ri",
            name: "Remix Icon",
            projectUrl: "https://github.com/Remix-Design/RemixIcon",
            license: "Apache License Version 2.0",
            licenseUrl: "http://www.apache.org/licenses/",
          },
          {
            id: "rx",
            name: "Radix Icons",
            projectUrl: "https://icons.radix-ui.com",
            license: "MIT",
            licenseUrl: "https://github.com/radix-ui/icons/blob/master/LICENSE",
          },
          {
            id: "si",
            name: "Simple Icons",
            projectUrl: "https://simpleicons.org/",
            license: "CC0 1.0 Universal",
            licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
          },
          {
            id: "sl",
            name: "Simple Line Icons",
            projectUrl: "https://thesabbir.github.io/simple-line-icons/",
            license: "MIT",
            licenseUrl: "https://opensource.org/licenses/MIT",
          },
          {
            id: "tfi",
            name: "Themify Icons",
            projectUrl: "https://github.com/lykmapipo/themify-icons",
            license: "MIT",
            licenseUrl:
              "https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE",
          },
          {
            id: "tb",
            name: "Tabler Icons",
            projectUrl: "https://github.com/tabler/tabler-icons",
            license: "MIT",
            licenseUrl: "https://opensource.org/licenses/MIT",
          },
          {
            id: "ti",
            name: "Typicons",
            projectUrl: "http://s-ings.com/typicons/",
            license: "CC BY-SA 3.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
          },
          {
            id: "vsc",
            name: "VS Code Icons",
            projectUrl: "https://github.com/microsoft/vscode-codicons",
            license: "CC BY 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
          },
          {
            id: "wi",
            name: "Weather Icons",
            projectUrl: "https://erikflowers.github.io/weather-icons/",
            license: "SIL OFL 1.1",
            licenseUrl: "http://scripts.sil.org/OFL",
          },
        ],
        o = n(2784),
        c = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = o.createContext && o.createContext(c),
        s = function () {
          return (
            (s =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            s.apply(this, arguments)
          );
        },
        a = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        };
      function l(e) {
        return (
          e &&
          e.map(function (e, t) {
            return o.createElement(e.tag, s({ key: t }, e.attr), l(e.child));
          })
        );
      }
      function u(e) {
        return function (t) {
          return o.createElement(f, s({ attr: s({}, e.attr) }, t), l(e.child));
        };
      }
      function f(e) {
        var t = function (t) {
          var n,
            r = e.attr,
            c = e.size,
            i = e.title,
            l = a(e, ["attr", "size", "title"]),
            u = c || t.size || "1em";
          return (
            t.className && (n = t.className),
            e.className && (n = (n ? n + " " : "") + e.className),
            o.createElement(
              "svg",
              s(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                r,
                l,
                {
                  className: n,
                  style: s(s({ color: e.color || t.color }, t.style), e.style),
                  height: u,
                  width: u,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              i && o.createElement("title", null, i),
              e.children
            )
          );
        };
        return void 0 !== i
          ? o.createElement(i.Consumer, null, function (e) {
              return t(e);
            })
          : t(c);
      }
    },
    5235: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6570), t(5564);
    });
    var n = e.O();
    _N_E = n;
  },
]);
