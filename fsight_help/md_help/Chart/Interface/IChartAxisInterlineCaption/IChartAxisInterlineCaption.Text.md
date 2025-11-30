# IChartAxisInterlineCaption.Text

IChartAxisInterlineCaption.Text
-


# IChartAxisInterlineCaption.Text


## Синтаксис


Text: String;


## Описание


Свойство Text определяет текст
 заголовка между линиями уровня.


## Комментарии


Формат заголовка настраивается для линии уровня, от которой направлена
 [заливка
 интервала](../IChartAxisLevelLine/IChartAxisLevelLine.InterlineColor.htm) между линиями уровня.


Для определения шрифта заголовка между линиями уровня используйте свойство
 [IChartAxisInterlineCaption.Font](IChartAxisInterlineCaption.Font.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1», компонент UiErAnalyzer с идентификатором
 «UiErAnalyzer1» и компонент ChartBox с идентификатором «ChartBox1». Укажите
 «UiErAnalyzer1» в качестве источника для «ChartBox1».


Пример является обработчиком события OnClick для компонента «Button1».


Добавьте ссылку на системную сборку Drawing.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    AxisX, AxisY: IChartAxis;

    APen: IGxPen;

    ChartLevel: IChartAxisLevelLine;

    LevelLines : IChartAxisLevelLines;

    Caption: IChartAxisInterlineCaption;

Begin

    AxisX := ChartBox1.Chart.AxisX;

    // Добавление линии уровня:

    LevelLines := AxisX.LevelLines;

    LevelLines.Add(0.625000, APen);

    LevelLines.Add(0.875000, APen);

    // Заливка интервала
 между линиями уровня:

    ChartLevel := LevelLines.Item(0);

    ChartLevel.InterlineColor := GxColor.FromName("Yellow");

    // Настройка заголовка интервала
 между линиями уровня:

    ChartLevel.EnableInterlineCaption:=True;

    Caption := ChartLevel.InterlineCaption;

    Caption.Text:="Уровень = 2007";

    Caption.Font:= New GxFont.Create("Arial",10);

    Caption.FontColor:= GxColor.FromName("Blue");

    Caption.HorizontalAlignment:= ChartHorizontalAlignment.Left;

End Sub Button1OnClick;


После выполнения примера на диаграмме по оси Ox будут отображаться линии в
 соответствии с заданными параметрами:


	- задан цвет заливки интервала между линиями уровня;


	- настроен заголовок для интервала между линиями уровня:


		- задан текст заголовка;


		- задан шрифт заголовка;


		- задан цвет шрифта заголовка;


		- задано горизонтальное выравнивание заголовка.


См. также:


[IChartAxisInterlineCaption](IChartAxisInterlineCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
