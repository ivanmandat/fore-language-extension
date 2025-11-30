# IRdsDictionaryElements.MoveTo

IRdsDictionaryElements.MoveTo
-


# IRdsDictionaryElements.MoveTo


## Синтаксис


MoveTo(SourceKey: Integer; TargetKey: Integer; MoveType:
 [RdsMoveType](../../Enums/RdsMoveType.htm));


## Параметры


SourceKey. Ключ перемещаемого
 элемента.


TargetKey. Ключ элемента, относительно
 которого будет произведено перемещение.


MoveType. Позиция, в которую
 будет перемещен элемент SourceKey,
 относительно элемента TargetKey.


## Описание


Метод MoveTo осуществляет перемещение
 элемента справочника НСИ в указанную позицию.


## Комментарии


Перемещение элемента SourceKey
 может быть произведено относительно корневого элемента справочника. Для
 этого в качестве параметра TargetKey
 необходимо передавать значение «-2» (корневой элемент справочника). Перемещение
 можно осуществлять в любую позицию, кроме [RdsMoveType.Before](../../Enums/RdsMoveType.htm)
 (до указанного элемента).


В качестве параметра SourceKey
 недопустимо передавать значение «-2» (корневой элемент справочника).


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

	    Elem1, Elem2: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    RdsDescr := MB.ItemById("RDS_REPO");

	    Dict := MB.ItemByIdNamespace("OBJ_DICT", RdsDescr.Key).Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    // Получение ключа первого элемента справочника

	    Elem1 := Elements.Child(-2, 0);

	    // Получение ключа последнего элемента справочника

	    Elem2 := Elements.Child(-2, Elements.ChildrenCount(-2) - 1);

	    // Перемещение элементов

	    Elements.MoveTo(Elem1, Elem2, RdsMoveType.Before);

	End Sub UserProc;


После выполнения примера первый элемент справочника будет помещен перед
 последним элементом справочника.


См. также:


[IRdsDictionaryElements](IRdsDictionaryElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
