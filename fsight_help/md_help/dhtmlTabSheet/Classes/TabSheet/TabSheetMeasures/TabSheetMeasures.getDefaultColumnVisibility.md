# TabSheetMeasures.getDefaultColumnVisibility

TabSheetMeasures.getDefaultColumnVisibility
-


**


# TabSheetMeasures.getDefaultColumnVisibility


## Синтаксис


getDefaultColumnVisibility();


## Описание


Метод getDefaultColumnVisibility** возвращает признак видимости столбцов по умолчанию.


## Комментарии


Метод возвращает значение true, если по умолчанию столбцы таблицы отображаются, и false - в противном случае.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Определим, отображаются ли по умолчанию столбцы и строки таблицы:


// Получим измерения таблицы
var measures = tabSheet.getMeasures();
// Определим видимость столбцов по умолчанию
var isColVisible = measures.getDefaultColumnVisibility();
console.log("По умолчанию столбцы таблицы " + (isColVisible ? "отображаются." : "не отображаются."));
// Определим видимость строк по умолчанию
var isRowVisible = measures.getDefaultRowVisibility();
console.log("По умолчанию строки таблицы " + (isRowVisible ? "отображаются." : "не отображаются."));

В результате выполнения примера в консоли браузера были выведены сообщения о том, что по умолчанию столбцы и строки таблицы отображаются.


См. также:


[TabSheetMeasures](TabSheetMeasures.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
