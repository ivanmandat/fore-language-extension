# IMapVisual.ResetCache

IMapVisual.ResetCache
-


# IMapVisual.ResetCache


## Синтаксис


ResetCache;


## Описание


Метод ResetCache осуществляет
 сброс кеша источника данных.


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

	    MapVisual: IMapVisual;

	Begin

	    Map := UiMap1.Map;

	    MapVisual := Map.FindVisual("Столбиковый0");

	    If MapVisual <> Null Then

	        MapVisual.ResetCache;

	    End If;

	End Sub Button1OnClick;


После выполнения примера будет произведен поиск показателя с наименованием
 «Столбиковый0». Если показатель будет найден, то для него будет сброшен
 кеш источника данных.


См. также:


[IMapVisual](IMapVisual.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
