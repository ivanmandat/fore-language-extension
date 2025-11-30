# Workbook.getGaugePeriodDim

Workbook.getGaugePeriodDim
-


**


# Workbook.getGaugePeriodDim


## Синтаксис


getGaugePeriodDim();


## Описание


Метод getGaugePeriodDim**
 возвращает календарный справочник спидометра.


## Пример


Для выполнения предполагается наличие на странице компонента WorkbookBox
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)») и расположенным в нем спидометре.
 Получим календарный справочник спидометра и его идентификатор:


// Получим источник данных
source = workbookBox.getSource();
// Получим активную страницу - экземпляр класса PP.TS.Workbook
sheet = source.getActiveSheet();
// Получим календарный справочник спидометра
calend = sheet.getGaugePeriodDim();
// Получим идентификатор справочника
calend.getId();

В результате выполнения примера будет получен календарный справочник
 спидометра. В консоли браузера будет выведено сообщение с идентификатором
 справочника.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
