# IMetabaseUpdateContext.RegisterKeyChange

IMetabaseUpdateContext.RegisterKeyChange
-


# IMetabaseUpdateContext.RegisterKeyChange


## Синтаксис


RegisterKeyChange(ClassId: Integer; OldKey: Integer;
 NewKey: Integer; OldId: String; NewId: String; NewObject: [IMetabaseObject](../IMetabaseObject/IMetabaseObject.htm));


## Параметры


ClassId. Идентификатор класса
 объекта репозитория-приёмника, на который ссылается объект обновления;


OldKey. Ключ объекта репозитория-источника,
 на который ссылается объект до обновления;


NewKey. Ключ объекта репозитория-приёмника,
 на который ссылается объект после обновления;


OldId. Идентификатор объекта
 репозитория-источника, на который ссылается объект до обновления;


NewId. Идентификатор объекта
 репозитория-приёмника, на который ссылается объект после обновления;


NewObject. Объект репозитория-приёмника,
 на который ссылается объект после обновления.


## Описание


Метод RegisterKeyChange переопределяет
 ключ объекта репозитория, на который ссылается объект обновления.


## Комментарии


Метод RegisterKeyChange используется
 для переопределения объекта, на который ссылается объект обновления, путем
 замены ключей.


Если в качестве параметра NewObject
 указать несуществующий объект, то обновление объекта репозитория произойдет
 без перенастройки ссылок. Если в репозитории не найдется объекта с указанным
 ключом, то произойдет перенастройка ссылок по идентификаторам.


В качестве значения параметра ClassId
 указывается одно из допустимых значений перечисления [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm).


## Пример


Использование метода приведено в примере для [IMetabaseUpdateContext.RegisterHierarchyChange](IMetabaseUpdateContext.RegisterHierarchyChange.htm).


См. также:


[IMetabaseUpdateContext](IMetabaseUpdateContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
