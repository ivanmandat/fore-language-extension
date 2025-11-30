# IMapView.ScrollIntoView

IMapView.ScrollIntoView
-


# IMapView.ScrollIntoView


## Синтаксис


ScrollIntoView(Shape: [IMapTopobaseShape](../IMapTopobaseShape/IMapTopobaseShape.htm));


## Параметры


Shape. Область слоя карты.


## Описание


Метод ScrollIntoView помещает
 указанную область слоя карты в область видимости.


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

	    RectF: IGxRectF;

	    Layer: IMapLayer;

	    Shape: IMapTopobaseShape;

	Begin

	    Map := UiMap1.Map;

	    MapView := Map.View;

	    Layer := Map.Layers.FindByName("Regions");

	    // Определим область видимости карты

	    RectF := New GxRectF.Create(0.5, 0.5, 1.5, 1.5);

	    MapView.ViewRect := RectF;

	    // Поместим первую область слоя «Regions» в область видимости

	    Shape := Layer.Shapes.Item(0);

	    MapView.ScrollIntoView(Shape);

	End Sub Button1OnClick;


После выполнения примера будет определена область видимости карты, первая
 область слоя «Regions» будет помещена в эту область.


См. также:


[IMapView](IMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
