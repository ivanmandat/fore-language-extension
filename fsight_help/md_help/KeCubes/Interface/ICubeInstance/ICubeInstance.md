# ICubeInstance

ICubeInstance
-


# ICubeInstance


## Описание


Интерфейс ICubeInstance содержит
 свойства и методы для работы с открытым экземпляром куба.


## Комментарии


Для получения открытого экземпляра куба выполните для соответствующего
 объекта репозитория метод [IMetabaseObjectDescriptor.Open](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm)
 или [IMetabaseObjectDescriptor.OpenWithParam](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.OpenWithParam.htm)
 и приведите полученный объект к интерфейсу ICubeInstance.
 Интерфейс ICubeInstance поддерживают
 все виды кубов данных платформы.


Для получения базовой информации об открытом экземпляре куба (описание
 куба, который был открыт, параметры открытия и прочее) соответствующий
 объект в коде может быть приведен к интерфейсу [IMetabaseObjectInstance](KeSom.chm::/Interface/IMetabaseObjectInstance/IMetabaseObjectInstance.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cube](ICubeInstance.Cube.htm)


		 Свойство Cube возвращает
		 параметры модели куба.


		 ![](../../Property_Image.gif)
		 [Destinations](ICubeInstance.Destinations.htm)


		 Свойство Destinations
		 возвращает параметры вариантов отображения отстроенного куба.


		 ![](../../Property_Image.gif)
		 [Sources](ICubeInstance.Sources.htm)


		 Свойство Sources возвращает
		 параметры отстроенных кубов, являющихся источниками данных для
		 данного куба.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetExtensionDispatch](ICubeInstance.GetExtensionDispatch.htm)


		 Метод GetExtensionDispatch
		 осуществляет преобразование к общей форме объекта, от которой
		 в дальнейшем можно перейти к необходимому классу объектов.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
