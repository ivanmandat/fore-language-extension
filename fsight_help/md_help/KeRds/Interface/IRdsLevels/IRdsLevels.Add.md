# IRdsLevels.Add

IRdsLevels.Add
-


# IRdsLevels.Add


## Синтаксис


		Add: [IRdsLevel](../IRdsLevel/IRdsLevel.htm);


## Описание


Метод Add добавляет [уровень](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Level.htm)
 в справочник НСИ.


## Комментарии


По умолчанию добавляется уровень с наименованием и идентификатором ITEM<порядковый
 номер>.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 НСИ с идентификатором DICT.


Добавьте ссылки на системные сборки: Metabase, Rds.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Dict: IRdsDictionary;

		    Levels: IRdsLevels;

		    Level: IRdsLevel;

		Begin

		    // Получаем текущий репозиторий

		    MB := MetabaseClass.Active;

		    // Получаем справочник НСИ

		    Dict := MB.ItemById("DICT").Edit As IRdsDictionary;

		    // Получаем уровни справочника НСИ

		    Levels := Dict.Levels;

		    // Добавляем новый уровень

		    Level := Levels.Add;

		    Level.Id := "NEWLEVEL";

		    Level.Name := "Дополнительный уровень";

		    // Сохраняем справочник

		    (Dict As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в справочник НСИ будет добавлен уровень
 с наименованием «Дополнительный уровень» и идентификатором NEWLEVEL.


См. также:


[IRdsLevels](IRdsLevels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
