# IRubricatorInstance.Segments

IRubricatorInstance.Segments
-


# IRubricatorInstance.Segments


## Синтаксис


Segments: [IRubricatorSegments](../IRubricatorSegments/IRubricatorSegments.htm);


## Описание


Свойство Segments возвращает
 коллекцию сегментов данных базы данных временных рядов.


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

    RubInst := mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Segs := RubInst.Segments;

    If Segs.Count > 0 Then

        Segs.Clear;

    End If;

End Sub UserProc;


После выполнения примера коллекция сегментов базы данных временных рядов
 будет очищена, если в ней есть элементы.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
