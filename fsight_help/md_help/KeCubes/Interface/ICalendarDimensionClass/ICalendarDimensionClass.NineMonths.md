# ICalendarDimensionClass.NineMonths

ICalendarDimensionClass.NineMonths
-


# ICalendarDimensionClass.NineMonths


## Синтаксис


NineMonths(Calendar: [IDimInstance](kedims.chm::/interface/idiminstance/idiminstance.htm); El: Integer): Integer;


## Параметры


Calendar. Данные календарного справочника, по которым выполняется расчет;


El. Индекс элемента, относительно которого выполняется расчет.


## Описание


Метод NineMonths возвращает индекс элемента, соответствующий периоду «9 месяцев», в который входит указанный элемент.


## Комментарии


Для корректного расчёта календарный справочник должен содержать уровень «9 месяцев». Если уровень «Месяцы» отсутствует, то метод генерирует исключительную ситуацию.


Например, если календарный справочник содержит уровни годы, 9 месяцев, дни и расчёт выполняется для:


-
элемента годовой динамики, то метод NineMonths возвращает элемент, соответствующий первому периоду 9 месяцев в году;


-
элемента дневной динамики, то метод NineMonths возвращает элемент, соответствующий периоду 9 месяцев, в который входит день.


## Пример


Пример является функцией, используемой для расчёта отношения в стандартном кубе.


Для выполнения примера добавьте ссылки на системные сборки «Cubes», «Dimensions».


			Function NineMonths(T: Variant): Integer;

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
    If CalendarDimension.Level(DimInst, t) = DimCalendarLevel.Year Then

        Result := CalendarDimension.NineMonths(DimInst, t);

    Else

        Result := -1;

    End If;

    // Возвращаем результат
    Return Result;

End Function NineMonths;


Результат использования отношения в формуле вычисляемого факта: значение для элемента годовой динамики будет браться из первого периода в 9 месяцев.


См. также:


[ICalendarDimensionClass](ICalendarDimensionClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
