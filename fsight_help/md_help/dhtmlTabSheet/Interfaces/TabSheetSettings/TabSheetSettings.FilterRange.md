# TabSheetSettings.FilterRange

TabSheetSettings.FilterRange
-


**


# TabSheetSettings.FilterRange


## Синтаксис


FilterRange: PP.Ui.TabSheetFilterRange;


## Описание


Свойство FilterRange**
 содержит диапазон текущего автофильтра.


## Комментарии


Значение свойства возвращается с помощью метода getFilterRange.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [GridBox](dhtmlReport.chm::/Components/RegularReport/GridBox/GridBox.htm)
 с наименованием «grid» (см. «[Пример
 создания компонента GridBox](dhtmlReport.chm::/Components/RegularReport/GridBox/GridBox_example.htm)»). В отчете должен быть
 настроен автофильтр. Получим данные о размерах автофильтра:


// Получим табличный лист
tabSheet = grid.getTabSheet();
// Получим диапазон фильтра
range = tabSheet.getFilterRange();
// Получим JSON представление диапазона
filterR = range.toJSON();
// Выведем результат в консоль
console.log(filterR.Range);
// -> Object {left: 1, top: 3, width: 4, height: 6}

В результате выполнения примера был получен диапазон текущего автофильтра.


См. также:


[TabSheetSettings](TabSheetSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
