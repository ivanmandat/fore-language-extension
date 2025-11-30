# IMsFormulaTransformVariable.DimAttributeId

IMsFormulaTransformVariable.DimAttributeId
-


# IMsFormulaTransformVariable.DimAttributeId


## Синтаксис


DimAttributeId: String;


## Описание


Свойство DimAttributeId
 определяет идентификатор атрибута справочника, на который ссылается переменная.


## Комментарии


Для корректной работы необходимо указать идентификатор атрибута временных
 рядов, ссылающийся на справочник, которому принадлежит атрибут. Для этого
 используйте свойство [IMsFormulaTransformVariable.AttributeId](IMsFormulaTransformVariable.AttributeId.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего модель с идентификатором
 «MODEL_DIMATTRID». Данная модель должна содержать фактор, основанный на
 базе данных временных рядов, содержащей пользовательский атрибут временных
 рядов с идентификатором «CITY». Данный атрибут должен быть ссылкой на
 справочник, содержащий атрибут «KEY».


			Sub UserProc;

Var

    mb: IMetabase;

    MSKey: Integer;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    InpVar: IMsFormulaTransformVariable;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем ключ контейнера моделирования

    MSKey := mb.GetObjectKeyById("MS");

    // Получаем модель

    Model := mb.ItemByIdNamespace("MODEL_DIMATTRID", MSKey).Edit As IMsModel;

    // Получаем параметры модели

    Transform := Model.Transform;

    // Получаем фактор модели

    InpVar := Transform.Inputs.Item(0);

    // Задаем атрибут, на справочник которого будет ссылаться фактор

    InpVar.AttributeId := "CITY";

    // Задаем атрибут справочника, на который будет ссылаться фактор

    InpVar.DimAttributeId := "KEY";

    // Сохраняем изменения

    (Model As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера значение первого фактора модели будет
 определяться значением атрибута «KEY» из справочника, на который ссылается
 атрибут временных рядов «CITY».


См. также:


[IMsFormulaTransformVariable](IMsFormulaTransformVariable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
