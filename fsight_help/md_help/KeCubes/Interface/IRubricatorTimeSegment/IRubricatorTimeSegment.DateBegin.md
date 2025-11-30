# IRubricatorTimeSegment.DateBegin

IRubricatorTimeSegment.DateBegin
-


# IRubricatorTimeSegment.DateBegin


## Синтаксис


DateBegin: DateTime;


## Описание


Свойство DateBegin определяет
 дату начала временного диапазона данных.


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

    SegTime: IRubricatorTimeSegment;

Begin

    Mb := MetabaseClass.Active;

    RubInst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Segs := RubInst.Segments;

    Seg := Segs.Item(0).Edit;

    SegTime := Seg As IRubricatorTimeSegment;

    SegTime.DateBegin := DateTime.Parse("01.01.1999");

    SegTime.DateEnd := DateTime.Parse("01.01.2000");

    Seg.Save;

End Sub UserProc;


После выполнения примера будут изменены границы временного диапазона
 первого сегмента данных. Изменения будут сохранены.


См. также:


[IRubricatorTimeSegment](IRubricatorTimeSegment.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
