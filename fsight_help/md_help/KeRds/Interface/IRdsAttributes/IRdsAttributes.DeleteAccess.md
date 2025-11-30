# IRdsAttributes.DeleteAccess

IRdsAttributes.DeleteAccess
-


# IRdsAttributes.DeleteAccess


## Синтаксис


DeleteAccess: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);


## Описание


Свойство DeleteAccess возвращает
 системный атрибут справочника, назначение которого - Право на удаление.


## Комментарии


Данный атрибут имеет строковый тип данных, не может содержать пустые
 и множественные значения. По умолчанию является скрытым. Идентификатор
 атрибута - "DELETEACCESS". Данный атрибут доступен, если свойству
 [Secured](../IRdsDictionary/IRdsDictionary.Secured.htm) установлено
 значение True. Значением данного
 атрибута является метка безопасности, определяющая пользователей, для
 которых будет присутствовать право на удаление элементов справочника.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1". Для справочника
 включено управление правами доступа к элементам.


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

	    j := Attrs.DeleteAccess.Key; // ключ атрибута

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    For i := 1 To Elements.Count - 1 Do

	        Debug.WriteLine(Elements.Item(i).Attribute(j));

	    End For;

	End Sub UserProc;


После выполнения примера для каждого элемента справочника будет выведено
 значение метка безопасности в десятичном виде, определяющей наличие прав
 на удаление элементов.


См. также:


[IRdsAttributes](IRdsAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
