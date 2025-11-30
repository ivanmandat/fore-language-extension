# IVirtualCube.IsFiltrationMatrix

IVirtualCube.IsFiltrationMatrix
-


# IVirtualCube.IsFiltrationMatrix


## Синтаксис


IsFiltrationMatrix: Boolean;


## Описание


Свойство IsFiltrationMatrix
 определяет, будет ли осуществляться фильтрация измерения метаиерархий
 в виртуальном кубе.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Фильтрация измерения матаиерархий в виртуальном кубе будет осуществляться;


	- False. Фильтрация измерения
	 метаиерархии в витруальном кубе осуществляться не будет.


Для определения, будет ли использоваться измерение метаиерархии, используйте
 [IVirtualCube.IsMeta](IVirtualCube.IsMeta.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие виртуального
 куба с идентификатором «VIRT_CUBE», источником данных которого является
 база данных временных рядов.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: IVirtualCube;

    CDim: ICompoundDimension;

    Params: IMetabaseObjectParamValues;

    CDimInst: ICompoundDimensionInstance;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим виртуальный куб

    Cube := MB.ItemById("VIRT_CUBE").Edit As IVirtualCube;

    // Включим составное измерение метаиерархии

    If Not Cube.IsMeta Then

        Cube.IsMeta := True;

    End If;

    // Фильтрация составного измерения метаиерархии по флагу виртуального куба

    If Not Cube.IsFiltrationMatrix Then

        Cube.IsFiltrationMatrix := True;

    End If;

    // Получим данные составного измерения

    CDim := Cube.FactDimension As ICompoundDimension;

    Params := (CDim As IMetabaseObject).Params.CreateEmptyValues;

    CDimInst := (CDim As IMetabaseObject).Open(Params) As ICompoundDimensionInstance;

    Select Case (CDimInst.Type As Integer)

        Case 1: Debug.WriteLine("Тип составного измерения - обычный");

        Case 2: Debug.WriteLine("Тип составного измерения - метаиерархия");

    End Select;

End Sub UserProc;


После выполнения примера в окно консоли выведется тип составного измерения.


См. также:


[IVirtualCube](IVirtualCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
