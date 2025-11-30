# GaugeTextLabel.setPosition

GaugeTextLabel.setPosition
-


# GaugeTextLabel.setPosition


## Синтаксис


setPosition(at, dontRedraw);


## Параметры


at. Координаты точки, определяющей положение текстовой метки;


dontRedraw.  Если установлен значение false будет выполнена перерисовка спидометра.


## Описание


Метод setPosition устанавливает положение текстовой метки.


## Пример


Для выполнения примера предполагается наличие на странице компонента [Speedometer](../../../Components/Speedometer/Speedometer.htm) с наименованием «speed1» (см. «[Пример создания датчика топлива](../../../Components/Speedometer/Fuel_gauge_Example.htm)»). Добавим на страницу кнопку, после нажатия на которую будет создана текстовая метка на шкале спидометра:


<input TYPE=«button» VALUE=«setPosition» ONCLICK=«setPosition()»>
<script>
function setPosition()
{
	var trend = new PP.Ui.GaugeTrendPoint({
		Value: 35,//значение, на котором расположена отсечка
		Label:
		{
			Font: {FontFamily: "TimesNewRoman", Size: 14, Color: "green"}
		},
		Marker:
		{
			PPType: PP.Ui.TriangleMarker,//маркер, используемый для вывода отсечки
			Size: 20,
			Flip: true,
			Border: { PPType: PP.SolidColorBrush, Color: "blue" },
		}
	});
	speed1.getScales(1).getTrends().push(trend);
	var gaugeTextLabel = new PP.Ui.GaugeTextLabel({
			Text: "Тест",
			Font: {FontFamily: "Tahoma", Size: 12, Color: "orange"}
		});
	speed1.getScales(1).getTrends(0).setLabel(gaugeTextLabel);
	speed1.render(speed1, this);

	var at = new PP.Point({X:12, Y:20});
	gaugeTextLabel.setPosition(at, false);
}
</script>

После нажатия на кнопку «setPosition» будет отображена метка в форме треугольника, а также изменено положение текстовой метки.


![](ex_03.png)


См. также:


[GaugeTextLabel](GaugeTextLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
