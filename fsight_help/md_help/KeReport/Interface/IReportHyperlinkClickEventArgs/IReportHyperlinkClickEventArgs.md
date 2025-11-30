# IReportHyperlinkClickEventArgs

IReportHyperlinkClickEventArgs
-


# IReportHyperlinkClickEventArgs


Сборка: Report;


## Описание


Интерфейс IReportHyperlinkClickEventArgs
 предназначен для работы с аргументами
 событий, генерируемых для гиперссылки в ячейке таблицы.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IReportEventArgs](../IReportEventArgs/IReportEventArgs.htm)


           [IReportCellEventArgs](../IReportCellEventArgs/IReportCellEventArgs.htm)


           IReportHyperlinkClickEventArgs


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Type](IReportHyperlinkClickEventArgs.Type.htm)
		 Свойство Type возвращает
		 тип гиперссылки (изображение или текст), по которой произведен
		 щелчок.


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


[Интерфейсы
 сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
