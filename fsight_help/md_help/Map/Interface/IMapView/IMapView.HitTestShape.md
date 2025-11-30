# IMapView.HitTestShape

IMapView.HitTestShape
-


# IMapView.HitTestShape


## Синтаксис


HitTestShape(Point: [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm)):
 [IMapTopobaseShape](../IMapTopobaseShape/IMapTopobaseShape.htm);


## Параметры


Point. Точка, в которой необходимо
 получить область карты.


## Описание


Метод HitTestShape позволяет
 получить область карты в заданной точке карты.


## Комментарии


При выполнении метода HitTestShape
 осуществляется проверка наличия области карты, графическое представление
 которой находится в области точки Point.
 Если область карты существует, то метод вернет её параметры, иначе метод
 вернет значение Null.


См. также:


[IMapView](IMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
