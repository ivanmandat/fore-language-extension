# IMapTopobaseShape.Text

IMapTopobaseShape.Text
-


# IMapTopobaseShape.Text


## Синтаксис


Text: String;


## Описание


Свойство Text определяет подпись
 области.


## Комментарии


Для вывода значения области в качестве подписи используйте адаптер данных:


	- В описании адаптера данных добавьте поле для работы с показателями
	 карты типа [IMapAreaVisual](../IMapAreaVisual/IMapAreaVisual.htm),
	 например:


Public visual: IMapAreaVisual;


	- В процедуре работы с подписью области карты задайте значение
	 данного поля.


	- Задайте адаптер данных для показателей карты.


	- Задайте подпись области с помощью адаптера данных.


Например:


	Sub UserProc;

	Var

	    M: IMap;

	    Layer: IMapLayer;

	    Shape: IMapTopobaseShape;

	    da: VisualDataAdapter;

	Begin

	    M := UiMap1.Map;

	    Layer := M.Layers.FindByName("Regions");

	    Shape := Layer.Shapes.Item(0);

	    da := New VisualDataAdapter.Create;

	    Layer.Visuals.AddAreaVisual;

	    da.visual := Layer.Visuals.Item(0) As IMapAreaVisual;

	    da.visual.DataAdapter := da;

	    Shape.Text := (da.visual.DataAdapter As IMapDynamicDataAdapter).Data(shape.Id, 1);

	End Sub UserProc;


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта.


	Sub UserProc;

	Var

	    M: IMap;

	    Layer: IMapLayer;

	    Shape: IMapTopobaseShape;

	Begin

	    M := UiMap1.Map;

	    Layer := M.Layers.FindByName("Regions");

	    Shape := Layer.Shapes.Item(0);

	    Shape.Text := "Регион";

	    Layer.TextVisible := True;

	End Sub UserProc;


После выполнения примера, при нажатии на кнопку, на карте будет отображена
 подпись первой области: «Поволжье».


См. также:


[IMapTopobaseShape](IMapTopobaseShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
