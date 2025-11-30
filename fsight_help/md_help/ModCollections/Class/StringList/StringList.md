# StringList

StringList
-


# StringList


## Описание


Класс StringList реализует объект,
 представляющий собой динамический массив строк.


## Комментарий


Динамический массив строк является аналогом динамического массива [ArrayList](../ArrayList/ArrayList.htm), каждый элемент которого
 хранит строковое значение. Общие принципы работе с динамическим массивом
 строк такие же как и с массивом [ArrayList](../ArrayList/ArrayList.htm).
 Для добавления элементов в массив используются методы [Add](../../Interface/IStringList/IStringList.Add.htm),
 либо [AddRange](../../Interface/IStringList/IStringList.AddRange.htm).
 Также массив можно получить путем разбиения строки, используя какой-либо
 разделитель. Для этого используются свойства [AsString](../../Interface/IStringList/IStringList.AsString.htm)
 и [Text](../../Interface/IStringList/IStringList.Text.htm).
 В массиве доступна сортировка, а также различные виды поиска элементов.


## Свойства объекта класса, унаследованные
 от [IStringList](../../Interface/IStringList/IStringList.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AsString](../../Interface/IStringList/IStringList.AsString.htm)
		 Свойство AsString определяет
		 массив как текстовую строку, используя разделитель - «{Перевод
		 строки}».


		 ![](../../Property_Image.gif)
		 [Item](../../Interface/IStringList/IStringList.Item.htm)
		 Свойство Item возвращает
		 значение элемента массива строк.


		 ![](../../Property_Image.gif)
		 [ItemLength](../../Interface/IStringList/IStringList.ItemLength.htm)
		 Свойство ItemLength
		 возвращает длину элемента массива.


		 ![](../../Property_Image.gif)
		 [Text](../../Interface/IStringList/IStringList.Text.htm)
		 Свойство Text определяет
		 массив как текстовую строку, используя разделитель, передаваемый
		 в качестве входного параметра.


## Свойства объекта класса, унаследованные от [ICollection](../../Interface/ICollection/ICollection.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](../../Interface/ICollection/ICollection.Count.htm)
		 Свойство Count возвращает
		 количество элементов в массиве.


