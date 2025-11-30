# TabCellContentChangeEventArgs.Create

TabCellContentChangeEventArgs.Create
-


# TabCellContentChangeEventArgs.Create


## Синтаксис


Create(


Sheet: [ITabSheetBox](../../Interface/ITabSheetBox/ITabSheetBox.htm);


Row: Integer;


Column: Integer;


Value: Variant;


Type: [TabCellContentChange](../../Enums/TabCellContentChange.htm));


## Параметры


Sheet - объект [TabSheetBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TabSheetBox.htm),
 для которого возникает событие.


Row - строка, в которой возникает
 событие.


Column - колонка, в которой
 возникает событие.


Value - значение, которое должно
 быть помещено в ячейку.


Type - тип значения, которое
 должно быть помещено в ячейку.


## Описание


Конструктор Create создает аргумент
 события, возникающего при изменении содержимого в ячейке таблицы.


См. также:


[TabCellContentChangeEventArgs](TabCellContentChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
