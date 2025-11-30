# ICubeSegment.Dimensions

ICubeSegment.Dimensions
-


# ICubeSegment.Dimensions


## Синтаксис


Dimensions: [ICubeSegmentDimensions](../ICubeSegmentDimensions/ICubeSegmentDimensions.htm);


## Описание


Свойство Dimensions возвращает
 коллекцию измерений сегмента куба.


## Комментарии


Сегмент может иметь свой собственный список измерений, которые являются
 подмножеством [всех
 измерений](../ICubeSegmentContainer/ICubeSegmentContainer.Dimensions.htm) контейнера сегментов. Сегмент применяется к тем кубам, которые
 в своей структуре имеют те же измерения, которые включены в текущую коллекцию
 Dimensions.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 сегментов с идентификатором SEG_CONTAINER.


Добавьте ссылки на системные сборки: Cubes, Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    SegContainer: ICubeSegmentContainer;

    Segments: ICubeSegments;

    Segment: ICubeSegment;

Begin

    Mb := MetabaseClass.Active;

    SegContainer := Mb.ItemById("SEG_CONTAINER").Bind As ICubeSegmentContainer;

    Debug.WriteLine("---Container dimensions---");

    ShowDimsInfo(SegContainer.Dimensions);

    Segments := SegContainer.GetAllSegments;

    Debug.WriteLine("---Segment dimensions---");

    For Each Segment In Segments Do

        Debug.WriteLine("Segment: " + (Segment As IMetabaseObject).Name);

        ShowDimsInfo(Segment.Dimensions);

    End For;

End Sub UserProc;


Sub ShowDimsInfo(Dims: ICubeSegmentDimensions);

Var

    Dim: ICubeSegmentDimension;

    MObj: IMetabaseObject;

Begin

    Debug.Indent;

    For Each Dim In Dims Do

        MObj := Dim.Dimension As IMetabaseObject;

        Debug.WriteLine(MObj.Name + '(' + MObj.Id + ')');

    End For;

    Debug.Unindent;

End Sub ShowDimsInfo;


При выполнении примера в консоль среды разработки будет выведена информация
 об измерениях, добавленных в контейнер сегментов, и об измерениях каждого
 отдельного сегмента.


См. также:


[ICubeSegment](ICubeSegment.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
