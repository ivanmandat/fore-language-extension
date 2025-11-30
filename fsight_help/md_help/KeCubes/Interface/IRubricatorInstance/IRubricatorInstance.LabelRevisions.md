# IRubricatorInstance.LabelRevisions

IRubricatorInstance.LabelRevisions
-


# IRubricatorInstance.LabelRevisions


## Синтаксис


LabelRevisions(Name: String): [IRubricatorRevision](../IRubricatorRevision/IRubricatorRevision.htm);


## Параметры


Name. Наименование устанавливаемой
 метки.


## Описание


Метод LabelRevisions позволяет
 установить метку ревизии базы данных временных рядов.


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

    RubrRev := RubrInst.LabelRevisions("Новая метка");

    RubrRev.Save;

End Sub UserProc;


После выполнения примера для базы данных временных рядов будет создана
 и сохранена метка ревизии с наименованием «Новая метка».


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
