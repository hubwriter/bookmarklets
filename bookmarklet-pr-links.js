const regexp = /https:\/\/github.com\/github\/([^/]*)/;
const matches_array = regexp.exec(window.location.href);
const repo = matches_array[1];

var pr_number = document.querySelector("h1.gh-header-title span ~ span").innerHTML;
pr_number = pr_number.substring(1); // Remove "#" from start of PR number
var branch = document.querySelector("span.head-ref").innerText
branch = branch.replace(/.*:/, ''); // Remove everything before a colon
branch = branch.replace('/', ''); // Strip out all "/" characters
if (repo === "docs-internal") {
  branch = branch.substring(0, 9); // Take just the 1st 9 characters
}
var url_start = "https://" + repo + "-" + pr_number + "--" + branch + ".herokuapp.com/en/";
var url_dotcom = url_start + "free-pro-team@latest";
var url_ghes = url_start + "enterprise-server@latest";
var url_ae = url_start + "github-ae@latest";
var dotcom = "dotcom";
var ghes = "GHES";
var ae = "AE";

const file_info = document.querySelectorAll("div.file-info");
for (var i = 0; i < file_info.length; i++) {
  var link = file_info[i].querySelector('a').title;
  if (link.search("data/") === 0) {
    continue;
  }
  else {
    var regex = /\.md$/;
    var markdownfile = link.search(regex) >= 0;
    if (markdownfile) {
      console.log("link: " + link);
      link = link.replace(regex, "");
      link = link.replace(/^content/, "");
      link = link.replace(/\/index/, "");
      var span = document.createElement("SPAN");
      span.style.fontFamily = "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif";
      span.innerHTML = "&nbsp; View: ";
  
      span = addLink(span, dotcom, url_dotcom + link);
      span.innerHTML += " / ";
      span = addLink(span, ghes, url_ghes + link);
      span.innerHTML += " / ";
      span = addLink(span, ae, url_ae + link);

      file_info[i].appendChild(span);
    }
  }
}

function addLink(span, link_name, link_href) {
  var anchor = document.createElement("A");
  anchor.innerHTML = link_name;
  anchor.href = link_href;
  anchor.target = '_blank';
  span.appendChild(anchor);
  return span;
}
