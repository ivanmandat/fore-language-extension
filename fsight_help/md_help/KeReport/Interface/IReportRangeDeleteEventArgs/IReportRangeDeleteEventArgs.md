# IReportRangeDeleteEventArgs

IReportRangeDeleteEventArgs
-


# IReportRangeDeleteEventArgs


Сборка: Report;


## Описание


Интерфейс IReportRangeDeleteEventArgs
 предназначен для работы с аргументами событий, происходящих при удалении
 диапазонов/строк/столбцов.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IReportEventArgs](../IReportEventArgs/IReportEventArgs.htm)


           IReportRangeDeleteEventArgs


## Комментарии


Для работы с аргументами событий, происходящих при добавлении диапазонов/строк/столбцов
 используйте свойства интерфейса [IReportRangeInsertEventArgs](../IReportRangeInsertEventArgs/IReportRangeInsertEventArgs.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Range](IReportRangeDeleteEventArgs.Range.htm)
		 Свойство Range возвращает
		 параметры диапазона ячеек таблицы.


		 ![](../../Property_Image.gif)
		 [ShiftDirection](IReportRangeDeleteEventArgs.ShiftDirection.htm)
		 Свойство ShiftDirection
		 возвращает способ, который использовался при удалении диапазона
		 ячеек.


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
