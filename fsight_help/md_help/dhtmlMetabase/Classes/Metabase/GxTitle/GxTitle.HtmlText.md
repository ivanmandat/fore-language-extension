# GxTitle.HtmlText

GxTitle.HtmlText
-


# GxTitle.HtmlText


## Синтаксис


HtmlText: String


## Описание


Свойство HtmlText содержит неотформатированное
 значение текста заголовка на языке разметки HTML.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setHtmlText,
 а возвращается с помощью метода getHtmlText.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Для появления заголовка
 необходимо нажать на кнопку «Заголовок» на вкладке «Главная». Получим
 неотформатированное и отформатированное значение текста заголовка на языке
 разметки HTML:


// Получаем рабочую область
Data = expressBox.getDataView();
// Получаем заголовок
Title = Data.getTitleView();
// Получаем неотформатированное значение текста заголовка на языке разметки HTML
console.log("Неотформатированное значение текста заголовка: " + Title.getHtmlText());
// -> "<span style="font-weight: bold;font-size: 12pt;">Название отчета &amp;[Name]</span>"
// Получаем отформатированное значение текста заголовка на языке разметки HTML
console.log("Отформатированное значение текста заголовка: " + Title.getHtmlTitle());
// -> "<span style="font-weight: bold;font-size: 12pt;">Название отчета Таблица</span>"
В результате в консоль будет выведено неотформатированное и отформатированное
 значение текста заголовка на языке разметки HTML.


См. также:


[GxTitle](GxTitle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
