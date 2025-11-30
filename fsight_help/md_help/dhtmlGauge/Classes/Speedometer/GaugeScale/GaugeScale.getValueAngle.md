# GaugeScale.getValueAngle

GaugeScale.getValueAngle
-


# GaugeScale.getValueAngle


## Синтаксис


getValueAngle(value);


## Параметры


Value. Значение на шкале.


## Описание


Метод getValueAngle вычисляет угловое расположение на шкале для передаваемого значения.


## Пример


Для выполнения примера предполагается наличие на странице компонента [Speedometer](../../../Components/Speedometer/Speedometer.htm) с наименованием «speed1» (см. «[Пример создания датчика топлива](../../../Components/Speedometer/Fuel_gauge_Example.htm)»). Добавим на страницу кнопку, при нажатии на которую будут выведены значения параметров спидометра:


<input TYPE="button" VALUE=" OK " ONCLICK="AlertButton()">
<script>
function AlertButton()
{
	var angle = speed1.getScales(1).getValueAngle(speed1.getScales(1).getValue());
	alert(angle);
}
</script>

После нажатия на кнопку «OK» на экран в окне будет выведен угол в радианах для передаваемого значения:


3.6651914291880923


См. также:


[GaugeScale](GaugeScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
