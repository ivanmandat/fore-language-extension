# IReportInteractiveSelectionChangeEventArgs

IReportInteractiveSelectionChangeEventArgs
-


# IReportInteractiveSelectionChangeEventArgs


Сборка: Report;


## Описание


Интерфейс IReportInteractiveSelectionChangeEventArgs
 содержит свойства аргумента события, происходящего в момент перемещения
 выделенной области ячеек таблицы.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IReportEventArgs](../IReportEventArgs/IReportEventArgs.htm)


           [IReportInteractiveSelectionEventArgs](../IReportInteractiveSelectionEventArgs/IReportInteractiveSelectionEventArgs.htm)


           IReportInteractiveSelectionChangeEventArgs


## Комментарии


Данный аргумент используется при обработке следующих событий:


	- [OnInteractiveSelectionChange](../../Class/ReportBox/ReportBox.OnInteractiveSelectionChange.htm)


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](IReportInteractiveSelectionChangeEventArgs.Cancel.htm)
		 Свойство Cancel определяет
		 признак допустимости перемещения выделенной области ячеек.


## Свойства, унаследованные от [IReportInteractiveSelectionEventArgs](../IReportInteractiveSelectionEventArgs/IReportInteractiveSelectionEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Range](../IReportInteractiveSelectionEventArgs/IReportInteractiveSelectionEventArgs.Range.htm)
		 Свойство Range возвращает
		 диапазон ячеек, в который перемещена в текущий момент выделенная
		 область ячеек.


		 ![](../../Property_Image.gif)
		 [Type](../IReportInteractiveSelectionEventArgs/IReportInteractiveSelectionEventArgs.Type.htm)
		 Свойство Type возвращает
		 тип события, при котором происходит визуальное перемещение выделенной
		 области ячеек таблицы.


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
