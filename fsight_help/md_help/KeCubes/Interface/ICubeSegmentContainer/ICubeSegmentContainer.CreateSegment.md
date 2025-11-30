# ICubeSegmentContainer.CreateSegment

ICubeSegmentContainer.CreateSegment
-


# ICubeSegmentContainer.CreateSegment


## Синтаксис


CreateSegment(SelectionSet: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)):
 [ICubeSegment](../ICubeSegment/ICubeSegment.htm);


## Параметры


SelectionSet. Отметка элементов
 измерений, в соответствии с которой будет определён доступ к данным.


## Описание


Метод CreateSegment создаёт
 сегмент куба.


## Комментарии


Перед созданием сегмента все измерения куба должны быть добавлены в
 [коллекцию измерений](ICubeSegmentContainer.Dimensions.htm)
 контейнера сегментов.


## Пример


Для выполнения примера в репозитории предполагается наличие стандартного
 куба с идентификатором STD_CUBE и контейнера сегментов с идентификатором
 SEG_CONTAINER. В список измерений куба входит измерение с идентификатором
 COUNTRY. В список измерений контейнера должны быть добавлены все измерения
 куба.


Добавьте ссылки на системные сборки: Cubes, Db, Dimensions, Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    SegContainer: ICubeSegmentContainer;

    Cube: IStandardCube;

    CubeDest: ICubeInstanceDestination;

    DimSS: IDimSelectionSet;

    DimS: IDimSelection;

    Segment: ICubeSegment;

    SecDesc: ISecurityDescriptor;

    Subject: ISecuritySubject;

    Acl: IAccessControlList;

Begin

    Mb := MetabaseClass.Active;

    SegContainer := Mb.ItemById("SEG_CONTAINER").Edit As ICubeSegmentContainer;

    // Указание контейнера сегментов для куба

    Cube := Mb.ItemById("STD_CUBE").Edit As IStandardCube;

    Cube.SegmentContainer := SegContainer;

    (Cube As IMetabaseObject).Save;

    // Открытие куба

    CubeDest := (Mb.ItemById("STD_CUBE").Open(Null) As ICubeInstance).Destinations.DefaultDestination;

    // Формирование отметки, в соответствии с которой будет создан сегмент

    DimSS := CubeDest.CreateDimSelectionSet;

    DimS := DimSS.FindById("COUNTRY");

    DimS.DeselectAll;

    DimS.SelectElement(0, False);

    // Создание сегмента на базе отметки куба

    Segment := SegContainer.CreateSegment(DimSS);

    // Сохранение изменений

    (SegContainer As IMetabaseObject).Save;

    // Раздача прав на сегмент

    SecDesc := (Segment As IMetabaseObjectDescriptor).SecurityDescriptor;

    SecDesc.Edit;

    Acl := SecDesc.Acl;

    Subject := Mb.Security.ResolveName("ПОЛЬЗОВАТЕЛИ");

    Acl.AddAce(AceType.AccessAllowed, Subject.Sid, MetabaseObjectPredefinedRights.Read);

    Subject := Mb.LogonSession.User;

    Acl.AddAce(AceType.AccessAllowed, Subject.Sid, MetabaseObjectPredefinedRights.Read Or MetabaseObjectPredefinedRights.Write);

    SecDesc.Apply(True);

End Sub UserProc;


При выполнении примера для стандартного куба будет задан контейнер сегментов.
 После этого по заданной отметке куба будет создан новый сегмент. На сегмент
 будут розданы права: для пользователей из группы Пользователи - только
 на чтение; для текущего пользователя, который выполняет код - чтение и
 запись.


См. также:


[ICubeSegmentContainer](ICubeSegmentContainer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
