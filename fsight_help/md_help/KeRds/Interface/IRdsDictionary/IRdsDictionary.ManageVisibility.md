# IRdsDictionary.ManageVisibility

IRdsDictionary.ManageVisibility
-


# IRdsDictionary.ManageVisibility


## Синтаксис


ManageVisibility: Boolean;


## Описание


Свойство ManageVisibility определяет
 признак скрытости элементов справочника НСИ.


## Комментарии


По умолчанию свойству установлено значение False,
 если свойству установить значение True
 - в справочнике будет содержаться базовый атрибут [HIDDEN](../IRdsAttributes/IRdsAttributes.Hidden.htm),
 изменением значений которого осуществляется управление видимостью элементов.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - «NSI_1»,
 содержащего справочник НСИ с идентификатором «Dict_1».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dict: IRdsDictionary;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Edit;

	    Dict := MObj As IRdsDictionary;

	    Dict.ManageVisibility := True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в справочнике «Dict_1» будет присутствовать
 атрибут, управляющий видимостью элементов.


См. также:


[IRdsDictionary](IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
