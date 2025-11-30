# IStatMethod.SupportsR

IStatMethod.SupportsR
-


# IStatMethod.SupportsR


## Синтаксис


SupportsR: Boolean;


## Описание


Свойство SupportsR возвращает
 признак поддержки расчета статистического метода через пакет R.


## Комментарии


Допустимые значения:


	- True. Поддерживается
	 расчет статистического метода через пакет R;


	- False. Не поддерживается
	 расчет статистического метода через пакет R.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Method: SmLinearRegress;

    can, fra, ger: Array[10] Of Double;

    status, i: Integer;

Begin

    Method := New SmLinearRegress.Create;

    // Объясняемая переменная

    can[0] := 6209; can[1] := 6385;

    can[2] := 6528; can[3] := 6837;

    can[4] := 6495; can[5] := 6907;

    can[6] := 7349; can[7] := 7213;

    can[8] := 7061; can[9] := 7180;

    Method.Explained.Value := can;

    // Регрессоры

    fra[0] := 4110; ger[0] := 3415;

    fra[1] := 4280; ger[1] := 3673;

    fra[2] := 4459; ger[2] := 4013;

    fra[3] := 4545; ger[3] := 4278;

    fra[4] := 4664; ger[4] := 4577;

    fra[5] := 4861; ger[5] := 5135;

    fra[6] := 5195; ger[6] := 5388;

    fra[7] := 5389; ger[7] := 5610;

    fra[8] := 5463; ger[8] := 5787;

    fra[9] := 5610; ger[9] := 6181;

    Method.Explanatories.Clear;

    Method.Explanatories.Add.Value := fra;

    Method.Explanatories.Add.Value := ger;

    // Параметры периода идентификации

    Method.ModelPeriod.FirstPoint := 1;

    Method.ModelPeriod.LastPoint := 10;

    // Параметры прогнозирования

    Method.Forecast.LastPoint := 10;

    // Поддержка R

    If Method.SupportsR Then

        // Расчет статистического метода через пакет R

        Method.UseR := True;

        // Расчёт и вывод результатов

        status := Method.Execute;

        If status <> 0 Then

            Debug.WriteLine(Method.Errors);

            Else

                Debug.WriteLine("=== Модельный ряд ===");

                Debug.Indent;

                For i := 0 To Method.Fitted.Length - 1 Do

                    Debug.WriteLine((i+1).ToString + ". " + Method.Fitted[i].ToString);

                End For;

                Debug.Unindent;

        End If;

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены результат
 проверки, поддерживается ли расчет статистического метода через пакет R,
 и рассчитанный модельный ряд.


См. также:


[IStatMethod](IStatMethod.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
