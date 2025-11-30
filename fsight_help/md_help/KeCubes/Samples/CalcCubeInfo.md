# Просмотр информации о структуре вычисляемого куба

Просмотр информации о структуре вычисляемого куба
-


# Просмотр информации о структуре вычисляемого куба


Ниже приведен пример просмотра информации о структуре вычисляемого куба:
 выводится информация об источниках, измерениях источников и собственных
 измерениях вычисляемого куба. Вывод производится в консоль среды разработки.
 Для выполнения примера предполагается наличие в репозитории вычисляемого
 куба с идентификатором «CalculatedCube». Добавьте ссылки на системные
 сборки: Cubes, Dimensions, Metabase.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: ICalculatedCube;

    CubeSource: ICalculatedCubeSource;

    CubeDim: ICalculatedCubeDimension;

    MDesc: IMetabaseObjectDescriptor;

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemById("CalculatedCube").Bind As ICalculatedCube;

    //Информация об источниках вычисляемого куба и их измерениях

    For Each CubeSource In Cube.Sources Do

        Debug.WriteLine("Источник: " + CubeSource.Name + '(' + CubeSource.Id + ')');

        Debug.WriteLine("Измерения источника:");

        Debug.Indent;

        For Each CubeDim In CubeSource.Dimensions Do

            MDesc := CubeDim.Dimension As IMetabaseObjectDescriptor;

            Debug.WriteLine(MetabaseClass.CommonClassName(MDesc.ClassId As MetabaseObjectClass) + ": " + MDesc.Name + '(' + MDesc.Id + ')');

        End For;

        Debug.Unindent;

    End For;

    //Информация о собственных измерениях вычисляемого куба

    Debug.WriteLine("Измерения вычисляемого куба:");

    For Each CubeDim In Cube.Dimensions Do

        MDesc := CubeDim.Dimension As IMetabaseObjectDescriptor;

        Debug.Indent;

        Debug.Write(MetabaseClass.CommonClassName(MDesc.ClassId As MetabaseObjectClass) + ": " + MDesc.Name + '(' + MDesc.Id + ". ");

        If CubeDim.Fixed Then

            Debug.WriteLine("Фиксированное");

        Else

            Debug.WriteLine("Не фиксированное");

        End If;

        Debug.Unindent;

    End For;

End Sub UserProc;


См. также:


[Примеры](KeCubes_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
