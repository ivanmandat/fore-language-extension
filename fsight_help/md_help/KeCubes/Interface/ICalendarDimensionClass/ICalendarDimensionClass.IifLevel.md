# ICalendarDimensionClass.IifLevel

ICalendarDimensionClass.IifLevel
-


# ICalendarDimensionClass.IifLevel


## Синтаксис


IifLevel(


Calendar: [IDimInstance](kedims.chm::/interface/idiminstance/idiminstance.htm);


El: Integer;


Level: [DimCalendarLevel](kedims.chm::/enums/dimcalendarlevel.htm);


El1: Integer;


El2: Integer): Integer;


## Параметры


Calendar. Данные календарного справочника, по которым выполняется расчет;


El. Индекс элемента, относительно которого выполняется расчет;


Level. Уровень, на принадлежность к которому проверяется элемент El;


El1. Индекс элемента, возвращаемый, если элемент El расположен на уровне Level;


El2. Индекс элемента, возвращаемый, если элемент El не расположен на уровне Level.


## Описание


Метод IifLevel проверяет: принадлежит ли указанный элемент заданному уровню справочника.


## Комментарии


Если элемент El принадлежит уровню Level, то метод возвращает индекс элемента El1, иначе - El2.


## Пример


Пример является функцией, используемой для расчёта отношения в стандартном кубе.


Для выполнения примера добавьте ссылки на системные сборки «Cubes», «Dimensions».


			Function IifLevel(T: Variant): Integer;

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
    el1 := CalendarDimension.DownLevel(DimInst, t);

    Result := CalendarDimension.IifLevel(DimInst, t, DimCalendarLevel.Quarter, el1, t);

    // Возвращаем результат
    Return Result;

End Function IifLevel;


Результат использования отношения в формуле вычисляемого факта: значение для элементов квартальной динамики будет браться из соответствующих элементов годовой динамики.


См. также:


[ICalendarDimensionClass](ICalendarDimensionClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
