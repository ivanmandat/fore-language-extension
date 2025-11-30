# IRdsSortAttributes.Add

IRdsSortAttributes.Add
-


# IRdsSortAttributes.Add


## Синтаксис


Add(Value: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);
 Ascending: Boolean): [IRdsSortAttribute](../IRdsSortAttribute/IRdsSortAttribute.htm);


## Параметры


Value. Атрибут, по значениям
 которого осуществляется сортировка;


Ascending. Направление сортировки.


## Описание


Метод Add добавляет сортировку
 по указанному атрибуту с заданным направлением сортировки.


## Комментарии


Параметр Ascending определяет
 направление сортировки. Допустимые значения:


	- True. Сортировка по
	 возрастанию;


	- False. Сортировка по
	 убыванию.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «RDS_REPO». Данный репозиторий
 содержит справочник НСИ с идентификатором «SORT».
 Добавьте ссылки на системные сборки «Metabase», «Rds».


			Sub UserProc;

Var

    Mb: IMetabase;

    RdsKey: Integer;

    DictObj: IMetabaseObjectDescriptor;

    DictInst: IRdsDictionaryInstance;

    Sorter: IRdsElementsSorter;

    Elems: IRdsDictionaryElements;

    Attrs: IRdsAttributes;

Begin

    Mb := MetabaseClass.Active;

    RdsKey := Mb.ItemById("RDS_REPO").Key;

    DictObj := Mb.ItemByIdNamespace("SORT", RdsKey);

    DictInst := DictObj.Open(Null) As IRdsDictionaryInstance;

    Elems := DictInst.Elements;

    Sorter := Elems.CreateSorter(Elems.Root);

    Attrs := DictInst.Dictionary.Attributes;

    Sorter.Attributes.Add(Attrs.FindById("Name"), True);

    Sorter.Sort(True);

    Sorter.Save;

End Sub UserProc;


После выполнения примера элементы справочника «SORT»
 будут отсортированы по наименованию. Направление сортировки - по возрастанию.


См. также:


[IRdsSortAttributes](IRdsSortAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
