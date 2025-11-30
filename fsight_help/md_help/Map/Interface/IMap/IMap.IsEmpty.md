# IMap.IsEmpty

IMap.IsEmpty
-


# IMap.IsEmpty


## Синтаксис


IsEmpty: Boolean;


## Описание


Свойство IsEmpty возвращает
 признак того, загружена ли карта.


## Комментарии


Свойство доступно только для чтения.


Допустимые значения:


	- True. Карта не загружена;


	- False - карта загружена.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    TerritoryInfo: IMapTerritoryInfo;

	    MapView: IMapView;

	Begin

	    Map := UiMap1.Map;

	    If Not Map.IsEmpty Then

	        MapView := Map.View;

	        TerritoryInfo := New DxMapTerritoryInfo.Create;

	        TerritoryInfo.Layer := Map.Layers.FindByName("Regions");

	        MapView.TerritoryInfo := TerritoryInfo;

	    End If;

	End Sub Button1OnClick;


После выполнения примера будет отображена расшифровка территорий для
 слоя «Regions», если карта загружена.


См. также:


[IMap](IMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
