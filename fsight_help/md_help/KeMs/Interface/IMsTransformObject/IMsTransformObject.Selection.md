# IMsTransformObject.Selection

IMsTransformObject.Selection
-


# IMsTransformObject.Selection


## Синтаксис


Selection: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);


## Описание


Свойство Selection определяет
 отметку элементов, соответствующую данному объекту.


## Комментарии


Для задания описания объекта репозитория, соответствующего данному объекту,
 используйте свойство [IMsTransformObject.Descriptor](IMsTransformObject.Descriptor.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего метамодель с идентификатором
 «META_OBJLIST» и модели с идентификаторами «DEFAULT_MODEL», «MODEL_LINEAR».
 Также в репозитории предполагается наличие справочника НСИ с идентификатором
 «MDM_DICT_OL», расположенного вне репозитория НСИ.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    msKey: Integer;

    pMetaModel: IMsMetaModel;

    pDimInstance: IDimInstance;

    pSelection: IDimSelection;

    paramMeta: IMsModelParam;

    params: IMsModelParams;

    calcChain: IMsCalculationChainEntries;

    branch: IMsCalculationChainBranch;

    cas: IMsBranchCase;

    model: IMsModel;

    CondEx: IMsBranchConditionExpression;

    desc: IMetabaseObjectDescriptor;

    trObj: IMsTransformObject;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем ключ контейнера моделирования

    msKey := mb.GetObjectKeyById("MS");

    // Получаем метамодель

    pMetaModel := mb.ItemByIdNamespace("META_OBJLIST", msKey).Edit As IMsMetaModel;

    // Получаем коллекцию параметров метамодели

    params := pMetaModel.Params;

    // Очищаем коллекцию

    params.Clear;

    // Добавляем новый параметр

    paramMeta := params.Add;

    // Задаем наименование параметра

    paramMeta.Name := "COUNTRY";

    // Получаем справочник НСИ

    desc := mb.ItemById("MDM_DICT_OL");

    // Указываем, что значения данного справочника определяют значения параметра

    paramMeta.LinkedObject := desc.Bind;

    // Получаем цепочку расчета метамодели

    calcChain := pMetaModel.CalculationChain;

    // Очищаем цепочку расчета

    calcChain.Clear;

    // Создаем условие в цепочке расчета

    branch := calcChain.AddBranch("Условие");

    // Получаем модель

    model := mb.ItemByIdNamespace("DEFAULT_MODEL", msKey).Bind As IMsModel;

    // Указываем, что данная модель рассчитывается, если не выполняется ни одна из веток условия

    branch.DefaultContents.AddModel(model);

    // Задаем параметр цикла

    branch.Parameter := paramMeta;

    // Добавляем ветку условия

    cas := branch.CaseList.Add;

    // Задаем модель, которая будет рассчитана при выполнении данной ветки условия

    model := mb.ItemByIdNamespace("MODEL_LINEAR", msKey).Bind As IMsModel;

    cas.Contents.AddModel(model);

    // Добавляем условие для расчета ветки

    CondEx := cas.Conditions.Add(MsBranchConditionType.Expression) As IMsBranchConditionExpression;

    // Добавляем справочник НСИ в коллекцию объектов, используемых для расчета ветки условия

    trObj := CondEx.Transform.ObjectList.Add(desc);

    // Получаем экземпляр справочника НСИ

    pDimInstance := desc.Open(Null) As IDimInstance;

    // Создаем отметку в данном справочнике

    pSelection := pDimInstance.CreateSelection;

    // Выделяем элемент

    pSelection.SelectElement(1, False);

    // Добавляем отметку справочника НСИ в коллекцию объектов, используемых для расчета ветки условия

    trObj.Selection := pSelection;

    // Задаем условие расчета ветки

    condex.Expression.AsString := "{COUNTRY}=@__" + trObj.Key.ToString;

    // Сохраняем метамодель

    (pMetaModel As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в метамодели будет создан параметр,
 значение которого определяется элементом справочника «MDM_DICT_OL». Также
 в метамодель будет добавлен цикл, зависящий от данного параметра: если
 значение параметра совпадает со вторым элементом справочника, то будет
 рассчитана модель «MODEL_LINEAR», иначе - модель «DEFAULT_MODEL».


См. также:


[IMsTransformObject](IMsTransformObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
