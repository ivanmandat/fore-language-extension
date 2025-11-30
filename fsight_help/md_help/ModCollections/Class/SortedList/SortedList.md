# SortedList

SortedList
-


# SortedList


## Описание


Класс SortedList реализует объект, представляющий собой коллекцию пар «Ключ-Значение», отсортированную по значениям ключа.


## Комментарий


Сортировка коллекции осуществляется автоматически при добавлении новых элементов. Элементы сортируются в порядке возрастания значения ключа. Работа с элементами может осуществляться как по ключу, так и по индексу: для получения или изменения значения элемента по ключу используется свойство [IDictionary.Item](../../Interface/IDictionary/IDictionary.Item.htm); для доступа к элементу по индексу используется метод [ISortedList.GetByIndex](../../Interface/ISortedList/ISortedList.GetByIndex.htm), для изменения значения элемента по индексу используется метод [ISortedList.SetByIndex](../../Interface/ISortedList/ISortedList.SetByIndex.htm).


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


## Методы объекта класса, унаследованные от [ISortedList](../../Interface/ISortedList/ISortedList.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Clone](../../Interface/ISortedList/ISortedList.Clone.htm)
		 Метод Clone создает
		 копию массива.


		 ![](../../Sub_Image.gif)
		 [ContainsKey](../../Interface/ISortedList/ISortedList.ContainsKey.htm)
		 Метод ContainsKey проверяет
		 наличие элемента с указанным ключом.


		 ![](../../Sub_Image.gif)
		 [ContainsValue](../../Interface/ISortedList/ISortedList.ContainsValue.htm)
		 Метод ContainsValue
		 проверяет наличие элемента с указанным значением.


		 ![](../../Sub_Image.gif)
		 [GetByIndex](../../Interface/ISortedList/ISortedList.GetByIndex.htm)
		 Метод GetByIndex возвращает
		 значение элемента с указанным индексом.


		 ![](../../Sub_Image.gif)
		 [GetKey](../../Interface/ISortedList/ISortedList.GetKey.htm)
		 Метод GetKey возвращает
		 ключ элемента по индексу.


		 ![](../../Sub_Image.gif)
		 [GetKeyList](../../Interface/ISortedList/ISortedList.GetKeyList.htm)
		 Метод GetKeyList возвращает
		 список ключей массива.


		 ![](../../Sub_Image.gif)
		 [GetValueList](../../Interface/ISortedList/ISortedList.GetValueList.htm)
		 Метод GetValueList
		 возвращает список значений массива.


		 ![](../../Sub_Image.gif)
		 [IndexOfKey](../../Interface/ISortedList/ISortedList.IndexOfKey.htm)
		 Метод IndexOfKey возвращает
		 индекс элемента по ключу.


		 ![](../../Sub_Image.gif)
		 [IndexOfValue](../../Interface/ISortedList/ISortedList.IndexOfValue.htm)
		 Метод IndexOfValue
		 возвращает индекс элемента по значению.


		 ![](../../Sub_Image.gif)
		 [RemoveAt](../../Interface/ISortedList/ISortedList.RemoveAt.htm)
		 Метод RemoveAt осуществляет
		 удаление элемента по индексу.


		 ![](../../Sub_Image.gif)
		 [SetByIndex](../../Interface/ISortedList/ISortedList.SetByIndex.htm)
		 Метод SetByIndex изменяет
		 значение элемента по индексу.


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
