# GxTitle.getUnformattedText

GxTitle.getUnformattedText
-


# GxTitle.getUnformattedText


## Синтаксис


getUnformattedText();


## Описание


Метод getUnformattedText возвращает
 неотформатированный текст заголовка.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Для появления заголовка необходимо
 нажать на кнопку «Заголовок» на вкладке «Главная». Получим неотформатированный
 текст заголовка:


// Получаем заголовок
var title = expressBox.getDataView().getTitleView();
// Получаем неотформатированный текст заголовка
console.log(title.getUnformattedText());
В результате в консоль будет выведен неотформатированный текст заголовка:


<span style="font-family: Arial; font-size:
 12pt; color: rgb(0, 0, 0); text-align: center; background-color: rgb(255,
 255, 255);"><span style="color: rgb(0, 0, 0); font-weight:
 bold; font-size: 12pt; font-family: inherit; text-align: center;">&amp;[DIMENSIONS.D_SRC],
 &amp;[DIMENSIONS.D_SEP], &amp;[DIMENSIONS.FACTS]</span></span>


См. также:


[GxTitle](GxTitle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
