# bookmarklets
Productivity bookmarklets written in JavaScript 

## Add deployment links to PRs

This bookmarklet modifies the "Files changed" page of a pull request. For each markdown file, it adds links to the  staging deployment of the file. 

Three links are added: dotcom / GHES / AE

![Links added to a PR](bookmarklet-pr-links.png)

Some of these links may get you a "page not found" if that version of the page doesn't exist (there's no way to tell from the information on the "Files changed" page).

To install the bookmarklet:

Drag this link onto your browser's Bookmarks/Favorites toolbar <a href="javascript:void function()%7Bfunction a(a,b,c)%7Bvar d%3Ddocument.createElement(&quot;A&quot;)%3Breturn d.innerHTML%3Db,d.href%3Dc,d.target%3D&quot;_blank&quot;,a.appendChild(d),a%7Dvar b%3Ddocument.querySelector(&quot;main h1 strong a&quot;).innerHTML,c%3Ddocument.querySelector(&quot;h1.gh-header-title span ~ span&quot;).innerHTML%3Bc%3Dc.substring(1)%3Bvar d%3Ddocument.querySelector(&quot;span.head-ref&quot;).innerText%3Bd%3Dd.replace(/.*:/,&quot;&quot;),d%3Dd.replace(&quot;/&quot;,&quot;&quot;),&quot;docs-internal&quot;%3D%3D%3Db%26%26(d%3Dd.substring(0,9))%3Bvar e%3D&quot;https://&quot;%2Bb%2B&quot;-&quot;%2Bc%2B&quot;--&quot;%2Bd%2B&quot;.herokuapp.com/en/&quot;%3Bconst f%3Ddocument.querySelectorAll(&quot;div.file-info&quot;)%3Bfor(var g,h%3D0%3Bh<f.length%3Bh%2B%2B)if(g%3Df%5Bh%5D.querySelector(&quot;a&quot;).title,0%3D%3D%3Dg.search(&quot;data/&quot;))continue%3Belse%7Bvar j%3D/%5C.md%24/,k%3D0<%3Dg.search(j)%3Bif(k)%7Bconsole.log(&quot;link: &quot;%2Bg),g%3Dg.replace(j,&quot;&quot;),g%3Dg.replace(/%5Econtent/,&quot;&quot;),g%3Dg.replace(/%5C/index/,&quot;&quot;)%3Bvar l%3Ddocument.createElement(&quot;SPAN&quot;)%3Bl.style.fontFamily%3D&quot;-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif&quot;,l.innerHTML%3D&quot;%26nbsp%3B View: &quot;,l%3Da(l,&quot;dotcom&quot;,e%2B&quot;free-pro-team%40latest&quot;%2Bg),l.innerHTML%2B%3D&quot; / &quot;,l%3Da(l,&quot;GHES&quot;,e%2B&quot;enterprise-server%40latest&quot;%2Bg),l.innerHTML%2B%3D&quot; / &quot;,l%3Da(l,&quot;AE&quot;,e%2B&quot;github-ae%40latest&quot;%2Bg),f%5Bh%5D.appendChild(l)%7D%7D%7D()%3B">PR links</a>

To use the bookmarklet:

1. Go to a PR that has a current staging deployment. 
2. Go to the "Files changed" page. 
3. Click the bookmarklet on your toolbar. 
4. Click the appropriate link next to the file name. 
