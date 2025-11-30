# IRdsDictionary.DynamicDimInstance

IRdsDictionary.DynamicDimInstance
-


# IRdsDictionary.DynamicDimInstance


## Синтаксис


DynamicDimInstance: Boolean;


## Описание


Свойство DynamicDimInstance
 определяет, используется ли динамическая загрузка элементов справочника
 НСИ.


## Комментарии


Допустимые значения:


	- True. Динамическая загрузка
	 измерений используется. При динамической загрузке элементы загружаются
	 при необходимости;


	- False. Динамическая
	 загрузка измерений не используется. Все элементы загружаются при обращении
	 к справочнику НСИ.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 НСИ с идентификатором DIM.


Добавьте ссылки на системные сборки: Metabase и Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    Dict: IRdsDictionary;

Begin

    MB := MetabaseClass.Active;

    // Получим справочник НСИ

    Dict := MB.ItemById("DIM").Edit As IRdsDictionary;

    // Установим динамическую загрузку

    Dict.DynamicDimInstance := True;

    (Dict As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера для справочника НСИ будет настроена
 динамическая загрузка.


См. также:


[IRdsDictionary](IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
