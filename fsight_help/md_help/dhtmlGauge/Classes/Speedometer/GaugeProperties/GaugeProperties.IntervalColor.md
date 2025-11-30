# GaugeProperties.IntervalColor

GaugeProperties.IntervalColor
-


# GaugeProperties.IntervalColor


## Синтаксис


IntervalColor: Array;


## Описание


Свойство IntervalColor устанавливает массив цветов сектора.


## Пример


Для выполнения примера необходимо наличие на странице компонента [GaugeProperties](GaugeProperties.htm) с наименованием «prop» (см. «Пример работы с мастером настройки спидометров»). Добавим обработчик события PropertyChanged:


prop.PropertyChanged.add(
function (sender, args)
{
	var log = document.getElementById("log");
	log.innerHTML += "<p>ScaleMode:" + prop.getScaleMode();
	log.innerHTML += "<p>MaxValue:" + prop.getMaxValue();
	log.innerHTML += "<p>MinValue:" + prop.getMinValue();
	log.innerHTML += "<p>IntervalsCount:" + prop.getIntervalsCount();
	log.innerHTML += "<p>TrendEnabled:" + prop.getTrendEnabled();
	log.innerHTML += "<p>TrendLabel:" + prop.getTrendLabel();
	log.innerHTML += "<p>TrendValue:" + prop.getTrendValue();
	for (var i = 0; i < prop.getIntervalsCount() - 1; i++)
	{
		log.innerHTML += "<p>IntervalColor[" + i + "] = " + prop.getIntervalColor(i);
		log.innerHTML += "<p>IntervalEnd[" + i + "] = " + prop.getIntervalEnd(i);
	}
	log.innerHTML += "<br /><hr />";
	log.scrollTop = log.scrollHeight - log.clientHeight;
	prop.update();
});

При изменении свойств спидометра в мастере в текстовое окно будут выведены настройки спидометра:


![](GaugeProperties.png)


См. также:


[GaugeProperties](GaugeProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
