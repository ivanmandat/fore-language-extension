# IMapMarkerVisual.Latitude

IMapMarkerVisual.Latitude
-


# IMapMarkerVisual.Latitude


## Синтаксис


Latitude: [IMapVisualNumericProperty](../IMapVisualNumericProperty/IMapVisualNumericProperty.htm);


## Описание


Свойство Latitude возвращает
 параметры широты маркера геолокации.


## Комментарии


Для работы с параметрами долготы маркера геолокации используйте свойство
 [IMapMarkerVisual.Longitude](IMapMarkerVisual.Longitude.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов MapBox,
 UiMap с наименованиями MapBox1 и UiMap1 соответственно. UiMap1 является
 источником данных для MapBox1. К компоненту UiMap1 должна быть подключена
 карта. Также в примере используется класс VisualDynamicDataAdapter, описание
 которого приведено в [IMapTimeDynamicDataAdapter.Data](../IMapTimeDynamicDataAdapter/IMapTimeDynamicDataAdapter.Data.htm).


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки:
 Drawing, Metabase.


	Sub UserProc;

	Var

	    Map: IMap;

	    Layer: IMapLayer;

	    MarkerVis: IMapMarkerVisual;

	    Color: IMapVisualColorProperty;

	    ColorCollection: IMapColorCollection;

	    NumProp: IMapVisualNumericProperty;

	    ItemsNames: Array[1] Of string;

	Begin

	    // Получаем карту

	    Map := UiMap1.Map;

	    // Получаем слой «Regions»

	    Layer := Map.Layers.FindByName("Regions");

	    // Добавляем маркер геолокации

	    MarkerVis := Layer.Visuals.AddMarkerVisual;

	    MarkerVis.BeginUpdate;

	    // Задаем источник данных для маркера

	    MarkerVis.DataAdapter := New VisualDynamicDataAdapter.Create As IMapTimeDynamicDataAdapter;

	    MarkerVis.Visible := True;

	    // Задаем цвет маркера

	    Color := MarkerVis.Color;

	    Color.Dependent := False;

	    ColorCollection := Color.Values;

	    ColorCollection.Count := 1;

	    ColorCollection.Item(0) := GxColor.FromName("Blue");

	    // Задаем долготу маркера

	    NumProp := MarkerVis.Longitude;

	    NumProp.Dependent := False;

	    NumProp.Value := 41.850033;

	    // Задаем широту маркера

	    NumProp := MarkerVis.Latitude;

	    NumProp.Dependent := False;

	    NumProp.Value := -87.6500523;

	    // Задаем название маркера

	    ItemsNames[0] := "Маркер геолокации";

	    MarkerVis.ItemsNames := ItemsNames;

	    MarkerVis.EndUpdate;

	End Sub UserProc;


После выполнения примера на карту будет добавлен маркер геолокации.


См. также:


[IMapMarkerVisual](IMapMarkerVisual.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
