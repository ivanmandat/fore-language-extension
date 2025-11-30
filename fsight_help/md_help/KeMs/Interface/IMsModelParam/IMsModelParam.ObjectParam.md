# IMsModelParam.ObjectParam

IMsModelParam.ObjectParam
-


# IMsModelParam.ObjectParam


## Синтаксис


		ObjectParam: [IMetabaseObjectParam](KeSom.chm::/Interface/IMetabaseObjectParam/IMetabaseObjectParam.htm);


## Описание


Свойство ObjectParam определяет
 параметр, с которым будет связан текущий параметр метамодели.


## Комментарии


В качестве значения свойства указывается параметр объекта, описываемый
 интерфейсом [IMetabaseObjectParam](KeSom.chm::/Interface/IMetabaseObjectParam/IMetabaseObjectParam.htm).
 Параметр должен быть создан в метаданных метамодели в коллекции [IMetabaseObjectDescriptor.Params](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Params.htm).
 Между параметрами метамодели и задачи может быть настроено управление
 параметрами через стандартный механизм [IMetabaseObjectParams.ControlInfo](KeSom.chm::/Interface/IMetabaseObjectParams/IMetabaseObjectParams.ControlInfo.htm).


Пример открытия задачи с параметрами приведён в подразделе «[Открытие
 задачи с параметрами](../../Samples/open_with_params.htm)».


## Пример


Для выполнения примера предполагается наличие в репозитория контейнера
 моделирования с идентификатором «CONT_MODEL». В контейнере создана задача
 с идентификатором «PROBLEM» и метамодель с идентификатором «METAMODEL».


Добавьте ссылки на системные сборки:


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    ProblemDesc, MetaModelDesc: IMetabaseObjectDescriptor;

		    pParam, mParam: IMetabaseObjectParam;

		    MetaModel: IMsMetaModel;

		    Control: IMetabaseObjectControl;

		    ParamControl: IMetabaseObjectParamControl;

		    ModelParam: IMsModelParam;

		Begin

		    Mb := MetabaseClass.Active;

		    // Создание параметра у метамодели

		    MetaModelDesc := Mb.ItemByIdNamespace("METAMODEL", Mb.GetObjectKeyById("CONT_MODEL")).EditDescriptor;

		    MetaModelDesc.Params.Clear;

		    mParam := MetaModelDesc.Params.Add;

		    mParam.Id := "ADDITIONAL";

		    mParam.Name := "Дополнительное значение";

		    MetaModelDesc.SaveDescriptor;

		    // Создание параметра у задачи

		    ProblemDesc := Mb.ItemByIdNamespace("PROBLEM", Mb.GetObjectKeyById("CONT_MODEL")).EditDescriptor;

		    ProblemDesc.Params.Clear;

		    pParam := ProblemDesc.Params.Add;

		    pParam.Id := "ADDITIONAL";

		    pParam.Name := "Дополнительное значение";

		    // Настройка управления параметром метамодели через параметр задачи

		    Control := ProblemDesc.Params.ControlInfo.FindByKey(MetaModelDesc.Key);

		    ParamControl := Control.FindByKey(pParam.Key);

		    ParamControl.Expression.AsString := ":" + ParamControl.ControlledParam.Id;

		    ProblemDesc.SaveDescriptor;

		    // Задание параметра для передачи значения в метамодель

		    MetaModel := MetaModelDesc.Edit As IMsMetaModel;

		    MetaModel.Params.Clear;

		    ModelParam := MetaModel.Params.Add;

		    ModelParam.Id := "ADDITIONAL";

		    ModelParam.Name := "Дополнительное значение";

		    ModelParam.ObjectParam := mParam;

		    (MetaModel As IMetabaseObject).Save;

		End Sub UserProc;


При выполнении примера для задачи и метамодели будет создан параметр.
 Параметр метамодели будет управляться параметром задачи. Значение параметра,
 которое будет указываться при открытии задачи, будет передаваться в метамодель
 и в дальнейшем может использоваться при расчёте.


См. также:


[IMsModelParam](IMsModelParam.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
