# Конструктор ImageMarker

Конструктор ImageMarker
-


# Конструктор ImageMarker


## Синтаксис


PP.Ui.ImageMarker (setting);


## Параметры


settings. JSON-объект со значениями свойств компонента.


## Описание


Конструктор ImageMarker создает экземпляр класса [ImageMarker](ImageMarker.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [Speedometer](../../../Components/Speedometer/Speedometer.htm) с наименованием «speed1» (см. «[Пример создания датчика топлива](../../../Components/Speedometer/Fuel_gauge_Example.htm)») и файл «Fuel_icon.png» должен храниться на одном уровне с html-страницей. Добавим на страницу кнопку, при нажатии на которую будут добавляться маркеры в виде изображения:


<input TYPE="button" VALUE=" image Marker " ONCLICK="imageMarker()">
<script>
function imageMarker()
{
	var scale = speed1.getScales(1);
	var attr = {
		Src: "Fuel_icon.png",//путь к изображению
		Height: "32",//высота изображения
		Width: "32",//ширина изображения
		Style: PP.GaugeStyleLabels.Inner
	};

	var imageMarker = new PP.Ui.ImageMarker(attr);

	attr.PPType = PP.Ui.ImageMarker;
	scale.setMajorTick(attr);

	speed1.setCenter(imageMarker);
	speed1.render(speed1, this);
}
</script>

После нажатия на кнопку «Image Marker» маркеры на шкале спидометра и в его центре будут изменены следующим образом:


![](Clock5.1.PNG)


См. также:


[ImageMarker](ImageMarker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
