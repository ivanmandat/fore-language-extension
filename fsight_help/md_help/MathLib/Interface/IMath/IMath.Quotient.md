# IMath.Quotient

IMath.Quotient
-


# IMath.Quotient


## Синтаксис


Quotient(Numerator: Double; Denomiator: Double):
 Integer;


## Параметры


Numerator. Делимое;


Denomiator. Делитель.


## Описание


Метод Quotient
 возвращает целую часть частного при делении двух десятичных чисел.


## Комментарии


Значение параметра Denomiator
 не может быть равно «0».


## Пример


Для выполнения примера добавьте ссылку на системную сборку MathFin.


			Sub UserProc;

Var

    r: Integer;

Begin

    r := Math.Quotient(4.5, 3.1);

    Debug.WriteLine(r);

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена целая
 часть частного, равная «1».


См. также:


[IMath](IMath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
