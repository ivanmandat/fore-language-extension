# IReportColumnResizeEventArgs

IReportColumnResizeEventArgs
-


# IReportColumnResizeEventArgs


Сборка: Report;


## Описание


Интерфейс IReportColumnResizeEventArgs
 содержит свойства аргумента события, происходящего после изменения размера
 столбца таблицы.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IReportEventArgs](../IReportEventArgs/IReportEventArgs.htm)


           [IReportColumnEventArgs](../IReportColumnEventArgs/IReportColumnEventArgs.htm)


           IReportColumnResizeEventArgs


## Комментарии


Данный аргумент используется при обработке следующих событий:


	- [OnColumnResize](../../Class/ReportBox/ReportBox.OnColumnResize.htm)


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Type](IReportColumnResizeEventArgs.Type.htm)
		 Свойство Type возвращает
		 тип действия, в результате которого изменяется размер столбца.


## Свойства, унаследованные от [IReportColumnEventArgs](../IReportColumnEventArgs/IReportColumnEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Column](../IReportColumnEventArgs/IReportColumnEventArgs.Column.htm)
		 Свойство Column возвращает
		 индекс столбца, для которого было сгенерировано событие.


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
