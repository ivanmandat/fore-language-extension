# IMetabaseObjectControlInfo.FindByKey

IMetabaseObjectControlInfo.FindByKey
-


# IMetabaseObjectControlInfo.FindByKey


## Синтаксис


FindByKey(ObjectKey: Integer): [IMetabaseObjectControl](../IMetabaseObjectControl/IMetabaseObjectControl.htm);


## Параметры


ObjectKey.
 Ключ вложенного объекта.


## Описание


Метод FindByKey осуществляет
 поиск и возвращает параметры вложенного объекта.


## Комментарии


Если в текущем объекте отсутствует вложенный объект с указанным ключом,
 то метод вернет значение Null.


## Пример


Пример использования приведён в описании свойства [IMetabaseObjectControl.IsEmpty](../IMetabaseObjectControl/IMetabaseObjectControl.IsEmpty.htm).


См. также:


[IMetabaseObjectControlInfo](IMetabaseObjectControlInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
