# IMetabaseCustomObjectSelSets.OwnerByKey

IMetabaseCustomObjectSelSets.OwnerByKey
-


# IMetabaseCustomObjectSelSets.OwnerByKey


## Синтаксис


OwnerByKey(Key: String): [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Параметры


Key. Ключ элемента коллекции.


## Описание


Метод OwnerByKey возвращает
 описание объекта репозитория, с которым связана отметка, сохраненная в
 указанном элементе коллекции.


## Комментарии


Если отметка, сохраненная в указанном элементе коллекции, ни с каким
 объектом репозитория не связана, либо элемент с ключом Key
 в коллекции не существует, то метод возвращает значение Null.


Для добавления в коллекцию отметки измерений, связанной с каким-либо
 объектом репозитория, используется метод [AddWithOwner](IMetabaseCustomObjectSelSets.AddWithOwner.htm).


## Пример


Пример использования приведен в описании метода [AddWithOwner](IMetabaseCustomObjectSelSets.AddWithOwner.htm).


См. также:


[IMetabaseCustomObjectSelSets](IMetabaseCustomObjectSelSets.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
