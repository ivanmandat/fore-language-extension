# IEaxGridHeaderSettings.Behaviour

IEaxGridHeaderSettings.Behaviour
-


# IEaxGridHeaderSettings.Behaviour


## Синтаксис


Behaviour: [EaxGridHeaderBehaviour](../../Enums/EaxGridHeaderBehaviour.htm);


## Описание


Свойство Behaviour определяет
 поведение строк и столбцов при вставке области данных.


## Комментарии


Свойство актуально только для области данных регламентного отчета.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором REPORT. Отчет содержит область данных, для которой настроена
 раскрывающаяся иерархия.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot, Report,
 Tab.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Report: IPrxReport;

	    Table: ITabSheet;

	    DataArea: IEaxDataAreaViews;

	    Grid: IEaxGrid;

	    Slice: IEaxDataAreaPivotSlice;

	    SettBase: IDataAreaHeaderSettingsBase;

	    ViewSett: IEaxGridViewSettings;

	    sett: IEaxGridHeaderSettings;

	Begin

	    mb := MetabaseClass.Active;

	    Report :=  MB.ItemById("REPORT").Edit As IPrxReport;

	    Table := (Report.ActiveSheet As IPrxTable).TabSheet;

	    DataArea := Report.DataArea.Views;

	    Grid := DataArea.FindById("EaxObject") As IEaxGrid;

	    Slice := Grid.Slice As IEaxDataAreaPivotSlice;

	    SettBase := Slice.Pivot.LeftHeader As IDataAreaHeaderSettingsBase;

	    ViewSett := Grid.ViewSettings;

	    sett := ViewSett.GetViewSettings(SettBase) As IEaxGridHeaderSettings;

	    // Поведение строк/столбцов

	    sett.Behaviour := EaxGridHeaderBehaviour.Fixed;

	    // Видимость пиктограмм сортировки

	    sett.DisplaySortIcons := True;

	    // Отступ в раскрывающейся иерархии

	    sett.HierarchyIndent := 15;

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для боковика области данных регламентного отчета
 будут заданы следующие настройки:


	- используется фиксированный размер строк и столбцов;


	- пиктограммы сортировки видимые;


	- задан отступ в раскрывающейся иерархии.


См. также:


[IEaxGridHeaderSettings](IEaxGridHeaderSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
