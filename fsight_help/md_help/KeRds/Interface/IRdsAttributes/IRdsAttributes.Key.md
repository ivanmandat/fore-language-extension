# IRdsAttributes.Key

IRdsAttributes.Key
-


# IRdsAttributes.Key


## Синтаксис


Key: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);


## Описание


Свойство Key возвращает системный
 атрибут справочника, назначение которого - Ключ элемента.


## Комментарии


Данный атрибут имеет целый тип данных, не может содержать пустые и множественные
 значения. По умолчанию является скрытым. Идентификатор атрибута - "KEY".


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Attrs: IRdsAttributes;

	    i, j: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    j := Attrs.Key.Key; // ключ атрибута

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    For i := 1 To Elements.Count - 1 Do

	        Debug.WriteLine(Elements.Item(i).Attribute(j));

	    End For;

	End Sub UserProc;


После выполнения примера в консоль будут выведены значения атрибута
 "Ключ" для всех элементов справочника.


См. также:


[IRdsAttributes](IRdsAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
