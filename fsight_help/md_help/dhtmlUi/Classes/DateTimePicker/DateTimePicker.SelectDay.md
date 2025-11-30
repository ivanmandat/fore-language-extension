# DateTimePicker.SelectDay

DateTimePicker.SelectDay
-


# DateTimePicker.SelectDay


## Синтаксис


SelectDay: function(sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие SelectDay наступает при выборе дня в календаре.


## Пример


Для выполнения примера создайте компонент [DateTimePicker](../../Components/DateTimePicker/DateTimePicker.htm) (см. «[Пример создания компонента DateTimePicker](../../Components/DateTimePicker/Example_DateTimePicker.htm)») с наименованием «DTP». Добавим обработчик события SelectDay:


DTP.SelectDay.add(function (sender, args)


{


     alert("День: " + args.Day.No);


})


После выполнения примера при выборе дня из календаря будет выдаваться сообщение с информацией о текущем значении дня в компоненте.


См. также:


[DateTimePicker](DateTimePicker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
