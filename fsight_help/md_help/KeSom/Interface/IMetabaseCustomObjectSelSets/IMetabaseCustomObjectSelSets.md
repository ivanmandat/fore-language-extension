# IMetabaseCustomObjectSelSets

IMetabaseCustomObjectSelSets
-


# IMetabaseCustomObjectSelSets


Сборка: Metabase;


## Описание


Интерфейс IMetabaseCustomObjectSelSets
 содержит свойства и методы для работы с коллекцией отметок измерений,
 которые связаны с объектом пользовательских классов.


## Иерархия наследования


IMetabaseCustomObjectSelSets


## Комментарии


Параметры коллекции можно получить в свойстве [IMetabaseCustomObjectSerializer.Selections](../IMetabaseCustomObjectSerializer/IMetabaseCustomObjectSerializer.Selections.htm).
 Каждый элемент коллекции представляет из себя отметку, описываемую интерфейсом
 [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IMetabaseCustomObjectSelSets.Count.htm)
		 Свойство Count возвращает
		 количество элементов с отметками в коллекции.


		 ![](../../Property_Image.gif)
		 [Item](IMetabaseCustomObjectSelSets.Item.htm)
		 Свойство Item возвращает
		 отметку измерений, сохраненную вместе с указанным элементом коллекции.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IMetabaseCustomObjectSelSets.Add.htm)
		 Метод Add добавляет
		 в коллекцию новый элемент и сохраняет в его метаданных передаваемую
		 отметку измерений.


		 ![](../../Sub_Image.gif)
		 [AddWithOwner](IMetabaseCustomObjectSelSets.AddWithOwner.htm)
		 Метод AddWithOwner
		 добавляет в коллекцию новый элемент и сохраняет в его метаданных
		 передаваемую отметку измерений, с привязкой к указанному владельцу
		 отметки.


		 ![](../../Sub_Image.gif)
		 [Clear](IMetabaseCustomObjectSelSets.Clear.htm)
		 Метод Clear удаляет
		 все сохраненные элементы с отметками измерений.


		 ![](../../Sub_Image.gif)
		 [FindByKey](IMetabaseCustomObjectSelSets.FindByKey.htm)
		 Метод FindByKey осуществляет
		 поиск элемента в коллекции по ключу.


		 ![](../../Sub_Image.gif)
		 [IndexByKey](IMetabaseCustomObjectSelSets.IndexByKey.htm)
		 Метод IndexByKey возвращает
		 индекс элемента с отметкой измерений в коллекции по его ключу.


		 ![](../../Sub_Image.gif)
		 [KeyByIndex](IMetabaseCustomObjectSelSets.KeyByIndex.htm)
		 Метод KeyByIndex возвращает
		 ключ элемента по его индексу в коллекции.


		 ![](../../Sub_Image.gif)
		 [OwnerByKey](IMetabaseCustomObjectSelSets.OwnerByKey.htm)
		 Метод OwnerByKey возвращает
		 описание объекта репозитория, с которым связана отметка, сохраненная
		 в указанном элементе коллекции.


		 ![](../../Sub_Image.gif)
		 [RemoveByIndex](IMetabaseCustomObjectSelSets.RemoveByIndex.htm)
		 Метод RemoveByIndex
		 удаляет элемент из коллекции по индексу.


		 ![](../../Sub_Image.gif)
		 [RemoveByKey](IMetabaseCustomObjectSelSets.RemoveByKey.htm)
		 Метод RemoveByKey удаляет
		 элемент из коллекции по ключу.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
