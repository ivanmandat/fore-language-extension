# IReportInteractiveSelectionEventArgs

IReportInteractiveSelectionEventArgs
-


# IReportInteractiveSelectionEventArgs


Сборка: Report;


## Описание


Интерфейс IReportInteractiveSelectionEventArgs
 содержит свойства аргумента событий, происходящих при перемещении выделенной
 области ячеек в таблице.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IReportEventArgs](../IReportEventArgs/IReportEventArgs.htm)


           IReportInteractiveSelectionEventArgs


## Комментарии


Данный аргумент используется при обработке следующих событий:


	- [OnBeginInteractiveSelectionChange](../../Class/ReportBox/ReportBox.OnBeginInteractiveSelectionChange.htm)


	- [OnEndInteractiveSelectionChange](../../Class/ReportBox/ReportBox.OnEndInteractiveSelectionChange.htm)


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Range](IReportInteractiveSelectionEventArgs.Range.htm)
		 Свойство Range возвращает
		 диапазон ячеек, в который перемещена в текущий момент выделенная
		 область ячеек.


		 ![](../../Property_Image.gif)
		 [Type](IReportInteractiveSelectionEventArgs.Type.htm)
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
