# IReportObjectResizingEventArgs

IReportObjectResizingEventArgs
-


# IReportObjectResizingEventArgs


Сборка: Report;


## Описание


Интерфейс IReportObjectResizingEventArgs
 содержит свойства аргумента события, происходящего при изменении размеров
 объекта.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IReportEventArgs](../IReportEventArgs/IReportEventArgs.htm)


           IReportObjectResizingEventArgs


## Комментарии


Данный аргумент используется при обработке следующих событий:


	- [ReportBox.OnObjectResizing](../../Class/ReportBox/ReportBox.OnObjectResizing.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](IReportObjectResizingEventArgs.Cancel.htm)
		 Свойство Cancel определяет,
		 отменять ли изменение размеров.


		 ![](../../Property_Image.gif)
		 [Object](IReportObjectResizingEventArgs.Object.htm)
		 Свойство Object возвращает
		 изменяемый объект.


		 ![](../../Property_Image.gif)
		 [Rect](IReportObjectResizingEventArgs.Rect.htm)
		 Свойство Rect возвращает
		 координаты прямоугольной области занимаемой объектом.


		 ![](../../Property_Image.gif)
		 [Side](IReportObjectResizingEventArgs.Side.htm)
		 Свойство Side возвращает
		 сторону, которая была изменена.


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
