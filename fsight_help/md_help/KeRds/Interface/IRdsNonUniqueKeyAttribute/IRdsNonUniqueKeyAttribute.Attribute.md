# IRdsNonUniqueKeyAttribute.Attribute

IRdsNonUniqueKeyAttribute.Attribute
-


# IRdsNonUniqueKeyAttribute.Attribute


## Синтаксис


		Attribute: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);


## Описание


Свойство Attribute определяет
 атрибут неуникального ключа справочника НСИ.


## Комментарии


Неуникальный ключ - дополнительный идентификатор для записей справочника
 НСИ. Используется для настройки атрибута в качестве альтернативной иерархии
 и для задания индекса для связи с альтернативными иерархиями. Ключ может
 состоять из единственного атрибута справочника, значения которого могут
 повторяться для каждого элемента и из нескольких атрибутов, совокупность
 значений которых не уникальна.


## Пример


Для выполнения примера в репозитории предполагается наличие табличного
 справочника НСИ с идентификатором ATTRIBUTEN, в котором добавлен неуникальный
 ключ с тремя атрибутами.


Добавьте ссылки на системные сборки: Metabase, Rds.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    Dict: IRdsDictionary;

		    UniqueKeys: IRdsNonUniqueKeys;

		    UniqueKey: IRdsNonUniqueKey;

		    UAttributes: IRdsNonUniqueKeyAttributes;

		    UAttribute: IRdsNonUniqueKeyAttribute;

		    Attributes: IRdsAttributes;

		    Attribute: IRdsAttribute;

		    i, j: integer;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем справочник НСИ

		    Dict := mb.ItemById("ATTRIBUTEN").Edit As IRdsDictionary;

		    // Получаем неуникальные ключи справочника

		    UniqueKeys := Dict.NonUniqueKeys;

		    For i := 0 To UniqueKeys.Count - 1 Do

		        UniqueKey := UniqueKeys.Item(i);

		    End For;

		    //  Получаем атрибуты неуникального ключа

		    UAttributes := UniqueKey.Attributes;

		    //  Получаем атрибуты справочника

		    Attributes := Dict.Attributes;

		    For i := 0 To Attributes.Count - 1 Do

		        Attribute := Attributes.Item(i);

		        j := UAttributes.FindByAttribute(Attribute);

		        If j >= 0 Then

		            UAttribute := UAttributes.Item(j);

		        End If;

		    End For;

		    // Выводим в окно консоли список атрибутов неуникального ключа

		    Debug.WriteLine("Исходный список атрибутов неуникального ключа");

		    Debug.Indent;

		    For i := 0 To UAttributes.Count - 1 Do

		        UAttribute := UAttributes.Item(i);

		        Debug.WriteLine(UAttribute.Attribute.Id);

		    End For;

		    Debug.Unindent;

		    // Перемещаем атрибуты

		    UAttributes.Move(1, UAttributes.Count - 1);

		    // Выводим в окно консоли список атрибутов неуникального ключа

		    Debug.WriteLine("Список атрибутов неуникального ключа после перемещения");

		    Debug.Indent;

		    For i := 0 To UAttributes.Count - 1 Do

		        UAttribute := UAttributes.Item(i);

		        Debug.WriteLine(UAttribute.Attribute.Id);

		    End For;

		    // Сохраняем справочник

		    (Dict As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены списки
 наименований атрибутов неуникального ключа до и после перемещения. Второй
 и последний атрибуты неуникального ключа будут перемещены.


См. также:


[IRdsNonUniqueKeyAttribute](IRdsNonUniqueKeyAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
