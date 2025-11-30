# IMap.View

IMap.View
-


# IMap.View


## Синтаксис


View: [IMapView](../IMapView/IMapView.htm);


## Описание


Свойство View определяет настройки
 отображения карты и объектов, расположенных на карте.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    M: IMap;

	    View: IMapView;

	Begin

	    M := UiMap1.Map;

	    View := M.View;

	    View.WndMode := MapViewWndMode.ZoomIn;

	End Sub Button1OnClick;


После выполнения примера, карта перейдет в режим увеличения масштаба.


См. также:


[IMap](IMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
