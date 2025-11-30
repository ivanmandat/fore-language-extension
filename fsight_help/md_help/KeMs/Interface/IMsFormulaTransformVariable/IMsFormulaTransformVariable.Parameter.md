# IMsFormulaTransformVariable.Parameter

IMsFormulaTransformVariable.Parameter
-


# IMsFormulaTransformVariable.Parameter


## Синтаксис


		Parameter: [IMsModelParamAttributes](../IMsModelParamAttributes/IMsModelParamAttributes.htm);


## Описание


Свойство Parameter определяет
 параметр, которому соответствует переменная.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В данном контейнере должна
 присутствовать модель с идентификатором MODEL.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    cm: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    InputsVar: IMsFormulaTransformVariables;

		    Varabl: IMsFormulaTransformVariable;

		    i: Integer;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    cm := mb.ItemById("CONT_MODEL");

		    // Получаем модель

		    Model := mb.ItemByIdNamespace("MODEL", cm.Key).Bind As IMsModel;

		    // Настраиваем параметры модели

		    Transform := Model.Transform;

		    // Настраиваем переменные метода

		    InputsVar := Transform.Inputs;

		    Debug.WriteLine("Переменные, которые являются параметрами:");

		    For i := 0 To InputsVar.Count - 1 Do

		        Varabl := InputsVar.Item(i);

		        If Varabl.Parameter.Parameter.Id <> "" Then

		            Debug.WriteLine("  " + Varabl.Id);

		        End If;

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведены идентификаторы
 переменных, которые являются параметрами.


См. также:


[IMsFormulaTransformVariable](IMsFormulaTransformVariable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
