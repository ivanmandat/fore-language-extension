# IRdsImportSchema.UniqueKey

IRdsImportSchema.UniqueKey
-


# IRdsImportSchema.UniqueKey


## Синтаксис


UniqueKey: [IRdsUniqueKey](../IRdsUniqueKey/IRdsUniqueKey.htm);


## Описание


Свойство UniqueKey определяет набор атрибутов, входящих в состав уникального ключа.


## Комментарии


По набору атрибутов можно однозначно сопоставить запись из источника импорта с элементом справочника НСИ, а также определить родственные отношения между импортируемыми элементами.


Уникальный ключ должен принадлежать тому же справочнику, что и схема импорта.


Если значение свойства не задано, то проверка осуществляется по атрибуту «KEY». Для получения атрибута «KEY» используйте свойство [IRdsAttributes.Key](../IRdsAttributes/IRdsAttributes.Key.htm).


Особенности импорта по уникальному ключу:


-
Атрибут «KEY» должен остаться не привязанным к полю источника данных. Для получения атрибута «KEY» используйте свойство [IRdsAttributes.Key](../IRdsAttributes/IRdsAttributes.Key.htm);


-
Все атрибуты, входящие в уникальный индекс, должны быть привязанными к полю источника данных;


-
Если в уникальный ключ входит более одного атрибута, атрибут «PARENT_KEY» должен остаться не привязанным к полю источника данных. Для получения атрибута «PARENT_KEY» используйте свойство [IRdsAttributes.ParentKey](../IRdsAttributes/IRdsAttributes.ParentKey.htm).


## Пример


Использование свойства приведено в примере для [IRdsImportSchema.TableObject](IRdsImportSchema.TableObject.htm).


См. также:


[IRdsImportSchema](IRdsImportSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
