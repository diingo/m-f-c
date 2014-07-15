
profile.view = function(ctrl) {
  return m("body", [
      m("p", {class: "vanilla"}, "Hello"),
      m("div", {class: "row"}, [
        m("div", {class: "large-6 columns"}, "Snugglepuss blah blah idaho potato"),
        m("div", {class: "large-6 columns"}, "Quaint little bird")
      ])
    ])

};

m.module(document.getElementsByTagName("body")[0], profile);