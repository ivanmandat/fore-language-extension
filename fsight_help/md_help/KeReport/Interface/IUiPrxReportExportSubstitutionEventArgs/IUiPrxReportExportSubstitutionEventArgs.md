# IUiPrxReportExportSubstitutionEventArgs

IUiPrxReportExportSubstitutionEventArgs
-


# IUiPrxReportExportSubstitutionEventArgs


Сборка: Report;


## Описание


Интерфейс IUiPrxReportExportSubstitutionEventArgs
 содержит свойства аргумента события, происходящего при подмене регламентного
 отчета во время экспорта в файл.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IUiReportBaseEventArgs](../IUiReportBaseEventArgs/IUiReportBaseEventArgs.htm)


           [IUiPrxReportBaseSubstitutionEventArgs](../IUiPrxReportBaseSubstitutionEventArgs/IUiPrxReportBaseSubstitutionEventArgs.htm)


           IUiPrxReportExportSubstitutionEventArgs


## Комментарии


Аргумент доступен в событиях [IPrxReportUserEvents.EventOnSubstituteReport](../IPrxReportUserEvents/IPrxReportUserEvents.EventOnSubstituteReport.htm)
 и [ReportEvents.OnSubstituteReport](../../Class/ReportEvents/ReportEvents.OnSubstituteReport.htm).
 Если свойство [IUiPrxReportBaseSubstitutionEventArgs.Context](../IUiPrxReportBaseSubstitutionEventArgs/IUiPrxReportBaseSubstitutionEventArgs.Context.htm)
 возвращает значение [PrxReportSubstitutionContext.Export](../../Enums/PrxReportSubstitutionContext.htm),
 то приведите аргумент к типу IUiPrxReportExportSubstitutionEventArgs
 для получения его дополнительных параметров.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ExportFormat](IUiPrxReportExportSubstitutionEventArgs.ExportFormat.htm)
		 Свойство ExportFormat
		 возвращает формат, в который осуществляется экспорт отчета.


## Свойства, унаследованные от [IUiPrxReportBaseSubstitutionEventArgs](../IUiPrxReportBaseSubstitutionEventArgs/IUiPrxReportBaseSubstitutionEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Context](../IUiPrxReportBaseSubstitutionEventArgs/IUiPrxReportBaseSubstitutionEventArgs.Context.htm)
		 Свойство Context возвращает
		 происходящее действие, при котором осуществляется подмена регламентного
		 отчета.


		 ![](../../Property_Image.gif)
		 [Report](../IUiPrxReportBaseSubstitutionEventArgs/IUiPrxReportBaseSubstitutionEventArgs.Report.htm)
		 Свойство Report определяет
		 регламентный отчет, на который осуществляется подмена.


## Свойства, унаследованные от [IUiReportBaseEventArgs](../IUiReportBaseEventArgs/IUiReportBaseEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [UiRep](../IUiReportBaseEventArgs/IUiReportBaseEventArgs.UiRep.htm)
		 Свойство UiRep возвращает
		 объект, содержащий компонент UiReport,
		 сгенерировавший событие.


См. также:


[Интерфейсы
 сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