## Методы объекта класса, унаследованные от [IStringList](../../Interface/IStringList/IStringList.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](../../Interface/IStringList/IStringList.Add.htm)
		 Метод Add добавляет
		 новый элемент с указанным значением в конец массива и возвращает
		 его индекс.


		 ![](../../Sub_Image.gif)
		 [AddRange](../../Interface/IStringList/IStringList.AddRange.htm)
		 Метод AddRange добавляет
		 указанную коллекцию элементов в конец массива.


		 ![](../../Sub_Image.gif)
		 [BinarySearch](../../Interface/IStringList/IStringList.BinarySearch.htm)
		 Метод BinarySearch
		 осуществляет двоичный поиск элемента в массиве.


		 ![](../../Sub_Image.gif)
		 [BinarySearchRange](../../Interface/IStringList/IStringList.BinarySearchRange.htm)
		 Метод BinarySearchRange
		 осуществляет двоичный поиск элемента в диапазоне массива.


		 ![](../../Sub_Image.gif)
		 [Clear](../../Interface/IStringList/IStringList.Clear.htm)
		 Метод Clear осуществляет
		 очистку массива.


		 ![](../../Sub_Image.gif)
		 [Clone](../../Interface/IStringList/IStringList.Clone.htm)
		 Метод Clone создает
		 копию массива.


		 ![](../../Sub_Image.gif)
		 [Contains](../../Interface/IStringList/IStringList.Contains.htm)
		 Метод Contains осуществляет
		 проверку наличия элемента.


		 ![](../../Sub_Image.gif)
		 [CopyFrom](../../Interface/IStringList/IStringList.CopyFrom.htm)
		 Метод CopyFrom осуществляет
		 копирование данных из источника.


		 ![](../../Sub_Image.gif)
		 [GetRange](../../Interface/IStringList/IStringList.GetRange.htm)
		 Метод GetRange возвращает
		 диапазон массива в соответствии с заданными параметрами.


		 ![](../../Sub_Image.gif)
		 [IndexOf](../../Interface/IStringList/IStringList.IndexOf.htm)
		 Метод IndexOf осуществляет
		 прямой поиск значения.


		 ![](../../Sub_Image.gif)
		 [IndexOfPos](../../Interface/IStringList/IStringList.IndexOfPos.htm)
		 Метод IndexOfPos осуществляет
		 прямой поиск значения с определенного элемента.


		 ![](../../Sub_Image.gif)
		 [IndexOfRange](../../Interface/IStringList/IStringList.IndexOfRange.htm)
		 Метод IndexOfRange
		 осуществляет прямой поиск элемента в заданном диапазоне.


		 ![](../../Sub_Image.gif)
		 [Insert](../../Interface/IStringList/IStringList.Insert.htm)
		 Метод Insert осуществляет
		 вставку элемента в заданную позицию.


		 ![](../../Sub_Image.gif)
		 [InsertRange](../../Interface/IStringList/IStringList.InsertRange.htm)
		 Метод InsertRange осуществляет
		 вставку коллекции элементов в заданную позицию.


		 ![](../../Sub_Image.gif)
		 [LastIndexOf](../../Interface/IStringList/IStringList.LastIndexOf.htm)
		 Метод LastIndexOf осуществляет
		 обратный поиск значения.


		 ![](../../Sub_Image.gif)
		 [LastIndexOfPos](../../Interface/IStringList/IStringList.LastIndexOfPos.htm)
		 Метод LastIndexOfPos
		 осуществляет обратный поиск значения, начиная с заданной позиции.


		 ![](../../Sub_Image.gif)
		 [LastIndexOfRange](../../Interface/IStringList/IStringList.LastIndexOfRange.htm)
		 Метод LastIndexOfRange
		 осуществляет обратный поиск элемента в заданном диапазоне.


		 ![](../../Sub_Image.gif)
		 [Remove](../../Interface/IStringList/IStringList.Remove.htm)
		 Метод Remove осуществляет
		 удаление элемента с указанным значением.


		 ![](../../Sub_Image.gif)
		 [RemoveAt](../../Interface/IStringList/IStringList.RemoveAt.htm)
		 Метод Remove осуществляет
		 удаление элемента с указанным индексом.


		 ![](../../Sub_Image.gif)
		 [RemoveRange](../../Interface/IStringList/IStringList.RemoveRange.htm)
		 Метод RemoveRange осуществляет
		 удаление диапазона элементов.


		 ![](../../Sub_Image.gif)
		 [Reverse](../../Interface/IStringList/IStringList.Reverse.htm)
		 Метод Reverse осуществляет
		 переворот массива.


		 ![](../../Sub_Image.gif)
		 [ReverseRange](../../Interface/IStringList/IStringList.ReverseRange.htm)
		 Метод ReverseRange
		 осуществляет переворот диапазона массива.


		 ![](../../Sub_Image.gif)
		 [Sort](../../Interface/IStringList/IStringList.Sort.htm)
		 Метод Sort осуществляет
		 сортировку массива по возрастанию.


		 ![](../../Sub_Image.gif)
		 [SortRange](../../Interface/IStringList/IStringList.SortRange.htm)
		 Метод SortRange осуществляет
		 сортировку диапазона массива по возрастанию.


		 ![](../../Sub_Image.gif)
		 [ToArray](../../Interface/IStringList/IStringList.ToArray.htm)
		 Метод ToArray осуществляет
		 преобразование к обычному строковуму массиву.


## Методы объекта класса, унаследованные от
 [ICollection](../../Interface/ICollection/ICollection.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CopyTo](../../Interface/ICollection/ICollection.CopyTo.htm)
		 Метод CopyTo осуществляет
		 копирование коллекции в массив.


См. также:


[Классы
 сборки Collections](../ModCollections_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
