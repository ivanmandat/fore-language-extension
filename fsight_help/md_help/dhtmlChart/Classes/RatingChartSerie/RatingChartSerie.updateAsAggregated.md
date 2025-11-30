# RatingChartSerie.updateAsAggregated

RatingChartSerie.updateAsAggregated
-


# RatingChartSerie.updateAsAggregated


## Синтаксис


updateAsAggregated(serie: [PP.Ui.RatingChartSerie](RatingChartSerie.htm));


## Параметры


serie. Ряд данных, значение
 которого будет добавлено к основному ряду данных.


## Описание


Метод updateAsAggregated суммирует
 значения ряда данных со значениями другого ряда.


## Комментарии


Метод суммирует значения по всем столбцам значений.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Добавим к значению первого ряда
 данных значение второго ряда, выведем полученную сумму в консоль браузера,
 затем обновим первый ряд данных:


// Получим первый ряд данных
serie1 = ratingChart.getSerie(0);
// Получим второй ряд данных
serie2 = ratingChart.getSerie(1);
// К значению первого ряда данных добавим значение второго ряда
serie1.updateAsAggregated(serie2);
// Выведем полученную сумму по текущему столбцу значений
console.log("Сумма значений первого и второго ряда: " + serie1.getValue());
// Обновим первый ряд данных
serie1.updateData();

В результате выполнения примера в окно консоли браузера будет выведа
 сумма значений первого и второго рядов данных.


См. также:


[RatingChartSerie](RatingChartSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
