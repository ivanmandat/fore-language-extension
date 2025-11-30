# IRdsDictionaryElement.InsertChild

IRdsDictionaryElement.InsertChild
-


# IRdsDictionaryElement.InsertChild


## Синтаксис


InsertChild(Data: [IRdsDictionaryElementData](../IRdsDictionaryElementData/IRdsDictionaryElementData.htm)):
 [IRdsDictionaryElement](IRdsDictionaryElement.htm);


## Параметры


Data. Данные нового элемента.


## Описание


Метод InsertChild создает новый
 дочерний элемент для данного элемента. Новый элемент создается на основе
 данных, передаваемых посредством параметра Data,
 и добавляется в конец всей ветки дочерних элементов.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Attrs: IRdsAttributes;

	    Dict: IRdsDictionary;

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

	    Data := Elements.CreateElementData;

	    Data.Attribute(Attrs.Name.Key) := "Новый элемент";

	    Element.InsertChild(Data);

	End Sub UserProc;


После выполнения примера для первого элемента будет создан один дочерний
 элемент.


См. также:


[IRdsDictionaryElement](IRdsDictionaryElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
