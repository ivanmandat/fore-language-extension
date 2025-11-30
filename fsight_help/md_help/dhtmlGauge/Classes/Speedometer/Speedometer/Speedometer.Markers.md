# Speedometer.Markers

Speedometer.Markers
-


# Speedometer.Markers


## Синтаксис


Markers: Array;


## Описание


Свойство Markers определяет
 массив типа PP.Ui.[GaugeMarkerBase](../GaugeMarkerBase/GaugeMarkerBase.htm)
 из элементов, задающих параметры отрисовки маркеров спидометра.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [Speedometer](../../../Components/Speedometer/Speedometer.htm)
 с наименованием «speed1» (см. «[Пример
 создания датчика топлива](../../../Components/Speedometer/Fuel_gauge_Example.htm)»). Добавим на страницу кнопку, после
 нажатия на которую будет отображен маркер спидометра, определяемый свойством
 Markers:


<input TYPE="button" VALUE="Speedometer.Markers" ONCLICK="Test1()">
<script>
function Test1()
{
	var rmark = new PP.Ui.RhombMarker({
		Border: {PPType: PP.SolidColorBrush, Color: "#aa0000"},
		Size:50,
		BorderWidth: 5
	});
	rmark.setLeft(50);
	rmark.setTop(70);
	speed1.getMarkers().push(rmark);
	speed1.render(speed1, this);
}
</script>
После нажатия на кнопку «Speedometer.Markers» будет отображен
 маркер спидометра, который имеет следующий вид:


![](Clock6.PNG)


См. также:


[Speedometer](Speedometer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
