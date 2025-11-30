# IReportRowResizingEventArgs

IReportRowResizingEventArgs
-


# IReportRowResizingEventArgs


Сборка: Report;


## Описание


Интерфейс IReportRowResizingEventArgs
 содержит свойства аргумента события, происходящего при каждом видимом
 изменении размера строки таблицы.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IReportEventArgs](../IReportEventArgs/IReportEventArgs.htm)


           [IReportRowEventArgs](../IReportRowEventArgs/IReportRowEventArgs.htm)


           [IReportRowResizeEventArgs](../IReportRowResizeEventArgs/IReportRowResizeEventArgs.htm)


           IReportRowResizingEventArgs


## Комментарии


Данный аргумент используется при обработке следующих событий:


	- [OnRowResizing](../../Class/ReportBox/ReportBox.OnRowResizing.htm)


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](IReportRowResizingEventArgs.Cancel.htm)
		 Свойство Cancel определяет
		 допустимость изменения высоты строки.


## Свойства, унаследованные от [IReportRowResizeEventArgs](../IReportRowResizeEventArgs/IReportRowResizeEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Type](../IReportRowResizeEventArgs/IReportRowResizeEventArgs.Type.htm)
		 Свойство Type возвращает
		 тип действия, в результате которого изменяется размер строки.


## Свойства, унаследованные от [IReportRowEventArgs](../IReportRowEventArgs/IReportRowEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Row](../IReportRowEventArgs/IReportRowEventArgs.Row.htm)
		 Свойство Row возвращает
		 индекс строки, по заголовку которой осуществлен щелчок основной
		 кнопки мыши.


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
