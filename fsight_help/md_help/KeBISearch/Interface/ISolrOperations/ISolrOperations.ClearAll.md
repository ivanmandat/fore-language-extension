# ISolrOperations.ClearAll

ISolrOperations.ClearAll
-


# ISolrOperations.ClearAll


## Синтаксис


ClearAll(Core: [ISolrSearchEngineCore](../ISolrSearchEngineCore/ISolrSearchEngineCore.htm)):
 Boolean;


## Параметры


Core. Экземпляр Solr, для которого
 необходимо произвести очистку индексированных документов.


## Описание


Метод ClearAll удаляет все документы
 с индексированными данными для указанного экземпляра Solr.


## Комментарии


Список экземпляров Solr можно получить в свойстве [ISolrSearchEngineService.Cores](../ISolrSearchEngineService/ISolrSearchEngineService.Cores.htm).


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    SharedParams: ISharedParams;

    SearchEngine: ISolrSearchEngineService;

    Core: ISolrSearchEngineCore;

    Operations: ISolrOperations;

Begin

    MB := MetabaseClass.Active;

    //Получение параметров поиска и индексации

    SharedParams := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Bind As ISharedParams;

    SearchEngine := SharedParams.SearchEngine As ISolrSearchEngineService;

    Core := SearchEngine.Cores.Item(0);

    Operations := New SolrOperations.Create;

    Operations.ClearAll(Core);

End Sub UserProc;


При выполнении примера будет произведена очистка поискового индекса
 для указанного экземпляра Solr.


См. также:


[ISolrOperations](ISolrOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
