# IMsCalculationChainSystem.AddModel

IMsCalculationChainSystem.AddModel
-


# IMsCalculationChainSystem.AddModel


## Синтаксис


		AddModel(Model: [IMsModel](../IMsModel/IMsModel.htm));


## Параметры


Model. Добавляемая модель.


## Описание


Метод AddModel добавляет
 указанную модель в систему уравнений.


## Комментарии


Допускается добавление следующих видов уравнений:


	- [детерминированное
	 уравнение](../IMsDeterministicTransform/IMsDeterministicTransform.htm);


	- [линейная
	 регрессия (оценка МНК)](../IMsLinearRegressionTransform/IMsLinearRegressionTransform.htm);


	- [нелинейная
	 регрессия (оценка нелинейным МНК)](../IMsNonLinearRegressionTransform/IMsNonLinearRegressionTransform.htm);


	- [модель коррекции
	 ошибок](../IMsECMEquation/IMsECMEquation.htm).


Для удаления уравнения из системы используйте метод [IMsCalculationChainSystem.RemoveModel](IMsCalculationChainSystem.RemoveModel.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE, содержащего метамодель с
 идентификатором METAMODEL и модель детерминированного уравнения с идентификатором
 MODEL_DETERM. Модель не должна входит в цепочку расчёта метамодели.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub AddModel;

		Var

		    mb: IMetabase;

		    MsObj: IMetabaseObjectDescriptor;

		    Meta: IMsMetaModel;

		    CalcChain: IMsCalculationChainEntries;

		    ChainEntry: IMsCalculationChainEntry;

		    Model: IMsModel;

		    i: Integer;

		    CalcSystem: IMsCalculationChainSystem;

		Begin

		    mb := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    MsObj := mb.ItemById("MODEL_SPACE");

		    // Получаем метамодель

		    Meta := mb.ItemByIdNamespace("METAMODEL", MsObj.Key).Edit As IMsMetaModel;

		    CalcChain := Meta.CalculationChain;

		    // Если цепочка расчёта содержит систему уравнений,

		    // то добавляем уравнение в систему

		    For i := 0 To CalcChain.Count - 1 Do

		        ChainEntry := CalcChain.Item(i);

		        If ChainEntry.Type = MsCalculationChainEntryType.System Then

		            CalcSystem := ChainEntry As IMsCalculationChainSystem;

		            Model := mb.ItemByIdNamespace("MODEL_DETERM", MsObj.Key).Edit As IMsModel;

		            CalcSystem.AddModel(Model);

		        End If;

		    End For;

		    // Сохраняем изменения

		    (Meta As IMetabaseObject).Save;

		End Sub AddModel;


В результате выполнения примера, если цепочка расчёта метамодели METAMODEL
 содержит систему уравнений, то в неё будет добавлена модель MODEL_DETERM.


См. также:


[IMsCalculation](IMsCalculationChainSystem.htm)[ChainSystem](IMsCalculationChainSystem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
