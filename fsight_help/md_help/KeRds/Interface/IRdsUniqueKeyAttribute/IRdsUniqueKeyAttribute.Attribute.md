# IRdsUniqueKeyAttribute.Attribute

IRdsUniqueKeyAttribute.Attribute
-


# IRdsUniqueKeyAttribute.Attribute


## Синтаксис


Attribute: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);


## Описание


Свойство Attribute определяет
 атрибут уникального ключа справочника НСИ.


## Комментарии


Для работы с атрибутами уникального ключа используйте свойство [IRdsUniqueKey.Attributes](../IRdsUniqueKey/IRdsUniqueKey.Attributes.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие табличного
 справочника НСИ с идентификатором ATTRIBUTE, в котором добавлен уникальный
 ключ с двумя атрибутами.


Добавьте ссылки на системные сборки: Metabase, Rds.


			Sub UserProc;

Var

    mb: IMetabase;

    Dict: IRdsDictionary;

    UniqueKeys: IRdsUniqueKeys;

    UniqueKey: IRdsUniqueKey;

    UAttributes: IRdsUniqueKeyAttributes;

    UAttribute: IRdsUniqueKeyAttribute;

    Attributes: IRdsAttributes;

    Attribute: IRdsAttribute;

    i, j: integer;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем справочник НСИ

    Dict := mb.ItemById("ATTRIBUTE").Edit As IRdsDictionary;

    // Получаем уникальные ключи справочника

    UniqueKeys := Dict.UniqueKeys;

    For i := 0 To UniqueKeys.Count - 1 Do

        UniqueKey := UniqueKeys.Item(i);

    End For;

    //  Получаем атрибуты уникального ключа

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

    // Выводим в окно консоли список атрибутов уникального ключа

    Debug.WriteLine("Исходный список атрибутов уникального ключа");

    Debug.Indent;

    For i := 0 To UAttributes.Count - 1 Do

        UAttribute := UAttributes.Item(i);

        Debug.WriteLine(UAttribute.Attribute.Id);

    End For;

    Debug.Unindent;

    // Перемещаем атрибуты

     UAttributes.Move(0, 1);

    // Выводим в окно консоли список атрибутов уникального ключа

    Debug.WriteLine("Список атрибутов уникального ключа после перемещения");

    Debug.Indent;

    For i := 0 To UAttributes.Count - 1 Do

        UAttribute := UAttributes.Item(i);

        Debug.WriteLine(UAttribute.Attribute.Id);

    End For;

    // Сохраняем справочник

    (Dict As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены списки
 идентификаторов атрибутов уникального ключа до и после перемещения. Атрибуты
 уникального ключа будут перемещены.


См. также:


[IRdsUniqueKeyAttribute](IRdsUniqueKeyAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
