# IRdsDictionaryElement.MoveTo

IRdsDictionaryElement.MoveTo
-


# IRdsDictionaryElement.MoveTo


## Синтаксис


MoveTo(TargetKey: Integer; MoveType: [RdsMoveType](../../Enums/RdsMoveType.htm));


## Параметры


TargetKey. Ключ элемента, относительно
 которого будет произведено перемещение.


MoveType. Позиция, в которую
 будет перемещен текущий элемент, относительно элемента TargetKey.


## Описание


Метод MoveTo осуществляет перемещение
 элемента справочника НСИ в позицию, указанную относительно элемента с
 заданным ключом.


## Комментарии


Перемещение элемента может быть произведено относительно корневого элемента
 справочника. Для этого в качестве параметра TargetKey
 необходимо передавать значение «-2» (корневой элемент справочника). Перемещение
 можно осуществлять в любую позицию, кроме [RdsMoveType.Before](../../Enums/RdsMoveType.htm)
 (до указанного элемента).


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «RDS_REPO», содержащего справочник с идентификатором «OBJ_DICT». Также
 необходимо добавить ссылки на системные сборки «Metabase», «Rds».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RdsDescr: IMetabaseObjectDescriptor;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    MoveElem: IRdsDictionaryElement;

	    ElemKey: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    RdsDescr := MB.ItemById("RDS_REPO");

	    Dict := MB.ItemByIdNamespace("OBJ_DICT", RdsDescr.Key).Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    // Получение первого элемента справочника

	    MoveElem := Elements.Item(1);

	    // Получение ключа последнего элемента справочника

	    ElemKey := Elements.Child(-2, Elements.ChildrenCount(-2) - 1);

	    // Перемещение элемента

	    MoveElem.MoveTo(ElemKey, RdsMoveType.Before);

	End Sub UserProc;


После выполнения примера первый элемент справочника будет помещен перед
 последним элементом справочника.


См. также:


[IRdsDictionaryElement](IRdsDictionaryElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
