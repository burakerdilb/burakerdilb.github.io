# burakerdilb.github.io

Personal website of Burak Erdil Biçer, built with [Jekyll](https://jekyllrb.com) and published by GitHub Pages.

## Structure

| Path | What it is |
| --- | --- |
| `index.html`, `cv.html`, `courses.html`, `research.html`, `photos.html` | The pages. Each renders English text from `_data/i18n/en.yml` and tags it with `data-i18n` keys. |
| `_data/i18n/{en,tr,fr,it}.yml` | All translatable text, one file per language, same structure in each. |
| `_data/courses.yml` | Course lists (with links to shared notes). |
| `_data/photos.yml` + `images/photos/` | Photo gallery: one entry per photo with `file`, `place`, `city`, `date`. Resize photos to about 1600px on the long edge before adding them. City names are translated under `photos.cities` in the i18n files. |
| `assets/css/main.scss` | Styles. Colours are CSS variables; `[data-theme="dark"]` overrides them. |
| `assets/js/site.js` | Dark/light toggle and the client-side language switcher. |
| `assets/i18n/*.json` | Generated from the YAML files at build time; fetched by the switcher. |

## Editing content

- **CV / about text:** edit `_data/i18n/en.yml`, then mirror the change in `tr.yml`, `fr.yml` and `it.yml`. A key missing from a language falls back to English.
- **New photo:** copy the resized image to `images/photos/` and add an entry to `_data/photos.yml`.

## Local preview

```sh
bundle install
bundle exec jekyll serve
```
