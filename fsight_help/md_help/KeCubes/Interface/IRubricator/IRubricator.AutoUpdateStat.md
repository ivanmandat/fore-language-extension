# IRubricator.AutoUpdateStat

IRubricator.AutoUpdateStat
-


# IRubricator.AutoUpdateStat


## Синтаксис


AutoUpdateStat: Boolean;


## Описание


Свойство AutoUpdateStat определяет,
 собирать ли статистики и оценивать ли фрагментацию индексов при операциях
 с данными базы данных временных рядов.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 При операциях с данными статистики собираются. Работа с данными базы
	 данных временных рядов замедляется;


	- False. При операциях
	 с данными статистики не собираются.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором «FC». Добавьте ссылки на системные сборки «Metabase»
 и «Cubes».


			Sub UserProc;

Var

    mb: IMetabase;

    Rub: IRubricator;

Begin

    mb := MetabaseClass.Active;

    Rub := mb.ItemById("FC").Edit As IRubricator;

    Rub.AutoUpdateStat := False;

    (Rub As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для базы данных временных рядов «FC» будет
 отключен сбор статистик при работе с данными.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
