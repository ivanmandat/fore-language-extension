# IChartGraphArea.AutoMargin

IChartGraphArea.AutoMargin
-


# IChartGraphArea.AutoMargin


## Синтаксис


AutoMargin: Boolean;


## Описание


Свойство AutoMargin определяет величины внешних отступов для области построения диаграммы, устанавливаемые автоматически.


## Комментарии


По умолчанию AutoMargin установлено значение True. При этом величины внешних отступов для объектов диаграммы равны 1 мм.


Данное свойство сохраняется с диаграммой. Если загружается объект предыдущей версии, то для него устанавливаются свойства AutoMargin и Margin по умолчанию.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    c: IChart;

Begin

    c:= UiChart1.Chart;

    c.GraphArea.Margin:= New GxRectF.Create(0, 0, 0, 0);

    c.GraphArea.AutoMargin:= False;

End Sub Button1OnClick;


При нажатии кнопки «Button1» будет установлено расстояние от области построения (включая подписи и оси) до краёв диаграммы, равное нулю.


См. также:


[IChartGraphArea](IChartGraphArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
