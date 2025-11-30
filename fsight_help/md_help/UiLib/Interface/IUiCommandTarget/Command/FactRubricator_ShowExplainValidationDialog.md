# ShowExplainValidationDialog

ShowExplainValidationDialog
-


# Команда ShowExplainValidationDialog


## Назначение


Вызов окна для [объяснения
 ошибок валидации](UiValidation.chm::/Calculation_result.htm) для заданной ячейки.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив, содержащий
 следующие значения:


		 Тип значения
		 Описание


		 [IDiagnosticReport](KeExpress.chm::/Interface/IDiagnosticReport/IDiagnosticReport.htm)
		 Диагностический отчет.


		 Integer
		 Индекс строки ячейки.


		 Integer
		 Индекс столбца ячейки.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1». «UiErAnalyzer1» настроен на экспресс-отчет, построенный
 на базе данных временных рядов. Добавьте ссылки на следующие системные
 сборки: Express, Metabase, Ui, Laner.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Mb: IMetabase;

    Analyzer: IEaxAnalyzer;

    CommandTarget: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

    DataVD: Array;

Begin

    Mb := MetabaseClass.Active;

    Analyzer := UiErAnalyzer1.ErAnalyzer;

    CommandTarget := WinApplication.Instance.GetPluginTarget("FactRubricator");

    Context := CommandTarget.CreateExecutionContext;

    DataVD := New Variant[3];

    DataVD[0] := Analyzer.DiagnosticReport;

    DataVD[1] := 0;

    DataVD[2] := 0;

    Context.Data := DataVD;

    CommandTarget.Execute("ShowExplainValidationDialog", Context);

End Sub Button1OnClick;


При нажатии кнопки будет открыто окно для [объяснения
 ошибок валидации](UiValidation.chm::/Calculation_result.htm) для ячейки с индексом 0, 0.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
