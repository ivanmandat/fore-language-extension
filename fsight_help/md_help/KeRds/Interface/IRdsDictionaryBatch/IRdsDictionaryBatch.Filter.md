# IRdsDictionaryBatch.Filter

IRdsDictionaryBatch.Filter
-


# IRdsDictionaryBatch.Filter


## Синтаксис


Filter: [IRdsDictionaryFilterConditions](../IRdsDictionaryFilterConditions/IRdsDictionaryFilterConditions.htm);


## Описание


Свойство Filter возвращает коллекцию
 фильтров, по которым отбираются элементы для пакета.


## Комментарии


По умолчанию фильтрация элементов не производится. Каждый фильтр в коллекции
 реализован интерфейсом [IRdsDictionaryFilterCondition](../IRdsDictionaryFilterCondition/IRdsDictionaryFilterCondition.htm).


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «RDS_REPO», содержащим неверсионный
 справочник НСИ с идентификатором «DICT».
 Справочник содержит атрибут логического типа с идентификатором «ACTUAL».


Также необходимо добавить ссылки на системные сборки «Metabase», «Rds»
 и «Xml».


			Sub UserProc;

Var

    mb: IMetabase;

    RdrRepoDescr: IMetabaseObjectDescriptor;

    RdsDictObj: IMetabaseObject;

    DictInst: IRdsDictionaryInstance;

    DictBatch: IRdsDictionaryBatch;

    DelBatch: IRdsDictionaryBatchDelete;

    BatchFilters: IRdsDictionaryFilterConditions;

    Filter: IRdsDictionaryFilterCondition;

    Dict: IRdsDictionary;

    Attr: IRdsAttribute;

    Doc: FreeThreadedDOMDocument60;

    Element: IXmlDomElement;

Begin

    mb := MetabaseClass.Active;

    RdrRepoDescr := mb.ItemById("RDS_REP");

    RdsDictObj := mb.ItemByIdNamespace("DICT", RdrRepoDescr.Key).Edit;

    DictInst := RdsDictObj.Open(Null) As IRdsDictionaryInstance;

    DictBatch := DictInst.CreateBatch(RdsDictionaryBatchType.Delete);

    DelBatch := DictBatch As IRdsDictionaryBatchDelete;

    BatchFilters := DelBatch.Filter;

    If BatchFilters.Count > 0 Then

        BatchFilters.Clear;

    End If;

    Dict := DelBatch.Dictionary.Dictionary;

    Attr := Dict.Attributes.FindById("ACTUAL");

    Filter := BatchFilters.Add(Attr);

    Debug.WriteLine(Filter.Attribute.Name);

    Filter.Value := False;

    Doc := New FreeThreadedDOMDocument60.Create;

    Element := Doc.createElement("BatchFilter");

    BatchFilters.SaveTo(Element);

    Doc.appendChild(Element);

    Doc.save("C:\BatchFilter.xml");

    DelBatch.Execute;

    RdsDictObj.Save;

End Sub UserProc;


После выполнения примера будет создан пакет, предназначенный для удаления
 элементов. Для пакета будет создан фильтр по значению атрибута «ACTUAL».
 Наименование атрибута будет выведено в окно консоли. Фильтр будет сохранен
 в XML-документ «C:\BatchFilter.xml». Затем пакет будет выполнен.


См. также:


[IRdsDictionaryBatch](IRdsDictionaryBatch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
