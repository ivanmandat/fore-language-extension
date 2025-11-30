# Hashtable

Hashtable
-


# Hashtable


## Описание


Класс Hashtable реализует объект, представляющий собой коллекцию пар «Ключ-Значение», основанных на хеш-коде ключа.


## Комментарий


Объект класса Hashtable состоит из сегментов, содержащих элементы коллекции. Сегмент - это виртуальная подгруппа элементов внутри объекта, позволяющая упростить и ускорить поиск и извлечение элементов по сравнению с большинством коллекций. С каждым сегментом связан числовой хеш-код, который создается с помощью встроенной хеш-функции и основан на ключе элемента.


## Свойства объекта класса, унаследованные от [IDictionary](../../Interface/IDictionary/IDictionary.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Item](../../Interface/IDictionary/IDictionary.Item.htm)
		 Свойство Item определяет
		 значение элемента словаря.


		 ![](../../Property_Image.gif)
		 [Keys](../../Interface/IDictionary/IDictionary.Keys.htm)
		 Свойство Keys возвращает
		 коллекцию ключей словаря.


		 ![](../../Property_Image.gif)
		 [Values](../../Interface/IDictionary/IDictionary.Values.htm)
		 Свойство Values возвращает
		 коллекцию значений элементов словаря.


## Свойства объекта класса, унаследованные от [ICollection](../../Interface/ICollection/ICollection.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](../../Interface/ICollection/ICollection.Count.htm)
		 Свойство Count возвращает
		 количество элементов в массиве.


## Методы объекта класса, унаследованные от [IHashtable](../../Interface/IHashtable/IHashtable.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Clone](../../Interface/IHashtable/IHashtable.Clone.htm)
		 Метод Clone создает
		 копию хеш-таблицы.


		 ![](../../Sub_Image.gif)
		 [ContainsKey](../../Interface/IHashtable/IHashtable.ContainsKey.htm)
		 Метод ContainsKey осуществляет
		 проверку наличия элемента с указанным ключом.


		 ![](../../Sub_Image.gif)
		 [ContainsValue](../../Interface/IHashtable/IHashtable.ContainsValue.htm)
		 Метод ContainsValue
		 осуществляет проверку наличия элемента с заданным значением.


## Методы объекта класса, унаследованные от [IDictionary](../../Interface/IDictionary/IDictionary.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](../../Interface/IDictionary/IDictionary.Add.htm)
		 Метод Add осуществляет
		 добавление элемента в словарь.


		 ![](../../Sub_Image.gif)
		 [Clear](../../Interface/IDictionary/IDictionary.Clear.htm)
		 Метод Clear осуществляет
		 очистку словаря.


		 ![](../../Sub_Image.gif)
		 [Contains](../../Interface/IDictionary/IDictionary.Contains.htm)
		 Метод Contains осуществляет
		 проверку наличия элемента с ключом Key.


		 ![](../../Sub_Image.gif)
		 [Remove](../../Interface/IDictionary/IDictionary.Remove.htm)
		 Метод Remove осуществляет
		 удаление элемента с ключом Key.


## Методы объекта класса, унаследованные от [ICollection](../../Interface/ICollection/ICollection.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CopyTo](../../Interface/ICollection/ICollection.CopyTo.htm)
		 Метод CopyTo осуществляет
		 копирование коллекции в массив.


См. также:


[Классы сборки Collections](../ModCollections_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
