# ICalendarDimInstance.Shift

ICalendarDimInstance.Shift
-


# ICalendarDimInstance.Shift


## Синтаксис


Shift(El: Integer; Lag: Integer): Integer;


## Параметры


El. Индекс элемента.


Lag. Лаг (смещение).


## Описание


Метод Shift возвращает индекс
 элемента, полученного путем смещения относительно элемента El
 на значение, передаваемое посредством параметра Lag.


## Комментарии


Для сдвига вперед во временном периоде указывайте положительное значения
 параметра Lag, для сдвига
 назад - отрицательное.


Если элемент, полученный в результате смещения, отсутствует в календаре,
 то метод возвращает значение «-1».


## Пример


Для выполнения примера предполагается наличие в репозитории календарного
 справочника с идентификатором «CALENDAR_DIM».


			Sub UserProc;

Var

    MB: IMetabase;

    DimInst: IDimInstance;

    ClnClass: ICalendarDimInstanceFactory;

    ClnInst: ICalendarDimInstance;

    i: Integer;

Begin

    Mb := MetabaseClass.Active;

    DimInst := Mb.ItemById("CALENDAR_DIM").Open(Null) As IDimInstance;

    ClnClass := New CalendarDimInstanceFactory.Create;

    ClnInst := ClnClass.CreateCalendarDimInstance(DimInst);

    i := ClnInst.Shift(100, 3);

End Sub UserProc;


При выполнении примера в переменной «i» будет содержаться индекс элемента,
 полученный путем смещения на значение «3» относительно указанного элемента
 справочника.


См. также:


[ICalendarDimInstance](ICalendarDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
