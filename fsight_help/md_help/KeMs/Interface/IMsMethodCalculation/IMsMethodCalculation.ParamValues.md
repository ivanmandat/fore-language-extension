# IMsMethodCalculation.ParamValues

IMsMethodCalculation.ParamValues
-


# IMsMethodCalculation.ParamValues


## Синтаксис


ParamValues: [IMsModelParamValues](../IMsModelParamValues/IMsModelParamValues.htm);


## Описание


Свойство ParamValues
 возвращает коллекцию значений параметров расчета модели с помощью выбранного
 метода.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC_PARAM. В контейнере моделирования
 базы находится модель с идентификатором MODEL, входящая в метамодель с
 параметрами.


			Sub UserProc;

Var

    mb: IMetabase;

    Catalog: IRubricator;

    Transforms: IMetabaseObjectDescriptor;

    Model: IMsModel;

    parVals: IMsModelParamValues;

    parVal: IMsModelParamValue;

    i: Integer;

    Calculation: IMsMethodCalculation;

Begin

    mb := MetabaseClass.Active;

    Catalog := mb.ItemById("FC_PARAM").Bind As IRubricator;

    Transforms := Catalog.ModelSpace;

    Model := mb.ItemByIdNamespace("MODEL", Transforms.Key).Edit As IMsModel;

    Calculation := Model.Transform.CreateCalculation;

    parVals := Calculation.ParamValues;

    For i := 0 To parVals.Count - 1 Do

        parVal := parVals.Item(i);

        Debug.WriteLine("Параметр " + i.ToString + ":");

        Debug.WriteLine("  значение параметра: " + parVal.Value);

        Debug.WriteLine("  значение по умолчанию: " + parVal.DefaultValue);

        Debug.WriteLine("  является ли параметр скрытым: " + parVal.Hidden.ToString);

        Debug.WriteLine("  идентификатор параметра: " + parVal.Id);

        Debug.WriteLine("  ключ параметра: " + parVal.Key.ToString);

        Debug.WriteLine("  наименование параметра: " + parVal.Name);

        Debug.WriteLine("  справочник, на который ссылается параметр: " + parVal.LinkedObject.Name);

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены значения параметров
 метамодели, влияющие на модель.


См. также:


[IMsMethodCalculation](IMsMethodCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
