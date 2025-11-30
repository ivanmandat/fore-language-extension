# IMapTerritoryInfo.AttributeName

IMapTerritoryInfo.AttributeName
-


# IMapTerritoryInfo.AttributeName


## Синтаксис


AttributeName: String;


## Описание


Свойство AttributeName определяет
 наименование атрибута для отображения расшифровки.


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

	    Map: IMap;

	    MapView: IMapView;

	    TerrI: IMapTerritoryInfo;

	    S: String;

	Begin

	    Map := UiMap1.Map;

	    MapView := Map.View;

	    TerrI := New DxMapTerritoryInfo.Create;

	    MapView.TerritoryInfo := TerrI;

	    TerrI.Layer := Map.Layers.FindByName("Regions");

	    S := TerrI.AttributeName;

	End Sub Button1OnClick;


После выполнения примера в переменной «S» будет храниться наименование
 атрибута для отображения расшифровки.


См. также:


[IMapTerritoryInfo](IMapTerritoryInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
