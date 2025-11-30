# ISolrSearchEngineService.Cores

ISolrSearchEngineService.Cores
-


# ISolrSearchEngineService.Cores


## Синтаксис


Cores: [ISolrSearchEngineCores](../ISolrSearchEngineCores/ISolrSearchEngineCores.htm);


## Описание


Свойство Cores возвращает коллекцию
 экземпляров Solr.


## Пример


Предполагается, что репозиторий настроен на работу с поисковым сервисом
 на базе Apache Solr. Подключите системные сборки: BISearch, Fore, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    SharedParams: ISharedParams;

    SearchEngine: ISolrSearchEngineService;

    Cores: ISolrSearchEngineCores;

    Core: ISolrSearchEngineCore;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    //Получение параметров поиска и индексации

    SharedParams := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Bind As ISharedParams;

    SearchEngine := SharedParams.SearchEngine As ISolrSearchEngineService;

    Cores := SearchEngine.Cores;

    //Просмотр списка доступных экземпляров Solr

    For i := 0 To Cores.Count - 1 Do

        Core := Cores.Item(i);

        Select Case (Core.Type As Integer)

            Case 0: Debug.Write("Поиск по метаданным. URL: ");

            Case 1: Debug.Write("Поиск по данным. URL: ");

            Case 2: Debug.Write("Поиск по свободным измерениям. URL: ");

        End Select;

        Debug.WriteLine(Core.Uri + " (Идентификатор языка: " + Core.Locale.ToString + ')');

    End For;

End Sub UserProc;


При выполнении примера будет получен список экземпляров Solr, заданных
 в текущих настройках поискового сервиса репозитория. Назначение и URL-адрес
 каждого экземпляра будут выведены в консоль среды разработки.


См. также:


[ISolrSearchEngineService](ISolrSearchEngineService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
