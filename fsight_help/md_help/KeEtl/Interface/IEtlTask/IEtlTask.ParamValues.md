# IEtlTask.ParamValues

IEtlTask.ParamValues
-


# IEtlTask.ParamValues


## Синтаксис


ParamValues: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm);


## Описание


Свойство ParamValues возвращает
 коллекцию значений параметров задачи ETL.


## Комментарии


Принцип настройки коллекции параметров совпадает с принципом настройки
 параметров других объектов репозитория и описан в подразделе «[Настройка
 свойств и параметров объектов](UiDevEnv.chm::/Project_Development/setting_object_properties_and_parameters.htm)».


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL_TASK. В структуре задачи созданы два параметра с
 идентификаторами FILTER_VALUE и ERROR.


Добавьте ссылки на системные сборки: Etl, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Etl: IEtlTask;

	    Params: IMetabaseObjectParamValues;

	Begin

	    Mb := MetabaseClass.Active;

	    Etl := Mb.ItemById("ETL_TASK").Bind As IEtlTask;

	    // Установка значений параметров

	    Params := Etl.ParamValues;

	    Params.FindById("FILTER_VALUE").Value := 1000;

	    Params.FindById("ERROR").Value := 0.01;

	    // Выполнение задачи ETL

	    Etl.Execute(Null);

	End Sub UserProc;


При выполнении примера будет получена задача ETL и заданы значения для
 её параметров. После этого задача будет выполнена.


См. также:


[IEtlTask](IEtlTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
