# IRdsDictionary.HasDimMultipleValues

IRdsDictionary.HasDimMultipleValues
-


# IRdsDictionary.HasDimMultipleValues


## Синтаксис


HasDimMultipleValues: Boolean;


## Описание


Свойство HasDimMultipleValues
 определяет, будут ли загружаться множественные значения в [IDimAttributeInstance](KeDims.chm::/interface/IDimAttributeInstance/IDimAttributeInstance.htm).


## Комментарии


Допустимые значения:


	- True. В атрибут справочника
	 будут загружаться множественные значения;


	- False. В атрибут справочника
	 не будут загружаться множественные значения.


## Пример


Для выполнения примера предполагается наличие справочника НСИ с идентификатором
 «T_DICTIONARY», расположенном в репозитории с идентификатором «MDM».


Добавьте ссылки на системные сборки Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("T_DICTIONARY", MB.ItemById("MDM").Key).Edit;

    Dict := MObj As IRdsDictionary;

    Dict.HasDimMultipleValues := True;

    MObj.Save;

End Sub UserProc;


После выполнения примера в атрибут справочника будут загружаться множественные
 значения.


См. также:


[IRdsDictionary](IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
