# ISolrSearchEngineSchema.Fields

ISolrSearchEngineSchema.Fields
-


# ISolrSearchEngineSchema.Fields


## Синтаксис


Fields(Type: [SearchEngineTargetType](../../Enums/SearchEngineTargetType.htm)):
 [ISolrFields](../ISolrFields/ISolrFields.htm);


## Параметры


Type. Назначение экземпляра
 Solr, для которого необходимо получить список полей.


## Описание


Свойство Fields возвращает коллекцию
 полей, по которым хранятся индексированные данные.


## Пример


Для выполнения примера предполагается наличие изменений в конфигурационном
 файле Solr: в файл добавлено пользовательское поле «COMMENTS», поле предназначено
 для поиска и допускает хранение множественных значений. Подключите системные
 сборки: BiSearch, Dal, Fore, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    SharedParams: ISharedParams;

    SearchEngine: ISolrSearchEngineService;

    Schema: ISolrSearchEngineSchema;

    Fields: ISolrFields;

    Field: ISolrField;

Begin

    MB := MetabaseClass.Active;

    SharedParams := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedParams;

    SearchEngine := SharedParams.SearchEngine As ISolrSearchEngineService;

    Schema := SearchEngine.SearchEngineSchema As ISolrSearchEngineSchema;

    //Синхронизация списков пользовательских полей

    Fields := Schema.Fields(SearchEngineTargetType.SourceData);

    Field := Fields.AddField("COMMENTS", SolrFieldType.Search);

    Field.DataType := DbDataType.String;

    Field.MultiValue := True;

    Field.IncludeInSearchResult := False;

    (Field As ISolrSearchField).BoostFactor := 9;

    //Сохранение

    SharedParams.SearchEngine := SearchEngine;

    (SharedParams As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера в настройках поиска и индексации репозитория
 будет изменен список пользовательских полей, по которым хранятся индексированные
 данные: в список будет добавлено то пользовательское поле, которое присутствует
 в конфигурационном файле Solr.


См. также:


[ISolrSearchEngineSchema](ISolrSearchEngineSchema.htm)
 | [Системные
 и пользовательские поля](Setup.chm::/BISearch/Desktop_application_setting.htm#fields)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
