# IMsCalculationChainSystem.RemoveModel

IMsCalculationChainSystem.RemoveModel
-


# IMsCalculationChainSystem.RemoveModel


## Синтаксис


		RemoveModel(Model: [IMsModel](../IMsModel/IMsModel.htm));


## Параметры


Model. Удаляемая модель.


## Описание


Метод RemoveModel удаляет
 указанную модель из системы уравнений.


## Комментарии


Для добавления уравнения в систему используйте метод [IMsCalculationChainSystem.AddModel](IMsCalculationChainSystem.AddModel.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE, содержащего метамодель с
 идентификатором METAMODEL.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub RemoveModel;

		Var

		    mb: IMetabase;

		    MsObj: IMetabaseObjectDescriptor;

		    Meta: IMsMetaModel;

		    CalcChain, Models: IMsCalculationChainEntries;

		    ChainEntry: IMsCalculationChainEntry;

		    Model: IMsCalculationChainModel;

		    i, j, SysKey: Integer;

		    CalcSystem: IMsCalculationChainSystem;

		Begin

		    mb := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    MsObj := mb.ItemById("MODEL_SPACE");

		    // Получаем метамодель

		    Meta := mb.ItemByIdNamespace("METAMODEL", MsObj.Key).Edit As IMsMetaModel;

		    CalcChain := Meta.CalculationChain;

		    // Если цепочка расчёта содержит систему уравнений,

		    // то удаляем из системы все уравнения

		    SysKey := 0;

		    For i := 0 To CalcChain.Count - 1 Do

		        ChainEntry := CalcChain.Item(i);

		        If ChainEntry.Type = MsCalculationChainEntryType.System Then

		            CalcSystem := ChainEntry As IMsCalculationChainSystem;

		            SysKey := CalcSystem.Key;

		            Models := CalcSystem.Models;

		            For j := 0 To Models.Count - 1 Do

		                Model := Models.Item(j) As IMsCalculationChainModel;

		                CalcSystem.RemoveModel(Model.Model);

		            End For;

		        End If;

		    End For;

		    // Удаляем систему уравнений

		    If SysKey <> 0 Then

		        CalcChain.RemoveByKey(SysKey);

		    End If;

		    // Сохраняем изменения

		    (Meta As IMetabaseObject).Save;

		End Sub RemoveModel;


В результате выполнения примера, если в цепочке расчёта метамодели METAMODEL
 содержится система уравнений, то из неё будут удалены все уравнения, система
 уравнений также будет удалена.


См. также:


[IMsCalculation](IMsCalculationChainSystem.htm)[ChainSystem](IMsCalculationChainSystem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
