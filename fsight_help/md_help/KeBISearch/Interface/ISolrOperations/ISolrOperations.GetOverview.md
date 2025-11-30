# ISolrOperations.GetOverview

ISolrOperations.GetOverview
-


# ISolrOperations.GetOverview


## Синтаксис


GetOverview(Core: [ISolrSearchEngineCore](../ISolrSearchEngineCore/ISolrSearchEngineCore.htm)):
 [ISolrCoreInfo](../ISolrCoreInfo/ISolrCoreInfo.htm);


## Параметры


Core.
 Экземпляр Solr, о котором необходимо получить информацию.


## Описание


Метод GetOverview извлекает
 информацию об указанном экземпляре Solr.


## Комментарии


Список экземпляров Solr можно получить в свойстве [ISolrSearchEngineService.Cores](../ISolrSearchEngineService/ISolrSearchEngineService.Cores.htm).


## Пример


Предполагается, что репозиторий настроен на работу с поисковым сервисом
 на базе Apache Solr. Подключите системные сборки: BISearch, Fore, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    SharedParams: ISharedParams;

    SearchEngine: ISolrSearchEngineService;

    Core: ISolrSearchEngineCore;

    Operations: ISolrOperations;

    Info: ISolrCoreInfo;

Begin

    MB := MetabaseClass.Active;

    //Параметры поиска и индексации, заданные для репозитория

    SharedParams := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Bind As ISharedParams;

    SearchEngine := SharedParams.SearchEngine As ISolrSearchEngineService;

    Core := SearchEngine.Cores.Item(0);

    Operations := New SolrOperations.Create;

    //Получение информации об экземпляре Solr

    Info := Operations.GetOverview(Core);

    If Info.HasDeletions Then

        Debug.WriteLine("Количество удаленных документов: " + Info.DeletedDocs.ToString);

    End If;

    Debug.WriteLine("Дата/время последних изменений: " + Info.LastModified.ToString);

    Debug.WriteLine("Текущее/максимальное количество документов: " + Info.NumDocs.ToString + "/" + Info.MaxDoc.ToString);

End Sub UserProc;


При выполнении примера будет получена информация об указанном экземпляре
 Solr. Информация будет выведена в консоль среды разработки.


См. также:


[ISolrOperations](ISolrOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
