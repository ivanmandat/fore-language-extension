# ICubeSegmentContainer.GetAllSegments

ICubeSegmentContainer.GetAllSegments
-


# ICubeSegmentContainer.GetAllSegments


## Синтаксис


GetAllSegments: [ICubeSegments](../ICubeSegments/ICubeSegments.htm);


## Описание


Метод GetAllSegments возвращает
 коллекцию сегментов, хранящихся в контейнере.


## Пример


Для выполнения примера в репозитории предполагается наличие стандартного
 куба с идентификатором STD_CUBE. В список измерений куба входит измерение
 с идентификатором COUNTRY. Также к кубу подключен контейнер сегментов.


Добавьте ссылки на системные сборки: Cubes, Db, Dimensions, Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    Cube: IStandardCube;

    SegContainer: ICubeSegmentContainer;

    Segments: ICubeSegments;

    Segment: ICubeSegment;

    Factory: IDimSelectionSetFactory;

    DimSS: IDimSelectionSet;

    DimS: IDimSelection;

Begin

    Mb := MetabaseClass.Active;

    Cube := Mb.ItemById("STD_CUBE").Bind As IStandardCube;

    // Получение контейнера сегментов куба

    SegContainer := Cube.SegmentContainer;

    // Список всех сегментов

    Segments := SegContainer.GetAllSegments;

    Segment := Segments.Item(0);

    Factory := New DimSelectionSetFactory.Create;

    DimSS := Factory.CreateDimSelectionSet;

    // Получение отметки сегмента

    SegContainer.ReadSelectionSet(Segment, DimSS);

    // Изменение отметки сегмента

    DimS := DimSS.FindById("COUNTRY");

    DimS.DeselectAll;

    DimS.SelectElement(1, False);

    SegContainer.WriteSelectionSet(Segment, DimSS);

End Sub UserProc;


При выполнении примера будет получен сегмент из контейнера сегментов,
 с которым работает куб. Для сегмента будет получена и изменена отметка.


См. также:


[ICubeSegmentContainer](ICubeSegmentContainer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
