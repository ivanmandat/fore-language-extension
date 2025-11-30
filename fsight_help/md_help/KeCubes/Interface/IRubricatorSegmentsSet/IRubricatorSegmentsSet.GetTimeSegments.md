# IRubricatorSegmentsSet.GetTimeSegments

IRubricatorSegmentsSet.GetTimeSegments
-


# IRubricatorSegmentsSet.GetTimeSegments


## Синтаксис


GetTimeSegments(DateBegin: DateTime; DateEnd: DateTime):
 [IRubricatorSegmentsSet](IRubricatorSegmentsSet.htm);


## Параметры


DateBegin. Дата начала временного
 диапазона.


DateEnd. Дата окончания временного
 диапазона.


## Описание


Метод GetTimeSegments возвращает
 количество временных диапазонов данных, которые попадают в указанный диапазон.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR, в которой должны быть
 определены сегменты.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubInst: IRubricatorInstance;

    Segs: IRubricatorSegments;

    SegCount: IRubricatorSegmentsSet;

Begin

    Mb := MetabaseClass.Active;

    RubInst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Segs := RubInst.Segments;

    SegCount := Segs.GetTimeSegments(DateTime.Parse("01.01.2000"), DateTime.Parse("01.12.2000"));

    Debug.WriteLine(SegCount.Count);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено число сегментов,
 которые попадают во временной диапазон [01.01.2000; 01.12.2000].


См. также:


[IRubricatorSegmentsSet](IRubricatorSegmentsSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
