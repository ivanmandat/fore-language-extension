# IGxImageList.SaveToStream

IGxImageList.SaveToStream
-


# IGxImageList.SaveToStream


## Синтаксис


SaveToStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm);
 BgColor: [IGxColor](../IGxColor/IGxColor.htm)):
 Boolean;


## Параметры


Stream. Параметр,
 определяющий поток, в который будет сохранены изображения из коллекции.


BgColor. Цвет фона картинки.
 Если в качестве цвета фона передается Null,
 то цвет будет выбираться случайно.


## Описание


Метод SaveToStream сохраняет
 все изображения из коллекции в поток, который передается в качестве входного
 параметра Stream. Все изображения
 сохраняются в виде горизонтального ряда, и метод возвращает признак удачного
 сохранения.


## Пример


Пример использования приведен на странице описания метода [Add](IGxImageList.Add.htm).


См. также:


[IGxImageList](IGxImageList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
