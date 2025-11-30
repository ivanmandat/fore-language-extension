# IRubricatorTimeSegment.SetPeriod

IRubricatorTimeSegment.SetPeriod
-


# IRubricatorTimeSegment.SetPeriod


## Синтаксис


SetPeriod(dBegin: DateTime; dEnd: DateTime);


## Параметры


dBegin. Дата начала временного
 диапазона данных.


dEnd. Дата окончания временного
 диапазона данных.


## Описание


Метод SetPeriod устанавливает
 границы временного диапазона данных.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «OBJ_RUBRICATOR», которой должны быть
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

    SegTime.SetPeriod(DateTime.Parse("01.01.2000"), DateTime.Parse("01.12.2000"));

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
