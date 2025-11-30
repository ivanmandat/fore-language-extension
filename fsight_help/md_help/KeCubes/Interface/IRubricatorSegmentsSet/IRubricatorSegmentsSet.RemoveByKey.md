# IRubricatorSegmentsSet.RemoveByKey

IRubricatorSegmentsSet.RemoveByKey
-


# IRubricatorSegmentsSet.RemoveByKey


## Синтаксис


RemoveByKey(Key: Integer): Boolean;


## Параметры


Key. Ключ удаляемого сегмента.


## Описание


Метод RemoveByKey удаляет сегмент
 из коллекции по ключу.


## Комментарии


Метод возвращает значение True,
 если удаление прошло успешно.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


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

        Segs.RemoveByKey(1);

    Else

        Debug.WriteLine("Сегмент с ключом «1» не найден.");

    End If;

End Sub UserProc;


После выполнения примера будет осуществлен поиск сегмента с заданным
 ключом. Если сегмент будет найден, то он будет удален.


См. также:


[IRubricatorSegmentsSet](IRubricatorSegmentsSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
