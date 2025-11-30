# TabSheetSettings.FixedAreaResizeEnabled

TabSheetSettings.FixedAreaResizeEnabled
-


# TabSheetSettings.FixedAreaResizeEnabled


## Синтаксис


FixedAreaResizeEnabled: Boolean;


## Описание


Свойство FixedAreaResizeEnabled
 определяет возможность изменения размера ячеек в фиксированной области.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setFixedAreaResizeEnabled,
 а возвращается с помощью метода getFixedAreaResizeEnabled.


Если свойство имеет значение true
 (по умолчанию), то возможно изменять размер ячеек в фиксированной области,
 иначе - изменять размеры нельзя.


Под фиксированной областью понимается набор ячеек, находящихся на пересечении
 фиксированных строк и фиксированных столбцов таблицы. Подробно о фиксированных
 строках и столбцах можно узнать на страницах описания свойств [TabSheetSettings.FixedRow](TabSheetSettings.FixedRow.htm)
 и [TabSheetSettings.FixedColumn](TabSheetSettings.FixedColumn.htm)
 соответственно.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»).


// Зададим крайнюю фиксированную строку
tabSheet.setFixedRow(0);
// Запретим изменение размера ячеек в фиксированной области
tabSheet.setFixedAreaResizeEnabled(false);
После выполнения примера невозможно изменять размер ячеек в первой строке.


См. также:


[TabSheetSettings](TabSheetSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
