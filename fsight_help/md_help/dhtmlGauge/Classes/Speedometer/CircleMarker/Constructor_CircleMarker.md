# Конструктор CircleMarker

Конструктор CircleMarker
-


# Конструктор CircleMarker


## Синтаксис


PP.Ui.CircleMarker (settings);


## Параметры


settings. JSON-объект со значениями свойств компонента.


## Описание


Конструктор CircleMarker создает экземпляр класса [CircleMarker](CircleMarker.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [Speedometer](../../../Components/Speedometer/Speedometer.htm) с наименованием «speed1» (см. «[Пример создания датчика топлива](../../../Components/Speedometer/Fuel_gauge_Example.htm)»). Добавим на страницу кнопку, при нажатии на которую в центр спидометра будет добавлен маркер в виде окружности:


<input type="button" value=" OK " onclick="CMarks()"/>
<script type="text/javascript">
function CMarks()
{
	var cmark = new PP.Ui.CircleMarker(
	{
		Border:	{PPType: PP.SolidColorBrush, Color: "#333333"},
		Size:15,
		Offset: -5,
		BorderWidth: 5
	});
	speed1.setCenter(cmark);
}</script>

После нажатия на кнопку «OK» маркер в центре спидометра будет изменен следующим образом:


![](CMarker_ex.png)


См. также:


[CircleMarker](CircleMarker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
