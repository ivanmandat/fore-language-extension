# BitArray

BitArray
-


# BitArray


## Описание


Класс BitArray реализует объект, представляющий динамический битовый массив.


## Комментарий


Элементы битового динамического массива могут хранить только логические значения: True или False. Для изменения размера массива используется свойство [Length](../../Interface/IBitArray/IBitArray.Length.htm). При обращении к элементу, индекс которого больше чем [Length](../../Interface/IBitArray/IBitArray.Length.htm), размер массива будет автоматически увеличен. По умолчанию всем элементам массива устанавливается значение False.


## Свойства объекта класса, унаследованные от [IBitArray](../../Interface/IBitArray/IBitArray.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Item](../../Interface/IBitArray/IBitArray.Item.htm)
		 Свойство Item определяет
		 значение элемента массива.


		 ![](../../Property_Image.gif)
		 [Length](../../Interface/IBitArray/IBitArray.Length.htm)
		 Свойство Length определяет
		 размер битового массива.


## Свойства объекта класса, унаследованные от [ICollection](../../Interface/ICollection/ICollection.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](../../Interface/ICollection/ICollection.Count.htm)
		 Свойство Count возвращает
		 количество элементов в массиве.


## Методы объекта класса, унаследованные от [IBitArray](../../Interface/IBitArray/IBitArray.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Clone](../../Interface/IBitArray/IBitArray.Clone.htm)
		 Метод Clone создает
		 копию массива.


		 ![](../../Sub_Image.gif)
		 [SetAll](../../Interface/IBitArray/IBitArray.SetAll.htm)
		 Метод SetAll устанавливает
		 всем битам массива значение True.


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
