# IRdsDictionaryElements.CreateElementData

IRdsDictionaryElements.CreateElementData
-


# IRdsDictionaryElements.CreateElementData


## Синтаксис


CreateElementData: [IRdsDictionaryElementData](../IRdsDictionaryElementData/IRdsDictionaryElementData.htm);


## Описание


Метод CreateElementData создает
 объект, содержащий данные элемента справочника НСИ.


## Комментарии


Данный объект в дальнейшем может использоваться для создания новых,
 поиска или обновления уже имеющихся элементов справочника.


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

	    Data: IRdsDictionaryElementData;

	    Key: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    Data := Elements.CreateElementData;

	    Data.Value(Data.AttributeIndex(Attrs.Name.Key)) := "Новый элемент";

	    Key := Elements.Insert(-2, Data);

	End Sub UserProc;


После выполнения примера будет создан объект, содержащий данные элемента.
 На базе этих данных будет создан новый элемент. В переменной Key
 будет содержаться ключ созданного элемента.


См. также:


[IRdsDictionaryElements](IRdsDictionaryElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
