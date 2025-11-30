# PP.HtmlXamlConverter.textToXaml

PP.HtmlXamlConverter.textToXaml
-


# PP.HtmlXamlConverter.textToXaml


## Синтаксис


PP.HtmlXamlConverter.textToXaml (text, isHyperlink, dims, style);


## Параметры


text. Текст;


isHyperlink. Определяет, генерировать ли XAML-строку в виде гиперссылки;


dims. Массив измерений;


style. CSS-стиль.


## Описание


Метод textToXaml конвертирует текст в формат XAML.


## Пример


Для выполнения примера добавьте на html-страницу ссылку на библиотек PP.js. Преобразуем текст в XAML -строку:


console.log(PP.HtmlXamlConverter.textToXaml("text"));


После выполнения примера в консоль будет выведена сконвертированная XAML -строка:


<?xml version='1.0' encoding='utf-16'?><TextBlock xmlns='http://schemas.microsoft.com/winfx/2006/xaml/presentation' xmlns:x='http://schemas.microsoft.com/winfx/2006/xaml' xmlns:s='clr-namespace:System;assembly=mscorlib' FontFamily='Tahoma' FontWeight='Bold' FontStyle='Normal' TextAlignment='Left' ><Run xml:space='preserve' >text</Run></TextBlock>


См. также:


[HtmlXamlConverter](HtmlXamlConverter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
