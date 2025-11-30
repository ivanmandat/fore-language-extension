# IRubricatorSegments.CreateTimeSegment

IRubricatorSegments.CreateTimeSegment
-


# IRubricatorSegments.CreateTimeSegment


## Синтаксис


CreateTimeSegment: [IRubricatorTimeSegment](../IRubricatorTimeSegment/IRubricatorTimeSegment.htm);


## Описание


Метод CreateTimeSegment добавляет
 временной диапазон в коллекцию.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    RubInst: IRubricatorInstance;

	    Segs: IRubricatorSegments;

	    Seg: IRubricatorSegment;

	    Sd: ISecurityDescriptor;

	    SegmTime: IRubricatorTimeSegment;

	    SegmObject: IMetabaseObjectDescriptor;

	Begin

	    Mb := MetabaseClass.Active;

	    RubInst := Mb.ItemById("«OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

	    Segs := RubInst.Segments;

	    Seg := Segs.CreateTimeSegment As IRubricatorSegment;

	    SegmObject := Seg.AsObject;

	    Sd := SegmObject.SecurityDescriptor;

	    Sd.Edit;

	    SegmTime := Seg As IRubricatorTimeSegment;

	    SegmTime.DateBegin := DateTime.Parse("01.01.2020");

	    SegmTime.DateEnd := DateTime.Parse("01.01.2021");

	    Seg.Save;

	End Sub UserProc;


После выполнения примера в базе данных временных рядов будет создан
 сегмент, представляющий собой временной диапазон. Сегмент включает данные
 показателей с 01.01.2020 по 01.01.2021.


См. также:


[IRubricatorSegments](IRubricatorSegments.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
