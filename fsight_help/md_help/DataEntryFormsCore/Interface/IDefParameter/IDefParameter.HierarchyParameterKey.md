# IDefParameter.HierarchyParameterKey

IDefParameter.HierarchyParameterKey
-


# IDefParameter.HierarchyParameterKey


## Синтаксис


HierarchyParameterKey: Integer;


## Описание


Свойство HierarchyParameterKey
 определяет ключ параметра, который будет использоваться для выбора альтернативной
 иерархии.


## Комментарии


Актуально, если свойству [HierarchyTypeSource](IDefParameter.HierarchyTypeSource.htm)
 установлено значение [AltHierarchySourceEnum.FromParam](../../Enums/AltHierarchySourceEnum.htm).
 В качестве значения укажите ключ параметра, созданного в форме ввода.
 Параметр должен быть построен на справочнике, в структуре которого имеется
 атрибут, возвращающий ключи справочников, являющихся альтернативными иерархиями
 для справочника [Dictionary](IDefParameter.Dictionary.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие формы ввода
 с идентификатором DEF_FORM и справочника с идентификатором DICT_FIRMS.
 Для справочника созданы альтернативные иерархии. Также в форме ввода должен
 быть создан параметр, основанный на каком-либо справочнике, имеющем в
 своей структуре атрибут ALT_KEY. В качестве значения этого атрибута должны
 хранится ключи справочников, являющихся альтернативными иерархиями для
 DICT_FIRMS.


Добавьте ссылки на системные сборки: Dimensions, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/DataEntryFormsCore_Intro.htm#link_assembly)
 для работы с формами ввода.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Dict: IMetabaseObjectDescriptor;

	    DEForm: IDataEntryForm;

	    Params: IDefParameters;

	    Param, AltParam: IDefParameter;

	    Result: IDefParametersApplyResult;

	Begin

	    Mb := MetabaseClass.Active;

	    // Экземпляр текущей формы ввода

	    DEForm := New DataEntryForm.CreateByDataEntryForm(Mb.ItemById("DEF_FORM"), True);

	    // Параметры

	    Params := DEForm.Parameters;

	    Params.BeginUpdate;

	    // Параметр, который будет использоваться для выбора альтернативной иерархии

	    AltParam := Params.Item(0);

	    // Создание нового параметра

	    Param := Params.Add;

	    Param.Name := "Фирма";

	    Dict := Mb.ItemById("DICT_FIRMS");

	    Param.Dictionary := New NamedEntity.CreateWithData(Dict.Key, Dict.Name, Dict.Id);

	    Param.SelectionType := SelectionTypeEnum.Single;

	    Param.UseDefaultValue := True;

	    Param.DefaultValueSelection.SelectElement(1, False);

	    Param.IncludeAllSheets;

	    // Настройка альтернативной иерархии для параметра

	    Param.HierarchyTypeSource := AltHierarchySourceEnum.FromParam;

	    Param.HierarchyParameterKey := AltParam.Key;

	    Param.HierarchyParameterAttributeKey := AltParam.DimensionInstance.Dimension.Attributes.FindById("ALT_KEY").Key;

	    // Применение изменений

	    Result := Params.ApplyChanges;

	    If Result.Success Then

	        Debug.WriteLine("Параметр создан без ошибок")

	    Else

	        Debug.WriteLine(Result.Title);

	        Debug.WriteLine(Result.Message);

	        Debug.WriteLine("Ключ параметра: " + Result.ParamKey.ToString);

	    End If;

	    DEForm._Dispose;

	End Sub UserProc;


При выполнении примера для формы ввода будет создан параметр на базе
 справочника DICT_FIRMS. Выбор альтернативной иерархии, которая будет отображаться
 в качестве значений нового параметра, будет осуществляться с помощью уже
 имеющегося в форме ввода параметра.


См. также:


[IDefParameter](IDefParameter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
