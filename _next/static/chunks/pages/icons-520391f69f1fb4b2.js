(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [912],
  {
    9063: function (n, e, t) {
      "use strict";
      var r = t(3908),
        i = t(381),
        c = t.n(i),
        s = (t(2784), t(2322));
      e.Z = function (n) {
        var e = n.icon,
          t = n.name,
          i = n.highlightPattern,
          a = void 0 === i ? null : i;
        return (0, s.jsxs)(
          "div",
          {
            className: "item",
            tabIndex: 0,
            onClick: function () {
              c()(t),
                r.Z.success("Copied '".concat(t, "' to clipboard"), {
                  position: "bottom-center",
                });
            },
            children: [
              (0, s.jsx)("div", {
                className: "icon h2",
                children: "function" === typeof e && e(),
              }),
              (0, s.jsx)("div", {
                className: "name",
                children: a
                  ? t.split(a).map(function (n, e) {
                      return n.match(a)
                        ? (0, s.jsx)("b", { children: n }, e)
                        : n;
                    })
                  : t,
              }),
            ],
          },
          t
        );
      };
    },
    5059: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return m;
          },
        });
      var r = t(8694),
        i = t(3947),
        c = (t(2784), t(4794)),
        s = t(2322);
      function a(n) {
        var e = n.iconId,
          t = 'import { IconName } from "react-icons-ng/'.concat(e, '";');
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("h2", { children: "Import" }),
            (0, s.jsx)(c.Z, { language: "jsx", code: t }),
          ],
        });
      }
      function u(n) {
        var e = n.icon,
          t = e.licenseUrl,
          r = e.license,
          i = e.projectUrl;
        return (0, s.jsx)("table", {
          className: "iconset--info",
          children: (0, s.jsxs)("tbody", {
            children: [
              (0, s.jsxs)("tr", {
                children: [
                  (0, s.jsx)("th", { children: "License" }),
                  (0, s.jsx)("td", {
                    children: (0, s.jsx)("a", {
                      href: t,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: r,
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("tr", {
                children: [
                  (0, s.jsx)("th", { children: "Project" }),
                  (0, s.jsx)("td", {
                    children: (0, s.jsx)("a", {
                      href: i,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: i,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var d = t(9063),
        h = t(164),
        o = t(843),
        l = t(1139);
      function b() {
        return (0, s.jsx)("div", {
          className: "icons",
          children: Array(100)
            .fill(null)
            .map(function (n, e) {
              return (0,
              s.jsxs)("div", { className: "item", children: [(0, s.jsx)(l.Z, { height: "60px" }), (0, s.jsx)("div", { className: "name", children: (0, s.jsx)(l.Z, { height: "15px" }) })] }, e);
            }),
        });
      }
      function f(n) {
        var e = n.icon,
          t = h.ZP.lib(function () {
            return (0, o.w)(e.id);
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("h2", { children: "Icons" }),
            (0, s.jsx)(t, {
              fallback: (0, s.jsx)(b, {}),
              children: function (n) {
                var e = n.default;
                return (0, s.jsx)("div", {
                  className: "icons",
                  children: Object.keys(e).map(function (n) {
                    return (0, s.jsx)(d.Z, { icon: e[n], name: n }, n);
                  }),
                });
              },
            }),
          ],
        });
      }
      function x(n) {
        var e = n.iconId,
          t = (0, i.a)(e);
        return (0, s.jsxs)(r.Z, {
          title: t.name,
          children: [
            (0, s.jsx)(u, { icon: t }),
            (0, s.jsx)(a, { iconId: t.id }),
            (0, s.jsx)(f, { icon: t }),
          ],
        });
      }
      var j = t(5632);
      function m() {
        var n = (0, j.useRouter)().query.name;
        return (0, s.jsx)(s.Fragment, {
          children: n && (0, s.jsx)(x, { iconId: n }),
        });
      }
    },
    843: function (n, e, t) {
      "use strict";
      t.d(e, {
        w: function () {
          return r;
        },
      });
      function r(n) {
        return (function (n) {
          switch (n) {
            case "ai":
              return t.e(12).then(t.t.bind(t, 6012, 19));
            case "bi":
              return t.e(713).then(t.t.bind(t, 8713, 19));
            case "bs":
              return t.e(605).then(t.t.bind(t, 2605, 19));
            case "cg":
              return t.e(35).then(t.t.bind(t, 9035, 19));
            case "ci":
              return t.e(412).then(t.t.bind(t, 412, 19));
            case "co":
              return t.e(441).then(t.t.bind(t, 3441, 19));
            case "fa":
              return t.e(942).then(t.t.bind(t, 942, 19));
            case "fa6":
              return t.e(62).then(t.t.bind(t, 1062, 19));
            case "fc":
              return t.e(973).then(t.t.bind(t, 973, 19));
            case "fi":
              return t.e(300).then(t.t.bind(t, 9300, 19));
            case "go":
              return t.e(370).then(t.t.bind(t, 4370, 19));
            case "gi":
              return t.e(106).then(t.t.bind(t, 9106, 19));
            case "gr":
              return t.e(174).then(t.t.bind(t, 2174, 19));
            case "hi":
              return t.e(249).then(t.t.bind(t, 1249, 19));
            case "im":
              return t.e(637).then(t.t.bind(t, 6637, 19));
            case "io5":
              return t.e(206).then(t.t.bind(t, 7206, 19));
            case "lia":
              return t.e(275).then(t.t.bind(t, 1275, 19));
            case "lu":
              return t.e(391).then(t.t.bind(t, 6391, 19));
            case "mc":
              return t.e(792).then(t.t.bind(t, 2792, 19));
            case "md":
              return t.e(741).then(t.t.bind(t, 4741, 19));
            case "pi":
              return t.e(358).then(t.t.bind(t, 6358, 19));
            case "ri":
              return t.e(693).then(t.t.bind(t, 4693, 19));
            case "rx":
              return t.e(989).then(t.t.bind(t, 3989, 19));
            case "si":
              return t.e(241).then(t.t.bind(t, 4241, 19));
            case "sl":
              return t.e(850).then(t.t.bind(t, 4850, 19));
            case "tfi":
              return t.e(791).then(t.t.bind(t, 8791, 19));
            case "tb":
              return t.e(525).then(t.t.bind(t, 4525, 19));
            case "ti":
              return t.e(472).then(t.t.bind(t, 3472, 19));
            case "vsc":
              return t.e(82).then(t.t.bind(t, 1082, 19));
            case "wi":
              return t.e(281).then(t.t.bind(t, 8281, 19));
          }
        })(n);
      }
    },
    3025: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/icons",
        function () {
          return t(5059);
        },
      ]);
    },
  },
  function (n) {
    n.O(0, [736, 622, 268, 774, 888, 179], function () {
      return (e = 3025), n((n.s = e));
      var e;
    });
    var e = n.O();
    _N_E = e;
  },
]);
