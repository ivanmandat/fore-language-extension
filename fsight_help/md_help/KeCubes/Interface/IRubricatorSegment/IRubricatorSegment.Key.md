# IRubricatorSegment.Key

IRubricatorSegment.Key
-


# IRubricatorSegment.Key


## Синтаксис


Key: Integer;


## Описание


Свойство Key возвращает ключ
 сегмента данных.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR, в которой должны быть
 определены сегменты.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubInst: IRubricatorInstance;

    Segs: IRubricatorSegments;

    Seg: IRubricatorSegment;

    i: Integer;

Begin

    Mb := MetabaseClass.Active;

    RubInst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Segs := RubInst.Segments;

    Seg := Segs.Item(0);

    Debug.WriteLine("Ключ сегмента: " + Seg.Key.ToString);

    i := Seg.Type;

    Select Case i

        Case 1: Debug.WriteLine("Тип сегмента: Диапазон данных");

        Case 2: Debug.WriteLine("Тип сегмента: Временной диапазон");

    End Select;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен ключ и тип первого
 сегмента данных базы данных временных рядов.


См. также:


[IRubricatorSegment](IRubricatorSegment.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
