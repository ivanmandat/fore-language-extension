# ICubeMetaUpdateEx.ForceEmptyValues

ICubeMetaUpdateEx.ForceEmptyValues
-


# ICubeMetaUpdateEx.ForceEmptyValues


## Синтаксис


ForceEmptyValues: Boolean;


## Описание


Свойство ForceEmptyValues определяет,
 заменять ли пустыми значениями точки данных, отсутствующие в источнике,
 но присутствующие в приёмнике.


## Комментарии


Допустимые значения:


	- True. Точки данных,
	 отсутствующие в источнике, но присутствующие в приёмнике, будут заменены
	 значением Null;


	- False. Значение по умолчанию.
	 Точки данных заменены не будут.


## Пример


Для выполнения примера в репозитории предполагается наличие базы
 данных временных рядов с идентификатором «TSDB» (источник данных) и базы
 данных временных рядов с идентификатором «TSDB_COPY» (приёмник данных). Структуры
 баз данных временных рядов должны совпадать.


Добавьте ссылки на системные сборки: Cubes и Metabase.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    RubUpdateEx: ICubeMetaUpdateEx;

	    Rub: IRubricator;

	    Callback: MyUpdateCallback;

	Begin

	    // Получаем текущую базу данных временных рядов

	    Metabase := MetabaseClass.Active;

	    // Создаем объект для копирования базы данных временных рядов

	    RubUpdateEx := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

	    // Задаем копируемую базу данных временных рядов

	    Rub := Metabase.ItemById("TSDB").Bind As IRubricator;

	    RubUpdateEx.Rubricator := Rub;

	    // Указываем, что копирование выполняется с данными и вложенными объектами

	    RubUpdateEx.CopyData := True;

	    RubUpdateEx.CopyExtraObjects := False;

	    // Указываем репозиторий и базу данных временных рядов, в которую будут скопированы данные

	    RubUpdateEx.Metabase := Metabase;

	    RubUpdateEx.TargetRubricator := Metabase.ItemById("TSDB_COPY").Bind As IRubricator;

	    // Указываем, что точки данных, отсутствующие в источнике, но присутствующие в приёмнике,

	    // будут заменены значением Null;

	    RubUpdateEx.ForceEmptyValues := True;

	    // Указываем, что копирование будет выполнено за
	 одну транзакцию

	    RubUpdateEx.DisableTransactions := True;

	    // Указываем, что для обработки транзакций будет использоваться пользовательский объект

	    Callback := New MyUpdateCallback.Create;

	    RubUpdateEx.UpdateCallback := Callback;

	    // Выполняем копирование

	    RubUpdateEx.Apply(Null);

	End Sub UserProc;

	// Класс, реализующий события, которые происходят при транзакциях во время копирования

	Class MyUpdateCallback: CubeMetaUpdateCallback

	    // Событие, возникающее при открытии транзакции и ревизии

	    public Sub OnAfterStartTransaction(Rubricator: IRubricatorInstance; Connection: ISecurityConnection);

	    Begin

	        Debug.WriteLine("Пользователь " + Connection.UserNameLo + " начал копирование");

	    End Sub OnAfterStartTransaction;


	    // Событие, возникающее перед закрытием транзакции и ревизии

	    Public Sub OnBeforeCommit(Rubricator: IRubricatorInstance; Connection: ISecurityConnection);

	    Begin

	        Debug.WriteLine("Пользователь " + Connection.UserNameLo + " завершил копирование");

	    End Sub OnBeforeCommit;

	End Class MyUpdateCallback;


В результате выполнения примера данные из базы данных временных рядов
 «TSDB» будут скопированы за одну транзакцию в базу данных временных рядов
 «TSDB_COPY». Точки данных, отсутствующие в источнике, но присутствующие
 в приёмнике, будут заменены значением «Null».
 В окно консоли будет выведена информация о начале и окончании копирования.


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
