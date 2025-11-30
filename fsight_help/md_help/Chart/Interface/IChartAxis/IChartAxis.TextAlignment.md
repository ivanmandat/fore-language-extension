# IChartAxis.TextAlignment

IChartAxis.TextAlignment
-


# IChartAxis.TextAlignment


## Синтаксис


TextAlignment: [ChartAxisTextAlignment](../../Enums/ChartAxisTextAlignment.htm);


## Описание


Свойство TextAlignment определяет способ выравнивания текста относительно оси.


## Комментарии


Для оси категорий выравнивание может быть применено только, если:


-
текст подписи многострочный и угол поворота подписей равен нулю;


-
угол поворота подписей равен 90 градусов.


По умолчанию способ выравнивания для осей значений – по центру, для осей категорий - ближе к оси.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    ay: IChartAxis;

Begin

    ay:= UiChart1.Chart.AxisY;

    ay.TextAlignment:= ChartAxisTextAlignment.Near;

End Sub Button1OnClick;


После нажатия кнопки «Button1» подписи оси У будут перемещены ближе к оси.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
