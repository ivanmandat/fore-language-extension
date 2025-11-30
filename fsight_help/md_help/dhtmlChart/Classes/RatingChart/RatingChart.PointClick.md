# RatingChart.PointClick

RatingChart.PointClick
-


# RatingChart.PointClick


## Синтаксис


PointClick: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.
 Доступные аргументы: Name - наименование выбранного ряда данных, Value
 - соответствующее ему значение, Index - его позиция.


## Описание


Событие PointClick генерируется
 при нажатии на ряд данных в рейтинговой диаграмме.


## Пример


Заменим обработчик события [SelectionStart](RatingChart.SelectionStart.htm)
 в примере, приведённом на странице описания метода [RatingChart.getSelection](RatingChart.getSelection.htm),
 на следующий фрагмент кода:


// Обработаем событие PointClick
ratingChart.PointClick.add(function (sender, args) {
    // Для выбранного ряда будем сразу устанавливать новый стиль
    ratingChart.setStyleToSerie(args.Index, selectedStyle);
});

Таким образом, будет обработано событие нажатия на ряд данных в рейтинговой
 диаграмме PointClick. Результат
 работы изменённого примера будет тем же.


[RatingChart](RatingChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
