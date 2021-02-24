export default function Areas(stateWatch) {
  if (stateWatch === "ak") {
    var data = require("./data/ak.json");
  } else if (stateWatch === "al") {
    var data = require("./data/al.json");
  } else if (stateWatch === "ar") {
    var data = require("./data/ar.json");
  } else if (stateWatch === "az") {
    var data = require("./data/az.json");
  } else if (stateWatch === "ca") {
    var data = require("./data/ca.json");
  } else if (stateWatch === "co") {
    var data = require("./data/co.json");
  } else if (stateWatch === "ct") {
    var data = require("./data/ct.json");
  } else if (stateWatch === "dc") {
    var data = require("./data/dc.json");
  } else if (stateWatch === "de") {
    var data = require("./data/de.json");
  } else if (stateWatch === "fl") {
    var data = require("./data/fl.json");
  } else if (stateWatch === "ga") {
    var data = require("./data/ga.json");
  } else if (stateWatch === "hi") {
    var data = require("./data/hi.json");
  } else if (stateWatch === "ia") {
    var data = require("./data/ia.json");
  } else if (stateWatch === "id") {
    var data = require("./data/id.json");
  } else if (stateWatch === "il") {
    var data = require("./data/il.json");
  } else if (stateWatch === "in") {
    var data = require("./data/in.json");
  } else if (stateWatch === "ks") {
    var data = require("./data/ks.json");
  } else if (stateWatch === "ky") {
    var data = require("./data/ky.json");
  } else if (stateWatch === "la") {
    var data = require("./data/la.json");
  } else if (stateWatch === "ma") {
    var data = require("./data/ma.json");
  } else if (stateWatch === "md") {
    var data = require("./data/md.json");
  } else if (stateWatch === "me") {
    var data = require("./data/me.json");
  } else if (stateWatch === "mi") {
    var data = require("./data/mi.json");
  } else if (stateWatch === "mn") {
    var data = require("./data/mn.json");
  } else if (stateWatch === "mo") {
    var data = require("./data/mo.json");
  } else if (stateWatch === "ms") {
    var data = require("./data/ms.json");
  } else if (stateWatch === "mt") {
    var data = require("./data/mt.json");
  } else if (stateWatch === "nc") {
    var data = require("./data/nc.json");
  } else if (stateWatch === "nd") {
    var data = require("./data/nd.json");
  } else if (stateWatch === "ne") {
    var data = require("./data/ne.json");
  } else if (stateWatch === "nh") {
    var data = require("./data/nh.json");
  } else if (stateWatch === "nj") {
    var data = require("./data/nj.json");
  } else if (stateWatch === "nm") {
    var data = require("./data/nm.json");
  } else if (stateWatch === "nv") {
    var data = require("./data/nv.json");
  } else if (stateWatch === "ny") {
    var data = require("./data/ny.json");
  } else if (stateWatch === "oh") {
    var data = require("./data/oh.json");
  } else if (stateWatch === "ok") {
    var data = require("./data/ok.json");
  } else if (stateWatch === "or") {
    var data = require("./data/or.json");
  } else if (stateWatch === "pa") {
    var data = require("./data/pa.json");
  } else if (stateWatch === "ri") {
    var data = require("./data/ri.json");
  } else if (stateWatch === "sc") {
    var data = require("./data/sc.json");
  } else if (stateWatch === "sd") {
    var data = require("./data/sd.json");
  } else if (stateWatch === "tn") {
    var data = require("./data/tn.json");
  } else if (stateWatch === "tx") {
    var data = require("./data/tx.json");
  } else if (stateWatch === "ut") {
    var data = require("./data/ut.json");
  } else if (stateWatch === "va") {
    var data = require("./data/va.json");
  } else if (stateWatch === "vt") {
    var data = require("./data/vt.json");
  } else if (stateWatch === "wa") {
    var data = require("./data/wa.json");
  } else if (stateWatch === "wi") {
    var data = require("./data/wi.json");
  } else if (stateWatch === "wv") {
    var data = require("./data/wv.json");
  } else if (stateWatch === "wy") {
    var data = require("./data/wy.json");
  } else {
    var data = require("./data/md.json");
  }

  let selectOptions = [];
  let v = data;

  if (stateWatch) {
    for (let i = 0; i < v.length; i++) {
      selectOptions.push(v[i]);
    }
  } else {
    selectOptions = [];
  }
  return selectOptions;
}
