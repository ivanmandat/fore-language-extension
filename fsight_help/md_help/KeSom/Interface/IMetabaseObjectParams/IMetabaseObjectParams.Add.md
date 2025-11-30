# IMetabaseObjectParams.Add

IMetabaseObjectParams.Add
-


# IMetabaseObjectParams.Add


## Синтаксис


Add: [IMetabaseObjectParam](../IMetabaseObjectParam/IMetabaseObjectParam.htm);


## Описание


Метод Add создает новый параметр.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором OBJTEST.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Params: IMetabaseObjectParams;

	    Param: IMetabaseObjectParam;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("OBJTEST").Edit;

	    Params := MObj.Params;

	    // Создание параметра

	    Param := Params.Add;

	    Param.DataType := DbDataType.Integer;

	    Param.Name := "Значение коэффициента";

	    Param.DefaultValue := 100;

	    // Сохранение изменений

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для указанного объекта будет создан новый параметр.
 В качестве значения для данного параметра будут указываться целые числа.
 Значение по умолчанию равно 100.


См. также:


[IMetabaseObjectParams](IMetabaseObjectParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
