# ICalendarDimensionClass.Year

ICalendarDimensionClass.Year
-


# ICalendarDimensionClass.Year


## Синтаксис


Year(Calendar: [IDimInstance](kedims.chm::/interface/idiminstance/idiminstance.htm); El: Integer): Integer;


## Параметры


Calendar. Данные календарного справочника, по которым выполняется расчет;


El. Индекс элемента, относительно которого выполняется расчет.


## Описание


Метод Year возвращает индекс элемента, соответствующий году, в который входит указанный элемент.


## Комментарии


Для корректного расчёта календарный справочник должен содержать уровень «Годы». Если уровень отсутствует, то метод возвращает значение «-1».


Например, если календарный справочник содержит уровни годы, месяцы, дни и расчёт выполняется для:


-
элемента месячной динамики, то метод Year возвращает элемент, соответствующий году, в который входит месяц;


-
элемента дневной динамики, то метод Year возвращает элемент, соответствующий году, в который входит день.


## Пример


Пример является функцией, используемой для расчёта отношения в стандартном кубе.


Для выполнения примера добавьте ссылки на системные сборки «Cubes», «Dimensions».


			Function Year(T: Variant): Integer;

Var

    Cube: ICubeInstance;

    CubeDest: ICubeInstanceDestination;

    DimInsts: ICubeInstanceDimensions;

    DimInst: IDimInstance;

    i: Integer;

    Result: Integer;

Begin

    // Получаем текущий куб
    Cube := CubeClass.CurrentCube;

    CubeDest := Cube.Destinations.DefaultDestination;

    // Получаем календарное измерение
    DimInsts := CubeDest.Dimensions;

    For i := 0 To DimInsts.Count - 1 Do

        If (DimInsts.Item(i).Dimension Is ICalendarDimension) Then

            DimInst := DimInsts.Item(i);

        End If;

    End For;

    // Выполняем вычисления
    If CalendarDimension.Level(DimInst, t) = DimCalendarLevel.Quarter Then

        Result := CalendarDimension.Year(DimInst, t);

    Else

        Result := -1;

    End If;

    // Возвращаем результат
    Return Result;

End Function Year;


Результат использования отношения в формуле вычисляемого факта: значение для элемента квартальной динамики будет браться из значения соответствующего элемента годовой динамики.


См. также:


[ICalendarDimensionClass](ICalendarDimensionClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
