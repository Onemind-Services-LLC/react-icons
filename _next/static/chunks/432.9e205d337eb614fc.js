"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [432],
  {
    1432: function (e, t, r) {
      var n = r(2624),
        u = r(5458),
        o = r(65),
        i = r(5034),
        c = r(2073),
        a = r(8526);
      function p(e) {
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
          var r,
            n = c(e);
          if (t) {
            var u = c(this).constructor;
            r = Reflect.construct(n, arguments, u);
          } else r = n.apply(this, arguments);
          return i(this, r);
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AppInitialProps", {
          enumerable: !0,
          get: function () {
            return l.AppInitialProps;
          },
        }),
        Object.defineProperty(t, "NextWebVitalsMetric", {
          enumerable: !0,
          get: function () {
            return l.NextWebVitalsMetric;
          },
        }),
        Object.defineProperty(t, "AppType", {
          enumerable: !0,
          get: function () {
            return l.AppType;
          },
        }),
        (t.default = void 0);
      var f = r(8282).Z,
        s = (0, r(3903).Z)(r(2784)),
        l = r(297);
      function y(e) {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = f(
          a.mark(function e(t) {
            var r, n, u;
            return a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t.Component),
                      (n = t.ctx),
                      (e.next = 3),
                      l.loadGetInitialProps(r, n)
                    );
                  case 3:
                    return (u = e.sent), e.abrupt("return", { pageProps: u });
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var h = (function (e) {
        o(r, e);
        var t = p(r);
        function r() {
          return n(this, r), t.apply(this, arguments);
        }
        return (
          u(r, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.Component,
                  r = e.pageProps;
                return s.default.createElement(t, Object.assign({}, r));
              },
            },
          ]),
          r
        );
      })(s.default.Component);
      (h.origGetInitialProps = y), (h.getInitialProps = y), (t.default = h);
    },
  },
]);
