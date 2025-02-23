module.exports = {
  // "always" => 总是包含连词。例如:(x) => x
  // "avoid" => 尽可能省略parns。示例:x => x
  arrowParens: 'avoid',
  // 将多行HTML (HTML, JSX, Vue, Angular)元素的>放在最后一行的末尾，而不是单独放在下一行(不适用于自关闭元素)。
  bracketSameLine: true,
  // 在对象字面量的括号之间打印空格。
  // true =>  { a: b }
  // false => {a: b}
  bracketSpacing: true,
  // 控制Prettier是否格式化文件中嵌入的引用代码。
  // "auto" => 如果pretty可以自动识别，则格式化嵌入的代码。
  // "off" => 永远不要自动格式化嵌入代码。
  embeddedLanguageFormatting: 'auto',
  // htmlWhitespaceSensitivity
  // "css" => CSS display属性的默认值。对于处理一样严格。
  // "strict" => 所有标记周围的空白(或没有空白)被认为是重要的。
  // "ignore" => 所有标记周围的空白(或没有空白)被认为是无关紧要的。
  htmlWhitespaceSensitivity: 'css',
  // Prettier可以在文件顶部插入一个特殊的@format标记，指定该文件已使用Prettier进行格式化。当与——require-pragma选项一起使用时，效果很好。如果在文件的顶部已经有一个文档块，那么这个选项将添加一个带有@format标记的换行符。
  insertPragma: false,
  // 在JSX中使用单引号而不是双引号。
  jsxSingleQuote: false,
  // 指定自动换行的行长，默认值80。
  printWidth: 140,
  // 默认情况下，由于一些服务使用对换行敏感的渲染器，例如GitHub comments和BitBucket，因此pretty不会更改标记文本的换行。若要将散文包装到打印宽度，请将此选项更改为“always”。如果你想要pretty强制所有的散文块在一行上，而依赖于编辑器/查看器软换行，你可以使用"never"。
  // always => 如果散文超过打印宽度，则对其进行包装。
  // never => 把每篇散文都拆成一行。
  // preserve => 什么都不做，让散文保持原样。
  proseWrap: 'never',
  // 当对象中的属性是Quote时更改。
  // as-needed => 只在需要的对象属性周围添加引号。
  // consistent => 如果对象中至少有一个属性需要引用，则需要引用所有属性。
  // preserve => 对象属性中引号的输入使用。
  quoteProps: 'as-needed',
  // Prettier可以限制自己只格式化在文件顶部包含特殊注释(称为pragma)的文件。这在逐渐将大型、未格式化的代码库转换为更漂亮的代码库时非常有用。
  requirePragma: false,
  // 是否使用分号，默认true，使用分号
  semi: false,
  // 是否使用单引号，默认为false，不使用单引号，使用双引号
  singleQuote: true,
  // 指定每个缩进级别的空格数，默认值为2个空格。
  tabWidth: 2,
  // 在多行逗号分隔的语法结构中，尽可能打印尾随逗号。(例如，单行数组的后面永远不会有逗号。)
  // es5 => 尾随逗号在ES5中有效(对象、数组等)。在TypeScript中，类型参数中没有后面的逗号。
  // none => 后面没有逗号。
  // all => 尽可能以逗号结尾(包括函数参数和调用)。要运行这种格式的JavaScript代码，需要一个支持ES2017 (Node.js 8+或现代浏览器)或底层编译的引擎。这也支持在TypeScript的类型参数中使用尾随逗号(从2018年1月发布的TypeScript 2.7开始支持)。
  trailingComma: 'all',
  // 用制表符代替空格缩进行，默认值为false
  useTabs: false,
  // 是否缩进Vue文件中<script>和<style>标签内的代码。
  vueIndentScriptAndStyle: false,
  // 在HTML、Vue和JSX中强制每行使用单个属性。
  singleAttributePerLine: false,
  endOfLine: 'auto',
}
