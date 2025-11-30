# IStatistics.CritBinom

IStatistics.CritBinom
-


# IStatistics.CritBinom


## Синтаксис


CritBinom(Trials: Integer; Probability: Double;
 Alpha: Double): Integer;


## Параметры


Trials. Число испытаний Бернулли;


Probability. Вероятность успеха
 в каждом испытании;


Alpha. Значение критерия.


## Описание


Метод CritBinom возвращает наименьшее
 значение, для которого интегральное биномиальное распределение больше
 или равно заданному критерию. Данная функция используется в приложениях,
 связанных с контролем качества.


## Комментарии


Значение параметра Trials должно
 быть больше или равно нулю.


Область допустимых значений параметра Probability:
 [0, 1].


Область допустимых значений параметра Alpha:
 [0, 1].


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.CritBinom(6, 0.5,0.75);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Наименьшее значение: " + d0.ToString);

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено наименьшее
 значение.


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
