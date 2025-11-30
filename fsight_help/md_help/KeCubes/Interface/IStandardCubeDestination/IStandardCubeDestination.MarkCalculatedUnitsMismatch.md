# IStandardCubeDestination.MarkCalculatedUnitsMismatch

IStandardCubeDestination.MarkCalculatedUnitsMismatch
-


# IStandardCubeDestination.MarkCalculatedUnitsMismatch


## Синтаксис


MarkCalculatedUnitsMismatch: Boolean;


## Описание


Свойство MarkCalculatedUnitsMismatch
 определяет признак отметки результатов агрегации показателей с разными
 единицами измерения.


## Комментарии


Допустимые значения:


	- True. Отмечать результаты
	 агрегации показателей с разными единицами измерения;


	- False. По умолчанию.
	 Не отмечать результаты агрегации показателей с разными единицами измерения.


Получить данные, агрегированные по показателям с разными единицами измерения,
 можно при расчёте куба в режиме [CubeInstanceDestinationExecutorOptions.MarkAggregationsUnitsMismatch](../../Enums/CubeInstanceDestinationExecutorOptions.htm).
 Данные будут отмечены флагом, доступным в свойстве [IMatrixIterator.ValueFlag](KeMatrix.chm::/Interface/IMatrixIterator/IMatrixIterator.ValueFlag.htm)
 в результирующей матрице куба.


## Пример


Для выполнения примера в репозитории предполагается наличие стандартного
 куба с идентификатором STD_CUBE.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Cube: IStandardCube;

	    Dest: IStandardCubeDestination;

	Begin

	    Mb := MetabaseClass.Active;

	    Cube := Mb.ItemById("STD_CUBE").Edit As IStandardCube;

	    Dest := Cube.Destinations.Item(0);

	    // Отмечать результаты агрегации показателей с разными единицами измерения

	    Dest.MarkCalculatedUnitsMismatch := True;

	    // Сохранение изменений

	    (Cube As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера для куба будет включена отметка результатов агрегации
 показателей с разными единицами измерения.


См. также:


[IStandardCubeDestination](IStandardCubeDestination.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
