# TabUserInteractiveSelectionChangeEventArgs.Create

TabUserInteractiveSelectionChangeEventArgs.Create
-


# TabUserInteractiveSelectionChangeEventArgs.Create


## Синтаксис


Create(TabSheet: [ITabSheetBox](../../Interface/ITabSheetBox/ITabSheetBox.htm);
 sel: [ITabUserInteractiveSelection](../../Interface/ITabUserInteractiveSelection/ITabUserInteractiveSelection.htm);
 Type: [TabUserInteractiveSelectionChangeType](../../Enums/TabUserInteractiveSelectionChangeType.htm);
 [Cancel: Boolean = false]);


## Параметры


TabSheet. Компонент, для которого
 генерируется событие.


sel. Интерактивный диапазон
 ячеек.


Type. Разрешенные варианты
 изменения интерактивного диапазона.


Cancel.
 Признак запрета изменения настроек интерактивного диапазона.


## Описание


Конструктор Create создает аргумент
 события, наступающего при изменении интерактивного диапазона ячеек.


См. также:


[TabUserInteractiveSelectionChangeEventArgs](TabUserInteractiveSelectionChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
