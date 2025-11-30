# ICubeSegmentContainer.WriteIsActive

ICubeSegmentContainer.WriteIsActive
-


# ICubeSegmentContainer.WriteIsActive


## Синтаксис


WriteIsActive(Segment: [ICubeSegment](../ICubeSegment/ICubeSegment.htm);
 Value: Boolean);


## Параметры


Segment. Сегмент, для которого
 необходимо изменить признак активности.


Value.
 Значение активности сегмента, которое необходимо установить.


## Описание


Метод WriteIsActive изменяет
 для указанного сегмента признак активности.


## Комментарии


Настройки активных сегментов применяются при работе под пользователем,
 для которого розданы права на эти сегменты. Новые сегменты по умолчанию
 всегда активны. Для смены активности сегмента и исключения его из работы
 укажите в параметре Value значение
 False, для возврата активности
 - значение True.


## Пример


Для выполнения примера в репозитории предполагается наличие стандартного
 куба с идентификатором STD_CUBE. К кубу подключен контейнер сегментов.


Добавьте ссылки на системные сборки: Cubes, Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    Cube: IStandardCube;

    SegContainer: ICubeSegmentContainer;

    Segments: ICubeSegments;

    Segment: ICubeSegment;

    bActive: Boolean;

Begin

    Mb := MetabaseClass.Active;

    Cube := Mb.ItemById("STD_CUBE").Bind As IStandardCube;

    // Получение контейнера сегментов куба

    SegContainer := Cube.SegmentContainer;

    // Список всех сегментов

    Segments := SegContainer.GetAllSegments;

    Segment := Segments.Item(0);

    // Получение активности сегмента

    bActive := SegContainer.ReadIsActive(Segment);

    Debug.WriteLine("Active: " + bActive.ToString);

    // Изменение активности сегмента

    SegContainer.WriteIsActive(Segment, Not bActive);

End Sub UserProc;


При выполнении примера будет получен первый сегмент указанного куба.
 Для сегмента будет изменена активность на противоположную уже установленной.


См. также:


[ICubeSegmentContainer](ICubeSegmentContainer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
