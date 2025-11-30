# IAutoCubeSourceDimensionFix.Dimension

IAutoCubeSourceDimensionFix.Dimension
-


# IAutoCubeSourceDimensionFix.Dimension


## Синтаксис


Dimension: [IDimensionModel](kedims.chm::/interface/idimensionmodel/idimensionmodel.htm);


## Описание


Свойство Dimension возвращает
 справочник, который соответствует фиксированному измерению куба-источника.


## Пример


Для выполнения примера в репозитории предполагается наличие автоматического
 куба с идентификатором AUTO_CUBE.


			Sub UserProc;

Var

    MB: IMetabase;

    AutoCube: IAutoCube;

    Source: IAutoCubeSource;

Begin

    MB := MetabaseClass.Active;

    AutoCube := MB.ItemById("AUTO_CUBE").Bind As IAutoCube;

    Source := AutoCube.Source;

    If Source <> Null Then

        If Source.FixInfo.Count <> 0 Then

            Debug.WriteLine((Source.FixInfo.Item(0).Dimension As IMetabaseObject).Id);

        End If;

    End If;

End Sub UserProc;


После выполнения примера, если у автоматического куба имеется куб-источник
 и у куба-источника есть фиксированные измерения, то в консоль будет выведен
 идентификатор справочника, лежащего в основе этого измерения.


См. также:


[IAutoCubeSourceDimensionFix](IAutoCubeSourceDimensionFix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
