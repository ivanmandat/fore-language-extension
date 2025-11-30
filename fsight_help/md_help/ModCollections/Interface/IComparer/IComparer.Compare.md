# IComparer.Compare

IComparer.Compare
-


# IComparer.Compare


## Синтаксис


Compare(x: Variant; y: Variant): Integer;


## Параметры


x. Объект, который необходимо
 сравнить.


y. Объект, с которым необходимо
 сравнить.


## Описание


Метод Compare сравнивает передаваемые
 в качестве входных параметров объекты и возвращает результат их сравнения.


## Комментарии


Метод возвращает следующие значения:


	- 0 - если объекты
	 равны;


	- 1 - если значение
	 X больше значения Y;


	- -1 - если
	 значение X меньше значения
	 Y.


Если метод Compare переопределен
 в прикладном классе, то метод может возвращать любые значения.


## Пример


Добавьте ссылку на системную сборку Math.


			Sub UserProc;

Var

    Comp: IComparer;

    x, y: DateTime;

    i, Year, Month, Day: Integer;

Begin

    Day := Math.RandBetweenI(1, 31);

    Month := Math.RandBetweenI(1, 12);

    Year := Math.RandBetweenI(2000, 2020);

    x := DateTime.Today;

    y := DateTime.ComposeDay(Year, Month, Day);

    Comp := Comparer.DateTimeComparer;

    i := Comp.Compare(x, y);

End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться результат
 сравнения текущей даты со случайно сгенерированной.


См. также:


[IComparer](IComparer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
