# stevehaigh.net

## Videos in posts

Store video files in `static/assets/videos/`.

Example:

```markdown
{{< video
  src="/assets/videos/my-demo.mp4"
  poster="/assets/videos/my-demo-poster.jpg"
  caption="Short caption for the clip"
>}}
```

Optional shortcode parameters:

- `type` default is `video/mp4`
- `autoplay="true"` adds autoplay and muted
- `loop="true"` enables looping
