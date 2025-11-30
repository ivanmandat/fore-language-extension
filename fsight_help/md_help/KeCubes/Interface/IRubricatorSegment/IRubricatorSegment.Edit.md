# IRubricatorSegment.Edit

IRubricatorSegment.Edit
-


# IRubricatorSegment.Edit


## Синтаксис


Edit: [IRubricatorSegment](IRubricatorSegment.htm);


## Описание


Метод Edit создает копию сегмента
 для редактирования.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR, в которой должны быть
 определены сегменты. Первый сегмент должен быть временным диапазоном.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubInst: IRubricatorInstance;

    Segs: IRubricatorSegments;

    Seg: IRubricatorSegment;

    SegmTime: IRubricatorTimeSegment;

Begin

    Mb := MetabaseClass.Active;

    RubInst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Segs := RubInst.Segments;

    Seg := Segs.Item(0).Edit;

    SegmTime := Seg As IRubricatorTimeSegment;

    SegmTime.SetPeriod(DateTime.Parse("01.01.2020"), DateTime.Parse("01.12.2020"));

    Seg.Save;

End Sub UserProc;


После выполнения примера копия первого сегмента базы данных временных
 рядов будет получена для редактирования. После корректировки временного
 диапазона сегмент будет сохранен.


См. также:


[IRubricatorSegment](IRubricatorSegment.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
