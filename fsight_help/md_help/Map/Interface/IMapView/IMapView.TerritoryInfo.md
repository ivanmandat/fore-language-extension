# IMapView.TerritoryInfo

IMapView.TerritoryInfo
-


# IMapView.TerritoryInfo


## Синтаксис


TerritoryInfo: [IMapTerritoryInfo](../IMapTerritoryInfo/IMapTerritoryInfo.htm);


## Описание


Свойство TerritoryInfo определяет
 расшифровку территорий карты.


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

	    TerritoryInfo: IMapTerritoryInfo;

	    MapView: IMapView;

	    TerrRect: IGxRectF;

	Begin

	    Map := UiMap1.Map;

	    MapView := Map.View;

	    // Создадим расшифровку территорий карты

	    TerritoryInfo := New DxMapTerritoryInfo.Create;

	    TerritoryInfo.Layer := Map.Layers.FindByName("Regions");

	    MapView.TerritoryInfo := TerritoryInfo;

	    // Определим область карты, в которой будет располагаться расшифровка территорий

	    TerrRect := New GxRectF.Create(0, 0, 0.2, 1);

	    UiMap1.Map.View.TerritoryInfoRect := TerrRect;

	End Sub Button1OnClick;


После выполнения примера для карты (слой «Regions») будет создана расшифровка
 территорий и размещена с левой стороны карты.


См. также:


[IMapView](IMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
