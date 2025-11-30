# Конструктор LineArrow

Конструктор LineArrow
-


# Конструктор LineArrow


## Синтаксис


PP.Ui.LineArrow(settings);


## Параметры


settings. JSON-объект со значениями
 свойств компонента.


## Описание


Конструктор LineArrow создает
 экземпляр класса [LineArrow](LineArrow.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [Speedometer](../../../Components/Speedometer/Speedometer.htm)
 с наименованием «speed1» (см. «[Пример
 создания датчика топлива](../../../Components/Speedometer/Fuel_gauge_Example.htm)»). Добавим на страницу кнопку, при нажатии
 на которую будет добавлена стрелка в виде линии:


<input TYPE="button" VALUE=" LineArrow " ONCLICK="ArrowConstructor()">
<script>
function ArrowConstructor()
{
	var arrow = new PP.Ui.LineArrow({
		Radius:100,
		Tail:12,
		Size:10,
		Border:{ PPType: PP.SolidColorBrush, Color:"#00FF00"},
		Background:{ PPType: PP.SolidColorBrush, Color:"#FF0000"},
		Value: 15
	});
	speed1.getScales(1).getArrows().push(arrow);
	speed1.getScales(1).render(speed1, this);
}
</script>
После нажатия на кнопку будет добавлена стрелка в виде линии:


![](Clock.png)


См. также:


[LineArrow](LineArrow.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
