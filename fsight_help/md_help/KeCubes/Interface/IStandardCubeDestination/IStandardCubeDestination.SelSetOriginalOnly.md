# IStandardCubeDestination.SelSetOriginalOnly

IStandardCubeDestination.SelSetOriginalOnly
-


# IStandardCubeDestination.SelSetOriginalOnly


## Синтаксис


		SelSetOriginalOnly: Boolean;


## Описание


Свойство SelSetOriginalOnly
 определяет возможность агрегации данных по измерениям с полной отметкой.


## Комментарии


Значение данного флажка определяет, будет ли доступен метод агрегации
 «[Из
 фактов источника](UiNavObj.chm::/Cube/Agregation.htm#fix_method)» для фиксированных измерений в различных
 инструментах продукта «Форсайт. Аналитическая платформа».
 По умолчанию свойству установлено значение False,
 при этом данный метод агрегации не доступен. При установке свойству SelSetOriginalOnly значения True возможны следующие варианты:


	- если для фактов определен [метод
	 агрегации](../IStandardCubeFactBinding/IStandardCubeFactBinding.AggregationType.htm). При выборе в инструментах продукта «Форсайт. Аналитическая платформа»
	 метода агрегации «[Из
	 фактов источника](UiNavObj.chm::/Cube/Agregation.htm#fix_method)» для фиксированных измерений будет применяться
	 тот метод, который задан для фактов;


	- для фактов не определен [метод
	 агрегации](../IStandardCubeFactBinding/IStandardCubeFactBinding.AggregationType.htm). Метод агрегации «[Из фактов источника](UiNavObj.chm::/Cube/Agregation.htm#fix_method)» будет не доступен в различных инструментах
	 продукта «Форсайт. Аналитическая платформа».


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE». Для фактов куба настроена агрегация.
 Среди полей источника данных куба имеются поля, которые не связаны с измерениями
 куба.


Добавьте ссылки на системные сборки: Cubes, Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Cube: IStandardCube;

		    CubeDest: IStandardCubeDestination;

		Begin

		    MB := MetabaseClass.Active;

		    Cube := MB.ItemById("STD_CUBE").Edit As IStandardCube;

		    CubeDest := Cube.Destinations.Item(0);

		    CubeDest.SelSetOriginalOnly := True;

		    (Cube As IMetabaseObject).Save;

		End Sub UserProc;


При выполнении примера в кубе будет включена агрегация данных по измерениям
 с полной отметкой. После этого, при использовании данного куба в качестве
 источника данных в каких-либо инструментах продукта «Форсайт. Аналитическая платформа»,
 будет возможность использовать агрегацию из фактов куба.


См. также:


[IStandardCubeDestination](IStandardCubeDestination.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
