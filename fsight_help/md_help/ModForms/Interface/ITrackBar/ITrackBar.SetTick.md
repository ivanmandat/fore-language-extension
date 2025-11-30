# ITrackBar.SetTick

ITrackBar.SetTick
-


# ITrackBar.SetTick


## Синтаксис


SetTick(Value: Integer);


## Параметры


Value. Числовое
 значение, определяющее место установки метки. Значение
 указывается в диапазоне [[Min](ITrackBar.Min.htm),
 [Max](ITrackBar.Max.htm)].


## Описание


Метод SetTick устанавливает
 метку в заданном положении.


## Комментарии


Метод SetTick используется,
 если свойство [TickStyle](ITrackBar.TickStyle.htm)
 = Manual. Свойству [Frequency](ITrackBar.Frequency.htm)
 должно быть установлено значение «1». При этом начальная и конечная метки
 устанавливаются автоматически, остальные метки устанавливаются с помощью
 метода SetTick. Место расположения
 метки вычисляется пропорционально значению Value
 и значениям свойств [Min](ITrackBar.Min.htm)
 и [Max](ITrackBar.Max.htm).


См. также:


[ITrackBar](ITrackBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
