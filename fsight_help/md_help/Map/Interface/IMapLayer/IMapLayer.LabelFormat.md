# IMapLayer.LabelFormat

IMapLayer.LabelFormat
-


# IMapLayer.LabelFormat


## Синтаксис


LabelFormat: String;


## Описание


Свойство LabelFormat определяет
 текст подписи.


## Комментарии


Свойство актуально, если не задано свойство [TextDataAdapter](IMapLayer.TextDataAdapter.htm).


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

	    Layer := Map.Layers.FindByName("Regions");

	    Layer.LabelFormat := "Custom Label";

	End Sub Button1OnClick;


После выполнения примера у слоя «Regions» будет отображаться подпись
 в «Custom Label».


См. также:


[IMapLayer](IMapLayer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
