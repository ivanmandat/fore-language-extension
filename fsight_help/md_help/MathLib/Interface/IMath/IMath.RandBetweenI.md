# IMath.RandBetweenI

IMath.RandBetweenI
-


# IMath.RandBetweenI


## Синтаксис


RandBetweenI(Bottom: Integer; Top: Integer): Integer;


## Параметры


Bottom. Нижняя граница диапазона;


Top. Верхняя граница диапазона.


## Описание


Метод RandBetweenI возвращает
 случайное целое число, находящееся в диапазоне между двумя заданными значениями.


## Комментарии


Для получения равномерно распределенного случайного вещественного числа
 из промежутка [0, 1] используйте метод [IMath.Rand](IMath.Rand.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку MathFin.


			Sub UserProc;

Var

    r: Double;

Begin

    r := Math.RandBetweenI(0,100);

    Debug.WriteLine(r);

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено случайное
 число.


См. также:


[IMath](IMath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
