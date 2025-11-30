# IMapView.GetImage

IMapView.GetImage
-


# IMapView.GetImage


## Синтаксис


GetImage(Metafile: Boolean; Width: Integer; Height:
 Integer): [IGxImage](ModDrawing.chm::/Interface/IGxImage/IGxImage.htm);


## Параметры


Metafile. Признак того, что
 возвращаемое изображение должно быть в формате метафайла;


Width. Длина возвращаемого
 изображения;


Height. Ширина возвращаемого
 изображения.


## Описание


Метод GetImage возвращает графическое
 изображение указанной области карты и объектов, расположенных на ней.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки:
 Drawing, ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    MapView: IMapView;

	    Image: IGxImage;

	Begin

	    Map := UiMap1.Map;

	    MapView := Map.View;

	    Image := MapView.GetImage(True, MapBox1.Width, MapBox1.Height);

	    Image.SaveToFile("C:\Map.bmp");

	End Sub Button1OnClick;


После выполнения примера вся область карты в виде графического изображения
 будет сохранена в файл «C:\Map.bmp».


См. также:


[IMapView](IMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
