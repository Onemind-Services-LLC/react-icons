"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [268],
  {
    4794: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return h;
        },
      });
      var n = r(5235),
        c = r(3908),
        o = r(381),
        a = r.n(o),
        i = r(3384),
        s = r(3725),
        u = (r(2784), r(795));
      function l(e) {
        return (0, u.w_)({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M368 48h-11.41a8 8 0 01-7.44-5.08A42.18 42.18 0 00309.87 16H202.13a42.18 42.18 0 00-39.28 26.92 8 8 0 01-7.44 5.08H144a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V112a64 64 0 00-64-64zm-48.13 64H192.13a16 16 0 010-32h127.74a16 16 0 010 32z",
              },
            },
          ],
        })(e);
      }
      var p = r(2322);
      function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function h(e) {
        var t = e.code,
          r = e.language,
          n = function () {
            a()(t),
              c.Z.success("Copied to clipboard", { position: "bottom-center" });
          };
        return (0, p.jsx)(
          i.ZP,
          d(
            d({}, i.lG),
            {},
            {
              theme: s.Z,
              code: t.trim(),
              language: r,
              children: function (e) {
                var t = e.className,
                  r = e.style,
                  c = e.tokens,
                  o = e.getLineProps,
                  a = e.getTokenProps;
                return (0, p.jsxs)("pre", {
                  className: "".concat(t, " code"),
                  style: r,
                  children: [
                    (0, p.jsx)("a", {
                      onClick: n,
                      className: "prism-code--copy",
                      children: (0, p.jsx)(l, {}),
                    }),
                    c.map(function (e, t) {
                      return (0, p.jsx)(
                        "div",
                        d(
                          d({}, o({ line: e, key: t })),
                          {},
                          {
                            children: e.map(function (e, t) {
                              return (0,
                              p.jsx)("span", d({}, a({ token: e, key: t })), t);
                            }),
                          }
                        ),
                        t
                      );
                    }),
                  ],
                });
              },
            }
          )
        );
      }
    },
    8694: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return c;
        },
      });
      r(2784);
      var n = r(2322);
      function c(e) {
        var t = e.children,
          r = e.title;
        return (0, n.jsxs)("div", {
          className: "p3",
          children: [(0, n.jsx)("h1", { className: "main", children: r }), t],
        });
      }
    },
  },
]);
