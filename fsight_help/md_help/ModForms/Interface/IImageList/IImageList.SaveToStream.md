# IImageList.SaveToStream

IImageList.SaveToStream
-


# IImageList.SaveToStream


## Синтаксис


SaveToStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm);
 BgColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm)):
 Boolean;


## Параметры


Stream. Параметр, определяющий
 поток, в который будет сохранены изображения из компонента.


BgColor. Цвет фона картинки.
 Если в качестве цвета фона передается Null, то цвет будет выбираться
 случайно.


## Описание


Метод SaveToStream сохраняет
 все изображения из компонента в поток, который передается в качестве входного
 параметра Stream. Все изображения
 "склеиваются" и сохраняются в виде горизонтальной линии, после
 чего, метод возвращает признак удачного сохранения.


См. также:


[IImageList](IImageList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
