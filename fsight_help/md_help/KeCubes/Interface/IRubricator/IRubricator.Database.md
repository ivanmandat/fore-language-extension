# IRubricator.Database

IRubricator.Database
-


# IRubricator.Database


## Синтаксис


Database: [IRdsDatabase](KeRds.chm::/Interface/IRdsDatabase/IRdsDatabase.htm);


## Описание


Свойство Database определяет
 репозиторий НСИ, в котором содержатся базовые справочники, необходимые
 для работы с базой данных временных рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором NewCatalog.


			Sub UserProc;

Var

    Mb: IMetabase;

    Rubr: IRubricator;

    s: String;

Begin

    Mb := MetabaseClass.Active;

    Rubr := MB.ItemById("NewCatalog").Bind As IRubricator;

    s := (Rubr.Database As IMetabaseObject).Id;

End Sub UserProc;


После выполнения примера в переменной "s" будет содержаться
 идентификатор репозитория НСИ, в котором хранятся базовые справочники.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
