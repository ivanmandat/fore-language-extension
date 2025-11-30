# IRdsDictionaryInstance.Update

IRdsDictionaryInstance.Update
-


# IRdsDictionaryInstance.Update


## Синтаксис


Update(Element: Integer; Data: [IRdsDictionaryElementData](../IRdsDictionaryElementData/IRdsDictionaryElementData.htm));


## Параметры


Element. Ключ обновляемого
 элемента;


Data. Данные элемента.


## Описание


Метод Update обновляет данные
 указанного элемента.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Data: IRdsDictionaryElementData;

	    Att: IRDsAttributes;

	    Key: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", Mb.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null);

	    Key := DictInst.Elements.Item(1).Key;

	    Data := DictInst.Data(Key);

	    Att := Dict.Attributes;

	    Data.Attribute(Att.Name.Key) := "Element";

	    DictInst.Update(Key, Data);

	End Sub UserProc;


После выполнения примера элемент, для которого было изменено наименование,
 будет обновлен.


См. также:


[IRdsDictionaryInstance](IRdsDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
