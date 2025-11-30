# IRubricatorSegmentsSet.GetSubjectAllowed

IRubricatorSegmentsSet.GetSubjectAllowed
-


# IRubricatorSegmentsSet.GetSubjectAllowed


## Синтаксис


GetSubjectAllowed(Subject: [ISecuritySubject](KeSom.chm::/Interface/ISecuritySubject/ISecuritySubject.htm);
 DesiredAccess: Integer; Attribute: [IMetaAttribute](KeRds.chm::/Interface/IMetaAttribute/IMetaAttribute.htm);
 Selection: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm));


## Параметры


Subject. Субъект безопасности.


DesiredAccess. Значение, определяющие
 действия над элементами сегмента, возможность произвести которые необходимо
 проверить. Для указания значения маски необходимо использовать значения
 перечислимого типа [MetabaseObjectPredefinedRights](KeSom.chm::/Enums/MetabaseObjectPredefinedRights.htm)
 в комбинации с [CubeSpecificRights](KeSom.chm::/Enums/CubeSpecificRights.htm).
 При раздаче прав на сегменты используются соответствующие операции Read и Write.


Attribute. Атрибут, определяющий
 измерение.


Selection. Отметка элементов
 измерения.


## Описание


Метод GetSubjectAllowed позволяет
 получить отметку элементов измерения, доступных для совершения указанных
 действий указанным пользователем.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR, в которой должны быть
 определены сегменты и должен присутствовать атрибут показателя с идентификатором
 COUNTRY, являющийся ссылкой на справочник.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubInst: IRubricatorInstance;

    Segs: IRubricatorSegments;

    Attr: IMetaAttribute;

    Dict: IMetabaseObject;

    DI: IDimInstance;

    Sel: IDimSelection;

    MbSec: IMetabaseSecurity;

    User: IMetabaseUser;

Begin

    Mb := MetabaseClass.Active;

    RubInst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Segs := RubInst.Segments;

    Attr := RubInst.Rubricator.Facts.Attributes.FindById("COUNTRY");

    Dict := Attr.ValuesObject.Bind;

    DI := Dict.Open(Null) As IDimInstance;

    Sel := DI.CreateSelection;

    Sel.SelectAll;

    MbSec := MB.Security;

    User := mbSec.ResolveName("ADMIN") As IMetabaseUser;

    Segs.GetSubjectAllowed(User, MetabaseObjectPredefinedRights.Read, Attr, Sel);

    Debug.WriteLine(Sel.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будут выведена отметка элементов,
 доступных для чтения пользователю ADMIN.


См. также:


[IRubricatorSegmentsSet](IRubricatorSegmentsSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
