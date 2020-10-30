# bookmarklets
Productivity bookmarklets written in JavaScript 

## Add deployment links to PRs

This bookmarklet modifies the "Files changed" page of a pull request. For each markdown file, it adds links to the  staging deployment of the file. 

Three links are added: dotcom / GHES / AE

[screenshot]

Some of these links may get you a "page not found" if that version of the page doesn't exist (there's no way to tell from the information on the "Files changed" page).

To install the bookmarklet:

Drag this link onto your browser's Bookmarks/Favorites toolbar. 

To use the bookmarklet:

1. Go to a PR that has a current staging deployment. 
2. Go to the "Files changed" page. 
3. Click the bookmarklet on your toolbar. 
4. Click the appropriate link next to the file name. 
