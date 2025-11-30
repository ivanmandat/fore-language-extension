# IAdoMdDimensionInstance.DimensionInstance

IAdoMdDimensionInstance.DimensionInstance
-


# IAdoMdDimensionInstance.DimensionInstance


## Синтаксис


DimensionInstance: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Описание


Свойство DimensionInstance возвращает
 экземпляр справочник, описываемый интерфейсом [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm).


## Пример


Для выполнения примера предполагается наличие формы и расположенных
 на ней компонентов UiDimension
 и DimensionTree с наименованиями
 «UiDimension1» и «DimensionTree1» соответственно. В репозитории имеется
 каталог ADOMD с идентификатором «ADOMDTest». В каталоге имеется справочник
 ADOMD с идентификатором «TestDim».


			Class TESTForm: Form

    UiDimension1: UiDimension;

    DimensionTree1: DimensionTree;


    Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

    Var

        MB: IMetabase;

        ADOMDDim: IAdoMdDimensionInstance;

        DimInst: IDimInstance;

    Begin

        MB := MetabaseClass.Active;

        ADOMDDim := MB.ItemByIdNamespace("TestDim", MB.GetObjectKeyById("ADOMDTest")).Open(Null) As IAdoMdDimensionInstance;

        UiDimension1.Active := False;

        UiDimension1.Instance := ADOMDDim.DimensionInstance;

        DimensionTree1.Dimension := UiDimension1;

    End Sub TESTFormOnCreate;


End Class TESTForm;


При запуске формы будет получен открытый экземпляр справочника ADOMD.
 Данный экземпляр будет загружен в компонент «UiDimension1», который будет
 установлен в качестве источника данных для «DimensionTree1».


См. также:


[IAdoMdDimensionInstance](IAdoMdDimensionInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
