# IUiChart.Type

IUiChart.Type
-


# IUiChart.Type


## Синтаксис


Type: [ChartType](../../Enums/ChartType.htm);


## Описание


Свойство Type определяет тип диаграммы.


## Комментарии


По умолчанию типом диаграммы является гистограмма.


## Пример


Для выполнения примера на форме расположите кнопку с наименованием «Button1», компонент UiChart с наименованием «UiChart1» и компонент ChartBox с наименованием «ChartBox1». Добавьте ссылку на системную сборку Chart.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);
Begin

    UiChart1.Type := ChartType.Lines;

    UiChart1.Style := ChartStyle.Relative;

    UiChart1.Orientation := ChartOrientation.LeftToRight;

    UiChart1.PointCount := 5;

    UiChart1.SerieCount := 10;

    UiChart1.DisplayVolume3D := True;

    UiChart1.DisplaySecondaryAxis := False;

    UiChart1.DisplayLegend := True;

    UiChart1.ComponentCount;

End Sub Button1OnClick;


После выполнения примера будут установлены следующие настройки для диаграммы:


-
тип диаграммы - линейный;


-
тип шкалы диаграммы - относительный;


-
ориентация слева направо;


-
количество точек - пять;


-
количество рядов - десять;


-
структура диаграммы - трехмерная;


-
дополнительная ось не будет отображаться;


-
диаграмма будет отображена с легендой.


См. также:


[IUiChart](IUiChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
