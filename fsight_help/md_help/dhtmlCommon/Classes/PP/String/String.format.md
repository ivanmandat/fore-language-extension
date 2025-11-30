# String.format

String.format
-


# String.format


## Синтаксис


PP.String.format(string: String);


## Параметры


string. Шаблон для подстановки,
 содержащий параметры для вставки: {0}, {1} и т. д.


## Описание


Статический метод format подставляет
 значения в строку.


## Комментарии


После параметра String может
 быть указано любое количество значений для подстановки или объектов вида
 {value: <значение>, defaultFormat: <формат по умолчанию>}.


Метод возвращает значение типа String.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на
 файл сценария PP.js. Зададим исходную строку, подставим значения вместо
 её параметров и переменных, а также отформатируем строку, добавив необходимые
 переносы:


// Зададим строку с параметрами
sourceStr = "<script type=\"%Value1\" src=\"{0}\"></script>" +
    "<link type=\"%Value2\" rel=\"Stylesheet\" href=\"{1}\"></link>";
console.log("Исходная строка:");
console.log(sourceStr);
// Подставим значения на место параметров строки
var result = PP.String.format(sourceStr, "../build/PP.js", "../build/PP.css");
// Заменим переменные в строке значениями
result = PP.String.pattern(result, {
    Value1: "text/javascript",
    Value2: "text/css"
}, true);
// Разобьём исходную строку на две
result = PP.String.replaceAll(result, "><", ">\n<");
console.log("Отформатированная строка с подставленными значениями:")
console.log(result);
В результате выполнения примера в консоли браузера была выведена исходная
 строка, а также её новое представление с подставленными значениями и с
 необходимыми переносами:


Исходная строка:


<script type="%Value1" src="{0}"></script><link
 type="%Value2" rel="Stylesheet" href="{1}"></link>


Отформатированная строка с подставленными значениями:


<script type="text/javascript" src="../build/PP.js">


</script>


<link type="text/css" rel="Stylesheet"
 href="../build/PP.css">


</link>


См. также:


[PP](../../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
