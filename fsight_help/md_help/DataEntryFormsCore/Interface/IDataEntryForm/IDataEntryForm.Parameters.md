# IDataEntryForm.Parameters

IDataEntryForm.Parameters
-


# IDataEntryForm.Parameters


## Синтаксис


		Parameters: [IDefParameters](../IDefParameters/IDefParameters.htm);


## Описание


Свойство Parameters возвращает
 коллекцию параметров формы ввода.


## Пример


Для выполнения примера предполагается наличие в репозитории справочников
 с идентификаторами «DICT_FIRMS» и «DICT_INDICATORS». Также предполагается
 наличие формы ввода, для которой указанный макрос назначен в качестве
 исполняемого метода для пользовательской кнопки.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Report. Также
 добавьте ссылки на сборки, которые [необходимы](../../Intro/DataEntryFormsCore_Intro.htm#link_assembly)
 для работы с формами ввода.


					Public Sub AddParameters(Report: IPrxReport);

		Var

		    Mb: IMetabase;

		    Dict: IMetabaseObjectDescriptor;

		    DEForm: IDataEntryForm;

		    Params: IDefParameters;

		    Param1, Param2: IDefParameter;

		    Sheets: NamedEntitiesCollection;

		    Sheet: IPrxSheet;

		    Result: IDefParametersApplyResult;

		Begin

		    Mb := MetabaseClass.Active;

		    // Экземпляр текущей формы ввода

		    DEForm := New DataEntryForm.CreateByReport(report);

		    //Параметры

		    Params := DEForm.Parameters;

		    Params.BeginUpdate;

		    //Создание новых параметров

		    Param1 := Params.Add;

		    Param1.Name := "Параметр 1";

		    Dict := Mb.ItemById("DICT_FIRMS");

		    Param1.Dictionary := New NamedEntity.CreateWithData(Dict.Key, Dict.Name, Dict.Id);

		    Param1.SelectionType := SelectionTypeEnum.Single;

		    Param1.UseDefaultValue := True;

		    Param1.DefaultValueSelection.SelectElement(1, False);

		    Param1.IncludeAllSheets;

		    Param2 := Params.Add;

		    Param2.Name := "Параметр 2";

		    Dict := Mb.ItemById("DICT_INDICATORS");

		    Param2.Dictionary := New NamedEntity.CreateWithData(Dict.Key, Dict.Name, Dict.Id);

		    Param2.SelectionType := SelectionTypeEnum.Multi;

		    Param2.UseDefaultValue := True;

		    Param2.DefaultValueSelection.SelectElement(1, False);

		    //Страница формы ввода, на которой будет доступен параметр

		    Sheet := DEForm.Sheets.Item(0);

		    Sheets := New NamedEntitiesCollection.Create;

		    Sheets.Add(New NamedEntity.CreateWithData(Sheet.Key, Sheet.Name, Sheet.Name));

		    Param2.Sheets := Sheets;

		    //Применение изменений

		    Result := Params.ApplyChanges;

		    If Result.Success Then

		        Debug.WriteLine("Параметры созданы без ошибок")

		    Else

		        Debug.WriteLine(Result.Title);

		        Debug.WriteLine(Result.Message);

		        Debug.WriteLine("Ключ параметра: " + Result.ParamKey.ToString);

		    End If;

		    DEForm._Dispose;

		End Sub AddParameters;


При выполнении макроса в форме ввода будут созданы и настроены два параметра.
 Параметры будут работать с указанными справочниками репозитория.


См. также:


[IDataEntryForm](IDataEntryForm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
