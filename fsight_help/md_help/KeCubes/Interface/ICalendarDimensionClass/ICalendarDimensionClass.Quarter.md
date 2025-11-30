# ICalendarDimensionClass.Quarter

ICalendarDimensionClass.Quarter
-


# ICalendarDimensionClass.Quarter


## Синтаксис


Quarter(Calendar: [IDimInstance](kedims.chm::/interface/idiminstance/idiminstance.htm); El: Integer): Integer;


## Параметры


Calendar. Данные календарного справочника, по которым выполняется расчет;


El. Индекс элемента, относительно которого выполняется расчет.


## Описание


Метод Quarter возвращает индекс элемента, соответствующий кварталу, в который входит указанный элемент.


## Комментарии


Для корректного расчёта календарный справочник должен содержать уровень «Кварталы». Если уровень отсутствует, то метод генерирует исключительную ситуацию.


Например, если календарный справочник содержит уровни годы, кварталы, дни и расчёт выполняется для:


-
элемента годовой динамики, то метод Quarter возвращает элемент, соответствующий первому кварталу в году;


-
элемента дневной динамики, то метод Quarter возвращает элемент, соответствующий месяцу, в который входит день.


## Пример


Пример является функцией, используемой для расчёта отношения в стандартном кубе.


Для выполнения примера добавьте ссылки на системные сборки «Cubes», «Dimensions».


			Function Quarter(T: Variant): Integer;

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

        Result := CalendarDimension.Quarter(DimInst, t);

    Else

        Result := -1;

    End If;

    // Возвращаем результат
    Return Result;

End Function Quarter;


Результат использования отношения в формуле вычисляемого факта: значение для элемента годовой динамики будет браться из первого квартала в году.


См. также:


[ICalendarDimensionClass](ICalendarDimensionClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
