# IPrxVisualizer.EaxVisualizer

IPrxVisualizer.EaxVisualizer
-


# IPrxVisualizer.EaxVisualizer


## Синтаксис


EaxVisualizer: [IEaxVisualizer](KeExpress.chm::/Interface/IEaxVisualizer/IEaxVisualizer.htm);


## Описание


Свойство EaxVisualizer определяет
 тип визуализатора в регламентном отчете.


## Комментарии


Доступные типы визуализаторов указаны в перечислении [EaxObjectType](KeExpress.chm::/Enums/EaxObjectType.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие:


	- регламентного отчета с идентификатором REG_REPORT_VISUALIZER.
	 Отчет построен на основе источника данных - куб;


	- карты с идентификатором MAP.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Report,
 Tab, Topobase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    ActiveSheet: IPrxSheet;

	    Table: IPrxTable;

	    Objects: ITabObjects;

	    AddObj: ITabObject;

	    Obj: IPrxVisualizer;

	    DA: IEaxDAtaArea;

	    Slice: IEaxDataAreaSlice;

	    SlObj: IEaxObject;

	    MapChart: IEaxMapChart;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчет

	    Report := MB.ItemById("REG_REPORT_VISUALIZER").Edit As IPrxReport;

	    // Создадим новый объект «визуализатор»

	    ActiveSheet := Report.ActiveSheet;

	    Table := ActiveSheet As IPrxTable;

	    Objects := Table.TabSheet.Objects;

	    AddObj := Objects.Add("PrxVisualizer", New GxRectF.Create(0, 0, 100, 100));

	    Obj := AddObj.Extension As IPrxVisualizer;

	    // Получим аналитическую область данных

	    DA := Report.DataArea;

	    // Получим срез данных

	    Slice := DA.Slices.Item(0);

	    // В качестве визуализатора добавим карту

	    SlObj := Slice.Views.AddByType(EaxObjectType.MapChart) As IEaxVisualizer;

	    Obj.EaxVisualizer := SlObj As IEaxVisualizer;

	    MapChart := Obj.EaxVisualizer As IEaxMapChart;

	    MapChart.Enabled := True;

	    MapChart.Visible := True;

	    MapChart.Topobase := MB.ItemById("MAP").Edit As ITopobase;

	    // Обновим карту

	    MapChart.Refresh;

	    // Сохраним изменения

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в заданном регламентном отчете будет создан
 визуализатор на основе карты.


См. также:


[IPrxVisualizer](IPrxVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
