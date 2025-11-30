# IVirtualCubeSource.JoinList

IVirtualCubeSource.JoinList
-


# IVirtualCubeSource.JoinList


## Синтаксис


JoinList: [IVirtualCubeDimensionJoinList](../IVirtualCubeDimensionJoinList/IVirtualCubeDimensionJoinList.htm);


## Описание


Свойство JoinList возвращает
 список сопоставлений измерений текущего источника с измерениями других
 источников.


## Комментарии


По умолчанию измерения различных источников виртуального куба не сопоставлены
 между собой. При этом в виртуальном кубе доступны общие для всех источников
 измерения, а из уникальных измерений формируется составное измерение.
 В составное измерение войдут те элементы, которые зафиксированы в уникальных
 измерениях.


Сопоставление позволяет связать уникальные измерения различных источников.
 После сопоставления с уникальных измерений может быть снята фиксация.
 При этом в виртуальном кубе будет использоваться измерение текущего куба-источника.
 При изменении отметки по этому измерению будет осуществляться сопоставление
 элементов и формироваться отметка для уникальных измерений других кубов-источников.


## Пример


Для выполнения примера предполагается наличие в репозитории виртуального
 куба с идентификатором «V_Cube». Виртуальный куб построен на двух кубах:


	- В первом кубе хранится различная информация по странам, в структуре
	 куба имеется измерение с идентификатором «COUNTRY». В структуре измерения
	 имеется уникальный индекс «ISO», созданный по атрибуту, который хранит
	 ISO-код страны.


	- Во втором кубе хранится информация по столицам стран, в структуре
	 куба имеется измерение с идентификатором «CAPITAL». В структуре измерения
	 имеется уникальный индекс «COUNTRY_ISO», созданный по атрибуту с ISO-кодами
	 стран, которым соответствует каждая из столиц.


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: IVirtualCube;

    VSource: IVirtualCubeSource;

    JoinList: IVirtualCubeDimensionJoinList;

    Joins: IVirtualCubeDimensionJoins;

    Dim: IDimensionModel;

    Index: IDimIndex;

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemByID("V_Cube").Edit As IVirtualCube;

    //Первый источник

    VSource := Cube.Sources.Item(0);

    Dim := VSource.Cube.Dimensions.FindById("COUNTRY");

    Index := Dim.Indexes.FindById("ISO");

    JoinList := VSource.JoinList;

    Joins := JoinList.Add(Dim, Index);

    //Второй источник

    VSource := Cube.Sources.Item(1);

    Dim := VSource.Cube.Dimensions.FindById("CAPITAL");

    Index := Dim.Indexes.FindById("COUNTRY_ISO");

    Joins.Add(VSource, Dim, Index);

    //Снятие фиксации измерения

    VSource.FixInfo.Item(1).Fixed := False;

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера будет осуществлено сопоставление измерениям «COUNTRY»
 с измерением «CAPITAL», сопоставление элементов в этих измерениям будет
 осуществляться по значениям атрибутов с ISO-кодами стран. При открытии
 куба отметка будет выставляться в измерении «COUNTRY», после чего соответствующая
 отметка будет формироваться и передаваться в измерение «CAPITAL».


См. также:


[IVirtualCubeSource](IVirtualCubeSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
