# ITrackBar.TickStyle

ITrackBar.TickStyle
-


# ITrackBar.TickStyle


## Синтаксис


TickStyle: [TrackBarTickStyle](../../Enums/TrackBarTickStyle.htm);


## Описание


Свойство TickStyle определяет
 стиль нанесения меток.


## Комментарии


Если свойству TickStyle установлено
 значение Auto, место расположения
 вычисляется автоматически, в зависимости от значений свойств [Min](ITrackBar.Min.htm), [Max](ITrackBar.Max.htm)
 и [Frequence](ITrackBar.Frequency.htm).


При значении Manual установка
 меток производится в прикладном коде с помощью метода [SetTick](ITrackBar.SetTick.htm).
 При этом свойству [Frequence](ITrackBar.Frequency.htm)
 должно быть установлено значение «1».


См. также:


[ITrackBar](ITrackBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
