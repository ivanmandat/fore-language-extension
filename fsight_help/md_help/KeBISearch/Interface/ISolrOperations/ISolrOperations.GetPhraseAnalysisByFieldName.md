# ISolrOperations.GetPhraseAnalysisByFieldName

ISolrOperations.GetPhraseAnalysisByFieldName
-


# ISolrOperations.GetPhraseAnalysisByFieldName


## Синтаксис


GetPhraseAnalysisByFieldName(Core: [ISolrSearchEngineCore](../ISolrSearchEngineCore/ISolrSearchEngineCore.htm);
 FieldName: String; Phrase: String): Variant;


## Параметры


Core. Экземпляр Solr, с которым
 осуществляется работа.


FieldName. Наименование поля,
 по которому осуществляется анализ.


Phrase. Анализируемая фраза.


## Описание


Метод GetPhraseAnalysisByFieldName
 анализирует указанную фразу по имени поля и возвращает массив, содержащий
 набор слов-синонимов.


## Комментарии


Список экземпляров Solr можно получить в свойстве [ISolrSearchEngineService.Cores](../ISolrSearchEngineService/ISolrSearchEngineService.Cores.htm).
 Наименование поля, по которому осуществляется анализ, является регистрозависимым.


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

    Result, v: Variant;

    Arr: Array;

Begin

    MB := MetabaseClass.Active;

    SharedParams := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Bind As ISharedParams;

    SearchEngine := SharedParams.SearchEngine As ISolrSearchEngineService;

    Core := SearchEngine.Cores.Item(0);

    Operations := New SolrOperations.Create;

    Result := Operations.GetPhraseAnalysisByFieldName(Core, "name", "Россйская Федерация");

    Arr := Result As Array;

    For Each v In arr Do

        Debug.WriteLine(v);

    End For;

End Sub UserProc;


При выполнении примера будет осуществлен анализ указанной фразы по полю
 с наименованием «name». Полученные слова-синонимы будут выведены в консоль
 среды разработки.


См. также:


[ISolrOperations](ISolrOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
