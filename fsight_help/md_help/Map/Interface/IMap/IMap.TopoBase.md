# IMap.TopoBase

IMap.TopoBase
-


# IMap.Topobase


## Синтаксис


TopoBase: [IMapTopobase](../IMapTopobase/IMapTopobase.htm);


## Описание


Свойство TopoBase определяет
 топооснову карты.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Map, Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MetaBase: IMetabase;

	    TopoBase: IMapTopobase;

	    Map: IMap;

	Begin

	    MetaBase := MetabaseClass.Active;

	    TopoBase := MetaBase.ItemById("MAP_RF").Bind As IMapTopobase;

	    Map := UiMap1.Map;

	    Map.Topobase := TopoBase;

	End Sub Button1OnClick;


После выполнения примера в компонент MapBox будет загружена карта «MAP_RF».


См. также:


[IMap](IMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
