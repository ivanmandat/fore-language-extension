# IDmMethod.Execute

IDmMethod.Execute
-


# IDmMethod.Execute


## Синтаксис


Execute: [IDmReports](../IDmReports/IDmReports.htm);


## Описание


Метод Execute выполняет
 расчёт метода интеллектуального анализа данных.


## Комментарии


Для получения параметров рассчитываемого метода используйте свойство
 [IDmMethod.Details](IDmMethod.Details.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие:


	- таблицы с идентификатором DM_TABLE, содержащей данные для анализа;


	- регламентного отчёта с идентификатором DM_REPORT_RES, в который
	 будут выгружены результаты анализа.


Добавьте ссылки на системные сборки: Metabase, Ms, Report, Stat, Tab,
 Ui.


			Sub UserKeyInf;

Var

    mb: IMetabase;

    TableDS: IDmTableDataSource;

    ReportDS: IDmReportDataSource;

    Method: IDmMethod;

    Report: IPrxReport;

    Shs: IPrxSheets;

    Sheet: ITabSheet;

    KeyInf: IDmKeyInfluences;

    Binning: IDmField;

    i: Integer;

    Attrs: Array Of Integer;

    Target: IUiCommandTarget;

    Reports: IDmReports;

    DmReport: IDmReport;

Begin

    mb := MetabaseClass.Active;

    // Создаем табличный источник данных

    TableDS := (New TableDataSource.Create) As IDmTableDataSource;

    // Указываем таблицу-источник

    TableDS.Table := mb.ItemByID("DM_TABLE").Bind;

    // Указываем, что данные расположены в столбцах таблицы

    TableDS.DataInColumns := True;

    // Создаем источник данных, являющийся регламентным отчётом

    ReportDS := (New ReportDataSource.Create) As IDmReportDataSource;

    // Получаем регламентный отчёт

    Report := mb.ItemByID("DM_REPORT_RES").Edit As IPrxReport;

    Shs := Report.Sheets;

    Shs.Clear;

    // Создаем страницу для выгрузки результатов

    Sheet := (Shs.Add("", PrxSheetType.Table) As IPrxTable).TabSheet;

    // Указываем страницу, на которую будут выгружены данные

    ReportDS.TabSheet := Sheet;

    // Указываем диапазон данных

    ReportDS.Range := Sheet.Cell(0, 0);

    ReportDS.AddResultColumn("Категория");

    // Создаем метод расчёта

    Method := (New DataMiningMethod.Create) As IDmMethod;

    // Указываем тип метода

    Method.Kind := DmMethodKind.KeyInfluences;

    // Задаем входной источник данных

    Method.InputDataSource := TableDS;

    // Задаем приёмник данных

    Method.OutputDataSource := ReportDS;

    // Настраиваем параметры метода расчёта

    KeyInf := Method.Details As IDmKeyInfluences;

    // Указываем столбец для анализа

    KeyInf.Target := TableDS.FieldCount - 1;

    Debug.WriteLine("Столбец для анализа ключевых факторов влияния:");

    Debug.WriteLine(" - " + TableDS.Field(KeyInf.Target).Name);

    // Задаем факторы, влияющие на анализ

    Attrs := New Integer[TableDS.FieldCount - 2];

    Debug.WriteLine("Факторы, влияющие на анализ:");

    For i := 0 To Attrs.Length - 1 Do

        Attrs[i] := i + 1;

        Binning := TableDS.Field(i + 1);

        Debug.WriteLine(Binning.Index.ToString + ". " + Binning.Name);

        Debug.Indent;

        // Задаем параметры процедуры Binning

        If Binning.IsNumerical Then

            Binning.BinningType := BinningMethod.EqualDepth;

            Binning.CategoriesCount := 4;

            Binning.TreatNanAsCategory := False;

            Debug.WriteLine("количество непустых значений: " + Binning.NonEmptyCount.ToString);

        End If;

        Select Case Binning.FieldType

            Case DmFieldType.Date: Debug.WriteLine("тип данных: дата");

            Case DmFieldType.Integer: Debug.WriteLine("тип данных: целочисленные");

            Case DmFieldType.Numeric: Debug.WriteLine("тип данных: числовые");

            Case DmFieldType.String: Debug.WriteLine("тип данных: строковые");

        End Select;

        Debug.WriteLine("источник данных: " + Binning.DataSource.Caption);

        Debug.Unindent;

    End For;

    KeyInf.Attributes := Attrs;

    // Выполняем анализ и выгружаем результаты

    Reports := Method.Execute;

    DmReport := reports.FindByType(DmReportType.KeyInfluences);

    ReportDS := DmReport.Generate;

    Debug.WriteLine("Заголовок отчета: " + DmReport.Caption);

    Debug.WriteLine("Вид анализа: " + KeyInf.DisplayName);

    Debug.WriteLine("Метод анализа: " + KeyInf.StatMethod.DisplayName);

    ReportDS.TabSheet.View.Selection.SelectAll;

    ReportDS.TabSheet.View.Selection.Copy;

    Sheet.Table.Paste;

    Sheet.Columns(0, 1).AdjustWidth;

    Sheet.Rows(0, 1).AdjustHeight;

    Report.Sheets.Item(0).Name := ReportDS.Caption;

    (Report As IMetabaseObject).Save;

    // Открываем регламентный отчёт, содержащий результаты анализа

    Target := WinApplication.Instance.GetObjectTarget(Report As IMetabaseObject);

    Target.Execute("Object.Open", Null);

End Sub UserKeyInf;


В результате выполнения примера для данных из таблицы DM_TABLE будет
 выполнен интеллектуальный анализа данных «Ключевые
 факторы» с применением процедуры Binning для числовых данных. Параметры
 анализа будут выведены в окно консоли. Результаты анализа будут выгружены
 в отчёт DM_REPORT_RES.


См. также:


[IDmMethod](IDmMethod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
