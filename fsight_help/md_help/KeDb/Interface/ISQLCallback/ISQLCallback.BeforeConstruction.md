# ISQLCallback.BeforeConstruction

ISQLCallback.BeforeConstruction
-


# ISQLCallback.BeforeConstruction


## Синтаксис


BeforeConstruction(Components: [ISQLComponents](../ISQLComponents/ISQLComponents.htm));


## Параметры


Components. Набор отдельных
 частей запроса, которые могут быть модифицированы.


## Описание


Метод BeforeConstruction вызывается
 перед формированием запроса на извлечение данных куба.


## Комментарии


Метод должен быть переопределён в пользовательском классе. Используя
 параметр Components, можно получить
 отдельные части запроса и модифицировать их при необходимости.


## Пример


Указанный класс является обработчиком формирования запроса на извлечение
 данных куба. Данный класс необходимо сохранить в модуль и назначить в
 качестве обработчика источнику данных куба с помощью метода [IStandardCubeDataset.SetCallback](KeCubes.chm::/Interface/IStandardCubeDataset/IStandardCubeDataset.SetCallback.htm).


			Public Class SQLCallback: Object, ISQLCallback

    Sub BeforeConstruction(Components: ISQLComponents);

    Var

        i: Integer;

        Select_, From_, Where, GroupBy, Aggregation, OrderBy: String;

    Begin

        Debug.WriteLine("Select_: " + Components.Select_);

        Debug.WriteLine("From_: " + Components.From_);

        Debug.WriteLine("Where: " + Components.Where);

        Debug.WriteLine("GroupBy: " + Components.GroupBy);

        Debug.WriteLine("Aggregation: " + Components.Aggregation);

        Debug.WriteLine("OrderBy: " + Components.OrderBy);

        Debug.WriteLine("SubQuery: " + Components.SubQuery.ToString);

        Debug.WriteLine("ConditionCount: " + Components.ConditionCount.ToString);

        For i := 0 To Components.ConditionCount - 1 Do

            Debug.WriteLine("Condition " + i.ToString + " : " + Components.Condition(i).Condition);

        End For;

        Debug.WriteLine("TableAlias: " + Components.TableAlias);

        //---Изменяемые части запроса

        //Select_ := Components.Select_;

        //...

        //Модификация Select_

        //...

        //Components.Select_ := Select_;


        //From_ := Components.From_;

        //...

        //Модификация From_

        //...

        //Components.From_ := From_;


        //Where := Components.Where;

        //...

        //Модификация Where

        //...

        //Components.Where := Where;


        //GroupBy := Components.GroupBy;

        //...

        //Модификация GroupBy

        //...

        //Components.GroupBy := GroupBy;


        //Aggregation := Components.Aggregation;

        //...

        //Модификация Aggregation

        //...

        //Components.Aggregation := Aggregation;


        //OrderBy := Components.OrderBy;

        //...

        //Модификация OrderBy

        //...

        //Components.OrderBy := OrderBy;

    End Sub BeforeConstruction;


    Sub AfterConstruction(Var SQL: String);

    Begin

        //При необходимости модификация окончательного текста запроса в переменной SQL

        Debug.WriteLine("AFTER: " + SQL);

    End Sub AfterConstruction;

End Class SQLCallback;


При выполнении куба сначала будет запущена процедура BeforeConstruction,
 при её выполнении в консоль среды разработки будут выведены все части
 формируемого запроса. При необходимости можно раскомментировать какой-либо
 блок и изменить часть запроса. Полностью сформированный запрос будет выведен
 при выполнении метода AfterConstruction.


См. также:


[ISQLCallback](ISQLCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
