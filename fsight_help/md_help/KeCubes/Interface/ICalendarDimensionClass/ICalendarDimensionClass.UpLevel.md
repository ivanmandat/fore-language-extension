# ICalendarDimensionClass.UpLevel

ICalendarDimensionClass.UpLevel
-


# ICalendarDimensionClass.UpLevel


## Синтаксис


UpLevel(Calendar: [IDimInstance](kedims.chm::/interface/idiminstance/idiminstance.htm); El: Integer): Integer;


## Параметры


Calendar. Данные календарного справочника, по которым выполняется расчет;


El. Индекс элемента, относительно которого выполняется расчет.


## Описание


Метод UpLevel возвращает индекс элемента, являющегося дочерним для указанного элемента.


## Комментарии


Если дочерний элемент отсутствует, то метод вернет значение «-1».


Например, если календарный справочник содержит уровни годы, кварталы, месяцы и расчёт выполняется для:


-
элемента годовой динамики, то метод UpLevel возвращает элемент, соответствующий первому кварталу года;


-
элемента квартальной динамики, то метод UpLevel возвращает элемент, соответствующий первому месяцу квартала.


## Пример


Пример является функцией, используемой для расчёта отношения в стандартном кубе.


Для выполнения примера добавьте ссылки на системные сборки «Cubes», «Dimensions».


			Public Function UpLevel(T: Variant): Integer;

Var

    Cube: ICubeInstance;

    CubeDest: ICubeInstanceDestination;

    DimInsts: ICubeInstanceDimensions;

    DimInst: IDimInstance;

    i: Integer;

    Result: Integer;

    el1: Integer;

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
    el1 := CalendarDimension.UpLevel(DimInst, t);

    Result := CalendarDimension.IifLevel(DimInst, t, DimCalendarLevel.Year, el1, t);

    // Возвращаем результат
    Return Result;

End Function UpLevel;


Результат использования отношения в формуле вычисляемого факта: значение для элементов годовой динамики будет браться из значений элементов, соответствующих первым кварталам.


См. также:


[ICalendarDimensionClass](ICalendarDimensionClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
