# IMsSelectionControl.GetStubSel

IMsSelectionControl.GetStubSel
-


# IMsSelectionControl.GetStubSel


## Синтаксис


GetStubSel(Stub: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm),
 [Full: Boolean = false,] [ParamValues: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm)
 = Null]): [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Параметры


Stub. Источник данных;


Full. Способ получения измерений
 источника данных;


ParamValues.
 Коллекция значений параметров измерений.


## Описание


Метод GetStubSel возвращает
 список измерений источника данных.


## Комментарии


Допустимые значения параметра Full:


	- True. Управляющие и
	 управляемые измерения содержат всевозможные наборы элементов с учётом
	 настроек, заданных для параметризации;


Важно.
 Использование параметра со значением True
 может привести к снижению производительности и продолжительному выполнению
 метода в зависимости от количества элементов измерений.


	- False. По умолчанию.
	 Управляющие и управляемые измерения содержат наборы элементов без
	 учёта настроек, заданных для параметризации. В этом случае управляемые
	 измерения будут пустыми до применения отметки элементов управляющего
	 измерения;


Параметр ParamValues по умолчанию
 принимает значение Null.


При использовании метода для источника данных выполняется сортировка
 измерений: сначала возвращаются управляющие измерения, затем управляемые.


Для управления отметками управляющих и управляемых измерений:


	- Задайте свойству [IMsSelectionControl.IsActive](IMsSelectionControl.IsActive.htm)
	 значение True для управления
	 параметрами измерений источника данных.


	- Получите список измерений с помощью метода IMsSelectionControl.GetStubSel.


	- Задайте отметку управляющего измерения с помощью класса [DimSelectionSetFactory](KeDims.chm::/Class/DimSelectionSetFactory/DimSelectionSetFactory.htm)
	 и методов [IDimSelectionSetFactory.CreateDimSelectionSet](KeDims.chm::/interface/IDimSelectionSetFactory/IDimSelectionSetFactory.CreateDimSelectionSet.htm),
	 [IDimSelectionSet.Add](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.Add.htm),
	 [IDimSelection.SelectElement](KeDims.chm::/interface/IDimSelection/IDimSelection.SelectElement.htm).


	- Примените отметку элементов управляющего измерения для изменения
	 набора элементов управляемых измерений с помощью метода [IMsSelectionControl.Apply](IMsSelectionControl.Apply.htm).


После выполнения действий будет изменен набор элементов управляемых
 измерений за счёт отметки элементов управляющего измерения.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором STD_CUBE, в котором содержатся [управляющие
 измерения](uinavobj.chm::/cube/createcube/master_calculation/uimd_cube_createcube_master_calculation_managed_dim.htm). Например, измерение А содержит [параметр](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Parameters.htm),
 а измерение B управляет измерением А с помощью настроенной [связи](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Link.htm),
 в которой задан [атрибут](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Attributes.htm),
 передающий значение параметру измерения А.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    Stub: IVariableStub;

    SelControl: IMsSelectionControl;

    SelSet, SelSetNew: IDimSelectionSet;

    Sel: IDimSelection;

    Factory: IDimSelectionSetFactory;

Begin

    MB := MetabaseClass.Active;

    // Получим стандартный куб

    Stub := MB.ItemById("STD_CUBE").Bind As IVariableStub;

    // Создадим класс для управления параметрами измерений

    SelControl := New MsSelectionControl.Create;

    SelControl.IsActive := True;

    Debug.WriteLine("До применения отметки элементов управляющего измерения:");

    // Получим список всех элементов измерений источника данных

    SelSet := SelControl.GetStubSel(Stub, True);

    // Выведем в консоль наименование измерений и список элементов

    PrintSelectionSet(SelSet);

    // Зададим отметку управляющего измерения

    Factory := New DimSelectionSetFactory.Create;

    SelSetNew := Factory.CreateDimSelectionSet;

    Sel := SelSetNew.Add(SelSet.Item(0).Dimension);

    // Отметим второй и четвертый элементы

    Sel.SelectElement(1, False);

    Sel.SelectElement(3, False);

    // Применим заданную отметку для управляемых измерений

    SelSetNew := SelControl.Apply(Stub, SelSetNew);

    Debug.WriteLine("После применения отметки элементов управляющего измерения:");

    // Выведем в консоль наименование измерений и список элементов

    PrintSelectionSet(SelSetNew);

End Sub UserProc;

Sub PrintSelectionSet(SelSet: IDimSelectionSet);

Var

    Copy: IDimSelectionSet;

    Sel: IDimSelection;

Begin

    Copy := SelSet.CreateCopy;

    For Each Sel In Copy Do

        Sel.SelectAll;

        Debug.WriteLine("Измерение: " + Sel.Dimension.Name + "," + " Элементы: " + Sel.ToString);

    End For;

    Debug.WriteLine("");

End Sub PrintSelectionSet;


В результате выполнения примера будут отмечены элементы управляющего
 измерения и изменены наборы элементов управляемых измерений. В консоль
 будут выведены наименования всех измерений в кубе и списки элементов каждого
 измерения до отметки управляющего измерения и после.


См. также:


[IMsSelectionControl](IMsSelectionControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
