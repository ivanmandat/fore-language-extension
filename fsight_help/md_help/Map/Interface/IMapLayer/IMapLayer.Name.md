# IMapLayer.Name

IMapLayer.Name
-


# IMapLayer.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет наименование слоя карты.


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

	    Layer: IMapLayer;

	Begin

	    Map := UiMap1.Map;

	    // Найдём слой с наименованием "Regions"

	    Layer := Map.Layers.FindByName("Regions");

	    // Отобразим слой "Regions"

	    Layer.Visible:= True;

	    // Переименуем слой "Regions"

	    Layer.Name := "MyRegions";

	End Sub Button1OnClick;


После выполнения примера слой «Regions» будет видимым и переименован
 в «MyRegions».


См. также:


[IMapLayer](IMapLayer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
