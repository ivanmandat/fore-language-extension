# Конструктор GaugeScale

Конструктор GaugeScale
-


# Конструктор GaugeScale


## Синтаксис


PP.Ui.GaugeScale(settings);


## Параметры


settings. JSON-объект со значениями свойств компонента.


## Описание


Конструктор GaugeScale создает экземпляр класса [GaugeScale](GaugeScale.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [Speedometer](../../../Components/Speedometer/Speedometer.htm) с наименованием «speed1» (см. «[Пример создания датчика топлива](../../../Components/Speedometer/Fuel_gauge_Example.htm)»). Добавим на страницу кнопку при нажатии на которую будет создан элемент спидометра в виде шкалы:


<input TYPE="button" VALUE="GaugeScale" ONCLICK="ScaleConstructor()">
<script>
function ScaleConstructor()
{
	var scl = new PP.Ui.GaugeScale({
			ToolTip: {Content: "Scale"},
			Background:{ PPType: PP.SolidColorBrush, Color:"#ff0000" },
			Size: 10,
			Length: -60,
			StartAngle: 210,
			MinValue: 0,
			MaxValue: 1,
			Values: [0, 1],
			Labels: ["E", "F"],
			LabelFont: {Size: 14, IsBold: true},
			RotateLabels: false,
			MajorTick:
			{
				PPType: PP.Ui.RhombMarker,
				Border:	{PPType: PP.SolidColorBrush, Color: "#333333"},
				Size:10,
				Style: PP.GaugeStyleLabels.Inner
			}
		}
	);
	speed1.getScales()[1] = scl; //заменяем шкалу
	speed1.getScales(1).render(speed1, this);
}
</script>

После нажатия на кнопку «GaugeScale» появится элемент спидометра в виде шкалы, имеющий следующий вид:


![](GaugeScale.png)


См. также:


[GaugeScale](GaugeScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
