# ITimeSeries.AlignedDate

ITimeSeries.AlignedDate
-


# ITimeSeries.AlignedDate


## Синтаксис


AlignedDate(Value: [DateTime](ForeSys.chm::/Class/DateTime/DateTime.htm);
 [Forward: Boolean = True;] [ThrowException: Boolean = True]): [DateTime](ForeSys.chm::/Class/DateTime/DateTime.htm);


## Параметры


Value. Проверяемая дата;


Forward. Направление сдвига
 календаря. Необязательный параметр;


ThrowException. Признак того,
 генерировать ли исключительную ситуацию, если проверяемая дата выходит
 за пределы дат ряда. Необязательный параметр.


## Описание


Свойство AlignedDate возвращает
 ближайшую корректную дату.


## Комментарии


Допустимые значения параметра ThrowException:


	- True. По умолчанию.
	 Генерируется исключительная ситуация;


	- False. Метод возвращает
	 дату, ближайшую к началу или окончанию ряда.


Если проверяемая дата является выходным, то метод вернет ближайшую корректную
 дату в зависимости от значения параметра Forward:


	- Forward = True. По
	 умолчанию. Ближайшая корректная дата вперед по календарю;


	- Forward = False. Ближайшая
	 корректная дата назад по календарю.


Если проверяемая дата является рабочим днем, то метод вернет проверяемую
 дату без изменения.


## Пример


В данном примере приведен пользовательский метод расчета для ряда с
 дневной динамикой. Для выполнения примера добавьте ссылки на системные
 сборки «Ms», «Transform».


			Function UserAlignedDate(Input: ITimeSeries): ITimeSeries;

Var

    pContext: ITsCalculationContext;

    i: Integer;

    pSeries: ITimeSeries;

Begin

    pContext := TsCalculation.Current;

    pSeries := pContext.CreateTimeSeries;

    For i := Input.StartIndex To Input.EndIndex Do

        If Input.AlignedDate(Input.IndexToDate(i)) = Input.IndexToDate(i) Then

            pSeries.Item(i) := 1 + Input.Item(i);

        End If;

    End For;

    Return pSeries;

End Function UserAlignedDate;


Метод выполняет увеличение значений ряда, которые соответствуют рабочим
 дням.


См. также:


[ITimeSeries](ITimeSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
