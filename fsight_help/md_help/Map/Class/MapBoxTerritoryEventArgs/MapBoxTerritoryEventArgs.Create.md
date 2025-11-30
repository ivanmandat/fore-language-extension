# MapBoxTerritoryEventArgs.Create

MapBoxTerritoryEventArgs.Create
-


# MapBoxTerritoryEventArgs.Create


## Синтаксис


Create(TerritoryId: String);


## Описание


Конструктор Create создает аргумент
 события, возникающего при нажатии на какой-либо регион карты.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TerrId: IMapBoxTerritoryEventArgs;

	Begin

	    TerrId := New MapBoxTerritoryEventArgs.Create(1100);

	    MapBox1.OnTerritoryClick(MapBox1, TerrId);

	End Sub Button1OnClick;


После выполнения примера, при нажатии на кнопку будет сгенерировано
 событие нажатия по региону карты с идентификатором "1100".


См. также:


[MapBoxTerritoryEventArgs](MapBoxTerritoryEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
