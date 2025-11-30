# IChartAxis.AutoTextSpacing

IChartAxis.AutoTextSpacing
-


# IChartAxis.AutoTextSpacing


## Синтаксис


AutoTextSpacing: Boolean;


## Описание


Свойство AutoTextSpacing определяет
 расстояние от подписи до линии оси, устанавливаемое автоматически.


## Комментарии


По умолчанию свойству установлено значение True.
 Расстояние, устанавливаемое автоматически, равно 2 мм. При смене значения
 на False применяется величина
 из [TextSpacing](IChartAxis.TextSpacing.htm). Данное свойство
 сохраняется с диаграммой. Если загружается объект предыдущей версии, то
 для него устанавливаются свойства [TextAlignment](IChartAxis.TextAlignment.htm),
 [AutoTextSpacing](IChartAxis.AutoTextSpacing.htm), [TextSpacing](IChartAxis.TextSpacing.htm)
 и [TextVisible](IChartAxis.TextVisible.htm) по умолчанию.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1»,
 компонентов ChartBox и
 UiChart, являющихся источниками данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    ay: IChartAxis;

Begin

   ay:= UiChart1.Chart.AxisY;

   ay.TextSpacing:= 3.0;

    ay.AutoTextSpacing:= False;

End Sub Button1OnClick;


После нажатия кнопки «Button1»
 устанавливается минимальное расстояние подписи до линии оси
 Y, равное 3-м миллиметрам.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
