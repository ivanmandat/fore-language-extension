# IMapTerritoryInfo.Draw

IMapTerritoryInfo.Draw
-


# IMapTerritoryInfo.Draw


## Синтаксис


Draw(Graphics: [IGxGraphics](ModDrawing.chm::/Interface/IGxGraphics/IGxGraphics.htm);
 Rect: [IGxRectF](ModDrawing.chm::/Interface/IGxRectF/IGxRectF.htm));


## Параметры


Graphics. Графический контекст
 для отрисовки;


Rect. Вещественный прямоугольник,
 в котором будет произведена отрисовка.


## Описание


Метод Draw выполняет отрисовку
 указанного прямоугольника расшифровки территорий.


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

	    TerrI: IMapTerritoryInfo;

	    Graphics: IGxGraphics;

	    BitMap: IGxBitmap;

	    Image: IGxImage;

	    Rect: IGxRectF;

	Begin

	    Map := UiMap1.Map;

	    TerrI := New DxMapTerritoryInfo.Create;

	    Map.View.TerritoryInfo := TerrI;

	    TerrI.Layer := Map.Layers.FindByName("Regions");

	    BitMap := TerrI.GetBitmap(150, 150, 92);

	    Image := BitMap.Clone;

	    Graphics := GxGraphicsClass.FromImage(Image);

	    Rect := New GxRectF.Create(0, 0, 20, 20);

	    TerrI.Draw(Graphics, Rect);

	End Sub Button1OnClick;


После выполнения примера указанный прямоугольник расшифровки территорий
 будет отрисован.


См. также:


[IMapTerritoryInfo](IMapTerritoryInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
