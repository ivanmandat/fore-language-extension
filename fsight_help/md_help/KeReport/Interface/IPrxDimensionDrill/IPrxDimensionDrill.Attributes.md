# IPrxDimensionDrill.Attributes

IPrxDimensionDrill.Attributes
-


# IPrxDimensionDrill.Attributes


## Синтаксис


Attributes: String;


## Описание


Свойство Attributes определяет
 атрибуты, значения которых будут использоваться для поиска значения в
 индексе.


## Комментарии


Данное свойство необходимо использовать, когда индекс, определенный
 свойством [IPrxDimensionDrill.Index](IPrxDimensionDrill.Index.htm),
 имеет привязку к нескольким атрибутам. Необходимо указывать атрибуты измерения,
 для которого производится настройка расшифровки и элементы которого будут
 гиперссылками. По значению данных атрибутов будет производиться поиск
 значений атрибутов индекса, [IPrxDimensionDrill.Index](IPrxDimensionDrill.Index.htm),
 тем самым будет установлено соответствие между элементами измерений.


Идентификаторы атрибутов должны быть указаны через «;».


## Пример


В рассматриваемом примере предполагается существование объекта Report типа IPrxReport.


	Sub UserProc;

	Var

	   Report : IPrxReport;

	   DI : IPrxDataIsland;

	    DIC : IPrxDataIslandDimensionCommon;

	    Drill : IPrxDimensionDrill;

	    DimMode : IPrxSliceDimension;

	    Dim : IDimensionModel;

	Begin

	    DI := Report.DataIslands.FindById("DATAISLAND").Edit;

	        Dim := DI.Slice.Dimensions.FindById("D_TO1").Dimension.Dimension;

	        DIC := DI.Properties.Dimension(Dim);

	        DIC.Drilled := TriState.OnOption;

	        Drill := DIC.Drill;

	        Drill.Mode := PrxDataDrillMode.Replace;

	        DimMode := Report.DataSources.Item(0).Slices.Item(1).Dimensions.FindById("D_TO1");

	        Drill.Dimension := DimMode;

	        Drill.Index := DimMode.Dimension.Dimension.Indexes.PrimaryIndex;

	        Drill.Attributes := Dim.Attributes.Id.Id;

	        Drill.Sheet := Null;

	        Drill.Action := "#Лист2!PrxChart1";

	    DI.Save;

	End Sub UserProc;


После выполнения примера для области данных будет
 настроена расшифровка. При нажатии на гиперссылку будет производиться
 позиционирование на диаграмме, которая расположена на втором листе отчета.


См. также:


[IPrxDimensionDrill.Attribute](IPrxDimensionDrill.Attribute.htm)
 | [IPrxDimensionDrill](IPrxDimensionDrill.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
