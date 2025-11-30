# ChartPoint.TangentAngle

ChartPoint.TangentAngle
-


# ChartPoint.TangentAngle


## Синтаксис


TangentAngle: Number;


## Описание


Свойство TangentAngle определяет
 угол наклона касательной в точке ряда данных относительно оси Х (в радианах).


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setTangentAngle,
 а возвращается методом getTangentAngle.


## Пример


Для выполнения примера:


	- Создайте html-страницу.


	- Выполните пример
	 из описания свойства [Chart.AutoRotateMarker](../Chart/Chart.AutoRotateMarker.htm).


	- Задайте в консоли
	 вращение маркеров первого ряда:


var angle = 0;
// Создадим функцию для изменения угла наклона маркера
function rotatezz(angle){
    angle = angle + 0.1;
    // Выберем первый ряд данных
    var series = chart.getSeries()[0],
    points = series.getPoints(),
    length = points.length;
    // Зададим угол наклона для маркеров в цикле
    for(var i=0;i<length;i++){
        series.getPoint(0).setTangentAngle(angle);
        points[i].setTangentAngle(angle);
    }
    // Перерисуем диаграмму
    chart.redraw();
    setTimeout(rotatezz, 50, angle);
};
rotatezz(angle);
После выполнения примера маркеры на диаграмме первого ряда будут вращаться
 по часовой стрелке.


См. также:


[ChartPoint](ChartPoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
