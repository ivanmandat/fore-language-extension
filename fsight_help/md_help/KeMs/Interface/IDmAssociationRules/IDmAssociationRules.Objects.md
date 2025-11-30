# IDmAssociationRules.Objects

IDmAssociationRules.Objects
-


# IDmAssociationRules.Objects


## Синтаксис


		Objects: Integer;


## Описание


Свойство Objects определяет
 индекс поля источника данных, содержащего анализируемые элементы.


## Комментарии


Индекс поля, содержащего транзакции, определяет свойство [IDmAssociationRules.Transactions](IDmAssociationRules.Transactions.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие:


	- таблицы с идентификатором DM_TABLE, содержащей данные для анализа;


	- регламентного отчёта с идентификатором DM_REPORT_RES, в который
	 будут выгружены результаты анализа.


Добавьте ссылки на системные сборки: Metabase, Ms, Report, Stat, Tab.


					Sub UserARules;

		Var

		    mb: IMetabase;

		    TableDS: IDmTableDataSource;

		    ReportDS: IDmReportDataSource;

		    Method: IDmMethod;

		    Report: IPrxReport;

		    Shs: IPrxSheets;

		    Sheet: ITabSheet;

		    DM: IDmAssociationRules;

		    Reports: IDmReports;

		    DmReport: IDmReport;

		Begin

		    mb := MetabaseClass.Active;

		    // Создаем метод расчёта

		    Method := (New DataMiningMethod.Create) As IDmMethod;

		    // Указываем тип метода

		    Method.Kind := DmMethodKind.AssociationRules;

		    // Создаем табличный источник данных

		    TableDS := (New TableDataSource.Create) As IDmTableDataSource;

		    // Указываем таблицу-источник

		    TableDS.Table := mb.ItemByID("DM_TABLE").Bind;

		    // Задаем входной источник данных

		    Method.InputDataSource := TableDS;

		    // Создаем источник данных, являющийся регламентным отчётом

		    ReportDS := (New ReportDataSource.Create) As IDmReportDataSource;

		    // Задаем приёмник данных

		    Method.OutputDataSource := ReportDS;

		    // Настраиваем параметры метода расчёта

		    DM := Method.Details As IDmAssociationRules;

		    // Указываем транзакции

		    DM.Transactions := 1;

		    // Указываем объекты

		    DM.Objects := 2;

		    // Указываем значение минимальной поддержки (в процентах)

		    DM.UseSupportPercent := True;

		    DM.MinimumSupport := 20;

		    // Указываем минимальный уровень доверия

		    DM.MinimumConfidence := 0.45;

		    // Задаем минимальный размер набора

		    DM.MinimumFrequentItemsetSize := 2;

		    // Выполняем анализ и выгружаем результаты

		    Reports := Method.Execute;

		    DmReport := reports.FindByType(DmReportType.AssociationRules);

		    ReportDS := DmReport.Generate;

		    ReportDS.TabSheet.View.Selection.SelectAll;

		    ReportDS.TabSheet.View.Selection.Copy;

		    // Получаем регламентный отчет, в который будут выгружены результаты

		    Report := mb.ItemByID("DM_REPORT_RES").Edit As IPrxReport;

		    Shs := Report.Sheets;

		    Shs.Clear;

		    Sheet := (Shs.Add("", PrxSheetType.Table) As IPrxTable).TabSheet;

		    Sheet.Table.Paste;

		    Sheet.Columns(0, 1).AdjustWidth;

		    Sheet.Rows(0, 1).AdjustHeight;

		    Report.Sheets.Item(0).Name := ReportDS.Caption;

		    // Сохраняем выгруженные данные

		    (Report As IMetabaseObject).Save;

		End Sub UserARules;


В результате выполнения примера для данных из таблицы DM_TABLE будет
 выполнен интеллектуальный анализ данных типа «Анализ
 ассоциаций». Результаты анализа будут выгружены в отчёт DM_REPORT_RES.


См. также:


[IDmAssociationRules](IDmAssociationRules.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
