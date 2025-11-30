# IMapLegend.Draw

IMapLegend.Draw
-


# IMapLegend.Draw


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
 легенды в указанном прямоугольнике.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, ImageBox, UiMap с наименованиями Button1, MapBox1, ImageBox1 и
 UiMap1 соответственно. UiMap1 является источником данных для MapBox1.
 К компоненту UiMap1 должна быть подключена карта, содержащая только картографический
 показатель.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Drawing, ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    Layer: IMapLayer;

	    Legend: IMapLegend;

	    BitMap: IGxBitmap;

	    Graphics: IGxGraphics;

	    Rect: IGxRectF;

	Begin

	    Map := UiMap1.Map;

	    Legend := New DxMapLegend.Create As IMapLegend;

	    Map.View.Legend := Legend;

	    Legend.Visible := True;

	    Layer := Map.Layers.FindByName("Regions");

	    Legend.Visual := Layer.Visuals.Item(0);

	    BitMap := GxBitmap.CreateNew(ImageBox1.ClientWidth, ImageBox1.ClientHeight, GxPixelFormat.Format32bppArgb);

	    Graphics := GxGraphicsClass.FromImage(BitMap);

	    Rect := New GxRectF.Create(0, 0, ImageBox1.Width, ImageBox1.Height);

	    Legend.Draw(Graphics, Rect);

	    ImageBox1.Image := BitMap;

	End Sub Button1OnClick;


После выполнения примера в компоненте «ImageBox1» будет содержаться
 отрисованная легенда карты.


См. также:


[IMapLegend](IMapLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
