# IMapLayerVisuals.Remove

IMapLayerVisuals.Remove
-


# IMapLayerVisuals.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс показателя в
 коллекции.


## Описание


Метод Remove удаляет показатель
 из коллекции по его индексу.


## Комментарии


Допустимые значения:


	- True. Удаление прошло
	 успешно;


	- False. Удаление завершилось
	 с ошибками.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта, содержащая показатели на слое «Regions».


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Drawing, ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    Layer: IMapLayer;

	    Visuals: IMapLayerVisuals;

	Begin

	    Map := UiMap1.Map;

	    Layer := Map.Layers.FindByName("Regions");

	    Visuals := Layer.Visuals;

	    Visuals.Remove(0);

	End Sub Button1OnClick;


После выполнения примера со слоя «Regions» будет удален первый показатель
 из коллекции.


См. также:


[IMapLayerVisuals](IMapLayerVisuals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
