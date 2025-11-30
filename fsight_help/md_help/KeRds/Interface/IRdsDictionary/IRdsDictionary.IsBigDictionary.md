# IRdsDictionary.IsBigDictionary

IRdsDictionary.IsBigDictionary
-


# IRdsDictionary.IsBigDictionary


## Синтаксис


IsBigDictionary: Boolean;


## Описание


Свойство IsBigDictionary определяет,
 поддерживает ли справочник большое количество элементов.


## Комментарии


Допустимые значения:


	- True. Справочник поддерживает
	 большое количество элементов и не поддерживает иерархий. В интерфейсе
	 данные справочники открываются без списка элементов;


	- False. Справочник не
	 поддерживает большое количество элементов.


## Пример


Для выполнения примера в репозитории предполагается наличие репозитория
 НСИ с идентификатором «RDS». Данный репозиторий должен содержать справочник
 НСИ с идентификатором «DIC».


Добавьте ссылки на системные сборки: Metabase, Rds.


			Sub UserProc;

Var

    mb: IMetabase;

    rdsKey: Integer;

    Dict: IRdsDictionary;

Begin

    mb := MetabaseClass.Active;

    rdsKey := mb.GetObjectKeyById("RDS");

    // Получаем справочник

    Dict := mb.ItemByIdNamespace("DIC", rdsKey).Edit As IRdsDictionary;

    // Указываем, что справочник поддерживает работу с большим количеством элементов

    If Not Dict.IsBigDictionary Then

        Dict.IsBigDictionary := True;

    End If;

    (Dict As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера справочник будет поддерживать работу с большим
 количеством элементов.


См. также:


[IRdsDictionary](IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
