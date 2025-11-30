# IStringMap

IStringMap
-


# IStringMap


## Описание


Интерфейс IStringMap содержит
 свойства и методы для работы с картой строковых элементов.


## Иерархия наследования


           [IEnumerable](../IEnumerable/IEnumerable.htm)


           [ICollection](../ICollection/ICollection.htm)


           IStringMap


## Комментарии


В карте каждому строковому элементу соответствует уникальный строковый
 ключ. Сортировка элементов производится по ключу автоматически при добавлении
 новых элементов в карту. Если добавляется элемент, ключ которого уже существует
 в карте, то осуществляется замена значения для этого элемента.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Item](IStringMap.Item.htm)
		 Свойство Item определяет
		 значение элемента с указанным ключом.


		 ![](../../Property_Image.gif)
		 [Key](IStringMap.Key.htm)
		 Свойство Key возвращает
		 ключ элемента с указанным индексом.


		 ![](../../Property_Image.gif)
		 [Keys](IStringMap.Keys.htm)
		 Свойство Keys возвращает
		 коллекцию ключей карты.


		 ![](../../Property_Image.gif)
		 [Values](IStringMap.Values.htm)
		 Свойство Values возвращает
		 коллекцию значений элементов карты.


## Свойства, унаследованные от [ICollection](../ICollection/ICollection.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](../ICollection/ICollection.Count.htm)
		 Свойство Count возвращает
		 количество элементов в массиве.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IStringMap.Add.htm)
		 Метод Add осуществляет
		 добавление нового элемента в карту.


		 ![](../../Sub_Image.gif)
		 [Clear](IStringMap.Clear.htm)
		 Метод Clear осуществляет
		 очистку карты строковых элементов.


		 ![](../../Sub_Image.gif)
		 [Clone](IStringMap.Clone.htm)
		 Метод Clone создает
		 копию карты строковых элементов.


		 ![](../../Sub_Image.gif)
		 [ContainsKey](IStringMap.ContainsKey.htm)
		 Метод ContainsKey осуществляет
		 проверку наличия элемента с указанным ключом.


		 ![](../../Sub_Image.gif)
		 [Remove](IStringMap.Remove.htm)
		 Метод Remove осуществляет
		 удаление элемента с указанным ключом.


## Методы, унаследованные от [ICollection](../ICollection/ICollection.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CopyTo](../ICollection/ICollection.CopyTo.htm)
		 Метод CopyTo осуществляет
		 копирование коллекции в массив.


См. также:


[Интерфейсы сборки Collections](../ModCollections_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
