# ICubeSegmentContainer.Database

ICubeSegmentContainer.Database
-


# ICubeSegmentContainer.Database


## Синтаксис


Database: [IDatabase](KeDb.chm::/Interface/IDatabase/IDatabase.htm);


## Описание


Свойство Database определяет
 базу данных, в которой будут храниться таблицы сегментов.


## Комментарии


Если свойство не определено, то будет использоваться база данных, установленная
 для репозитория [по
 умолчанию](KeSom.chm::/Interface/IMetabase/IMetabase.SpecialObject.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 с идентификатором DB и стандартного куба с идентификатором STD_CUBE.


Добавьте ссылки на системные сборки: Cubes, Db, Dimensions, Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MDesc: IMetabaseObjectDescriptor;

    SegContainer: ICubeSegmentContainer;

    StdCube: IStandardCube;

    Dimensions: IStandardCubeDimensions;

    Dimension: IStandardCubeDimension;

    SegDims: ICubeSegmentDimensions;

Begin

    Mb := MetabaseClass.Active;

    // Базовая информация для создания нового контейнера сегментов

    CrInfo := Mb.CreateCreateInfo;

    CrInfo.Parent := Mb.ItemById("FOLDER_FOR_SEGMENTS_CONTAINERS");

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_CUBE_SEGMENT_CONTAINER;

    CrInfo.Id := "SEG_CONTAINER";

    CrInfo.KeepEdit := True;

    // Создание контейнера сегментов

    MDesc := Mb.CreateObject(CrInfo);

    SegContainer := MDesc As ICubeSegmentContainer;

    // Настройка контейнера сегментов

    SegContainer.Database := Mb.ItemById("DB").Bind As IDatabase;

    SegDims := SegContainer.Dimensions;

    // Добавление в список измерений всех измерений куба

    StdCube := Mb.ItemById("STD_CUBE").Bind As IStandardCube;

    Dimensions := StdCube.Destinations.Item(0).Dimensions;

    For Each Dimension In Dimensions Do

        If IsNull(SegDims.FindByDim(Dimension.Dimension)) Then

            SegDims.Add(Dimension.Dimension);

        End If;

    End For;

    // Сохранение изменений

    (SegContainer As IMetabaseObject).Save;

    Debug.WriteLine("---New---");

    Debug.WriteLine(MDesc.Name + '(' + MDesc.Id + ')');

    Debug.WriteLine("Dimension count: " + SegDims.Count.ToString);

End Sub UserProc;


При выполнении примера в скрытой системной папке будет создан новый
 контейнер сегментов. Для контейнера будет определена база данных для хранения
 таблиц, также в список измерений будут добавлены все измерения указанного
 куба. В консоль среды разработки будет выведена информация о собзанном
 контейнере сегментов.


См. также:


[ICubeSegmentContainer](ICubeSegmentContainer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
