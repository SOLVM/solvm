# PaulShankStudio


## Create Pages

```
# parent references the Title property
parent = "Booking"
weight = 1

identifier = "about"
```

## Removed social partials
```
{{ partial "socialsvg/location.html" (dict "url" .Site.Data.segl.googlemap) }}

{{ partial "socialsvg/facebook.html" (dict "url" .Site.Data.social.facebook) }}
{{ partial "socialsvg/twitter.html" (dict "url" .Site.Data.social.twitter) }}

{{ partial "socialsvg/youtube.html" (dict "url" .Site.Data.social.youtube) }}
{{ partial "socialsvg/instagram.html" (dict "url" .Site.Data.social.instagram) }}

```



```
{{ $.Site.Params.cloudinary }}
```


### Logo partials
```
{{ partial "logosvg/segl-rectangle.html" . }}
{{ partial "logosvg/segl-circle.html" . }}
{{ partial "logosvg/segl-square.html" . }}
{{ partial "logosvg/segl-map.html" . }}
```

## nav


## ISSUES TO COME BACK TO

- [] Image upload size (must consider Docs and Pdfs too)
- [] Square Gallery images like Shank
- [x] Youtube videos height in News Articles
- [] Author images - and author layout - regex /author = ".+"/
- [] Handle News posts without a featured image
- [] News Text link hover needs a new color
- [] News body image set height maybe
- [] Spinner for featured images

- Long titles fall-2013-discusses-iran-policy-document-senator-chuck-schumer-former-white-house-chief-staff-josh-bolten-state-department-iran-desk


## General Test checklist

- [] Text Highlight color
- [] SEO title and descriptions are working
- [] Webmaster tools setup
- [] Google Tracking code working
- [] iPhone Landscape look
- [] 1080 screen look
- [] Email contact working


## Tools

https://www.csvjson.com/csv2json
https://toolkit.site/format.html

## vendors
- headroom
- imagesLoaded
- FancyBox
- RDMKIT

## Authors

- SOLVM
