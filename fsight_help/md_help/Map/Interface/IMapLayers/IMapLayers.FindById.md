# IMapLayers.FindById

IMapLayers.FindById
-


# IMapLayers.FindById


## Синтаксис


FindById (LayerId: Integer): [IMapLayer](../IMapLayer/IMapLayer.htm);


## Параметры


LayerId. Идентификатор слоя.


## Описание


Свойство FindById возвращает
 слой по его идентификатору.


## Комментарии


Идентификатор слоя передается посредством параметра LayerId.


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

	    Layers: IMapLayers;

	    Layer: IMapLayer;

	Begin

	    Map := UiMap1.Map;

	    Layers := Map.Layers;

	    // Найдём слой по его идентификатору

	    Layer := Layers.FindById(30002);

	    Debug.WriteLine ("Наименование слоя: " + Layer.Name);

	    // Найдём слой по его наименованию

	    Layer := Layers.FindByName("Regions");

	    Debug.WriteLine ("Идентификатор слоя: " + Layer.Id.ToString);

	End Sub Button1OnClick;


После выполнения примера в консоль будут выведены:


	- наименование слоя, найденного по его идентификатору «30002»;


	- идентификатор слоя, найденный по его наименованию «Regions».


См. также:


[IMapLayers](IMapLayers.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
