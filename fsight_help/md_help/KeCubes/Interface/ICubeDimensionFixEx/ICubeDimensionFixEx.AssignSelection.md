# ICubeDimensionFixEx.AssignSelection

ICubeDimensionFixEx.AssignSelection
-


# ICubeDimensionFixEx.AssignSelection


## Синтаксис


AssignSelection(Source: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);
 DimElement: Integer);


## Параметры


Source. Отметка, которую необходимо
 установить в фиксированном измерении.


DimElement. Индекс элемента,
 который необходимо отметить.


## Описание


Метод AssignSelection изменяет
 отметку в фиксированном измерении в соответствии с передаваемыми параметрами.


## Комментарии


Если в качестве значения параметра DimElement
 передается значение «-1», то для фиксированного измерения будет установлена
 отметка Source. Если передается
 индекс конкретного элемента, то отметка Source будет сброшена и будет
 отмечен только элемент с индексом DimElement.


## Пример


Для выполнения примера предполагается наличие в репозитории виртуального
 куба с идентификатором «V_Cube». В виртуальном кубе в первом кубе-источнике
 имеется параметрическое измерение «Dim_P», которое необходимо зафиксировать
 при определенных значениях параметров измерения. Параметры этого измерения
 не связаны с параметрами виртуального куба.


			Sub UserProc;

Var

    MB: IMetabase;

    VirtCub: IVirtualCube;

    Source: IVirtualCubeSource;

    ControlInfo: IMetabaseObjectControlInfo;

    DimObj: IMetabaseObject;

    Params: IMetabaseObjectParamValues;

    Dim: IDimInstance;

    Sel: IDimSelection;

    Fix: ICubeDimensionFix;

    FixEx: ICubeDimensionFixEx;

    ParamValue: Integer = 100;

Begin

    MB := MetabaseClass.Active;

    //Открываем куб на редактирование

    VirtCub := MB.ItemById("V_Cube").Edit As IVirtualCube;

    //Получаем источник куба

    Source := VirtCub.Sources.Item(0);

    //Меняем значение параметра в управлении параметрами вложенных объектов

    ControlInfo := (VirtCub As IMetabaseObject).Params.ControlInfo;

    ControlInfo.Item(0).Item(0).Expression.AsString := ParamValue.ToString;

    //Получаем параметрическое измрение источника

    DimObj := Source.Cube.Dimensions.FindById("Dim_P") As IMetabaseObject;

    //Параметры для открытия экземпляра измерения

    Params := DimObj.Params.CreateEmptyValues;

    Params.Item(0).Value := ParamValue;

    Dim := DimObj.Open(Params) As IDimInstance;

    //Создаем отметку на базе нового экземпляра измерения

    Sel := Dim.CreateSelection;

    Sel.MultiSelect := True;

    Sel.SelectElement(0, False);

    Sel.SelectElement(1, False);

    Sel.SelectElement(2, False);

    //Получаем параметры фиксации измерения

    Fix := Source.FixInfo.FindByKey(DimObj.Key);

    FixEx := Fix As ICubeDimensionFixEx;

    //Обновляем отметку фиксированного параметрического измерения

    FixEx.AssignSelection(Sel, -1);

    Fix.Fixed := True;

    //Сохраняем куб

    (VirtCub As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера будет изменена отметка фиксированного параметрического
 измерения в виртуальном кубе: будут отмечены первые три элемента в измерении.
 Измерение при этом открывается с заданным значением параметра. Для того,
 чтобы сохранить функционирование виртуального куба, значение параметра
 также сохраняется в управлении параметрами вложенных объектов.


См. также:


[ICubeDimensionFixEx](ICubeDimensionFixEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
