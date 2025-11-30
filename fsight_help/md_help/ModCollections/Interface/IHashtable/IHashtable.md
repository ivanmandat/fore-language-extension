# IHashtable

IHashtable
-


# IHashtable


## Описание


Интерфейс IHashtable представляет
 набор взаимосвязанных ключей и значений, основанных на хеш-коде ключа.


## Иерархия наследования


           [IEnumerable](../IEnumerable/IEnumerable.htm)


           [ICollection](../ICollection/ICollection.htm)


           [IDictionary](../IDictionary/IDictionary.htm)


           IHashtable


## Комментарии


При добавлении элемента в коллекцию IHashtable
 он помещается в определенный сегмент в зависимости от хеш-кода ключа.
 В дальнейшем поиск ключа осуществляется только в определенном сегменте
 с использованием хеш-кода ключа. Таким образом в значительной степени
 уменьшается количество операций сравнения ключей, которое требуется для
 нахождения элемента.


## Свойства, унаследованные от [IDictionary](../IDictionary/IDictionary.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Item](../IDictionary/IDictionary.Item.htm)
		 Свойство Item определяет
		 значение элемента словаря.


		 ![](../../Property_Image.gif)
		 [Keys](../IDictionary/IDictionary.Keys.htm)
		 Свойство Keys возвращает
		 коллекцию ключей словаря.


		 ![](../../Property_Image.gif)
		 [Values](../IDictionary/IDictionary.Values.htm)
		 Свойство Values возвращает
		 коллекцию значений элементов словаря.


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
		 [Clone](IHashtable.Clone.htm)
		 Метод Clone создает
		 копию хеш-таблицы.


		 ![](../../Sub_Image.gif)
		 [ContainsKey](IHashtable.ContainsKey.htm)
		 Метод ContainsKey осуществляет
		 проверку наличия элемента с указанным ключом.


		 ![](../../Sub_Image.gif)
		 [ContainsValue](IHashtable.ContainsValue.htm)
		 Метод ContainsValue
		 осуществляет проверку наличия элемента с заданным значением.


## Методы, унаследованные от [IDictionary](../IDictionary/IDictionary.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](../IDictionary/IDictionary.Add.htm)
		 Метод Add осуществляет
		 добавление элемента в словарь.


		 ![](../../Sub_Image.gif)
		 [Clear](../IDictionary/IDictionary.Clear.htm)
		 Метод Clear осуществляет
		 очистку словаря.


		 ![](../../Sub_Image.gif)
		 [Contains](../IDictionary/IDictionary.Contains.htm)
		 Метод Contains осуществляет
		 проверку наличия элемента с ключом Key.


		 ![](../../Sub_Image.gif)
		 [Remove](../IDictionary/IDictionary.Remove.htm)
		 Метод Remove осуществляет
		 удаление элемента с ключом Key.


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
