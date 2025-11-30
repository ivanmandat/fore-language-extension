# IMapTerritoryInfo.FillByRows

IMapTerritoryInfo.FillByRows
-


# IMapTerritoryInfo.FillByRows


## Синтаксис


FillByRows: Boolean;


## Описание


Свойство FillByRows определяет
 порядок размещения элементов расшифровки.


## Комментарии


Допустимые значения:


	- True. Элементы в расшифровке
	 будут размещены по строкам (снизу);


	- False. Элементы в расшифровке
	 будут размещены по столбцам (сверху).


![](IMapTerritoryInfo.FillByRows.gif)


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

	    TerrI: IMapTerritoryInfo;

	Begin

	    Map := UiMap1.Map;

	    TerrI := New DxMapTerritoryInfo.Create;

	    Map.View.TerritoryInfo := TerrI;

	    TerrI.Layer := Map.Layers.FindByName("Regions");

	    TerrI.FillByRows := True;

	End Sub Button1OnClick;


После выполнения примера элементы расшифровки будут размещены по строкам.


См. также:


[IMapTerritoryInfo](IMapTerritoryInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
