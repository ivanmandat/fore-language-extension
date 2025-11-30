# IReportBeforeObjectRectChangeEventArgs

IReportBeforeObjectRectChangeEventArgs
-


# IReportBeforeObjectRectChangeEventArgs


Сборка: Report;


## Описание


Интерфейс IReportBeforeObjectRectChangeEventArgs
 предназначен для работы с параметрами события, возникающего до перемещения
 объекта или изменения его размеров.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IReportEventArgs](../IReportEventArgs/IReportEventArgs.htm)


           [IReportObjectChangeEventArgs](../IReportObjectChangeEventArgs/IReportObjectChangeEventArgs.htm)


           IReportBeforeObjectRectChangeEventArgs


## Комментарии


Данное событие наступило, если значение свойства [IReportObjectChangeEventArgs.Type](../IReportObjectChangeEventArgs/IReportObjectChangeEventArgs.Type.htm),
 возвращаемое параметром Args
 в событии [OnBeforeObjectChange](../../Class/ReportBox/ReportBox.OnBeforeObjectChange.htm)
 компонента [ReportBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportBox.htm)
 имеет значение [TabObjectChangeType.Rect](TabSheet.chm::/Enums/TabObjectChangeType.htm).
 Для получения параметров события приведите параметр Args
 к интерфейсу IReportBeforeObjectRectChangeEventArgs.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](IReportBeforeObjectRectChangeEventArgs.Cancel.htm)
		 Свойство Cancel определяет,
		 отменять ли перемещение или изменение размеров объекта.


		 ![](../../Property_Image.gif)
		 [NewValue](IReportBeforeObjectRectChangeEventArgs.NewValue.htm)
		 Свойство NewValue определяет
		 новое положение и размер объекта.


## Свойства, унаследованные от [IReportObjectChangeEventArgs](../IReportObjectChangeEventArgs/IReportObjectChangeEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Object](../IReportObjectChangeEventArgs/IReportObjectChangeEventArgs.Object.htm)
		 Свойство Object возвращает
		 изменяемый объект.


		 ![](../../Property_Image.gif)
		 [Type](../IReportObjectChangeEventArgs/IReportObjectChangeEventArgs.Type.htm)
		 Свойство Type возвращает
		 тип изменения, которое происходит с объектом.


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
