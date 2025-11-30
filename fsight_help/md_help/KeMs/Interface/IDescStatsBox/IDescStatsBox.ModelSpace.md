# IDescStatsBox.ModelSpace

IDescStatsBox.ModelSpace
-


# IDescStatsBox.ModelSpace


## Синтаксис


		ModelSpace: [IMsModelSpace](../IMsModelSpace/IMsModelSpace.htm);


## Описание


Свойство ModelSpace определяет
 контейнер моделирования, к которому подключён компонент.


## Пример


Для выполнения примера в репозитории предполагается наличие формы с
 расположенными на ней:


	- кнопкой с наименованием «Button1»;


	- компонентом DescStatsBox с наименованием
	 «DescStatsBox1»;


	- контейнером моделирования с идентификатором CONT_MODEL, содержащим
	 переменные моделирования с идентификаторами X1 и X2.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    MB: IMetabase;

		    MS, Var1, Var2: IMetabaseObject;

		Begin

		    MB := MetabaseClass.Active;

		    MS := MB.ItemById("CONT_MODEL").Bind;

		    Var1 := MB.ItemByIdNamespace("X1", MS.Key).Bind;

		    Var2 := MB.ItemByIdNamespace("X2", MS.Key).Bind;

		    DescStatsBox1.ModelSpace := MS As IMsModelSpace;

		    DescStatsBox1.AddVariableStub(Var1 As IVariableStub);

		    DescStatsBox1.AddVariableStub(Var2 As IVariableStub);

		End Sub Button1OnClick;


В результате выполнения примера компонент «DescStatsBox1» будет подключён к контейнеру моделирования CONT_MODEL. В список переменных
 компонента будут загружены переменные моделирования X1 и X2. Для переменных автоматически будут рассчитаны описательные статистики.


См. также:


[IDescStatsBox](IDescStatsBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
