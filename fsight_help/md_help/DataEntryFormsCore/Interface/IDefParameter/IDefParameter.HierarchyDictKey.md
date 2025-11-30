# IDefParameter.HierarchyDictKey

IDefParameter.HierarchyDictKey
-


# IDefParameter.HierarchyDictKey


## Синтаксис


HierarchyDictKey: Integer;


## Описание


Свойство HierarchyDictKey определяет
 ключ справочника, который будет использоваться в качестве альтернативной
 иерархии.


## Комментарии


Актуально, если свойству [HierarchyTypeSource](IDefParameter.HierarchyTypeSource.htm)
 установлено значение [AltHierarchySourceEnum.FromDictionary](../../Enums/AltHierarchySourceEnum.htm).
 В качестве значения свойства укажите ключ справочника, на базе которого
 создана альтернативная иерархия у справочника, указанного в свойстве [Dictionary](IDefParameter.Dictionary.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие формы ввода
 с идентификатором DEF_FORM и двух справочников с идентификаторами DICT_FIRMS
 и ALT_DICT_FIRMS. На базе справочника ALT_DICT_FIRMS создана альтернативная
 иерархия для справочника DICT_FIRMS.


Добавьте ссылки на системные сборки: Dimensions, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/DataEntryFormsCore_Intro.htm#link_assembly)
 для работы с формами ввода.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Dict: IMetabaseObjectDescriptor;

	    DEForm: IDataEntryForm;

	    Params: IDefParameters;

	    Param: IDefParameter;

	    Result: IDefParametersApplyResult;

	Begin

	    Mb := MetabaseClass.Active;

	    // Экземпляр текущей формы ввода

	    DEForm := New DataEntryForm.CreateByDataEntryForm(Mb.ItemById("DEF_FORM"), True);

	    // Параметры

	    Params := DEForm.Parameters;

	    Params.BeginUpdate;

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

	    Param.HierarchyTypeSource := AltHierarchySourceEnum.FromDictionary;

	    Param.HierarchyDictKey := Mb.GetObjectKeyById("ALT_DICT_FIRMS");

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
 справочника DICT_FIRMS. В качестве значений для параметра будут отображаться
 элементы альтернативной иерархии ALT_DICT_FIRMS.


См. также:


[IDefParameter](IDefParameter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
