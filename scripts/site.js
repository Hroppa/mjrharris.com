// Add published work here. The homepage renders one card per entry.
//
// Example:
// {
//   title: "Project name",
//   description: "A short, plain-English explanation of what it does.",
//   href: "/demos/project-name/",
//   status: "Live"
// }
const demos = [
  {
    title: "GUPPI.",
    description:
      "An interactive primer on the Gross Upward Pricing Pressure Index for competition economists.",
    href: "/demos/guppi/",
    status: "Live"
  },
  {
    title: "Trustbuster",
    description:
      "Watch a deterministic economy, investigate mergers and decide which deals to approve or block.",
    href: "/demos/trustbuster/",
    status: "Live"
  }
];

const demoGrid = document.querySelector("#demo-grid");
const demoCount = document.querySelector("#demo-count");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (demoCount) {
  demoCount.textContent = `${demos.length.toString().padStart(2, "0")} published`;
}

if (demoGrid && demos.length === 0) {
  const emptyState = document.createElement("p");
  emptyState.className = "empty-state";
  emptyState.innerHTML =
    "<strong>The workbench is warming up.</strong> New demos will appear here as they’re published.";
  demoGrid.append(emptyState);
} else if (demoGrid) {
  demos.forEach((demo, index) => {
    const card = document.createElement("a");
    card.className = "demo-card";
    card.href = demo.href;

    const top = document.createElement("div");
    top.className = "demo-card-top";

    const number = document.createElement("span");
    number.className = "demo-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const status = document.createElement("span");
    status.className = "demo-status";
    status.textContent = demo.status ?? "Live";

    const details = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = demo.title;
    const description = document.createElement("p");
    description.className = "demo-description";
    description.textContent = demo.description;

    const arrow = document.createElement("span");
    arrow.className = "demo-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "→";

    top.append(number, status);
    details.append(title, description);
    card.append(top, details, arrow);
    demoGrid.append(card);
  });
}
