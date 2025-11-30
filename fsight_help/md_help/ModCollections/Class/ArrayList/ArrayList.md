# ArrayList

ArrayList
-


# ArrayList


## Описание


Класс ArrayList реализует объект, представляющий из себя динамический массив элементов.


## Комментарий


Элементы динамического массива могут хранить любые данные. Объем массива - это количество элементов, которые могут быть помещены в массив. Объем массива задается в свойстве [Capacity](../../Interface/IArrayList/IArrayList.Capacity.htm). Используя свойство [Count](../../Interface/ICollection/ICollection.Count.htm) можно узнать фактическое количество элементов, содержащихся в массиве. Для добавления элементов в массив используются методы [Add](../../Interface/IList/IList.Add.htm), либо [AddRange](../../Interface/IArrayList/IArrayList.AddRange.htm). При превышении объема, установленного в свойстве [Capacity](../../Interface/IArrayList/IArrayList.Capacity.htm), объем массива автоматически увеличивается. В массиве доступна сортировка, а также различные виды поиска элементов.


## Свойства объекта класса, унаследованные от [IArrayList](../../Interface/IArrayList/IArrayList.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Capacity](../../Interface/IArrayList/IArrayList.Capacity.htm)
		 Свойство Capacity определяет
		 количество элементов, которое может содержаться в массиве.


		 ![](../../Property_Image.gif)
		 [Item](../../Interface/IArrayList/IArrayList.Item.htm)
		 Свойство Item возвращает
		 значение элемента по индексу.


## Свойства объекта класса, унаследованные от [ICollection](../../Interface/ICollection/ICollection.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](../../Interface/ICollection/ICollection.Count.htm)
		 Свойство Count возвращает
		 количество элементов в массиве.


## Методы объекта класса, унаследованные от [IArrayList](../../Interface/IArrayList/IArrayList.htm)


		  Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddRange](../../Interface/IArrayList/IArrayList.AddRange.htm)
		 Метод AddRange осуществляет
		 добавление коллекции в конец массива.


		 ![](../../Sub_Image.gif)
		 [BinarySearch](../../Interface/IArrayList/IArrayList.BinarySearch.htm)
		 Метод BinarySearch
		 осуществляет двоичный поиск элемента в массиве.


		 ![](../../Sub_Image.gif)
		 [BinarySearchRange](../../Interface/IArrayList/IArrayList.BinarySearchRange.htm)
		 Метод BinarySearchRange
		 осуществляет двоичный поиск элемента в диапазоне массива.


		 ![](../../Sub_Image.gif)
		 [Clone](../../Interface/IArrayList/IArrayList.Clone.htm)
		 Метод Clone создает
		 копию массива.


		 ![](../../Sub_Image.gif)
		 [GetRange](../../Interface/IArrayList/IArrayList.GetRange.htm)
		 Метод GetRange возвращает
		 диапазон массива в соответствии с указанными параметрами.


		 ![](../../Sub_Image.gif)
		 [IndexOfPos](../../Interface/IArrayList/IArrayList.IndexOfPos.htm)
		 Метод IndexOfPos осуществляет
		 прямой поиск значения начиная с определенного элемента.


		 ![](../../Sub_Image.gif)
		 [IndexOfRange](../../Interface/IArrayList/IArrayList.IndexOfRange.htm)
		 Метод IndexOfRange
		 осуществляет прямой поиск элемента в диапазоне.


		 ![](../../Sub_Image.gif)
		 [InsertRange](../../Interface/IArrayList/IArrayList.InsertRange.htm)
		 Метод InsertRange осуществляет
		 вставку коллекции элементов в заданную позицию.


		 ![](../../Sub_Image.gif)
		 [LastIndexOf](../../Interface/IArrayList/IArrayList.LastIndexOf.htm)
		 Метод LastIndexOf осуществляет
		 обратный поиск значения.


		 ![](../../Sub_Image.gif)
		 [LastIndexOfPos](../../Interface/IArrayList/IArrayList.LastIndexOfPos.htm)
		 Метод LastIndexOfPos
		 осуществляет обратный поиск значения начиная с определенного элемента.


		 ![](../../Sub_Image.gif)
		 [LastIndexOfRange](../../Interface/IArrayList/IArrayList.LastIndexOfRange.htm)
		 Метод LastIndexOfRange
		 осуществляет обратный поиск элемента в диапазоне.


		 ![](../../Sub_Image.gif)
		 [RemoveRange](../../Interface/IArrayList/IArrayList.RemoveRange.htm)
		 Метод RemoveRange осуществляет
		 удаление диапазона значений.


		 ![](../../Sub_Image.gif)
		 [Reverse](../../Interface/IArrayList/IArrayList.Reverse.htm)
		 Метод Reverse устанавливает
		 обратный порядок элементов массива.


		 ![](../../Sub_Image.gif)
		 [ReverseRange](../../Interface/IArrayList/IArrayList.ReverseRange.htm)
		 Метод ReverseRange
		 устанавливает обратный порядок диапазона элементов массива.


		 ![](../../Sub_Image.gif)
		 [Sort](../../Interface/IArrayList/IArrayList.Sort.htm)
		 Метод Sort осуществляет
		 сортировку массива.


		 ![](../../Sub_Image.gif)
		 [SortRange](../../Interface/IArrayList/IArrayList.SortRange.htm)
		 Метод SortRange осуществляет
		 сортировку диапазона массива.


		 ![](../../Sub_Image.gif)
		 [ToArray](../../Interface/IArrayList/IArrayList.ToArray.htm)
		 Метод ToArray осуществляет
		 преобразование в обычный массив.


		 ![](../../Sub_Image.gif)
		 [TrimToSize](../../Interface/IArrayList/IArrayList.TrimToSize.htm)
		 Метод TrimToSize устанавливает
		 размер массива, равный фактическому количеству элементов в массиве.


## Методы объекта класса, унаследованные от [IList](../../Interface/IList/IList.htm)


		  Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](../../Interface/IList/IList.Add.htm)


		 Метод Add осуществляет
		 добавление элемента и возвращает его индекс.


		 ![](../../Sub_Image.gif)
		 [Clear](../../Interface/IList/IList.Clear.htm)


		 Метод Clear осуществляет
		 очистку списка.


		 ![](../../Sub_Image.gif)
		 [Contains](../../Interface/IList/IList.Contains.htm)


		 Метод Contains осуществляет
		 проверку наличия элемента.


		 ![](../../Sub_Image.gif)
		 [IndexOf](../../Interface/IList/IList.IndexOf.htm)


		 Метод IndexOf осуществляет
		 поиск значения Value и
		 возвращает индекс в списке.


		 ![](../../Sub_Image.gif)
		 [Insert](../../Interface/IList/IList.Insert.htm)


		 Метод Insert осуществляет
		 добавление элемента в заданную позицию.


		 ![](../../Sub_Image.gif)
		 [Remove](../../Interface/IList/IList.Remove.htm)


		 Метод Remove осуществляет
		 удаление элемента по значению.


		 ![](../../Sub_Image.gif)
		 [RemoveAt](../../Interface/IList/IList.RemoveAt.htm)


		 Метод RemoveAt осуществляет
		 удаление элемента в заданной позиции.


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
