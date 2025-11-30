# IStatistics.FisherInv

IStatistics.FisherInv
-


# IStatistics.FisherInv


## Синтаксис


FisherInv(Value: Double): Double;


## Параметры


Value. Значение, для которого
 производится обратное преобразование.


## Описание


Метод FisherInv возвращает обратное
 преобразование Фишера.


## Комментарии


Это преобразование используется при анализе корреляции между массивами
 или интервалами данных. Если y = [Fisher](IStatistics.Fisher.htm)(x),
 то FisherInv(y) = x.


Если значение параметра Value > 354,
 то FisherInv возвращает
 значение «1».


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.FisherInv(0.7752);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Обратное преобразование Фишера: " + d0.ToString);

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено обратное
 преобразование Фишера.


См. также:


[IStatistics](IStatistics.htm)
 | [Статистика
 Фишера](Lib.chm::/05_Statistics/UiModelling_Fisher.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
