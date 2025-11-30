# IPivot.Stub

IPivot.Stub
-


# IPivot.Stub


## Синтаксис


Stub: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm);


## Описание


Свойство Stub возвращает источник
 данных таблицы в качестве абстрактного.


## Комментарии


Абстрактным источником данных могут выступать, например, база данных
 временных рядов, куб или переменная моделирования.


Для получения абстрактного источника данных приведите требуемый объект
 к интерфейсу [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS. Источником данных отчёта является куб. Отчёт
 должен содержать таблицу.


Добавьте ссылки на системные сборки: Cubes, Express, Metabase, Pivot.


			Sub USerProc;

		Var

		    MB: IMetabase;

		    Express: IEaxAnalyzer;

		    Pivot: IPivot;

		    Stub: IVariableStub;

		Begin

		    // Получим репозиторий

		    MB := MetabaseClass.Active;

		    // Получим экспресс-отчет

		    Express := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

		    // Получим настройки отображения таблицы данных отчета

		    Pivot := Express.Pivot;

		    // Получим абстрактный источник данных и выведем его наименование в окно консоли

		    Stub := Pivot.Stub As IVariableStub;

		    Debug.WriteLine("Наименование источника данных - " + Stub.Name);

End Sub USerProc;


После выполнения примера в окно консоли выведется наименование абстрактного
 источника данных.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
