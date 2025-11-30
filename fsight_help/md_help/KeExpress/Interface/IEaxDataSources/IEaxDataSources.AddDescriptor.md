# IEaxDataSources.AddDescriptor

IEaxDataSources.AddDescriptor
-


# IEaxDataSources.AddDescriptor


## Синтаксис


AddDescriptor(Desc: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)):
 [IEaxDataSource](../IEaxDataSource/IEaxDataSource.htm);


## Параметры


Desc. Описание объекта репозитория,
 который будет использован в качестве источника для экспресс-отчёта.


## Описание


Метод AddDescriptor осуществляет
 добавление источника данных в экспресс-отчёт по описанию объекта в репозитории.


## Комментарии


В отличие от метода [IEaxDataSources.Add](IEaxDataSources.Add.htm),
 метод AddDescriptor позволяет
 добавить источник без его предварительного открытия.


## Пример


Для выполнения примера предполагается наличие экспресс-отчёта с идентификатором
 EXPRESS_REPORT и куба с идентификатором CUBE.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    ExprDS: IEaxDataSources;

	    Cube: IMetabaseObjectDescriptor;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    ExprDS := Expr.DataSources;

	    Cube := MB.ItemById("CUBE");

	    ExprDs.AddDescriptor(Cube);

	    (Expr As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для экспресс-отчёта указанный куб будет
 добавлен в качестве источника данных.


См. также:


[IEaxDataSources](IEaxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
