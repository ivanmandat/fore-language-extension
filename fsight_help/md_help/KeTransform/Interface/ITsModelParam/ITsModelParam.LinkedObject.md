# ITsModelParam.LinkedObject

ITsModelParam.LinkedObject
-


# ITsModelParam.LinkedObject


## Синтаксис


LinkedObject: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство LinkedObject определяет
 справочник, используемый для определения значения параметра.


## Комментарии


Для определения типа параметра используйте свойство [ITsModelParam.ParamType](ITsModelParam.ParamType.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB», содержащий обязательный атрибут
 рядов с идентификатором «CITY». Данный атрибут является ссылкой на справочник.
 Внутренний контейнер моделирования базы данных временных рядов должен
 содержать метамодель с идентификатором «METAMODEL». Данная метамодель
 должна содержать в цепочке расчета только модель, основанную на атрибутах
 базы данных временных рядов «TSDB».


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Metabase,
 Ms, Rds, Transfrom.


			Sub MetaModelParams;

Var

    mb: IMetabase;

    TSDB: IRubricator;

    Ms: IMetabaseObjectDescriptor;

    MetaModel: IMsMetaModel;

    Params: ITsModelParams;

    Param: ITsModelParam;

    Atts: IMetaAttributes;

    Dict: IMetabaseObjectDescriptor;

    DimInst: IDimInstance;

    Model: IMsModel;

    Slices: IMsFormulaTransformSlices;

    ParamDim: IMsParametrizedDimension;

Begin

    mb := MetabaseClass.Active;

    // Получаем БД временных рядов

    TSDB := mb.ItemById("TSDB").Bind As IRubricator;

    // Получаем атрибуты временных рядов

    Atts := TSDB.Facts.Attributes;

    // Получаем справочник, определяющий значения атрибута CITY

    Dict := Atts.FindById("CITY").ValuesObject;

    DimInst := Dict.Open(Null) As IDimInstance;

    // Получаем внутренний контейнер моделирования

    Ms := TSDB.ModelSpace;

    // Получаем метамодель

    MetaModel := mb.ItemByIdNamespace("METAMODEL", Ms.Key).Edit As IMsMetaModel;

    // Получаем коллекцию параметров метамодели

    Params := MetaModel.Params As ITsModelParams;

    // Очищаем коллекцию

    Params.Clear;

    // Добавляем параметр

    Param := Params.Add;

    // Задаем настройки параметра

    Param.Name := "Город";

    Param.Id := "CITY_PARAM";

    Param.Hidden := False;

    Param.DataType := DbDataType.Integer;

    // Задаем справочник, значения которого используются в качестве значений параметра

    Param.LinkedObject := Dict;

    // Задаем значение по умолчанию

    Param.DefaultValue := DimInst.Elements.Elements.Element(0);

    // Указываем атрибут справочника, который будет использоваться для восстановления отметки

    Param.SelectionAttrID := "KEY";

    // Сохраняем метамодель

    (MetaModel As IMetabaseObject).Save;

    // Получаем первую модель в цепочке расчета метамодели

    Model := (MetaModel.CalculationChain.Item(0) As IMsCalculationChainModel).EditModel;

    // Получаем срез моделируемой переменной

    Slices := Model.Transform.Outputs.Item(0).Slices;

    // Устанавливаем параметр для атрибута, определяющий значения атрибута CITY

    ParamDim := Slices.Item(0).ParametrizedDimensions.FindById(Dict.Id);

    ParamDim.Parameter := Param As IMsModelParam;

    // Сохраняем изменения в модели

    (Model As IMetabaseObject).Save;

End Sub MetaModelParams;


Результат выполнения примера: в метамодель «METAMODEL» добавлен параметр,
 значения которого определяются элементами справочника, используемого атрибутом
 рядов «CITY». Для параметра задано значение по умолчанию. Данный параметр
 будет использоваться в модели, содержащейся в метамодели «METAMODEL»,
 для задания значения атрибута «CITY» моделируемой переменной.


См. также:


[ITsModelParam](ITsModelParam.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
