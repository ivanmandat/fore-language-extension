# IRubricatorSegment.AsObject

IRubricatorSegment.AsObject
-


# IRubricatorSegment.AsObject


## Синтаксис


AsObject: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Метод AsObject возвращает временный
 объект для редактирования дескриптора безопасности.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR, в которой должен присутствовать
 атрибут показателя с идентификатором COUNTRY, являющийся ссылкой на справочник.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubInst: IRubricatorInstance;

    Segs: IRubricatorSegments;

    Seg: IRubricatorSegment;

    Sd: ISecurityDescriptor;

    User: IMetabaseUser;

    Attr: IMetaAttribute;

    DI: IDimInstance;

    Sel: IDimSelection;

    SegmFact: IRubricatorFactorsSegment;

    SegmObject: IMetabaseObjectDescriptor;

Begin

    Mb := MetabaseClass.Active;

    RubInst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Segs := RubInst.Segments;

    Seg := Segs.CreateFactorsSegment As IRubricatorSegment;

    SegmObject := Seg.AsObject;

    Sd := SegmObject.SecurityDescriptor;

    Sd.Edit;

    User := MB.Security.ResolveName("ADMIN") As IMetabaseUser;

    Debug.WriteLine(Sd.GetEffectiveRights(User));

    Seg.AttributeName := "COUNTRY";

    Attr := RubInst.Rubricator.Facts.Attributes.FindById("COUNTRY");

    Seg.Attribute := Attr;

    DI := Attr.ValuesObject.Open(Null) As IDimInstance;

    Sel := DI.CreateSelection;

    Sel.SelectElement(0, False);

    Sel.SelectElement(1, False);

    SegmFact := Seg As IRubricatorFactorsSegment;

    SegmFact.SetSelection(Sel);

    Seg.Save;

End Sub UserProc;


После выполнения примера в базе данных временных рядов будет создан
 сегмент, представляющий собой диапазон данных. Сегмент включает первый
 и второй элементы справочника, на который ссылается атрибут COUNTRY. В
 окно консоли будут выведены эффективные права пользователя ADMIN.


См. также:


[IRubricatorSegment](IRubricatorSegment.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
