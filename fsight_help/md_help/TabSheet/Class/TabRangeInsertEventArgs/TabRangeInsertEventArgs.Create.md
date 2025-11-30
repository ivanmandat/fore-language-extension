# TabRangeInsertEventArgs.Create

TabRangeInsertEventArgs.Create
-


# TabRangeInsertEventArgs.Create


## Синтаксис


Create(TabSheet: [ITabSheetBox](../../Interface/ITabSheetBox/ITabSheetBox.htm);
 Range: [ITabRange](../../Interface/ITabRange/ITabRange.htm);
 Direction: [TabInsertShiftDirection](../../Enums/TabInsertShiftDirection.htm));


## Параметры


TabSheet. Параметры отображаемой
 таблицы;


Range. Параметры диапазона
 ячеек таблицы;


Direction. Способ, который
 использовался при добавлении диапазона ячеек.


## Описание


Конструктор Create создает аргумент
 события, возникающего при добавлении диапазона ячеек.


## Комментарии


Для создания аргумента события, возникающего при удалении диапазона ячеек
 используйте конструктор [TabRangeDeleteEventArgs.Create](../TabRangeDeleteEventArgs/TabRangeDeleteEventArgs.Create.htm).


См. также:


[TabRangeInsertEventArgs](TabRangeInsertEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
