# IMetabaseUpdate.MandatoryAccess

IMetabaseUpdate.MandatoryAccess
-


# IMetabaseUpdate.MandatoryAccess


## Синтаксис


		MandatoryAccess: [IMetabaseUpdateMandatoryAccess](../IMetabaseUpdateMandatoryAccess/IMetabaseUpdateMandatoryAccess.htm);


## Описание


Свойство MandatoryAccess определяет
 параметры мандатного доступа к обновлению.


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

		    Update.LoadFromFileNF("D:\Update.pefx");

		    debug.WriteLine(Update.MandatoryAccess.IsValid);

		End Sub UserProc;


В результате выполнения примера в окне консоли появится информация о
 доступности обновления.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
