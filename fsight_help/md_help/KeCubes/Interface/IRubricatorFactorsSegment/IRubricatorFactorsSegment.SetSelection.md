# IRubricatorFactorsSegment.SetSelection

IRubricatorFactorsSegment.SetSelection
-


# IRubricatorFactorsSegment.SetSelection


## Синтаксис


SetSelection(Selection: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm));


## Параметры


Selection.
 Отметка элементов измерения.


## Описание


Метод SetSelection устанавливает
 отметку элементов измерения, определяющую диапазон данных.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В данной базе должен
 присутствовать атрибут показателя с идентификатором COUNTRY, являющийся
 ссылкой на справочник.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubInst: IRubricatorInstance;

    Rub: IRubricator;

    Segs: IRubricatorSegments;

    Seg: IRubricatorSegment;

    Sd: ISecurityDescriptor;

    Attr: IMetaAttribute;

    Dict: IMetabaseObject;

    DI: IDimInstance;

    Sel: IDimSelection;

    SegmFact: IRubricatorFactorsSegment;

    SegmObject: IMetabaseObjectDescriptor;

Begin

    Mb := MetabaseClass.Active;

    Rub := Mb.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

    RubInst := (Rub As IMetabaseObjectDescriptor).Open(Null) As IRubricatorInstance;

    Segs := RubInst.Segments;

    Seg := Segs.CreateFactorsSegment As IRubricatorSegment;

    SegmObject := Seg.AsObject;

    Sd := segmObject.SecurityDescriptor;

    Sd.Edit;

    Seg.AttributeName := "COUNTRY";

    Attr := Rub.Facts.Attributes.FindById("COUNTRY");

    Seg.Attribute := Attr;

    Dict := Attr.ValuesObject.Bind;

    DI := Dict.Open(Null) As IDimInstance;

    Sel := DI.CreateSelection;

    Sel.SelectElement(0, False);

    Sel.SelectElement(1, False);

    SegmFact := Seg As IRubricatorFactorsSegment;

    SegmFact.SetSelection(Sel);

    Seg.Save;

End Sub UserProc;


После выполнения примера в базе данных временных рядов будет создан
 сегмент, представляющий собой диапазон данных. Сегмент включает первый
 и второй элементы справочника, на который ссылается атрибут COUNTRY.


См. также:


[IRubricatorFactorsSegment](IRubricatorFactorsSegment.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
