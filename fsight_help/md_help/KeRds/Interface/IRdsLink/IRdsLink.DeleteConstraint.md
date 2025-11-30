# IRdsLink.DeleteConstraint

IRdsLink.DeleteConstraint
-


# IRdsLink.DeleteConstraint


## Синтаксис


DeleteConstraint: [RdsConstraintType](../../Enums/RdsConstraintType.htm);


## Описание


Свойство DeleteConstraint определяет
 поведение при попытке удаления элементов в связанном справочнике.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификаторами "Dict_1". В справочнике
 имеется связь с каким-либо другим справочником НСИ.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dict: IRdsDictionary;

	    Link: IRdsLink;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Edit;

	    Dict := MObj As IRdsDictionary;

	    Link := Dict.Links.Item(0);

	    Link.DeleteConstraint := RdsConstraintType.Cascade;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будут изменены параметры связи справочника
 "Dict_1". При удалении элементов в связанном справочнике, так
 же будут удаляться элементы в текущем справочнике, имеющие ссылки на удаляемый
 элемент.


См. также:


[IRdsLink](IRdsLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
