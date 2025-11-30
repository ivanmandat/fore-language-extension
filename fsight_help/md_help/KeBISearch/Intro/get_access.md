# Доступ к поисковому сервису

Доступ к поисковому сервису
-


# Доступ к поисковому сервису


Для индексации и поиска в репозитории предварительно необходимо получить
 доступ к поисковому сервису. Получить доступ можно двумя способами:


	- с помощью свойства [ISharedParams.SearchEngine](KeFore.chm::/Interface/ISharedParams/ISharedParams.SearchEngine.htm)
	 получить параметры поискового сервиса, используемого в репозитории.


	- с помощью метода [ISearchEngineServiceFactory.CreateSearchEngine](KeSom.chm::/Interface/ISearchEngineServiceFactory/ISearchEngineServiceFactory.CreateSearchEngine.htm)
	 динамически создать экземпляр нового поискового сервиса.


Полученный поисковый сервис приведите к интерфейсу [ISolrSearchEngineService](../Interface/ISolrSearchEngineService/ISolrSearchEngineService.htm):


			Var

    //...

    MB: IMetabase;

    SharedParams: ISharedParams;

    SearchEngine: ISolrSearchEngineService;

    //...

Begin

    //...

    MB := MetabaseClass.Active;

    //Параметры поиска и индексации, заданные для репозитория

    SharedParams := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Bind As ISharedParams;

    SearchEngine := SharedParams.SearchEngine As ISolrSearchEngineService;

    //...


При необходимости заполните коллекцию [ISolrSearchEngineService.Cores](../Interface/ISolrSearchEngineService/ISolrSearchEngineService.Cores.htm),
 указав адреса и назначение для экземпляров Solr, которые будут использоваться
 в работе. Далее, используя свойство [ISearchEngineService.SearchEngineSchema](../Interface/ISearchEngineService/ISearchEngineService.SearchEngineSchema.htm),
 можно получить доступ к основной функциональности поискового сервиса.
 Свойство [ISearchEngineSchema.SearchExecutor](../Interface/ISearchEngineSchema/ISearchEngineSchema.SearchExecutor.htm)
 вернет объект, используемый для [поиска](BISearchData.htm) и получения результатов.


См. также:


[Введение](KeBISearch_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
