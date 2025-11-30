# IStandardCube.ExternalFactDimension

IStandardCube.ExternalFactDimension
-


# IStandardCube.ExternalFactDimension


## Синтаксис


ExternalFactDimension: Boolean;


## Описание


Свойство ExternalFactDimension
 определяет, будет ли использоваться в качестве измерения фактов существующий
 справочник репозитория.


## Комментарии


Если свойству ExternalFactDimension
 установлено значение True, то
 в кубе в качестве измерения фактов используется существующий справочник
 репозитория. Справочник должен быть включен в коллекцию
 измерений куба, для его идентификации в коллекции необходимо свойству
 [IStandardCubeDimension.FactDimension](../IStandardCubeDimension/IStandardCubeDimension.FactDimension.htm)
 установить значение True.


Если свойству ExternalFactDimension
 установлено значение False, то
 в кубе будет использоваться локальное измерение фактов. Локальное измерение
 фактов строится на базе конструируемого справочника, который создается
 автоматически в виде скрытого дочернего объекта куба. Для настройки конструируемого
 справочника и формирования дерева элементов необходимо получить измерение
 фактов в свойстве FactDimension,
 а затем привести его [структуру](../IStandardCubeDimension/IStandardCubeDimension.Dimension.htm)
 к интерфейсу [ICustomDimension](KeDims.chm::/interface/ICustomDimension/ICustomDimension.htm).


Вне зависимости от того, какой тип измерения фактов используется, в
 дальнейшем доступ к его параметрам осуществляется через свойство FactDimension.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «Std_Cube» и справочника с идентификатором «F_Dim».


			Sub UserProc;

Var

    MB: IMetabase;

    StdCub: IStandardCube;

    Dim: IDimensionModel;

    StDim: IStandardCubeDimension;

Begin

    MB := MetabaseClass.Active;

    StdCub := MB.ItemById("Std_Cube").Edit As IStandardCube;

    Dim := MB.ItemById("F_Dim").Bind As IDimensionModel;

    //Включение справочника в состав куба и назначение его в качестве измерения фактов

    StDim := StdCub.Dimensions.Add(Dim);

    StdCub.ExternalFactDimension := True;

    StDim.FactDimension := True;

    //Сохранение

    (StdCub As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в куб будет добавлен справочник "Dim_1".
 Данный справочник будет использоваться в качестве измерения фактов куба.


См. также:


[IStandardCube](IStandardCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
