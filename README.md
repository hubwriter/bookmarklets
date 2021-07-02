# bookmarklets
Productivity bookmarklets written in JavaScript 

## Bookmarklet 1: Add deployment links to PRs

This bookmarklet modifies the "Files changed" page of a pull request. For each markdown file, it adds 3 links to the  staging deployments of the file. 

Some of these links may get you a "page not found" if that version of the page doesn't exist (there's no way to tell from the information on the "Files changed" page).

To install the bookmarklet:

1. Drag this link onto your browser's Bookmarks/Favorites toolbar: [PR links](#).
1. Select all of the following JavaScript and copy it to the clipboard:
   ```
   javascript:void%20function(){function%20a(e,b,c){var%20d=document.createElement(%22A%22);return%20d.innerHTML=b,d.href=c,d.target=%22_blank%22,e.appendChild(d),e}var%20b=/https:\/\/github.com\/github\/([^/]*)/,c=b.exec(window.location.href),d=c[1],e=document.querySelector(%22h1.gh-header-title%20span%20~%20span%22).innerHTML;e=e.substring(1);var%20f=document.querySelector(%22span.head-ref%22).innerText;f=f.replace(/.*:/,%22%22),f=f.replace(%22/%22,%22%22),%22docs-internal%22===d%26%26(f=f.substring(0,9));for(var%20g,h=%22https://%22+d+%22-%22+e+%22--%22+f+%22.herokuapp.com/en/%22,j=document.querySelectorAll(%22div.file-info%22),k=0;k%3Cj.length;k++)if(g=j[k].querySelector(%22a%22).title,0!==g.search(%22data/%22)){var%20l=/\.md$/,m=0%3C=g.search(l);if(m){console.log(%22link:%20%22+g),g=g.replace(l,%22%22),g=g.replace(/^content/,%22%22),g=g.replace(/\/index/,%22%22);var%20n=document.createElement(%22SPAN%22);n.style.fontFamily=%22-apple-system,BlinkMacSystemFont,Segoe%20UI,Helvetica,Arial,sans-serif%22,n.innerHTML=%22%26nbsp;%20View:%20%22,n=a(n,%22dotcom%22,h+%22free-pro-team%40latest%22+g),n.innerHTML+=%22%20/%20%22,n=a(n,%22GHES%22,h+%22enterprise-server%40latest%22+g),n.innerHTML+=%22%20/%20%22,n=a(n,%22AE%22,h+%22github-ae%40latest%22+g),j[k].appendChild(n)}}}();
   ```
1. Right-click the bookmark and click **Edit** or **Properties** (depending on your browser).
1. Select everything in the **URL** or **Location** field and replace it by pasting the JavaScript you copied.
1. Click **Save**.

To use the bookmarklet:

1. Go to a PR that has a current staging deployment. 
2. Go to the "Files changed" page. 
3. Click the bookmarklet on your toolbar. 
4. Click the appropriate link next to the file name. 

### JavaScript source

The code above is created by putting the original JavaScript through the bookmarklet creator here: https://chriszarate.github.io/bookmarkleter/

You can find the original JavaScript here: https://github.com/hubwriter/bookmarklets/blob/main/bookmarklet-pr-links.js
