# IMsProblemCalculation.CreateVariablesReport

IMsProblemCalculation.CreateVariablesReport
-


# IMsProblemCalculation.CreateVariablesReport


## Синтаксис


CreateVariablesReport: [IMsProblemVariablesReport](../IMsProblemVariablesReport/IMsProblemVariablesReport.htm);


## Описание


Метод CreateVariablesReport
 создает отчёт по переменным для расчёта [задачи
 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


## Комментарии


Данный метод создает отчёт, не содержащий переменных. Чтобы добавить
 переменные, используйте методы [IMsProblemVariablesReport.AddVariable](../IMsProblemVariablesReport/IMsProblemVariablesReport.AddVariable.htm)
 и [IMsProblemVariablesReport.AddVariableKind](../IMsProblemVariablesReport/IMsProblemVariablesReport.AddVariableKind.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором OBJ_MS. Данный контейнер содержит задачу
 моделирования с идентификатором PROBLEM.


Добавьте ссылки на системные сборки: Metabase, Ms, Cubes, Matrix, Express,
 Pivot.


			    Sub UserProc;

    Var

        Mb: IMetabase;

        MsKey: Integer;

        Problem: IMsProblem;

        CalcSett: IMsProblemCalculationSettings;

        ProblCalc: IMsProblemCalculation;

        VarReport: IMsProblemVariablesReport;

        DataSource: IMatrixDataSource;

        Ci: IMetabaseObjectCreateInfo;

        Eax: IEaxAnalyzer;

        VarList: IVariableStubList;

        Varable: IVariableStub;

        s: String;

        i: Integer;

        b: Boolean;

    Begin

        Mb := MetabaseClass.Active;

        MsKey := Mb.ItemById("OBJ_MS").Key;

        Problem := Mb.ItemByIdNamespace("PROBLEM", MsKey).Bind As IMsProblem;

        CalcSett := Problem.CreateCalculationSettings;

        ProblCalc := Problem.Calculate(CalcSett);

        VarReport := ProblCalc.CreateVariablesReport;

        VarReport.AddVariableKind(MsVariableKind.Output);

        DataSource := VarReport.CreateDataSource;

        Ci := Mb.CreateCreateInfo;

        Ci.ClassId := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

        Ci.Parent := VarReport.ModelSpace As IMetabaseObjectDescriptor;

        Ci.Name := "Отчет по выходным переменным";

        Eax := Mb.CreateObject(Ci).Edit As IEaxAnalyzer;

        Eax.CreateMultiOlap(DataSource);

        VarReport.SetupSelection(Eax.Pivot.Selection);

        (Eax As IMetabaseObject).Save;

        s := (VarReport.Problem As IMetabaseObject).Name;

        Debug.WriteLine("Отчет по выходным переменным для задачи '" + s + "'");

        i := VarReport.ParamValues.Count;

        Debug.WriteLine("Количество параметров в задаче: " + i.ToString);

        Debug.WriteLine("Переменные, входящие в отчет:");

        VarList := VarReport.Variables;

        For i := 0 To VarList.Count - 1 Do

            Varable := VarList.Item(i);

            Debug.WriteLine("    " + Varable.Name);

        End For;

        b := VarReport.Parent <> Null;

        Debug.WriteLine("Присутствует родительский объект для виртуального куба: " + b.ToString);

        b := VarReport.Cube <> Null;

        Debug.WriteLine("Был создан виртуальный куб: " + b.ToString);

    End Sub UserProc;


После выполнения примера в контейнере моделирования OBJ_MS будет создан
 отчёт по переменным для задачи PROBLEM. Отчёт будет содержать данные всех
 выходных переменных. В окно консоли будут выведены наименования переменных,
 входящих в отчёт, и данные о параметрах задачи.


См. также:


[IMsProblemCalculation](IMsProblemCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
