# IUiPrxDataIslandCancelEventArgs

IUiPrxDataIslandCancelEventArgs
-


# IUiPrxDataIslandCancelEventArgs


## Описание


Интерфейс IUiPrxDataIslandCancelEventArgs
 предназначен для работы с параметрами событий области данных, происходящих
 до осуществления определенного действия:


	- [EventOnBeforeExecuteDataIsland](../IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeExecuteDataIsland.htm);


	- [EventOnBeforeTransferDataDataIsland](../IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeTransferDataDataIsland.htm);


	- [UiReport.OnBeforeTransferDataDataIsland](../../Class/UiReport/UiReport.OnBeforeTransferDataDataIsland.htm).


## Комментарии


Интерфейс предназначен для работы с [областью
 данных](UiReport.chm::/desktop/AreaData/UiReport_AreaData.htm), которая является устаревшим типом таблицы.
 Для работы с аналитической областью данных используйте интерфейс [IEaxDatArea](KeExpress.chm::/Interface/IEaxDataArea/IEaxDataArea.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](IUiPrxDataIslandCancelEventArgs.Cancel.htm)
		 Свойство Cancel определяет,
		 будет ли производиться действие (вычисление, сохранение) области
		 данных.


## Свойства, унаследованные от [IUiPrxDataIslandEventArgs](../IUiPrxDataIslandEventArgs/IUiPrxDataIslandEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DataIsland](../IUiPrxDataIslandEventArgs/IUiPrxDataIslandEventArgs.DataIsland.htm)
		 Свойство DataIsland
		 возвращает область данных.


## Свойства, унаследованные от [IUiReportBaseEventArgs](../IUiReportBaseEventArgs/IUiReportBaseEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [UiRep](../IUiReportBaseEventArgs/IUiReportBaseEventArgs.UiRep.htm)
		 Свойство UiRep возвращает
		 объект, содержащий компонент UiReport,
		 сгенерировавший событие.


См. также:


[Интерфейсы сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
