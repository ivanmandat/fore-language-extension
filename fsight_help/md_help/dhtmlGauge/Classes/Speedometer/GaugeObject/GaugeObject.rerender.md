# GaugeObject.rerender

GaugeObject.rerender
-


# GaugeObject.rerender


## Синтаксис


render (speedometer: [PP.Ui.Gauge](../Speedometer/Speedometer.htm),
 parent: [PP.Ui.GaugeObject](GaugeObject.htm));


## Параметры


speedometer. Объект спидометра;


parent. Родительский объект.


## Описание


Метод rerender удаляет объект
 и отрисовывает его заново.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [Speedometer](../../../Components/Speedometer/Speedometer.htm)
 с идентификатором «speedometer» (см. «[Пример
 создания спидометра с мастером](../../../Components/Speedometer/speedometer_wirh_master.htm)»).


Получим центральный меркер спидометра, настроим прозрачность и перерисуем
 его:


// Получим центральный маркер спидометра
center = speedometer.getCenter();
// Настроим прозрачность
center.setOpacity(0.3);
center.setOpacityEnabled(true);
// Перерисуем маркер
center.rerender(speedometer,this);
В результате выполнения примера будет установлены настройки прозрачности
 для центрального маркера спидометра.


См. также:


[GaugeObject](GaugeObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
