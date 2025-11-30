# IChartHint.CustomFormat

IChartHint.CustomFormat
-


# IChartHint.CustomFormat


## Синтаксис


CustomFormat: String;


## Описание


Свойство CustomFormat определяет
 [пользовательский
 формат](tabsheet.chm::/Interface/ITabCellStyle/ITabCellStyle.CustomFormat.htm) числовых значений всплывающих подсказок на диаграмме.


## Комментарии


Доступные форматы:


	- %Autovalue. По умолчанию.
	 Автоматический формат значения;


	- %Value. Значение точки;


	- %YValue. Значение точки
	 по оси Y;


	- %Part. Значение с накоплением;


	- %Percent.
	 Доли в процентах;


	- %PercentPart.
	 Доли в процентах с накоплением;


	- %PercentHundredth.
	 Доли - это отношение значения точки ряда к сумме значений этой же
	 точки всех рядов;


	- %PercentPartHundredth.
	 Доли в процентах.


Для определения формата отображения подписей данных всплывающих подсказок
 на диаграмме используйте [IChartHint.StringFormat](IChartHint.StringFormat.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:


	- ChartBox с идентификатором
	 «ChartBox1».


	- UiChart с идентификатором «UiChart1».
	 Для «UiChart1» в свойствах необходимо задать количество точек и рядов.
	 Компонент «UiChart1» будет являться источником данных для «ChartBox1».
	 Для построения диаграммы необходимо создать обработчики событий [OnGetDataValue](../../Class/UiChart/UiChart.OnGetDataValue.htm)
	 и [OnGetSerieName](../../Class/UiChart/UiChart.OnGetSerieName.htm).


			Sub Userproc;

Var

    Chart: IChart;

    Hint: IChartHint;

    Color: IGxColor;

    Font: IGxFont;

Begin

    // Получим диаграмму

    Chart := UiChart1.Chart;

    // Получим подсказки диаграммы

    Hint := chart.HintFormat;

    // Включим отображение подсказок

    Chart.UseSignatureHint := True;

    // Изменим цвет фона подсказок

    Hint.BackgroundInfo.Color := New GxColor.CreateRGB(120, 0, 120);

    // Создадим новый цвет

    Color := New GxColor.CreateRGB(127, 127, 127);

    // Отключим возможность брать цвет из показателя для рамки подсказок

    Hint.UseIndicatorColorForBorder := False;

    // Применим новый цвет для контура подсказок

    Hint.BorderPen := New GxPen.CreateSolid(Color);

    // Установим формат по умолчанию

    Hint.CustomFormat := "0,0000";

    // Создадим новый шрифт

    Font := New GxFont.Create("Arial", 5);

    // Применим новый шрифт для подсказок

    Hint.Font := Font;

    //Изменим цвет шрифта

    Hint.FontColor := Color;

    // Изменим положение подписи по горизонтали на подсказке

    Hint.HorizontalAlignment := ChartHorizontalAlignment.Left;

    // Сменим формат отображения подсказок на значение с накоплением

    Hint.StringFormat := "%Part";

    // Обновим диаграмму

    Chart.Refresh;

End Sub Userproc;


После выполнения примера при наведении курсора на столбики диаграммы
 появятся всплывающие подсказки в заданном формате.


См. также:


[IChartHint](IChartHint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
