# GaugeSector.ZIndex

GaugeSector.ZIndex
-


# GaugeSector.ZIndex


## Синтаксис


ZIndex: Number;


## Описание


Свойство ZIndex определяет порядок расположения слоев в секторе.


## Пример


Для выполнения примера предполагается наличие на странице компонента [Speedometer](../../../Components/Speedometer/Speedometer.htm) с наименованием «speed1» (см. «[Пример создания датчика топлива](../../../Components/Speedometer/Fuel_gauge_Example.htm)»). Добавим на страницу кнопку, при нажатии на которую будет меняться порядок расположения секторов:


<input TYPE="button" VALUE="createSector" ONCLICK="createSector()">
<script>
function createSector()
{
	if (speed1.getScales(1).getSectors(1)) return;
	var sector0 = new PP.Ui.GaugeSector({
		StartValue: 0,
		EndValue: 50,
		Background: {PPType: PP.SolidColorBrush, Color: "#9FDFDF"},
		StartSize: 2,
		EndSize: 2,
		Offset: -10,
		Border: {PPType: PP.SolidColorBrush, Color: "#333333"}
	});
	var sector1 = new PP.Ui.GaugeSector({
		StartValue: 30,
		EndValue: 50,
		Background: {PPType: PP.SolidColorBrush, Color: "orange"},
		StartSize: 2,
		EndSize: 2,
		Offset: -10,
		ZIndex:10
	});
	var sector2 = new PP.Ui.GaugeSector({
		StartValue: 20,
		EndValue: 40,
		Background: {PPType: PP.SolidColorBrush, Color: "blue"},
		StartSize: 5,
		EndSize: 5,
		Offset: -10,
		ZIndex:5
	});
	speed1.getScales(1).setSector(sector0, 0);
	speed1.getScales(1).addSector(sector1);
	speed1.getScales(1).addSector(sector2);
	speed1.render(speed1, this);
}
</script>
<input TYPE="button" VALUE="setZIndex" ONCLICK="setZIndex()">
<script>
function setZIndex()
{
	if (speed1.getScales(1).getSectors(1))
	{
		var sector1 = speed1.getScales(1).getSectors(1).getZIndex();
		var sector2 = speed1.getScales(1).getSectors(2).getZIndex();
		speed1.getScales(1).getSectors(1).setZIndex(sector2);
		speed1.getScales(1).getSectors(2).setZIndex(sector1);
	}
}
</script>

При нажатии на кнопку «createSector» будут добавлены три пересекающихся сектора. Затем, нажатием кнопки «setZIndex», можно менять порядок расположения этих секторов.


![](ex_01.PNG)


См. также:


[GaugeSector](GaugeSector.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
