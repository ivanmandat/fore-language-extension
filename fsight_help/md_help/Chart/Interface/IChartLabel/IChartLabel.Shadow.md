# IChartLabel.Shadow

IChartLabel.Shadow
-


# IChartLabel.Shadow


## Синтаксис


Shadow: [IChartShadow](../IChartShadow/IChartShadow.htm);


## Описание


Свойство Shadow возвращает параметры
 тени подписи данных.


## Комментарии


Свойство актуально, только если свойство [DisplayShadow](IChartLabel.DisplayShadow.htm)
 имеет значение True.


## Пример


Для выполнения примера предполагается наличие формы, расположенных на
 ней компонента ChartBox и компонента UiChart с наименованием «UiChart1»,
 являющегося источником данных для ChartBox. В инспекторе сборок должны
 быть указаны ссылки на системные сборки Chart, Drawing, ExtCtrls, Forms.


			Sub SAMPLEFormOnShow(Sender: Object; Args: IEventArgs);

Var

    series: IChartSeries;

    label:IChartLabel;

    shadow:IChartShadow;

Begin

    series:= UiChart1.Chart.Series;

    series.DisplayLabels:= True;

    label:= series.DefaultLabel;

    label.DisplayShadow:= True;

    shadow:= Label.Shadow;

    shadow.Color:= GxColor.FromName("Gray");

    shadow.Direction := New GxPointF.Create(1.2,1.2);

End Sub SAMPLEFormOnShow;


После выполнения примера на диаграмме будут отображаться подписи данных
 заданного размера с тенью.


См. также:


[IChartLabel](IChartLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
