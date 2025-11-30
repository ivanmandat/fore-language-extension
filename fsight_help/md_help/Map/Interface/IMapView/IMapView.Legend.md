# IMapView.Legend

IMapView.Legend
-


# IMapView.Legend


## Синтаксис


Legend: [IMapLegend](../IMapLegend/IMapLegend.htm);


## Описание


Свойство Legend определяет легенду
 карты.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки:
 ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Legend: IMapLegend;

	    MapView: IMapView;

	Begin

	    Legend := New DxMapLegend.Create;

	    MapView := UiMap1.Map.View;

	    MapView.Legend := Legend;

	    MapView.Refresh;

	End Sub Button1OnClick;


После выполнения примера для карты будет создана легенда.


См. также:


[IMapView](IMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
