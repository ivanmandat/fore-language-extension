# Speedometer.calcCenterPosition

Speedometer.calcCenterPosition
-


# Speedometer.calcCenterPosition


## Синтаксис


calcCenterPosition();


## Описание


Метод calcCenterPosition вычисляет координаты центра спидометра.


## Пример


Для выполнения примера предполагается наличие на странице компонента [Speedometer](../../../Components/Speedometer/Speedometer.htm) с наименованием «speed1» (см. «[Пример создания датчика топлива](../../../Components/Speedometer/Fuel_gauge_Example.htm)»). Добавим на страницу кнопку, после нажатия на которую будут выведены значения параметров спидометра:


<input TYPE="button" VALUE=" OK " ONCLICK="AlertButton()">
<script>
function AlertButton()
{
	var pt = speed1.calcCenterPosition();
	var str = "Speedometer.calcCenterPosition() = X: " + String(pt.getX()) + " " + "Y: " + String(pt.getY()) + "\n";
	pt = speed1.calcOuterRadius();
	str += "Speedometer.calcOuterRadius() = X: " + String(pt.getX()) + " " + "Y: " + String(pt.getY()) + "\n";
	pt = speed1.getScales(0).calcCenterPosition();
	str += "GaugeScale.calcCenterPosition() = X: " + String(pt.getX()) + " " + "Y: " + String(pt.getY()) + "\n";
	pt = speed1.getScales(0).calcOuterRadius();
	str += "GaugeScale.calcOuterRadius() = X: " + String(pt.getX()) + " " + "Y: " + String(pt.getY()) + "\n";
	alert(str);
}
</script>

После нажатия на кнопку «OK» на экран в окне будут выведены координаты центра шкалы и внешний радиус в виде списка:


Speedometer.calcCenterPosition() = X: 100 Y: 180


Speedometer.calcOuterRadius() = X: 150 Y: 150


GaugeScale.calcCenterPosition() = X: 100 Y: 180


GaugeScale.calcOuterRadius() = X: 150 Y: 150


См. также:


[Speedometer](Speedometer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
