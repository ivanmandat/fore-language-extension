# IRdsDictionary.AssignStructure

IRdsDictionary.AssignStructure
-


# IRdsDictionary.AssignStructure


## Синтаксис


AssignStructure(Dimension: [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm));


## Параметры


Dimension. Справочник, параметры которого необходимо установить для текущего справочника.


## Описание


Метод AssignStructure осуществляет установку структуры справочника НСИ в соответствии со структурой, передаваемой посредством параметра Dimension.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором «OBJ_RSD» и справочника с идентификатором «Dimen_1».


Добавьте ссылки на системные сборки «Metabase», «Rds», «Dimensions».


			Sub UserProc;
Var

    MB: IMetabase;

    NSI: IMetabaseObjectDescriptor;

    CrInfo: IMetabaseObjectCreateInfo;

    Dict: IRdsDictionary;
Begin

    MB := MetabaseClass.Active;

    NSI := MB.ItemById("OBJ_RDS");

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_RDS_DICTIONARY;

    CrInfo.Id := MB.GenerateId("NewDictionary");

    CrInfo.Name := "Новый справочник";

    CrInfo.Parent := NSI;

    Dict := MB.CreateObject(CrInfo).Edit As IRdsDictionary;

    Dict.AssignStructure(MB.ItemById("Dimen_1").Bind As IDimensionModel);

    (Dict As IMetabaseObject).Save;
End Sub UserProc;


После выполнения примера в репозитории НСИ будет создан новый справочник НСИ. Структура нового справочника будет установлена в соответствии со структурой справочника «Dimen_1».


См. также:


[IRdsDictionary](IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
