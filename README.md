# SOLVM

Notes for later.

## Run dev env
hugos

## WEBP
- I'm not useing .webp because it's not supported by Safari yet
- Once the iPhone supports .webp, I will make the switch
- modernizr is already installed  



## Create Pages

```toml
# parent references the Title property
parent = "Booking"
weight = 1

identifier = "about"
```

## Removed social partials

```go
{{ partial "socialsvg/location.html" (dict "url" .Site.Data.segl.googlemap) }}

{{ partial "socialsvg/facebook.html" (dict "url" .Site.Data.social.facebook) }}
{{ partial "socialsvg/twitter.html" (dict "url" .Site.Data.social.twitter) }}

{{ partial "socialsvg/youtube.html" (dict "url" .Site.Data.social.youtube) }}
{{ partial "socialsvg/instagram.html" (dict "url" .Site.Data.social.instagram) }}

```

## General Test checklist

- [] Text Highlight color
- [] SEO title and descriptions are working
- [] CSP Test - https://securityheaders.com/  and https://csp-evaluator.withgoogle.com/
- [] Webmaster tools setup
- [] Google Tracking code working
- [] iPhone Landscape look
- [] 1080 screen look - check look for screens with short height like CEAMTEAM does
- [] Email contact working
- [] Lighthouse Performance test - https://web.dev/measure/


## Tools
- [CSVtoJSON](https://www.csvjson.com/csv2json)
- [Toolkit Format JSON⇔JSON5⇔YAML⇔TOML](https://toolkit.site/format.html)

## vendors
- headroom
- imagesLoaded
- FancyBox
- RDMKIT


## Issues
- [] RenderHooks are a bit of a pain during local development. After resaving a MD page that uses RenderHooks, the reload doesn't rerender the Hooks. Yoou have to make a change to a different file to get the RenderHooks to get rerendered.




## Inspiration
- [usto](https://www.ustwo.com/join-us/)
- [huge](https://www.hugeinc.com/work/nike)
- [blind](https://blind.com/case-study/oles-hakai-fishing-lodge-rebrand/)
