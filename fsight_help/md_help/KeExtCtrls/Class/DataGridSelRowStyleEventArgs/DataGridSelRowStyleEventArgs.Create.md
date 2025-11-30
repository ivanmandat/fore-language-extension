# DataGridSelRowStyleEventArgs.Create

DataGridSelRowStyleEventArgs.Create
-


# DataGridSelRowStyleEventArgs.Create


## Синтаксис


Create(Grig: [IDataGrid](../../Interface/IDataGrid/IDataGrid.htm);
 Row: Integer; StyleIndex: Integer; Focused: Boolean; Selected: Boolean);


## Параметры


Grig. Таблица, для которой
 генерируется событие;


Row. Строка, для которой генерируется
 событие;


StyleIndex. Индекс стиля, который
 необходимо применить для отрисовки строки;


Focused. Признак нахождения
 фокуса в строке, для которой генерируется событие;


Selected. Признак выделения
 строки, для которой генерируется событие.


## Описание


Конструктор Create создает аргумент
 события, наступающего при отрисовке строки таблицы.


## Комментарии


Созданный аргумент может использоваться для пользовательской генерации
 события по [отрисовке
 строки](../DataGrid/DataGrid.OnGetSelectedRowStyle.htm) таблицы.


См. также:


[DataGridSelRowStyleEventArgs](DataGridSelRowStyleEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
