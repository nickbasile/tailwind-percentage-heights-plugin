# tailwind-percentage-heights-plugin
A plugin for Tailwind CSS that adds percentage heights

Adds the following classes to your Tailwind project:

| Class    | Property           |
| :------- | :----------------- |
| .h-1/2   | height: 50%;       |
| .h-1/3   | height: 33.33333%; |
| .h-2/3   | height: 66.66667%; |
| .h-1/4   | height: 25%;       |
| .h-3/4   | height: 75%;       |
| .h-1/5   | height: 20%;       |
| .h-2/5   | height: 40%;       |
| .h-3/5   | height: 60%;       |
| .h-1/6   | height: 16.66667%; |
| .h-5/6   | height: 83.33333%; |
| .h-1/10  | height: 10%;       |
| .h-3/10  | height: 30%;       |
| .h-7/10  | height: 70%;       |
| .h-9/10  | height: 90%;       |

## Installation

You can add this to your project via NPM by running:

`npm i tailwind-percentage-heights-plugin`

## How to Use

In your Tailwind config file (typically: `tailwind.js`), you can require this package in the `plugins` Array, like so:

```
plugins: [
    require('<path-to-package>/tailwind-percentage-heights-plugin')(),
]
``` 

Then if you re-run your build suite, you can start using the classes listed above.