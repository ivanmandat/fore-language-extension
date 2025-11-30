# IReportBeforeExpanderChangedEventArgs

IReportBeforeExpanderChangedEventArgs
-


# IReportBeforeExpanderChangedEventArgs


Сборка: Report;


## Описание


Интерфейс IReportBeforeExpanderChangedEventArgs
 содержит свойства аргумента события, наступающего перед изменением состояния
 экспандера в ячейке таблицы.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IReportEventArgs](../IReportEventArgs/IReportEventArgs.htm)


           [IReportCellEventArgs](../IReportCellEventArgs/IReportCellEventArgs.htm)


           [IReportExpanderChangedEventArgs](../IReportExpanderChangedEventArgs/IReportExpanderChangedEventArgs.htm)


           IReportBeforeExpanderChangedEventArgs


## Комментарии


Данный аргумент используется при обработке следующих событий:


	- [OnBeforeExpanderChanged](../../Class/ReportBox/ReportBox.OnBeforeExpanderChanged.htm)


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](IReportBeforeExpanderChangedEventArgs.Cancel.htm)
		 Свойство Cancel определяет
		 признак допустимости изменения состояния экспандера.


## Свойства, унаследованные от [IReportExpanderChangedEventArgs](../IReportExpanderChangedEventArgs/IReportExpanderChangedEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [State](../IReportExpanderChangedEventArgs/IReportExpanderChangedEventArgs.State.htm)
		 Свойство State возвращает
		 состояние экспандера, которое будет установлено.


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
