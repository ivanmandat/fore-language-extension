# IMsProblemDimensionFix.Selection

IMsProblemDimensionFix.Selection
-


# IMsProblemDimensionFix.Selection


## Синтаксис


Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство Selection возвращает
 объект, содержащий отметку по всем фиксированным измерениям.


## Пример


Для выполнения примера предполагается наличие в контейнере моделирования
 переменной, настроенной на загрузку данных с помощью формулы.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Variable: IMsVariable;

    LoadSetting: IMsVariableLoadSettings;

    Period: IMsModelPeriod;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("Var_1", MB.ItemById("KONT_MODEL").Key).Edit;

    Variable := MObj As IMsVariable;

    LoadSetting := Variable.CreateLoadSettings;

    Period := LoadSetting.Period;

    Period.IdentificationStartDate := DateTime.ComposeDay(2000, 1, 1);

    Period.IdentificationEndDate := DateTime.ComposeDay(2004, 1, 1);

    LoadSetting.ScenarioIncluded(-1) := True;

    For i := 0 To LoadSetting.DimensionFix.Count - 1 Do

        LoadSetting.DimensionFix.Selection.Item(i).SelectAll;

    End For;

    Variable.Execute(LoadSetting);

    MObj.Save;

End Sub UserProc;


После выполнения примера будут определены параметры, необходимые для
 загрузки данных в переменную. Если в структуре переменной присутствуют
 дополнительные измерения, то загрузка будет осуществляться по всем элементам
 этих измерений. Затем осуществляется сама загрузка данных.


См. также:


[IMsProblemDimensionFix](IMsProblemDimensionFix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
