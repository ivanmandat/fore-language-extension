# IMapTopobaseShape.PieOriginOffset

IMapTopobaseShape.PieOriginOffset
-


# IMapTopobaseShape.PieOriginOffset


## Синтаксис


PieOriginOffset: [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm);


## Описание


Свойство PieOriginOffset определяет
 параметры точки привязки кругового показателя.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта. На карте должны быть настроены круговые показатели.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки:
 Drawing, ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    M: IMap;

	    Point: IGxPointF;

	    Layer: IMapLayer;

	    Shape: IMapTopobaseShape;

	Begin

	    M := UiMap1.Map;

	    Layer := M.Layers.FindByName("Regions");

	    Shape := Layer.Shapes.Item(0);

	    Point := Shape.PieOriginOffset;

	    Point.Offset(0.1, 0.3);

	    Shape.PieOriginOffset:= Point;

	End Sub Button1OnClick;


После выполнения примера, при нажатии на кнопку, круговой показатель
 первой области будет смещен на «0,1» по оси Х и на «0,3» по оси Y.


См. также:


[IMapTopobaseShape](IMapTopobaseShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
