# IInMemManager.PrepareMatrix

IInMemManager.PrepareMatrix
-


# IInMemManager.PrepareMatrix


## Синтаксис


PrepareMatrix(Dest: [ICubeInstanceDestination](../ICubeInstanceDestination/ICubeInstanceDestination.htm)):
 [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Параметры


Dest. Отстроенный вариант отображения
 куба.


## Описание


Метод PrepareMatrix для указанного
 варианта отображения куба отстраивает матрицу, которая будет сохранена
 в кеш.


## Комментарии


Если в кеше уже имеется кешированная матрица с данными для указанного
 варианта отображения куба, то она будет перестроена. В виду особенностей
 реализации метод возвращает пустую матрицу, структура которой соответствует
 структуре источника данных.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 «STD_CUBE». В репозитории используется механизм кеширования In-Memory.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CubeInst: ICubeInstance;

	    DestInst: ICubeInstanceDestination;

	    InMem: IInMemManager;

	Begin

	    Mb := MetabaseClass.Active;

	    // Открытие куба

	    CubeInst := Mb.ItemById("STD_CUBE").Open(Null) As ICubeInstance;

	    DestInst := CubeInst.Destinations.DefaultDestination;

	    // Менеджер для работы с кешем In-Memory

	    InMem := New InMemManager.Create;

	    InMem.PrepareMatrix(DestInst);

	End Sub UserProc;


При выполнении примера в кеше будут обновлены все данные указанного
 куба.


См. также:


[IInMemManager](IInMemManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
