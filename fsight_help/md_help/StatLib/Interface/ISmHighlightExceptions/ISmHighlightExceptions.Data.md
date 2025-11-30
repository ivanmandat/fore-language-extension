# ISmHighlightExceptions.Data

ISmHighlightExceptions.Data
-


# ISmHighlightExceptions.Data


## Синтаксис


Data: [ISlSeries](../ISlSeries/ISlSeries.htm);


## Описание


Свойство Data определяет исходные
 данные.


## Комментарии


Результаты выполнения анализа возвращают свойства [ISmHighlightExceptions.ExceptionLevels](ISmHighlightExceptions.ExceptionLevels.htm)
 и [ISmHighlightExceptions.Indexes](ISmHighlightExceptions.Indexes.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


        Sub UserHighlEx;

        Var

            method: SmHighlightExceptions;

            status, gender, income: Array[20] Of Double;

            Data: ISlSeries;

            i, res: Integer;

            Excep: Array Of Double;

            Ind: Array Of Integer;

            s: String;

        Begin


            // Исходные данные


            status[0] := 1; gender[0] := 1; income[0] := 1;

            status[1] := 1; gender[1] := 0; income[1] := 0;

            status[2] := 1; gender[2] := 0; income[2] := 2;

            status[3] := 0; gender[3] := 0; income[3] := 2;

            status[4] := 0; gender[4] := 0; income[4] := 0;

            status[5] := 1; gender[5] := 1; income[5] := 0;

            status[6] := 0; gender[6] := 0; income[6] := 2;

            status[7] := 1; gender[7] := 0; income[7] := 1;

            status[8] := 1; gender[8] := 0; income[8] := 0;

            status[9] := 1; gender[9] := 0; income[9] := 0;


            status[10] := 1; gender[10] := 1; income[10] := 0;

            status[11] := 0; gender[11] := 1; income[11] := 2;

            status[12] := 1; gender[12] := 0; income[12] := 2;

            status[13] := 1; gender[13] := 0; income[13] := 1;

            status[14] := 0; gender[14] := 0; income[14] := 1;

            status[15] := 0; gender[15] := 1; income[15] := 0;

            status[16] := 0; gender[16] := 0; income[16] := 0;

            status[17] := 1; gender[17] := 1; income[17] := 2;

            status[18] := 0; gender[18] := 0; income[18] := 1;

            status[19] := 0; gender[19] := 0; income[19] := 0;


            // Создаем метод

             method := New SmHighlightExceptions.Create;


            // Задаем анализируемые данные

             Data := method.Data;

            Data.Add.Value := status;

            Data.Add.Value := gender;

            Data.Add.Value := income;


            // Метод обработки пропусков

             method.MissingData.Method := MissingDataMethod.Casewise;


            // Выполняем расчёт и выводим результаты

             res := method.Execute;

            If (res = 0) Then

                Ind := method.Indexes;

                Excep := method.ExceptionLevels;

                For i := 0 To Ind.Length - 1 Do

                    If Ind[i] <> -1 Then

                        s := "Наблюдение '" + i.ToString + "' исключительно";

                        Debug.WriteLine(s);


                        s := "    - уровень исключительности (по всем признакам): ";

                        Debug.WriteLine(s + Excep[i].ToString);

                        s := "    - признак с максимальным уровнем исключительности: ";

                        Debug.WriteLine(s + Ind[i].ToString);

                    Else

                    Debug.WriteLine("Наблюдение '" + i.ToString + "' не является исключительным");

                    End If;

                End For;

            End If;

        End Sub UserHighlEx;


Результат выполнения процедуры: произведен поиск исключений в исходных данных, результаты выведены в окно консоли.


См. также:


[ISmHighlightExceptions](ISmHighlightExceptions.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
