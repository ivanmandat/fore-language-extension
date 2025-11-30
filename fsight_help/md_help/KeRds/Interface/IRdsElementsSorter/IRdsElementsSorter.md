# IRdsElementsSorter

IRdsElementsSorter
-


# IRdsElementsSorter


Сборка: Rds;


## Описание


Интерфейс IRdsElementsSorter
 содержит свойства и методы сортировки элементов справочника НСИ.


## Иерархия наследования


           IRdsElementsSorter


## Комментарии


На один справочник НСИ можно создать один сортировщик элементов справочника
 НСИ. Пересоздать или переиспользовать сортировщик нельзя.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attributes](IRdsElementsSorter.Attributes.htm)


		 Свойство Attributes
		 возвращает атрибуты сортировки элементов справочника НСИ.


		 ![](../../Property_Image.gif)
		 [Comparer](IRdsElementsSorter.Comparer.htm)


		 Свойство Comparer позволяет
		 задавать пользовательские функции для сравнения элементов по заданному
		 алгоритму.


		 ![](../../Property_Image.gif)
		 [Parent](IRdsElementsSorter.Parent.htm)


		 Свойство Parent возвращает
		 ключ элемента справочника НСИ, для которого создан объект, осуществляющий
		 сортировку.


		 ![](../../Property_Image.gif)
		 [ParentElement](IRdsElementsSorter.ParentElement.htm)


		 Свойство ParentElement
		 возвращает элемент справочника НСИ, для которого создан объект,
		 осуществляющий сортировку.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Move](IRdsElementsSorter.Move.htm)


		 Метод Move осуществляет
		 перестановку элемента, передаваемого посредством параметра SourceKey, в указанную позицию
		 относительно элемента, передаваемого посредством параметра TargetKey.


		 ![](../../Sub_Image.gif)
		 [MoveElement](IRdsElementsSorter.MoveElement.htm)


		 Метод MoveElement осуществляет
		 перемещение элемента справочника НСИ, передаваемого посредством
		 параметра Source в
		 позицию, указанную относительно элемента, передаваемого посредством
		 параметра Target.


		 ![](../../Sub_Image.gif)
		 [Revert](IRdsElementsSorter.Revert.htm)


		 Метод Revert возвращает
		 расположение элементов справочника НСИ в первоначальное состояние.


		 ![](../../Sub_Image.gif)
		 [Save](IRdsElementsSorter.Save.htm)


		 Метод Save позволяет
		 сохранить результаты сортировки элементов справочника в базу данных.


		 ![](../../Sub_Image.gif)
		 [Sort](IRdsElementsSorter.Sort.htm)


		 Метод Sort осуществляет
		 сортировку элементов справочника НСИ.


См. также:


[Интерфейсы сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
