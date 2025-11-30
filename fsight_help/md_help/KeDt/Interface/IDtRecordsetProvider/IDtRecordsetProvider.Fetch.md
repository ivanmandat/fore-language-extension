# IDtRecordsetProvider.Fetch

IDtRecordsetProvider.Fetch
-


# IDtRecordsetProvider.Fetch


## Синтаксис


Fetch: Array;


## Описание


Метод Fetch осуществляет импорт
 данных в соответствии с алгоритмом пользователя.


## Комментарии


Данный метод должен быть переопределён в пользовательском классе.


## Пример


			Class MyProvider: Object, IDtRecordsetProvider

    Public Function Fetch: Array Of Variant;

    Var

        ResArray: Array[0..1, 0..10] Of Variant;

        i, j: integer;

    Begin

        For j := 0 To 10 Do

            For i := 0 To 1 Do

                If i = 0 Then

                    ResArray[i, j] := "Код-" + j.ToString;

                Else

                    ResArray[i, j] := Math.RandBetween(0, 100);

                End If;

            End For;

        End For;

        Return ResArray;

    End Function Fetch;

End Class MyProvider;


Данный пример является макросом, содержащим реализацию метода, осуществляющего
 импорт данных по пользовательскому алгоритму. При импорте будет получен
 массив, содержащий два столбца данных. В первом столбце будут содержаться
 символьные значения, во втором - случайные вещественные числа в диапазоне
 от 0 до 100.


См. также:


[IDtRecordsetProvider](IDtRecordsetProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
