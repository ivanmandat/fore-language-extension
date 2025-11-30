# IValidationUserComponent.Transform

IValidationUserComponent.Transform
-


# IValidationUserComponent.Transform


## Синтаксис


Transform: [IMsFormulaTransform](../IMsFormulaTransform/IMsFormulaTransform.htm);


## Описание


Свойство Transform определяет формулу, по которой настроен компонент.


## Комментарии


Свойство учитывается, если [IValidationUserComponent.Kind](IValidationUserComponent.Kind.htm) = ValidationUserComponentKind.Transform.


Формулу можно задавать только для валидации, реализуемой интерфейсом [IValidationRatio](../IValidationRatio/IValidationRatio.htm) или [IValidationCustom](../IValidationCustom/IValidationCustom.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных временных рядов с идентификатором «FC_COMM». База содержит фильтр валидации типа «Отношение значений точек рядов» с идентификатором «VALIDATION_F». Также база должна содержать два обязательных атрибута, являющихся ссылками на справочник.


Для корректного выполнения примера необходимо добавить ссылки на системные сборки «Metabase», «Ms», «Cubes», «Dimensions».


			Sub UserProc;

Var

    mb: IMetabase;

    RubrDescr: IMetabaseObjectDescriptor;

    val: IValidationFilter;

    UserComponents: IValidationUserComponents;

    usComponent: IValidationUserComponent;

    selset: IDimSelectionSet;

    stub: IVariableStub;

    ftransform: IMsFormulaTransform;

    selector: IMsFormulaTransformSelector;

    slice: IMsFormulaTransformSlice;

    formula: IMsFormula;

    determ: IMsDeterministicTransform;

    dimInstDescr: IMetabaseObjectDescriptor;

    dimInst: IDimInstance;

    sel: IDimSelection;

    selSetF: IDimSelectionSetFactory;

Begin

    mb := MetabaseClass.Active;

    RubrDescr := mb.ItemById("FC_COMM");

    stub := RubrDescr.Bind As IVariableStub;

    val := mb.ItemByIdNamespace("VALIDATION_F", RubrDescr.Key).Edit As IValidationFilter;

    UserComponents := val.UserComponents;

    If UserComponents.Count > 0 Then

        usComponent := UserComponents.Item(0);

    Else

        usComponent := UserComponents.Add;

    End If;

    usComponent.Kind := ValidationUserComponentKind.Transform;

    usComponent.Transform := New MsFormulaTransform.Create(MetabaseClass.Active);

    ftransform := usComponent.Transform;

    selector := ftransform.CreateSelector;

    selSetF := New DimSelectionSetFactory.Create;

    selset := selSetF.CreateDimSelectionSet;

    dimInstDescr := stub.Dimension(0) As IMetabaseObjectDescriptor;

    dimInst := dimInstDescr.Open(Null) As IDimInstance;

    sel := selset.Add(dimInst);

    sel.SelectAll;

    dimInstDescr := stub.Dimension(1) As IMetabaseObjectDescriptor;

    dimInst := dimInstDescr.Open(Null) As IDimInstance;

    sel := selset.Add(dimInst);

    sel.SelectAll;

    slice := ftransform.Outputs.Add(stub).Slices.Add(selset);

    selector.Slice := slice;

    formula := ftransform.Transform(selector);

    formula.Kind := MsFormulaKind.Deterministic;

    determ := formula.Method As IMsDeterministicTransform;

    determ.Expression.AsString := "10";

    (val As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будет изменен первый пользовательский компонент валидации. Если компонент отсутствовал, то он будет добавлен. Компонент будет настроен по формуле. Все изменения в фильтре валидации будут сохранены.


См. также:


[IValidationUserComponent](IValidationUserComponent.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
