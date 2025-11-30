# IRdsDictionary.Distributed

IRdsDictionary.Distributed
-


# IRdsDictionary.Distributed


## Синтаксис


Distributed: Boolean;


## Описание


Свойство Distributed определяет
 признак наличия атрибута, содержащего уникальный идентификатор элементов
 в справочнике НСИ.


## Комментарии


По умолчанию свойству установлено значение False,
 если свойству установить значение True
 - в справочнике будет содержаться базовый атрибут [GUID](../IRdsAttributes/IRdsAttributes.GUID.htm),
 значениями которого является уникальный глобальный идентификатор элементов.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dict: IRdsDictionary;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Edit;

	    Dict := MObj As IRdsDictionary;

	    Dict.Distributed := True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в справочнике "Dict_1" будет присутствовать
 атрибут, содержащий уникальные идентификаторы элементов.


См. также:


[IRdsDictionary](IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
