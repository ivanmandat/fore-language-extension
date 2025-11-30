# DateTime.AddMilliseconds

DateTime.AddMilliseconds
-


# DateTime.AddMilliseconds


## Синтаксис


AddMilliseconds(Value: DateTime; Count: Integer): DateTime;


## Параметры


Value. Исходная дата;


Count. Количество добавляемых миллисекунд.


## Описание


Метод AddMilliseconds добавляет к исходной дате указанное количество миллисекунд.


## Комментарии


При положительном значении параметра Count значение даты увеличивается, при отрицательном - уменьшается.


## Пример


			Sub UserProc;

Var

    DT, DT1, DT2, DT3, DT4: DateTime;

Begin

    DT := DateTime.Parse("01.01.2000 10:20:20.200");

    DT1 := DateTime.AddMilliseconds(DT, 1);

    DT2 := DateTime.AddMilliseconds(DT, 80);

    DT3 := DateTime.AddMilliseconds(DT, 1000);

    DT4 := DateTime.AddMilliseconds(DT, -90);

End Sub UserProc;


После выполнения примера в переменных будут содержаться следующие значения:


«DT» - «01.01.2000 10:20:20»


«DT1» - «01.01.2000 10:20:20.201»


«DT2» - «01.01.2000 10:20:20.280»


«DT3» - «01.01.2000 10:20:21.200»


«DT4» - «01.01.2000 10:20:20.110»


См. также:


[Класс DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
