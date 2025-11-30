# IEaxDataAreaPivotSlice.CalcOnChangedData

IEaxDataAreaPivotSlice.CalcOnChangedData
-


# IEaxDataAreaPivotSlice.CalcOnChangedData


## Синтаксис


CalcOnChangedData: Boolean;


## Описание


Свойство CalcOnChangedData определяет,
 используется ли [расчёт
 формул](UiAnalyticalArea.chm::/Working_with_table_data/FormulaCalculation.htm) на измененных данных без предварительного сохранения
 данных для среза аналитической области.


## Комментарии


Допустимые значения:


	- True. Расчёт формул
	 на измененных данных производится;


	- False. Расчёт формул
	 на измененных данных не производится.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT.


Добавьте ссылки на системные сборки: Express, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    DataArea: IEaxDataArea;

	    RepGrid: IEaxGrid;

	    PivSlice: IEaxDataAreaPivotSlice;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим аналитическую область данных регламентного отчета

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    DataArea := Report.DataArea;

	    // Получим представление данных - таблицу

	    RepGrid := DataArea.Views.Item(0) As IEaxGrid;

	    // Получим основу для построения среза аналитической области данных

	    PivSlice := DataArea.Slices.Item(0) As IEaxDataAreaPivotSlice;

	    // Установим расчёт формул на измененных данных

	    If (PivSlice.CalcOnChangedData = False) Then

	        PivSlice.CalcOnChangedData := True;

	    End If;

	    // Сохраним отчёт

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для среза аналитической области регламентного
 отчёта будет включен расчёт формул на измененных данных без предварительного
 сохранения данных.


См. также:


[IEaxDataAreaPivotSlice](IEaxDataAreaPivotSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
