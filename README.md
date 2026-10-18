# kiku-plugin-ddg
Plugin to replace default external link search engine with DuckDuckGo in [Kiku](https://kiku.youyoumu.my.id/)

## Installation
1. Go to Anki Media Collection Folder. (Anki Desktop: Tools > Check Media > View Files)
2. Replace `_kiku_plugins.js` with this repo's `_kiku_plugins.js`

## Notes
The first two external links in the `DefaultExternalLinks` are quite useful and we'll keep it, and the third is the default search engine.
I'm sure there's a more idiosyncratic way in JavaScript to filter out the default search engine but if it works it works.
If properly used, can probably save water over default search engine.

## Resources
- [Code Based off Kiku Docs](https://kiku.youyoumu.my.id/add-more-external-links.html)
- [Kiku GitHub Page](https://github.com/youyoumu/kiku)
