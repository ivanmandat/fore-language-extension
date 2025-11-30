# HtmlXamlConverter.convertToHtml

HtmlXamlConverter.convertToHtml
-


# HtmlXamlConverter.convertToHtml


## Синтаксис


convertToHtml (xaml);


## Параметры


xaml. Строка в формате XAML.


## Описание


Метод convertToHtml конвертирует строку в формате XAML в формат HTML.


## Пример


Для выполнения примера добавьте на html-страницу ссылку на библиотек PP.js. Преобразуем HTML-строку в XAML и обратно:


conv = new PP.HtmlXamlConverter(); //создаем экземпляр класса HtmlXamlConverter
xaml = conv.convertToXaml("");//получаем XAML-строку из HTML
html = conv.convertToHtml(xaml);////получаем HTML-строку из XAML
console.log("XAML: " + xaml + "\n HTML: " + html);//выводим в консоль XAML- и HTML-строки

После выполнения примера в консоль будут выведено:


XAML: <?xml version='1.0' encoding='utf-16'?><TextBlock xmlns='http://schemas.microsoft.com/winfx/2006/xaml/presentation' xmlns:x='http://schemas.microsoft.com/winfx/2006/xaml' xmlns:s='clr-namespace:System;assembly=mscorlib' >Заголовок</TextBlock>


HTML: <div style='height: auto; ' >Заголовок</div>


См. также:


[HtmlXamlConverter](HtmlXamlConverter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
