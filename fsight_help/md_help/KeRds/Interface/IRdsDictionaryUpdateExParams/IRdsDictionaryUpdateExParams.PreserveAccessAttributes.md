# IRdsDictionaryUpdateExParams.PreserveAccessAttributes

IRdsDictionaryUpdateExParams.PreserveAccessAttributes
-


# IRdsDictionaryUpdateExParams.PreserveAccessAttributes


## Синтаксис


PreserveAccessAttributes: Boolean;


## Описание


Свойство PreserveAccessAttributes
 определяет, будут ли обновлены значения атрибутов, отвечающих за права
 доступа к элементам справочника НСИ.


## Комментарии


При значении True в обновляемом
 объекте не будут обновлены значения данных атрибутов, по умолчанию свойство
 имеет значение False и значения
 данных атрибутов будут обновлены.


## Пример


Для выполнения необходимо наличие в схеме репозитория НСИ с идентификатором
 "RDS", в котором содержится справочник НСИ - "Dict_1".


			Sub UserProc;

Var

    Mb: IMetabase;

    MU: IMetabaseUpdate;

    Node: IMetabaseUpdateDataObjectNode;

    Object: IMetabaseObject;

    exParams: IMetabaseUpdateObjectExParams;

Begin

    Mb := MetabaseClass.Active;

    MU := Mb.CreateUpdate;

    Object := Mb.ItemByIdNamespace("Dict_1", Mb.ItemById("RDS").Key).Bind;

    Node := MU.RootFolder.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

    Node.Method := MetabaseUpdateMethod.All;

    exParams := Object.CreateUpdateExParams;

    If exParams Is IRdsDictionaryUpdateExParams Then

        (exParams As IRdsDictionaryUpdateExParams).PreserveAccessAttributes := True;

    End If;

    Node.ExtendedParams := exParams;

    //Обновлять данные и метаданные

    Node.UpdatePart := MetabaseObjectUpdatePart.DataMetadata;

    //Оставлять элементы, отсутствующие в исходном объекте

    Node.BatchMode := ObjectUpdateDataBatchMode.UpdateInsert;

    Node.Object := Object;

    MU.SaveToFile("C:\temp\Up1.pef");

End Sub UserProc;


После выполнения примера будет создан файл обновления. В данное обновление
 будет включен справочник НСИ "Dict_1". Для справочника отключено
 обновление атрибутов, отвечающих за права доступа.


[IRdsDictionaryUpdateExParams](IRdsDictionaryUpdateExParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
