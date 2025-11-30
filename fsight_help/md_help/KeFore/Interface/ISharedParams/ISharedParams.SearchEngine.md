# ISharedParams.SearchEngine

ISharedParams.SearchEngine
-


# ISharedParams.SearchEngine


## Синтаксис


SearchEngine: [ISearchEngineServiceBase](KeSom.chm::/Interface/ISearchEngineServiceBase/ISearchEngineServiceBase.htm);


## Описание


Свойство SearchEngine определяет
 параметры поисковой платформы репозитория.


## Комментарии


Свойство используется для настройки поисковой платформы, которая используется
 при работе [сервиса
 BI-поиска](Setup.chm::/BISearch/BISearch_Setup.htm).
 После получения параметров и внесения необходимых изменений значение свойства
 SearchEngine необходимо переприсвоить.


## Пример


Подключите системные сборки: BiSearch, Fore, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    SharedParams: ISharedParams;

    SearchEngine: ISolrSearchEngineService;

    Cores: ISolrSearchEngineCores;

Begin

    MB := MetabaseClass.Active;

    //Получение параметров поиска
 и индексации

    SharedParams := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedParams;

    SearchEngine := SharedParams.SearchEngine As ISolrSearchEngineService;

    Cores := SearchEngine.Cores;

    //Добавление экземпляра Sorl

    Cores.Add("http://localhost:8080/solr-4.4.0/SourceData_ru", SearchEngineTargetType.SourceData, LocaleCodeID.Russian);

    //Сохранение

    SharedParams.SearchEngine := SearchEngine;

    (SharedParams As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера в настройках поиска будет добавлен новый экземпляр
 Solr, предназначенный для индексации и поиска информации об элементах
 измерений, которые формируют срезы данных на русском языке.


См. также:


[ISharedParams](ISharedParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
