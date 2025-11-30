# GxTitle.Font

GxTitle.Font
-


# GxTitle.Font


## Синтаксис


Font: PP.[Font](dhtmlCommon.chm::/Classes/PP/Font/Font.htm)


## Описание


Свойство Font определяет шрифт
 заголовка экспресс-отчета.


## Комментарии


Значение свойства устанавливается с помощью метода setFont,
 а возвращается с помощью метода getFont.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/components/express/expressbox/expressbox_example.htm)»). Для появления заголовка необходимо
 нажать на кнопку «Заголовок» на вкладке «Главная». Получим наименование
 шрифта заголовка:


// Получаем заголовок
var title = expressBox.getDataView().getTitleView();
// Получаем наименование шрифта заголовка
console.log("Наименование шрифта заголовка: " + title.getFont().getFontFamily());
В результате в консоль будет выведено наименование шрифта заголовка:


Наименование шрифта заголовка: Arial


См. также:


[GxTitle](GxTitle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
