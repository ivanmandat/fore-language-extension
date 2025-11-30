# IRdsDictionary.UpdateSequence

IRdsDictionary.UpdateSequence
-


# IRdsDictionary.UpdateSequence


## Синтаксис


UpdateSequence(Options: [RdsUpdateSequenceOptions](../../Enums/RdsUpdateSequenceOptions.htm));


## Параметры


Options. Тип сдвига.


## Описание


Метод UpdateSequence обновляет
 сиквенс.


## Комментарии


Для открытия справочника НСИ используйте метод [IRdsDictionary.Open](IRdsDictionary.Open.htm).


## Пример


Для выполнения примера предполагается наличие:


	- репозитория НСИ с идентификатором «OBJ_RDS», содержащего справочник
	 НСИ с идентификатором «T_SOURCE_RDS»;


	- формы, содержащей компонент Button с идентификатором «Button1».


Пример является обработчиком события OnClick для компонента «Button1».
 Добавьте ссылки на системные сборки «Metabase», «Rds».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Mb: IMetabase;

    iRdsDatabaseKey: Integer;

    pDict: IRdsDictionary;

    pDictInst: IRdsDictionaryInstance;

    pData: IRdsDictionaryElementData;

Begin

    Mb := MetabaseClass.Active;

    iRdsDatabaseKey := Mb.GetObjectKeyById("OBJ_RDS");

    pDict := Mb.ItemByIdNamespace("T_SOURSE_RDS", iRdsDatabaseKey).Edit As IRdsDictionary;

    pDict.Attributes.Order.Hidden := False;

    (pDict As IMetabaseObject).Save;

    pDictInst := pDict.Open(Null);

    pDictInst.ClearData;

    pData := pDictInst.CreateElementData;

    pData.Value(1) := "1";

    pDictInst.Insert(-2, pData);

    pData := pDictInst.CreateElementData;

    pData.Value(1) := "2";

    pDictInst.Insert(-2, pData);

    pDict.IsBigDictionary := True;

    pDict.UpdateSequence(RdsUpdateSequenceOptions.Key Or RdsUpdateSequenceOptions.Order);

    (pDict As IMetabaseObject).Save;

    pDictInst := pDict.Open(Null);

    pData.Value(1) := "3";

    pDictInst.Insert(-2, pData);

    pData.Value(1) := "4";

    pDictInst.Insert(-2, pData);

    pDict.IsBigDictionary := False;

    (pDict As IMetabaseObject).Save;

    Mb.DeleteObject((pDict As IMetabaseObject).Key);

End Sub Button1OnClick;


После выполнения примера для справочника НСИ будет обновлен сиквенс.


См. также:


[IRdsDictionary](IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
