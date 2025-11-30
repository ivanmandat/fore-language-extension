# ISharedParams.ParamValues

ISharedParams.ParamValues
-


# ISharedParams.ParamValues


## Синтаксис


ParamValues: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm);


## Описание


Свойство ParamValues позволяет
 задавать текущие параметры глобальных переменных без сохранения области
 глобальных переменных.


## Комментарии


Параметры глобальных переменных будут применяться в течении текущей
 сессии с репозиторием. После задания параметров для применения изменений
 используйте метод [ApplyParamValues](ISharedParams.ApplyParamValues.htm).


Примечание.
 Для чтения текущего значения глобальной переменной используйте свойство
 [IMetabaseCache.SharedValue](KeSom.chm::/Interface/IMetabaseCache/IMetabaseCache.SharedValue.htm).


## Пример


	Sub SetGlobalVariableValue;

	Var

	    MB: IMetabase;

	    SParams: ISharedParams;

	    GlobalVar: IMetabaseObjectParamValue;

	Begin

	    MB := MetabaseClass.Active;

	    SParams := Mb.SpecialObject(MetabaseSpecialObject.SharedParams).Bind As ISharedParams;

	    GlobalVar := SParams.ParamValues.FindById("GLOBAL_INT");

	    GlobalVar.Value := 25;

	    SParams.ApplyParamValues;

	End Sub SetGlobalVariableValue;


После выполнения примера будет задано значение указанной глобальной
 переменной.


См. также:


[ISharedParams](ISharedParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
