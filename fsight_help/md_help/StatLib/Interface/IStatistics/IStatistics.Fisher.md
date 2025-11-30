# IStatistics.Fisher

IStatistics.Fisher
-


# IStatistics.Fisher


## Синтаксис


Fisher(Value: Double): Double;


## Параметры


Value. Значение, которое требуется преобразовать. Область допустимых значений: (-1; 1).


## Описание


Метод Fisher возвращает преобразование Фишера для аргумента Value.


## Комментарии


Это преобразование строит функцию, которая имеет нормальное, а не асимметричное распределение. Эта функция используется для тестирования гипотез с помощью коэффициента корреляции.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.Fisher(0.65);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Преобразование Фишера: " + d0.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено преобразование Фишера:


Module execution started


Преобразование Фишера: 0.7752987062055835


Module execution finished


См. также:


[IStatistics](IStatistics.htm) | [Статистика Фишера](Lib.chm::/05_Statistics/UiModelling_Fisher.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
