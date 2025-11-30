# IChartSerieBase.Shadow

IChartSerieBase.Shadow
-


# IChartSerieBase.Shadow


## Синтаксис


Shadow: [IChartShadow](../IChartShadow/IChartShadow.htm);


## Описание


Свойство Shadow определяет параметры
 тени ряда данных.


## Комментарии


Перед применением параметров тени необходимо, чтобы значение свойства
 DisplayShadow было True.


## Пример


В рассматриваемом примере предполагается, что существует объект Serie типа IChartSerie.


	Sub Shad;

	Var

	    Pnt : IGxPointF;

	    Serie: IChartSerie;

	Begin

	    Pnt := New GxPointF.Create (1.00,2.00);

	    Serie.Shadow.Direction := Pnt;

	    Serie.Shadow.Color := GxColor.FromName("Blue");

	End Sub Shad;


После выполнения примера у ряда данных на графике появится тень синего
 цвета, смещенная на заданные расстояния.


См. также:


[IChartSerieBase](IChartSerieBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
