# DateTime.Millisecond

DateTime.Millisecond
-


# DateTime.Millisecond


## Синтаксис


Millisecond: Integer;


## Описание


Свойство Millisecond возвращает количество миллисекунд в текущей переменной.


## Пример


			Sub UserProc;

Var

    DT: DateTime;

    i: Integer;

Begin

    DT := DateTime.Parse("01.01.2000 11:11:11.111");

    i := DT.Millisecond;

End Sub UserProc;


После выполнения примера в переменной «i» будут содержаться количество миллисекунд, полученные из преобразованного значения даты и времени.


См. также:


[Класс DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
