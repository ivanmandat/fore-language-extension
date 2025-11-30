# IMsMetaAttributeValueList.RemoveByKey

IMsMetaAttributeValueList.RemoveByKey
-


# IMsMetaAttributeValueList.RemoveByKey


## Синтаксис


RemoveByKey(AttributeKey: String): Boolean;


## Параметры


AttributeKey. Ключ атрибута.


## Описание


Метод RemoveByKey осуществляет удаление атрибута из коллекции по заданному ключу. Ключ передается посредством параметра AttributeKey. Данный метод возвращает значение True, если удаление прошло успешно.


## Пример


Данный пример является фрагментом кода, который должен быть выполнен для удаления атрибута из коллекции. Для выполнения примера предполагается наличие переменной «AttrValList» типа IMsMetaAttributeValueList.


			Sub UserProc;

Var
    …

    AttrValList: IMsMetaAttributeValueList;

Begin

    …

    MetaAttrVal := MetaAttrValList.FindByKey(MetaAttr.Key);

    If AttrValList.RemoveByKey(1) <> Null Then

        Debug.WriteLine("Удаление прошло успешно");

    Else

        Debug.WriteLine("Удаление атрибута не произошло");

    End If;

   …

End Sub UserProc;


После выполнения примера атрибут с ключом «1» будет удален из коллекции. Результат удаления будет выведен в окно консоли.


См. также:


[IMsMetaAttributeValueList](IMsMetaAttributeValueList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
