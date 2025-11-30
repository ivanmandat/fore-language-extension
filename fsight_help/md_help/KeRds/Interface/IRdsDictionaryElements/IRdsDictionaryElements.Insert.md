# IRdsDictionaryElements.Insert

IRdsDictionaryElements.Insert
-


# IRdsDictionaryElements.Insert


## Синтаксис


Insert(Parent: Integer; Data: [IRdsDictionaryElementData](../IRdsDictionaryElementData/IRdsDictionaryElementData.htm)):
 Integer;


## Параметры


Parent. Родительский элемент,
 в ветку дочерних элементов которого будет добавлен новый элемент.


Data. Данные нового элемента.


## Описание


Метод Insert осуществляет вставку
 нового элемента, данные которого передаются посредством параметра Data, и возвращает ключ вставленного
 элемента.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - «NSI_1»,
 содержащего справочник НСИ с идентификатором «Dict_1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    Attrs: IRdsAttributes;

	    DictInst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Data: IRdsDictionaryElementData;

	    Key: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    Data := Elements.CreateData;

	    Data.Value(Data.AttributeIndex(Attrs.Name.Key)) := "Новый элемент";

	    Key := Elements.Insert(-2, Data);

	End Sub Button1OnClick;


После выполнения примера будет создан объект, содержащий данные. На
 базе этих данных будет создан новый элемент.


См. также:


[IRdsDictionaryElements](IRdsDictionaryElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
