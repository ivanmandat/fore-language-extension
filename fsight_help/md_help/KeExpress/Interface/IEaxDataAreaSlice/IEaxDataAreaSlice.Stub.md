# IEaxDataAreaSlice.Stub

IEaxDataAreaSlice.Stub
-


# IEaxDataAreaSlice.Stub


## Синтаксис


Stub: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm);


## Описание


Свойство Stub возвращает источник
 данных среза в качестве абстрактного источника.


## Комментарии


Абстрактным источником данных могут выступать, например, база данных
 временных рядов, куб или переменная моделирования.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего таблицу.


Добавьте ссылки на системные сборки: Cubes, Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Slice: IEaxDataAreaSlice;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    // Получим срез данных

	    Slice := Express.DataArea.Slices.Item(0);

	    // Выведем в окно консоли наименование абстрактного источника

	    Debug.WriteLine("Наименование абстрактного источника данных - " + Slice.Stub.Name);

	End Sub UserProc;


После выполнения примера в окно консоли выведется наименование абстрактного
 источника данных.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
