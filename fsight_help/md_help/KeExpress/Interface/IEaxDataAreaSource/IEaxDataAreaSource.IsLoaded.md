# IEaxDataAreaSource.IsLoaded

IEaxDataAreaSource.IsLoaded
-


# IEaxDataAreaSource.IsLoaded


## Синтаксис


IsLoaded: Boolean;


## Описание


Свойство IsLoaded определят,
 будет ли загружаться источник данных аналитической области.


## Комментарии


Свойство актуально, если установлена отложенная загрузка листов аналитической
 области: у свойства [IEaxDataArea.DelayedLoad](../IEaxDataArea/IEaxDataArea.DelayedLoad.htm)
 установлено значение True.


Допустимые значения:


	- True. Источник будет
	 загружаться. Значение по умолчанию для источников данных на активном
	 листе;


	- False. Источник не будет
	 загружаться. Значение по умолчанию для источников данных на неактивном
	 листе.


## Пример


Для выполнения примера в репозитории предполагается наличие формы ввода
 с идентификатором DEF, которая содержит два листа: на первом листе находится
 одна табличная область, на втором листе табличная область и редактор атрибута
 справочника.


Добавьте ссылки на системные сборки: Express, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Sheets: IPrxSheets;

	    Sheet: IPrxSheet;

	    Area: IEaxDataArea;

	    Slices: IEaxDataAreaSlices;

	    Slice: IEaxDataAreaSlice;

	    Sources: IEaxDataAreaSources;

	    Source: IEaxDataAreaSource;

	    Views: IEaxDataAreaViews;

	    Object: IEaxObject;

	    i: integer;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим дочерний объект формы

	    Report := MB.ItemById("DEF").Children.Item(0).Edit As IPrxReport;

	    // Получим аналитическую область дочернего объекта

	    Area := Report.DataArea As IEaxDataArea;

	    Debug.WriteLine("Загрузка листов отложена - " + Area.DelayedLoad.ToString);

	    // Получим листы отчёта

	    Sheets := Report.Sheets;

	    // Установим активным первый лист

	    Sheet := Sheets.Item(0);

	    Sheet.Active := True;

	    // Получим источники данных аналитической области

	    Sources := Area.DataSources;

	    // Загрузим второй источник

	    Source := Sources.Item(1);

	    Source.Load;

	    // Получим срезы аналитической области

	    Slices := Area.Slices;

	    // Загрузим второй срез

	    Slice := Slices.Item(1);

	    Slice.Load;

	    // Получим объекты аналитической области

	    Views := Area.Views;

	    // Загрузим второй объект

	    Object := Views.Item(1);

	    Object.Load;

	    // Сохраним дочерний объект

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в форме ввода будет активным первый
 лист, все источники, срезы и объекты первого листа будут загружены, также
 будут загружены второй источник, второй срез и второй объект.


См. также:


[IEaxDataAreaSource](IEaxDataAreaSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
