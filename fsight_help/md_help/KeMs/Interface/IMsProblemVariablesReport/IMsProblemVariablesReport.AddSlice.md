# IMsProblemVariablesReport.AddSlice

IMsProblemVariablesReport.AddSlice
-


# IMsProblemVariablesReport.AddSlice


## Синтаксис


AddSlice(Value: [IMsFormulaTransformSlice](../IMsFormulaTransformSlice/IMsFormulaTransformSlice.htm)):
 Integer;


## Параметры


Value. Срез переменной.


## Описание


Метод AddSlice добавляет
 указанный срез переменной в отчет.


## Комментарии


В результате выполнения метод AddSlice
 возвращает индекс добавленного среза в отчете.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего целевую задачу с идентификатором
 «TARGET_PROBLEM». Также в репозитории предполагается наличие экспресс-отчета
 с идентификатором «MODELLING_REPORT».


Добавьте ссылки на системную сборку: Express, Matrix, Metabase, Ms,
 Pivot.


			Sub UserProc;

Var

    Mb: IMetabase;

    MsObj: IMetabaseObject;

    Ms: IMsModelSpace;

    Problem: IMsProblem;

    TargetProblem: IMsTargetProblem;

    Transform: IMsFormulaTransform;

    Sleces: IMsFormulaTransformSlices;

    VarReport: IMsProblemVariablesReport;

    DataSource: IMatrixDataSource;

    Eax: IEaxAnalyzer;

Begin

    // Получаем текущий репозиторий

    Mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    MsObj := Mb.ItemById("MS").Bind;

    Ms := MsObj As IMsModelSpace;

    // Получаем целевую задачу

    Problem := Mb.ItemByIdNamespace("TARGET_PROBLEM", MsObj.Key).Bind As IMsProblem;

    // Получаем моделируемую переменную в целевой задаче

    TargetProblem := Problem.AdditionalDetails.Item(0) As IMsTargetProblem;

    Transform := TargetProblem.Model.Transform;

    Sleces := Transform.Outputs.Item(0).Slices;

    VarReport := Problem.CreateVariablesReport;

    // Указываем, что включаем моделируемую переменную в отчет

    VarReport.AddSlice(Sleces.Item(0));

    // Указываем используемый контейнер моделирования

    VarReport.SetModelSpace(Ms);

    // Создаем отчет по переменным

    DataSource := VarReport.CreateDataSource;

    Eax := Mb.ItemById("MODELLING_REPORT").Edit As IEaxAnalyzer;

    Eax.OpenMatrixDataSource(DataSource);

    VarReport.SetupSelection(Eax.Pivot.Selection);

    // Сохраняем отчет

    (Eax As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в экспресс-отчет будет сохранен отчет
 по переменным, содержащий данные моделируемой переменной целевой задачи.


См. также:


[IMsProblemVariablesReport](IMsProblemVariablesReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
