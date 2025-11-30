# IChartAxis.TextVisible

IChartAxis.TextVisible
-


# IChartAxis.TextVisible


## Синтаксис


TextVisible: Boolean;


## Описание


Свойство TextVisible определяет
 видимость подписей на оси.


## Комментарии


По умолчанию свойство TextVisible
 имеет значение True, подписи отображаются
 на оси. Свойство может применяться для всех осей.


Данное свойство сохраняется с диаграммой. Если загружается объект предыдущей
 версии, то для него устанавливаются свойства [TextAlignment](IChartAxis.TextAlignment.htm),
 [AutoTextSpacing](IChartAxis.AutoTextSpacing.htm), [TextSpacing](IChartAxis.TextSpacing.htm)
 и [TextVisible](IChartAxis.TextVisible.htm) по умолчанию.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1»,
 компонентов ChartBox и UiChart,
 являющихся источниками данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    ay: IChartAxis;

Begin

    ay:= UiChart1.Chart.AxisY;

    ay.TextVisible:= False;

End Sub Button1OnClick;


После нажатия кнопки «Button1»
 подписи оси Y становятся невидимыми на диаграмме.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
