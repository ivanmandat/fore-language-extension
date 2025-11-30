# ICalendarDimensionClass.HalfYear

ICalendarDimensionClass.HalfYear
-


# ICalendarDimensionClass.HalfYear


HalfYear(Calendar: [IDimInstance](kedims.chm::/interface/idiminstance/idiminstance.htm); El: Integer): Integer;


## Параметры


Calendar. Данные календарного справочника, по которым выполняется расчет;


El. Индекс элемента, относительно которого выполняется расчет.


## Описание


Метод HalfYear возвращает индекс элемента, соответствующий полугодию, в которое входит указанный элемент.


## Комментарии


Для корректного расчёта календарный справочник должен содержать уровень «Полугодия». Если уровень отсутствует, то метод возвращает значение «-1».


Например, если календарный справочник содержит уровни годы, полугодия, кварталы и расчёт выполняется для:


-
элемента годовой динамики, то метод HalfYear возвращает элемент, соответствующий первому полугодию;


-
элемента квартальной динамики, то метод HalfYear возвращает элемент, соответствующий полугодию, в которое входит квартал.


## Пример


Пример является функцией, используемой для расчёта отношения в стандартном кубе.


Для выполнения примера добавьте ссылки на системные сборки «Cubes», «Dimensions».


			Function HalfYear(T: Variant): Integer;

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

        Result := CalendarDimension.HalfYear(DimInst, t);

    Else

        Result := -1;

    End If;

    // Возвращаем результат
    Return Result;

End Function HalfYear;


Результат использования отношения в формуле вычисляемого факта: значение для элемента годовой динамики будет браться из первого полугодия.


См. также:


[ICalendarDimensionClass](ICalendarDimensionClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
