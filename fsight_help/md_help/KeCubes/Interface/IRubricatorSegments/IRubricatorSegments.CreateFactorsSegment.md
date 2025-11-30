# IRubricatorSegments.CreateFactorsSegment

IRubricatorSegments.CreateFactorsSegment
-


# IRubricatorSegments.CreateFactorsSegment


## Синтаксис


CreateFactorsSegment: [IRubricatorFactorsSegment](../IRubricatorFactorsSegment/IRubricatorFactorsSegment.htm);


## Описание


Метод CreateFactorsSegment добавляет
 диапазон данных в коллекцию.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR, в которой содержится
 [атрибут
 показателя](UiNavObj.chm::/TimeSeriesDatabase/TS_Attributes.htm#attr) с идентификатором COUNTRY, являющийся [ссылкой
 на справочник](UiNavObj.chm::/TimeSeriesDatabase/TS_Attributes.htm#type).


Для выполнения примера добавьте ссылки на системные сборки: Cubes, Dimensions,
 Metabase, Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubInst: IRubricatorInstance;

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

	    MB := MetabaseClass.Active;

	    RubInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

	    Segs := RubInst.Segments;

	    Seg := Segs.CreateFactorsSegment As IRubricatorSegment;

	    SegmObject := Seg.AsObject;

	    Sd := SegmObject.SecurityDescriptor;

	    Sd.Edit;

	    Seg.AttributeName := "COUNTRY";

	    Attr := RubInst.Rubricator.Facts.Attributes.FindById("COUNTRY");

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


После выполнения примера в базе данных временных
 рядов будет создан сегмент, представляющий собой диапазон данных. Сегмент
 включает первый и второй элементы справочника, на который ссылается атрибут
 COUNTRY.


См. также:


[IRubricatorSegments](IRubricatorSegments.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
