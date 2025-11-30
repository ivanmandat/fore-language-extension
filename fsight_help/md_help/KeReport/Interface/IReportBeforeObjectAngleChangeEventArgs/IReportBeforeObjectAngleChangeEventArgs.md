# IReportBeforeObjectAngleChangeEventArgs

IReportBeforeObjectAngleChangeEventArgs
-


# IReportBeforeObjectAngleChangeEventArgs


Сборка: Report;


## Описание


Интерфейс IReportBeforeObjectAngleChangeEventArgs
 предназначен для работы с параметрами события, возникающего до вращения
 объекта.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IReportEventArgs](../IReportEventArgs/IReportEventArgs.htm)


           [IReportObjectChangeEventArgs](../IReportObjectChangeEventArgs/IReportObjectChangeEventArgs.htm)


           IReportBeforeObjectAngleChangeEventArgs


## Комментарии


Данное событие наступило, если значение свойства [IReportObjectChangeEventArgs.Type](../IReportObjectChangeEventArgs/IReportObjectChangeEventArgs.Type.htm),
 возвращаемое параметром Args
 в событии [OnBeforeObjectChange](../../Class/ReportBox/ReportBox.OnBeforeObjectChange.htm)
 компонента [ReportBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportBox.htm)
 имеет значение [TabObjectChangeType.Angle](TabSheet.chm::/Enums/TabObjectChangeType.htm).
 Для получения параметров события приведите параметр Args
 к интерфейсу IReportBeforeObjectAngleChangeEventArgs.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](IReportBeforeObjectAngleChangeEventArgs.Cancel.htm)
		 Свойство Cancel определяет,
		 отменять ли вращение объекта.


		 ![](../../Property_Image.gif)
		 [NewValue](IReportBeforeObjectAngleChangeEventArgs.NewValue.htm)
		 Свойство NewValue определяет
		 угол, на который был повёрнут объект.


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
