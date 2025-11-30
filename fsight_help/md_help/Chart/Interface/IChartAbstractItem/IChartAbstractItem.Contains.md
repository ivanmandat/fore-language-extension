# IChartAbstractItem.Contains

IChartAbstractItem.Contains
-


# IChartAbstractItem.Contains


## Синтаксис


Contains(Point: [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm)):
 Boolean;


## Параметры


Point. Точка.


## Описание


Свойство Contains проверяет,
 принадлежит ли точка объекту.


## Комментарии


Возвращает True, в случае если
 точка принадлежит объекту, в противном случае - False.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


Добавьте ссылки на системные сборки «Chart», «Drawing», «Ui».


			Sub UserProc;

Var

    Chart: IChart;

    Ser: IChartSerie;

    point: IGxPointF;

    b: Boolean;

Begin

    Ser := Chart.Series.Item(0);

    point := New GxPointF.Create(1, 1);

    b := Ser.Contains(point);

    If b Then WinApplication.InformationBox("Точка принадлежит ряду");

        Else WinApplication.InformationBox("Точка не принадлежит ряду");

    End If;

End Sub UserProc;


После выполнения примера будет выдано сообщение, содержащее информацию
 о принадлежности точки ряду.


См. также:


[IChartAbstractItem](IChartAbstractItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
