# IEaxAnalyzeCore.ParamProvider

IEaxAnalyzeCore.ParamProvider
-


# IEaxAnalyzeCore.ParamProvider


## Синтаксис


ParamProvider: Object;


## Описание


Свойство ParamProvider возвращает
 объект для работы с параметрами экспресс-отчета.


## Комментарии


После редактирования параметров источника данных необходимо обновить
 источник. Для обновления источника данных используйте [IEaxAnalyzeCore.UpdateParamProvider](IEaxAnalyzeCore.UpdateParamProvider.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS. Источником данных является куб.


Добавьте ссылки на системные сборки: Dal, Express, Metabase, Ms, Transform.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MetObj: IMetabaseObject;

	    Express: IEaxAnalyzer;

	    CreateParam: IMetabaseObjectParam;

	    CreateValues: IMetabaseObjectParamValues;

	    Provider: IMsParamProvider;

	    ModelParam: IMsModelParam;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    MetObj := MB.ItemById("EXPRESS").Edit;

	    Express := MetObj As IEaxAnalyzer;

	    // Создадим параметр

	    CreateParam := MetObj.Params.Add;

	    CreateParam.DataType := DbDataType.Integer;

	    CreateParam.Name := "Parameter";

	    CreateParam.DefaultValue := 100;

	    // Создадим значения для параметра

	    CreateValues := CreateParam.Params.CreateEmptyValues;

	    CreateValues.Item(0).Value := 150;

	    // Установим заданные значения для параметра

	    Express.OwnParamValues := CreateValues;

	    // Получим объект - источник данных

	    Provider := Express.ParamProvider As IMsParamProvider;

	    // Создадим параметр в источнике данных

	    ModelParam := Provider.Params.Add;

	    ModelParam.Name := "Data_Parameter";

	    ModelParam.DefaultValue := 1000;

	    ModelParam.ParamType := TsParamType.Simple;

	    // Обновим источник данных

	    Express.UpdateParamProvider;

	    // Сохраним изменения

	    MetObj.Save;

	End Sub UserProc;


После выполнения примера в экспресс-отчете будет создан параметр c наименованием
 «Parameter». В источнике данных будет создан параметр с наименованием
 «Data_Parameter».


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
