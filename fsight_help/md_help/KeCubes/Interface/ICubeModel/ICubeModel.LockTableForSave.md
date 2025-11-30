# ICubeModel.LockTableForSave

ICubeModel.LockTableForSave
-


# ICubeModel.LockTableForSave


## Синтаксис


LockTableForSave: Boolean;


## Описание


Свойство LockTableForSave определяет
 признак блокировки таблицы куба при вставке/обновлении данных.


## Комментарии


Допустимые значения:


	- True. Блокировать таблицу
	 при вставке/обновлении данных. Параллельные вставки/обновление данных
	 в таблице из других потоков будут невозможны до завершения выполнения
	 текущего действия с данными.


	- False. Значение по умолчанию.
	 Не блокировать таблицу.


Свойство актуально, если репозиторий основан на базе СУБД Oracle или
 Microsoft SQL Server. При использовании СУБД Postgres свойство не используется
 и блокировка таблиц не осуществляется.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 «StdCube». Репозиторий создан на базе СУБД Oracle.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Cube: ICubeModel;

	Begin

	    MB := MetabaseClass.Active;

	    Cube := MB.ItemById("StdCube").Edit As ICubeModel;

	    Cube.LockTableForSave := True;

	    (Cube As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера для куба будет включен режим блокировки таблицы
 с данными при вставке/обновлении данных.


См. также:


[ICubeModel](ICubeModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
