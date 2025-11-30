# IRdsSegments.Add

IRdsSegments.Add
-


# IRdsSegments.Add


## Синтаксис


Add: [IRdsSegment](../IRdsSegment/IRdsSegment.htm);


## Описание


Метод Add создает сегмент справочника
 НСИ.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dict: IRdsDictionary;

	    Segments: IRdsSegments;

	    Segment: IRdsSegment;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Edit;

	    Dict := MObj As IRdsDictionary;

	    Segments := Dict.Segments;

	    Segment := Segments.Add;

	    Segment.Id := "NewSegment";

	    Segment.Name := "Сегмент №1";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в справочнике НСИ будет создан новый сегмент.


См. также:


[IRdsSegments](IRdsSegments.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
