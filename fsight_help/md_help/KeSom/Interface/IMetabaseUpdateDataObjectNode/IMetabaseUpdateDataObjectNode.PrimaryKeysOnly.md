# IMetabaseUpdateDataObjectNode.PrimaryKeysOnly

IMetabaseUpdateDataObjectNode.PrimaryKeysOnly
-


# IMetabaseUpdateDataObjectNode.PrimaryKeysOnly


## Синтаксис


PrimaryKeysOnly: [IDictionary](ModCollections.chm::/Interface/IDictionary/IDictionary.htm);


## Описание


Свойство PrimaryKeysOnly определяет
 словарь первичных ключей для обновления отдельных записей таблицы/элементов
 справочника.


## Комментарии


По умолчанию свойство не задано, при установке обновления выполняется
 обновление всех записей таблицы/элементов справочника. Способ обновления
 данных определяется свойством [BatchMode](IMetabaseUpdateDataObjectNode.BatchMode.htm).


Для обновления отдельных записей/элементов поочередно добавьте их в
 свойство PrimaryKeysOnly. Добавление
 нового элемента в словарь выполняется с помощью метода [IDictionary.Add](ModCollections.chm::/Interface/IDictionary/IDictionary.Add.htm),
 при этом в качестве параметра Key
 укажите ключ записи таблицы/элемента справочника для обновления, в качестве
 параметра Value - значение Null.
 Заданные записи/элементы будут обновлены при установке обновления в соответствии
 с выбранным способом обновления данных объекта.


При обновлении элемента справочника, ключ которого добавлен в словарь,
 его дочерние элементы не обновляются. Для обновления дочерних элементов
 справочника добавьте их ключи в словарь с помощью свойства PrimaryKeysOnly.


По умолчанию обновляются все поля таблицы/атрибуты справочника. Для
 обновления отдельных полей/атрибутов используйте свойство [FieldsOnly](IMetabaseUpdateDataObjectNode.FieldsOnly.htm).


## Пример


Пример использования свойства приведён в описании свойства [IMetabaseUpdateDataObjectNode.FieldsOnly](IMetabaseUpdateDataObjectNode.FieldsOnly.htm).


См. также:


[IMetabaseUpdateDataObjectNode](IMetabaseUpdateDataObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
