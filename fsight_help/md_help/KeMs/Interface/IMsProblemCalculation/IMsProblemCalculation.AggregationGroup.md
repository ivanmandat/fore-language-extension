# IMsProblemCalculation.AggregationGroup

IMsProblemCalculation.AggregationGroup
-


# IMsProblemCalculation.AggregationGroup


## Синтаксис


AggregationGroup: [IDimElementGroup](KeDims.chm::/interface/IDimElementGroup/IDimElementGroup.htm);


## Описание


Свойство AggregationGroup определяет
 группу элементов справочника, являющихся группой агрегации.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В контейнере моделирования
 данной базы данных временных рядов должна существовать задача с идентификатором
 OBJ_PROBLEM. COUNTRY - пользовательский атрибут показателей базы, ссылающийся
 на справочник. D_COUNTRY - группа элементов данного справочника.


			Sub UserProc;

Var

    MB: IMetabase;

    RKey, ContKey, DimKey: Integer;

    Obj: IMetabaseObject;

    Problem: IMsProblem;

    T: IMsTransformationProblem;

    CalcSettings: IMsProblemCalculationSettings;

    Calculation: IMsProblemCalculation;

    Rubricator: IRubricator;

    Atrs: IMetaAttributes;

    Atr: IMetaAttribute;

    AgrGroups: IMsAggregationGroups;

    Group: IDimElementGroup;

Begin

    MB := MetabaseClass.Active;

    RKey := MB.ItemById("OBJ_RUBRICATOR").Key;

    ContKey := MB.ItemByIdNamespace("MODELSPACE_TRANSFORMS", RKey).Key;

    Obj := MB.ItemByIdNamespace("OBJ_PROBLEM", ContKey).Edit;

    Problem := Obj As IMsProblem;

    T := New MsTransformationProblem.Create;

    Problem.Details := T;

    CalcSettings := Problem.CreateCalculationSettings;

    CalcSettings.FactIncluded := True;

    Obj.Save;

    Calculation := Problem.Calculate(CalcSettings);

    AgrGroups := Calculation.AggregationGroups;

    If AgrGroups.Count > 0 Then

        AgrGroups.Clear;

    End If;

    Rubricator := MB.ItemById("OBJ_RUBRICATOR").Edit As IRubricator;

    Atrs := Rubricator.Facts.Attributes;

    Atr := Atrs.FindById("COUNTRY");

    DimKey := Atr.ValuesObject.Key;

    Group := MB.ItemByIdNamespace("D_COUNTRY", DimKey).Edit As IDimElementGroup;

    Calculation.AggregationGroup := Group;

    Calculation.Run;

    Obj.Save;

End Sub UserProc;


После выполнения примера для задачи моделирования будет определена группа
 агрегации, затем задача будет рассчитана.


См. также:


[IMsProblemCalculation](IMsProblemCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
