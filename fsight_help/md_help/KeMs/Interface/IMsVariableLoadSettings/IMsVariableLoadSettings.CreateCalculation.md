# IMsVariableLoadSettings.CreateCalculation

IMsVariableLoadSettings.CreateCalculation
-


# IMsVariableLoadSettings.CreateCalculation


## Синтаксис


CreateCalculation: [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);


## Описание


Метод CreateCalculation создает
 объект, содержащий настройки, используемые при расчете значений переменной.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором KONT_MODEL. В контейнере содержится переменная
 моделирования с идентификатором VAR_1, настроенная на загрузку данных
 с помощью формулы.


Добавьте ссылки на системные сборки: Dimension, Matrix, Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Variable: IMsVariable;

    LoadSetting: IMsVariableLoadSetting;

    MethodCalculation: IMsMethodCalculation;

    Period: IMsModelPeriod;

    DimFix: IMsProblemDimensionFix;

    DimSS: IDimSelectionSet;

    DimS: IDimSelection;

    MethodCacl: IMsMethodCalculation;

    Matr: IMatrix;

    Mcoo: IMatrixCoord;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("VAR_1", MB.ItemById("KONT_MODEL").Key).Edit;

    Variable := MObj As IMsVariable;

    LoadSetting := Variable.CreateLoadSettings;

    Period := LoadSetting.Period;

    Period.IdentificationStartDate := DateTime.ComposeDay(2000, 1, 1);

    Period.IdentificationEndDate := DateTime.ComposeDay(2004, 1, 1);

    LoadSetting.ScenarioIncluded(-1) := True;

    DimFix := LoadSetting.DimensionFix;

    DimSS := DimFix.Selection;

    For Each DimS In DimSS Do

        DimS.SelectAll;

    End For;

    MethodCacl := LoadSetting.CreateCalculation;

    Matr := MethodCacl.Variable(Variable.Transform.Inputs.Item(0).VariableStub);

    Mcoo := Matr.CreateCoord;

    Mcoo.Item(1) := 0;

    //Данные первой переменной

    For i := Matr.LowerBound(0) To Matr.UpperBound(0) Do

        Mcoo.Item(0) := i;

        Debug.Write(Matr.Item(Mcoo) + " ");

    End For;

    Debug.WriteLine("");

    //Расчет и загрузка данных

    Variable.Execute(LoadSetting);

    Debug.WriteLine("Рассчитанные данные");

    Matr := MethodCacl.Variable(Variable.Transform.Outputs.Item(0).VariableStub);

    Mcoo := Matr.CreateCoord;

    Mcoo.Item(1) := 0;

    For i := Matr.LowerBound(0) To Matr.UpperBound(0) Do

        Mcoo.Item(0) := i;

        Debug.Write(Matr.Item(Mcoo) + " ");

    End For;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет осуществлена загрузка данных в переменную.
 В консоль среды разработки будут выведены данные первой переменной, используемой
 в формуле, и рассчитанные по формуле данные.


См. также:


[IMsVariableLoadSettings](IMsVariableLoadSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
