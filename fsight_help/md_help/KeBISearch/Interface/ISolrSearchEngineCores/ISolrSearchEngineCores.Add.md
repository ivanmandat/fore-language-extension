# ISolrSearchEngineCores.Add

ISolrSearchEngineCores.Add
-


# ISolrSearchEngineCores.Add


## Синтаксис


		Add(Address: String; Type: [SearchEngineTargetType](../../Enums/SearchEngineTargetType.htm);
		 Locale: [LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm)):
		 [ISolrSearchEngineCore](../ISolrSearchEngineCore/ISolrSearchEngineCore.htm);


## Параметры


Address. URL-адрес экземпляра
 Solr.


Type. Назначение экземпляра
 Solr.


Locale. Идентификатор языка,
 для работы с которым предназначен экземпляр Solr.


## Описание


Метод Add добавляет экземпляр
 Solr в соответствии с указанными параметрами.


## Комментарии


URL-адрес, указываемый в параметре Address,
 является регистрозависимым.


## Пример


					Sub UserProc;

		Var

		    MB: IMetabase;

		    SharedParams: ISharedParams;

		    SearchEngine: ISolrSearchEngineService;

		    Cores: ISolrSearchEngineCores;

		Begin

		    MB := MetabaseClass.Active;

		    //Параметры поиска и индексации, заданные для репозитория

		    SharedParams := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedParams;

		    SearchEngine := SharedParams.SearchEngine As ISolrSearchEngineService;

		    Cores := SearchEngine.Cores;

		    //Добавление экземпляра Solr

		    Cores.Add("http://localhost:8080/solr-4.4.0/SourceData_ru", SearchEngineTargetType.SourceData, LocaleCodeID.Russian);

		    //Сохранение

		    SharedParams.SearchEngine := SearchEngine;

		    (SharedParams As IMetabaseObject).Save;

		End Sub UserProc;


При выполнении примера в настройках поиска будет добавлен новый экземпляр
 Solr, предназначенный для индексации и поиска информации об элементах
 измерений, которые формируют срезы данных на русском языке.


См. также:


[ISolrSearchEngineCores](ISolrSearchEngineCores.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
