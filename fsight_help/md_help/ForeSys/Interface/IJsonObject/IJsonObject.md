# IJsonObject

IJsonObject
-


# IJsonObject


Сборка: System;


## Описание


Интерфейс IJsonObject предназначен
 для работы с объектом в JSON-структуре.


## Иерархия наследования


           [IJsonElement](../IJsonElement/IJsonElement.htm)


           IJsonObject


## Комментарии


Объект в JSON-структуре представляет из себя набор элементов, имеющих
 определённое наименование и значение. Значением элемента в свою очередь
 может быть отдельный объект, массив или фиксированное значение определённого
 типа.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Contains](IJsonObject.Contains.htm)
		 Свойство Contains возвращает
		 признак наличия элемента с указанным именем.


		 ![](../../Property_Image.gif)
		 [Count](IJsonObject.Count.htm)
		 Свойство Count возвращает
		 количество дочерних элементов у объекта.


		 ![](../../Property_Image.gif)
		 [Item](IJsonObject.Item.htm)
		 Свойство Item возвращает
		 элемент с указанным именем.


		 ![](../../Property_Image.gif)
		 [ItemByIndex](IJsonObject.ItemByIndex.htm)
		 Свойство ItemByIndex
		 возвращает элемент с указанным индексом.


		 ![](../../Property_Image.gif)
		 [Property_](IJsonObject.Property_.htm)
		 Свойство Property_
		 возвращает имя элемента с указанным индексом.


## Свойства, унаследованные от [IJsonElement](../IJsonElement/IJsonElement.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AsArray](../IJsonElement/IJsonElement.AsArray.htm)
		 Свойство AsArray возвращает
		 элемент в виде массива.


		 ![](../../Property_Image.gif)
		 [AsBoolean](../IJsonElement/IJsonElement.AsBoolean.htm)
		 Свойство AsBoolean
		 возвращает элемент в виде логического значения.


		 ![](../../Property_Image.gif)
		 [AsDouble](../IJsonElement/IJsonElement.AsDouble.htm)
		 Свойство AsDouble возвращает
		 элемент в виде вещественного значения.


		 ![](../../Property_Image.gif)
		 [AsInteger](../IJsonElement/IJsonElement.AsInteger.htm)
		 Свойство AsInteger
		 возвращает элемент в виде целочисленного значения.


		 ![](../../Property_Image.gif)
		 [AsObject](../IJsonElement/IJsonElement.AsObject.htm)
		 Свойство AsObject возвращает
		 элемент в виде объекта.


		 ![](../../Property_Image.gif)
		 [AsString](../IJsonElement/IJsonElement.AsString.htm)
		 Свойство AsString возвращает
		 элемент в виде строкового значения.


		 ![](../../Property_Image.gif)
		 [GetType](../IJsonElement/IJsonElement.GetType.htm)
		 Свойство GetType возвращает
		 тип элемента.


## Методы, унаследованные от [IJsonElement](../IJsonElement/IJsonElement.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Query](../IJsonElement/IJsonElement.Query.htm)
		 Метод Query возвращает
		 массив элементов, полученных путём выполнения указанного JSONPath-запроса.


		 ![](../../Sub_Image.gif)
		 [WriteToStream](../IJsonElement/IJsonElement.WriteToStream.htm)
		 Метод WriteToStream
		 записывает текущий элемент в поток.


		 ![](../../Sub_Image.gif)
		 [WriteToString](../IJsonElement/IJsonElement.WriteToString.htm)
		 Метод WriteToString
		 возвращает строковое представление элемента.


См. также:


[Интерфейсы
 сборки System](../System_interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
