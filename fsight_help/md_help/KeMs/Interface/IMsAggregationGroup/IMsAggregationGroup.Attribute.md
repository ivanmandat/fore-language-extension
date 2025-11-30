# IMsAggregationGroup.Attribute

IMsAggregationGroup.Attribute
-


# IMsAggregationGroup.Attribute


## Синтаксис


Attribute: [IMetaAttribute](KeRds.chm::/Interface/IMetaAttribute/IMetaAttribute.htm);


## Описание


Свойство Attribute определяет
 атрибут группы агрегации.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В контейнере моделирования
 данной базы данных временных рядов должна существовать задача с идентификатором
 OBJ_PROBLEM. COUNTRY - пользовательский атрибут показателей базы, ссылающийся
 на справочник. D_COUNTRY - группа элементов данного справочника.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds.


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

	    AgrGroup: IMsAggregationGroup;

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

	    AgrGroup := AgrGroups.Add;

	    Rubricator := MB.ItemById("OBJ_RUBRICATOR").Edit As IRubricator;

	    Atrs := Rubricator.Facts.Attributes;

	    Atr := Atrs.FindById("COUNTRY");

	    AgrGroup.Attribute := Atr;

	    DimKey := Atr.ValuesObject.Key;

	    Group := MB.ItemByIdNamespace("D_COUNTRY", DimKey).Edit As IDimElementGroup;

	    AgrGroup.ElementGroup := Group;

	    AgrGroup.AttributeValue := 1;

	    Calculation.Run;

	End Sub UserProc;


В результате выполнения примера для задачи моделирования будет добавлена
 группа агрегации, затем задача будет рассчитана.


См. также:


[IMsAggregationGroup](IMsAggregationGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
