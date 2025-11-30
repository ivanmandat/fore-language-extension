# IRubricatorSegmentsSet.FindByKey

IRubricatorSegmentsSet.FindByKey
-


# IRubricatorSegmentsSet.FindByKey


## Синтаксис


FindByKey(Key: Integer): [IRubricatorSegment](../IRubricatorSegment/IRubricatorSegment.htm);


## Параметры


Key. Ключ сегмента.


## Описание


Метод FindByKey осуществляет
 поиск сегмента в коллекции по ключу.


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

    If Segs.FindByKey(1) <> Null Then

        Debug.WriteLine("Сегмент с ключом «1» найден.");

    Else

        Debug.WriteLine("Сегмент с ключом «1» не найден.");

    End If;

End Sub UserProc;


После выполнения примера будет осуществлен поиск сегмента с заданным
 ключом. Результаты поиска будут выведены в окно консоли.


См. также:


[IRubricatorSegmentsSet](IRubricatorSegmentsSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
