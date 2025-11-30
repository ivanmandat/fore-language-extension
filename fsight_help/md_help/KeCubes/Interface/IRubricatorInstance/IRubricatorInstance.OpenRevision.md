# IRubricatorInstance.OpenRevision

IRubricatorInstance.OpenRevision
-


# IRubricatorInstance.OpenRevision


## Синтаксис


OpenRevision(Name: String): [IRubricatorRevision](../IRubricatorRevision/IRubricatorRevision.htm);


## Параметры


Name. Наименование создаваемой
 ревизии.


## Описание


Метод OpenRevision осуществляет
 создание новой ревизии.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR.


			Sub UserProc;

Var

    MB: IMetabase;

    RubrInst: IRubricatorInstance;

    RubrRev: IRubricatorRevision;

Begin

    MB := MetabaseClass.Active;

    RubrInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    RubrRev := RubrInst.OpenRevision("Новая ревизия");

    RubrRev.Save;

End Sub UserProc;


После выполнения примера для базы данных временных рядов будет создана
 и сохранена ревизия с наименованием «Новая ревизия».


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
