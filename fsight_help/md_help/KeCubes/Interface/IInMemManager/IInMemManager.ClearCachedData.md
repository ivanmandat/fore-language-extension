# IInMemManager.ClearCachedData

IInMemManager.ClearCachedData
-


# IInMemManager.ClearCachedData


## Синтаксис


ClearCachedData(CubeObject: [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm));


## Параметры


CubeObject. Куб, для которого
 необходимо очистить кешированные данные.


## Описание


Метод ClearCachedData удаляет
 из кеша все данные, связанные с указанным кубом.


## Комментарии


При выполнении метода удаляются данные всех вариантов отображения и
 для всех наборов параметров куба.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 «STD_CUBE». В репозитории используется механизм кеширования In-Memory.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Cube: IMetabaseObject;

	    InMem: IInMemManager;

	Begin

	    Mb := MetabaseClass.Active;

	    Cube := Mb.ItemById("STD_CUBE").Bind;

	    // Менеджер для работы с кешем In-Memory

	    InMem := New InMemManager.Create;

	    // Удаление кешированных данных

	    InMem.ClearCachedData(Cube);

	End Sub UserProc;


В результате выполнения примера для из кеша для указанного куба будут
 удалены все кешированные данные.


См. также:


[IInMemManager](IInMemManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
