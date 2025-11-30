# IEaxDataAreaPivotSlice.Pivot

IEaxDataAreaPivotSlice.Pivot
-


# IEaxDataAreaPivotSlice.Pivot


## Синтаксис


Pivot: [IPivot](KePivot.chm::/Interface/IPivot/IPivot.htm);


## Описание


Свойство Pivot возвращает объект
 для работы с основой для построения таблицы с данными.


## Пример


Для выполнения примера в репозитории предполагается наличие:


	- регламентного отчёта с идентификатором REPORT, содержащего аналитическую
	 область данных;


	- экспресс-отчёта с идентификатором EXPRESS, содержащего таблицу.


Оба отчёта построены на одном источнике данных. В экспресс-отчёте каким-либо
 образом изменён стиль оформления таблицы.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    DataArea: IEaxDataArea;

	    RepGrid, EaxGrid: IEaxGrid;

	    PivSlice, Slice: IEaxDataAreaPivotSlice;

	    Pivot: IPivot;

	    CombSel: IDimSelection;

	    Express: IEaxAnalyzer;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим аналитическую область данных регламентного отчёта

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    DataArea := Report.DataArea;

	    // Получим представление данных - таблицу

	    RepGrid := DataArea.Views.Item(0) As IEaxGrid;

	    // Получим основу для построения среза аналитической области данных

	    PivSlice := DataArea.Slices.Item(0) As IEaxDataAreaPivotSlice;

	    // Выведем в консоль количество измерений

	    Pivot := PivSlice.Pivot;

	    Debug.WriteLine("Количество измерений = " + Pivot.DimCount.ToString);

	    // Выведем в консоль отметку измерений метрик

	    CombSel := PivSlice.CombinedIndicatorSelection;

	    Debug.WriteLine("Элементы отметки измерения метрик = " + CombSel.ToString("", ", ", False));

	    // Получим экспресс-отчёт

	    Express := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    // Получим основу для построения среза

	    Slice := Express.DataArea.Slices.Item(0) As IEaxDataAreaPivotSlice;

	    // Получим таблицу экспресс-отчёта

	    EaxGrid := Express.Grid;

	    // Применим срез и представление данных

	    PivSlice.Apply(Slice, EaxPivotSliceApplyOptions.Default_);

	    RepGrid.Apply(EaxGrid, EaxGridApplyOptions.Default_);

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера в консоль будет выведено количество измерений
 в срезе, элементы отметки измерения метрик. В аналитическую область данных
 регламентного отчёта будут импортированы настройки из экспресс-отчёта.


См. также:


[IEaxDataAreaPivotSlice](IEaxDataAreaPivotSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
