# ICompoundDimensionInstance.Type

ICompoundDimensionInstance.Type
-


# ICompoundDimensionInstance.Type


## Синтаксис


Type: [DimCompoundDimensionType](../../Enums/DimCompoundDimensionType.htm);


## Описание


Свойство Type возвращает
 тип составного измерения.


## Пример


Для выполнения примера в репозитории предполагается наличие виртуального
 куба с идентификатором VIRT_CUBE.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Cube: IVirtualCube;

	    CDim: ICompoundDimension;

	    CDimInst: ICompoundDimensionInstance;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим виртуальный куб

	    Cube := MB.ItemById("VIRT_CUBE").Edit As IVirtualCube;

	    // Получим данные составного измерения
	 фактов

	    CDim := Cube.FactDimension As ICompoundDimension;

	    CDimInst := (CDim As IMetabaseObject).Open(Null) As ICompoundDimensionInstance;

	    Select Case CDimInst.Type

	        Case DimCompoundDimensionType.Compound: Debug.WriteLine("Тип составного измерения - обычный");

	        Case DimCompoundDimensionType.MetaCompound: Debug.WriteLine("Тип составного измерения - метаиерархия");

	        Case DimCompoundDimensionType.SideHeaderCompound: Debug.WriteLine("Тип составного измерения - измерение боковика");

	    End Select;

	End Sub UserProc;


При выполнении примера в окно консоли среды разработки будет выведен
 тип составного измерения виртуального куба.


См. также:


[ICompoundDimensionInstance](ICompoundDimensionInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
