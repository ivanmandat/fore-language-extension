# IMsTimeMatrix.AlignedDate

IMsTimeMatrix.AlignedDate
-


# IMsTimeMatrix.AlignedDate


## Синтаксис


AlignedDate(Value: [DateTime](ForeSys.chm::/Class/DateTime/DateTime.htm);

           [Forward:
 Boolean = true;]

           [ThrowException:
 Boolean = true]): [DateTime](ForeSys.chm::/Class/DateTime/DateTime.htm);


## Параметры


Value. Проверяемая дата;


Forward. Направление сдвига
 календаря;


ThrowException. Признак того,
 будет ли генерироваться исключительная ситуация, если проверяемая дата
 выходит за пределы дат ряда.


## Описание


Свойство AlignedDate возвращает
 ближайшую корректную дату.


## Комментарии


Допустимые значения параметра ThrowException:


	- True. По умолчанию.
	 Генерируется исключительная ситуация;


	- False. Метод возвращает
	 дату, ближайшую к началу или окончанию ряда.


Если проверяемая дата является выходным днем, то свойство вернёт ближайшую
 корректную дату в зависимости от значения параметра Forward:


	- Forward = True. По
	 умолчанию. Ближайшая корректная дата вперед по календарю;


	- Forward = False. Ближайшая
	 корректная дата назад по календарю.


Если проверяемая дата является рабочим днем, то метод вернет проверяемую
 дату без изменения.


## Пример


В данном примере описан пользовательский метод.


Для выполнения примера добавьте ссылки на системные сборки Ms.


			Public Function UserAlignedDate(param: IMsTimeMatrix): Variant;

Var

    m : IMsTimeMatrix;

    i : Integer;

    IndDate: DateTime;

Begin

    m := New MsTimeMatrix.Create;

    For i := m.StartIndex To m.EndIndex Do

        IndDate := m.IndexToDate(i);

        If m.AlignedDate(IndDate) = IndDate Then

            Debug.WriteLine(m.Item(i));

        End If;

    End For;

    Return m;

End Function UserAlignedDate;


В результате выполнения примера в окно консоли будут выведены значения
 точек рядов матрицы, если ближайшая корректная дата совпадет с датой,
 полученной в результате перевода индекса в дату.


См. также:


[IMsTimeMatrix](IMsTimeMatrix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
