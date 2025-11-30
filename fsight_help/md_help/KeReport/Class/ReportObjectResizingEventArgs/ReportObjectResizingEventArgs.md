# ReportObjectResizingEventArgs

ReportObjectResizingEventArgs
-


# ReportObjectResizingEventArgs


Сборка: Report;


## Описание


Класс ReportObjectResizingEventArgs
 реализует аргумент события, происходящего при каждом изменении размера
 объекта.


## Комментарии


Для реализации аргумента события, происходящего при перемещении объекта,
 используйте класс [ReportObjectMovingEventArgs](../ReportObjectMovingEventArgs/ReportObjectMovingEventArgs.htm).


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Create](ReportObjectResizingEventArgs.Create.htm)
		 Конструктор Create
		 создает аргумент события, происходящего при каждом изменении размера
		 объекта.


## Конструкторы, унаследованные от [ReportEventArgs](../ReportEventArgs/ReportEventArgs.htm)


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateArgs](../ReportEventArgs/ReportEventArgs.CreateArgs.htm)
		 Конструктор CreateArgs
		 создает аргумент событий компонента [ReportBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportBox.htm).


## Свойства объекта класса, унаследованные от


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](../../Interface/IReportObjectResizingEventArgs/IReportObjectResizingEventArgs.Cancel.htm)
		 Свойство Cancel определяет,
		 отменять ли изменение размеров.


		 ![](../../Property_Image.gif)
		 [Object](../../Interface/IReportObjectResizingEventArgs/IReportObjectResizingEventArgs.Object.htm)
		 Свойство Object возвращает
		 изменяемый объект.


		 ![](../../Property_Image.gif)
		 [Rect](../../Interface/IReportObjectResizingEventArgs/IReportObjectResizingEventArgs.Rect.htm)
		 Свойство Rect возвращает
		 координаты прямоугольной области занимаемой объектом.


		 ![](../../Property_Image.gif)
		 [Side](../../Interface/IReportObjectResizingEventArgs/IReportObjectResizingEventArgs.Side.htm)
		 Свойство Side возвращает
		 сторону, которая была изменена.


## Свойства объекта класса, унаследованные от [IReportEventArgs](../../Interface/IReportEventArgs/IReportEventArgs.htm)


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


[Классы
 сборки Report](../KeReport_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
