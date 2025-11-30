# IRubricatorRecord.Key

IRubricatorRecord.Key
-


# IRubricatorRecord.Key


## Синтаксис


Key: Integer;


## Описание


Свойство Key возвращает ключ
 записи.


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

    RubrRev := RubrInst.OpenRevision("Ревизия");

    RubrRev.Name := RubrRev.Name + " №1";

    RubrRev.ObjectKey := 1;

    RubrRev.Comment := "Новая ревизия";

    RubrRev.Save;

    Debug.WriteLine("Дата: " + RubrRev.Stamp.ToString);

    Debug.WriteLine("Метка : " + RubrRev.IsLabel.ToString);

    Debug.WriteLine("Пользователь: " + RubrRev.UserName);

    Debug.WriteLine("Ключ ревизии: " + RubrRev.Key.ToString);

End Sub UserProc;


После выполнения примера для базы данных временных рядов будет создана
 и сохранена ревизия с наименованием «Ревизия №1» и примечанием «Новая
 ревизия». В окно консоли будет выведена информация о ревизии.


См. также:


[IRubricatorRecord](IRubricatorRecord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
