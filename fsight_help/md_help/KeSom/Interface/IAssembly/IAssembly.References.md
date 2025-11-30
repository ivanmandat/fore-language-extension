# IAssembly.References

IAssembly.References
-


# IAssembly.References


## Синтаксис


References: String;


## Описание


Свойство References определяет
 список ссылок на сборки платформы, которые необходимо подключить к данной
 сборке.


## Комментарии


Наименования сборок в списке разделяются символом ";". В списке
 можно указывать системные сборки платформы (Dal, Db и т.д.) и идентификаторы
 пользовательских сборок, которые имеются в репозитории.


Примечание.
 Системная сборка репозитория System
 всегда подключена по умолчанию. Указывать ее в списке ссылок нет необходимости.


## Пример


Для выполнения примера предполагается наличие сборки с идентификатором
 ASSEMBLY_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Asm: IAssembly;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("ASSEMBLY_1").Edit;

	    Asm := MObj As IAssembly;

	    Asm.References := "Dt;Etl;Io";

	    If Asm.Modified Then

	        MObj.Save;

	    End If;

	End Sub UserProc;


После выполнения примера для сборки будет изменен список ссылок на системные
 сборки платформы.


См. также:


[IAssembly](IAssembly.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
