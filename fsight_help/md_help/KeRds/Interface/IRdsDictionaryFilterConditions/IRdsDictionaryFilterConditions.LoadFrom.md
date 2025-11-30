# IRdsDictionaryFilterConditions.LoadFrom

IRdsDictionaryFilterConditions.LoadFrom
-


# IRdsDictionaryFilterConditions.LoadFrom


## Синтаксис


LoadFrom(Element: Variant);


## Параметры


Element. Объект, из которого
 будут загружены параметры фильтра.


## Описание


Метод LoadFrom загружает из
 XML параметры коллекции фильтров.


## Комментарии


Для сохранения параметров коллекции фильтров используйте [IRdsDictionaryFilterConditions.SaveTo](IRdsDictionaryFilterConditions.SaveTo.htm).


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «RDS_REPO», содержащим неверсионный
 справочник НСИ с идентификатором «DICT».
 В файловой системе должен содержаться файл «C:\BatchFilter.xml» с параметрами
 коллекции фильтров в формате XML.


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

    Doc: FreeThreadedDOMDocument60;

Begin

    mb := MetabaseClass.Active;

    RdrRepoDescr := mb.ItemById("RDS_REP");

    RdsDictObj := mb.ItemByIdNamespace("DICT", RdrRepoDescr.Key).Edit;

    DictInst := RdsDictObj.Open(Null) As IRdsDictionaryInstance;

    DictBatch := DictInst.CreateBatch(RdsDictionaryBatchType.Delete);

    DelBatch := DictBatch As IRdsDictionaryBatchDelete;

    Doc := New FreeThreadedDOMDocument60.Create;

    Doc.load("C:\BatchFilter.xml");

    BatchFilters := DelBatch.Filter;

    BatchFilters.LoadFrom(Doc.documentElement);

    If BatchFilters.Count > 0 Then

        Filter := BatchFilters.Item(0);

        Debug.WriteLine("Удаляем фильтр: ");

        Debug.WriteLine("    атрибут: " + Filter.Attribute.Name);

        Debug.WriteLine("    значение: " + Filter.Value);

        BatchFilters.Remove(0);

    End If;

    DelBatch.Execute;

    RdsDictObj.Save;

End Sub UserProc;


После выполнения примера будет создан пакет для удаления элементов,
 параметры которого будут загружены из XML-документа «C:\BatchFilter.xml».
 Первый фильтр в коллекции будет удален. Затем пакет будет выполнен.


См. также:


[IRdsDictionaryFilterConditions](IRdsDictionaryFilterConditions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
