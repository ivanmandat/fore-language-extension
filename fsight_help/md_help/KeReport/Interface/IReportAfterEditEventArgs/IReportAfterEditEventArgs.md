# IReportAfterEditEventArgs

IReportAfterEditEventArgs
-


# IReportAfterEditEventArgs


## Описание


Интерфейс IReportAfterEditEventArgs
 содержит свойства аргумента события, наступающего после редактирования
 данных какой-либо ячейки: [ReportBox.OnAfterEdit](../../Class/ReportBox/ReportBox.OnAfterEdit.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Changed](IReportAfterEditEventArgs.Changed.htm)
		 Свойство Changed возвращает
		 True, если во время редактирования
		 были изменены данные какой-либо ячейки.


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


## Свойства, унаследованные от [IReportCellEventArgs](../IReportCellEventArgs/IReportCellEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Column](../IReportCellEventArgs/IReportCellEventArgs.Column.htm)
		 Свойство Column возвращает
		 индекс столбца, в котором находится ячейка, для которой генерируется
		 событие.


		 ![](../../Property_Image.gif)
		 [Row](../IReportCellEventArgs/IReportCellEventArgs.Row.htm)
		 Свойство Row возвращает
		 индекс строки, в которой находится ячейка, для которой генерируется
		 событие.


См. также:


[Интерфейсы сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
