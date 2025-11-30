# TabRangeDeleteEventArgs.Create

TabRangeDeleteEventArgs.Create
-


# TabRangeDeleteEventArgs.Create


## Синтаксис


Create(TabSheet: [ITabSheetBox](../../Interface/ITabSheetBox/ITabSheetBox.htm);
 Range: [ITabRange](../../Interface/ITabRange/ITabRange.htm);
 Direction: [TabDeleteShiftDirection](../../Enums/TabDeleteShiftDirection.htm));


## Параметры


TabSheet. Параметры отображаемой
 таблицы;


Range. Параметры диапазона
 ячеек таблицы;


Direction. Способ, который
 использовался при удалении диапазона ячеек.


## Описание


Конструктор Create создает аргумент
 события, возникающего при удалении диапазона ячеек.


## Комментарии


Для создания аргумента события, возникающего при добавлении диапазона
 ячеек используйте конструктор [TabRangeInsertEventArgs.Create](../TabRangeInsertEventArgs/TabRangeInsertEventArgs.Create.htm).


См. также:


[TabRangeDeleteEventArgs](TabRangeDeleteEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
