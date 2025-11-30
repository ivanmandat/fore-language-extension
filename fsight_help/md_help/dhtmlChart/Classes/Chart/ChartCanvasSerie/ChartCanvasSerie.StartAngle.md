# ChartCanvasSerie.StartAngle

ChartCanvasSerie.StartAngle
-


# ChartCanvasSerie.StartAngle


## Синтаксис


StartAngle: Number;


## Описание


Свойство StartAngle определяет
 начало угла отрисовки ряда.


## Комментарии


Значение свойства устанавливается только из JSON.


Свойство актуально для круговых диаграмм.


Значение свойства задается в градусах.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [Chart](../../../Components/Chart/Chart.htm) с наименованием
 «chart» (см. «[Пример
 создания круговой диаграммы](../../../Components/Chart/ChartPie.htm)»). Добавим новый ряд:


// Получаем первый ряд данных
oldSerie = chart.getSeries()[0];
// Получаем настройки ряда
serSettings = oldSerie.getSettings();
// Задаем центр отрисовки ряда
serSettings.Center.X = 70;
serSettings.Center.Y = 70;
// Меняем угол начала отрисовки
serSettings.StartAngle = 90;
// Добавим новый ряд
chart.addSerie(serSettings);
В результате выполнения примера был добавлен новый ряд данных со смещенным
 центром и углом начала отрисовки.


См. также:


[ChartCanvasSerie](ChartCanvasSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
