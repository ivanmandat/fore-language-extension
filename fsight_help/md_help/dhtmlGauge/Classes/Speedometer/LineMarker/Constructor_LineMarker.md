# Конструктор LineMarker

Конструктор LineMarker
-


# Конструктор LineMarker


## Синтаксис


PP.Ui.LineMarker (setting);


## Параметры


settings. JSON-объект со значениями свойств компонента.


## Описание


Конструктор LineMarker создает экземпляр класса [LineMarker](LineMarker.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [Speedometer](../../../Components/Speedometer/Speedometer.htm) с наименованием «speed1» (см. «[Пример создания датчика топлива](../../../Components/Speedometer/Fuel_gauge_Example.htm)»). Добавим на страницу кнопку, при нажатии на которую будут добавляться маркеры в виде линии:


<input TYPE="button" VALUE=" OK " ONCLICK="LMarks()">
<script>
function LMarks()
{
	var lmark = new PP.Ui.LineMarker(
	{
		Border:	{PPType: PP.SolidColorBrush, Color: "#00ffff"},
		Size:25,
		Offset: 5,
		BorderWidth: 15
	});
	speed1.setCenter(lmark);
}
</script>

После нажатия на кнопку «OK» маркер в центре спидометра будет изменен следующим образом:


![](LMarker_ex.png)


См. также:


[LineMarker](LineMarker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
