# IGxImageList.LoadFromStream

IGxImageList.LoadFromStream
-


# IGxImageList.LoadFromStream


## Синтаксис


		LoadFromStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm);
		 [Transparent: [IGxColor](../IGxColor/IGxColor.htm)
		 = Null]);


## Параметры


Stream. Поток, из которого
 будет загружено изображение в коллекцию;


Transparent. Цвет, который
 будет использоваться как прозрачный.


## Описание


Метод LoadFromStream осуществляет
 загрузку изображения в коллекцию из потока, который передается в качестве
 входного параметра Stream.


## Комментарии


В коллекции могут быть только 32-битные изображения в формате *.png
 и 24-битные изображения в формате *.bmp.


## Пример


Использование метода приведено в примере для [IGxImageList.SaveToDoc.](IGxImageList.SaveToDoc.htm)


См. также:


[IGxImageList](IGxImageList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
