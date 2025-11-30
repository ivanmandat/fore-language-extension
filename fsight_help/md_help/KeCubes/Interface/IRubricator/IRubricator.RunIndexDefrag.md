# IRubricator.RunIndexDefrag

IRubricator.RunIndexDefrag
-


# IRubricator.RunIndexDefrag


## Синтаксис


RunIndexDefrag;


## Описание


Метод RunIndexDefrag осуществляет
 дефрагментацию индексов таблиц, на которых построена база данных временных
 рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «FC». Добавьте ссылки на системные сборки
 Metabase и Cubes.


			Sub UserProc;

Var

    MB: IMetabase;

    Rub: IRubricator;

Begin

    MB := MetabaseClass.Active;

    Rub := MB.ItemById("FC").Bind As IRubricator;

    Rub.RunIndexDefrag;

End Sub UserProc;


После выполнения примера будет осуществлена дефрагментация индексов
 таблиц, на которых построена базы данных временных рядов.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
