# IValidationFilter.UserComponents

IValidationFilter.UserComponents
-


# IValidationFilter.UserComponents


## Синтаксис


UserComponents: [IValidationUserComponents](../IValidationUserComponents/IValidationUserComponents.htm);


## Описание


Свойство UserComponents возвращает коллекцию пользовательских компонентов валидации.


## Комментарии


По умолчанию фильтр валидации не содержит пользовательских компонентов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных временных рядов с идентификатором «FC_COMM». База содержит фильтр валидации с идентификатором «VALIDATION_F». Также база должна содержать два обязательных атрибута, являющихся ссылками на справочник.


Для корректного выполнения примера необходимо добавить ссылки на системные сборки «Metabase», «Ms», «Cubes», «Dimensions».


			Sub UserProc;

Var

    mb: IMetabase;

    RubrDescr: IMetabaseObjectDescriptor;

    val: IValidationFilter;

    stub: IVariableStub;

    UserComponents: IValidationUserComponents;

    usComponent: IValidationUserComponent;

    selset: IDimSelectionSet;

    dimInstDescr: IMetabaseObjectDescriptor;

    dimInst: IDimInstance;

    sel: IDimSelection;

    selSetF: IDimSelectionSetFactory;

Begin

    mb := MetabaseClass.Active;

    RubrDescr := mb.ItemById("FC_COMM");

    val := mb.ItemByIdNamespace("VALIDATION_F", RubrDescr.Key).Edit As IValidationFilter;

    stub := RubrDescr.Bind As IVariableStub;

    UserComponents := val.UserComponents;

    If UserComponents.Count > 0 Then

        UserComponents.Clear;

    End If;

    usComponent := UserComponents.Add;

    Debug.WriteLine("Ключ пользовательского компонента валидации: " + usComponent.Key.ToString);

    usComponent.Tag := "Отметка всех элементов";

    usComponent.Kind := ValidationUserComponentKind.Selection;

    selSetF := New DimSelectionSetFactory.Create;

    selset := selSetF.CreateDimSelectionSet;

    usComponent.Selection := selset;

    selset := usComponent.Selection;

    dimInstDescr := stub.Dimension(0) As IMetabaseObjectDescriptor;

    dimInst := dimInstDescr.Open(Null) As IDimInstance;

    sel := selset.Add(dimInst);

    sel.SelectAll;

    dimInstDescr := stub.Dimension(0) As IMetabaseObjectDescriptor;

    dimInst := dimInstDescr.Open(Null) As IDimInstance;

    sel := selset.Add(dimInst);

    sel.SelectAll;

    (val As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будет очищена коллекция пользовательских компонентов для фильтра валидации. Затем в коллекцию будет добавлен компонент, настроенный по отметке базы данных временных рядов. В окно консоли будет выведен ключ добавленного компонента.


См. также:


[IValidationFilter](IValidationFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
