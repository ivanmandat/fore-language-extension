# EaxMapBoxTerritoryEventArgs.Create

EaxMapBoxTerritoryEventArgs.Create
-


# EaxMapBoxTerritoryEventArgs.Create


## Синтаксис


Create(TerritoryId: Integer);


## Описание


Конструктор Create создает аргумент
 события, возникающего при щелчке кнопкой мыши по какому-либо региону карты.


## Пример


Для выполнения примера предполагается наличие формы, кнопки с наименованием
 «Button1», компонента EaxMapBox с наименованием «EaxMapBox1» и компонента
 UiEaxMap, являющегося источником данных для «EaxMapBox1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TerrId: IEaxMapBoxTerritoryEventArgs;

	Begin

	    TerrId := New EaxMapBoxTerritoryEventArgs.Create(1100);

	    EaxMapBox1.OnTerritoryClick(EaxMapBox1, TerrId);

	End Sub Button1OnClick;


После выполнения примера, при нажатии на кнопку будет сгенерировано
 событие нажатия по региону карты с идентификатором 1100.


См. также:


[EaxMapBoxTerritoryEventArgs](IEaxMapBoxTerritoryEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
