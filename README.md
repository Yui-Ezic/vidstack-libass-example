# Player example in nextjs with vidstack and libass subtitles

This is default nextjs project, so you can use `npm run build` for development server and other scripts

## Notes

### Updating jassub

After updating jassub you need to copy files from `node_modules/jassub/dist` to `public/jassub`. I think it can be fixed with [copy-webpack-plugin](https://webpack.js.org/plugins/copy-webpack-plugin/)

### Subtitles shows in wrong place

`data-media-provider` has `display: flex` which caused the jassub subtitles to be displayed in the wrong place. Because `video` element is inside of `data-media-provider`, and jassub creates another div, which contains canvas with subtitles, that is a sibling element to video on the same level. And this div appears next to the video instead of overlaying it.

```html
<!-- data-media-provider has display:fles -->
<div data-media-provider="">
    <video preload="metadata" aria-hidden="true" src="/video/video.mp4">
    <!-- JASSUB has position: relative -->
    <div class="JASSUB">
        <canvas
        style="
            display: block;
            position: absolute;
            pointer-events: none;
            width: 897px;
            left: 0.5px;
            height: 505px;
            top: -252.562px;
        "
        width="897"
        height="505"
        ></canvas>
    </div>
</div>
```

To fix this I force `display: block` for div with `data-media-provider`:

```tsx
<MediaProvider style={{ display: "block" }}>
```
