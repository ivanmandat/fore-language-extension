# Конструктор ChartPolarXAxis

Конструктор ChartPolarXAxis
-


# Конструктор ChartPolarXAxis


## Синтаксис


PP.Ui.ChartPolarXAxis(settings);


## Параметры


settings. JSON-объект со значениями
 свойств компонента.


## Описание


Конструктор ChartPolarXAxis
 создает экземпляр класса ChartPolarXAxis.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [Chart](../../../Components/Chart/Chart.htm) с наименованием
 «chart» (см. «[Пример
 создания компонента Chart](../../../Components/Chart/Chart_Example.htm)»). Установим полярные оси X и Y диаграмме:


// Создаем ось X в полярной системе координат
var xAxis = new PP.Ui.ChartPolarXAxis({
    Parent: chart,
    Categories: ["2001", "2002", "2003", "2004", "2005"],
    Labels: {
        Enabled: true
    }
});
// Создаем ось Y в полярной системе координат
var yAxis = new PP.Ui.ChartPolarYAxis({
    Parent: chart,
    Min: -110,
    Max: 110,
    Labels: {
        Enabled: true
    }
});
// Добавляем оси к диаграмме
chart.setXAxis(xAxis);
chart.setYAxis(yAxis);
В результате оси диаграммы будут рассчитываться в полярной системе координат.


См. также:


[ChartPolarXAxis](ChartPolarXAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
