# IRdsDictionaryElement.MoveElement

IRdsDictionaryElement.MoveElement
-


# IRdsDictionaryElement.MoveElement


## Синтаксис


MoveElement(Target: [IRdsDictionaryElement](IRdsDictionaryElement.htm);
 MoveType: [RdsMoveType](../../Enums/RdsMoveType.htm));


## Параметры


Target. Элемент, относительно
 которого будет произведено перемещение.


MoveType. Позиция, в которую
 будет перемещен текущий элемент, относительно элемента Target.


## Описание


Метод MoveElement осуществляет
 перемещение элемента справочника НСИ в позицию, указанную относительно
 заданного элемента.


## Комментарии


Перемещение относительно корневого элемента можно осуществлять в любую
 позицию, кроме [RdsMoveType.Before](../../Enums/RdsMoveType.htm)
 (до указанного элемента).


В качестве параметра Target
 недопустимо передавать значение Null.


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

	    MoveElem, RootElem: IRdsDictionaryElement;

	Begin

	    MB := MetabaseClass.Active;

	    RdsDescr := MB.ItemById("RDS_REPO");

	    Dict := MB.ItemByIdNamespace("OBJ_DICT", RdsDescr.Key).Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    // Получение первого элемента справочника

	    MoveElem := Elements.Item(1);

	    // Получение корневого элемента справочника

	    RootElem := Elements.ItemElement(-2);

	    // Перемещение элемента

	    MoveElem.MoveElement(RootElem, RdsMoveType.LastChild);

	End Sub UserProc;


После выполнения примера первый элемент справочника станет последним.


См. также:


[IRdsDictionaryElement](IRdsDictionaryElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
