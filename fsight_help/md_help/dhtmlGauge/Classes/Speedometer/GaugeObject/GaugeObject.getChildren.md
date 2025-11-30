# GaugeObject.getChildren

GaugeObject.getChildren
-


# GaugeObject.getChildren


## Синтаксис


getChildren ();


## Описание


Метод getChildren возвращает массив дочерних элементов [GaugeObject](GaugeObject.htm).


## Комментарии


Если элемент содержит дочерние [GaugeObject](GaugeObject.htm) элементы, функция переопределяется в дочернем классе.


## Пример


Для выполнения примера предполагается наличие на странице компонента [Speedometer](../../../Components/Speedometer/Speedometer.htm) с наименованием «speed1» (см. «[Пример создания датчика топлива](../../../Components/Speedometer/Fuel_gauge_Example.htm)»). Добавим на страницу кнопку, при нажатии на которую будут выведены названия классов дочерних элементов спидометра:


<input TYPE="button" VALUE=" OK " ONCLICK="AlertButton()">
<script>
function AlertButton()
{
	var s = "";
	var st = speed1.getChildren();
	for(var i = 0; i < st.length; i++)
	{
		s += st[i].getTypeName() + "\n";
	}
	alert(s);
}
</script>

Нажав на кнопку «OK», получим массив дочерних элементов [GaugeObject](GaugeObject.htm) в виде списка:


GaugeScale


GaugeScale


GaugeScale


CircleMarker


См. также:


[GaugeObject](GaugeObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
