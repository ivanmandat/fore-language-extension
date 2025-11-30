# Comparer

Comparer
-


# Comparer


## Описание


Класс Comparer реализует объект, используемый для сравнения элементов различного типа.


## Комментарий


Используя статические свойства данного класса можно получить один из доступных объектов для сравнения данных определенного типа. Для сравнения объектов предназначен метод [Compare](../../Interface/IComparer/IComparer.Compare.htm). В зависимости от выбранного типа объекта сравнения будут использоваться различные реализации метода [Compare](../../Interface/IComparer/IComparer.Compare.htm).


## Статические свойства, унаследованные от [IComparerClass](../../Interface/IComparerClass/IComparerClass.htm)


		  Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DateTimeComparer](../../Interface/IComparerClass/IComparerClass.DateTimeComparer.htm)
		 Свойство DateTimeComparer
		 возвращает объект для сравнения элементов типа DateTime.


		 ![](../../Property_Image.gif)
		 [DoubleComparer](../../Interface/IComparerClass/IComparerClass.DoubleComparer.htm)
		 Свойство DoubleComparer
		 возвращает объект для сравнения элементов вещественного типа.


		 ![](../../Property_Image.gif)
		 [FreeTextComparer](../../Interface/IComparerClass/IComparerClass.FreeTextComparer.htm)
		 Свойство FreeTextComparer
		 возвращает объект для свободного сравнения текста.


		 ![](../../Property_Image.gif)
		 [IntegerComparer](../../Interface/IComparerClass/IComparerClass.IntegerComparer.htm)
		 Свойство IntegerComparer
		 возвращает объект для сравнения элементов целого типа.


		 ![](../../Property_Image.gif)
		 [StringCaseInsensitiveComparer](../../Interface/IComparerClass/IComparerClass.StringCaseInsensitiveComparer.htm)
		 Свойство StringCaseInsensitiveComparer
		 возвращает объект для сравнения элементов строкового типа без
		 учета регистра.


		 ![](../../Property_Image.gif)
		 [StringComparer](../../Interface/IComparerClass/IComparerClass.StringComparer.htm)
		 Свойство StringComparer
		 возвращает объект для сравнения элементов строкового типа.


## Методы объекта класса, унаследованные от [IComparer](../../Interface/IComparer/IComparer.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Compare](../../Interface/IComparer/IComparer.Compare.htm)
		 Метод Compare осуществляет
		 сравнение X и Y.


См. также:


[Классы сборки Collections](../ModCollections_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
