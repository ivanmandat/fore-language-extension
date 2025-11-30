# TabCellBeforeEditEventArgs.Create

TabCellBeforeEditEventArgs.Create
-


# TabCellBeforeEditEventArgs.Create


## Синтаксис


Create(TabSheet: [ITabSheetBox](../../Interface/ITabSheetBox/ITabSheetBox.htm);
 Row: Integer; Column: Integer; Cancel: Boolean);


## Параметры


TabSheet - объект [TabSheetBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TabSheetBox.htm),
 для которого возникает событие.


Row - строка, в которой возникает
 событие.


Column - колонка, в которой
 возникает событие.


Cancel - параметр, определяющий
 отменять ли изменения в ячейке.


## Описание


Конструктор Create создает аргумент
 события, возникающего перед началом редактирования ячейки.


См. также:


[TabCellBeforeEditEventArgs](TabCellBeforeEditEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
