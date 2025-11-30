# ISolrSearchEngineSchema.FillSchemaOptions

ISolrSearchEngineSchema.FillSchemaOptions
-


# ISolrSearchEngineSchema.FillSchemaOptions


## Синтаксис


FillSchemaOptions(Type: [SearchEngineTargetType](../../Enums/SearchEngineTargetType.htm)):
 Boolean;


## Параметры


Type. Назначение экземпляра
 Solr, для которого необходимо заполнить список полей.


## Описание


Метод FillSchemaOptions осуществляет
 заполнение списка полей в соответствии с настройками, которые заданы в
 конфигурационном файле для текущего экземпляра Solr.


## Комментарии


В виду отсутствия прямого доступа к конфигурационным файлам Apache Solr
 из Fore для изменения списка полей
 необходимо отредактировать файлы конфигурации Apache Solr вручную. Более
 подробно об изменении списка читайте в подразделе «[Настройка настольного приложения > Поля](Setup.chm::/BISearch/Desktop_application_setting.htm#fields)».


Метод FillSchemaOptions позволяет
 произвести синхронизацию списка полей в настройках репозитория в соответствии
 со списком полей из конфигурационного файла. Также, если параметры необходимых
 пользовательских полей известны, то в [коллекцию](ISolrSearchEngineSchema.Fields.htm)
 их можно добавить с помощью метода [ISolrFields.AddField](../ISolrFields/ISolrFields.AddField.htm).


В качестве значения параметра Type
 допустимо использовать только [SearchEngineTargetType.SourceData](../../Enums/SearchEngineTargetType.htm)
 и [SearchEngineTargetType.MbObject](../../Enums/SearchEngineTargetType.htm).


## Пример


Предполагается, что репозиторий настроен на работу с поисковым сервисом
 на базе Apache Solr. Подключите системные сборки: BiSearch, Fore, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    SharedParams: ISharedParams;

    SearchEngine: ISolrSearchEngineService;

    Schema: ISolrSearchEngineSchema;

Begin

    MB := MetabaseClass.Active;

    SharedParams := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedParams;

    SearchEngine := SharedParams.SearchEngine As ISolrSearchEngineService;

    Schema := SearchEngine.SearchEngineSchema As ISolrSearchEngineSchema;

    //Синхронизация списков пользовательских полей

    Schema.FillSchemaOptions(SearchEngineTargetType.SourceData);

    Schema.FillSchemaOptions(SearchEngineTargetType.MbObject);

    //Сохранение

    SharedParams.SearchEngine := SearchEngine;

    (SharedParams As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера в настройках поиска и индексации репозитория
 будет осуществлена синхронизация списка пользовательских полей в соответствии
 с конфигурационным файлом Solr.


См. также:


[ISolrSearchEngineSchema](ISolrSearchEngineSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
