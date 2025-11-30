# IAccessAttributeValue.BitCount

IAccessAttributeValue.BitCount
-


# IAccessAttributeValue.BitCount


## Синтаксис


BitCount: Integer;


## Описание


Свойство BitCount возвращает
 количество субъектов безопасности, для которых могут быть определены права.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором DICT_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    AOS: IAccessObjectSecurity;

	    Iterator: IAccessElementsIterator;

	    Element: IAccessElement;

	    AttributeValue: IAccessAttributeValue;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("DICT_1");

	    AOS := MDesc.GetSecurity;

	    Iterator := AOS.GetElements;

	    Iterator.Next;

	    Element := Iterator.Current;

	    AttributeValue := Element.AttributeAccess(AccessElementAttributes.Read);

	    Debug.WriteLine("Кол-во субъектов безопасности: " + AttributeValue.BitCount.ToString);

	    For i := 0 To AttributeValue.BitCount Do

	        Debug.WriteLine(AttributeValue.Value(i));

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведено количество возможных
 субъектов доступа, а также значение права на чтение первого элемента справочника
 НСИ для каждого субъекта.


См. также:


[IAccessAttributeValue](IAccessAttributeValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
