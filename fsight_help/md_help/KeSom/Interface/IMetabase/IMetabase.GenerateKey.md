# IMetabase.GenerateKey

IMetabase.GenerateKey
-


# IMetabase.GenerateKey


## Синтаксис


GenerateKey: Integer;


## Описание


Метод GenerateKey генерирует
 уникальный ключ в рамках текущего репозитория.


## Комментарии


Для генерации ключей используется системная последовательность, созданная
 на сервере СУБД.


## Пример


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    i := MB.GenerateKey;

	End Sub UserProc;


После выполнения примера в переменной «i» будет храниться сгенерированный
 уникальный ключ.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
