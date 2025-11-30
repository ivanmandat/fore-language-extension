# TableCatView.getTableAnalysisParetoButtonState

TableCatView.getTableAnalysisParetoButtonState
-


**


# TableCatView.getTableAnalysisParetoButtonState


## Синтаксис


getTableAnalysisParetoButtonState();


## Описание


Метод getTableAnalysisParetoButtonState**
 возвращает свойства кнопки «Распределение» в группе «Анализ» на вкладке
 ленты инструментов «Таблица».


## Комментарии


Метод возвращает значение в виде объекта JSON.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 ExpressBox с наименованием «expressBox»
 (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим свойства кнопок «Распределение»,
 «Поворот таблицы» и «Стиль и оформление»:


// Получим представление вкладки «Таблица»
var category = expressBox.getRibbonView().getTableCategory();
// Выводим свойства кнопки «Распределение»
console.log("Распределение: " + JSON.stringify(category.getTableAnalysisParetoButtonState()));
console.log("Поворот таблицы: " + JSON.stringify(category.getTableAngleButtonState()));
// Получим представление кнопки «Условное форматирование»
var style = category.getTableCFormatButton();
console.log("Стиль и оформление: " + JSON.stringify(category.getTableStyleState(style)));

В результате выполнения примера в консоли браузера будет выведен следующий
 текст:


Распределение: {"pivot":{"pareto":{"columnsSettings":{"kind":"Percent","threshold":"0.8","displayMax":true,"enabled":false,"elementIndex":"-2"},"rowsSettings":{"enabled":false}}}}


Поворот таблицы: {"grid":{"transposed":true}}


Стиль и оформление: {"PredefinedStyle":null,"Name":"EAX
 table style"}


См. также:


[TableCatView](TableCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
