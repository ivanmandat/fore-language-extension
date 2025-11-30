# ISharedParams.Params

ISharedParams.Params
-


# ISharedParams.Params


## Синтаксис


Params: [IMetabaseObjectParams](KeSom.chm::/Interface/IMetabaseObjectParams/IMetabaseObjectParams.htm);


## Описание


Свойство Params возвращает коллекцию
 глобальных переменных.


## Пример


Для выполнения примера в области глобальных переменных репозитория предполагается
 наличие глобальной переменной с идентификатором GLOBAL_INT.


Добавьте ссылки на системные сборки: Dal, Fore, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    SParams: ISharedParams;

	    GlobalVar: IMetabaseObjectParam;

	Begin

	    MB := MetabaseClass.Active;

	    SParams := Mb.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedParams;

	    // Получение глобальной переменной

	    GlobalVar := SParams.Params.FindById("GLOBAL_INT");

	    Debug.WriteLine("Значение переменной до изменения = " + GlobalVar.DefaultValue);

	    // Изменение значения глобальной переменной

	    GlobalVar.DefaultValue := 35;

	    Debug.WriteLine("Значение переменной после изменения = " + GlobalVar.DefaultValue);

	    // Создание новой глобальной переменной

	    GlobalVar := SParams.Params.Add;

	    GlobalVar.Name := "Префикс";

	    GlobalVar.Id := "GLOBAL_STR";

	    GlobalVar.DefaultValue := "ABC";

	    GlobalVar.DataType := DbDataType.String;

	    // Сохранение изменений

	    (SParams As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера будет изменено значение по умолчанию для глобальной
 переменной GLOBAL_INT и создана новая глобальная переменная - GLOBAL_STR.


См.
 также:


[ISharedParams](ISharedParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
