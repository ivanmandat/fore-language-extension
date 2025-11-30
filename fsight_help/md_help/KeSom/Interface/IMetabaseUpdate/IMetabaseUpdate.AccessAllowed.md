# IMetabaseUpdate.AccessAllowed

IMetabaseUpdate.AccessAllowed
-


# IMetabaseUpdate.AccessAllowed


## Синтаксис


		AccessAllowed: [MetabaseUpdateAccessType](../../Enums/MetabaseUpdateAccessType.htm);


## Описание


Свойство AccessAllowed возвращает
 тип доступа к обновлению.


## Пример


Для выполнения примера предполагается наличие файла обновления C:\Update.pefx.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Update: IMetabaseUpdate;

		Begin

		    MB := MetabaseClass.Active;

		    Update := Mb.CreateUpdate;

		    Update.LoadFromFileNF("C:\Update.pefx");

		    debug.WriteLine(Update.AccessAllowed);

		End Sub UserProc;


В результате выполнения примера в окне консоли отобразится индекс типа
 доступа к обновлению.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
