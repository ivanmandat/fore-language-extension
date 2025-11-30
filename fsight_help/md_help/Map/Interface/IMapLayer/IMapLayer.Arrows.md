# IMapLayer.Arrows

IMapLayer.Arrows
-


# IMapLayer.Arrows


## Синтаксис


Arrows: [IMapLayerArrows](../IMapLayerArrows/IMapLayerArrows.htm);


## Описание


Свойство Arrows возвращает коллекцию
 стрелок слоя карты.


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

	    i: Integer;

	    s: String;

	Begin

	    Map := UiMap1.Map;

	    Layer := Map.Layers.FindByName("Regions");

	    s := Layer.Description;

	    Debug.WriteLine("Описание слоя «Regions» " + s);

	    i := Layer.Id;

	    Debug.WriteLine("Идентификатор слоя «Regions» " + i.ToString);

	    i := Layer.Shapes.Count;

	    Debug.WriteLine("Число областей, из которых состоит слой «Regions» " + i.ToString);

	    i := Layer.Arrows.Count;

	    Debug.WriteLine("Число стрелок на слое «Regions» " + i.ToString);

	    s := Layer.AttributeNames.Item(0);

	    Debug.WriteLine("Наименование первого атрибута слоя «Regions» " + s);

	    i := Layer.ChildLayers.Count;

	    Debug.WriteLine("Количество дочерних слоёв для слоя «Regions» " + i.ToString);

	    S := Layer.Owner.Name;

	    Debug.WriteLine("Наименование слоя-родителя для слоя «Regions» " + s);

	    i := Layer.Visuals.Count;

	    Debug.WriteLine("Число показателей на слое «Regions» " + i.ToString);

	End Sub Button1OnClick;


После выполнения примера в консоль будет выведена информация о слое
 «Regions»:


	- описание слоя;


	- идентификатор слоя;


	- число областей, из которых состоит слой;


	- число стрелок на слое;


	- наименование первого атрибута на слое;


	- количество дочерних слоёв для слоя;


	- наименование слоя-родителя для слоя;


	- число показателей.


См. также:


[IMapLayer](IMapLayer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
