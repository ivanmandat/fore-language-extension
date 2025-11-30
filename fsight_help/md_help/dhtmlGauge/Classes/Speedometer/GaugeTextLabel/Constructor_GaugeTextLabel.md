# Конструктор GaugeTextLabel

Конструктор GaugeTextLabel
-


# Конструктор GaugeTextLabel


## Синтаксис


PP.Ui.GaugeTextLabel(settings);


## Параметры


settings. JSON-объект со значениями свойств компонента.


## Описание


Конструктор GaugeTextLabel создает экземпляр класса [GaugeTextLabel](GaugeTextLabel.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [Speedometer](../../../Components/Speedometer/Speedometer.htm) с наименованием «speed1» (см. «[Пример создания датчика топлива](../../../Components/Speedometer/Fuel_gauge_Example.htm)»). Добавим на страницу кнопку, при нажатии на которую добавится текстовая метка:


<input TYPE="button" VALUE="GaugeTextLabel" ONCLICK="TestTrendPoint()">
<script>
function TestTrendPoint()
{
	var trend = new PP.Ui.GaugeTrendPoint({
		Value: 35,//значение, на котором расположена отсечка
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
}
</script>

После нажатия на кнопку «GaugeTextLabel» на шкале спидометра будет размещена текстовая метка, имеющая следующий вид:


![](ex_9.PNG)


См. также:


[GaugeTextLabel](GaugeTextLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
