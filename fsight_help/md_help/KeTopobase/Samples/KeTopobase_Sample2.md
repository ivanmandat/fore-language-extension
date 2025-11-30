# Установка карты для репозитория по умолчанию

Установка карты для репозитория по умолчанию
-


# Установка карты для репозитория по умолчанию


Для выполнения примера предполагается наличие в репозитории карты с
 идентификатором «New_Map_1».


			Sub SetDefaultTopobase;

Var

    MB: IMetabase;

Begin

    MB := MetabaseClass.Active;

    MB.SpecialObject(MetabaseSpecialObject.DefaultTopobase) := MB.ItemById("New_Map_1");

End Sub SetDefaultTopobase;


После выполнения примера для текущего репозитория будет задана карта
 по умолчанию.


См.также:


[Примеры](KeTopobase_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
