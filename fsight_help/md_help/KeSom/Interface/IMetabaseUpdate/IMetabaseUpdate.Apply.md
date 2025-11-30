# IMetabaseUpdate.Apply

IMetabaseUpdate.Apply
-


# IMetabaseUpdate.Apply


## Синтаксис


		Apply([Progress:
		 [IMetabaseUpdateProgress](../IMetabaseUpdateProgress/IMetabaseUpdateProgress.htm)
		 = Null]);


## Параметры


Progress. Объект,
 реализующий события, возникающие при выполнении обновления.


## Описание


Метод Apply осуществляет обновление
 объектов репозитория.


## Комментарии


Параметр Progress является
 необязательным для Fore и принимает по умолчанию значение Null.


## Пример


Для выполнения примера предполагается наличие файла обновления C:\Update.pef.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Update: IMetabaseUpdate;

		Begin

		    MB := MetabaseClass.Active;

		    Update := Mb.CreateUpdate;

		    Update.LoadFromFile("C:\Update.pef");

		    Update.Apply;

		End Sub UserProc;


В результате выполнения примера будет произведено обновление объектов
 репозитория, загружённое из файла C:\Update.pef.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm) | [IMetabaseUpdate.ApplyEx](IMetabaseUpdate.ApplyEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
