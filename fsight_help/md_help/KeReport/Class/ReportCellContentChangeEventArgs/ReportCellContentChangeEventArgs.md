# ReportCellContentChangeEventArgs

ReportCellContentChangeEventArgs
-


# ReportCellContentChangeEventArgs


## Описание


Класс ReportCellContentChangeEventArgs
 предназначен для работы с параметрами события [ReportBox.OnChangeCellContent](../ReportBox/ReportBox.OnChangeCellContent.htm)
 (изменение содержимого в ячейке таблицы).


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Create](ReportCellContentChangeEventArgs.Create.htm)
		 Конструктор Create
		 создает аргумент события, возникающего при изменение содержимого
		 в ячейке таблицы.


## Свойства, унаследованные от [IReportCellContentChangeEventArgs](../../Interface/IReportCellContentChangeEventArgs/IReportCellContentChangeEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](../../Interface/IReportCellContentChangeEventArgs/IReportCellContentChangeEventArgs.Cancel.htm)
		 Свойство Cancel определяет:
		 отменять ли изменения, сделанные в ячейке таблицы.


		 ![](../../Property_Image.gif)
		 [Type](../../Interface/IReportCellContentChangeEventArgs/IReportCellContentChangeEventArgs.Type.htm)
		 Свойство Type возвращает
		 тип изменения.


		 ![](../../Property_Image.gif)
		 [Value](../../Interface/IReportCellContentChangeEventArgs/IReportCellContentChangeEventArgs.Value.htm)
		 Свойство Value определяет
		 значение в ячейке таблицы.


## Свойства, унаследованные от [IReportCellEventArgs](../../Interface/IReportCellEventArgs/IReportCellEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Column](../../Interface/IReportCellEventArgs/IReportCellEventArgs.Column.htm)
		 Свойство Column возвращает
		 индекс строки, в которой находится ячейка, для которой генерируется
		 событие.


		 ![](../../Property_Image.gif)
		 [Row](../../Interface/IReportCellEventArgs/IReportCellEventArgs.Row.htm)
		 Свойство Row возвращает
		 индекс столбца, в котором находится ячейка, для которой генерируется
		 событие.


## Свойства, унаследованные от [IReportEventArgs](../../Interface/IReportEventArgs/IReportEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Report](../../Interface/IReportEventArgs/IReportEventArgs.Report.htm)
		 Свойство Report возвращает
		 компонент [ReportBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportBox.htm),
		 сгенерировавший какое-либо событие.


		 ![](../../Property_Image.gif)
		 [Sheet](../../Interface/IReportEventArgs/IReportEventArgs.Sheet.htm)
		 Свойство Sheet возвращает
		 лист регламентного отчета, на котором произошло какое-либо событие.


См. также:


[Классы сборки Report](../KeReport_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
