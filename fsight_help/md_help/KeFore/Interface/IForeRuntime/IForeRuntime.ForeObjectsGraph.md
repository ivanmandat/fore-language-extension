# IForeRuntime.ForeObjectsGraph

IForeRuntime.ForeObjectsGraph
-


# IForeRuntime.ForeObjectsGraph


## Синтаксис


		ForeObjectsGraph: [IForeObjectsGraph](../IForeObjectsGraph/IForeObjectsGraph.htm);


## Описание


Свойство ForeObjectsGraph возвращает
 доступ к графу объектов в памяти.


## Комментарии


Граф позволяет в наглядном виде получить список объектов в памяти и
 их связи между собой.


## Пример


Добавьте ссылку на системную сборку Fore.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Runtime: IForeRuntime;

		    Graph: IForeObjectsGraph;

		    //...

		Begin

		    Mb := MetabaseClass.Active;

		    //...

		    // Выполняемый код приложения

		    //...

		    Runtime := (Mb As IForeServices).GetRuntime;

		    Graph := Runtime.ForeObjectsGraph;

		    Graph.ObjectIndexing := True;

		    Graph.SaveToFile("D:\CurrentObjects.tgf");

		    //...

		    // Продолжение кода приложения

		    //...

		End Sub UserProc;


Указанный пример в общем виде иллюстрирует каким образом в коде приложения
 можно получить и сохранить в файл граф объектов в памяти.


См. также:


[IForeRuntime](IForeRuntime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
