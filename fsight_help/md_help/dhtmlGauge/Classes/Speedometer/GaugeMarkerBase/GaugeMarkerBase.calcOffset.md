# GaugeMarkerBase.calcOffset

GaugeMarkerBase.calcOffset
-


# GaugeMarkerBase.calcOffset


## Синтаксис


calcOffset ();


## Описание


Метод calcOffset вычисляет смещение по радиусу от центра шкалы.


## Пример


Для выполнения примера предполагается наличие на странице компонента [Speedometer](../../../Components/Speedometer/Speedometer.htm) с наименованием «speed1» (см. «[Пример создания датчика топлива](../../../Components/Speedometer/Fuel_gauge_Example.htm)»). Добавим на страницу кнопку, после нажатия на которую будут выведены значения параметров спидометра:


<input TYPE="button" VALUE="Calc" ONCLICK="calc()">
<script>
function calc()
{
	var arrow = speed1.getScales(0).getArrows(0);
	var marker = speed1.getCenter();
	var str = "GaugeArrowBase.calcRadius() = " + arrow.calcRadius() + "\n";
	str += "GaugeMarkerBase.calcSize() = " + marker.calcSize() + "\n";
	str += "GaugeMarkerBase.calcOffset() = " + marker.calcOffset() + "\n";
	alert(str);
}
</script>

После нажатия на кнопку «Calc» будет выведено сообщение со значениями параметров спидометра, которые возвращают методы [calcRadius](../GaugeArrowBase/GaugeArrowBase.calcRadius.htm), [calcSize](GaugeMarkerBase.calcSize.htm), calcOffset:


GaugeArrowBase.calcRadius() = 140


GaugeMarkerBase.calcSize() = 17


GaugeMarkerBase.calcOfset() = 0


См. также:


[GaugeMarkerBase](GaugeMarkerBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
