# DateTime.Ticks64

DateTime.Ticks64
-


# DateTime.Ticks64


## Синтаксис


Ticks64: Decimal;


## Описание


Свойство Ticks64 возвращает
 количество миллисекунд, прошедших с момента запуска операционной системы
 при длительной работе.


## Комментарии


Возвращаемое значение ограничено значением 1.84467441 * 10^19. Это значение
 позволяет вести отсчет работы системы в течение многих годов.


## Пример


	Class MyTimer: Object

	    tStart, tStop, Time: Decimal;


	    Public Constructor Create;

	    Begin

	        tStart := DateTime.Ticks64;

	    End Constructor Create;


	    Public Function GetTime: Decimal;

	    Begin

	        tStop := DateTime.Ticks64;

	        Time := tStop - tStart;

	        Return (Time / 1000);

	    End Function GetTime;


	End Class MyTimer;


Указанный класс позволяет фиксировать время существования объекта. Отсчет
 начинается с момента создания объекта класса. Время существования объекта
 в секундах возвращает функция GetTime.


См. также:


[DateTime](DateTime.htm)
 | [Ticks](DateTime.Ticks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
