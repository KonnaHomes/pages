// ============================================================================
// Educational Pathway Knowledge Graph — app.js
// ============================================================================

(function() {
"use strict";

var C = {
  core:    { color: "#fff",    label: "Core" },
  family:  { color: "#e879f9", label: "Students" },
  kaplan:  { color: "#34d399", label: "Kaplan Partners" },
  tier1:   { color: "#a78bfa", label: "Priority 1: Malaysia & NZ" },
  tier2:   { color: "#60a5fa", label: "Priority 2: Canada & AU" },
  tier3:   { color: "#fb923c", label: "Priority 3: Germany & Ireland" },
  tier4:   { color: "#94a3b8", label: "Priority 4: NL & Turkey" },
  pathway: { color: "#38bdf8", label: "Pathway Info" }
};

var N = [
  {id:"center",label:"Business\nManagement\nPathway",cat:"core",r:48,detail:{
    tag:"Overview",title:"Business Management BSc \u2014 Alternative Pathway Planning",
    body:"<p>This knowledge graph maps the preferred university destinations for Business Management undergraduate study, as alternatives to the UK following the Student Visa Brake (effective 26 March 2026).</p><p>Universities are organised by priority tier. Institutions marked with \u2B50 are <strong>Kaplan International Pathway partners</strong>, offering the strongest route for credit recognition from the current Foundation Year programme.</p><p><strong>Drag nodes. Click to explore. Scroll to zoom.</strong></p>"
  }},
  {id:"students",label:"Three\nStudents",cat:"family",r:38,detail:{
    tag:"Students",title:"Three Students \u2014 Three Timelines",
    body:"<p>This pathway planning covers three students from the same family:</p><ul><li><strong>Student 1 (Eldest):</strong> Graduating high school June 2026. Needs university entry for September/October 2026.</li><li><strong>Student 2 (Middle):</strong> Currently enrolled in Foundation Year (online, Digital Pathway) for Business Management BSc. Directly affected by the UK Visa Brake.</li><li><strong>Student 3 (Youngest):</strong> Expected to graduate high school 2028.</li></ul><p>The family is seeking a <strong>long-term educational partner</strong> that can serve all three students over the period 2026\u20132031.</p>"
  }},
  {id:"s1",label:"Student 1\nGrad Jun '26",cat:"family",r:28,detail:{
    tag:"Student 1",title:"Eldest \u2014 Graduating June 2026",
    body:"<p>Completing high school June 2026. Needs to begin an undergraduate programme by September/October 2026.</p><p>Priority: Foundation Year at a Tier 1 university (Malaysia or New Zealand) for September 2026 intake.</p>"
  }},
  {id:"s2",label:"Student 2\nFoundation Yr",cat:"family",r:28,detail:{
    tag:"Student 2",title:"Middle \u2014 Current Foundation Year Student",
    body:"<p>Currently enrolled in online Foundation Year (Digital Pathway/Kaplan) for Business Management BSc(Hons) at the University of Brighton.</p><p>The UK Visa Brake (effective 26 March 2026) prevents Student visa applications from outside the UK for Sudanese nationals. Exploring alternative pathways to continue her degree at a partner institution.</p>"
  }},
  {id:"s3",label:"Student 3\nGrad 2028",cat:"family",r:24,detail:{
    tag:"Student 3",title:"Youngest \u2014 Graduating 2028",
    body:"<p>Expected to complete high school in 2028. The pathway established for Students 1 and 2 will serve as the proven route for Student 3.</p>"
  }},
  {id:"kaplan",label:"Kaplan\nPartners",cat:"kaplan",r:36,detail:{
    tag:"Kaplan Network",title:"Kaplan International Pathway Partners",
    body:"<p>The following universities are part of the <strong>Kaplan International Pathways network</strong> \u2014 the same network that operates the University of Brighton International College.</p><p>This shared network offers the strongest basis for <strong>credit recognition and pathway transfer</strong> from the current Foundation Year programme.</p><ul><li><strong>New Zealand:</strong> Massey University</li><li><strong>Australia:</strong> Murdoch University, University of Adelaide, University of Newcastle</li></ul><p>Kaplan also operates pathway programmes in Dublin (Ireland) and Germany.</p>"
  }},
  {id:"t1",label:"Priority 1\nMY \u00b7 NZ",cat:"tier1",r:34,detail:{
    tag:"Priority 1",title:"Malaysia & New Zealand",
    body:"<p>Highest-priority destinations. Multiple UK-accredited institutions offering identical or equivalent Business Management degrees.</p><p><strong>Malaysia:</strong> UK university branch campuses offering the same degrees as UK parent institutions.</p><p><strong>New Zealand:</strong> Includes a Kaplan partner (Massey) and two triple-crown accredited business schools. Post-study work visa: 3 years.</p>"
  }},
  {id:"nottingham_my",label:"Nottingham\nMalaysia",cat:"tier1",r:26,detail:{
    tag:"Priority 1 \u00b7 Malaysia",title:"University of Nottingham Malaysia",
    body:"<p><strong>QS World Ranking: #97 \u00b7 Russell Group member</strong></p><p><strong>Programme:</strong> BSc International Business Management</p><p>Identical degree to UK campus. Fixed tuition fees for entire duration.</p><ul><li>Foundation programme: RM 38,000 (~USD 8,100)</li><li>Undergraduate: ~RM 38,000\u201355,000/year</li><li>Intakes: April & September</li><li>85+ nationalities on campus</li><li>2+2 transfer option to UK campus available</li></ul>"
  }},
  {id:"heriot_my",label:"Heriot-Watt\nMalaysia",cat:"tier1",r:22,detail:{
    tag:"Priority 1 \u00b7 Malaysia",title:"Heriot-Watt University Malaysia",
    body:"<p><strong>Putrajaya \u00b7 UK parent: Edinburgh</strong></p><p><strong>Programme:</strong> BSc Business Management \u2014 identical to Edinburgh campus degree.</p><ul><li>Inter-campus transfer options (Malaysia \u2194 Edinburgh)</li><li>Foundation year available</li><li>Strong industry links</li></ul>"
  }},
  {id:"reading_my",label:"Reading\nMalaysia",cat:"tier1",r:20,detail:{
    tag:"Priority 1 \u00b7 Malaysia",title:"University of Reading Malaysia",
    body:"<p><strong>Johor \u00b7 Henley Business School connection</strong></p><p><strong>Programme:</strong> BSc Finance & Business Management. UK-validated degree. English-taught.</p>"
  }},
  {id:"massey",label:"Massey NZ\n\u2B50 Kaplan",cat:"kaplan",r:28,detail:{
    tag:"Priority 1 \u00b7 New Zealand \u00b7 KAPLAN PARTNER",title:"Massey University \u2014 Kaplan Pathway Partner",
    body:"<p><strong>Auckland \u00b7 Top 3% worldwide</strong></p><p class='kaplan-badge'>\u2B50 KAPLAN INTERNATIONAL PATHWAY PARTNER</p><p><strong>Programme:</strong> Bachelor of Business (Management major)</p><p>Massey Business School is New Zealand's largest business school.</p><ul><li>Kaplan Foundation Certificate \u2192 direct entry to Year 1</li><li>Kaplan Diploma (Business) \u2192 direct entry to Year 2</li><li>Post-study work visa: <strong>3 years</strong></li><li>Intakes: February & July</li><li>QS Top 200 for Accounting & Finance</li></ul><p><strong>Key advantage:</strong> Both the University of Brighton and Massey University are Kaplan partners. This provides the strongest basis for credit recognition and pathway continuity.</p>"
  }},
  {id:"auckland",label:"Auckland\nNZ",cat:"tier1",r:22,detail:{
    tag:"Priority 1 \u00b7 New Zealand",title:"University of Auckland",
    body:"<p><strong>QS #65 \u00b7 New Zealand's highest-ranked university</strong></p><p><strong>Programme:</strong> Bachelor of Commerce (Management, International Business)</p><ul><li>Triple-crown accredited: AACSB, EQUIS, AMBA</li><li>Foundation year available</li><li>Post-study work visa: 3 years</li></ul>"
  }},
  {id:"victoria",label:"Victoria\nWellington",cat:"tier1",r:20,detail:{
    tag:"Priority 1 \u00b7 New Zealand",title:"Victoria University of Wellington",
    body:"<p><strong>QS #215 \u00b7 NZ capital city</strong></p><p><strong>Programme:</strong> Bachelor of Commerce (Management)</p><ul><li>Wellington School of Business: triple-crown accredited</li><li>Post-study work visa: 3 years</li></ul>"
  }},
  {id:"t2",label:"Priority 2\nCA \u00b7 AU",cat:"tier2",r:30,detail:{
    tag:"Priority 2",title:"Canada & Australia",
    body:"<p>Strong options with post-study work rights.</p><p><strong>Canada:</strong> 3-year post-study work visa. Strong business schools.</p><p><strong>Australia:</strong> Three Kaplan partners offering direct pathway transfer. 2\u20134 year post-study work visas.</p>"
  }},
  {id:"york_ca",label:"York\nCanada",cat:"tier2",r:22,detail:{
    tag:"Priority 2 \u00b7 Canada",title:"York University \u2014 Schulich School of Business",
    body:"<p><strong>Toronto</strong></p><p><strong>Programme:</strong> Bachelor of Business Administration (BBA)</p><ul><li>Post-study work visa: 3 years</li><li>Diverse international community in Toronto</li></ul>"
  }},
  {id:"ubc",label:"UBC\nCanada",cat:"tier2",r:22,detail:{
    tag:"Priority 2 \u00b7 Canada",title:"University of British Columbia",
    body:"<p><strong>Vancouver \u00b7 QS #38 World</strong></p><p><strong>Programme:</strong> Bachelor of Commerce (Sauder School of Business)</p><ul><li>Post-study work visa: 3 years</li><li>Foundation pathways available</li></ul>"
  }},
  {id:"murdoch",label:"Murdoch AU\n\u2B50 Kaplan",cat:"kaplan",r:24,detail:{
    tag:"Priority 2 \u00b7 Australia \u00b7 KAPLAN PARTNER",title:"Murdoch University \u2014 Kaplan Pathway Partner",
    body:"<p><strong>Perth, Western Australia</strong></p><p class='kaplan-badge'>\u2B50 KAPLAN INTERNATIONAL PATHWAY PARTNER</p><p><strong>Programme:</strong> Bachelor of Business (Management)</p><ul><li>Kaplan Foundation \u2192 direct entry</li><li>Post-study work visa: 2\u20134 years</li><li>More affordable than Sydney/Melbourne institutions</li></ul>"
  }},
  {id:"adelaide",label:"Adelaide AU\n\u2B50 Kaplan",cat:"kaplan",r:24,detail:{
    tag:"Priority 2 \u00b7 Australia \u00b7 KAPLAN PARTNER",title:"University of Adelaide \u2014 Kaplan Pathway Partner",
    body:"<p><strong>Group of Eight \u00b7 QS Top 100</strong></p><p class='kaplan-badge'>\u2B50 KAPLAN INTERNATIONAL PATHWAY PARTNER</p><p><strong>Programme:</strong> Bachelor of Commerce</p><ul><li>Kaplan Foundation Studies programme</li><li>Post-study work visa: 2\u20134 years</li><li>Prestigious Group of Eight member</li></ul>"
  }},
  {id:"newcastle_au",label:"Newcastle AU\n\u2B50 Kaplan",cat:"kaplan",r:22,detail:{
    tag:"Priority 2 \u00b7 Australia \u00b7 KAPLAN PARTNER",title:"University of Newcastle \u2014 Kaplan Pathway Partner",
    body:"<p><strong>Newcastle, NSW</strong></p><p class='kaplan-badge'>\u2B50 KAPLAN INTERNATIONAL PATHWAY PARTNER</p><p><strong>Programme:</strong> Bachelor of Business</p><ul><li>Kaplan Diploma (Business) \u2192 direct entry to Year 2</li><li>Post-study work visa: 2\u20134 years</li></ul>"
  }},
  {id:"t3",label:"Priority 3\nDE \u00b7 IE",cat:"tier3",r:24,detail:{
    tag:"Priority 3",title:"Germany & Ireland",
    body:"<p><strong>Germany:</strong> Many English-taught programmes. Public universities charge minimal fees (~\u20AC300/semester). Studienkolleg foundation pathway available.</p><p><strong>Ireland:</strong> English-speaking country. Strong business schools. Kaplan Dublin pathways available.</p>"
  }},
  {id:"germany",label:"German\nUnis",cat:"tier3",r:20,detail:{
    tag:"Priority 3 \u00b7 Germany",title:"German Universities",
    body:"<p>English-taught Business Management programmes at:</p><ul><li>TU Munich</li><li>ESMT Berlin</li><li>Frankfurt School of Finance & Management</li></ul><p>Public universities: ~\u20AC300/semester administration fees. Studienkolleg foundation year available. Kaplan offers Germany pathway programmes.</p>"
  }},
  {id:"ireland",label:"Irish\nUnis",cat:"tier3",r:20,detail:{
    tag:"Priority 3 \u00b7 Ireland",title:"Irish Universities",
    body:"<ul><li>Trinity College Dublin</li><li>University College Dublin (UCD)</li><li>Dublin City University (DCU)</li></ul><p>English-speaking. Strong business schools. Kaplan Dublin pathways available. EU post-study work options.</p>"
  }},
  {id:"t4",label:"Priority 4\nNL \u00b7 TR",cat:"tier4",r:22,detail:{
    tag:"Priority 4",title:"Netherlands & Turkey",
    body:"<p><strong>Netherlands:</strong> Top-tier English-taught business programmes. Foundation years available.</p><p><strong>Turkey:</strong> English-taught options. Generous scholarship programmes. Lower cost of living.</p>"
  }},
  {id:"netherlands",label:"Dutch\nUnis",cat:"tier4",r:18,detail:{
    tag:"Priority 4 \u00b7 Netherlands",title:"Dutch Universities",
    body:"<ul><li>Erasmus University Rotterdam (Rotterdam School of Management \u2014 QS Top 10 for Business)</li><li>Maastricht University</li><li>Tilburg University</li></ul><p>All English-taught. Foundation programmes available.</p>"
  }},
  {id:"turkey",label:"Turkish\nUnis",cat:"tier4",r:18,detail:{
    tag:"Priority 4 \u00b7 Turkey",title:"Turkish Universities",
    body:"<ul><li>Sabanc\u0131 University</li><li>Ko\u00e7 University</li><li>Bilkent University</li></ul><p>English-taught programmes. Generous scholarships for international students.</p>"
  }},
  {id:"brighton",label:"Brighton\nFoundation Yr",cat:"pathway",r:26,detail:{
    tag:"Current Status",title:"University of Brighton \u2014 Foundation Year (Current)",
    body:"<p><strong>Programme:</strong> Business Management BSc(Hons) with Integrated Foundation Year</p><p><strong>Delivery:</strong> Online via Digital Pathway / Kaplan</p><p><strong>School:</strong> Brighton School of Business and Law (AACSB-accredited \u2014 fewer than 6% of business schools worldwide)</p><p>The Foundation Year is currently in progress. Credits and achievements from this programme are the basis for transfer discussions with partner institutions.</p>"
  }},
  {id:"aacsb",label:"AACSB\nAccredited",cat:"pathway",r:20,detail:{
    tag:"Accreditation",title:"AACSB Accreditation",
    body:"<p>The University of Brighton's School of Business and Law holds <strong>AACSB accreditation</strong> \u2014 achieved by fewer than 6% of business schools globally.</p><p>This accreditation is internationally recognised and provides significant weight for credit transfer and transcript recognition at institutions worldwide.</p>"
  }}
];

var L = [
  {source:"center",target:"students"},{source:"center",target:"kaplan"},{source:"center",target:"t1"},
  {source:"center",target:"t2"},{source:"center",target:"t3"},{source:"center",target:"t4"},
  {source:"center",target:"brighton"},
  {source:"students",target:"s1"},{source:"students",target:"s2"},{source:"students",target:"s3"},
  {source:"s2",target:"brighton"},{source:"s1",target:"t1"},{source:"s3",target:"t1"},
  {source:"kaplan",target:"massey"},{source:"kaplan",target:"murdoch"},
  {source:"kaplan",target:"adelaide"},{source:"kaplan",target:"newcastle_au"},
  {source:"brighton",target:"kaplan"},{source:"brighton",target:"aacsb"},
  {source:"t1",target:"nottingham_my"},{source:"t1",target:"heriot_my"},{source:"t1",target:"reading_my"},
  {source:"t1",target:"massey"},{source:"t1",target:"auckland"},{source:"t1",target:"victoria"},
  {source:"t2",target:"york_ca"},{source:"t2",target:"ubc"},
  {source:"t2",target:"murdoch"},{source:"t2",target:"adelaide"},{source:"t2",target:"newcastle_au"},
  {source:"t1",target:"t2"},{source:"t2",target:"t3"},{source:"t3",target:"t4"},
  {source:"t3",target:"germany"},{source:"t3",target:"ireland"},
  {source:"t4",target:"netherlands"},{source:"t4",target:"turkey"},
  {source:"s1",target:"nottingham_my"}
];

// ============================================================================
// RENDER
// ============================================================================

var W = window.innerWidth, H = window.innerHeight;
var svg = d3.select("#graph").attr("width", W).attr("height", H);

// Legend
var legendEl = document.getElementById("legend");
Object.entries(C).forEach(function(entry) {
  var k = entry[0], v = entry[1];
  var i = document.createElement("div");
  i.className = "legend-item";
  i.innerHTML = '<div class="legend-dot" style="background:' + v.color + '"></div>' + v.label;
  legendEl.appendChild(i);
});

// Zoom
var g = svg.append("g");
svg.call(d3.zoom().scaleExtent([0.15, 5]).on("zoom", function(e) { g.attr("transform", e.transform); }));

// Glow filter
var defs = svg.append("defs");
var fl = defs.append("filter").attr("id", "glow");
fl.append("feGaussianBlur").attr("stdDeviation", "5").attr("result", "blur");
var fm = fl.append("feMerge");
fm.append("feMergeNode").attr("in", "blur");
fm.append("feMergeNode").attr("in", "SourceGraphic");

// Force simulation
var sim = d3.forceSimulation(N)
  .force("link", d3.forceLink(L).id(function(d) { return d.id; }).distance(function(d) {
    var sr = N.find(function(n) { return n.id === (d.source.id || d.source); });
    var tr = N.find(function(n) { return n.id === (d.target.id || d.target); });
    return (sr ? sr.r : 20) + (tr ? tr.r : 20) + 80;
  }))
  .force("charge", d3.forceManyBody().strength(-900))
  .force("center", d3.forceCenter(W / 2, H / 2).strength(0.03))
  .force("collision", d3.forceCollide().radius(function(d) { return d.r + 18; }))
  .force("x", d3.forceX(W / 2).strength(0.015))
  .force("y", d3.forceY(H / 2).strength(0.015));

// Links
var link = g.append("g").selectAll("line").data(L).join("line")
  .attr("stroke", "rgba(148,163,184,0.1)")
  .attr("stroke-width", 1.3);

// Nodes
var node = g.append("g").selectAll("g").data(N).join("g")
  .call(d3.drag()
    .on("start", function(e, d) { if (!e.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
    .on("drag", function(e, d) { d.fx = e.x; d.fy = e.y; })
    .on("end", function(e, d) { if (!e.active) sim.alphaTarget(0); d.fx = null; d.fy = null; })
  );

node.append("circle")
  .attr("r", function(d) { return d.r; })
  .attr("fill", function(d) { return d.id === "center" ? "#0f172a" : C[d.cat].color + "12"; })
  .attr("stroke", function(d) { return C[d.cat].color; })
  .attr("stroke-width", function(d) { return d.r >= 34 ? 2.5 : 1.8; })
  .attr("filter", function(d) { return d.r >= 28 ? "url(#glow)" : null; })
  .style("cursor", "pointer");

node.append("text")
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("fill", function(d) { return C[d.cat].color; })
  .attr("font-size", function(d) { return d.r >= 36 ? "13px" : d.r >= 26 ? "11px" : d.r >= 20 ? "9.5px" : "8px"; })
  .attr("font-weight", function(d) { return d.r >= 28 ? "700" : "600"; })
  .attr("font-family", "DM Sans, sans-serif")
  .style("pointer-events", "none")
  .each(function(d) {
    var lines = d.label.split("\n");
    var el = d3.select(this);
    lines.forEach(function(l, i) {
      el.append("tspan")
        .attr("x", 0)
        .attr("dy", i === 0 ? (-(lines.length - 1) * 0.5) + "em" : "1.15em")
        .text(l);
    });
  });

// Tooltip
var tooltip = document.getElementById("tooltip");

node.on("mouseover", function(e, d) {
  d3.select(this).select("circle").transition().duration(200)
    .attr("stroke-width", 4)
    .attr("fill", C[d.cat].color + "28");
  link.attr("stroke", function(l) {
    return (l.source.id === d.id || l.target.id === d.id) ? C[d.cat].color + "50" : "rgba(148,163,184,0.05)";
  }).attr("stroke-width", function(l) {
    return (l.source.id === d.id || l.target.id === d.id) ? 2.5 : 1;
  });
  tooltip.style.opacity = 1;
  tooltip.textContent = d.detail ? d.detail.tag : d.label.replace(/\n/g, " ");
  tooltip.style.left = (e.clientX + 18) + "px";
  tooltip.style.top = (e.clientY - 12) + "px";
})
.on("mousemove", function(e) {
  tooltip.style.left = (e.clientX + 18) + "px";
  tooltip.style.top = (e.clientY - 12) + "px";
})
.on("mouseout", function(e, d) {
  d3.select(this).select("circle").transition().duration(200)
    .attr("stroke-width", d.r >= 34 ? 2.5 : 1.8)
    .attr("fill", d.id === "center" ? "#0f172a" : C[d.cat].color + "12");
  link.attr("stroke", "rgba(148,163,184,0.1)").attr("stroke-width", 1.3);
  tooltip.style.opacity = 0;
});

// Click to open panel
node.on("click", function(e, d) {
  if (!d.detail) return;
  var panel = document.getElementById("panel");
  var c = C[d.cat].color;
  var tagEl = document.getElementById("panel-tag");
  tagEl.textContent = d.detail.tag;
  tagEl.style.background = c + "20";
  tagEl.style.color = c;
  document.getElementById("panel-title").textContent = d.detail.title;
  document.getElementById("panel-body").innerHTML = d.detail.body;
  panel.classList.add("open");
});

// Close panel button — NO inline handler
document.getElementById("panel-close").addEventListener("click", function() {
  document.getElementById("panel").classList.remove("open");
});

// Tick
sim.on("tick", function() {
  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });
  node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
});

// Force controls
document.getElementById("force-slider").addEventListener("input", function() {
  sim.force("center").strength(this.value / 1000);
  sim.alpha(0.5).restart();
});
document.getElementById("repulsion-slider").addEventListener("input", function() {
  sim.force("charge").strength(-this.value);
  sim.alpha(0.5).restart();
});

// Category filter buttons
var cEl = document.getElementById("controls");
var filters = [
  { key: "all", label: "All" },
  { key: "kaplan", label: "\u2B50 Kaplan Partners" },
  { key: "tier1", label: "\uD83E\uDD47 Priority 1" },
  { key: "tier2", label: "\uD83E\uDD48 Priority 2" },
  { key: "tier3", label: "\uD83E\uDD49 Priority 3" },
  { key: "family", label: "\uD83C\uDF93 Students" }
];
filters.forEach(function(f) {
  var b = document.createElement("button");
  b.className = "ctrl-btn" + (f.key === "all" ? " active" : "");
  b.textContent = f.label;
  b.addEventListener("click", function() {
    document.querySelectorAll(".ctrl-btn").forEach(function(x) { x.classList.remove("active"); });
    b.classList.add("active");
    if (f.key === "all") {
      node.style("opacity", 1);
      link.style("opacity", 1);
    } else {
      node.style("opacity", function(d) { return (d.cat === f.key || d.id === "center") ? 1 : 0.08; });
      link.style("opacity", function(l) {
        return (l.source && l.source.cat === f.key) || (l.target && l.target.cat === f.key) ? 0.5 : 0.02;
      });
    }
  });
  cEl.appendChild(b);
});

// Resize
window.addEventListener("resize", function() {
  var w = window.innerWidth, h = window.innerHeight;
  svg.attr("width", w).attr("height", h);
  sim.force("center", d3.forceCenter(w / 2, h / 2).strength(0.03));
  sim.alpha(0.3).restart();
});

})();
