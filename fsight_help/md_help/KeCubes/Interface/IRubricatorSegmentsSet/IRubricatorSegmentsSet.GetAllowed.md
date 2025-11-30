# IRubricatorSegmentsSet.GetAllowed

IRubricatorSegmentsSet.GetAllowed
-


# IRubricatorSegmentsSet.GetAllowed


## Синтаксис


GetAllowed(DesiredAccess: Integer; Attribute: [IMetaAttribute](KeRds.chm::/Interface/IMetaAttribute/IMetaAttribute.htm);
 Selection: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm));


## Параметры


DesiredAccess. Значение, определяющие
 действия над элементами сегмента, возможность произвести которые необходимо
 проверить.


Attribute. Атрибут, определяющий
 измерение.


Selection. Отметка элементов
 измерения.


## Описание


Метод GetAllowed позволяет получить
 отметку элементов измерения, доступных для совершения указанных действий
 текущим пользователем.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR, в которой должны
 быть определены сегменты и должен присутствовать атрибут показателя с
 идентификатором COUNTRY, являющийся ссылкой на справочник.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubInst: IRubricatorInstance;

    Segs: IRubricatorSegments;

    Attr: IMetaAttribute;

    Dict: IMetabaseObject;

    DI: IDimInstance;

    Sel: IDimSelection;

Begin

    Mb := MetabaseClass.Active;

    RubInst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Segs := RubInst.Segments;

    Attr := RubInst.Rubricator.Facts.Attributes.FindById("COUNTRY");

    Dict := Attr.ValuesObject.Bind;

    DI := Dict.Open(Null) As IDimInstance;

    Sel := DI.CreateSelection;

    Sel.SelectAll;

    Segs.GetAllowed(MetabaseObjectPredefinedRights.Read, Attr, Sel);

    Debug.WriteLine(Sel.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будут выведена отметка элементов,
 доступных для чтения текущему пользователю.


См. также:


[IRubricatorSegmentsSet](IRubricatorSegmentsSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
