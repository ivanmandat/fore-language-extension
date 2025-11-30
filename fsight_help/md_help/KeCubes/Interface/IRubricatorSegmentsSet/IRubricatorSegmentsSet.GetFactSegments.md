# IRubricatorSegmentsSet.GetFactSegments

IRubricatorSegmentsSet.GetFactSegments
-


# IRubricatorSegmentsSet.GetFactSegments


## Синтаксис


GetFactSegments(Data: [IRubricatorFactData](../IRubricatorFactData/IRubricatorFactData.htm)):
 [IRubricatorSegmentsSet](IRubricatorSegmentsSet.htm);


## Параметры


Data. Показатель.


## Описание


Метод GetFactSegments возвращает
 количество диапазонов данных, в которые входит указанный показатель.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR, в которой должны быть
 определены сегменты и присутствовать показатель с ключом 89817.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubInst: IRubricatorInstance;

    Segs: IRubricatorSegments;

    Factor: IRubricatorFactData;

Begin

    Mb := MetabaseClass.Active;

    RubInst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Segs := RubInst.Segments;

    Factor := rubInst.GetFactData(89817);

    Debug.WriteLine(Segs.GetFactSegments(Factor).Count);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено число сегментов,
 в которые входит показатель с указанным ключом.


См. также:


[IRubricatorSegmentsSet](IRubricatorSegmentsSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
