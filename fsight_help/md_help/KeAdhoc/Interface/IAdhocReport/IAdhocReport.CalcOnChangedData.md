# IAdhocReport.CalcOnChangedData

IAdhocReport.CalcOnChangedData
-


# IAdhocReport.CalcOnChangedData


## Синтаксис


CalcOnChangedData: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство CalcOnChangedData определяет,
 используется ли [расчёт
 формул](UiAnalyticalArea.chm::/Working_with_table_data/FormulaCalculation.htm) на измененных данных без предварительного сохранения
 данных в аналитической панели.


## Комментарии


Допустимые значения:


	- TriState.OnOption. Расчёт
	 формул на измененных данных производится;


	- TriState.OffOption.
	 Расчёт формул на измененных данных не производится;


	- TriState.Undefined.
	 Значение по умолчанию. Расчёт формул на измененных данных не
	 производится.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «DASHBOARD_CALC».


Добавьте ссылки на системные сборки: Adhoc, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    DashboardObj: IMetabaseObject;

    Dashboard: IAdhocReport;

Begin

   // Получим репозиторий

    mb := MetabaseClass.Active;

   // Получим аналитическую панель

    DashboardObj := mb.ItemById("DASHBOARD_CALC").Edit;

    Dashboard := DashboardObj As IAdhocReport;

   // Установим расчёт формул на измененных данных

    If (Dashboard.CalcOnChangedData = TriState.OffOption) Or (Dashboard.CalcOnChangedData = TriState.Undefined) Then

        Dashboard.CalcOnChangedData := TriState.OnOption;

    End If;

   // Сохраним аналитическую
 панель

    DashboardObj.Save;

End Sub UserProc;


В результате выполнения примера для аналитической панели будет включен
 расчёт формул на измененных данных без предварительного сохранения данных.


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
