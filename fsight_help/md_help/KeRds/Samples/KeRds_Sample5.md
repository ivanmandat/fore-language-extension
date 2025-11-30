# Создание элементов в справочнике НСИ

Создание элементов в справочнике НСИ
-


# Создание элементов в справочнике НСИ


Работа с иерархией элементов в справочнике НСИ осуществляется посредством
 методов интерфейса [IRdsDictionaryElements](../Interface/IRdsDictionaryElements/IRdsDictionaryElements.htm).


Для выполнения примера предполагается наличие справочника НСИ с идентификатором
 RDS_DICT.


## Пример


Добавьте ссылки на системные сборки: Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    Dict: IRdsDictionary;

    Attrs: IRdsAttributes;

    DictInst: IRdsDictionaryInstance;

    Elements: IRdsDictionaryElements;

    Data: IRdsDictionaryElementData;

    i, j: Integer;

Begin

    MB := MetabaseClass.Active;

    Dict := MB.ItemById("RDS_DICT").Bind As IRdsDictionary;

    Attrs := Dict.Attributes;

    DictInst := Dict.Open(Null);

    Elements := DictInst.Elements;

    Data := Elements.CreateData;

    Data.Value(Data.AttributeIndex(Attrs.Name.Key)) := "Первый корневой";

    i := Elements.Insert(-2, Data);

    Data.Value(Data.AttributeIndex(Attrs.Name.Key)) := "Второй корневой";

    j := Elements.Insert(-2, Data);

    Data.Value(Data.AttributeIndex(Attrs.Name.Key)) := "Первый дочерний";

    Elements.Insert(i, Data);

    Data.Value(Data.AttributeIndex(Attrs.Name.Key)) := "Второй дочерний";

    Elements.Insert(j, Data);

End Sub UserProc;


После выполнения примера в справочнике НСИ будут созданы четыре новых
 элемента: два корневых элемента и для каждого корневого по одному дочернему
 элементу.


См. также:


[Примеры](KeRds_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
