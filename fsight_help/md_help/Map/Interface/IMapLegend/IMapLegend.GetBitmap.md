# IMapLegend.GetBitmap

IMapLegend.GetBitmap
-


# IMapLegend.GetBitmap


## Синтаксис


GetBitmap(Width: Integer; Height: Integer; Dpi:
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
 изображение легенды по заданным параметрам.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, ImageBox, UiMap с наименованиями Button1, MapBox1, ImageBox1 и
 UiMap1 соответственно. UiMap1 является источником данных для MapBox1.
 К компоненту UiMap1 должна быть подключена карта, содержащая только картографический
 показатель.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    Layer: IMapLayer;

	    Legend: IMapLegend;

	Begin

	    Map := UiMap1.Map;

	    Legend := New DxMapLegend.Create As IMapLegend;

	    Map.View.Legend := Legend;

	    Legend.Visible := True;

	    Layer := Map.Layers.FindByName("Regions");

	    Legend.Visual := Layer.Visuals.Item(0);

	    ImageBox1.Image := Legend.GetBitmap(ImageBox1.Width,ImageBox1.Height,96);

	End Sub Button1OnClick;


После выполнения примера в компонент «ImageBox1» будет загружено графическое
 изображение легенды карты.


См. также:


[IMapLegend](IMapLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
