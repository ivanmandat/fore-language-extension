# IRdsDictionaryElement.InsertChildCopy

IRdsDictionaryElement.InsertChildCopy
-


# IRdsDictionaryElement.InsertChildCopy


## Синтаксис


InsertChildCopy(Source: [IRdsDictionaryElement](IRdsDictionaryElement.htm)):
 [IRdsDictionaryElement](IRdsDictionaryElement.htm);


## Параметры


Source. Элемент, данные которого
 будут скопированы.


## Описание


Метод InsertChildCopy создает
 новый дочерний элемент для данного элемента. Новый элемент создается на
 основе данных элемента, передаваемого посредством параметра Source,
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

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    Element := Elements.Item(1);

	    Element.InsertChildCopy(Elements.Item(2));

	End Sub UserProc;


После выполнения примера для первого элемента будет создан один дочерний
 элемент. Данные для нового элемента будут скопированы из второго элемента.


См. также:


[IRdsDictionaryElement](IRdsDictionaryElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
