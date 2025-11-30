# ISolrSearchEngineSchema.SearchOptions

ISolrSearchEngineSchema.SearchOptions
-


# ISolrSearchEngineSchema.SearchOptions


## Синтаксис


SearchOptions: [ISolrSearchOptions](../ISolrSearchOptions/ISolrSearchOptions.htm);


## Описание


Свойство SearchOptions возвращает
 параметры, используемые при поиске данных.


## Пример


Предполагается, что репозиторий настроен на работу с поисковым сервисом
 на базе Apache Solr. Подключите системные сборки: BISearch, Fore, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    SharedParams: ISharedParams;

    SearchEngine: ISolrSearchEngineService;

    Schema: ISolrSearchEngineSchema;

    Options: ISolrSearchOptions;

Begin

    MB := MetabaseClass.Active;

    SharedParams := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedParams;

    SearchEngine := SharedParams.SearchEngine As ISolrSearchEngineService;

    Schema := SearchEngine.SearchEngineSchema As ISolrSearchEngineSchema;

    //Изменение настроек

    Options := Schema.SearchOptions;

    Options.Operator_ := LogicalOperator.Or_;

    Options.RelevanceImpactFormula := "sum(userDataDynamic, userWeight)";

    Options.UseSmartSearch := True;

    SearchEngine.Cores.Add("http://localhost:8080/solr-4.4.0/FreeDimensions_ru", SearchEngineTargetType.FreeDimensions, LocaleCodeID.Russian);

    //Сохранение

    SharedParams.SearchEngine := SearchEngine;

    (SharedParams As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера будут определены настройки поиска в репозитории:
 будет задан оператор, используемый для объединения слов при поиске, формула
 влияния на релевантность и включена возможность поиска по свободным измерениям.
 Для индексации свободных измерений будет указан экземпляр Solr.


См. также:


[ISolrSearchEngineSchema](ISolrSearchEngineSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
