# IMap.GetBitMap

IMap.GetBitMap
-


# IMap.GetBitmap


## Синтаксис


GetBitMap(Width: Integer; Height: Integer; Dpi:
 Double): [IGxBitmap](ModDrawing.chm::/Interface/IGxBitmap/IGxBitmap.htm);


## Параметры


Width. Ширина возвращаемого
 изображения в пикселях;


Height. Высота возвращаемого
 изображения в пикселях;


Dpi. Разрешение возвращаемого
 изображения.


## Описание


Метод GetBitmap возвращает графическое
 изображение карты по заданным параметрам.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Drawing, ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    Bitmap: IGxBitmap;

	Begin

	    Map := UiMap1.Map;

	    Bitmap := Map.GetBitmap(300, 150, 96);

	    Bitmap.SaveToFile("C:\Map.gif");

	End Sub Button1OnClick;


После выполнения примера графическое изображение карты будет сохранено
 в файл со следующими параметрами: ширина - 300 пикселей, высота - 150
 пикселей, разрешение - 96 dpi.


См. также:


[IMap](IMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
