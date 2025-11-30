# TabCellContentChangeBaseEventArgs.Create

TabCellContentChangeBaseEventArgs.Create
-


# TabCellContentChangeBaseEventArgs.Create


## Синтаксис


Create(TabSheet: [ITabSheet](../../Interface/ITabSheet/ITabSheet.htm); Row: Integer; Column: Integer; Value: Variant; Type: [TabCellContentChange](../../Enums/TabCellContentChange.htm));


## Параметры


TabSheet - таблица компонента, для которого генерируется событие.


Row - индекс строки, в которой расположена ячейка, для которой генерируется событие.


Column - индекс столбца, в которой расположена ячейка, для которой генерируется событие.


Value - значение, изменяемое для ячейки.


Type - тип изменения в ячейке таблицы.


## Описание


Конструктор Create создает аргумент события с указанным значением и типом изменения ячейки таблицы.


См. также:


[TabCellContentChangeBaseEventArgs](TabCellContentChangeBaseEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
