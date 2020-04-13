+++
featured_headline = "Relentless research and innovation"
featured_image = "crowd.jpg"
featured_logo ="/logos/logo_metriclab.svg"

layout = "work/single"
seo_page_description = "MetricLab and SOLVM"
seo_page_title = ""
subtitle = ""
title = "MetricLab"

business_location = "Bay Area"
business_type = "User Research"





+++

# How stale?
Very stale.


## The Problem


## How we solved


## What we learned


## Meaningful Impact


<div class="code__layer">
  <div class="code__container">

``` html
{{ with .Params.seo_page_title | default .Site.Title }}
  <title>{{ . }}</title>
  <meta property="og:title" content="{{ . }}" />
  <meta name="twitter:title" content="{{ . | truncate 70 }}" />
{{- end -}}

{{ with .Params.seo_page_description | default .Site.Params.description }}
  <meta name="description" content="{{ . }}">
  <meta property="og:description" content="{{ . }}">
  <meta name="twitter:description" content="{{ . | truncate 200 }}">
{{ end }}

  <meta property="og:url" content="{{ .Permalink | absLangURL }}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="{{ .Site.Title }}" />
  <link rel="canonical" href="{{ .Permalink | absLangURL }}" />
```

  </div>
</div>




three things matter, what you want, what the internet wants, what your market wants



I'm a redesigner who turns busted, stale websites into awesome websites. Unlike my competitors, I don't use beginner solutions like WordPress, Wix and Squarespace. I use more powerful and flexible solutions.
