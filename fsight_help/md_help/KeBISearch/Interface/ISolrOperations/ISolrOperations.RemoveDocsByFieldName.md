# ISolrOperations.RemoveDocsByFieldName

ISolrOperations.RemoveDocsByFieldName
-


# ISolrOperations.RemoveDocsByFieldName


## Синтаксис


RemoveDocsByFieldName(Core: [ISolrSearchEngineCore](../ISolrSearchEngineCore/ISolrSearchEngineCore.htm);
 FieldName: String; Values: Array): Boolean;


## Параметры


Core. Экземпляр Solr, с которым
 осуществляется работа.


FieldType. Наименование поля,
 по которому необходимо удалить документы.


Values. Массив индексированных
 значений.


## Описание


Метод RemoveDocsByFieldName
 удаляет документы Apach Solr, связанные с указанным полем и в которых
 хранятся указанные индексированные значения.


## Комментарии


Наименование поля, по которому необходимо удалить документы, является
 регистрозависимым.


Метод возвращает значение True,
 если удаление прошло удачно и False,
 если удаление по каким-либо причинам невозможно.


Список экземпляров Solr можно получить в свойстве [ISolrSearchEngineService.Cores](../ISolrSearchEngineService/ISolrSearchEngineService.Cores.htm).


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    SharedParams: ISharedParams;

    SearchEngine: ISolrSearchEngineService;

    Core: ISolrSearchEngineCore;

    Operations: ISolrOperations;

    Arr: Array;

Begin

    MB := MetabaseClass.Active;

    SharedParams := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Bind As ISharedParams;

    SearchEngine := SharedParams.SearchEngine As ISolrSearchEngineService;

    Core := SearchEngine.Cores.Item(0);

    Arr := New Variant[1];

    Arr[0] := "Куб";

    Operations := New SolrOperations.Create;

    Operations.RemoveDocsByFieldName(Core, "name", Arr);

End Sub UserProc;


При выполнении примера будут удалены документы Solr, которые связаны
 с полем «name» и содержат индексированное значение - «Куб».


См. также:


[ISolrOperations](ISolrOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
