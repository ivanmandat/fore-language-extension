# IMsProblem.CreateVariablesReport

IMsProblem.CreateVariablesReport
-


# IMsProblem.CreateVariablesReport


## Синтаксис


CreateVariablesReport: [IMsProblemVariablesReport](../IMsProblemVariablesReport/IMsProblemVariablesReport.htm);


## Описание


Метод CreateVariablesReport создает отчет по переменным для задачи моделирования.


## Комментарии


Данный метод создает отчет, не содержащий переменных. Чтобы добавить переменные используйте методы [IMsProblemVariablesReport.AddVariable](../IMsProblemVariablesReport/IMsProblemVariablesReport.AddVariable.htm) и [IMsProblemVariablesReport.AddVariableKind](../IMsProblemVariablesReport/IMsProblemVariablesReport.AddVariableKind.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера моделирования с идентификатором «OBJ_MS». Данный контейнер содержит задачу моделирования с идентификатором «PROBLEM». Также необходимо добавить ссылки на системные сборки «Metabase», «Ms», «Cubes», «Matrix», «Express», «Pivot».


			    Sub UserProc;

    Var

        Mb: IMetabase;

        MsKey: Integer;

        Problem: IMsProblem;

        VarReport: IMsProblemVariablesReport;

        DataSource: IMatrixDataSource;

        Ci: IMetabaseObjectCreateInfo;

        Eax: IEaxAnalyzer;

        VarList: IVariableStubList;

        Varable: IVariableStub;

        s: String;

        i: Integer;

    Begin

        Mb := MetabaseClass.Active;

        MsKey := Mb.ItemById("OBJ_MS").Key;

        Problem := Mb.ItemByIdNamespace("PROBLEM", MsKey).Bind As IMsProblem;

        VarReport := Problem.CreateVariablesReport;

        VarReport.AddVariableKind(MsVariableKind.Output);

        VarList := Problem.VariableStubs(MsVariableKind.Input);

        Varable := VarList.Item(0);

        VarReport.AddVariable(Varable);

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

        Debug.WriteLine("Отчет по переменным для задачи '" + s + "'");

        Debug.WriteLine("Переменные, входящие в отчет:");

        VarList := VarReport.Variables;

        For i := 0 To VarList.Count - 1 Do

            Varable := VarList.Item(i);

            Debug.WriteLine("    " + Varable.Name);

        End For;

    End Sub UserProc;


После выполнения примера в контейнере моделирования «OBJ_MS» будет создан отчет по переменным для задачи «PROBLEM». Отчет будет содержать данные первой входной и всех выходных переменных. В окно консоли будут выведены наименования переменных, входящих в отчет.


См. также:


[IMsProblem](IMsProblem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
