# &lt;kwc-callout&gt;

> A panel which call out a block of text

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install kwc-callout --save
```

Or [download as ZIP](https://github.com/successk/kwc-callout/archive/master.zip).

## Usage

1 – Import polyfill:

```html
<script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
```

2 – Import custom element:

```html
<link rel="import" href="bower_components/kwc-callout/kwc-callout.html">
```

3 – Start using it!

```html
<kwc-callout header="Your title">
    <p>Your content</p>
    <p><a href="#">Your link</a></p>
</kwc-callout>

<kwc-callout header="Your title" autoclose="1000" type="success">
    <p>Your content</p>
    <p><a href="#">Your link</a></p>
</kwc-callout>

<kwc-callout closeable type="warning">
    <p>There is no title</p>
</kwc-callout>

<kwc-callout header="There is no content" type="alert" show="{{myVar}}"></kwc-callout>

<kwc-callout header="There is no content" type="error"></kwc-callout>

<kwc-callout header="There is no content" type="custom"></kwc-callout>
```

## Options

Attribute   | Options         | Default      | Description
---         | ---             | ---          | ---
`type`      | *String*        | `null`       | The type of callout, do not change the behavior, but only the style (provided: success, alert, warning, error)
`header`    | *String*        | `null`       | The search query, updated for each change
`show`      | *boolean*       | `true`       | This component is shown (reflectToAttribute and notify)
`closeable` | *boolean*       | `false`      | A close button will be shown
`autoclose` | *number*        | `0`          | After the given delay (in milliseconds), the component will be hidden

## Children

Selector | Description
---      | ---
`*`      | Content of callout

## Methods

Method        | Parameters   | Returns     | Description
---           | ---          | ---         | ---
None          | -            | -           | -

## Events

Event     | Detail   | Description
---       | ---      | ---
None      | -        | -

## Styles

Name                                      | Default   | Description
---                                       | ---       | --
`--kwc-callout-box`                       | `{}`      | Default background color of the top-bar
`--kwc-callout-base-bg-color`             | `#fff`    | Background color of default callout
`--kwc-callout-base-text-color`           | `#000`    | Text color of default callout
`--kwc-callout-base-border-color`         | `#e8e8e8` | Border color between header and content of default callout
`--kwc-callout-base-bg-color-success`     | `#4caf50` | Background color of success callout
`--kwc-callout-base-text-color-success`   | `#fff`    | Text color of success callout
`--kwc-callout-base-border-color-success` | `#2e7d32` | Border color between header and content of success callout
`--kwc-callout-base-bg-color-warning`     | `#ffb300` | Background color of warning callout
`--kwc-callout-base-text-color-warning`   | `#fff`    | Text color of warning callout
`--kwc-callout-base-border-color-warning` | `#ff8f00` | Border color between header and content of warning callout
`--kwc-callout-base-bg-color-alert`       | `#ff5722` | Background color of alert callout
`--kwc-callout-base-text-color-alert`     | `#fff`    | Text color of alert callout
`--kwc-callout-base-border-color-alert`   | `#d84315` | Border color between header and content of alert callout
`--kwc-callout-base-bg-color-error`       | `#b71c1c` | Background color of error callout
`--kwc-callout-base-text-color-error`     | `#fff`    | Text color of error callout
`--kwc-callout-base-border-color-error`   | `#c62828` | Border color between header and content of error callout

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

1 – Install [bower](http://bower.io/) & [polyserve](https://npmjs.com/polyserve):

```sh
$ npm install -g bower polyserve
```

2 – Install local dependencies:

```sh
$ bower install
```

3 – Start development server and open `http://localhost:8080/components/kwc-callout/`.

```sh
$ polyserve
```

## History

For detailed changelog, check [Releases](https://github.com/successk/kwc-callout/releases).

## License

MIT