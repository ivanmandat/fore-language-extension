# TabSheet.setSelectionTransparent

TabSheet.setSelectionTransparent
-


# TabSheet.setSelectionTransparent


## Синтаксис


setSelectionTransparent(value: number);


## Параметры


value. Степень прозрачности
 цвета.


## Описание


Метод setSelectionTransparent
 устанавливает степень прозрачности цвета заливки выделенных ячеек таблицы.


## Комментарии


Для указания степени прозрачности цвета используйте вещественные числа
 в диапазоне от 0 до 1. Если параметр value
 принимает значение 0, то используется 100% степень прозрачности цвета
 (полностью прозрачный цвет), если 1 - 0% (полностью непрозрачный цвет).


Для получения значения степени прозрачности цвета заливки выделенных
 ячеек таблицы используйте метод [TabSheet.getSelectionTransparent](TabSheet.getSelectionTransparent.htm).


Для определения цвета заливки выделенных ячеек таблицы используйте свойство
 [TabSheetSettings.SelectionColor](../../../Interfaces/TabSheetSettings/TabSheetSettings.SelectionColor.htm).


Для определения цвета границы выделенных ячеек таблицы используйте свойство
 [TabSheetSettings.SelectionBorderColor](../../../Interfaces/TabSheetSettings/TabSheetSettings.SelectionBorderColor.htm).


По умолчанию параметры оформления выделенных ячеек таблицы заданы в
 [настройках
 репозитория](UiNav.chm::/02_Navigator/Repo_Default.htm) на вкладке «[Оформление
 в отчетах](UiNav.chm::/02_Navigator/Repo_Default.htm#design)».


## Пример


Использование метода приведено в примере для [TabSheetSettings.SelectionColor](../../../Interfaces/TabSheetSettings/TabSheetSettings.SelectionColor.htm).


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
