# DataGridSelCellStyleEventArgs.Create

DataGridSelCellStyleEventArgs.Create
-


# DataGridSelCellStyleEventArgs.Create


## Синтаксис


Create(Grig: [IDataGrid](../../Interface/IDataGrid/IDataGrid.htm);
 Row: Integer; Column: Integer; StyleIndex: Integer; Focused: Boolean;
 Selected: Boolean);


## Параметры


Grig. Таблица, для которой
 генерируется событие;


Row. Строка, в которой расположена
 ячейка, для которой генерируется событие;


Column. Столбец, в котором
 расположена ячейка, для которой генерируется событие;


StyleIndex. Индекс стиля, который
 необходимо применить для отрисовки ячейки;


Focused. Признак нахождения
 фокуса в ячейке, для которой генерируется событие;


Selected. Признак выделения
 ячейки, для которой генерируется событие.


## Описание


Конструктор Create создает аргумент
 события, наступающего при отрисовке выделенной ячейки таблицы.


## Комментарии


Созданный аргумент может использоваться для пользовательской генерации
 события по [отрисовке
 ячейки](../DataGrid/DataGrid.OnGetSelectedCellStyle.htm) таблицы.


См. также:


[DataGridSelCellStyleEventArgs](DataGridSelCellStyleEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
