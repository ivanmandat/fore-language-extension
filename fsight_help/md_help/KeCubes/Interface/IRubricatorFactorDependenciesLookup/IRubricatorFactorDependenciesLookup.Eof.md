# IRubricatorFactorDependenciesLookup.Eof

IRubricatorFactorDependenciesLookup.Eof
-


# IRubricatorFactorDependenciesLookup.Eof


## Синтаксис


Eof: Boolean;


## Описание


Метод Eof возвращает признак
 того, является ли текущая запись последней.


## Пример


Для выполнения примера в репозитории должна присутствовать база данных
 временных рядов с идентификатором OBJ_RUBRICATOR. База данных временных
 рядов должна содержать справочник формул.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubInst: IRubricatorInstance;

    DepLoo: IRubricatorFactorDependenciesLookup;

    DepData: IRubricatorFactorDependencyData;

Begin

    Mb := MetabaseClass.Active;

    RubInst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    DepLoo := RubInst.CreateDependenciesLookup;

    DepLoo.WhereCalendarPoint := DateTime.Parse("01.01.1980 00:00:00");

    DepLoo.WhereDependentFactorKey := 98544;

    DepLoo.Open;

    While (Not DepLoo.Eof) Do

        DepData := DepLoo.Current;

        Debug.WriteLine("Ключ показателя: " + DepData.FactorKey.ToString);

        Debug.WriteLine("Ключ ревизии: " + DepData.RevisionKey.ToString);

        Debug.WriteLine("Ключ формулы: " + DepData.FormulaKey.ToString);

        Debug.WriteLine("Позиция в формуле: " + DepData.Position.ToString);

        Debug.WriteLine("-----");

        DepLoo.Next;

    End While;

    DepLoo.Close;

End Sub UserProc;


После выполнения примера будет создан объект, осуществляющий поиск зависимостей
 в базе данных временных рядов по заданным условиям. Информация о найденных
 зависимостях будет выведена в окно консоли.


См. также:


[IRubricatorFactorDependenciesLookup](IRubricatorFactorDependenciesLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
