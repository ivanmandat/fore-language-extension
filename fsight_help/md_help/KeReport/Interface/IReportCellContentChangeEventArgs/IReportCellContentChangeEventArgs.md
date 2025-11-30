# IReportCellContentChangeEventArgs

IReportCellContentChangeEventArgs
-


# IReportCellContentChangeEventArgs


## Описание


Интерфейс IReportCellContentChangeEventArgs
 предназначен для работы с параметрами события [ReportBox.OnChangeCellContent](../../Class/ReportBox/ReportBox.OnChangeCellContent.htm)
 (изменение содержимого в ячейке таблицы).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](IReportCellContentChangeEventArgs.Cancel.htm)
		 Свойство Cancel определяет:
		 отменять ли изменения, сделанные в ячейке таблицы.


		 ![](../../Property_Image.gif)
		 [Type](IReportCellContentChangeEventArgs.Type.htm)
		 Свойство Type возвращает
		 тип изменения.


		 ![](../../Property_Image.gif)
		 [Value](IReportCellContentChangeEventArgs.Value.htm)
		 Свойство Value определяет
		 значение в ячейке таблицы.


## Свойства, унаследованные от [IReportCellEventArgs](../IReportCellEventArgs/IReportCellEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Column](../IReportCellEventArgs/IReportCellEventArgs.Column.htm)
		 Свойство Column возвращает
		 индекс строки, в которой находится ячейка, для которой генерируется
		 событие.


		 ![](../../Property_Image.gif)
		 [Row](../IReportCellEventArgs/IReportCellEventArgs.Row.htm)
		 Свойство Row возвращает
		 индекс столбца, в котором находится ячейка, для которой генерируется
		 событие.


## Свойства, унаследованные от [IReportEventArgs](../IReportEventArgs/IReportEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Report](../IReportEventArgs/IReportEventArgs.Report.htm)
		 Свойство Report возвращает
		 компонент [ReportBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportBox.htm),
		 сгенерировавший какое-либо событие.


		 ![](../../Property_Image.gif)
		 [Sheet](../IReportEventArgs/IReportEventArgs.Sheet.htm)
		 Свойство Sheet возвращает
		 лист регламентного отчета, на котором произошло какое-либо событие.


См. также:


[Интерфейсы сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
