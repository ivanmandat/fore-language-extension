# IRdsDictionaryElement.Update

IRdsDictionaryElement.Update
-


# IRdsDictionaryElement.Update


## Синтаксис


Update(Data: [IRdsDictionaryElementData](../IRdsDictionaryElementData/IRdsDictionaryElementData.htm));


## Параметры


Data. Данные, которые необходимо
 обновить у элемента.


## Описание


Метод Update осуществляет обновление
 данных элемента.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    Attrs: IRdsAttributes;

	    DictInst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Element: IRdsDictionaryElement;

	    Data: IRdsDictionaryElementData;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    Element := Elements.Item(1);

	    Data := Element.Data;

	    Data.Attribute(Attrs.Name.Key) := "Новое наименование";

	    Element.Update(Data);

	End Sub UserProc;


После выполнения примера для первого корневого элемента справочника
 будут обновлены данные.


См. также:


[IRdsDictionaryElement](IRdsDictionaryElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
