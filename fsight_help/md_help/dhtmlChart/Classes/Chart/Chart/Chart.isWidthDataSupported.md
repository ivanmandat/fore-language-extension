# Chart.isWidthDataSupported

Chart.isWidthDataSupported
-


# Chart.isWidthDataSupported


## Синтаксис


isWidthDataSupported: Boolean;


## Описание


Метод isWidthDataSupported определяет
 признак того, используется ли[
 показатель ширины/угла](../ChartColumnSerie/ChartColumnSerie.WidthData.htm).


## Комментарии


Допустимые значения:


	- true. Диаграмма использует
	 показатель ширины/угла;


	- false. Диаграмма не
	 использует показатель ширины/угла.


## Пример


Для выполнения примера создайте диаграмму из примера [ChartColumnSerie.WidthData](../ChartColumnSerie/ChartColumnSerie.WidthData.htm),
 и идентификатором chart.


Проверим использует ли диаграмма угловые показатели:


console.debug(chart.isWidthDataSupported
 ? "Диаграмма использует угловой показатель" : "Угловой
 показатель не используется");


В результате выполнения примера было получено сообщение о том, что диаграмма
 использует угловой показатель.


См. также:


[Chart](Chart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
