# ICalendarDimensionClass.Shift

ICalendarDimensionClass.Shift
-


# ICalendarDimensionClass.Shift


## Синтаксис


Shift(Calendar: [IDimInstance](kedims.chm::/interface/idiminstance/idiminstance.htm);
 El: Integer; Lag: Integer): Integer;


## Параметры


Calendar. Данные календарного
 справочника, по которым выполняется расчет;


El. Индекс элемента, относительно
 которого выполняется расчет;


Lag. Смещение элемента.


## Описание


Метод Shift возвращает индекс
 элемента, полученного путем смещения относительно указанного элемента.


## Комментарии


Метод рассчитывает смещение в рамках одного календарного уровня по всем
 уровням справочника. Если элемент, полученный в результате смещения, отсутствует
 в календаре, то метод возвращает значение «-1».


Для сдвига вперед во временном периоде указывайте отрицательное значения
 параметра Lag, для сдвига
 назад - положительное.


## Пример


Пример является функцией, используемой для расчёта отношения в стандартном
 кубе.


Для выполнения примера добавьте ссылки на системные сборки «Cubes»,
 «Dimensions».


			Public Function ShiftEl(T: Variant; Lag: Integer): Integer;

Var

    Cube: ICubeInstance;

    CubeDest: ICubeInstanceDestination;

    DimInsts: ICubeInstanceDimensions;

    DimInst: IDimInstance;

    i: Integer;

    Result: Integer;

Begin

    Cube := CubeClass.CurrentCube;

    CubeDest := Cube.Destinations.DefaultDestination;

    DimInsts := CubeDest.Dimensions;

    For i := 0 To DimInsts.Count - 1 Do

        If (DimInsts.Item(i).Dimension Is ICalendarDimension) Then

            DimInst := DimInsts.Item(i);

        End If;

    End For;

    Result := CalendarDimension.Shift(DimInst, t, Lag);

    Return Result;

End Function ShiftEl;


Результат использования отношения в формуле вычисляемого факта: значение
 для всех элементов будет сдвинуто. Направление и размер смещения задается
 пользователем через входной параметр Lag.


См. также:


[ICalendarDimensionClass](ICalendarDimensionClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
