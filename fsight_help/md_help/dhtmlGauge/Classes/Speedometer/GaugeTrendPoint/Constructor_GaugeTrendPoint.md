# Конструктор GaugeTrendPoint

Конструктор GaugeTrendPoint
-


# Конструктор GaugeTrendPoint


## Синтаксис


PP.Ui.GaugeTrendPoint (settings);


## Параметры


settings. JSON-объект со значениями
 свойств компонента.


## Описание


Конструктор GaugeTrendPoint создает
 экземпляр класса [GaugeTrendPoint](GaugeTrendPoint.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [Speedometer](../../../Components/Speedometer/Speedometer.htm)
 с наименованием «speed1» (см. «[Пример
 создания датчика топлива](../../../Components/Speedometer/Fuel_gauge_Example.htm)»). Добавим на страницу кнопку, при нажатии
 на которую будет создана отметка на шкале спидометра:


<input TYPE="button" VALUE="GaugeTrendPoint" ONCLICK="GaugeTrendPoint()">
<script>
function GaugeTrendPoint()
{
	var trend = new PP.Ui.GaugeTrendPoint({
		Value: 35,//значение, на котором расположена отсечка
		Label:{Text: "Тест"},//текст надписи отсечки
		Marker:
		{
			PPType: PP.Ui.TriangleMarker,//маркер, используемый для вывода отсечки
			Size: 20,
			Flip: true,
			Border: { PPType: PP.SolidColorBrush, Color: "blue" },
		}
	});
	speed1.getScales(1).getTrends().push(trend);
	speed1.getScales(1).render(speed1, this);
	var center = speed1.getScales(1).getTrends(0).calcCenterPosition(); //центр (позиция) отметок
	var outer = speed1.getScales(1).getTrends(0).calcOuterRadius();//радиус отметок на шкале
	var calcsize = speed1.getScales(1).getTrends(0).calcSize();//размер отметок на шкале
	var str = "GaugeTrendPoint.calcCenterPosition() - X:" + center.getX() + " Y:" + center.getY() + "\n";
	str += "GaugeTrendPoint.calcOuterRadius() - X:" + outer.getX() + " Y:" + outer.getY() + "\n";
	str += "GaugeTrendPoint.calcSize() - " + calcsize;
	alert(str);
}
</script>

После нажатия на кнопку «GaugeTrendPoint» будет размещена отметка на
 шкале спидометра, имеющая следующий вид:


![](GaugeTrendPoint.png)


Также будут выведены значения параметров спидометра, возвращенные методами
 [calcCenterPosition](GaugeTrendPoint.calcCenterPosition.htm),
 [calcOuterRadius](GaugeTrendPoint.calcOuterRadius.htm):


GaugeTrendPoint.calcCenterPosition() - X:100 Y:180


GaugeTrendPoint.calcOuterRadius() - X:150 Y:150


См. также:


[GaugeTrendPoint](GaugeTrendPoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
