# ICalendarDimensionClass.ToLevel

ICalendarDimensionClass.ToLevel
-


# ICalendarDimensionClass.ToLevel


## Синтаксис


ToLevel(Calendar: [IDimInstance](kedims.chm::/interface/idiminstance/idiminstance.htm);


El: Integer;


Level: [DimCalendarLevel](kedims.chm::/enums/dimcalendarlevel.htm)):
 Integer;


## Параметры


Calendar. Данные календарного
 справочника, по которым выполняется расчет;


El. Индекс элемента, относительно
 которого выполняется расчет;


Level. Уровень календаря, на котором выполняется расчёт.


## Описание


Метод ToLevel возвращает индекс
 элемента, соответствующего указанному элементу на заданном уровне.


## Комментарии


Если уровень Level отсутствует
 в календарном справочнике, то метод вернет значение «-1».


Например, если календарный справочник содержит уровни годы, полугодия,
 кварталы и расчёт выполняется по уровню полугодия для:


	- элемента годовой динамики, то метод ToLevel
	 возвращает элемент, соответствующий первому полугодию года;


	- элемента квартальной динамики, то метод ToLevel
	 возвращает элемент, соответствующий полугодию, в которое входит квартал.


## Пример


Пример является функцией, используемой для расчёта отношения в стандартном
 кубе.


Для выполнения примера добавьте ссылки на системные сборки «Cubes»,
 «Dimensions».


	Public Function ToLevel(T: Variant): Integer;

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

	    Result := CalendarDimension.ToLevel(DimInst, t, DimCalendarLevel.Quarter);

	    Return Result;

	End Function ToLevel;


Результат использования отношения в формуле вычисляемого факта: значение
 для всех элементов будет браться из соответствующих элементов квартальной
 динамики.


См. также:


[ICalendarDimensionClass](ICalendarDimensionClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
