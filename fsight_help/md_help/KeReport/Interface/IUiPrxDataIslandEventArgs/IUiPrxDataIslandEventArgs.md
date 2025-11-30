# IUiPrxDataIslandEventArgs

IUiPrxDataIslandEventArgs
-


# IUiPrxDataIslandEventArgs


## Описание


Интерфейс IUiPrxDataIslandEventArgs
 предназначен для работы с параметрами событий области данных, происходящих
 после осуществления определенного действия:


	- [EventOnAfterExecuteDataIsland](../IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterExecuteDataIsland.htm);


	- [EventOnAfterTransferDataDataIsland](../IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterTransferDataDataIsland.htm);


	- [UiReport.OnAfterTransferDataDataIsland](../../Class/UiReport/UiReport.OnAfterTransferDataDataIsland.htm).


## Комментарии


Интерфейс предназначен для работы с [областью
 данных](UiReport.chm::/desktop/AreaData/UiReport_AreaData.htm), которая является устаревшим типом таблицы.
 Для работы с аналитической областью данных используйте интерфейс [IEaxDatArea](KeExpress.chm::/Interface/IEaxDataArea/IEaxDataArea.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DataIsland](IUiPrxDataIslandEventArgs.DataIsland.htm)
		 Свойство DataIsland
		 возвращает область данных, которая была вычислена.


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
