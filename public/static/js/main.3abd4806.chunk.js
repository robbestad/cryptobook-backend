(this.webpackJsonpui = this.webpackJsonpui || []).push([
  [0],
  {
    25: function (e, t, s) {},
    47: function (e, t, s) {},
    52: function (e, t, s) {
      "use strict";
      s.r(t);
      var c = s(0),
        a = s.n(c),
        n = s(16),
        i = s.n(n),
        r = (s(25), s(10)),
        j = s(17),
        l = s.n(j),
        b = s(13),
        d = s.n(b),
        o = s(3),
        h = s(5),
        u = s(18),
        O = s.n(u),
        x = (s(47), s(1));
      var m = function () {
          var e = Object(o.g)().asset,
            t = Object(c.useState)(),
            s = Object(r.a)(t, 2),
            a = s[0],
            n = s[1],
            i = Object(c.useState)(""),
            j = Object(r.a)(i, 2),
            b = j[0],
            u = j[1],
            m = Object(c.useState)(),
            v = Object(r.a)(m, 2),
            f = v[0],
            g = v[1],
            p = Object(c.useState)(),
            S = Object(r.a)(p, 2),
            y = S[0],
            F = S[1],
            N = Object(c.useState)(0),
            D = Object(r.a)(N, 2),
            B = D[0],
            w = D[1],
            A = Object(c.useState)(0),
            C = Object(r.a)(A, 2),
            U = C[0],
            k = C[1];
          return (
            Object(c.useEffect)(
              function () {
                g(!0),
                  fetch("/api/asset/".concat(e))
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      g(!1),
                        n(e),
                        u(e.metrics.data.id),
                        F(
                          e.timeSeries.data.values.map(function (e) {
                            return [e[0], e[4]];
                          })
                        );
                      var t = 0,
                        s = 0;
                      e.timeSeries.data.values.forEach(function (e) {
                        (s += e[4]), (t += e[5]);
                      }),
                        w(Math.floor(t / e.timeSeries.data.values.length)),
                        k(s / e.timeSeries.data.values.length);
                    });
              },
              [e]
            ),
            f
              ? Object(x.jsxs)("div", {
                  className: "spinner",
                  children: [
                    " ",
                    Object(x.jsx)(O.a, {
                      type: "Hearts",
                      color: "#00BFFF",
                      height: 100,
                      width: 100,
                      timeout: 15e3,
                    }),
                  ],
                })
              : Object(x.jsxs)("div", {
                  className: "Asset",
                  children: [
                    Object(x.jsxs)("header", {
                      className: "Asset-header",
                      children: [
                        Object(x.jsx)("img", {
                          src: "https://messari.io/asset-images/".concat(
                            b,
                            "/32.png?v=2"
                          ),
                        }),
                        " ",
                        "Daily closing prices",
                      ],
                    }),
                    Object(x.jsxs)("div", {
                      className: "charts-assets",
                      children: [
                        Object(x.jsxs)("ul", {
                          className: "asset-list",
                          children: [
                            Object(x.jsx)("li", {
                              children: Object(x.jsx)(h.b, {
                                to: "/asset/btc",
                                children: "Bitcoin",
                              }),
                            }),
                            Object(x.jsx)("li", {
                              children: Object(x.jsx)(h.b, {
                                to: "/asset/eth",
                                children: "Ethereum",
                              }),
                            }),
                            Object(x.jsx)("li", {
                              children: Object(x.jsx)(h.b, {
                                to: "/asset/sol",
                                children: "Solana",
                              }),
                            }),
                            Object(x.jsx)("li", {
                              children: Object(x.jsx)(h.b, {
                                to: "/asset/ada",
                                children: "Cardano",
                              }),
                            }),
                            Object(x.jsx)("li", {
                              children: Object(x.jsx)(h.b, {
                                to: "/asset/bnb",
                                children: "BNB",
                              }),
                            }),
                            Object(x.jsx)("li", {
                              children: Object(x.jsx)(h.b, {
                                to: "/asset/fun",
                                children: "FUN",
                              }),
                            }),
                            Object(x.jsx)("li", {
                              children: Object(x.jsx)(h.b, {
                                to: "/asset/ray",
                                children: "Ray",
                              }),
                            }),
                            Object(x.jsx)("li", {
                              children: Object(x.jsx)(h.b, {
                                to: "/asset/cake",
                                children: "Cake",
                              }),
                            }),
                            Object(x.jsx)("li", {
                              children: Object(x.jsx)(h.b, {
                                to: "/asset/dot",
                                children: "Dot",
                              }),
                            }),
                            Object(x.jsx)("li", {
                              children: Object(x.jsx)(h.b, {
                                to: "/asset/luna",
                                children: "Luna",
                              }),
                            }),
                            Object(x.jsx)("li", {
                              children: Object(x.jsx)(h.b, {
                                to: "/asset/vet",
                                children: "Vechain",
                              }),
                            }),
                          ],
                        }),
                        Object(x.jsx)(l.a, {
                          highcharts: d.a,
                          className: "test",
                          options: {
                            title: {
                              text:
                                null === a || void 0 === a
                                  ? void 0
                                  : a.metrics.data.name,
                            },
                            xAxis: {
                              type: "datetime",
                              labels: {
                                formatter: function () {
                                  return d.a.dateFormat("%e. %b", this.value);
                                },
                              },
                            },
                            series: [
                              {
                                type: "line",
                                name:
                                  null === a || void 0 === a
                                    ? void 0
                                    : a.metrics.data.slug,
                                data: y,
                              },
                            ],
                          },
                        }),
                      ],
                    }),
                    Object(x.jsx)("div", {
                      children: Object(x.jsxs)("div", {
                        className: "averages",
                        children: [
                          Object(x.jsxs)("div", {
                            children: [
                              "Average price:",
                              " ",
                              new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                minimumFractionDigits: 3,
                                maximumFractionDigits: 6,
                              }).format(U),
                            ],
                          }),
                          Object(x.jsxs)("div", {
                            children: [
                              "Average trading volume:",
                              " ",
                              new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                              }).format(B),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                })
          );
        },
        v = function (e) {
          e &&
            e instanceof Function &&
            s
              .e(3)
              .then(s.bind(null, 53))
              .then(function (t) {
                var s = t.getCLS,
                  c = t.getFID,
                  a = t.getFCP,
                  n = t.getLCP,
                  i = t.getTTFB;
                s(e), c(e), a(e), n(e), i(e);
              });
        };
      i.a.render(
        Object(x.jsx)(a.a.StrictMode, {
          children: Object(x.jsx)(h.a, {
            children: Object(x.jsxs)(o.d, {
              children: [
                Object(x.jsx)(o.b, {
                  exact: !0,
                  path: "/asset",
                  render: function () {
                    return Object(x.jsx)(m, {});
                  },
                }),
                Object(x.jsx)(o.b, {
                  exact: !0,
                  path: "/asset/:asset",
                  render: function () {
                    return Object(x.jsx)(m, {});
                  },
                }),
                Object(x.jsx)(o.a, { to: "/asset/btc" }),
              ],
            }),
          }),
        }),
        document.getElementById("root")
      ),
        v();
    },
  },
  [[52, 1, 2]],
]);
//# sourceMappingURL=main.3abd4806.chunk.js.map
