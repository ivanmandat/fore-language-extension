# IRubricatorSegmentsSet.Remove

IRubricatorSegmentsSet.Remove
-


# IRubricatorSegmentsSet.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс удаляемого сегмента
 данных.


## Описание


Метод Remove удаляет указанный
 сегмент из коллекции.


## Комментарии


Метод возвращает значение True,
 если удаление прошло успешно.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR, в которой должны быть
 определены сегменты.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubInst: IRubricatorInstance;

    Segs: IRubricatorSegments;

Begin

    Mb := MetabaseClass.Active;

    RubInst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Segs := RubInst.Segments;

    If Segs.Count > 0 Then

        Segs.Remove(0);

    End If;

End Sub UserProc;


После выполнения примера из коллекции сегментов базы данных временных
 рядов будет удален первый элемент.


См. также:


[IRubricatorSegmentsSet](IRubricatorSegmentsSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
