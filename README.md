
# Vercel YouTube Proxy API

This serverless function proxies requests to the YouTube Data API and returns the first video ID for a given song name.

## Usage

Make a GET request to:

```
/api/youtube?song=Imagine Dragons
```

You will receive:

```json
{ "videoId": "abc123XYZ" }
```

## Setup

1. Deploy this folder to Vercel.
2. Set environment variable `YOUTUBE_API_KEY` in Vercel project settings.
3. That's it!
